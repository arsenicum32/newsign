<template lang="html">
  <div class="addword" v-if="!$store.state.auth.loggedIn">
    <button type="button" name="button" @click="login">sign with google</button>

  </div>
  <div class="addword" v-else>
    <form class="" action="/api/put/video" method="get">
      <p>Вы можете пополнить наш словарь. <br> Для этого в форме введите нужное слово и вставьте ссылку на видео с жестом.
      </p><br>
      <p>  <b>Важно!</b> Видео должно быть загружено на YouTube. Мы делаем это для того, чтобы не перегружать наш сайт :)</p>
      <br>

      <input type="text" name="word" placeholder="Слово" value="" />
      <input type="text" name="url" placeholder="URL с youtube" value="" />
      <input type="submit" value="Добавить слово" />
      <br>
  <small>После добавления нового жеста, ваше видео будет отображаться на сайте при поиске. Загружая видео, вы автоматически даете свое согласие на его использования вашего видео. Если вы захотите его удалить, пишите нам на почту: neologism.rsl.gmail.com</small>
 </form>
  </div>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    login (){
      this.$auth.loginWith('google')
    }
  }
}
</script>

<style lang="scss" scoped>
small {
  color: grey;
}
.addword {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  form {
    display: flex;
    flex-direction: column;
    width: 380px;
  }
  input {
    &[type="submit"]{
      background: black;
      color: white;
  }
    padding: 8px 12px;
    border: none;
    font-size: 1.2em;
    margin: 12px 0;
    background: #eee;
  }
}

</style>
