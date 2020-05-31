<template>
  <div class="word_id">
    <div class="main">
      <Search />
    </div>
    <div class="box">
      <h1>{{word}}</h1>
      <div class="">
        <div class="">
          <iframe v-if="url" width="400" height="300" :src="'https://www.youtube.com/embed/'+url" frameborder="0" allowfullscreen></iframe>
          <img v-else src="https://placehold.it/640x480" alt="" />
        </div>
        <p>Добавлено: {{name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'

export default {
  components: {
    Search
  },
  computed: {
    word: {
      get(){
        return this.$store.state.word || ''
      },
      set( value ){
        this.$store.commit('hello', value )
      }
    },
    url(){
      const item = this.$store.state.videos.find( ({word}) => word === this.word )
      return item && item.id
    },
    name(){
      const item = this.$store.state.videos.find( ({word}) => word === this.word )
      return item && item.name
    }
  },
  // watch: {
  //   word(to){
  //     console.log(
  //       to
  //     )
  //     this.load()
  //   }
  // },
  middleware: 'word',
  methods: {
    async load(){
      if ( this.word ){
        if (!this.$store.state.videos.length ){
          const { data } = await this.$axios.get('/api/get/videos')
          this.$store.commit( 'put',data )
        }
      }
    }
  },
  async mounted(){
    await this.load()
  },
  beforeRouteUpdate({params}, from , next){
    next( v => {
      this.word = params.id || ''
    })
  },
  beforeRouteEnter({params}, from , next ){
    next( v => {
      v.word = params.id || ''
    })
  }
}
</script>

<style lang="scss" scoped>
.word_id {
  .box {
    margin: auto;
    max-width: 400px;
    background-color: white;
  }
  h1 {
    margin: 24px 0;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
  p {
    margin-top: 12px;
    margin-bottom: 72px;
  }
}
</style>
