
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
// Use import for bundled components
import pkg from './dist/vue-components.bundle.js';
const { Test } = pkg;

const otherApp = createSSRApp({
    template: '<Test/>',
});
otherApp.component('Test', Test);


renderToString(otherApp).then((html) => {
  console.log(html);
}).catch(err => {
  console.error(err);
});
