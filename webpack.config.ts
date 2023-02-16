import path from 'path';
import process from 'process';
import dotenv from 'dotenv';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';

    const isDev = mode === 'development';

    dotenv.config({
        path: path.resolve(
            __dirname,
            `.env.${isDev ? 'development' : 'production'}`
        ),
    });

    const PORT = Number(process.env.DEV_SERVER_PORT) || 3000;

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
};
