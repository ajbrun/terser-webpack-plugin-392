# terser-webpack-plugin-392
To demonstrate issue 392

`git clone https://github.com/ajbrun/terser-webpack-plugin-392.git`

`cd terser-webpack-plugin-392`

`npm i`

`npm run build`

**Actual result in dist/main.js**

`const config_namespaceObject = JSON.parse('{"I":{"Q":"SITE_KEY"}}');`

**Expected result in dist/main.js**

`const i=JSON.parse('{"configSection2":{"siteKey":"SITE_KEY"}}');`
