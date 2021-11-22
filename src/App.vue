<template>
  <div id="app">
    <router-view  :key="$route.path"/>
  </div>
</template>


<script>


export default {
  watch: {
    $route () {
      const categoryIndex = this.$store.state.categories.findIndex((el) => {
        return el.categoryName === this.$route.params.slug
      })

      if (categoryIndex >= 0) {
        this.$store.commit('setCurrentKey', categoryIndex);
      }
    }
  },
  created() {
    if (localStorage.state) {
      this.$store.commit('loadStateFromLocalStorage', JSON.parse( localStorage.state))
    }

    this.$store.subscribe((mutation, state) => {
      localStorage.setItem('state', JSON.stringify(state))
    })
  }



}
</script>


<style>
:root {
  --font-color: #6C6C6C;
  --font-pale-color: #E4E4E4;
  --background-select-color: #EEF4F3;
  --border-color: #e4e4e4;

  font-family: 'Roboto', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: var(--font-color);
  
  font-size: 16px;
}
</style>
