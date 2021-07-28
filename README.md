# matrix

1. Create monorepo app, based on Learna and yarn workspaces, where:
-- First module is React app with Typescript. App should be set up from scratch
-- Second module is express app with Typescript, that handles 1 endpoint
-- Third module is util library with Typescript, that has 2 functions:
-- First receives a number and multiplies it by 2
-- Second receives a number and elevates it to a square

 The flow is the following:
1. React app has an input, which takes a number and sends it to API.
2. Api receives user input, multiplies it by 2 (using util library) and returns to frontend.
3. Frontend receives resposnse from an API, elevates it to a square (using util library) and displays on the UI


the structure will be next:

mono-repo/
  package.json
  packages/
    package-a/web
      package.json
    package-b/util
      package.json
    package-c/node
      package.json


1. init repo via yarn / yarn init
2. add dependencies lerna and typescript
3. add lerna setting via lerna init

4. add package for utils
5. configure process for build utils
---
6. add package for web
7. configure tsconfig
8. add dependencies for react/ react dom
9. create index.html and index.tsx files
10. add dependencies for babel
11. add aditional deps yarn add -D  @babel/runtime  @babel/plugin-transform-runtime
12. add babelrc config
11. add dependencies for types react and types react-dom
12. add dependencies for webpack
yarn add --dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader html-webpack-plugin clean-webpack-plugin
11. create webpack config


-----------------------RESOURCES-----------------------
https://medium.com/ah-technology/a-guide-through-the-wild-wild-west-of-setting-up-a-mono-repo-with-typescript-lerna-and-yarn-ed6a1e5467a
https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d

https://betterprogramming.pub/complete-guideline-to-creating-a-modern-react-app-with-typescript-from-scratch-cebbb5817d8

