<template>
  <div id="app">
    <div v-if="list">
      <h1>Working</h1>

      <vaah-vue-pagination :data="list"
                           :limit="2"
                           @onPageChange="getList"/>
    </div>

  </div>
</template>
<style lang="scss">
  @import '~bulma/bulma';
  @import '~bootstrap/dist/css/bootstrap';
</style>

<script>
  import Vue from 'vue';
  import VaahVuePagination from '@/vaah-vue-pagination.vue';

  export default Vue.extend({
    name: 'ServeDev',
    components: {
      VaahVuePagination
    },
    data(){
      let obj = {
        list:{
          "current_page": 1,
          "data": [{
            "id": 2,
            "username": "james",
            "display_name": "James",
            "title": null,
            "first_name": "James",
            "last_name": "charles",
          }],
          "first_page_url": "http://localhost/?page=1",
          "from": 1,
          "last_page": 1,
          "to": 1,
          "total": 1,
          "per_page": 1,
          "last_page_url": "http://localhost/?page=2",
          "next_page_url": "http://localhost/?page=2",
          "path": "http://localhost/",
          "prev_page_url": null,

        }
      }
      return obj;
    },
    methods:{
      getList: function (page) {
        this.list.current_page = page;
      }
    }
  });
</script>