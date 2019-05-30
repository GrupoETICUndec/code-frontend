<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <ul v-for="problem in problems" v-bind:key="problem.id">
      <li>{{problem.name}}</li>
    </ul>
  </div>
</template>

<script>
const gql = require('graphql-tag')

export default {
  name: "problemList",
  apollo: {
    problems: {
      query: gql`
              query problems{
                getProblems{
                  _id
                  name
                  description
                }
              }`,
      update: (data)=> (data.getProblems)
    }
    
  }
  // data(){
  //   return({
  //     problems: this.$store.state.problems
  //   })
  // },
  // methods: {
  //   getProblems(){
  //     this.$store.dispatch('getProblems');
  //   }
  // },
  // beforeMount() {
  //   this.getProblems();
  //   this.problems = this.$store.state.problems
  // },
  // beforeUpdate() {
  //   this.getProblems();
  // },
    
}
</script>

<style>

</style>
