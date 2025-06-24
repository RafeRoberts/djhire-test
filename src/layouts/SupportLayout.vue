<template>
  <q-layout view="lHr LpR lFr">
    <q-header
      reveal

      class="bg-primary q-gutter-sm my-font"
    >
      <q-toolbar>
        <q-toolbar-title>
          <div class="row justify-between q-mt-sm">
            <div class="col-1 col-md-1" />
            <div class="col-8 col-md-8">
              <div class="row justify-evenly">
                <div class="col-1 col-md-2">
                  <div valign="center">
                    <a href="/">
                      <img
                        alt="DJ Hire logo"
                        src="~assets/djhireLogoNoCom1.png"
                        style="width: 126px; height: 54px; vertical-align: middle; margin-bottom: 10px;"
                      ></a>
                  </div>
                </div>

                <div class="col-1 col-md-2">
                  <q-space />
                </div>
                <div class="col-2 col-md-2 q-gutter-sm my-font ">
                  <!-- <q-input
                    bg-color="grey-10"
                    label-color="grey-14"
                    round
                    outlined
                    dark
                    dense
                    label="Search DJ Profiles"
                  >
                    <template #prepend>
                      <q-avatar>
                        <q-icon
                          name="search"
                          color="grey-14"
                          size="xs"
                        />
                      </q-avatar>
                    </template>
                  </q-input> -->
                </div>
                <div
                  class="col-1 col-md-2 q-gutter-none my-font"
                >
                  <UserMenu />
                </div>
              </div>
            </div>
            <div class="col-1 col-md-1">
              <!-- .colRight -->
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>

    <q-footer
      reveal
      bordered
      class="bg-primary text-subtle my-font"
    >
      <q-toolbar inset>
        <!-- <div class="row justify-between q-mt-sm">-->
        <div class="col-2 col-md-2">
          <!-- .colLeft -->
        </div>
        <div class="col-8 col-md-7">
          <div
            valign="center"
            style="padding-left: 60px;"
          >
            <img
              alt="DJ Hire logo"
              src="~assets/djhireLogoNoCom1.png"
              style="width: 126px; height: 54px; vertical-align: middle; margin-top: 20px;margin-bottom: 20px;"
            >
          </div>
          <q-toolbar inset>
            <q-btn
              flat
              color="grey-14"

              label="Terms and Conditions"
              no-caps
            />
            <q-btn
              flat
              color="grey-14"

              label="Privacy Policy"
              no-caps
            />
            <q-btn
              flat
              color="grey-14"

              label="About Us"
              no-caps
            />
            <q-btn
              flat
              color="grey-14"

              label="Contact Us"
              no-caps
            />
            <q-space />
            <div
              class="text-grey-14 my-font"
            >
              Copyright &copy; DJHIRE 2025. All Rights Reseved.
            </div>
          </q-toolbar>
        </div>
        <!-- <div class="
              row
              justify-evenly"
            >
              <div class="col-1 col-md-2">
                <div valign="center">
                  <img
                    alt="DJ Hire logo"
                    src="~assets/djhireLogoNoCom1.png"
                    style="width: 126px; height: 54px; vertical-align: middle; margin-top: 20px;margin-bottom: 20px;"
                  >
                </div>
              </div>

              <div class="col-2 col-md-2">
                <q-space />
              </div>
              <div class="col-2 col-md-2">
                search menu
              </div>
              <div class="col-2 col-md-2">
                login btn
              </div>
              <div class="col-2 col-md-2">
                sign up btn
              </div>
            </div>
          </q-toolbar>
        </div>-->
        <div class="col-2 col-md-2">
          <!-- .colRighty -->
        </div>
        <!-- </div>-->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<script setup>
import { defineAsyncComponent } from 'vue'
const UserMenu = defineAsyncComponent(() => import('src/components/UserMenu.vue'))
// import { useAuthStore } from 'src/stores/auth';
// const authStore = useAuthStore()
// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>
