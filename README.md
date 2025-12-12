# Taro React 小程序开发模板

一个基于 **Taro + React + Tailwind CSS + Jotai** 的现代化微信小程序开发模板，提供开箱即用的开发体验。

## ✨ 特性

- 🚀 **Taro 框架**: 基于 Taro 4.x，支持多端开发
- ⚛️ **React 18**: 使用最新的 React 特性，支持 Hooks
- 🎨 **Tailwind CSS**: 原子化 CSS 框架，提供美观的 UI 组件
- 🔄 **Jotai 状态管理**: 轻量级现代状态管理库
- 📱 **TypeScript**: 完整的类型安全支持
- 🛠️ **现代工具链**: ESLint、Stylelint、Husky、Commitlint
- 📦 **优化的构建**: Vite 构建工具，支持热重载

## 🛠️ 技术栈

### Taro 框架
Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信小程序。

### React 18
现代化的 React 版本，支持：
- Concurrent Features (并发特性)
- Automatic Batching (自动批处理)
- Suspense (悬念)
- Hooks (钩子)

### Tailwind CSS
原子化 CSS 框架，提供：
- 响应式设计
- 暗色模式支持
- 自定义主题
- JIT (Just-In-Time) 编译

### Jotai
轻量级状态管理库，提供：
- 原子化状态管理
- 派生状态 (derived state)
- 异步状态支持
- 本地存储集成

## 📁 目录结构

```
taroProject/
├── config/                 # Taro 配置文件
│   ├── index.ts           # 主配置文件
│   ├── dev.ts            # 开发环境配置
│   └── prod.ts           # 生产环境配置
├── src/                   # 源代码目录
│   ├── app.config.ts     # 小程序全局配置
│   ├── app.scss          # 全局样式
│   ├── app.ts            # 小程序入口
│   ├── index.html        # HTML 模板
│   ├── pages/            # 页面目录
│   │   └── index/        # 首页
│   │       ├── index.config.ts  # 页面配置
│   │       ├── index.scss       # 页面样式
│   │       └── index.tsx        # 页面组件
│   └── store/            # 状态管理
│       └── atoms.ts      # Jotai 原子状态
├── types/                 # 类型定义
│   └── global.d.ts       # 全局类型
├── dist/                  # 构建输出目录
├── node_modules/          # 依赖包
├── babel.config.js        # Babel 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
├── stylelint.config.mjs   # Stylelint 配置
├── commitlint.config.mjs  # Commitlint 配置
└── package.json           # 项目配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 7.0.0 (推荐) 或 npm >= 8.0.0
- 微信开发者工具

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动微信小程序开发服务器
pnpm run dev:weapp

# 或使用 npm
npm run dev:weapp
```

### 构建生产版本

```bash
# 微信小程序
pnpm run build:weapp

# 其他平台
pnpm run build:h5      # H5
pnpm run build:swan    # 百度小程序
pnpm run build:alipay  # 支付宝小程序
pnpm run build:tt      # 字节跳动小程序
```

## 📚 技术栈使用指南

### Taro 框架使用

#### 页面配置

```typescript
// src/pages/index/index.config.ts
export default definePageConfig({
  navigationBarTitleText: '首页',
  navigationBarBackgroundColor: '#fff',
  navigationBarTextStyle: 'black',
  backgroundColor: '#f5f5f5'
})
```

#### 页面组件

```tsx
// src/pages/index/index.tsx
import { View, Text, Button } from '@tarojs/components'

export default function Index() {
  return (
    <View className="container">
      <Text>Hello Taro!</Text>
      <Button onClick={() => console.log('clicked')}>
        点击我
      </Button>
    </View>
  )
}
```

#### 生命周期

```tsx
import { useLaunch } from '@tarojs/taro'

function App() {
  useLaunch(() => {
    console.log('App launched.')
  })

  return <View>...</View>
}
```

### React Hooks 使用

#### 基础 Hooks

