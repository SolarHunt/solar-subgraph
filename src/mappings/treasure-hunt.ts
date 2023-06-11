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

export function handletreasureHuntCreated(event: treasureHuntCreated): void {}
