// src/pages/donate/index.tsx - 捐赠页面
import { View, Text, Button, ScrollView, Input } from "@tarojs/components";
import { useState } from "react";
import { useMockData } from "../../hooks";
import { DonationCard } from "../../components";
import { DONATION_PRESETS } from "../../utils/constants";
import { formatCurrency } from "../../utils/formatters";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');
  const { fundReports, donationRecords, teamsList } = useMockData();

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    console.log('捐赠:', { amount, selectedTeam, donorName, message });
    // 这里可以调用 API 发送捐赠请求
  };

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  return (
    <ScrollView className="h-screen bg-gray-50">
      {/* 捐赠表单 */}
      <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm">
        <View className="p-4 border-b border-gray-200">
          <Text className="text-lg font-semibold">我要捐款</Text>
        </View>

        <View className="p-4 space-y-4">
          {/* 选择金额 */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-2 block">选择捐赠金额</Text>
            <View className="grid grid-cols-4 gap-2">
              {DONATION_PRESETS.map((amount) => (
                <Button
                  key={amount}
                  className={`py-2 rounded text-sm ${
                    selectedAmount === amount && !customAmount
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                >
                  ¥{amount}
                </Button>
              ))}
            </View>
            <View className="mt-2">
              <Input
                type="number"
                placeholder="自定义金额"
                value={customAmount}
                onInput={(e) => setCustomAmount(e.detail.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </View>
          </View>

          {/* 选择队伍 */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-2 block">选择支持队伍</Text>
            <View className="grid grid-cols-2 gap-2">
              {teamsList.map((team) => (
                <Button
                  key={team}
                  className={`py-2 rounded text-sm ${
                    selectedTeam === team
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setSelectedTeam(team)}
                >
                  {team}
                </Button>
              ))}
            </View>
          </View>

          {/* 捐赠人信息 */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-2 block">捐赠人姓名</Text>
            <Input
              placeholder="请输入您的姓名"
              value={donorName}
              onInput={(e) => setDonorName(e.detail.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </View>

          {/* 祝福留言 */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-2 block">祝福留言（可选）</Text>
            <Input
              placeholder="写下您的祝福..."
              value={message}
              onInput={(e) => setMessage(e.detail.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </View>

          {/* 捐赠按钮 */}
          <Button
            className="w-full bg-green-600 text-white py-3 rounded-lg"
            onClick={handleDonate}
            disabled={!currentAmount || !selectedTeam || !donorName}
          >
            确认捐赠 {currentAmount ? formatCurrency(currentAmount) : ''}
          </Button>
        </View>
      </View>

      {/* 善款使用报告 */}
      <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm">
        <View className="p-4 border-b border-gray-200">
          <Text className="text-lg font-semibold">善款使用报告</Text>
        </View>
        <View className="p-4">
          {fundReports.map((report) => (
            <View key={report.year} className="mb-4 last:mb-0">
              <Text className="font-medium mb-2 block">{report.year}年善款使用情况</Text>
              <Text className="text-gray-600 text-sm mb-3 block">
                {report.year}年"一个鸡蛋的暴走"活动筹集善款{formatCurrency(report.totalRaised)}，
                截至{report.year}年3月31日，善款已累计支出{formatCurrency(report.totalUsed)}，
                支持{report.organizations}个公益机构，资助{report.projects}个公益项目，
                直接受益人数{report.beneficiaries.toLocaleString()}人。
              </Text>
              <View className="grid grid-cols-2 gap-4">
                <View className="bg-blue-50 p-3 rounded">
                  <Text className="text-2xl font-bold text-blue-600 block">{report.organizations}</Text>
                  <Text className="text-sm text-gray-600">公益机构</Text>
                </View>
                <View className="bg-green-50 p-3 rounded">
                  <Text className="text-2xl font-bold text-green-600 block">{report.beneficiaries.toLocaleString()}</Text>
                  <Text className="text-sm text-gray-600">受益人数</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 我的捐赠记录 */}
      <View className="bg-white mx-4 mt-4 mb-4 rounded-lg shadow-sm">
        <View className="p-4 border-b border-gray-200">
          <Text className="text-lg font-semibold">我的捐赠记录</Text>
        </View>
        <View className="p-4">
          {donationRecords.length > 0 ? (
            <View className="space-y-3">
              {donationRecords.map((record) => (
                <DonationCard
                  key={record.id}
                  donation={record}
                  onViewDetail={() => console.log('查看捐赠详情', record.id)}
                />
              ))}
            </View>
          ) : (
            <View className="text-center py-8">
              <Text className="text-gray-500">暂无捐赠记录</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
