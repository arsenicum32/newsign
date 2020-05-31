<template lang="html">
  <div class="fail">

    <div class="">
      <h1>FAIL: {{message}}</h1>
      <nuxt-link to='/add'>
        Новая попытка
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout:'empty',
  data: () => ({
    message: ""
  }),
  beforeRouteEnter({query}, from , next){
    next( v => {
      v.message = query.message
    })
  }
}
</script>

<style media="screen" scoped>
.fail {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

</style>
