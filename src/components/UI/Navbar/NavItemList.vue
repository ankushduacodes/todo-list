<template>
  <div class="justify-content-between">
    <div class="collapse navbar-collapse nav-item"
         id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ml-auto" v-for="itemName in itemList" :key="itemName">
        <NavItem :item-name="itemName"></NavItem>
      </ul>
    </div>
  </div>
</template>

<script>
import NavItem from '@/components/UI/Navbar/NavItem.vue';

export default {
  name: 'NavItemList',
  components: { NavItem },
  props: {
    itemList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar-nav {
  flex-direction: row;
}
</style>
