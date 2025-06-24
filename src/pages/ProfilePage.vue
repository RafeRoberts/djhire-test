<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="col-2 col-md-2" />
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl q-pb-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Profile Overview
      </div><br>
      <q-img
        src="~assets/penSquare.svg"
        width="116px"
        style="top:-174px;left:224px;"
      />


      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
      <!-- <q-img
        src="~assets/group-23520.svg"
        width="160px"
        style="top:40px;left:-280px;transform: rotate(180deg);"
      /> -->
    </div>

    <div
      class="fixed-center q-mt-xl q-pa-md bg-secondary"
    >
      <div class="q-pa-md row justify-center">
        <!-- <div style="width: 100%; max-width: 400px">
          <q-chat-message
            name="DJEDDA"
            avatar="~assets/djeddaAvatar2.png"
            :text="['Welcome to the DJ Hire platform!']"
            stamp="1 minute ago"
            text-color="white"
            bg-color="primary"
          />
        </div>
      </div> -->

        <q-stepper
          v-model="step"
          vertical
          color="primary"
          animated
          class="q-pa-md"
        >
          Your DJ Profile consists of the following sections:
          <q-step
            :name="1"
            title="About Section"
            icon="settings"
            :done="step > 1"
          >
            This is where you set up your contact details and DJ information such as Music Genres that you play.
            DJ Services and Skills, choices of event types and specialities and extra services.

            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Continue"
                @click="step = 2"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Bio Information"

            icon="create_new_folder"
            :done="step > 2"
          >
            This is where you describe yourself and your artist profile. Think of this as the advertising copy that explains why someone should book you as a DJ for thier event

            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Continue"
                @click="step = 3"
              />
            <!-- <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 2"
            /> -->
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Photos"
            icon="assignment"
            :done="step > 2"
          >
            This is where you can set your profile image and header image, along with create albums of photo's from gigs you have played.
            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Continue"
                @click="step = 4"
              />
            <!-- <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 3"
            /> -->
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="4"
            title="Videos"
            icon="add_comment"
            :done="step > 3"
          >
            In this section you can list any videos you have of DJ performances. If you do not have any video's, at your next gig get one of your friends to take a video on their phone. A video showing people dancing to your tracks and some crowd interactions will get you more bookings.
            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Continue"
                @click="step = 5"
              />
            <!-- <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 3"
            /> -->
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="5"
            title="Sounds"
            icon="add_comment"
            :done="step > 4"
            @click="step = 6"
          >
            In this section you can list any tracks you have of DJ performances or produced tracks on SoundCloud.  If you do not yet have a SoundCloud profile we recommend you create one and link them here. Having the ability to let people listen to your previous sets will help give them confidence that you are the correct choice for thier upcoming event.


            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Continue"
              />
            <!-- <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 4"
            /> -->
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="6"
            title="Equipment"
            icon="add_comment"
            :done="step > 5"
            @click="step = 7"
          >
            In this section you can list the equipment you use to perform events and you can list any extra equipment you have that can be loaned out for thier upcoming event. Items like decks, lighting, smoke machines.
            Different Types of events may have some equipment already provided and some like parties may not have any, so make sure you list what you need and have available.


            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Continue"
              />
            <!-- <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 4"
            /> -->
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="7"
            title="Action Center"
            icon="add_comment"
            :done="step > 5"
            @click="step = 7"
          >
            In this section you can manage your bookings, manage your messages, view your calendar, configure your fees
            and setup your Stripe account with your bank details so you can get paid.

            <q-stepper-navigation>
              <q-btn
                color="info"
                label="Set Up Profile"
                to="/artist"
              />
            <!-- <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 5"
            /> -->
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
    <div class="row absolute ">
      <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
      </div>
      <div class="col-8 col-md-8">
        <div class="col-2 col-md-2" />
        <div
          class="col-2 col-md-2  my-font text-h3 text-white q-ma-xl"
        >
        <!-- <q-img
          src="~assets/group-22610.svg"
          width="63px"
          style="top:400px;left:480px;transform: rotate(180deg);"
        />
        <q-img
          src="~assets/group-22610.svg"
          width="63px"
          style="top:390px;left:480px;transform: rotate(160deg);"
        /> -->
        </div>



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
      </div>
      <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Notify } from 'quasar'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router'
//import router from 'src/router';
const authStore = useAuthStore()
const router = useRouter()
const profiles = ref([])

     const step = ref(1)
     console.log("isAuthenticated.value=",authStore.isAuthenticated)

// Check for existing profiles by email
const emailAddress = authStore.email

const credentials = ref({
  email : emailAddress,
})

const profileData = auth.getExistingProfile(credentials).then(data => {
  console.log(data.data)
  profiles.value = data.data
  //Check the status and redirect to where left off
  const profileCount = profiles.value.length
  const profileStatus = profiles.value[0].Status
  const profileID = profiles.value[0]._id
  console.log('number=',profileCount)
  console.log('status=',profileStatus)
  console.log('profileID=',profileID)
  authStore.setProfileStatus(profileStatus)
  Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'Incomplete Profile Found - Continuing',
      type: 'positive',
      spinner: true
    })
    authStore.setProfileID(profileID)
  if(profileStatus === 'Artist Biography Incomplete') {
    router.push({ path: `/bio/` })

  }
  else if(profileStatus === 'Artist Photos Incomplete') {
    router.push({ path: `/photos/` })
  }
  else if(profileStatus === 'Artist Sounds Incomplete') {
    router.push({ path: `/sounds/` })
  }
  else if(profileStatus === 'Artist Videos Incomplete') {
    router.push({ path: `/videos/` })
  }
  else if(profileStatus === 'Artist Eqipment Incomplete') {
    router.push({ path: `/equipment/` })
  }

  else if(profileStatus === 'Profile Pending Moderation') {
    router.push({ path: `/complete/` })
  }
  else {
    router.push({ path: `/about/` })
  }

  });
    console.log('data results profiles:' + profileData)




</script>
