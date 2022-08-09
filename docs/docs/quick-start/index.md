# 快速开始

## 环境安装

1. 进入 [node 官网](https://nodejs.org/en/)安装 `node`稳定版
2. 在终端里输入 `node -v`, 若出现安装的版本号，则表示安装成功，否则重复第一步
3. 在终端里输入 `npm i -g pnpm`, 安装 `pnpm`
4. 在终端里输入 `pnpm -v`, 若出现安装的版本号，则表示安装成功，否则重复第三步, `pnpm`版本必须大于 7

## 启动项目

1. 在终端输入 `git clone https://github.com/LadyChatterleyLover/cc-ui-monorepo` 克隆项目
2. 进入项目，在项目根目录输入 `pnpm docs:dev`启动项目
3. 在浏览器访问 `http://localhost:3000`即可访问项目

## 项目结构

1. `docs`: 组件库文档
2. `packages`: 组件库代码
   1. `components`: 组件代码
   2. `hooks`: 自定义 `hooks`
   3. `theme-chalk`: 组件样式
   4. `utils`: 工具函数
3. `play`: 预览环境
4. `types`: 类型声明
