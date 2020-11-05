<template>
<div>
    <div>
        <ValidationProvider rules="normal" v-slot="{ errors }">
        검색어 : <input v-model='title' 
                        v-notSpecial 
                        @keyup.enter="search()">
                 <span>{{ errors[0] }}</span>
        </ValidationProvider>
    </div>
    <grid ref="tuiGrid" :data="gridProps.data" :columns="gridProps.columns" :options="gridProps.options" :theme="gridProps.theme"></grid>
</div>
</template>

<script>
import { gridData } from '@/mixins/gridData' //mixin
import config from '@/config' //공통 설정
import '@/utils/validation' //validation

export default {
    mixins:[ gridData ] ,
    data:() => ({
        title : '',
        url:config.API_URL+'/gridTest',
        columns: [
            { name: "id", header: "No", align: "center", minWidth:100},
            { name: "title", header: "제목", align: "center",minWidth:100 },
            { name: "changeDate", header: "작성시간", align: "left",minWidth:200 },
            { name: "context", header: "내용", align: "left",minWidth:300 },
        ]
    }),
    methods:{
        search() {
            this.$refs.tuiGrid.invoke('readData',1, {title:this.title},true);
        }
    }
}
</script>