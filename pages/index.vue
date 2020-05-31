<template>
  <div class="container">
      <div class="main">
        <div class="description">
          <h1> Найди новый жест</h1>
          <p>Введите слово на русском языке, чтобы найти подходящий жест</p>
        </div>
        <Search />
        </div>
        <div style="margin-bottom: 256px">

        </div>
  </div>

</template>

<script>
import Search from '@/components/search.vue'

export default {
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
.main {
  display:block;
  justify-content: center;
  /* background-color: #f6ece3; */
  margin: auto;
  padding-top: 20px;
}

.description {
 padding: 4px;
 width: 50%;
 text-align: center;
 margin: auto;
 margin-bottom: 40px;
 min-width: 200px;
 h1 {
   margin-bottom: 1em;
   font-size: 32px;
   line-height: 1.1;
 }
 p {
   font-size: 20px;
   line-height: 1.1;
 }
}

</style>
