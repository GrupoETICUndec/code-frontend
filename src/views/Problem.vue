<template>
  <div >
    <div v-if="!$apollo.loading">
      <div>
        {{problem.name}}
        <br/>
        {{problem.description}}
      </div>
      <SolutionForm :problemId="routeParam" />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Loading from '../components/Loading'
import SolutionForm from '../components/SolutionForm'
export default {
  name: "Problem",
  components:{
    Loading,
    SolutionForm
  },
  data(){
    return{
      routeParam: this.$route.params.id
    }
  },
  apollo:
  {
    problem:{
      query: gql`
        query getProblem($problemId: ID!) {
          getProblem(problemId: $problemId){
            name
            description
          }
      }`,
      // Static parameters
      variables(){
        return({
          problemId: this.routeParam,
        })
      },
      update: data => data.getProblem
    }
  }
}
</script>

<style>

</style>
