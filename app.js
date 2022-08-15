/*
  - This object represents the "root component"
  - It's the component that will be controlling the app section 
  - This object contains
    * data
    * functions (e.g. to react to events)
    * component template
*/
const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
});

app.mount("#app");
