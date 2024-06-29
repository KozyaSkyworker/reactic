import  webpack  from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"

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

    const cssLoader = buildCssLoader(options.isDev)

    return [
        fileLoader,
        svgLoader,
        tsLoader,
        cssLoader
    ]
}