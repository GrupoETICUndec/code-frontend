<template>
  <div>
    <Loading />
  </div>
</template>

<script>
import Loading from './Loading';
export default {
  components:{
    Loading
  },
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
