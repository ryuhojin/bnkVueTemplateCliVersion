<template>
    <grid ref="tuiGrid" :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.theme"></grid>
</template>
<script>
import { tuiGridMixins } from '@/mixins/tuiGridMixins' //mixin
import config from '@/config'
export default {
    name: 'ForeignInterestRatePage',
    mixins:[ tuiGridMixins ] ,
    data: () => ({
        url:config.API_URL+'/gridTest',
        columns: [
            { name: "currency", header: "통화", align: "center", minWidth:50},
            { name: "noticeCurrencyRateThreeMonth", header: "3개월", align: "center", minWidth:50},
            { name: "noticeCurrencyRateSixMonth", header: "6개월", align: "center", minWidth:50 },
            { name: "previousDayCurrencyRateThreeMonth", header: "3개월", align: "center", minWidth:50 },
            { name: "previousDayCurrencyRateSixMonth", header: "6개월", align: "center", minWidth:50 }
        ],
        options: {
            header:{
                height: 80,
                complexColumns:[
                    {name: "noticeCurrency", header: "고시금리", childNames:['noticeCurrencyRateThreeMonth','noticeCurrencyRateSixMonth']},
                    {name: "previousDay", header: "고시금리", childNames:['previousDayCurrencyRateThreeMonth','previousDayCurrencyRateSixMonth']},
                ]
            }
        }
    }),
    methods: {

    },
    components: {

    }
}
</script>