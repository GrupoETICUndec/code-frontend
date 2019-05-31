<template>
  <div>
    <form @submit.prevent="sendSolution">
      <textarea v-model="source_code" placeholder="Insert Code here"></textarea>
      <select v-model="language">
       <option value="4"  selected>C (gcc 7.2.0)</option>
       <option value="10" >C++ (g++ 7.2.0)</option>
       <option value="34" >Python (3.6.0)</option>
      </select>
      <button type="submit"> Submit</button>
    </form>
  </div>  
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: "SolutionForm",
  props: ['problemId'],
  data(){
    return {
      source_code: "",
      language: "",
    }
  },
  methods:{
    sendSolution(){
      const solution = {
        problemId:    JSON.stringify(this.source_code),
        source_code:  JSON.stringify(this.problemId),
        language:     parseInt(this.language)
      }
      this.$apollo.mutate({
        // Query
        mutation: gql`
        mutation NewSolution($solution: SolutionInput){
          newSolution(solutionInput: $solution){
            _id
          }
        }
        `,
        // Parameters
        variables:{
          solution
        },
      })
    }
  },
}
</script>

<style>

</style>
