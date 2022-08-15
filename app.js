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
      url: "https://www.linkedin.com/in/moaaz-bhnas/",
      number: 0,
      numbers: [0, 1, 2],
      numberVisible: true,
    };
  },
  methods: {
    updateNumber() {
      this.number = 5;
    },
    toggleNumber() {
      this.numberVisible = !this.numberVisible;
    },
  },
});

app.mount("#app");
