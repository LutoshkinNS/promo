export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export type Port = number;

export interface BuildEnv {
  mode: BuildMode;
  port: Port;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: Port;
}
