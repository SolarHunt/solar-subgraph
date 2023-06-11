import { BigInt } from "@graphprotocol/graph-ts";
import { Charity, TreasureHunt } from "../generated/schema";
import { ZERO, ZERO_ADDRESS } from "./constants";

export function getOrSetCharity(charityId: BigInt): Charity {
    let charity = Charity.load(charityId.toString())
    if (!charity) {
      charity = new Charity(charityId.toString())
      charity.cid = ""
      charity.createdAt = ZERO
      charity.updatedAt = ZERO
      charity.charityGain = ZERO
      charity.name = ""
      charity.save()
    }
    return charity
}



export function getOrSetTreasureHunt(treasureHuntId: BigInt): TreasureHunt {
  let treasureHunt = TreasureHunt.load(treasureHuntId.toString())
  if(!treasureHunt) {
    treasureHunt = new TreasureHunt(treasureHuntId.toString())
    treasureHunt.status = "Opened"
    treasureHunt.charityId = ""
    treasureHunt.depositAmount = ZERO
    treasureHunt.cid = ""
    treasureHunt.totalTreasureHuntDeposit = ZERO
    treasureHunt.numParticipants = ZERO
    treasureHunt.secretCodeHash = ZERO_ADDRESS 
    treasureHunt.save()
  }
  return treasureHunt
}