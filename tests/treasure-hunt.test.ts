import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { DepositToParticipateDone } from "../generated/TreasureHunt/TreasureHunt";
import { handleDepositToParticipateDone } from "../src/mappings/treasure-hunt";
import { createDepositToParticipateDoneEvent } from "./treasure-hunt-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let playerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let amountDeposit = BigInt.fromI32(234);
    let treasureHuntId = BigInt.fromI32(234);
    let newDepositToParticipateDoneEvent = createDepositToParticipateDoneEvent(
      playerAddress,
      amountDeposit,
      treasureHuntId
    );
    handleDepositToParticipateDone(newDepositToParticipateDoneEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "playerAddress",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "amountDeposit",
      "234"
    );
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "treasureHuntId",
      "234"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
