"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * `prefers-reduced-motion` with a stable server snapshot (`false`) so SSR markup
 * matches the client’s first hydration pass.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/**
 * WebGL availability; server snapshot assumes `true` so we don’t flash the static
 * shell for everyone, then correct on the client if needed.
 */
export function useWebGLSupported(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      if (typeof window === "undefined") return true;
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl");
        return !!gl;
      } catch {
        return false;
      }
    },
    () => true,
  );
}
