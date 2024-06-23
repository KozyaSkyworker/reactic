import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  webpack  from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    
    const fileLoader =  {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:9]",
                },
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }    

    return [
        fileLoader,
        svgLoader,
        tsLoader,
        cssLoader
    ]
}