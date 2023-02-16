declare module "*.module.css";
declare module "*.module.scss";
declare module "*.svg?url" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.jpg";
declare module "*.png";
