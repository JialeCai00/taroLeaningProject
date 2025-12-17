// src/hooks/useTeams.ts - 队伍数据管理 Hook
import { useState, useMemo } from 'react';
import type { Team } from '../types';
import { FILTER_OPTIONS } from '../utils/constants';

// 完整的队伍数据
const ALL_TEAMS: Team[] = [
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
];

export const useTeams = () => {
  const [filter, setFilter] = useState('all');

  const filteredTeams = useMemo(() => {
    switch (filter) {
      case 'ongoing':
        return ALL_TEAMS.filter(team => team.status === '进行中');
      case 'completed':
        return ALL_TEAMS.filter(team => team.status === '已完成');
      default:
        return ALL_TEAMS;
    }
  }, [filter]);

  const getFilterCount = (filterKey: string) => {
    switch (filterKey) {
      case 'ongoing':
        return ALL_TEAMS.filter(team => team.status === '进行中').length;
      case 'completed':
        return ALL_TEAMS.filter(team => team.status === '已完成').length;
      default:
        return ALL_TEAMS.length;
    }
  };

  return {
    teams: filteredTeams,
    filter,
    setFilter,
    filterOptions: FILTER_OPTIONS,
    getFilterCount
  };
};