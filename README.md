# vaah-vue-pagination

> Laravel Pagination Vue.js Component

Please consider starring the project to show your :heart: and support.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm i vaah-vue-pagination
```

Register the component

```sh
import Vue from 'vue'
import VaahVuePagination from 'vaah-vue-pagination'

Vue.component('vh-pagination', VaahVuePagination)
```

You can pass following `props` to the vue components:

```html
<vh-pagination 
framework="bulma"
:data="laravelData"
:onPageChange="getLaravelData"
></vh-pagination>
```

In `vue`, you will get `page` variable.
```vue
...
methods: {
    // Our method to GET results from a Laravel endpoint
    getLaravelData(page = 1) {
        
    }
}
...
```

## Development Environment
- Clone the repo
- Run `npm install`
- Run `npm run serve`

## Publish the package
- Change version in `package.json`
- Run `npm run build`
- Run `npm publish`


## Support us

[WebReinvent](https://www.webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

#### Credits:
- To generate vue npm package:
https://github.com/team-innovation/vue-sfc-rollup