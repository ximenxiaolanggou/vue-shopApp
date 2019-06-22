<template>
    <div>
      {{id}}
    </div>
</template>

<script>
    export default {
        name: "newsInfo",
        data(){
          return {
            id:null
          }
        },
      mounted() {
          this.id = this.$route.params.id;
      }
    }
</script>

<style scoped>

</style>
