// src/utils/formatters.ts - 格式化工具函数
export const formatCurrency = (amount: number): string => {
  return `¥${amount.toLocaleString()}`;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

export const formatDate = (dateString: string): string => {
  return dateString; // 可以扩展为更复杂的日期格式化
};

export const formatTeamStatus = (status: string): string => {
  return status === '进行中' ? '🏃‍♂️ 进行中' : '✅ 已完成';
};

export const formatPercentage = (value: number, total: number): string => {
  if (total === 0) return '0%';
  return `${((value / total) * 100).toFixed(1)}%`;
};