import {VaahVuePagination} from './../dist/vaah-vue-pagination.min.js'

const app = new Vue({
    el: '#app',
    data: {
        assets: null,
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
            "last_page": 2,
            "last_page_url": "http://localhost/?page=2",
            "next_page_url": "http://localhost/?page=2",
            "path": "http://localhost/",
            "per_page": 1,
            "prev_page_url": null,
            "to": 1,
            "total": 2
        }
    },
    components:{
        VaahVuePagination
    },
    mounted() {

    },
    methods:{

        //-----------------------------------------------------------
        getHelper: function () {
            this.$vaahcms.console('test');
            console.log('test');
        },
        //-----------------------------------------------------------



        //-----------------------------------------------------------
        //-----------------------------------------------------------
    }
});