// src/pages/profile/index.tsx - 个人资料页面
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Switch,
} from "@tarojs/components";
import { useState } from "react";
import { useMockData } from "../../hooks";
import { MENU_ITEMS } from "../../utils/constants";
import { formatCurrency, formatDate } from "../../utils/formatters";

export default function Profile() {
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);
  const { user } = useMockData();

  const handleMenuClick = (action: string) => {
    console.log(`点击菜单: ${action}`);
    // 这里可以跳转到相应的页面或执行操作
  };

  return (
    <ScrollView className="min-h-screen bg-gray-50">
      {/* 用户信息卡片 */}
      <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm overflow-hidden">
        {/* 背景渐变 */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 h-24"></View>

        {/* 用户信息 */}
        <View className="px-4 pb-4 -mt-12">
          <View className="flex items-end gap-4">
            <Image
              src={user.avatar}
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <View className="flex-1 pb-2">
              <Text className="text-xl font-bold text-gray-800">
                {user.name}
              </Text>
              <Text className="text-sm text-gray-600">
                加入时间: {formatDate(user.joinDate)}
              </Text>
            </View>
          </View>
        </View>

        {/* 统计数据 */}
        <View className="grid grid-cols-3 gap-4 px-4 pb-4">
          <View className="text-center">
            <Text className="text-2xl font-bold text-green-600">
              {formatCurrency(user.totalDonated)}
            </Text>
            <Text className="text-xs text-gray-600">累计捐赠</Text>
          </View>
          <View className="text-center">
            <Text className="text-2xl font-bold text-blue-600">
              {user.teamsSupported}
            </Text>
            <Text className="text-xs text-gray-600">支持队伍</Text>
          </View>
          <View className="text-center">
            <Text className="text-2xl font-bold text-orange-600">
              {user.donationCount}
            </Text>
            <Text className="text-xs text-gray-600">捐赠次数</Text>
          </View>
        </View>
      </View>

      {/* 菜单列表 */}
      <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm overflow-hidden">
        {MENU_ITEMS.map((item, index) => (
          <View key={item.action}>
            <Button
              className="w-full text-left p-4 flex items-center gap-3"
              onClick={() => handleMenuClick(item.action)}
            >
              <Text className="text-2xl">{item.icon}</Text>
              <View className="flex-1">
                <Text className="text-gray-800 font-medium">{item.title}</Text>
                <Text className="text-sm text-gray-600">{item.subtitle}</Text>
              </View>
              <Text className="text-gray-400">›</Text>
            </Button>
            {index < MENU_ITEMS.length - 1 && (
              <View className="mx-4 h-px bg-gray-200"></View>
            )}
          </View>
        ))}
      </View>

      {/* 设置 */}
      <View className="bg-white mx-4 mt-4 mb-4 rounded-lg shadow-sm">
        <View className="p-4 border-b border-gray-200">
          <Text className="font-semibold text-gray-800">设置</Text>
        </View>

        <View className="p-4 space-y-4">
          {/* 通知开关 */}
          <View className="flex items-center justify-between">
            <View>
              <Text className="text-gray-800">推送通知</Text>
              <Text className="text-sm text-gray-600">接收活动提醒和更新</Text>
            </View>
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.detail.value)}
              color="#007AFF"
            />
          </View>

          {/* 声音效果开关 */}
          <View className="flex items-center justify-between">
            <View>
              <Text className="text-gray-800">声音效果</Text>
              <Text className="text-sm text-gray-600">捐赠成功音效</Text>
            </View>
            <Switch
              checked={soundEffects}
              onChange={(e) => setSoundEffects(e.detail.value)}
              color="#007AFF"
            />
          </View>
        </View>
      </View>

      {/* 底部信息 */}
      <View className="px-4 pb-8">
        <View className="text-center space-y-2">
          <Text className="text-sm text-gray-600">
            一个鸡蛋的暴走 · 公益小程序
          </Text>
          <Text className="text-xs text-gray-500">版本 1.0.0</Text>
        </View>

        <View className="flex gap-2 mt-4">
          <Button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded">
            关于我们
          </Button>
          <Button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded">
            帮助中心
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
