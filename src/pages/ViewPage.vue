<template>
  <q-page
    padding
    class="bg-secondary"
  >
    <div
      class="row justify-between bg-secondary"
      style="margin-left:-24px;margin-right:-24px;margin-top: -40px;padding-bottom:10px;padding-top:8px;padding-left:40px;"
    >
      <div class="col-2 col-md-2">
      <!-- .colLeft -->
      </div>
      <div

        class="col-7"
      >
        <q-card
          v-if="loadingProfile"
          flat
          class="bg-secondary"
          style="max-width: 860px;"
        >
          <q-item class="q-pa-none">
            <q-item-section>
              <q-skeleton
                type="rect"
                style="height:260px"
              />
            </q-item-section>
          </q-item>
          <q-item style="left:270px;width:940px;">
            <q-item-section>
              <q-item-label class="text-h4">
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-skeleton
                type="QBtn"
              />
            </q-item-section>
          </q-item>
          <q-item style="left:270px">
            <q-item-section>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey bg-white q-gutter-sm"
                align="justify"
                no-caps
                active-bg-color="grey"
                active-color="primary"
                indicator-color="white"
                style="width:560px;"
              >
                <q-tab
                  name="bio"
                  label="Biography"
                />

                <q-tab
                  name="photo"
                  label="Photos"
                />
                <q-tab
                  name="video"
                  label="Videos"
                />
                <q-tab
                  name="sound"
                  label="Sounds"
                />
                <q-tab
                  name="equip"
                  label="Equipment"
                />
                <q-tab
                  name="review"
                  label="Reviews"
                />
              </q-tabs>
              <q-tab-panels
                v-model="tab"
                animated
                class="q-gutter-xs"
                style="width:560px;left:-4px;"
              >
                <q-tab-panel
                  name="bio"
                >
                  <q-skeleton
                    type="text"
                    style="width:520px;"
                  />
                  <q-skeleton
                    type="text"
                    style="width:520px;"
                  />
                  <q-skeleton
                    type="text"
                    style="width:520px;"
                  />
                  <q-skeleton
                    type="text"
                    style="width:520px;"
                  />
                  <q-skeleton
                    type="text"
                    style="width:520px;"
                  />
                  <q-skeleton
                    type="text"
                    style="width:520px;"
                  />
                </q-tab-panel>
              </q-tab-panels>
            </q-item-section>
          </q-item>
          <q-item style="width:260px;">
            <q-item-section>
              <q-card
                flat
                class="bg-white q-gutter-sm"
                style="width:210px;top:-400px;left:20px;z-index: 20;"
              >
                <q-item class="q-pa-none">
                  <q-item-section>
                    <q-skeleton
                      type="rect"
                      style="height:160px;width:194px"
                    />
                  </q-item-section>
                </q-item>
                <q-item class="q-ma-none">
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ma-none">
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ma-none">
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ma-none">
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ma-none">
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ma-none">
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-card>
            </q-item-section>
          </q-item>
        </q-card>
        <!-- Show Loadded Card -->
        <q-card
          v-if="!loadingProfile"
          flat
          class="bg-secondary "
          style="max-width: 860px;"
        >
          <q-item class="q-pa-none">
            <q-item-section>
              <q-img
                :src="profiles[0].HeaderImageSelection"
                style="height: 300px;"
              />
            </q-item-section>
          </q-item>
          <q-item style="left:270px;width:940px;">
            <q-item-section>
              <q-item-label class="text-h4 text-primary">
                {{ profiles[0].DJName }}
              </q-item-label>
              <q-item-label caption>
                {{ profiles[0].Location[0].suburb }}, {{ profiles[0].Location[0].state }}
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-btn

                color="info"
                align="center"
                text-color="primary"
                label="Get Quote"
                no-caps
                size="md"
                style="width:100px"
                @click="onQuoteProfile()"
              />
            </q-item-section>
          </q-item>
          <q-item style="left:270px">
            <q-item-section>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey bg-white q-gutter-sm"
                align="justify"
                no-caps
                active-bg-color="grey-4"
                active-color="primary"
                indicator-color="white"
                style="width:560px;"
              >
                <q-tab
                  name="bio"
                  label="Biography"
                />

                <q-tab
                  name="photo"
                  label="Photos"
                />
                <q-tab
                  name="video"
                  label="Videos"
                />
                <q-tab
                  name="sound"
                  label="Sounds"
                />
                <q-tab
                  name="equip"
                  label="Equipment"
                />
                <q-tab
                  name="review"
                  label="Reviews"
                />
              </q-tabs>
              <q-tab-panels
                v-model="tab"
                animated
                class="q-gutter-xs"
                style="width:560px;left:-4px;"
              >
                <q-tab-panel
                  name="bio"
                >
                  <q-item-label class="text-grey">
                    {{ profiles[0].FullBio }}<br><br><br><br>
                  </q-item-label>
                </q-tab-panel>
                <q-tab-panel
                  name="photo"
                >
                  <q-item-label class="text-grey">
                    {{ profiles[0].FullBio }}<br><br><br><br>
                  </q-item-label>
                </q-tab-panel>
              </q-tab-panels>
            </q-item-section>
          </q-item>
          <q-item style="width:260px;">
            <q-item-section>
              <q-card
                flat
                dense
                class="bg-white q-gutter-sm"
                style="width:210px;top:-360px;left:20px;z-index: 20;"
              >
                <q-item
                  dense
                  class="q-pa-none"
                >
                  <q-item-section>
                    <q-img
                      :src="profiles[0].ProfileImageSelection"
                      style="height:160px;width:194px"
                    />
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-item--dense q-mt-none"
                >
                  <q-item-section dense>
                    <q-item-label caption>
                      Years Experience:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section dense>
                    <q-item-label class="text-body">
                      {{ profiles[0].Experience }} years
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-item--dense q-mt-none"
                >
                  <q-item-section class="q-item-section-dense">
                    <q-item-label
                      caption
                    >
                      Age:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section class="q-py-none q-my-none">
                    <q-item-label class="text-body q-py-none">
                      {{ (2025 - parseInt(profiles[0].Birthday.substring(6,10))) }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-item--dense q-mt-none"
                >
                  <q-item-section class="q-py-none q-my-none">
                    <q-item-label
                      caption
                      class="q-py-none q-my-none"
                    >
                      Gender:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section class="q-py-none q-my-none">
                    <q-item-label class="text-body">
                      {{ profiles[0].Gender }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-item--dense q-mt-none"
                >
                  <q-item-section>
                    <q-item-label caption>
                      Qualifications:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body">
                      {{ profiles[0].Qualifications }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-item--dense q-mt-none"
                >
                  <q-item-section>
                    <q-item-label caption>
                      Club Residencies:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body">
                      {{ profiles[0].Residences[0] }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-item--dense q-mt-none">
                  <q-item-section>
                    <q-item-label caption>
                      Specialties:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body">
                      {{ profiles[0].Specialties }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-item--dense q-mt-none">
                  <q-item-section>
                    <q-item-label caption>
                      Events:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body">
                      {{ profiles[0].EventTypes[0].event }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-item--dense q-mt-none">
                  <q-item-section>
                    <q-item-label caption>
                      Services:
                    </q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body">
                      {{ profiles[0].ExtraServices }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class=" q-mt-none">
                  <q-item-section>
                    <q-btn
                      color="grey-4"
                      align="center"
                      text-color="primary"
                      label="Download Press Kit"
                      no-caps
                      size="md"
                      @click="onPressKit(profileID.value)"
                    />
                  </q-item-section>
                </q-item>
              </q-card>
            </q-item-section>
          </q-item>
        </q-card>
      </div>

      <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import auth from '../auth'
import { useQuasar, Notify } from 'quasar'

import { useRouter} from 'vue-router'

const router = useRouter()
const $q = useQuasar()
const profiles = ref([])
const profileID = ref('')
const credentials = ref({
  ProfileID : ''
})
const loadingProfile = ref(true)
const tab = ref('bio')

profileID.value = $q.localStorage.getItem('viewProfileID')
console.log('profileID=',profileID.value)
credentials.value.ProfileID = $q.localStorage.getItem('viewProfileID')

  const profilesData = auth.getSingleProfile(credentials).then(data => {
        console.log('profiles=',data.data)
        loadingProfile.value = false
        profiles.value = data.data
      //   //selectedRegion.value = ""
      //   // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      })
      console.log('data results profiles:' + profilesData)

function onPressKit() {
    Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'This DJ has not provided a Press Kit yet.',
      type: 'warning'
    })

}

function onQuoteProfile() {
  router.push({ path: `/quote/` })

}
</script>
