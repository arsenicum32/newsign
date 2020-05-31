<template lang="html">
  <div class='search-container'>
    <div class='box search_box'>
      <img src="\search.svg">
      <div style="display: flex;"></div>
    <input @keyup="setcursorkey" @focus="display=true" @blur="blur" v-model="text" type='text' placeholder='Введите слово'>
    <!-- <span @click="search" class="label_enter">
      <span> Поиск </span>
    </span> -->
    </div>
    <div v-if="tips" class="box search_list">
      <p @click="search" @mouseover="setcursor(i)" v-for="(word,i) in words" :key="i">{{word}} <b v-if="activeWord === i" style="float: right">enter</b></p>
    </div>
    <!-- <div class="random"><a class="randomwords">RANDOM<img src='\random.svg'></a> </div> -->
    <!-- <button id='search-btn' type='submit'> Поиск </button>
    </div> -->

  </div>
</template>

<script>
export default {
  computed: {
    tips(){
      return this.display && (this.words||[]).length && (this.text||'').length > 1
    },
    words(){
      return (this.$store.state.videos||[]).map( ({word}) => word).filter( word => new RegExp(this.text || '', 'i').test(word) )
    }
  },
  async mounted(){
    if (!this.$store.state.videos.length){
      const { data } = await this.$axios.get('/api/get/videos')
      this.$store.commit( 'put', data )
    }
  },
  data : () => ({
    text: "",
    display: false,
    videos: [],
    activeWord: -1,
  }),
  methods: {
    blur(){
      setInterval(() => this.display=false , 10)
    },
    setcursorkey({keyCode}){
      if ( keyCode === 40 && this.activeWord < this.words.length -1 )
        this.activeWord++
      else if ( keyCode === 38 && this.activeWord > 0)
        this.activeWord--
      else if ( keyCode === 13 )
        this.search()
    },
    setcursor(i){
      this.activeWord = i
    },
    async search(){
      if ( this.words[this.activeWord] ) {
        this.text = this.words[this.activeWord]
        this.$store.commit('hello', this.text.trim() )
      }

      this.$router.push({
        path: '/word/'+this.text,
        query : {
          ...this.$route.query
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  .box {
    margin: auto;
    max-width: 400px;
    background-color: white;
    img {
      width: 24px;
      margin: 12px;
    }
  }
  .search_list {
    box-shadow: 0 12px 15px rgba(0,0,0,.15);
    max-height: 185px;
    overflow-y: scroll;
    p {
     font-size: 18px;
     padding: 8px 48px;
     cursor: pointer;
       &:hover{
         background: #eee;
       }
     }
  }

  input {
    border: none;
    font-size: 1em;
    margin: 0;
    flex:2;
      outline:none;
    /* height: 50px;
    font-size: 15px;
  */

  }
  .label_enter {
    cursor: pointer;
    margin-right: 8px;
    border-radius: 3px;
    display: flex;
    height: 30px;
    line-height: 25px;
    padding: 2px 8px;
    background: black;
    color: white;
  }
  .search_box {
    border: 2px solid #000;
    text-align: center;
    display: flex;
    align-items: center;
    height: 44px;
  }
}
</style>
