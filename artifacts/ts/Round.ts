/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as RoundContractJson } from "../Round.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace RoundTypes {
  export type Fields = {
    prediction: HexString;
    epoch: bigint;
    priceStart: bigint;
    feesBasisPts: bigint;
    bidEndTimestamp: bigint;
    operator: Address;
    priceEnd: bigint;
    totalAmount: bigint;
    amountUp: bigint;
    amountDown: bigint;
    treasuryAmount: bigint;
    rewardAmount: bigint;
    rewardBaseCalAmount: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getEndRoundTime: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewardAmount: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewardBaseCalAmount: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRoundEpoch: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<RoundInstance, RoundTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as RoundTypes.Fields;
  }

  consts = {
    ErrorCodes: {
      InvalidCaller: BigInt(100),
      NotAllPlayerClaimed: BigInt(101),
      HouseWon: BigInt(102),
      RewardsAlreadyComputed: BigInt(103),
      BidTimestampNotReached: BigInt(104),
    },
  };

  at(address: string): RoundInstance {
    return new RoundInstance(address);
  }

  tests = {
    getEndRoundTime: async (
      params: Omit<TestContractParams<RoundTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getEndRoundTime", params);
    },
    getRewardAmount: async (
      params: Omit<TestContractParams<RoundTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getRewardAmount", params);
    },
    getRewardBaseCalAmount: async (
      params: Omit<TestContractParams<RoundTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getRewardBaseCalAmount", params);
    },
    getRoundEpoch: async (
      params: Omit<TestContractParams<RoundTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getRoundEpoch", params);
    },
    updateAmount: async (
      params: TestContractParams<
        RoundTypes.Fields,
        { from: Address; amount: bigint; up: boolean }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "updateAmount", params);
    },
    calculateRewards: async (
      params: TestContractParams<RoundTypes.Fields, { price: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "calculateRewards", params);
    },
    destroy: async (
      params: Omit<TestContractParams<RoundTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroy", params);
    },
    userClaimRewards: async (
      params: TestContractParams<
        RoundTypes.Fields,
        { addressPunter: Address; amountBid: bigint; upBid: boolean }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "userClaimRewards", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Round = new Factory(
  Contract.fromJson(
    RoundContractJson,
    "",
    "125462c48afcbdb3734d1ec6a0518cdf3744ad3c33bdd7643a3a78a5c202b323"
  )
);

// Use this class to interact with the blockchain
export class RoundInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<RoundTypes.State> {
    return fetchContractState(Round, this);
  }

  methods = {
    getEndRoundTime: async (
      params?: RoundTypes.CallMethodParams<"getEndRoundTime">
    ): Promise<RoundTypes.CallMethodResult<"getEndRoundTime">> => {
      return callMethod(
        Round,
        this,
        "getEndRoundTime",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardAmount: async (
      params?: RoundTypes.CallMethodParams<"getRewardAmount">
    ): Promise<RoundTypes.CallMethodResult<"getRewardAmount">> => {
      return callMethod(
        Round,
        this,
        "getRewardAmount",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardBaseCalAmount: async (
      params?: RoundTypes.CallMethodParams<"getRewardBaseCalAmount">
    ): Promise<RoundTypes.CallMethodResult<"getRewardBaseCalAmount">> => {
      return callMethod(
        Round,
        this,
        "getRewardBaseCalAmount",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRoundEpoch: async (
      params?: RoundTypes.CallMethodParams<"getRoundEpoch">
    ): Promise<RoundTypes.CallMethodResult<"getRoundEpoch">> => {
      return callMethod(
        Round,
        this,
        "getRoundEpoch",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends RoundTypes.MultiCallParams>(
    calls: Calls
  ): Promise<RoundTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Round,
      this,
      calls,
      getContractByCodeHash
    )) as RoundTypes.MultiCallResults<Calls>;
  }
}
