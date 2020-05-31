<template>
  <div>
    <header>
      <div class="about">
        <nuxt-link :to="$route.path === '/about'? '/': '/about'"><b>{{
          $route.path === '/about'? 'на главную': 'О сайте'}}</b></nuxt-link>
</div>

    </header>
    <nuxt />
  </div>
</template>


<style lang="scss">
@import '@/styles/main';
</style>
