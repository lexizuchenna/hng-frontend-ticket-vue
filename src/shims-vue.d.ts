declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
