<template>
  <div class="home">
    <div id="nav">
      <router-link to="/cv-online">Create your cv-online</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
