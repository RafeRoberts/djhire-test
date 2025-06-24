<template>
  <q-page padding>
    <div class="row justify-between bg-primary">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-lg q-pb-md"
        align="center"
      >
        All Profiles
      </div>
    </div>
    <div class="row justify-between bg-secondary">
      <div
        class="col-2 col-md-2 my-font text-h4 text-primary q-ma-lg q-pb-lg"
        align="center"
      >
        <q-table
          :rows="profiles"
          :columns="columns"
          row-key="_id"
          flat
          class="bg-white"
          style="width:80vw;"
          title=""
          no-cap
        >
          <template #body-cell-profileImage="props">
            <q-td
              style="height:80px;width:80px;border:0px;"
              :props="props"
            >
              <div v-if="props.value === 'undefined'">
                <q-img

                  class="rounded-borders q-gutter-xs"
                  style="height:80px;width:80px;"
                  src="https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg"
                />
              </div>
              <div v-else>
                <q-img

                  class="rounded-borders q-gutter-xs"
                  style="height:80px;width:80px;;border:0px;"
                  :src="props.value"
                />
              </div>
            </q-td>
          </template>
          <template #body-cell-name="props">
            <td

              class="text-primary"
              :props="props"
            >
              <div class="text-body text-primary q-ma-sm">
                {{ props.value }}
              </div>
            </td>
          </template>
          <template #body-cell-location="props">
            <td

              class="text-primary"
              :props="props"
            >
              {{ props.value[0].suburb }}, {{ props.value[0].state }}
            </td>
          </template>
          <template #body-cell-years="props">
            <td

              class="text-primary"
              :props="props"
            >
              <div
                class="text-body text-primary q-ma-none"
              >
                {{ props.value }}
              </div>
            </td>
          </template>
          <template #body-cell-email="props">
            <td

              class="text-primary"
              :props="props"
            >
              <div class="text-body text-primary q-ma-none">
                &nbsp;&nbsp;{{ props.value }}
              </div>
            </td>
          </template>
          <template #body-cell-view="props">
            <td

              class="text-primary"
              :props="props"
            >
              <div class="text-body text-grey text-left q-ma-sm">
                <q-btn

                  color="info"
                  align="center"
                  text-color="primary"
                  label="View Profile"
                  no-caps
                  size="md"
                  @click="onViewProfile(props.value)"
                />
              </div>
            </td>
          </template>
          <template #body-cell-approve="props">
            <td

              class="text-primary"
              :props="props"
            >
              <div class="text-body text-grey text-left q-ma-sm">
                <q-btn

                  color="info"
                  align="center"
                  text-color="primary"
                  label="Approve / Reject"
                  no-caps
                  size="md"
                  :disable="(props.value !== 'Profile Pending Moderation')"
                  @click="approveDiag = true"
                />
              </div>
            </td>
          </template>
          <template #body-cell-feature="props">
            <td

              class="text-primary"
              :props="props"
            >
              <div class="text-body text-grey text-left q-ma-sm">
                <q-btn

                  color="info"
                  align="center"
                  text-color="primary"
                  label="Feature"
                  no-caps
                  size="md"
                  :disable="true"
                  @click="featureDiag = true"
                />
              </div>
            </td>
          </template>
        </q-table>
      </div>
    </div>
    <q-dialog
      v-model="approveDiag"
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
              Reason and Fix Instructions
              <q-input
                v-model="credentialsNew.Details"
                label-width="3"
                helper="Description"
                outlined
                type="textarea"
                dense
              /><br><br>
            </div>
            <br>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            color="green"
            align="center"
            text-color="primary"
            label="Approve"
            no-caps
            size="md"
            @click="submitApprove"
          />
          <q-btn
            color="red"
            align="center"
            text-color="primary"
            label="Reject"
            no-caps
            size="md"
            @click="submitReject"
          />
        </q-card-actions>
        <q-card-section>
          <div class="row items-start q-gutter-md">
            <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
            <div class="text-body text-info col-7 q-gutter-md">
              <q-chat-message
                name="DJEDDA"
                avatar="~/assets/djeddaAvatar2.png"
                :text="['Make sure to select if each peiece of equipment can be Lent out and what the price for that would be.']"
              />
            </div>
            <div class="text-body text-primary col-2" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref} from 'vue'
import { useQuasar } from 'quasar'
import { useRouter} from 'vue-router'
import auth from '../auth'
const router = useRouter()
const $q = useQuasar()
const profiles = ref([])
const approveDiag = ref(false)
const columns = ref([
       { name: 'profileImage', label: 'ProfilePic', align:'left', field: 'ProfileImageSelection', format: val => `${val}`, sortable: true },
        { name: 'name', label: 'DJName', align:'left', field: 'DJName', sortable: true },
        { name: 'location', label: 'Location', align:'left', field: 'Location', sortable: true },
        { name: 'email', label: 'Email', align:'left', field: 'Email', sortable: true },
        { name: 'status', label: 'Status', align:'left', field: 'Status', sortable: true },
        { name: 'view', label: 'View', align:'left', field: '_id', format: val => `${val}` },
        { name: 'approve', label: 'Approve', align:'left', field: 'Status', format: val => `${val}` },
        { name: 'feature', label: 'Feature', align:'left', field: '_id', format: val => `${val}` }

      ])
      const credentialsNew= ref(
                        {
                          Details:'Bio Sux',
                          "UpdateField" : "Status",
                          "UpdateValue" : 'Profile Rejected',
                          ProfileID: '',
                        }
                      )
//Get All Profiles
    const profileData = auth.getAllProfiles().then(data => {
        //console.log('data=',data.data[0].ServiceArea)
        profiles.value = data.data

      })
      console.log('data results profiles:' + profileData)

function onViewProfile ( profileID ) {
  $q.localStorage.setItem('viewProfileID', profileID)
  credentialsNew.value.ProfileID = profileID

  router.push({ path: `/view/` })
}
function submitApprove () {
      credentialsNew.value.UpdateValue = "Profile Approved"
      credentialsNew.value.ProfileID = $q.localStorage.getItem('viewProfileID')

      const profileStatus = auth.updateProfileStatus(credentialsNew).then(data => {
        console.log(data.data)


      })
      console.log(profileStatus)

  approveDiag.value = false
}
function submitReject () {
credentialsNew.value.UpdateValue = "Profile Rejected"
credentialsNew.value.ProfileID = $q.localStorage.getItem('viewProfileID')
      const profileStatus = auth.updateProfileStatus(credentialsNew).then(data => {
        console.log(data.data)


      })
      console.log(profileStatus)
  approveDiag.value = false
}
</script>
