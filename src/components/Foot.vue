<template>
  <footer>
    Data retrieved from <a :href="sourceURL">{{ sourceURL }}</a>
  </footer>
</template>

<script>
  export default {
    name: 'Foot',
  computed: {
      splitEndpoint: function () {
        return this.$store.state.endpoint.split('/')
      },

      sourceURL: function () {
        return this.splitEndpoint[0] + this.splitEndpoint[1] + this.splitEndpoint[2];
      }
    }

  }
</script>

<style scoped lang="scss">
  footer {
    text-align: center;
    padding: 1rem;
    background: $gray--light;
  }

  a {
    font-weight: bold;
  }
</style>
