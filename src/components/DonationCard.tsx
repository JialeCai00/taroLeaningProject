// src/components/DonationCard.tsx - 捐赠卡片组件
import { View, Text, Button } from '@tarojs/components';
import type { Donation } from '../types';
import { formatCurrency, formatDate } from '../utils/formatters';

interface DonationCardProps {
  donation: Donation;
  showActions?: boolean;
  onViewDetail?: () => void;
}

export const DonationCard = ({
  donation,
  showActions = true,
  onViewDetail
}: DonationCardProps) => {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm">
      <View className="flex justify-between items-start mb-2">
        <View>
          <Text className="font-semibold">{donation.teamName}</Text>
          <Text className="text-sm text-gray-600">{formatDate(donation.date)}</Text>
        </View>
        <Text className="text-green-600 font-bold">{formatCurrency(donation.amount)}</Text>
      </View>
      <Text className="text-gray-700 text-sm mb-2">{donation.message}</Text>
      <View className="flex justify-between items-center">
        <Text className="text-xs text-gray-500">捐赠人: {donation.donorName}</Text>
        {showActions && (
          <Button size="mini" className="bg-blue-600 text-white text-xs" onClick={onViewDetail}>
            查看详情
          </Button>
        )}
      </View>
    </View>
  );
};
