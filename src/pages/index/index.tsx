// src/pages/index/index.tsx
import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import { useReady } from "@tarojs/taro";

function JotaiDemo() {
  const [count, setCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // 确保组件完全挂载后再启用交互，避免渲染层数据同步问题
  useReady(() => {
    setIsReady(true);
  });

  return (
    <View className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <View className="bg-white p-8 rounded-xl shadow-md">
        <Text className="text-xl font-bold text-gray-800 mb-4 block">
          Taro + React + Tailwind + Jotai
        </Text>

        <Text className="text-blue-500 text-4xl font-black block text-center my-4">
          {count}
        </Text>

        <Button
          className="bg-blue-600 text-white mt-4 disabled:bg-gray-400"
          onClick={() => setCount((c) => c + 1)}
          disabled={!isReady}
        >
          {isReady ? "增加" : "加载中..."}
        </Button>
      </View>
    </View>
  );
}

export default function Index() {
  return <JotaiDemo />;
}
