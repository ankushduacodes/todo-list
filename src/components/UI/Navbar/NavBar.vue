<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../../../../src/assets/img/to-do-list.png" alt="Logo"
             width="30" height="30" class="d-inline-block align-text-top">
        Ankush's To-Do List
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavItemList :itemList="itemList"></NavItemList>
    </div>
  </nav>
</template>

<script>
import NavItemList from '@/components/UI/Navbar/NavItemList.vue';

export default {
  name: 'NavBar',
  components: { NavItemList },
  data() {
    return {
      itemList: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'About',
          to: '/about',
        },
        {
          name: 'Contact Me',
          to: '/contact',
        },
      ],
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 767px) {
  .container-fluid {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
