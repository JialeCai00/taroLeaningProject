// src/pages/index/index.tsx - 公益小程序首页
import {
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  Image,
  Button,
  Text,
} from "@tarojs/components";
import { useState } from "react";
import { useReady } from "@tarojs/taro";
import { useMockData, useNavigation } from "../../hooks";
import { StatisticCard, MessageCard } from "../../components";
import { BANNER_IMAGES } from "../../utils/constants";

export default function Index() {
  const [isReady, setIsReady] = useState(false);
  const { statistics, topTeams, recentDonations } = useMockData();
  const { goToTeams, goToDonate } = useNavigation();

  useReady(() => {
    setIsReady(true);
  });

  if (!isReady) {
    return (
      <View className="flex items-center justify-center h-screen">
        <Text className="text-gray-600">加载中...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="h-screen bg-gray-50">
      {/* 轮播图 */}
      <Swiper className="h-64" indicatorDots autoplay>
        {BANNER_IMAGES.map((image, index) => (
          <SwiperItem key={index}>
            <Image src={image} className="w-full h-full" mode="aspectFill" />
          </SwiperItem>
        ))}
      </Swiper>

      {/* 统计数据 */}
      <View className="bg-white mx-4 mt-4 rounded-lg p-4 shadow-sm">
        <View className="grid grid-cols-3 gap-4 text-center">
          <StatisticCard value={statistics.totalTeams} label="参与队伍" />
          <StatisticCard
            value={`¥${(statistics.totalRaised / 10000).toFixed(0)}万`}
            label="筹款总额"
          />
          <StatisticCard value={statistics.totalDonations} label="捐赠人次" />
        </View>
      </View>

      {/* 队伍排行榜 */}
      <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm">
        <View className="p-4 border-b border-gray-200">
          <Text className="text-lg font-semibold">队伍排行榜</Text>
        </View>
        <View className="p-4 space-y-3">
          {topTeams.map((team, index) => (
            <View
              key={team.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded"
            >
              <View className="flex items-center gap-3">
                <Text className="text-lg font-bold text-gray-400">
                  #{index + 1}
                </Text>
                <View>
                  <Text className="font-medium">{team.name}</Text>
                  <Text className="text-sm text-gray-600">
                    {team.members}人队伍
                  </Text>
                </View>
              </View>
              <Text className="text-green-600 font-semibold">
                ¥{team.raised.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
        <View className="p-4 border-t border-gray-200">
          <Button className="w-full bg-blue-600 text-white" onClick={goToTeams}>
            查看全部队伍
          </Button>
        </View>
      </View>

      {/* 捐赠人留言 */}
      <View className="bg-white mx-4 mt-4 mb-4 rounded-lg shadow-sm">
        <View className="p-4 border-b border-gray-200">
          <Text className="text-lg font-semibold">捐赠人留言</Text>
        </View>
        <View className="p-4 space-y-3">
          {recentDonations.map((donation, index) => (
            <MessageCard
              key={index}
              name={donation.donorName}
              message={donation.message}
              amount={donation.amount}
            />
          ))}
        </View>
      </View>

      {/* 快速操作 */}
      <View className="mx-4 mb-8 space-y-3">
        <Button
          className="w-full bg-green-600 text-white py-3"
          onClick={goToDonate}
        >
          我要捐款
        </Button>
        <Button className="w-full bg-blue-600 text-white py-3">我要报名</Button>
      </View>
    </ScrollView>
  );
}
