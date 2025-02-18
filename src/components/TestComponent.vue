<template>
    <div>
      Hello from Test1!
      <test2 />
    </div>
  </template>
  
  <script>
  import test2 from './Test2Component.vue';
  
  export default {
    components: {
      test2,
    },
  };
  
  </script>
  