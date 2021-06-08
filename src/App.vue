<template>
  <div id="app">
    <div class="container">
      <!--First model-->
      <button
          class="btn"
          @click="modalFirst = !modalFirst">
        Налоговый вычет
      </button>
      <modals
          title="First modal"
          v-show="modalFirst"
          @close="modalFirst = false">
        <div slot="body" class="body-wrapper">
          <p class="text-info">
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
          </p>
          <label class="title">Ваша зарплата в месяц</label>
          <input type="number"
                 class="salary"
                 v-model.number="salary"
                 placeholder="Введите данные">

          <button class="title calc"
                  @click="calcSizePayoff"
                  :disabled="isDisabledBtn">
            Рассчитать
          </button>

          <div class="calculation hidden">
            <p class="title">Итого можете внести в качестве досрочных:</p>

            <div class="checkboxes__wrapper">
              <div
                  v-for="(payoff,index) in arrPayoff"
                  :key="index"
                  :id="payoff.year"
                  class="checkboxes-item">

                <input name="checkboxPayoff"
                       type="checkbox"
                       v-model="checkboxValue[index]"
                >
                <label>
                  <span> {{ payoff.sumPayoff }} рублей </span>
                  в {{ payoff.year }}{{ payoff.ending }} год
                </label>
              </div>


            </div>
          </div>

          <div class="switch__wrapper">
            <p class="title">Что уменьшаем?</p>
            <button class="switch active">Платёж</button>
            <button class="switch">Срок</button>
          </div>


          <button
              class="btnPrimary"
              @click="modalFirst = false">
            Добавить
          </button>
        </div>
      </modals>
    </div>

  </div>
</template>

<script>
import modals from '@/components/Modal.vue'

const maxSizePayoff = 260000
export default {
  name: 'App',
  components: {
    modals
  },
  data() {
    return {
      modalFirst: false,
      checkboxValue:[],
      salary: "",
      arrPayoff: [],
      years: null
    }
  },
  computed: {
    isDisabledBtn() {
      return !(this.salary > 12791)
      // 12 792 руб. Размер МРОТ в 2021 году
    },
    inputSalary() {
      let sizeSalary = this.salary;
      let taxOfYear = sizeSalary * 12 * 0.13;
      console.log(taxOfYear)
      return taxOfYear;
    },
  },
  methods: {
    calcSizePayoff() {
        this.createTablePayoff(this.inputSalary)
    },
    createTablePayoff(payoff) {
      let blockHidden = document.querySelector('.hidden')
      blockHidden.classList.remove('hidden')

      let yearsOfPay = Math.ceil(maxSizePayoff / payoff)

      let sum = 0

      for (let i = 0; i <= yearsOfPay; ++i) {
        let payoffObj = {
          year: i + 1,
          ending: '',
          sumPayoff: ''
        }
        let year = i + 1
        payoffObj.year = year
        if (sum < maxSizePayoff) {
          let differenceSum = maxSizePayoff - sum

          if (differenceSum < payoff) {
            payoffObj.sumPayoff = differenceSum
            payoffObj.ending = this.declOfNum( year )
            this.arrPayoff.push(payoffObj)
            break
          }
        }
        sum = sum + payoff

        payoffObj.sumPayoff = payoff
        payoffObj.ending = this.declOfNum( year )
        this.arrPayoff.push(payoffObj)
        // console.log('arrPayoff', this.arrPayoff)
      }
    },
    declOfNum(n) {
      const endsOfWord = ['-ый', '-ой', '-ий']
      if (n === 1 || n === 4 || n === 5 || (n > 9 && n < 20)) { return endsOfWord[0]; }
      if (n === 2 || n > 5 && n < 9) { return endsOfWord[1]; }
      if (n === 3) { return endsOfWord[2]; }
      return endsOfWord[1];
    }
  }
}
</script>

<style lang="sass">
@import './assets/main.sass'
@import './assets/media.sass'
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  font-size: 16px
  height: 100vh
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
</style>
