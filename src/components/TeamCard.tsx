// src/components/TeamCard.tsx - 队伍卡片组件
import { View, Text, Button, Image } from '@tarojs/components';
import type { Team } from '../types';
import { formatCurrency, formatTeamStatus } from '../utils/formatters';

interface TeamCardProps {
  team: Team;
  showActions?: boolean;
  onViewDetail?: () => void;
  onDonate?: () => void;
}

export const TeamCard = ({
  team,
  showActions = true,
  onViewDetail,
  onDonate
}: TeamCardProps) => {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm">
      {/* 队伍头部信息 */}
      <View className="flex items-center gap-3 mb-3">
        <Image
          src={team.avatar || 'https://via.placeholder.com/100x100/cccccc/FFFFFF?text=团队'}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-semibold text-lg">{team.name}</Text>
          <Text className="text-gray-600 text-sm">
            {team.captain} · {team.members}人队伍
          </Text>
        </View>
        <View className={`px-2 py-1 rounded text-xs ${
          team.status === '进行中'
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {formatTeamStatus(team.status || '进行中')}
        </View>
      </View>

      {/* 队伍统计 */}
      <View className="grid grid-cols-3 gap-4 mb-4">
        <View className="text-center">
          <Text className="text-lg font-bold text-green-600">
            {formatCurrency(team.raised)}
          </Text>
          <Text className="text-xs text-gray-600">已筹款</Text>
        </View>
        <View className="text-center">
          <Text className="text-lg font-bold text-blue-600">
            {team.distance || 0}km
          </Text>
          <Text className="text-xs text-gray-600">暴走距离</Text>
        </View>
        <View className="text-center">
          <Text className="text-lg font-bold text-orange-600">
            {team.members}
          </Text>
          <Text className="text-xs text-gray-600">队员数</Text>
        </View>
      </View>

      {/* 操作按钮 */}
      {showActions && (
        <View className="flex gap-2">
          <Button
            className="flex-1 bg-blue-600 text-white text-sm"
            onClick={onViewDetail}
          >
            查看详情
          </Button>
          <Button
            className="flex-1 bg-green-600 text-white text-sm"
            onClick={onDonate}
          >
            我要捐款
          </Button>
        </View>
      )}
    </View>
  );
};