```tsx
import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`Count changed to: ${count}`)
  }, [count])

  return (
    <View>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count + 1)}>
        增加
      </Button>
    </View>
  )
}
```

#### 自定义 Hooks

```tsx
// hooks/useCounter.ts
import { useState } from 'react'

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

// 使用自定义 Hook
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <View>
      <Text>{count}</Text>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>重置</Button>
    </View>
  )
}
```

### Tailwind CSS 样式

#### 基础样式

```tsx
function Card() {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 m-4">
      <Text className="text-xl font-bold text-gray-800 mb-2">
        卡片标题
      </Text>
      <Text className="text-gray-600">
        这是一个卡片内容
      </Text>
    </View>
  )
}
```

#### 响应式设计

```tsx
function ResponsiveComponent() {
  return (
    <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <View className="bg-blue-500 p-4 text-white">
        项目 1
      </View>
      <View className="bg-green-500 p-4 text-white">
        项目 2
      </View>
      <View className="bg-red-500 p-4 text-white">
        项目 3
      </View>
    </View>
  )
}
```

#### 自定义样式

```css
/* src/pages/index/index.scss */
.custom-button {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors;
}

.gradient-bg {
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500;
}
```

### Jotai 状态管理

#### 基础原子状态

```typescript
// src/store/atoms.ts
import { atom } from 'jotai'

// 基础状态
export const countAtom = atom(0)

// 对象状态
export const userAtom = atom({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
})

// 数组状态
export const todosAtom = atom([
  { id: 1, text: '学习 Taro', completed: false },
  { id: 2, text: '学习 React', completed: true }
])
```

#### 派生状态 (Derived State)

```typescript
// 基于其他状态计算的派生状态
export const completedTodosAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.filter(todo => todo.completed)
})

export const totalTodosAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.length
})

export const completedPercentageAtom = atom((get) => {
  const todos = get(todosAtom)
  const completed = todos.filter(todo => todo.completed).length
  return todos.length > 0 ? (completed / todos.length) * 100 : 0
})
```

#### 异步状态

```typescript
// 异步状态
export const asyncDataAtom = atom(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// 或者使用异步原子
import { atomWithQuery } from 'jotai-tanstack-query'

export const userDataAtom = atomWithQuery(() => ({
  queryKey: ['user'],
  queryFn: async () => {
    const response = await fetch('/api/user')
    return response.json()
  }
}))
```

#### 本地存储持久化

```typescript
import { atomWithStorage } from 'jotai/utils'

// 本地存储状态
export const themeAtom = atomWithStorage('theme', 'light')
export const usernameAtom = atomWithStorage('username', '访客')
export const preferencesAtom = atomWithStorage('preferences', {
  notifications: true,
  sound: false,
  language: 'zh-CN'
})
```

#### 状态更新函数

```typescript
// 写原子 (setter functions)
export const incrementCountAtom = atom(null, (get, set) => {
  const currentCount = get(countAtom)
  set(countAtom, currentCount + 1)
})

export const addTodoAtom = atom(null, (get, set, newTodo: string) => {
  const todos = get(todosAtom)
  const newId = Math.max(...todos.map(todo => todo.id)) + 1
  set(todosAtom, [...todos, {
    id: newId,
    text: newTodo,
    completed: false
  }])
})

export const toggleTodoAtom = atom(null, (get, set, id: number) => {
  const todos = get(todosAtom)
  set(todosAtom, todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ))
})
```

#### 在组件中使用

