import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CharityGainUpdated as CharityGainUpdatedEvent,
  CidUpdated as CidUpdatedEvent,
  Mint as MintEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Transfer as TransferEvent
} from "../../generated/CharityID/CharityID"
import {
  Approval,
  ApprovalForAll,
  CharityGainUpdated,
  CidUpdated,
  Mint,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer
} from "../../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  // let entity = new Approval(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved
  // entity.tokenId = event.params.tokenId

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  // let entity = new ApprovalForAll(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.owner = event.params.owner
  // entity.operator = event.params.operator
  // entity.approved = event.params.approved

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleCharityGainUpdated(event: CharityGainUpdatedEvent): void {
  // let entity = new CharityGainUpdated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity._charityId = event.params._charityId
  // entity._charityGain = event.params._charityGain

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleCidUpdated(event: CidUpdatedEvent): void {
  // let entity = new CidUpdated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity._tokenId = event.params._tokenId
  // entity._newCid = event.params._newCid

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleMint(event: MintEvent): void {
  // let entity = new Mint(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity._charityAddress = event.params._charityAddress
  // entity.charityId = event.params.charityId
  // entity._charityName = event.params._charityName

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  // let entity = new RoleAdminChanged(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.role = event.params.role
  // entity.previousAdminRole = event.params.previousAdminRole
  // entity.newAdminRole = event.params.newAdminRole

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  // let entity = new RoleGranted(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.role = event.params.role
  // entity.account = event.params.account
  // entity.sender = event.params.sender

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  // let entity = new RoleRevoked(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.role = event.params.role
  // entity.account = event.params.account
  // entity.sender = event.params.sender

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  // let entity = new Transfer(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.tokenId = event.params.tokenId

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}
