// src/components/StatisticCard.tsx - 统计卡片组件
import { View, Text } from '@tarojs/components';

interface StatisticCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export const StatisticCard = ({ value, label, className = '' }: StatisticCardProps) => {
  return (
    <View className={`text-center ${className}`}>
      <Text className="text-2xl font-bold text-blue-600 block">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </Text>
      <Text className="text-sm text-gray-600 block">{label}</Text>
    </View>
  );
};