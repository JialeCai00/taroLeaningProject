// src/hooks/useMockData.ts - 模拟数据 Hook
import { useState, useEffect } from 'react';
import type { Team, Donation, FundReport, Statistics, User } from '../types';
import { TEAMS_LIST } from '../utils/constants';

export const useMockData = () => {
  const [statistics] = useState<Statistics>({
    totalRaised: 7468476,
    totalTeams: 715,
    totalDonations: 36917,
  });

  const [topTeams] = useState<Team[]>([
    { id: 1, name: "爱心团队A", raised: 150000, members: 25 },
    { id: 2, name: "希望小队", raised: 120000, members: 20 },
    { id: 3, name: "阳光公益", raised: 98000, members: 18 },
  ]);

  const [recentDonations] = useState<Donation[]>([
    {
      id: 1,
      donorName: "食物募集大使",
      message: "你的每一步都在为他人点亮前行的灯塔。一起加油！",
      amount: 200,
      teamName: "爱心团队A",
      date: "2024-12-15"
    },
    {
      id: 2,
      donorName: "Jess",
      message: "Jiayou!",
      amount: 100,
      teamName: "希望小队",
      date: "2024-12-14"
    },
    {
      id: 3,
      donorName: "杨雪",
      message: "加油",
      amount: 50,
      teamName: "阳光公益",
      date: "2024-12-13"
    }
  ]);

  const [fundReports] = useState<FundReport[]>([
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
  ]);

  const [donationRecords] = useState<Donation[]>([
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
  ]);

  const [user] = useState<User>({
    avatar: 'https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=用户',
    name: '公益爱心人',
    joinDate: '2024-01-15',
    totalDonated: 1200,
    teamsSupported: 5,
    donationCount: 8
  });

  return {
    statistics,
    topTeams,
    recentDonations,
    fundReports,
    donationRecords,
    user,
    teamsList: TEAMS_LIST
  };
};
