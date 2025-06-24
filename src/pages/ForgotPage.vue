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
        Reset Password
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
      class="fixed-center bg-secondary"
    >
      <transition-group
        appear
        enter-active-class="animated slide-left"
        leave-active-class="animated slide-right"
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
            style="width: 500px;top:-150px;"
          >
            <q-card-section />
            <q-card-section>
              <q-input

                v-model="credentials.username"
                label="User Name or Email Address"
                label-width="3"
                :rules="[requiredRule]"
                helper="Enter your registered User Name or Email Address to Log in"
                error-label="Please type a valid username"
                outlined
                type="text"
                @keydown.enter.prevent="submit"
              >
                <template #prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn
                style="width: 212px; height: 50px;"
                color="info"
                align="center"
                text-color="primary"
                label="Reset Password"
                no-caps
                size="md"
                @click="submit"
              />
            </q-card-actions>
          </q-card>
        </q-form>
      </transition-group>
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
          style="top:240px;left:24vw;"
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
  password: ''

})

const emailAddress =ref('')


//const router = useRouter()
//const $v = useVuelidate()

const requiredRule = val => (val && val.length > 0) || 'Please enter a value'



const submit = async() => {
  formComponent.value.validate().then(success => {
    console.log(success)
    $q.localStorage.setItem('forgotuser', credentials.value.username)
    const loggedin = auth.forgot(credentials, '/').then(data => {
        console.log('forgot:',loggedin)
        console.log('forgothidden:',data)
        emailAddress.value='We have sent a password reset code in an Email message to ' + data + '. Enter your code and your new password'
        //emailAddress.value='We have sent a password reset code in an Email message to you. Enter your code and your new password'
        console.log('emailAddress:',emailAddress.value)
        $q.localStorage.setItem('confirmforgotuser', emailAddress.value)
        router.push({ path: `/confirmforgot` })
      })
      .catch(err => {
          // if (err.response.request.status === UNAUTHORIZED) {
          $q.notify({
            color:'red',
            textcolor:'primary',
            icon:'report_problem',
            message:'Username not found',
            position:'top'
          })
          console.log(err)
          //this.user.authenticated = false

          // }
          console.log(err)
        })
    })
  }




</script>

