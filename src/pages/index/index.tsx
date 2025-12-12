// src/pages/index/index.tsx
import { View, Text, Button } from "@tarojs/components"; // 👈 记得引这个！
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    // 使用 Tailwind 类名 (注意是 className)
    <View className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <View className="bg-white p-8 rounded-xl shadow-md">
        <Text className="text-2xl font-bold text-gray-800 mb-4 block">
          Taro + React + Tailwind
        </Text>

        <Text className="text-blue-500 text-4xl font-black block text-center my-4">
          {count}
        </Text>

        <Button
          className="bg-blue-600 text-white mt-4"
          onClick={() => setCount((c) => c + 1)}
        >
          增加
        </Button>
      </View>
    </View>
  );
}
