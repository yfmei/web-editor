# Project Structure
```markdown
│  .babelrc                   # babel config, a tool that makes you use arrow function and transform es6+ to es5
│  .editorconfig              # format charset, indent-style, indent-size
│  .eslintignore              # ignore files which you don't want to be validated
│  .eslintrc.js               # validate and uniform your team code format
│  .gitignore                 
│  .postcssrc.js              # 
│  FAQ
│  index.html                 # just app container
│  package.json               # your project info and dependencies
│  README.md
│  web-editor.iml
│
├─build                       # webpack build config
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js     # load .vue files
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│
├─cli
├─config                      # node server port 
│      dev.env.js
│      index.js
│      prod.env.js
│
├─demo                        # you can find samples in this directory
│  ├─autorun
│  │      autorun.html
│  │
│  └─simple
│          div.html
│          textarea.html
│
├─src                         # source code directory
│  │  App.vue
│  │  main.js                 # app entry point
│  │
│  ├─assets                   # images, icon, font etc.
│  │      logo.png
│  │
│  ├─components               # vue components
│  │      HelloWorld.vue
│  │
│  └─router                   # vue router
│          index.js
│
└─static                      # your custom CSS/JS, will direct copy into the directory /dist
    │  .gitkeep
    │
    ├─css
    │  ├─common
    │  │      common.css
    │  │
    │  └─simple
    │          simple.css
    │
    └─js
        └─common
                common.js
                dom.js
                log.js
                str.js
```
