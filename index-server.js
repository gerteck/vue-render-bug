import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import Test from './src/components/TestComponent.vue'; // Import the custom component
import TestComposition from './src/components/TestComponentComposition.vue';

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
