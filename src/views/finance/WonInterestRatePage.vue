<template>
    <grid ref="tuiGrid" :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.theme"></grid>
</template>
<script>
import { tuiGridMixins } from '@/mixins/tuiGridMixins' //mixin
import config from '@/config'
export default {
    name: 'WonInterestRatePage',
    mixins:[ tuiGridMixins ] ,
    data: () => ({
        url:config.API_URL+'/gridTest',
        columns: [
            { name: "product", header: "상품", align: "center", minWidth:50},
            { name: "baseCurrencyRate", header: "기준금리", align: "right", minWidth:50},
            { name: "manageBaseCurrencyRate", header: "점장기준금리", align: "right", minWidth:50 }
        ],
        options: {
            header:{
                height: 80
            }
        }
    }),
    methods: {

    },
    components: {

    }
}
</script>