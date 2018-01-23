import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'

const configPath =
  path.resolve('config', 'webpack.yml')

export const isProd =
  process.env.NODE_ENV === 'production'

export const settings =
  yaml.safeLoad(fs.readFileSync(configPath, 'utf8'))[process.env.NODE_ENV]
