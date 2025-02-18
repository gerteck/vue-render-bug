import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import TestComponent from './src/components/TestComponent.vue'; // Import the custom component


const otherApp = createSSRApp({
    template: '<TestComponent/>',
});
otherApp.component('TestComponent', TestComponent);


renderToString(otherApp).then((html) => {
  console.log(html);
}).catch(err => {
  console.error(err);
});
