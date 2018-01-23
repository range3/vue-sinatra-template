# vue-sinatra-template
A simple Vue.js + Sinatra template. the follwing packages are included.
- vue
- vue-router
- vuex
- sass
- eslint
- sinatra

## Usage
### Development
```bash
$ npm install -g vue-cli
$ vue init range3/vue-sinatra-template my-project
$ cd my-project
$ npm install
$ bundle install --path vendor/bundle
$ bundle exec foreman start -f Procfile.dev
```
and then access to http://localhost:8080/

### Deploy to Heroku
```bash
$ cd /path/to/my-project
$ heroku login
$ heroku git:remote -a appname
$ heroku buildpacks:add heroku/nodejs
$ heroku buildpacks:add heroku/ruby
$ heroku config:set NPM_CONFIG_PRODUCTION=false
$ git push heroku master
```
