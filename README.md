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





-----------------------RESOURCES-----------------------
https://medium.com/ah-technology/a-guide-through-the-wild-wild-west-of-setting-up-a-mono-repo-with-typescript-lerna-and-yarn-ed6a1e5467a
https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d