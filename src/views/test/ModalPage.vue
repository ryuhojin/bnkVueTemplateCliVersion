<template>
    <div>
        <h2>Modal Test Page</h2>
        <Modal v-if="isModalVisible" type="confirm" :message="message"/>
        <button @click="isthisRight">모달열기</button>
    </div>
</template>
<script>
import { modalMixins } from '@/mixins/modalMixins'
export default {
    name: 'ModalPage',
    mixins: [ modalMixins ],
    data:() => ({
        message: '테스트'
    }),
    methods: {
        async isthisRight(){
            await this.openModal();
            await this.realRight();
        },
        async realRight(){
            console.log("하위")
            return new Promise((resolve) => {
                console.log("2단")
                let stop = false
                
                document.getElementsByClassName('confirmButton').click = function() { 
                    console.log("Gd")
                }
                loop();

                function loop(){
                    if(stop === true){
                        resolve();
                        return;
                    }
                    setTimeout(loop,100);
                }
               
            })
        }
    }
}
</script>