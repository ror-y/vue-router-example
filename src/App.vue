// (add obj spread as dependency + babel plugin)
// delete boilerplate from /src
// add vue-router as a dependency
// create components
// create src/router/index.js and write
// write main.js
// write App.vue
// show Vue dev tools
// add a name to the language in the exported object of each component

<template>
  <div id="app">
    <header>
      <router-link to="/">Lorem Ipsum in different languages</router-link>
    </header>
    <nav>
      <ul>
        <li><router-link to="/armenian">Armenian</router-link></li>
        <li><router-link to="/chinese">Chinese</router-link></li>
        <li><router-link to="/greek">Greek</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-link-active {
  color: turquoise
}
</style>