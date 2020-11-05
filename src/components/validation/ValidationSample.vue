<template>
    <ValidationProvider rules="normal" v-slot="{ errors }">
    검색어 : <input v-model='title'>
                <span>{{ errors[0] }}</span>
    </ValidationProvider>
</template>
<script>
import '@/utils/validation' //validation
export default {
    data: () => {
        title:''
    }
}
</script>