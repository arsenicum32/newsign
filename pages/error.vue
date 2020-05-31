<template>
  <div class="container">
    <header>
      <div class="menu">
        <a href="/about"><b>О сайте</b></a>
        <a href="/"><b>На главную</b></a>
      </div>
    </header>
    <div class='search-container'>
      <div class='form'>
      <input id='search-field' type='text' placeholder='Введите слово'>
      <button id='search-btn' type='submit'> Поиск </button>
      </div>
    </div>
    <div class="wrapper">
      <div class="text"><h1><b>Слово не найдено :(</b></h1>

      </div>

     </div>

    <footer>
      <p>Евтодиева Анна<br> anitta1999@gmail.com</p>
    </footer>
  </div>
</template >


<style lang="scss" scoped>

.container {
  .menu {
    margin-left: 12px;
    float: right;
    margin-right: 20px;

  }


  .search-container {

    width: 100%;

  }


  .form {
    margin-left: 24px;
  }


  input {
    height: 50px;
    font-size: 15px;
    outline:none;
    &:focus {
      outline:none;
      border-color: grey;
    }
  }

  button {
      margin: 10px;
      transform-style: preserve-3d;
      box-shadow: 5px 5px;
      border-radius: 3px;
      color: #696969;
      background: white;
      border: none;
      height: 50px;
      width: 100px;
      font-size: 20px;
      transition: .2s linear, border-radius .2s linear 1.15s;
      &:hover {
        color: #1f1f1f;
        text-decoration: none;
        transition: all.6s ease;
        -moz-transition: all.6s ease;
        -webkit-transition: all.6s ease;
        -ms-transition: all.6s ease;
      }
    }

  .wrapper {
    margin: 24px;
  }
}
</style>
