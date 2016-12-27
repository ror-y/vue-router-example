<template>
  <div id="app">
    <header>
      <router-link to="/" exact>Lorem Ipsum in different languages</router-link>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/armenian">Armenian</router-link>
        </li>
        <li>
          <router-link to="/chinese">Chinese</router-link>
        </li>
        <li>
          <router-link to="/greek">Greek</router-link>
        </li>
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