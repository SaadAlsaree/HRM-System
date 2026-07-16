import * as React from "react";

// Lazy-initialized ref. The initializer always runs once on first render, so by the
// time the returned ref is consumed its `.current` is guaranteed to be set.
// We return a `MutableRefObject<T>` (non-null current) so callers — e.g. the diceui
// Stepper, which reads `.current` directly — don't need null-checks under strict mode.
function useLazyRef<T>(fn: () => T): React.MutableRefObject<T> {
  const ref = React.useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = fn();
  }

  return ref as React.MutableRefObject<T>;
}

export { useLazyRef };
