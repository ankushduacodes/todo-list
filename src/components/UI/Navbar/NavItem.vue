<template>
  <li class="nav-item">
    <router-link class="nav-link router-link-active" :to="itemName.to" aria-current="page" href="#">
      {{itemName.name}}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  data() {
    return {

    };
  },
  props: {
    itemName: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.nav-item {
  margin-right: 3em;
}
.router-link-active {
  color: white;
}
</style>
