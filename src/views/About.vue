<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import bus from '../bus';

export default {
  name: "About",
  created: function () {
      bus.$emit('toggleLoading', false);
  }
};
</script>