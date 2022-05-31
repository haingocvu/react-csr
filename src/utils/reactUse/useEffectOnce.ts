import { EffectCallback, useEffect, useRef } from 'react';

function useEffectOnce(effect: EffectCallback) {
  const destroyFunc = useRef<void | any>();
  const calledOnce = useRef(false);
  const renderAfterCalled = useRef(false);
  if (calledOnce.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    destroyFunc.current = effect();
    calledOnce.current = true;

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }

      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, [effect]);
}

export default useEffectOnce;
