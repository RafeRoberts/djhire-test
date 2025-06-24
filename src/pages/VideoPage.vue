<template>
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
        <div class="col-10 text-black bg-secondary">
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
                    Videos
                  </div>
                  <div class="text-body text-primary col-2">
                    <!-- <br> Toggle Visibility on Profile -->
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Uploaded Videos
                  </div>
                  <div
                    v-for="(item, index) in credentials"
                    :key="item"
                    :ref="el => { if (el) options[item] = el}"
                    class="q-video"
                  >
                    <q-video
                      :src="item"
                      style="width:500px;height:280px"
                    />

                    <q-btn
                      label="Add Video File"
                      color="info"
                      flat
                      no-caps
                      icon="add_circle"
                      @click="currentVideo = index; videoDiag = true"
                    />
                    <q-btn
                      label="Delete Video"
                      color="info"
                      flat
                      no-caps
                      icon="delete"
                      @click="onDelete(index)"
                    />
                  </div>
                  <div class="text-body text-primary col-2">
                    <!-- <q-toggle
                      v-model="credentials.showfullbio"
                      color="info"
                    /> -->
                  </div>
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <div class="text-body text-primary col-6">
                  <q-btn
                    label="Add New Video Slot"
                    color="info"
                    flat
                    no-caps
                    icon="add_circle"
                    @click="onNewVideoSlot"
                  />
                </div>
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue to Sounds"
                  no-caps
                  size="md"
                  @click="onSubmitVideos"
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
  <q-dialog
    v-model="videoDiag"
    backdrop-filter="blur(30px) saturate(150%)"
  >
    <q-card
      class="col-8 mycard bg-primary"
      style="width:500px"
    >
      <q-bar>
        <q-img
          src="~assets/icon.png"
          style="width:40px;"
        />
      </q-bar>
      <q-card-section>
        <div class="row items-start q-gutter-md bg-secondary q-ml-xs ">
          <div class="text-body text-primary col-11 ">
            <q-input
              v-model="currentVideoId"
              label-width="3"
              helper="Video Link"
              outlined
              type="textarea"
              dense
            />
            <br><br>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          color="info"
          align="center"
          text-color="primary"
          label="Submit"
          no-caps
          size="md"
          @click="submitVideo(currentVideo)"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Copy the video id from the YouTube link in share link and paste it in the text box above. The video id is the part after the last / character .']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Notify } from 'quasar'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
//import auth from 'src/auth'
import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()
const router = useRouter()
const options = reactive({})
const currentVideo = ref(0)
const currentVideoId = ref('video')

const videoDiag = ref(false)
const credentials = ref([
  'https://www.youtube.com/embed/eDArHvTH9dg?rel=0rel=0',
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/videoFile.png',
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/videoFile.png'
])
const credentials4 = ref({
    "UpdateField" : "Status",
    "UpdateValue" : 'Artist Sounds Incomplete',
    "ProfileID" : authStore.profileID,
    })
async function onDelete (currentVideo) {
  credentials.value[currentVideo.value] = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/videoFile.png'
  credentials.value.splice(currentVideo,1)
}
async function onNewVideoSlot () {
  credentials.value.push('https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/videoFile.png')
}
async function submitVideo(index) {

    //credentials2.value.eventname = authStore.djname
    credentials.value.ProfileID = authStore.profileID
    credentials.value[index] = 'https://www.youtube.com/embed/' +currentVideoId.value + '&rel=0'

    console.log("credentials=",credentials.value)
    const profileEvent = auth.updateProfileVideo(credentials).then(data => {
        console.log(data.data)

      })
      console.log(profileEvent)
      videoDiag.value = false
}
const onSubmitVideos = async() => {
  if(credentials.value[0] !== 'https://www.youtube.com/embed/eDArHvTH9dg?rel=0' ||
  credentials.value[0] !== 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/videoFile.png' ) {

      authStore.setProfileStatus('Artist Equipment Incomplete')
      const profileStatus = auth.updateProfileStatus(credentials4).then(data => {
        console.log(data.data)


      })
      console.log(profileStatus)


  router.push({ path: `/sounds/` })
  }
  else {
    Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'Please add a video as a mininum to continue',
      type: 'negative',
      spinner: true
    })
  }
}
</script>
