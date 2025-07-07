import { App } from "vue-demi";

import "./style.css";
import "./assets/styles/index.scss";
// 组件导入
import MoImage from "@/components/image";
import MoColumn from "@/components/column";

// 组件schema导入
import imageSchema from "@/components/image/schema";
import columnSchema from "@/components/column/schema";

import { COMPONENT_PREFIX as _COMPONENT_PREFIX } from "@/config";
import { schemaAllViewport as _schemaAllViewport } from "@/utils/components";

// 导出schema
export const schema = {
  image: imageSchema,
  column: columnSchema,
};

// 导出所有视口尺寸的schema
export const schemaAllViewport = _schemaAllViewport;
// 导出组件前缀
export const COMPONENT_PREFIX = _COMPONENT_PREFIX;

// 组件列表
const components = [MoImage, MoColumn];

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
