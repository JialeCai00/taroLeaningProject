// src/hooks/useNavigation.ts - 导航 Hook
import { navigateTo } from '@tarojs/taro';

export const useNavigation = () => {
  const goToTeams = () => {
    navigateTo({ url: '/pages/teams/index' });
  };

  const goToDonate = () => {
    navigateTo({ url: '/pages/donate/index' });
  };

  const goToProfile = () => {
    navigateTo({ url: '/pages/profile/index' });
  };

  const goBack = () => {
    // 可以添加返回逻辑
    console.log('Go back');
  };

  return {
    goToTeams,
    goToDonate,
    goToProfile,
    goBack
  };
};
