// 为没有类型声明的模块添加声明
declare module 'module-name' {
  const content: any
  export default content
}

// 或者使用通配符声明所有没有类型声明的模块
declare module '*'
