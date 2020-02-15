<style scoped>
.home {
    display: flex;
    flex-direction: column;
    width: auto;
    justify-content: center;
    align-items: center;
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import bus from '../bus';
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created: function () {
      bus.$emit('toggleLoading', false);
  }
};
</script>
