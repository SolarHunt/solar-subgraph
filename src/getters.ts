import { BigInt } from "@graphprotocol/graph-ts";
import { Charity } from "../generated/schema";
import { ZERO } from "./constants";

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