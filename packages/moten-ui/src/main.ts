import { App } from "vue-demi";

import "./style.css";
import "./assets/styles/index.scss";

import MoImage from "@/components/image";
import imageSchema from "@/components/image/schema";

import { schemaAllViewport as _schemaAllViewport } from "@/utils/components";

// 导出schema
export const schema = {
  image: imageSchema,
};

// 导出所有视口尺寸的schema
export const schemaAllViewport = _schemaAllViewport;

// 组件列表
const components = [MoImage];

// 全局组件安装
const install = (
  app: App,
  options: {
    platform: "editor" | "user";
  }
) => {
  components.forEach((component) => {
    const { name } = component;
    if (name) app.component(name, component);
  });
  app.provide("platform", options.platform);
};

// 导出安装函数和组件
export default { install, ...components };
