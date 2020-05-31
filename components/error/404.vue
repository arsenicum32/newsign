<template lang="html">
  <div class="layout404">
    <img :src="require('@/assets/tree.svg')" alt="" />
    <h2>Такого слова у нас нету :(</h2>
    <nuxt-link to="/">на главную</nuxt-link>
    <nuxt-link to='/add'>
      добавить слово
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'error-404',
}
</script>

<style lang="scss" scoped>
.layout404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  text-align: center;
  img {
    height: 120px;
  }
  h2 {
    margin-top: 24px;
  }
  a {
    margin-top: 24px;
    cursor: pointer;
  }
}
</style>
