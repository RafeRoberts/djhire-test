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
          style="width: 500px;top:-10px;"
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
          <q-card-section>
            <q-input

              v-model="credentials.password"
              label="Password"
              label-width="3"
              helper="Enter your password"
              :rules="[requiredRule]"
              error-label="Please type a valid password"
              outlined
              :type="isPwd ? 'password' : 'type'"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="vpn_key" />
              </template>
              <template #append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input

              v-model="credentials.confirmpassword"
              label="Confirm Password"
              label-width="3"
              helper="Enter your password"
              :rules="[requiredRule]"
              error-label="Please type a valid password"
              outlined
              :type="isPwd2 ? 'password' : 'type'"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="vpn_key" />
              </template>
              <template #append>
                <q-icon
                  :name="isPwd2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd2 = !isPwd2"
                />
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
  code: '',
  username: '',
  password: '',
  confirmpassword: ''

})
const emailAddress =ref('')
const tempemailAddress =ref('')
const isPwd = ref(true)
const isPwd2 = ref(true)

tempemailAddress.value = $q.localStorage.getItem('forgotuser')
emailAddress.value= $q.localStorage.getItem('confirmforgotuser')
//const router = useRouter()
//const $v = useVuelidate()
credentials.value.username = tempemailAddress.value
const requiredRule = val => (val && val.length > 0) || 'Please enter a value'



const submit = async() => {
  formComponent.value.validate().then(success => {
    console.log(success)
    console.log(credentials)
    const loggedin = auth.confirmforgot(credentials, '/').then(data => {
        console.log('confirmforgot:',loggedin)
        console.log(data.data)
        $q.notify({
            color:'green',
            textcolor:'primary',
            icon:'report_problem',
            message:'Password Changed',
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
            message:'Password Not Changed',
            position:'center'
          })
          console.log(err)
          //this.user.authenticated = false
          $q.localStorage.removeItem('id_token')
          $q.localStorage.removeItem('refresh_token')
          $q.localStorage.removeItem('access_token')
          $q.localStorage.removeItem('user')
          // }
          console.log(err)
        })
    })
  }



</script>

