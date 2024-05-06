import React from "react";
import { ProgressBar as AriaProgressBar } from "react-aria-components";
import { Label } from "../Field";
import { composeTailwindRenderProps } from "../../scripts/utils";
import { ProgressBarProps } from "./types";

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1"
      )}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-sm text-gray-600 dark:text-zinc-400">
              {valueText}
            </span>
          </div>
          <div className="w-64 h-2 rounded-full bg-gray-300 dark:bg-zinc-700 outline outline-1 -outline-offset-1 outline-transparent relative overflow-hidden">
            <div
              className={`absolute top-0 h-full rounded-full bg-blue-600 dark:bg-blue-500 forced-colors:bg-[Highlight] ${
                isIndeterminate
                  ? "left-full animate-in duration-1000 [--tw-enter-translate-x:calc(-16rem-100%)] slide-out-to-right-full repeat-infinite ease-out"
                  : "left-0"
              }`}
              style={{ width: (isIndeterminate ? 40 : percentage) + "%" }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
