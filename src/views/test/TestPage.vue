<template>
    <div>
        <h2>금융지표</h2>
        <router-link :to="'/finance/exchangeRate'">환율</router-link><br>
        <router-link :to="'/finance/foreignInterest'">외화금리</router-link><br>
        <router-link :to="'/finance/wonInterest'">원화금리</router-link><br>
        <h2>테스트 화면</h2>
        <router-link :to="'/modal'">모달테스트 화면</router-link><br>
        <router-link :to="'/contact'">연락처</router-link><br>
    </div>

    
</template>
<script>


export default {

}

</script>