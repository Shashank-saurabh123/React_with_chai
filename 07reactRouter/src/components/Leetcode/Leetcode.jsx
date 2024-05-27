import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Leetcode() {
  const data = useLoaderData();
  const { userid = "saurabh_shashank7654" } = useParams();

  return (
    <div>
      <div className="bg-black text-white text-3xl p-4 text-center">
        {" "}
        Username: {userid}{" "}
      </div>
      <div class="flex flex-row-reverse items-center gap-x-6 flex-wrap justify-center">
        <div class="relative font-primary">
          <svg
            class="-rotate-90 transform"
            width="180"
            height="180"
            viewBox="0 0 180 180"
          >
            <circle
              cx="90px"
              cy="90px"
              stroke-width="8px"
              r="70px"
              class="fill-none stroke-[#f6f5f5] dark:stroke-zinc-800"
            ></circle>
            <circle
              cx="90px"
              cy="90px"
              stroke-width="8px"
              r="70px"
              class="fill-none stroke-[#22C55E] hover:stroke-[12px] cursor-pointer"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="4.39822971502571 435.4247417875453"
              stroke-dashoffset="0"
              data-difficulty="EASY"
            ></circle>
            <circle
              cx="90px"
              cy="90px"
              stroke-width="8px"
              r="70px"
              class="fill-none stroke-[#EAB308] hover:stroke-[12px] cursor-pointer"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="13.19468914507713 426.6282823574939"
              stroke-dashoffset="-4.39822971502571"
              data-difficulty="MEDIUM"
            ></circle>
            <circle
              cx="90px"
              cy="90px"
              stroke-width="8px"
              r="70px"
              class="fill-none stroke-[#F43F5E] hover:stroke-[12px] cursor-pointer"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="0 439.822971502571"
              stroke-dashoffset="-17.59291886010284"
              data-difficulty="HARD"
            ></circle>
          </svg>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default">
            <div class="truncate text-center">
              <span class="text-[12px]">All</span>
              <div class="pb-0.5 text-2xl font-medium lg:text-3xl">
                {data.totalSolved}
              </div>
              <hr class="border-divider-2 dark:border-dark-divider-2 mx-auto max-w-[32px]" />
              <div class="text-label-4 dark:text-dark-label-4 pt-0.5 text-md font-semibold">
                {data.totalQuestions}
              </div>
            </div>
          </div>
        </div>
        <div class="pb-6 flex sm:flex-col flex-wrap space-y-4 md:space-x-0 mt-3 items-center justify-center sm:items-start">
          <div class="bg-[#fafafa] dark:bg-dark_40 p-2 flex items-center rounded-lg border border-zinc-300 dark:border-zinc-800 w-full">
            <span class="font-bold text-md sm:mr-0 mr-4 text-[#22C55E]">
              Easy
            </span>
            <span class="font-semibold ml-auto text-sm">
              {data.easySolved}
              <span class="text-zinc-500">/{data.totalEasy}</span>
            </span>
          </div>
          <div class="bg-[#fafafa] dark:bg-dark_40 p-2 flex items-center rounded-lg border border-zinc-300 dark:border-zinc-800 w-full">
            <span class="font-bold mr-6 text-md text-[#EAB308]">Medium</span>
            <span class="font-semibold ml-auto text-sm">
              {data.mediumSolved}
              <span class="text-zinc-500">/{data.totalMedium}</span>
            </span>
          </div>
          <div class="bg-[#fafafa] dark:bg-dark_40 p-2 flex items-center rounded-lg border border-zinc-300 dark:border-zinc-800 w-full">
            <span class="font-bold text-md text-[#F43F5E]">Hard</span>
            <span class="font-semibold ml-auto text-sm">
              {data.hardSolved}
              <span class="text-zinc-500">/{data.totalHard}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leetcode;

export const leetcodeInfoLoader = async (userid) => {
  const response = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${userid.params.userid}/`
  );
  return response.json();
};

export const leetcodeInfoLoaderForNull = async () => {
  const response = await fetch(
    `https://leetcode-stats-api.herokuapp.com/saurabh_shashank7654/`
  );
  return response.json();
};