```tsx
import { useAtom } from 'jotai'
import {
  countAtom,
  userAtom,
  todosAtom,
  incrementCountAtom,
  addTodoAtom,
  toggleTodoAtom
} from '../store/atoms'

function TodoApp() {
  const [count, setCount] = useAtom(countAtom)
  const [user, setUser] = useAtom(userAtom)
  const [todos] = useAtom(todosAtom)
  const [, increment] = useAtom(incrementCountAtom)
  const [, addTodo] = useAtom(addTodoAtom)
  const [, toggleTodo] = useAtom(toggleTodoAtom)

  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo.trim())
      setNewTodo('')
    }
  }

  return (
    <View className="p-4">
      {/* 计数器 */}
      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">计数器: {count}</Text>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={increment} className="ml-2">递增</Button>
      </View>

      {/* 用户信息 */}
      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">用户信息</Text>
        <Text>姓名: {user.name}</Text>
        <Text>年龄: {user.age}</Text>
        <Button
          onClick={() => setUser({...user, age: user.age + 1})}
          className="mt-2"
        >
          增加年龄
        </Button>
      </View>

      {/* 待办事项 */}
      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">待办事项</Text>

        {/* 添加新事项 */}
        <View className="flex gap-2 mb-4">
          <Input
            value={newTodo}
            onInput={(e) => setNewTodo(e.detail.value)}
            placeholder="输入新任务"
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
          <Button onClick={handleAddTodo}>添加</Button>
        </View>

        {/* 事项列表 */}
        <View className="space-y-2">
          {todos.map(todo => (
            <View
              key={todo.id}
              className="flex items-center gap-2 p-2 border border-gray-200 rounded"
            >
              <Text
                className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </Text>
              <Button
                onClick={() => toggleTodo(todo.id)}
                className="text-sm"
              >
                {todo.completed ? '未完成' : '完成'}
              </Button>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
```

## 🔧 开发规范

### 代码规范

- 使用 **ESLint** 进行代码检查
- 使用 **Stylelint** 进行样式检查
- 使用 **Prettier** 进行代码格式化
- 使用 **Commitlint** 进行提交信息规范

### Git 提交规范

```bash
# 功能提交
git commit -m "feat: 添加用户登录功能"

# 修复提交
git commit -m "fix: 修复计数器重置按钮"

# 文档提交
git commit -m "docs: 更新 README 文档"

# 样式提交
git commit -m "style: 优化按钮样式"

# 重构提交
git commit -m "refactor: 重构用户状态管理"

# 测试提交
git commit -m "test: 添加用户组件测试"

# 构建提交
git commit -m "build: 更新依赖版本"
```

### 文件命名规范

- 组件文件: `PascalCase` (如: `UserProfile.tsx`)
- 工具函数: `camelCase` (如: `formatDate.ts`)
- 常量文件: `UPPER_CASE` (如: `constants.ts`)
- 类型定义: `PascalCase` (如: `User.ts`)

## 📋 后续开发事项

### 🔄 状态管理增强

- [ ] 集成 Jotai Query/TanStack Query 用于数据获取
- [ ] 添加 Redux DevTools 支持
- [ ] 实现状态持久化和同步

### 🎨 UI/UX 改进

- [ ] 添加暗色模式支持
- [ ] 集成 UI 组件库 (如 Taro UI 或 Ant Design Mobile)
- [ ] 添加动画和过渡效果
- [ ] 优化响应式布局

### 🛠️ 开发工具

- [ ] 配置 Jest 单元测试
- [ ] 添加 E2E 测试 (Cypress 或 Playwright)
- [ ] 配置 Storybook 组件文档
- [ ] 添加性能监控和错误追踪

### 🚀 功能扩展

- [ ] 添加路由守卫和权限管理
- [ ] 集成推送通知
- [ ] 添加离线数据缓存
- [ ] 支持国际化 (i18n)

### 📦 构建优化

- [ ] 配置 CI/CD 流水线
- [ ] 添加代码分割和懒加载
- [ ] 优化打包体积分析
- [ ] 配置 PWA 支持 (H5 版本)

### 🔒 安全和性能

- [ ] 添加数据验证和 sanitization
- [ ] 实现错误边界和降级处理
- [ ] 添加性能监控
- [ ] 配置安全头和 CSP

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue: [GitHub Issues](https://github.com/your-repo/issues)
- 邮箱: your-email@example.com

---

⭐ 如果这个模板对你有帮助，请给我们一个 Star！
