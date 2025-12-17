// src/hooks/useDonation.ts - 捐赠相关逻辑 Hook
import { useState } from 'react';

export const useDonation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  const teams = ['爱心团队A', '希望小队', '阳光公益', '爱心传递'];

  const quickAmounts = [50, 100, 200, 500];

  const handleQuickAmount = (amount: number) => {
    setDonationAmount(amount.toString());
  };

  const validateDonation = () => {
    const amount = parseFloat(donationAmount);
    if (!donationAmount || !selectedTeam) {
      return { valid: false, message: '请选择队伍并输入捐赠金额' };
    }
    if (isNaN(amount) || amount <= 0) {
      return { valid: false, message: '请输入有效的捐赠金额' };
    }
    if (amount < 1) {
      return { valid: false, message: '捐赠金额至少为1元' };
    }
    return { valid: true };
  };

  const submitDonation = () => {
    const validation = validateDonation();
    if (!validation.valid) {
      // 这里可以显示错误提示
      console.error(validation.message);
      return false;
    }

    // 这里可以调用实际的捐赠API
    console.log(`捐赠 ${donationAmount} 元给 ${selectedTeam}`);
    // 重置表单
    setDonationAmount('');
    setSelectedTeam('');
    return true;
  };

  return {
    donationAmount,
    setDonationAmount,
    selectedTeam,
    setSelectedTeam,
    teams,
    quickAmounts,
    handleQuickAmount,
    submitDonation,
    validateDonation
  };
};
