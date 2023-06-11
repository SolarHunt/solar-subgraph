import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  TreasureHunt,
  DepositToParticipateDone,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TreasureHuntClaimed,
  TreasureHuntClosed,
  TreasureHuntDetailedUpdated,
  WithdrawDone,
  treasureHuntCreated,
} from "../../generated/TreasureHunt/TreasureHunt";
import {   getOrSetTreasureHunt } from "../getters"
import { ONE, ZERO } from "../constants";
import { Player } from "../../generated/schema";

export function handleDepositToParticipateDone(
  event: DepositToParticipateDone
): void {
  // let player: Player = getOrSetPlayer(event.params.playerAddress)
  let treasureHunt = getOrSetTreasureHunt(event.params.treasureHuntId)
  treasureHunt.depositAmount.plus(event.params.amountDeposit)
  treasureHunt.numParticipants.plus(ONE)
  treasureHunt.players = addToArray(treasureHunt.players, event.params.playerAddress.toHex())
  treasureHunt.save()

  // player.treasureHuntId = treasureHunt.id
  // player.depositAmount = event.params.amountDeposit
  // player.save()
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTreasureHuntClaimed(event: TreasureHuntClaimed): void {}

export function handleTreasureHuntClosed(event: TreasureHuntClosed): void {}

export function handleTreasureHuntDetailedUpdated(
  event: TreasureHuntDetailedUpdated
): void {}

export function handleWithdrawDone(event: WithdrawDone): void {}

export function handletreasureHuntCreated(event: treasureHuntCreated): void {
  let treasureHunt = getOrSetTreasureHunt(event.params.id)
  treasureHunt.charityId = event.params.charityId.toString()
  treasureHunt.cid = event.params.treasureHuntCid
  treasureHunt.depositAmount = event.params.bountyAmount
  treasureHunt.charityId = event.params.charityId.toString()
  treasureHunt.secretCodeHash = event.params.secretCodeHash
  treasureHunt.status = event.params.status.toString()
  treasureHunt.numParticipants = ZERO
  treasureHunt.save()
}

function addToArray(arr: string[], value: string): string[] {
  if (arr.indexOf(value) === -1) {
    arr.push(value)
  }
  return arr
}