// src/components/DonationMessage.tsx - 捐赠留言组件
import { View, Text } from '@tarojs/components';
import { formatCurrency } from '../utils/formatters';

interface DonationMessageProps {
  name: string;
  message: string;
  amount: number;
  className?: string;
}

export const DonationMessage = ({
  name,
  message,
  amount,
  className = ''
}: DonationMessageProps) => {
  return (
    <View className={`border-l-4 border-blue-400 pl-3 ${className}`}>
      <View className="flex justify-between items-start">
        <Text className="font-medium text-sm">{name}</Text>
        <Text className="text-green-600 text-sm">{formatCurrency(amount)}</Text>
      </View>
      <Text className="text-gray-600 text-sm mt-1">{message}</Text>
    </View>
  );
};
