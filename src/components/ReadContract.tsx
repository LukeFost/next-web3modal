"use client";

import { useState } from "react";
import { BaseError } from "viem";
import { type Address, useContractRead } from "wagmi";

import { counter_new_abi } from "./contracts";

export function ReadContract() {
  return (
    <div>
      <div>
        <TotalSupply />
      </div>
    </div>
  );
}

function TotalSupply() {
  const { data, isRefetching, refetch } = useContractRead({
    ...counter_new_abi,
    functionName: "num",
  });

  return (
    <div>
      Total Supply: {data?.toString()}
      <button
        disabled={isRefetching}
        onClick={() => refetch()}
        style={{ marginLeft: 4 }}
      >
        {isRefetching ? "loading..." : "refetch"}
      </button>
    </div>
  );
}
