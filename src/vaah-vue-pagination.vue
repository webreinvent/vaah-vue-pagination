<template>
  <div class="vaah-vue-pagination" :class="version" v-if="data && range.list">

    <div v-if="framework === 'bulma'">

      <nav role="navigation" aria-label="pagination">

        <div class="level">
          <div class="level-left">
            <ul class="pagination-list" >

              <li v-if="range.first">
                <a class="pagination-link" :aria-label="'Page 1'"
                   @click="onPageChange(1)"
                   aria-current="page">First</a>
              </li>

              <li v-if="range.start_dots">
                <a class="pagination-link" disabled aria-current="page">...</a>
              </li>

              <li v-for="item in range.list">
                <a class="pagination-link" :aria-label="'Page '+item"
                   :class="{'is-current': item==data.current_page}"
                   @click="onPageChange(item)"
                   aria-current="page">{{item}}</a>
              </li>

              <li v-if="range.end_dots">
                <a class="pagination-link" disabled aria-current="page">...</a>
              </li>

              <li v-if="range.last">
                <a class="pagination-link" :aria-label="'Page '+data.last_page"
                   @click="onPageChange(data.last_page)"
                   aria-current="page">Last</a>
              </li>

            </ul>
          </div>
          <div class="level-right">
            <a class="pagination-previous"
               v-if="data.current_page == 1"
               disabled>Previous</a>

            <a class="pagination-previous"
               @click="previousPage()"
               v-else>Previous</a>

            <a class="pagination-next"
               v-if="data.current_page == data.last_page"
               disabled="">Next</a>

            <a class="pagination-next"
               v-else
               @click="nextPage()">Next</a>
          </div>
        </div>




      </nav>

    </div>
    <div v-else-if="framework === 'bootstrap'">

      <nav v-if="range.list">
        <ul class="pagination">

          <li v-if="range.first" class="page-item">
            <a class="pagination-link page-link" :aria-label="'Page 1'"
               href="#"
               @click="onPageChange(1)"
               aria-current="page">First</a>
          </li>
          <li class="page-item">
            <a class="pagination-previous page-link disabled"
               href="#"
               v-if="data.current_page == 1"
               disabled>Previous</a>

            <a class="pagination-previous page-link"
               href="#"
               @click="previousPage()"
               v-else>Previous</a>
          </li>

          <li v-for="item in range.list" class="page-item" :class="{'active': item==data.current_page}">
            <a class="pagination-link page-link" :aria-label="'Page '+item"
               href="#"
               @click="onPageChange(item)">{{item}}</a>
          </li>


          <li class="page-item">
            <a class="pagination-next page-link disabled"
               href="#"
               v-if="data.current_page == data.last_page"
               disabled="">Next</a>

            <a class="pagination-next page-link"
               href="#"
               v-else
               @click="nextPage()">Next</a>
          </li>

          <li v-if="range.last" class="page-item">
            <a class="pagination-last page-link" :aria-label="'Page '+data.last_page"
               href="#"
               @click="onPageChange(data.last_page)"
               aria-current="page">Last</a>
          </li>

        </ul>
      </nav>

    </div>



  </div>
</template>

<script>

  //import pkg from './../package.json';

  export default {
    name: 'VaahVuePagination', // vue component name
    props:{
      framework:{
        type: String,
        default: function(){
          return 'bulma'
        }
      },
      data: {
        type: Object,
        default: function () {
          return null;
        }
      },
      limit: {
        type: Number,
        default: function () {
          return 3;
        }
      },
    },
    data: function() {
      return {
        debug: true,
        version: 'v1.0.8',
        range: {
          limit: null,
          first: null,
          last: null,
          start_dots: null,
          end_dots: null,
          start: 1,
          end: null,
          list: [],
        }
      };
    },
    computed: {

    },
    mounted() {
      this.generateRange();
    },
    watch: {

      'data':{
        deep: true,
        handler: function () {
          this.generateRange();
        }
      }

    },
    methods: {
      generateRange: function()
      {

        this.range.limit = this.limit;

        if(this.data.current_page > 1)
        {
          this.range.first = true;
          this.range.start_dots = true;
        }


        if(this.data.current_page == 1 && this.limit <= this.data.last_page)
        {
          if(this.debug)
          {
            console.log('=================');
            console.log('Use Case 1');
            console.log('=================');
          }


          this.range.start = this.data.current_page;
          this.range.end = this.data.last_page;
        }

        if(this.data.current_page == 1 && this.limit > this.data.last_page)
        {
          if(this.debug) {
            console.log('=================');
            console.log('Use Case 2');
            console.log('=================');
          }

          this.range.start = this.data.current_page;
          this.range.end = this.data.last_page;
        }



        if(this.data.current_page > 1 && this.data.current_page+this.limit < this.data.last_page )
        {
          if(this.debug) {
            console.log('=================');
            console.log('Use Case 3');
            console.log('=================');
          }




          if(this.data.current_page < this.limit)
          {
            this.range.start = 1;
          } else
          {
            this.range.start = this.data.current_page-this.limit;
          }

          if(this.range.start <= 0)
          {
            this.range.start = 1;
          }

          this.range.end = this.data.current_page+this.limit;
        }


        if(this.data.current_page > 1 && this.data.current_page+this.limit >= this.data.last_page )
        {
          if(this.debug) {
            console.log('=================');
            console.log('Use Case 4');
            console.log('=================');
          }

          this.range.start = this.data.current_page-this.limit;
          this.range.end = this.data.last_page;
        }


        if(this.data.current_page < this.data.last_page)
        {
          this.range.end_dots = true;
          this.range.last = true;

        }

        this.generateRangeList();

      },
      //---------------------------------------------------------
      generateRangeList: function()
      {

        if(this.debug) {
          console.log('--->data', this.data);
          console.log('--->range', this.range);
        }

        this.range.list = [];
        for(let i=this.range.start;i<=this.range.end;i++)
        {
          this.range.list.push(i);
        }

      },
      //---------------------------------------------------------
      onPageChange: function (page) {

        //console.log('--->page', page);

        this.$emit('onPageChange', page);
      },
      //---------------------------------------------------------
      previousPage: function () {
        if(this.data.current_page > 1)
        {
          let page = this.data.current_page-1;
          this.onPageChange(page);
        }
      },
      //---------------------------------------------------------------------
      nextPage: function (data, res) {
        if(this.data.current_page < this.data.last_page)
        {
          let page = this.data.current_page+1;
          this.onPageChange(page);
        }
      },
      //---------------------------------------------------------
      //---------------------------------------------------------

    },
  };
</script>