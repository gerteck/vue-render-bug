# Bundle Everything

When I bundle and compile Vue components and server-side Vue code in the same bundle.

```
npx webpack --config webpack.config.js
node dist/bundleWithServer.js
```
Output:
```
<div> Hello from Test1! <p class="greeting">Hello from Test2!</p></div>
```

# Bundle just Vue Components

When I bundle Vue Components using webpack then use components (ultimately for SSR),
the nested vue component does not render. 

```
npx webpack --config webpack-vue.config.js
node index.mjs
```

Output:
```
<div> Hello from Test1! <!----></div>
```

