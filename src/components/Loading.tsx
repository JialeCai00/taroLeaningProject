// src/components/Loading.tsx - 加载状态组件
import { View, Text } from '@tarojs/components';

interface LoadingProps {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Loading = ({
  text = '加载中...',
  size = 'medium',
  className = ''
}: LoadingProps) => {
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <View className={`flex items-center justify-center py-8 ${className}`}>
      <Text className={`text-gray-600 ${sizeClasses[size]}`}>
        {text}
      </Text>
    </View>
  );
};
