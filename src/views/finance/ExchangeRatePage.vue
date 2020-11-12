<template>
<div>
    <h2>외화금리</h2>
    <div style="border:1px solid black; padding:10px; display:flex; flex-direction:column;" >
        <div style="display:flex; flex-direction:row;">
            <input type="date" v-model="date" v-date style="width:50%;"/>
            <select v-model.number="round" style="width:50%;">
                <option v-for="(i,index) in 100" :key="index">{{index+1}}</option>
            </select>
        </div>
        <button style="width:100%;" @click="search()">조회</button>
    </div>
    <br>

    <grid ref="tuiGrid" :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.theme"></grid>
</div>
</template>

<script>
import { tuiGridMixins } from '@/mixins/tuiGridMixins' //mixin

import config from '@/config' //공통 설정
export default {
    name: 'ExchangeRatePage',
    mixins:[ tuiGridMixins ] ,
    data: () => ({
        url:config.API_URL+'/gridTest',
        round:null,
        date:'',
        thisis:'',
        columns: [
            { name: "currencyCode", header: "통화코드", align: "center", minWidth:50},
            { name: "baseCurrencyRate", header: "기준환율", align: "center", minWidth:50},
            { name: "buy", header: "매입", align: "center", minWidth:50 },
            { name: "sell", header: "매도", align: "left", minWidth:50 },
            { name: "detail", header: "상세", align: "center", minWidth:50 }
        ],
        options: {
            header:{
                height: 80,
                complexColumns:[
                    {name: "usdKrw", header: "집중률", childNames:['buy','sell']}
                ]
            }
        }
    }),
    methods:{
        search() {
            this.$refs.tuiGrid.invoke('readData',1, {date:this.date,
                                                     round:this.round},true);
        }
    },
}
</script>