<template>
  <q-btn
    v-if="!isAuthenticated"
    flat
    color="grey-14"
    icon="exit_to_app"
    label="Log In"
    to="/login"
    no-caps
  />
  <q-btn
    v-if="isAuthenticated"
    flat
    color="grey-14"
    icon="notifications"
    label="Action Center"
    to="/action"
    no-caps
  />
  <q-btn
    v-if="!isAuthenticated"
    flat
    color="grey-14"
    icon="person_add"
    label="Sign Up"
    to="/register"
    no-caps
  />
  <q-btn-dropdown
    v-if="isAuthenticated"
    flat
    color="grey-14"
    auto-close
    dense
  >
    <template #label>
      <q-chip
        square
        color="primary"
        class="q-pa-sm"
      >
        <q-avatar>
          <img src="~assets/avatar.jpg">
        </q-avatar>
      </q-chip>
      {{ authStore.djname }}
    </template>
    <q-card
      flat
      dense
      bordered
      class="my-card my-font"
      style="width:300px;"
    >
      <q-card-section
        class="q-pa-sm"
      >
        <q-chip square>
          <q-avatar>
            <q-img src="authStore.profileImage" />
          </q-avatar>
          {{ authStore.username }}
        </q-chip>

        <div class="my-font text-primary text-caption">
          {{ authStore.email }}
        </div>
        <q-btn
          unelevated
          dense
          text-color="info"
          color="light-blue-2"
          label="FREE ACCOUNT"
          no-caps
          class="q-ma-md absolute-right"
        />
      </q-card-section>
      <q-separator />
      <q-card-section
        dense
      >
        <q-btn
          dense
          flat
          color="primary"
          label="Subscription"
          no-caps
          disable
        />
        <br>
        <q-btn
          dense
          flat
          color="primary"
          label="Advertising"
          no-caps
          disable
        />
        <br>
        <q-btn
          dense
          flat
          color="primary"
          label="Edit Profile"
          no-caps
          to="/profile"
        />
        &nbsp;
        <q-badge
          color="orange"
        >
          {{ authStore.profileStatus }}
        </q-badge>

        <br>
        <q-btn
          dense
          flat
          color="primary"
          label="Account Settings"
          no-caps
          disable
        />
        <br>
        <q-btn
          dense
          flat
          color="primary"
          label="Support"
          no-caps
          disable="false"
          to="/support"
        />
        <br>
        <q-btn
          dense
          flat
          color="primary"
          label="Log out"
          no-caps
          @click="logout"
        />
      </q-card-section>
    </q-card>
  </q-btn-dropdown>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { watch } from 'vue'
import { useRouter} from 'vue-router'
import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)
const router = useRouter()
//const profileImage = ref('~assets/avatar.jpg')

watch(isAuthenticated , () => {
  console.log('isLoggedIn changed')
})

const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      authStore.logout()
    router.push({ path: `/` })
      resolve()
    }, 1000)

  })
}



// const userData = authStore.getuser().then(data => {
//         console.log(data.data)
//         //.value = data.data.name
//         //selectedRegion.value = ""
//         // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
//       });
console.log('data results user:' + isAuthenticated)
</script>
