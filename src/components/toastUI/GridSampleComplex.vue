<template>
    <grid ref="tuiGrid" :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.theme"></grid>
</template>
<script>
import { gridCommonData } from '@/mixins/gridCommonData' //mixin
import config from '@/config' //공통 설정
export default {
    mixins:[gridCommonData],
    data:() => ({
        url:config.API_URL+'/gridTest',
        columns: [
            { name: "targetDate", header: "대상일자", align: "center", minWidth:100},
            { name: "usdBid", header: "bid", align: "center",minWidth:100 },
            { name: "usdOffer", header: "offer", align: "left",minWidth:200 },
            { name: "jpyBid", header: "bid", align: "center",minWidth:100 },
            { name: "jpyOffer", header: "offer", align: "left",minWidth:200 },
            { name: "eurBid", header: "bid", align: "center",minWidth:100 },
            { name: "eurOffer", header: "offer", align: "left",minWidth:200 },
        ],
        options: {
            header:{
                height: 80,
                complexColumns:[
                    {name: "currency", header: "통화별", childNames:['targetDate']},
                    {name: "usdKrw", header: "USD/KRW", childNames:['usdBid','usdOffer']},
                    {name: "jpyKrw", header: "JPY/KRW", childNames:['jpyBid','jpyOffer']},
                    {name: "eurKRw", header: "EUR/KRW", childNames:['eurBid','eurOffer']}
                ]
            }
        }
    })
}
</script>