<template>
  <div>
    <form @submit.prevent="sendSolution">
      <textarea v-model="source_code" placeholder="Insert Code here"></textarea>
      <br/>
      <select v-model="language" style="border: 1px solid black">
       <option value="4"  selected>C (gcc 7.2.0)</option>
       <option value="10" >C++ (g++ 7.2.0)</option>
       <option value="34" >Python (3.6.0)</option>
      </select>
      <br/>
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
        problemId:    JSON.stringify(this.problemId),
        source_code:  JSON.stringify(this.source_code),
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
      }).then(data=>console.log(data))
    }
  },
}
</script>

<style>

</style>
