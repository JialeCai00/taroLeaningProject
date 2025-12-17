// src/utils/constants.ts - 常量定义
export const BANNER_IMAGES = [
  "https://via.placeholder.com/750x400/FF6B6B/FFFFFF?text=2025%E4%B8%80%E4%B8%AA%E9%B8%A1%E8%9B%8B%E7%9A%84%E6%9A%B4%E8%B5%B0",
  "https://via.placeholder.com/750x400/4ECDC4/FFFFFF?text=%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8A%A8%E8%BD%AE%E6%92%AD",
];

export const DONATION_PRESETS = [50, 100, 200, 500];

export const MENU_ITEMS = [
  {
    icon: '📊',
    title: '我的捐赠记录',
    subtitle: '查看历史捐赠',
    action: 'records'
  },
  {
    icon: '👥',
    title: '我支持的队伍',
    subtitle: '5支队伍',
    action: 'teams'
  },
  {
    icon: '📝',
    title: '报名管理',
    subtitle: '队伍报名状态',
    action: 'signup'
  },
  {
    icon: '📸',
    title: '照片下载',
    subtitle: '活动照片',
    action: 'photos'
  },
  {
    icon: '📋',
    title: '必读信息',
    subtitle: '活动规则',
    action: 'rules'
  },
  {
    icon: '🏆',
    title: '排行榜',
    subtitle: '捐赠排行',
    action: 'rankings'
  }
];

export const TEAMS_LIST = ['爱心团队A', '希望小队', '阳光公益', '爱心传递'];

export const FILTER_OPTIONS = [
  { key: 'all', label: '全部' },
  { key: 'ongoing', label: '进行中' },
  { key: 'completed', label: '已完成' }
];
