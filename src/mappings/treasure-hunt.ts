import { BigInt } from "@graphprotocol/graph-ts";
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
import { getOrSetTreasureHunt } from "../getters"
import { ZERO } from "../constants";

export function handleDepositToParticipateDone(
  event: DepositToParticipateDone
): void {
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
  treasureHunt.charityId
  treasureHunt.secretCodeHash = event.params.secretCodeHash
  treasureHunt.status = event.params.status.toString()
  treasureHunt.numParticipants = ZERO
  treasureHunt.save()
}


