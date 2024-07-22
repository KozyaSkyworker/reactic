import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({paths, isDev, project}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
      new HtmlWebpackPlugin({ template: paths.html }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:9].css',
        chunkFilename: 'css/[name].[contenthash:9].css',
      }),
      new webpack.DefinePlugin({
        __PROJECT__: JSON.stringify(project)
      })
    ]

    if (isDev){
      plugins.push(new BundleAnalyzerPlugin({
        openAnalyzer: false
      }))
    }

    return plugins
}