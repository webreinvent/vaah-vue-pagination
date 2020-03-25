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
            "id": 1,
            "uuid": "ab61142c-ca0a-48d1-9fe6-a269d245570e",
            "email": "subrat.b@webreinvent.com",
            "username": "subratb-at-webreinventcom",
            "display_name": "subrat.b",
            "title": null,
            "first_name": "Subrat",
            "middle_name": "",
            "last_name": "Bhol",
            "gender": "m",
            "country_calling_code": null,
            "phone": null,
            "timezone": null,
            "alternate_email": null,
            "avatar_url": null,
            "birth": null,
            "country": null,
            "country_code": null,
            "status": null,
            "activation_code": null,
            "activation_code_sent_at": null,
            "activated_at": null,
            "activated_ip": null,
            "invited_by": null,
            "invited_at": null,
            "user_id": null,
            "user_created_at": null,
            "meta": null,
            "created_ip": "::1",
            "created_by": 1,
            "updated_by": null,
            "deleted_by": null,
            "created_at": "2020-03-19 00:13:39",
            "updated_at": "2020-03-19 00:13:39",
            "deleted_at": null,
            "name": "Subrat Bhol"
          }],
          "first_page_url": "http:\/\/localhost\/vaahcms-dev-env\/public\/backend\/vaah\/registrations\/list?page=1",
          "from": 1,
          "last_page": 1,
          "last_page_url": "http:\/\/localhost\/vaahcms-dev-env\/public\/backend\/vaah\/registrations\/list?page=1",
          "next_page_url": null,
          "path": "http:\/\/localhost\/vaahcms-dev-env\/public\/backend\/vaah\/registrations\/list",
          "per_page": 1,
          "prev_page_url": null,
          "to": 1,
          "total": 1

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