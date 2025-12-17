// src/hooks/useReady.ts - 页面准备状态 Hook
import { useState } from 'react';
import { useReady as taroUseReady } from '@tarojs/taro';

export const useReady = () => {
  const [isReady, setIsReady] = useState(false);

  taroUseReady(() => {
    setIsReady(true);
  });

  return isReady;
};
