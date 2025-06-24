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
        <div class="col-8 text-primary bg-secondary">
          <q-form
            ref="formName"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="off"
            spellcheck="true"
          >
            <q-card
              flat
              dense
              class="my-card my-font bg-secondary"
            >
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-h6 text-primary col-8">
                    Sounds
                  </div>
                  <div class="text-body text-primary col-2">
                    <!-- <br> Toggle Visibility on Profile -->
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Audio Tracks
                  </div>
                  <div class="row items-start q-gutter-xs bg-secondary">
                    <q-card
                      v-for="(item, index) in audioTracks"
                      :key="index"
                      flat
                      bordered
                      dense
                      class="bg-secondary"
                      style="width:800px;"
                    >
                      <q-card-section class="bg-primary text-secondary">
                        <q-img
                          src="~assets/penHeadphones.svg"
                          width="40px"
                        />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{{ item.name }}
                      </q-card-section>
                      <q-card-section class="flex flex-start q-gutter-xs">
                        <div class="col-2 q-mr-xs">
                          <q-img
                            :src="item.cover"
                            width="80px"
                          />
                        </div>
                        <div class="row flex flex-start q-gutter-xs">
                          <div class="col-10">
                            <WaveSurferPlayer
                              :ref="(el) => (wavePlayers[index] = el)"
                              :options="getWaveOptions(item.url)"
                              @ready="(duration) => readyHandler(duration, index)"
                              @timeupdate="(time) => timeUpdateHandler(time, index)"
                              @wave-surfer="(ws) => readyWaveSurferHandler(ws, index)"
                            />
                          </div>
                          <div class="col-3">
                            {{ formatTime(currentTimes[index] || 0) }}
                          </div>
                          <div class="col-4">
                            <q-btn
                              :color="isPlaying[index] ? 'negative' : 'info'"
                              flat
                              no-caps
                              size="24px"
                              :icon="isPlaying[index] ? 'pause_circle' : 'play_circle'"
                              @click="togglePlayPause(index)"
                            />
                          </div>
                          <div class="col-2 q-mr-lg">
                            {{ formatTime(durations[index] || 0) }}
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>

                  <div class="text-body text-primary col-8 q-mt-lg q-gutter-md">
                    <div>
                      <q-btn
                        label="Add Audio Track"
                        color="info"
                        flat
                        no-caps
                        icon="add_circle"
                        @click="audioDiag = true"
                      />
                      <q-btn
                        label="Delete Track"
                        color="info"
                        flat
                        no-caps
                        icon="delete"
                        @click="onDelete"
                      />
                    </div>
                    <div class="text-body text-primary col-2">
                      <!-- <q-toggle
                      v-model="credentials.showfullbio"
                      color="info"
                    /> -->
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="center">
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue to Equipment"
                  no-caps
                  size="md"
                  to="/equipment"
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
    v-model="audioDiag"
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
      <q-uploader
        :url="onStartAudioUpload"
        style="width:500px;height:500px;border-width:0px;"
        label="Upload MP3 Files"
        flat
        bordered
        multiple
        auto-upload
        max-files="3"
        accept="audio/*"
        field-name="photo"
        :form-fields="[
          { name: 'profileID', value: authStore.profileID }
        ]"
        @rejected="onRejected"
        @uploaded="onUploaded"
      />
      <q-card-section>
        <!-- <div class="row items-start q-gutter-md bg-secondary q-ml-xs ">
          <div class="text-body text-primary col-11 ">
            <br><br>
          </div>
        </div> -->
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          color="info"
          align="center"
          text-color="primary"
          label="Upload Track"
          no-caps
          size="md"
          @click="submitAudio"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Copy the track embed share link from Soundcloud and paste it in the text box above.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import { Notify} from 'quasar'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
import { WaveSurferPlayer } from '@meersagor/wavesurfer-vue'

const authStore = useAuthStore()
const audioDiag = ref(false)

