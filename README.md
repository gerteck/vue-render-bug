# Solved: need to externalize vue in webpack to ensure vue components render properly.

Works as expected when configured properly in webpack.



## Nested Vue Component does not render when bundled separately with webpack

To replicate behavior where nested vue component does not render, do the following:

### Bundle Everything (Nested Component Renders Fine)

When I bundle and compile Vue components and server-side Vue code in the same bundle.

```
npx webpack --config webpack.config.js
node dist/bundleWithServer.js
```
Output:
```
<!--[-->
<div> Hello from Test1! <p class="greeting">Hello from Test2!</p></div>
<!-- vs. -->
<div> Hello from Test1! <p class="greeting">Hello from Test2!</p></div>
<!--]-->
```

### Bundle just Vue Components (Nested Component does not render for Options API)

When I bundle Vue Components using webpack then use components (ultimately for SSR),
the nested vue component does not render. 

```
npx webpack --config webpack-vue.config.js
node index.mjs
```

Output:
```
<!--[-->
<div> Hello from Test1! <p class="greeting">Hello from Test2!</p></div>
<!-- vs. -->
<div> Hello from Test1! <p class="greeting">Hello from Test2!</p></div>
<!--]-->
```

### Tested on
* Vue@3.3.11
* Vue@3.5.13

Opened issue: https://github.com/vuejs/core/issues/12905
