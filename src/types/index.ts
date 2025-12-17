// src/types/index.ts - 类型定义
export interface Team {
  id: number;
  name: string;
  captain?: string;
  members: number;
  raised: number;
  distance?: number;
  status?: '进行中' | '已完成';
  avatar?: string;
}

export interface Donation {
  id: number;
  donorName: string;
  amount: number;
  teamName: string;
  date: string;
  message: string;
}

export interface FundReport {
  year: number;
  totalRaised: number;
  totalUsed: number;
  organizations: number;
  projects: number;
  beneficiaries: number;
  regions: number;
}

export interface Statistics {
  totalRaised: number;
  totalTeams: number;
  totalDonations: number;
}

export interface User {
  avatar: string;
  name: string;
  joinDate: string;
  totalDonated: number;
  teamsSupported: number;
  donationCount: number;
}

export interface MenuItem {
  icon: string;
  title: string;
  subtitle: string;
  action: string;
}
