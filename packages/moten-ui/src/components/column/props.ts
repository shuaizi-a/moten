import { ComponentViewport } from "@/types/component";
import { PropType } from "vue-demi";

export type MoColumnPropsData = {
  /**
   * 当前组件的栅格布局配置
   */
  clos?: {
    desktop: number[];
    mobile: number[];
  };
  /**
   * 背景色配置
   */
  background: {
    desktop: string;
    mobile: string;
  };
};

export type MoColumnPropsList = {
  desktop: any[][];
  mobile: any[][];
};

export const props = {
  data: {
    type: Object as PropType<MoColumnPropsData>,
    default: () => ({
      clos: {
        desktop: [0.5, 0.5],
        mobile: [0.5, 0.5],
      },
      background: {
        desktop: "",
        mobile: "",
      },
    }),
  },
  children: {
    type: Object as PropType<MoColumnPropsList>,
    default: () => {
      return {
        desktop: [[], []],
        mobile: [[], []],
      };
    },
  },
  viewport: {
    type: String as PropType<ComponentViewport>,
    default: "desktop",
    /**
     * 验证输入值是否为预设的字符串之一
     *
     * @param val 待验证的字符串
     * @returns 如果 val 是 "desktop" 或 "mobile" 之一，则返回 true；否则返回 false
     */
    validator(val: string) {
      return ["desktop", "mobile"].includes(val);
    },
  },
};
