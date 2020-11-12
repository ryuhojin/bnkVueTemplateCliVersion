<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper"  v-if="type==='info'">
        <div class="modal-container">
          <div class="modal-header">
            <p>
              부산은행 모바일 영업지원
            </p>
          </div>
          <div class="modal-body">
            {{message || '내용이 없습니다'}}
          </div>
          <div class="modal-footer">
              <button class="modal-default-button" @click="closeModal">
                OK
              </button>
          </div>
        </div>
      </div>
      <div class="modal-wrapper"  v-if="type==='confirm'">
        <div class="modal-container">
          <div class="modal-header">
            <p>
              부산은행 모바일 영업지원
            </p>
          </div>
          <div class="modal-body">
            {{message || '승인 처리가 필요합니다'}}
          </div>
          <div class="modal-footer">
              <button class="modal-default-button confirmButton">
                OK
              </button>
              <button class="modal-default-button confirmButton">
                cancel
              </button>
          </div>
        </div>
      </div>
      <div class="modal-wrapper" v-else-if="type==='alert'">
        <div class="modal-container">
          <div class="modal-header">
            <p>
              경고
            </p>
          </div>
          <div class="modal-body">
            {{message || '위험한 상황'}}
          </div>
          <div class="modal-footer">
              <button class="modal-default-button" @click="closeModal">
                OK
              </button>
          </div>
        </div>
      </div>
      <div class="modal-wrapper" v-else-if="type==='error'">
        <div class="modal-container">
          <div class="modal-header">
            <p>
              에러
            </p>
          </div>
          <div class="modal-body">
            {{message || '고장원인을 알 수 없습니다'}}
          </div>
          <div class="modal-footer">
              <button class="modal-default-button" @click="closeModal">
                OK
              </button>
          </div>
        </div>
      </div>
      <div class="modal-wrapper" v-else-if="type==='user'">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">

            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="closeModal">
                CONFIRM
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
    export default {
      name: 'modal',
      props: {
        modalContent: String,
        message: {
          type: String,
          default: "메세지가 없습니다"
        },
        type: {
          type: String,
          required: true,
          default: "confirm"
        }
      },
      methods: {
        closeModal(){
          this.$parent.closeModal()
        },
        closeConfirm(){
          this.$parent.closeModal()
        }
      }
    }
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
.modal-footer {
  height:10px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>