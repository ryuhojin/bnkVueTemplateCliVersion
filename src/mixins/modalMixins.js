import Modal from '@/components/common/Modal'

export const modalMixins = {
    data:() => ({
        isModalVisible:false,
        message:'',
    }),
    methods: {
        openModal(){
            this.isModalVisible = true
        },
        closeModal(){
            this.isModalVisible = false
        },
        setModalMessage(text){
            this.message = text;
        }
    },components: {
        Modal
    }
}