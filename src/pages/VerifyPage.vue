<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="col-2 col-md-2" />
      <div
        class="col-2 col-md-2  my-font text-h3 text-white q-ma-xl q-pb-xl"
        align="center"
      >
        Confirm Email
      </div>



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
      <q-img
        src="~assets/group-22610.svg"
        width="63px"
        style="top:100px;left:-18vw;"
      />
      <q-img
        src="~assets/group-22610.svg"
        width="63px"
        style="top:80px;left:-22vw;transform: rotate(-20deg);"
      />
    </div>

    <div
      class="fixed-center bg-white"
    >
      <q-form
        ref="formComponent"
        autocapitalize="off"
        autocorrect="off"
        autocomplete="off"
        spellcheck="false"
      >
        <q-card
          key="card"
          rounded
          class="my-card my-font q-pa-md"
          style="width: 500px;top:-40px;"
        >
          <q-card-section>
            <div align="center">
              <q-img
                src="~assets/group-23500.svg"
                width="122px"
                style="top:10px;"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <div align="center">
              {{ emailAddress }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-input

              v-model="credentials.code"
              label="Code"
              label-width="3"
              :rules="[requiredRule]"
              helper="Enter your Confirm Code we sent you"
              error-label="Please type a valid code"
              outlined
              type="text"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="123" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section />
          <q-card-actions align="center">
            <q-btn
              style="width: 212px; height: 50px;"
              color="info"
              align="center"
              text-color="primary"
              label="Verify Email"
              no-caps
              size="md"
              @click="submit"
            />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </div>
  <div class="row absolute">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="col-2 col-md-2" />
      <div
        class="col-2 col-md-2  my-font text-h3 text-white q-ma-xl"
      >
        <q-img
          src="~assets/group-23520.svg"
          width="160px"
          style="top:440px;left:24vw;"
        />
      </div>



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
import auth from '../auth'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'


const $q = useQuasar()
const router = useRouter()
const formComponent = ref()
const credentials = ref({
  username: '',
  session: '',
  code: ''
})
const emailAddress =ref('')
const tempemailAddress =ref('')
//const isPwd = ref(true)

tempemailAddress.value = $q.localStorage.getItem('forgotuser')
//emailAddress.value= $q.localStorage.getItem('confirmforgotuser')
//const router = useRouter()
//const $v = useVuelidate()
credentials.value.session = $q.localStorage.getItem('tempsession')
credentials.value.username = $q.localStorage.getItem('forgotuser')
const requiredRule = val => (val && val.length > 0) || 'Please enter a value'

emailAddress.value = 'We have sent a verification code in an Email message to ' + tempemailAddress.value + '. Enter your code and verify your account'

const submit = async() => {
  formComponent.value.validate().then(success => {
    console.log(success)
    const loggedin = auth.signupconfirm(credentials, '/').then(data => {
        console.log('confirmforgot:',loggedin)
        console.log(data.data)
        $q.notify({
            color:'green',
            textcolor:'primary',
            icon:'report_problem',
            message:'Email Confirmed',
            position:'top'
          })

        router.push({ path: `/login` })
      })
      .catch(err => {
          // if (err.response.request.status === UNAUTHORIZED) {
          $q.notify({
            color:'red',
            textcolor:'primary',
            icon:'report_problem',
            message:err.response.data.error,
            position:'center'
          })
          console.log(err)

          // }
          console.log(err)
        })
    })
  }



</script>

