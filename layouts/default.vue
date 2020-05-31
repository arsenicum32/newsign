<template>
  <div>
    <header>
      <div class="about">
        <nuxt-link v-if="$route.path !== '/add'" to="/add"><b>Добавить слово</b></nuxt-link>
      </div>
      <div class="about">
        <nuxt-link :to="$route.path === '/about'? '/': '/about'"><b>{{
          $route.path === '/about'? 'На главную': 'О сайте'}}</b></nuxt-link>
</div>

    </header>
    <nuxt />
    <footer>
      <p>Евтодиева Анна<br> anitta1999@gmail.com</p>
      <nuxt-link to="/sitemap">Смотерть все жесты </nuxt-link>
    </footer>
  </div>
</template>


<style lang="scss" scoped>
@import '@/styles/main';

footer {
  a {
    color: white;
    float: right;
    margin-right: 10px;
  }
  width: 100%;
  background-color: #1f1f1f;
  min-height: 40px;
  border-top: 2px white;
  margin-top: 60px;
  height: 80px;
  p {
    padding-top: 16px;
    padding-left: 12px;
    color: #FAF0E6;
    font-size: 12px;
  }
}
</style>
