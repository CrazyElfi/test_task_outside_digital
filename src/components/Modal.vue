<template>
  <div>
    <transition name="modal">
      <div class="modal__wrapper" @click="$emit('close')">
        <div class="modal-content" @click.stop="">
          <!--  header-->
          <div class="modal-header">
            <span class="modal-title"> Налоговый вычет </span>
            <span class="button-close" @click="$emit('close')">×</span>
          </div>

          <!-- body-->
          <div class="modal-body">
            <slot name="body">
<!--              <input type="number">-->
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.key === 'escape') {
        this.$emit('close')
      }
    })
  },
  computed: {},
  methods: {}

}
</script>


<style lang="sass" scoped>
//animation
.modal-enter .modal-leave-active
  opacity: 0


.modal-enter .modal-content,
.modal-leave-active .modal-content
  transform: scale(1.2)

.modal__wrapper
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  transition: opacity .3s ease
  z-index: 998
  background-color: #999999

.modal-content
  position: relative
  width: 453px
  //height: 476px
  padding: 32px
  background-color: #fff
  border: 1px solid #dcdfe6
  transition: all .2s ease
  border-radius: 30px
  z-index: 999
  overflow: hidden


.modal-header
  display: flex
  align-self: center
  justify-content: space-between
  margin-bottom: 16px
  span
    font-size: 24px
  .button-close
    cursor: pointer

.modal-body
  text-align: center

.modal-title
  font-weight: bold
  font-size: 28px
  line-height: 40px

</style>
