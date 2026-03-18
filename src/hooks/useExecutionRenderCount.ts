/* eslint-disable react-hooks/refs */
// Suppressing the react-hooks/refs warning here is acceptable for demo purposes
// but discouraged in production code. Accessing ref values during render can cause
// components to not update as expected. This hook intentionally reads ref.current
// during render to track execution count for the useMemo/useCallback teaching demo.
import { useRef, useEffect } from "react";

export function useExecutionRenderCount() {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return renderCount?.current;
}
