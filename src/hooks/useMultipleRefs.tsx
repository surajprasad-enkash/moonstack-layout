import React, { useRef } from "react";

export function useMultipleRefs<T extends string>(keys: T[]) {
  const refs = useRef<Record<T, React.RefObject<HTMLElement | null>>>(
    keys.reduce((acc, key) => {
      acc[key] = React.createRef<HTMLElement>();
      return acc;
    }, {} as Record<T, React.RefObject<HTMLElement | null>>)
  );

  return refs.current;
}
