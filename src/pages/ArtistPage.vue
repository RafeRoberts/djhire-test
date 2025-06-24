<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Profile
      </div>
      <q-img
        src="~assets/penSquare.svg"
        width="116px"
        style="top:-104px;left:214px;"
      />
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
    </div>
  </div>
  <div
    class="row justify-between bg-secondary"
  >
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8">
      <div class="row justify-evenly bg-secondary q-mb-lg">
        <div class="col-10 bg-secondary text-black">
          <q-form
            ref="formName"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="off"
            spellcheck="false"
          >
            <q-card
              flat
              class="my-card my-font items-start bg-secondary"
            >
              <q-card-section>
                <div class="text-h6 text-primary">
                  Artist / DJ Name
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-primary">
                  Your Artist / DJ Name needs to be something unique.<br>
                  To help with that enter your DJ Name in the form below and let DJ Hire AI Agent do a check across multiple platforms to see if is unique.<br>
                  It can become a real problem as your career grows if you have to change your name later.
                  So lets try and get your existing name first, then if that is taken lets try something else.
                </div>
              </q-card-section>
              <q-card-section>
                <q-input

                  v-model="credentials.artistname"
                  label="DJ Name"
                  label-width="3"
                  :rules="[requiredRule]"
                  helper="Enter your current DJ Name"
                  error-label="Looks like that name is taken"
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
                  label="Check Name with AI Assistant"
                  no-caps
                  size="md"
                  icon="auto_awesome"
                  :disable="isSearching"
                  @click="submit"
                />
              </q-card-actions>
              <q-card-section v-show="isSearching">
                <div class="text-primary col-4">
                  DJEDDA The AI is currently:
                  Searching DJ Hire database....
                  <q-spinner-ios
                    v-show="isDatabase"
                    color="green"
                    size="sm"
                  />
                  <br>
                  <q-badge
                    v-show="!isDatabase"
                    color="green"
                  >
                    no results found
                  </q-badge>
                  <q-badge
                    v-show="isDatabase"
                    color="red"
                  >
                    {{ isDatabaseResults }}
                  </q-badge>
                  <br>
                  Searching Soundcloud....
                  <q-spinner-ios
                    v-show="!isSoundcloud"
                    color="green"
                    size="sm"
                  /><br>
                  <q-badge
                    v-show="isSoundcloud"
                    color="green"
                  >
                    no results found
                  </q-badge>
                  <br>
                  Searching Spotify....
                  <q-spinner-ios
                    v-show="!isSpotify"
                    color="green"
                    size="sm"
                  /><br>
                  <q-badge
                    v-show="isSpotify"
                    color="green"
                  >
                    no results found
                  </q-badge><br>
                  Searching DeepSeek AI....
                  <q-spinner-ios
                    v-show="!isDeepSeek"
                    color="green"
                    size="sm"
                  /><br>
                  <q-badge
                    v-show="isDeepSeek"
                    color="green"
                  >
                    no results found
                  </q-badge>
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue with Name"
                  no-caps
                  size="md"
                  :disable="authStore.uniqueScore == 5"
                  @click="submit2"
                />
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Ask AI Assistant for a Name"
                  no-caps
                  size="md"
                  icon="auto_awesome"
                  :disable="true"
                  @click="submit"
                />
              </q-card-actions>
            </q-card>
          </q-form>
        </div>
      </div>
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
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()


//const $q = useQuasar()
const router = useRouter()
const formName = ref()
const credentials = ref({
  artistname: ''
})

const profiles = ref([])
const spotify = ref('')

const requiredRule = val => (val && val.length > 0) || 'Please enter a value'
const isSearching = ref(false)
const isDatabase = ref(true)
const isDatabaseResults = ref('')
const isSoundcloud = ref(false)
const isSpotify = ref(false)
const isDeepSeek = ref(false)

authStore.setProfileStatus('Artist Name Incomplete')

const submit = async() => {
  formName.value.validate().then(success => {
    console.log(success)
    const profileData = auth.getUniqueProfile(credentials).then(data => {
        console.log(data.data)
        profiles.value = data.data
        if(profiles.value.length !== 0) {
          isDatabaseResults.value = "Search found an artist named: " + profiles.value[0].DJName
          authStore.setUnique(5)
        } else {
          isDatabase.value = false
          authStore.setUnique(4)
          authStore.setDjname(credentials.value.artistname)
        }
      })
      console.log('data results profile:' + profileData)
      const spotifyData = auth.getUniqueSpotify(credentials).then(data => {
        console.log(data.data)
        spotify.value = data.data
        // if(profiles.value.length !== 0) {
        //   isSpotifyResults.value = "Search found an artist named: " + profiles.value[0].DJName
        //   authStore.setUnique(5)
        // } else {
        //   isDatabase.value = false
        //   authStore.setUnique(4)
        // }
      })
      console.log('data results profile:' + spotifyData)
      console.log('data results profile:' + spotify.value)
    isSearching.value = true


    isSoundcloud.value = false
    setTimeout(() => {
      isSoundcloud.value = true


      }, 2000)
    isSpotify.value = false
    setTimeout(() => {
      isSpotify.value = true


      }, 3000)
    isDeepSeek.value = false
    setTimeout(() => {
      isDeepSeek.value = true


      }, 3500)

  })
}
const submit2 = async() => {
  authStore.setProfileStatus('Artist About Incomplete')

  router.push({ path: `/about/` })
}
</script>
