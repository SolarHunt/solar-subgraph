import { BigInt } from "@graphprotocol/graph-ts"
import {
  // Approval as ApprovalEvent,
  // ApprovalForAll as ApprovalForAllEvent,
  CharityGainUpdated as CharityGainUpdatedEvent,
  CidUpdated as CidUpdatedEvent,
  Mint as MintEvent,
  // RoleAdminChanged as RoleAdminChangedEvent,
  // RoleGranted as RoleGrantedEvent,
  // RoleRevoked as RoleRevokedEvent,
  // Transfer as TransferEvent
} from "../../generated/CharityId/CharityId"
import { getOrSetCharity } from "../getters"
import { Charity } from "../../generated/schema"

// export function handleApproval(event: ApprovalEvent): void {
  
// }

// export function handleApprovalForAll(event: ApprovalForAllEvent): void {
// }

export function handleCharityGainUpdated(event: CharityGainUpdatedEvent): void {
  const charity = getOrSetCharity(event.params._charityId)
  charity.charityGain = event.params._charityGain
  charity.updatedAt = event.block.timestamp
  charity.save()
}

export function handleCidUpdated(event: CidUpdatedEvent): void {
  const charity = getOrSetCharity(event.params._tokenId)
  charity.cid = event.params._newCid
  charity.updatedAt = event.block.timestamp
}

export function handleMint(event: MintEvent): void {
  const charity = getOrSetCharity(event.params.charityId)
  charity.name = event.params._charityName
  charity.createdAt = event.block.timestamp
  charity.id =  event.params.charityId.toString()
  charity.updatedAt = event.block.timestamp
  charity.cid = ""
  charity.charityGain = new BigInt(78)
  charity.save()
}


// export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
// }

// export function handleRoleGranted(event: RoleGrantedEvent): void {
// }

// export function handleRoleRevoked(event: RoleRevokedEvent): void {
// }

// export function handleTransfer(event: TransferEvent): void {
// }
