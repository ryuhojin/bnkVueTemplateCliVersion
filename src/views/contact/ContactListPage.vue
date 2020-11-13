<template>
    <div class="flex-row">
        <div class="left-nav">
            <button>하위</button>
            <span>바위</span>
            <button @click="one">1번리스트</button>
            <button @click="two">2번리스트</button>
        </div>
        <div class="flex-column">
            <span v-for="name in names" :key="name.name">{{name.name}}</span>
        </div>
    </div>
</template>
<script>
import Contact from "@/api/modules/contact";
import Dept from "@/static/dept.json"
export default {
    data:() => ({
        names:null,
        menu:null
    }),
    mounted() {
        this.menu = Dept.map((deptJson) => {
            return {
                name: deptJson.c4,
                count: deptJson.c6,
                link: deptJson.c2
            }
        })
        console.log(this.menu)
    },
    methods: {
        one() {
            this.names = [
                {name:"바위"},
                {name:"보오"}
            ]
        },
        two() {
            this.names = [
                {name:"하위"},
                {name:"가위"},
                {name:"마위"}
            ]
        },
        selectListEmployee(code) {
            Contact.getEmployeeList(code).then(
                response => {
                    this.names = response.data;
                },
                error => {
                    console.log("에러가 발견되었습니다."+error+"내용이 발생했습니다")
                }
            )
        }
    }
}
</script>
<style scoped>
.flex-row {
    display:flex;
    flex-direction:row;
}
.flex-column {
    display:flex;
    flex-direction:column;
}
.left-nav{
    display:flex;
    flex-direction: column;
    width:200px;
    align-items: flex-start;
}
</style>