// src/utils/mockData.ts - 模拟数据
export const mockData = {
  totalRaised: 7468476,
  totalTeams: 715,
  totalDonations: 36917,
  bannerImages: [
    "https://via.placeholder.com/750x400/FF6B6B/FFFFFF?text=2025%E4%B8%80%E4%B8%AA%E9%B8%A1%E8%9B%8B%E7%9A%84%E6%9A%B4%E8%B5%B0",
    "https://via.placeholder.com/750x400/4ECDC4/FFFFFF?text=%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8A%A8%E8%BD%AE%E6%92%AD",
  ],
  topTeams: [
    { id: 1, name: "爱心团队A", raised: 150000, members: 25 },
    { id: 2, name: "希望小队", raised: 120000, members: 20 },
    { id: 3, name: "阳光公益", raised: 98000, members: 18 },
  ],
  recentDonations: [
    {
      name: "食物募集大使",
      message: "你的每一步都在为他人点亮前行的灯塔。一起加油！",
      amount: 200,
    },
    { name: "Jess", message: "Jiayou!", amount: 100 },
    { name: "杨雪", message: "加油", amount: 50 },
  ],
  teams: [
    {
      id: 1,
      name: '爱心团队A',
      captain: '张队长',
      members: 25,
      raised: 150000,
      distance: 50,
      status: '进行中',
      avatar: 'https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=A'
    },
    {
      id: 2,
      name: '希望小队',
      captain: '李队长',
      members: 20,
      raised: 120000,
      distance: 42,
      status: '进行中',
      avatar: 'https://via.placeholder.com/100x100/4ECDC4/FFFFFF?text=B'
    },
    {
      id: 3,
      name: '阳光公益',
      captain: '王队长',
      members: 18,
      raised: 98000,
      distance: 38,
      status: '进行中',
      avatar: 'https://via.placeholder.com/100x100/45B7D1/FFFFFF?text=C'
    },
    {
      id: 4,
      name: '爱心传递',
      captain: '赵队长',
      members: 15,
      raised: 75000,
      distance: 35,
      status: '已完成',
      avatar: 'https://via.placeholder.com/100x100/F9CA24/FFFFFF?text=D'
    },
    {
      id: 5,
      name: '公益小分队',
      captain: '刘队长',
      members: 12,
      raised: 52000,
      distance: 28,
      status: '进行中',
      avatar: 'https://via.placeholder.com/100x100/F0932B/FFFFFF?text=E'
    }
  ],
  donationRecords: [
    {
      id: 1,
      donorName: '张三',
      amount: 200,
      teamName: '爱心团队A',
      date: '2024-12-15',
      message: '希望孩子们都能健康成长！'
    },
    {
      id: 2,
      donorName: '李四',
      amount: 100,
      teamName: '希望小队',
      date: '2024-12-14',
      message: '加油！为公益贡献一份力量'
    },
    {
      id: 3,
      donorName: '王五',
      amount: 500,
      teamName: '阳光公益',
      date: '2024-12-13',
      message: '支持乡村教育，让更多孩子看到希望'
    }
  ],
  fundReports: [
    {
      year: 2024,
      totalRaised: 9530000,
      totalUsed: 8290000,
      organizations: 68,
      projects: 83,
      beneficiaries: 76454,
      regions: 19
    },
    {
      year: 2023,
      totalRaised: 8900000,
      totalUsed: 7800000,
      organizations: 62,
      projects: 75,
      beneficiaries: 68932,
      regions: 17
    }
  ],
  user: {
    avatar: 'https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=用户',
    name: '公益爱心人',
    joinDate: '2024-01-15',
    totalDonated: 1200,
    teamsSupported: 5,
    donationCount: 8
  }
};
