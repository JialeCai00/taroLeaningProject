// src/pages/teams/index.tsx - 队伍页面
import { View, Text, Button, ScrollView } from "@tarojs/components";
import { useTeams } from "../../hooks";
import { TeamCard } from "../../components";

export default function Teams() {
  const { teams, filter, setFilter, filterOptions, getFilterCount } = useTeams();

  return (
    <View className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <View className="bg-white p-4 shadow-sm">
        <Text className="text-xl font-bold">暴走队伍</Text>
        <Text className="text-gray-600 text-sm mt-1">715支队伍，携手前行</Text>
      </View>

      {/* 筛选器 */}
      <View className="bg-white mx-4 mt-4 rounded-lg p-4 shadow-sm">
        <View className="flex gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option.key}
              className={`flex-1 py-2 rounded text-sm ${
                filter === option.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setFilter(option.key)}
            >
              {option.label}({getFilterCount(option.key)})
            </Button>
          ))}
        </View>
      </View>

      {/* 队伍列表 */}
      <ScrollView className="flex-1 p-4">
        <View className="space-y-4">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              onViewDetail={() => console.log('查看队伍详情', team.id)}
              onDonate={() => console.log('捐款给队伍', team.id)}
            />
          ))}
        </View>

        {/* 加载更多 */}
        <View className="py-8 text-center">
          <Button className="bg-gray-200 text-gray-600 px-6 py-2 rounded">
            加载更多队伍
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}