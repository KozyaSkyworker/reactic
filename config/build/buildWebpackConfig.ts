import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from 'webpack'
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),

        // зачем собственном в проде это
        devtool: isDev ? 'inline-source-map' : undefined, // inline-source-map чтобы видеть где в каком файле всё сломалось
        devServer: isDev ? buildDevServer(options) : undefined
    }
}