<template>
  <div v-if="!$apollo.loading">
    Solution list view
    <div v-if="solutions != null">
      <ul v-for="solution in solutions" :key="solution._id">
        <li>Solution to problem {{solution.problem.name}} with language {{solution.language}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name:"solutionList",
  apollo:{
    solutions:{
      query: gql`
      query GetSolutions{
        getSolutions{
          _id
          source_code
          language
          problem{
            name
          }
        }
      }`,
      update: data=> data.getSolutions
    }
  }
}
</script>

<style>

</style>
