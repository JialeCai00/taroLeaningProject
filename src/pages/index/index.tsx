// src/pages/index/index.tsx
import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";

function JotaiDemo() {
  const [count, setCount] = useState(0);

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
          className="bg-blue-600 text-white mt-4"
          onClick={() => setCount((c) => c + 1)}
        >
          增加
        </Button>
      </View>
    </View>
  );
}

export default function Index() {
  return <JotaiDemo />;
}
