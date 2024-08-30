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
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as MultipleChoiceContractJson } from "../multiple-choice/MultipleChoice.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace MultipleChoiceTypes {
  export type Fields = {
    betManager: HexString;
    punterTemplateId: HexString;
    endTimestamp: bigint;
    operator: Address;
    claimedByAnyoneDelay: bigint;
    endBeforeEnd: boolean;
    title: HexString;
    contractIndex: bigint;
    choicesName: [
      HexString,
      HexString,
      HexString,
      HexString,
      HexString,
      HexString,
      HexString,
      HexString,
      HexString,
      HexString
    ];
    tokenIdToVote: HexString;
    tokenIdToHodl: HexString;
    amountToHodl: bigint;
    rewardsComputed: boolean;
    totalAmountBoost: bigint;
    sideWon: bigint;
    totalAmount: bigint;
    amountPunters: [
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint
    ];
    rewardAmount: bigint;
    rewardBaseCalAmount: bigint;
    counterAttendees: bigint;
  };

  export type State = ContractState<Fields>;

  export type BetEvent = ContractEvent<{
    contractId: HexString;
    from: Address;
    amount: bigint;
    side: bigint;
    claimedByAnyoneTimestamp: bigint;
  }>;
  export type ClaimedEvent = ContractEvent<{
    contractId: HexString;
    punterAddress: Address;
    from: Address;
    amount: bigint;
  }>;

  export interface CallMethodTable {
    calculateRewards: {
      params: CallContractParams<{ sideWinning: bigint }>;
      result: CallContractResult<null>;
    };
    getEndRoundTime: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewardBaseCalAmount: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTitle: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getChoicesName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<
        [
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString
        ]
      >;
    };
    canEndBeforeEnd: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
    bid: {
      params: CallContractParams<{ amount: bigint; side: bigint }>;
      result: CallContractResult<null>;
    };
    claim: {
      params: CallContractParams<{ addressToClaim: Address }>;
      result: CallContractResult<null>;
    };
    boost: {
      params: CallContractParams<{ amount: bigint }>;
      result: CallContractResult<null>;
    };
    destroy: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
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
  export type MulticallReturnType<Callss extends MultiCallParams[]> =
    Callss["length"] extends 1
      ? MultiCallResults<Callss[0]>
      : { [index in keyof Callss]: MultiCallResults<Callss[index]> };

  export interface SignExecuteMethodTable {
    calculateRewards: {
      params: SignExecuteContractMethodParams<{ sideWinning: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    getEndRoundTime: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getRewardBaseCalAmount: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getTitle: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getChoicesName: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    canEndBeforeEnd: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    bid: {
      params: SignExecuteContractMethodParams<{ amount: bigint; side: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    claim: {
      params: SignExecuteContractMethodParams<{ addressToClaim: Address }>;
      result: SignExecuteScriptTxResult;
    };
    boost: {
      params: SignExecuteContractMethodParams<{ amount: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    destroy: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  MultipleChoiceInstance,
  MultipleChoiceTypes.Fields
> {
  encodeFields(fields: MultipleChoiceTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  eventIndex = { Bet: 0, Claimed: 1 };
  consts = {
    ErrorCodes: {
      InvalidCaller: BigInt("100"),
      NotAllPlayerClaimed: BigInt("101"),
      RewardsAlreadyComputed: BigInt("103"),
      BidTimestampNotReached: BigInt("104"),
      RewardsNotComputed: BigInt("105"),
      PunterChoiceNotExists: BigInt("106"),
      BidTimestampReached: BigInt("107"),
      InvalidPunterChoiceAddress: BigInt("108"),
      AlreadyPlayed: BigInt("110"),
      CannotBeClaimedYet: BigInt("111"),
      NotEnoughTokenHodling: BigInt("112"),
    },
    SubContractTypes: { PunterChoice: "00" },
  };

  at(address: string): MultipleChoiceInstance {
    return new MultipleChoiceInstance(address);
  }

  tests = {
    getBetInfo: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { from: Address }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getBetInfo", params, getContractByCodeHash);
    },
    updateAmount: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { from: Address; amount: bigint; side: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateAmount", params, getContractByCodeHash);
    },
    userClaimRewards: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { addressPunter: Address; amountBid: bigint; sideBid: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "userClaimRewards",
        params,
        getContractByCodeHash
      );
    },
    calculateRewards: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { sideWinning: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "calculateRewards",
        params,
        getContractByCodeHash
      );
    },
    getEndRoundTime: async (
      params: Omit<
        TestContractParamsWithoutMaps<MultipleChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getEndRoundTime", params, getContractByCodeHash);
    },
    getRewardBaseCalAmount: async (
      params: Omit<
        TestContractParamsWithoutMaps<MultipleChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(
        this,
        "getRewardBaseCalAmount",
        params,
        getContractByCodeHash
      );
    },
    getTitle: async (
      params: Omit<
        TestContractParamsWithoutMaps<MultipleChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTitle", params, getContractByCodeHash);
    },
    getChoicesName: async (
      params: Omit<
        TestContractParamsWithoutMaps<MultipleChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<
      TestContractResultWithoutMaps<
        [
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString,
          HexString
        ]
      >
    > => {
      return testMethod(this, "getChoicesName", params, getContractByCodeHash);
    },
    canEndBeforeEnd: async (
      params: Omit<
        TestContractParamsWithoutMaps<MultipleChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "canEndBeforeEnd", params, getContractByCodeHash);
    },
    bid: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { amount: bigint; side: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "bid", params, getContractByCodeHash);
    },
    claim: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { addressToClaim: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "claim", params, getContractByCodeHash);
    },
    boost: async (
      params: TestContractParamsWithoutMaps<
        MultipleChoiceTypes.Fields,
        { amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "boost", params, getContractByCodeHash);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<MultipleChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const MultipleChoice = new Factory(
  Contract.fromJson(
    MultipleChoiceContractJson,
    "",
    "4fc7dfa37c861f9936f8056b64f0d48d55214c017fbd0e1d5d519ee8102171e8",
    []
  )
);

// Use this class to interact with the blockchain
export class MultipleChoiceInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MultipleChoiceTypes.State> {
    return fetchContractState(MultipleChoice, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeBetEvent(
    options: EventSubscribeOptions<MultipleChoiceTypes.BetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      MultipleChoice.contract,
      this,
      options,
      "Bet",
      fromCount
    );
  }

  subscribeClaimedEvent(
    options: EventSubscribeOptions<MultipleChoiceTypes.ClaimedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      MultipleChoice.contract,
      this,
      options,
      "Claimed",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      MultipleChoiceTypes.BetEvent | MultipleChoiceTypes.ClaimedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      MultipleChoice.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    calculateRewards: async (
      params: MultipleChoiceTypes.CallMethodParams<"calculateRewards">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"calculateRewards">> => {
      return callMethod(
        MultipleChoice,
        this,
        "calculateRewards",
        params,
        getContractByCodeHash
      );
    },
    getEndRoundTime: async (
      params?: MultipleChoiceTypes.CallMethodParams<"getEndRoundTime">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"getEndRoundTime">> => {
      return callMethod(
        MultipleChoice,
        this,
        "getEndRoundTime",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardBaseCalAmount: async (
      params?: MultipleChoiceTypes.CallMethodParams<"getRewardBaseCalAmount">
    ): Promise<
      MultipleChoiceTypes.CallMethodResult<"getRewardBaseCalAmount">
    > => {
      return callMethod(
        MultipleChoice,
        this,
        "getRewardBaseCalAmount",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTitle: async (
      params?: MultipleChoiceTypes.CallMethodParams<"getTitle">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"getTitle">> => {
      return callMethod(
        MultipleChoice,
        this,
        "getTitle",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getChoicesName: async (
      params?: MultipleChoiceTypes.CallMethodParams<"getChoicesName">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"getChoicesName">> => {
      return callMethod(
        MultipleChoice,
        this,
        "getChoicesName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    canEndBeforeEnd: async (
      params?: MultipleChoiceTypes.CallMethodParams<"canEndBeforeEnd">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"canEndBeforeEnd">> => {
      return callMethod(
        MultipleChoice,
        this,
        "canEndBeforeEnd",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    bid: async (
      params: MultipleChoiceTypes.CallMethodParams<"bid">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"bid">> => {
      return callMethod(
        MultipleChoice,
        this,
        "bid",
        params,
        getContractByCodeHash
      );
    },
    claim: async (
      params: MultipleChoiceTypes.CallMethodParams<"claim">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"claim">> => {
      return callMethod(
        MultipleChoice,
        this,
        "claim",
        params,
        getContractByCodeHash
      );
    },
    boost: async (
      params: MultipleChoiceTypes.CallMethodParams<"boost">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"boost">> => {
      return callMethod(
        MultipleChoice,
        this,
        "boost",
        params,
        getContractByCodeHash
      );
    },
    destroy: async (
      params?: MultipleChoiceTypes.CallMethodParams<"destroy">
    ): Promise<MultipleChoiceTypes.CallMethodResult<"destroy">> => {
      return callMethod(
        MultipleChoice,
        this,
        "destroy",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    calculateRewards: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"calculateRewards">
    ): Promise<
      MultipleChoiceTypes.SignExecuteMethodResult<"calculateRewards">
    > => {
      return signExecuteMethod(
        MultipleChoice,
        this,
        "calculateRewards",
        params
      );
    },
    getEndRoundTime: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"getEndRoundTime">
    ): Promise<
      MultipleChoiceTypes.SignExecuteMethodResult<"getEndRoundTime">
    > => {
      return signExecuteMethod(MultipleChoice, this, "getEndRoundTime", params);
    },
    getRewardBaseCalAmount: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"getRewardBaseCalAmount">
    ): Promise<
      MultipleChoiceTypes.SignExecuteMethodResult<"getRewardBaseCalAmount">
    > => {
      return signExecuteMethod(
        MultipleChoice,
        this,
        "getRewardBaseCalAmount",
        params
      );
    },
    getTitle: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"getTitle">
    ): Promise<MultipleChoiceTypes.SignExecuteMethodResult<"getTitle">> => {
      return signExecuteMethod(MultipleChoice, this, "getTitle", params);
    },
    getChoicesName: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"getChoicesName">
    ): Promise<
      MultipleChoiceTypes.SignExecuteMethodResult<"getChoicesName">
    > => {
      return signExecuteMethod(MultipleChoice, this, "getChoicesName", params);
    },
    canEndBeforeEnd: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"canEndBeforeEnd">
    ): Promise<
      MultipleChoiceTypes.SignExecuteMethodResult<"canEndBeforeEnd">
    > => {
      return signExecuteMethod(MultipleChoice, this, "canEndBeforeEnd", params);
    },
    bid: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"bid">
    ): Promise<MultipleChoiceTypes.SignExecuteMethodResult<"bid">> => {
      return signExecuteMethod(MultipleChoice, this, "bid", params);
    },
    claim: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"claim">
    ): Promise<MultipleChoiceTypes.SignExecuteMethodResult<"claim">> => {
      return signExecuteMethod(MultipleChoice, this, "claim", params);
    },
    boost: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"boost">
    ): Promise<MultipleChoiceTypes.SignExecuteMethodResult<"boost">> => {
      return signExecuteMethod(MultipleChoice, this, "boost", params);
    },
    destroy: async (
      params: MultipleChoiceTypes.SignExecuteMethodParams<"destroy">
    ): Promise<MultipleChoiceTypes.SignExecuteMethodResult<"destroy">> => {
      return signExecuteMethod(MultipleChoice, this, "destroy", params);
    },
  };

  async multicall<Callss extends MultipleChoiceTypes.MultiCallParams[]>(
    ...callss: Callss
  ): Promise<MultipleChoiceTypes.MulticallReturnType<Callss>> {
    return (await multicallMethods(
      MultipleChoice,
      this,
      callss,
      getContractByCodeHash
    )) as MultipleChoiceTypes.MulticallReturnType<Callss>;
  }
}
