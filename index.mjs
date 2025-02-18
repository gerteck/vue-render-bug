
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

// Use import for bundled components
import pkg from './dist/vue-components.bundle.js';
const { Test, TestComposition } = pkg;

const otherApp = createSSRApp({
    template: '<Test/> <!-- vs. --> <TestComposition/>',
});
otherApp.component('Test', Test);
otherApp.component('TestComposition', TestComposition);


renderToString(otherApp).then((html) => {
  console.log(html);
}).catch(err => {
  console.error(err);
});
