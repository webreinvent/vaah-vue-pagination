<script>
import Vue from 'vue';
import VaahVuePagination from '@/vaah-vue-pagination.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VaahVuePagination
  }
});
</script>

<template>
  <div id="app">
    <vaah-vue-pagination />
  </div>
</template>
