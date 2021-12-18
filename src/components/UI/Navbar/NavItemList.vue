<template>
  <div class="collapse navbar-collapse nav-item"
       id="navbarSupportedContent">
    <ul class="navbar-nav mb-2 mb-lg-0" v-for="itemName in itemList" :key="itemName">
      <NavItem :item-name="itemName"></NavItem>
    </ul>
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
.navbar-collapse {
  margin-left: 50px
}
</style>
