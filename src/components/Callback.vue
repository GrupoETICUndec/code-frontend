<template>
  <div>
    <p>loading...</p>
  </div>
</template>

<script>
export default {
 methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/");
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
}
</script>

<style>

</style>
