// src/components/Card.tsx - 卡片组件
import { View, Text } from '@tarojs/components';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
}

export const Card = ({ children, className = '', shadow = true }: CardProps) => {
  return (
    <View className={`bg-white rounded-lg ${shadow ? 'shadow-sm' : ''} ${className}`}>
      {children}
    </View>
  );
};

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const CardHeader = ({ title, subtitle, className = '' }: CardHeaderProps) => {
  return (
    <View className={`p-4 border-b border-gray-200 ${className}`}>
      <Text className="text-lg font-semibold">{title}</Text>
      {subtitle && (
        <Text className="text-gray-600 text-sm mt-1 block">{subtitle}</Text>
      )}
    </View>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <View className={`p-4 ${className}`}>
      {children}
    </View>
  );
};
