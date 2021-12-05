const LOCALHOST_END_POINT = "https://localhost:3000";
const DEVELOP_END_POINT = "https://darass-module.netlify.app";
const PRODUCTION_END_POINT = "https://darass-module.netlify.app";

const END_POINT_TABLE = {
  localhost: LOCALHOST_END_POINT,
  development: DEVELOP_END_POINT,
  production: PRODUCTION_END_POINT
} as const;

export const END_POINT = END_POINT_TABLE[process.env.BUILD_MODE as keyof typeof END_POINT_TABLE];

export const URL_REPLACE_TABLE = [
  { from: "://m.", to: "://" },
  { from: "/m/", to: "/" }
] as const;

export const CLOSE_MODAL_ANIMATION_FINISH_TIME = 200;
