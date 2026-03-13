import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "后端开发工程师",
    icon: backend,
  },
  {
    title: "C++ 开发工程师",
    icon: creator,
  },
  {
    title: "Linux 服务器开发",
    icon: web,
  },
];

const technologies = [
  {
    name: "C++",
    icon: backend, // 用现成的backend图标
  },
  {
    name: "Socket 网络编程",
    icon: web,
  },
  {
    name: "Linux 系统编程",
    icon: creator,
  },
  {
    name: "多线程/并发",
    icon: mobile,
  },
  {
    name: "MySQL",
    icon: mongodb, // 用现成的mongodb图标
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "C++ 简易聊天室项目",
    company_name: "个人项目",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2026年1月 - 2026年2月",
    points: [
      "基于Linux环境下的C++ Socket编程开发，实现了支持多人同时在线的简易聊天室",
      "使用TCP协议实现可靠数据传输，支持公屏群聊、一对一私聊、用户上线/下线通知等核心功能",
      "采用多线程并发模型处理客户端连接，使用互斥锁保证共享数据的线程安全，支持10+用户同时在线稳定运行",
      "设计了简单的用户注册/登录逻辑，使用MySQL存储用户信息，实现了数据持久化",
      "完整源码已开源至GitHub，包含详细的README文档和编译运行说明",
    ],
  },
  {
    title: "C++ 飞机大战游戏",
    company_name: "个人项目",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2025年10月 - 2025年12月",
    points: [
      "使用C++和EasyX图形库开发2D飞机大战游戏，实现了玩家飞机、敌机、子弹、碰撞检测、分数系统、关卡递进等核心功能",
      "设计了游戏循环、对象池、状态机等核心游戏逻辑，优化了游戏性能，避免了内存泄漏",
      "使用Git进行版本控制，完整源码已开源至GitHub仓库",
    ],
  },
  {
    title: "Java 学生信息管理系统",
    company_name: "课程设计",
    icon: shopify,
    iconBg: "#383E56",
    date: "2025年6月 - 2025年7月",
    points: [
      "使用Java Swing开发GUI界面，MySQL作为数据库，实现了学生信息的增删改查、成绩统计、用户登录权限管理等功能",
      "使用JDBC连接数据库，设计了合理的数据库表结构，实现了数据的持久化存储",
      "项目代码结构清晰，使用了面向对象的设计思想，便于维护和扩展",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "C++ 简易聊天室",
    description:
      "基于Linux环境下C++ Socket编程开发的多人在线聊天室，采用TCP协议实现可靠传输，支持公屏群聊、一对一私聊、用户上下线通知，使用多线程并发模型处理客户端连接，互斥锁保证线程安全，支持10+用户同时稳定运行。",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Socket",
        color: "green-text-gradient",
      },
      {
        name: "Linux",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/LMH-eng",
  },
  {
    name: "C++ 飞机大战游戏",
    description:
      "使用C++和EasyX图形库开发的2D飞机大战游戏，实现了玩家飞机、敌机、子弹、碰撞检测、分数系统、关卡递进等核心功能，游戏体验流畅，代码结构清晰。",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "EasyX",
        color: "green-text-gradient",
      },
      {
        name: "游戏开发",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // 修正image为jobit，和模板一致
    source_code_link: "https://github.com/LMH-eng",
  },
];
export { services, technologies, experiences, testimonials, projects };
