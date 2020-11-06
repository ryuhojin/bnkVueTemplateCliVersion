<template>
<div>
    <div style="border:1px solid black; padding:10px; display:flex; flex-direction:column;" >
        <div>
            검색조건:
            <DatePicker/>
        </div>
        <ValidationProvider rules="normal" v-slot="{ errors }" > 
        검색어 : <input v-model='title' 
                        v-notSpecial 
                        @keyup.enter="search()">
                <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <br>
        <button style="width:100%;">조회</button>
    </div>
    <br>
    <h2>외화금리</h2>
    <grid ref="tuiGrid" :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.theme"></grid>
</div>
</template>

<script>
import DatePicker from '@/components/toastUI/DatePicker'
import { gridCommonData } from '@/mixins/gridCommonData' //mixin
import config from '@/config' //공통 설정
import '@/utils/validation' //validation

export default {
    name:'ToastUiGridPage',
    mixins:[ gridCommonData ] ,
    data: () => ({
        optionName:['전체','제목','작성시간','내용'],
        selected:'',
        title : '',
        content:'',
        date:'',
        url:config.API_URL+'/gridTest',
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
            this.$refs.tuiGrid.invoke('readData',1, {title:this.title},true);
        }
    },
    components:{
        DatePicker
    }
}
</script>