// Audio tracks data structure
const audioTracks = ref([
  {
    name: 'Groovy Bots in the Digital Jungle',
    url: 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/tracks/Groovy+Bots+in+the+Digital+Jungle.mp3',
    cover: 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
  }
])

// WaveSurfer instances and state
const wavePlayers = ref([])
const waveSurferInstances = ref([])
const isPlaying = ref([])
const currentTimes = ref([])
const durations = ref([])

// Initialize arrays for each track
audioTracks.value.forEach((_, index) => {
  isPlaying.value[index] = false
  currentTimes.value[index] = 0
  durations.value[index] = 0
})

// WaveSurfer options generator
const getWaveOptions = (url) => ({
  height: 48,
  width: 400,
  waveColor: '#31CCEC',
  progressColor: '#222222',
  barGap: 2,
  barWidth: 2,
  barRadius: 8,
  cursorWidth: 0,
  url: url,
})

// Format time helper
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '00:00'
  return [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(':')
}

// Event handlers
function readyHandler(duration, index) {
  console.log(`Track ${index} ready, duration:`, duration)
  durations.value[index] = duration
}

function timeUpdateHandler(time, index) {
  currentTimes.value[index] = time
}

function readyWaveSurferHandler(waveSurfer, index) {
  console.log(`WaveSurfer instance ${index} ready`)
  waveSurferInstances.value[index] = waveSurfer
  
  // Listen for play/pause events
  waveSurfer.on('play', () => {
    isPlaying.value[index] = true
    // Pause other tracks when one starts playing
    pauseOtherTracks(index)
  })
  
  waveSurfer.on('pause', () => {
    isPlaying.value[index] = false
  })
  
  waveSurfer.on('finish', () => {
    isPlaying.value[index] = false
  })
}

// Play/pause control
function togglePlayPause(index) {
  const waveSurfer = waveSurferInstances.value[index]
  
  if (!waveSurfer) {
    console.warn(`WaveSurfer instance ${index} not ready`)
    return
  }
  
  if (isPlaying.value[index]) {
    waveSurfer.pause()
  } else {
    // Pause other tracks first
    pauseOtherTracks(index)
    waveSurfer.play()
  }
}

// Pause all other tracks except the specified index
function pauseOtherTracks(excludeIndex) {
  waveSurferInstances.value.forEach((waveSurfer, index) => {
    if (index !== excludeIndex && waveSurfer && isPlaying.value[index]) {
      waveSurfer.pause()
    }
  })
}

// Upload and management functions
const credentials2 = ref({
  UpdateField: "AudioArray",
  UpdateValue: "test",
  UpdateIndex: 0,
  ProfileID: authStore.profileID,
})

async function onDelete() {
  // Implementation for deleting tracks
  console.log('Delete track functionality')
}

async function onStartAudioUpload(files) {
  const file = files[0]
  credentials2.value.Files = file
  credentials2.value.FileName = files[0].name
  
  console.log("Audio upload:", credentials2.value)
  
  try {
    const profileHeaderData = await auth.updateAudioTrack(credentials2)
    console.log('Upload successful:', profileHeaderData.data)
    
    Notify.create({
      message: 'File upload Successful',
      type: 'positive'
    })
    
    return { ok: true }
  } catch (error) {
    console.error('Upload failed:', error)
    Notify.create({
      message: 'Upload failed',
      type: 'negative'
    })
    return { ok: false }
  }
}

function onRejected(rejectedEntries) {
  rejectedEntries.forEach(entry => {
    Notify.create({
      message: `File rejected: ${entry.failedPropValidation}`,
      type: 'negative'
    })
  })
}

function onUploaded(info) {
  Notify.create({
    message: 'File uploaded successfully',
    type: 'positive'
  })
}

function submitAudio() {
  audioDiag.value = false
  // Additional submit logic here
}
</script>
<style>
.controls {
  background-color: white;
}
.audio-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/audio.jpg") no-repeat center;
  background-size: cover;
}
</style>