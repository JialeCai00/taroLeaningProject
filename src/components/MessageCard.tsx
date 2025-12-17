// src/components/MessageCard.tsx - 留言卡片组件
import { View, Text } from '@tarojs/components';
import { formatCurrency } from '../utils/formatters';

interface MessageCardProps {
  name: string;
  message: string;
  amount?: number;
}

export const MessageCard = ({ name, message, amount }: MessageCardProps) => {
  return (
    <View className="border-l-4 border-blue-400 pl-3">
      <View className="flex justify-between items-start">
        <Text className="font-medium text-sm">{name}</Text>
        {amount && (
          <Text className="text-green-600 text-sm">{formatCurrency(amount)}</Text>
        )}
      </View>
      <Text className="text-gray-600 text-sm mt-1">{message}</Text>
    </View>
  );
};
