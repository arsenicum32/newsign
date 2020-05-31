<template lang="html">
  <div class="addword" v-if="!$store.state.auth.loggedIn">
    <div class="but">
      <h2>Чтобы добавить слово авторизируйтесь с помощью аккаунта Гугл</h2>
      <button type="button" name="button" @click="login">sign with google</button>

    </div>

  </div>
  <div class="addword" v-else>
    <form class="" action="/api/put/video" method="get">
      <p>Вы можете пополнить наш словарь. <br> Для этого в форме введите нужное слово и вставьте ссылку на видео с жестом.
      </p><br>
      <p>  <b>Важно!</b> Видео должно быть загружено на YouTube. Мы делаем это для того, чтобы не перегружать наш сайт :)</p>
      <br>
      <input type="hidden" v-model="user.name" name="name" />
      <input type="hidden" v-model="user.email" name="email" />
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
  computed: {
    user(){
      return this.$store.state.auth.user
    }
  },
  mounted() {
    console.log(this.$store.state.auth.user);
  },
  methods: {
    login (){
      this.$auth.loginWith('google')

    }
  }
}
</script>

<style lang="scss" scoped>
.but {
  max-width: 600px;
}
small {
  color: grey;
}
button{

    background: black;
    color: white;

  padding: 8px 12px;
  border: none;
  font-size: 1.2em;
  margin: 12px 0;

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
