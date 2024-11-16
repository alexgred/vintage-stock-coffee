import { useRef } from 'react';

export function useRenderCounter() {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  return renderCount.current;
};
