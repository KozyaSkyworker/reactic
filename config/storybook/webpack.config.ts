import path from "path"
import { BuildPaths } from "../build/types/config"
import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import { buildCssLoader } from "../build/loaders/buildCssLoader"

export default({config}: {config: webpack.Configuration}) => {

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
      }

    config!.resolve!.modules!.push(paths.src)
    config!.resolve!.extensions!.push('.ts', '.tsx')

    // исключаем обработку svg 
    // @ts-expect-error because
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule)=>{
      if (/svg/.test(rule.test as string)){
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })

    config!.module!.rules.push( {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    })

    config!.module!.rules.push(buildCssLoader(true))

    config!.plugins!.push(new DefinePlugin({
      __PROJECT__: JSON.stringify('storybook')
    }))

    return config
}