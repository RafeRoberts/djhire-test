<template>
  <!-- <q-page
    padding
    class="bg-secondary"
  > -->
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Create Profile
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
        <div class="col-10 text-black">
          <q-form
            ref="formName"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="off"
            spellcheck="true"
          >
            <q-card
              flat
              class="my-card my-font bg-secondary"
            >
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-h6 text-primary col-8">
                    Biography
                  </div>
                  <div class="text-body text-primary col-2">
                    <br> Toggle Visibility on Profile
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Full Bio
                    <q-icon
                      name="info"
                      color="info"
                      size="sm"
                      class="q-mb-xs"
                      right
                    >
                      <q-tooltip
                        class="bg-primary text-white text-body2"
                        :offset="[10,-40]"
                      >
                        This is your DJ biography that will appear on your profile page.<br> Use this box to introduce yourself as a DJ along with your unique edge and background story. <br>Share your journey, experience, and what makes you stand out from the crowd.
                      </q-tooltip>
                    </q-icon>
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.UpdateValue"
                      label-width="3"
                      outlined
                      type="textarea"
                      dense
                      multiline="true"
                    />
                  </div>
                  <div class="text-body text-primary col-2">
                    <q-toggle
                      v-model="credentials.showfullbio"
                      color="info"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Preview Bio
                    <q-icon
                      name="info"
                      color="info"
                      size="sm"
                      class="q-mb-xs"
                      right
                    >
                      <q-tooltip
                        class="bg-primary text-white text-body2"
                        :offset="[10,-40]"
                      >
                        This is your DJ Preview Bio that will appear in search results.<br> It’s the elevator pitch that will encourage people to book you as they scroll through multiple other DJs. <br>Keep it concise and engaging, showcasing your skills and personality in a few sentences.
                      </q-tooltip>
                    </q-icon>
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.smallbio"
                      label-width="3"
                      outlined
                      type="textarea"
                      dense
                      multiline="true"
                    />
                  </div>
                  <div class="text-body text-primary col-2">
                    <q-toggle
                      v-model="credentials.showsmallbio"
                      color="info"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue to Photos"
                  no-caps
                  size="md"

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
  <!-- </q-page> -->
</template>

<script setup>
import { ref } from 'vue'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
//import auth from 'src/auth'
import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()




//const $q = useQuasar()
const router = useRouter()
const formName = ref()

// const credentials = ref({
//   artistname: authStore.artistname,
//   fullname: authStore.username,
//   showfullname: true,
//   email: '',
//   location: ''
// })
const credentials = ref({
    UpdateField : "FullBio",
    UpdateValue : "",
    ProfileID : authStore.profileID,
    showfullbio : true,
    smallbio : "",
    showsmallbio : true

    })
const credentials3 = ref({
    "UpdateField" : "FullBio",
    "UpdateValue" : 'Artist Photos Incomplete',
    "ProfileID" : authStore.profileID,
    })

//const requiredRule = val => (val && val.length > 0) || 'Please enter a value'
console.log(authStore.username)
//credentials.fullname.value = authStore.username


const submit = async() => {
  formName.value.validate().then(success => {
    console.log(success)
    credentials.value.ProfileID = authStore.profileID

    const profileData = auth.updateProfileBio(credentials).then(data => {
        console.log(data.data)

      })
      console.log(profileData)
      const profileSData = auth.updateProfileSBio(credentials).then(data => {
        console.log(data.data)

      })
      console.log(profileSData)
      authStore.setProfileStatus('Artist Photos Incomplete')
      const profileStatus = auth.updateProfileStatus(credentials3).then(data => {
        console.log(data.data)

      })
      console.log(profileStatus)


  router.push({ path: `/photos/` })
})
}
</script>
