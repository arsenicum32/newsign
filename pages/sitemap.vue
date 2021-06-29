<template lang="html">
  <div class="">
<div class="glos">
  <h1>Глоссарий</h1>
  <nuxt-link v-for="(word, i) in words" :to="`/word/${word}`" :key="i">{{word}}</nuxt-link>

</div>

  </div>

</template>

<script>
export default {
  computed: {
    tips(){
      return this.display && (this.words||[]).length && (this.text||'').length > 1
    },
    words(){
      return (this.$store.state.videos||[]).map( ({word}) => word)//.filter( word => new RegExp(this.text || '', 'i').test(word) )
    }
  },
  async mounted(){
    if (!this.$store.state.videos.length){
      const { data } = await this.$axios.get('/videos.json')
      this.$store.commit( 'put', data )
    }
  },

}
</script>

<style lang="css" scoped>
.glos {
  margin-left: 24px;
}
a {display: block;
margin: 24px auto;
}

</style>
