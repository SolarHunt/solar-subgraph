import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  DepositToParticipateDone,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TreasureHuntClaimed,
  TreasureHuntClosed,
  TreasureHuntDetailedUpdated,
  WithdrawDone,
  treasureHuntCreated
} from "../generated/TreasureHunt/TreasureHunt"

export function createDepositToParticipateDoneEvent(
  playerAddress: Address,
  amountDeposit: BigInt,
  treasureHuntId: BigInt
): DepositToParticipateDone {
  let depositToParticipateDoneEvent = changetype<DepositToParticipateDone>(
    newMockEvent()
  )

  depositToParticipateDoneEvent.parameters = new Array()

  depositToParticipateDoneEvent.parameters.push(
    new ethereum.EventParam(
      "playerAddress",
      ethereum.Value.fromAddress(playerAddress)
    )
  )
  depositToParticipateDoneEvent.parameters.push(
    new ethereum.EventParam(
      "amountDeposit",
      ethereum.Value.fromUnsignedBigInt(amountDeposit)
    )
  )
  depositToParticipateDoneEvent.parameters.push(
    new ethereum.EventParam(
      "treasureHuntId",
      ethereum.Value.fromUnsignedBigInt(treasureHuntId)
    )
  )

  return depositToParticipateDoneEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTreasureHuntClaimedEvent(
  treasureHuntId: BigInt,
  player: Address
): TreasureHuntClaimed {
  let treasureHuntClaimedEvent = changetype<TreasureHuntClaimed>(newMockEvent())

  treasureHuntClaimedEvent.parameters = new Array()

  treasureHuntClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "treasureHuntId",
      ethereum.Value.fromUnsignedBigInt(treasureHuntId)
    )
  )
  treasureHuntClaimedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )

  return treasureHuntClaimedEvent
}

export function createTreasureHuntClosedEvent(
  treasureHuntId: BigInt
): TreasureHuntClosed {
  let treasureHuntClosedEvent = changetype<TreasureHuntClosed>(newMockEvent())

  treasureHuntClosedEvent.parameters = new Array()

  treasureHuntClosedEvent.parameters.push(
    new ethereum.EventParam(
      "treasureHuntId",
      ethereum.Value.fromUnsignedBigInt(treasureHuntId)
    )
  )

  return treasureHuntClosedEvent
}

export function createTreasureHuntDetailedUpdatedEvent(
  treasureHuntId: BigInt,
  newTreasureHuntCid: string
): TreasureHuntDetailedUpdated {
  let treasureHuntDetailedUpdatedEvent = changetype<
    TreasureHuntDetailedUpdated
  >(newMockEvent())

  treasureHuntDetailedUpdatedEvent.parameters = new Array()

  treasureHuntDetailedUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "treasureHuntId",
      ethereum.Value.fromUnsignedBigInt(treasureHuntId)
    )
  )
  treasureHuntDetailedUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasureHuntCid",
      ethereum.Value.fromString(newTreasureHuntCid)
    )
  )

  return treasureHuntDetailedUpdatedEvent
}

export function createWithdrawDoneEvent(
  solarFundAddress: Address,
  amountWithdrawn: BigInt
): WithdrawDone {
  let withdrawDoneEvent = changetype<WithdrawDone>(newMockEvent())

  withdrawDoneEvent.parameters = new Array()

  withdrawDoneEvent.parameters.push(
    new ethereum.EventParam(
      "solarFundAddress",
      ethereum.Value.fromAddress(solarFundAddress)
    )
  )
  withdrawDoneEvent.parameters.push(
    new ethereum.EventParam(
      "amountWithdrawn",
      ethereum.Value.fromUnsignedBigInt(amountWithdrawn)
    )
  )

  return withdrawDoneEvent
}

export function createtreasureHuntCreatedEvent(
  status: i32,
  id: BigInt,
  charityId: BigInt,
  bountyAmount: BigInt,
  treasureHuntCid: string,
  secretCodeHash: Bytes
): treasureHuntCreated {
  let treasureHuntCreatedEvent = changetype<treasureHuntCreated>(newMockEvent())

  treasureHuntCreatedEvent.parameters = new Array()

  treasureHuntCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  treasureHuntCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  treasureHuntCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "charityId",
      ethereum.Value.fromUnsignedBigInt(charityId)
    )
  )
  treasureHuntCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "bountyAmount",
      ethereum.Value.fromUnsignedBigInt(bountyAmount)
    )
  )
  treasureHuntCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "treasureHuntCid",
      ethereum.Value.fromString(treasureHuntCid)
    )
  )
  treasureHuntCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "secretCodeHash",
      ethereum.Value.fromFixedBytes(secretCodeHash)
    )
  )

  return treasureHuntCreatedEvent
}
