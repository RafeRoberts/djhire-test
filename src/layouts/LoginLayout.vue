<template>
  <q-layout
    view="lHr LpR lFr"
    class="bg-secondary"
  >
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
                <div class="col-1 col-md-2 my-font">
                  <q-btn
                    flat
                    color="grey-14"
                    icon="chevron_left"
                    label="Back"
                    to="/"
                    no-caps
                  />
                </div>

                <div class="col-1 col-md-2">
                  <q-space />
                </div>
                <div class="col-2 col-md-2 q-gutter-sm my-font " />
                <div
                  class="col-1 col-md-2 q-gutter-none my-font"
                />
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
  </q-layout>
</template>

<script>
export default {
  name: 'LoginLayout',
  data () {
    return {}
  }
}
</script>
