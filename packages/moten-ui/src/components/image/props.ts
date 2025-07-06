import { ComponentViewport } from "@/types/component";
import { PropType } from "vue-demi";

export type MoImagePropsData = {
  /**
   *  图片是否在对应屏幕显示
   * */
  display?: {
    desktop: string;
    mobile: string;
  };
  /**
   *  图片地址，支持桌面和移动端不同的链接
   * */
  src?: {
    desktop: string;
    mobile: string;
  };
  /**
   * 图片链接，支持桌面和移动端不同的链接
   * */
  link?: {
    desktop: string;
    mobile: string;
  };
  /**
   * 图片宽度
   * */
  width?: {
    desktop: string;
    mobile: string;
  };
  /**
   * 图片高度
   * */
  height?: {
    desktop: string;
    mobile: string;
  };
};

export const props = {
  data: {
    type: Object as PropType<MoImagePropsData>,
    default: () => ({
      src: {
        desktop: "",
        mobile: "",
      },
      link: {
        desktop: "",
        mobile: "",
      },
      width: {
        desktop: "100%",
        mobile: "100%",
      },
      height: {
        desktop: "auto",
        mobile: "auto",
      },
    }),
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
