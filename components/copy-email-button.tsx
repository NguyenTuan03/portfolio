"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export enum CopyState {
  Idle = "idle",
  Copied = "copied",
}

interface CopyEmailButtonProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}

const COPY_RESET_DELAY_MS = 2500;

export function CopyEmailButton({
  email,
  copyLabel,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [copyState, setCopyState] = useState<CopyState>(CopyState.Idle);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState(CopyState.Copied);
      setTimeout(() => {
        setCopyState(CopyState.Idle);
      }, COPY_RESET_DELAY_MS);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopyState(CopyState.Idle);
    }
  };

  const isCopied = copyState === CopyState.Copied;

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm md:text-base font-medium text-white transition-all duration-200 hover:bg-white/20 hover:border-accent hover:text-white cursor-pointer"
    >
      {isCopied ? (
        <>
          <Check aria-hidden="true" weight="bold" className="size-4 text-emerald-400" />
          <span className="text-emerald-300">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy aria-hidden="true" weight="bold" className="size-4 text-slate-300" />
          <span>{copyLabel}</span>
        </>
      )}
    </button>
  );
}
