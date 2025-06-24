<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Support Agent
        <elevenlabs-convai agent-id="iO89RVf4das6GE7Z3MGg" />
      </div>
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
    </div>
  </div>
  <div
    class="row justify-between bg-white"
  >
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-4 ">
      <!-- <div class="row justify-evenly bg-secondary q-mb-lg"> -->
      <br><br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <q-img
        src="~assets/support.png"
        style="width:261px;height:226px"
      /><br><br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;You currently do not have any support tickets.<br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br>
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>
  </div>
  <!-- </q-page>
  </div> -->
</template>

<script setup>
import { useMeta } from 'quasar'
// import { useScriptTag } from '@vueuse/core'
// JS tags
const meta = {
script: {
    ldJson: {
      type: 'application/javascript',
      src: 'https://elevenlabs.io/convai-widget/index.js'
    }
  }
}
useMeta(meta)
// useScriptTag(
//   'https://elevenlabs.io/convai-widget/index.js'
// )
// import { Conversation } from '@11labs/client';
// // import { ref } from 'vue'
// // //import { useVuelidate } from '@vuelidate/core'
// // //import { required, email } from '@vuelidate/validators'
// // //import auth from '../auth'
// // import { useAuthStore } from 'src/stores/auth'
// // //import auth from 'src/auth'
// // import { useRouter } from 'vue-router'

// // //import { useQuasar } from 'quasar'
// // //import { useAuthStore } from 'src/stores/auth';
// // const authStore = useAuthStore()
// const startButton = document.getElementById('startButton')
// const stopButton = document.getElementById('stopButton')
// const connectionStatus = document.getElementById('connectionStatus')
// const agentStatus = document.getElementById('agentStatus')


// //const $q = useQuasar()
// const router = useRouter()
// const formName = ref()

// // const credentials = ref({
// //   artistname: authStore.artistname,
// //   fullname: authStore.username,
// //   showfullname: true,
// //   email: '',
// //   location: ''
// // })
// const credentials = ref({
//   showfullbio: true,
//   bio: 'Describe yourself and your history in music'

// })

// //const requiredRule = val => (val && val.length > 0) || 'Please enter a value'
// console.log(authStore.username)
// //credentials.fullname.value = authStore.username


// const submit = async() => {
//   router.push({ path: `/photos/` })
// }
</script>
<style type="css">
/* ._poweredBy_1f9vw_251 {
  display: none;
}
.__wrapper_1f9vw_18 {
    pointer-events: none;
    position: fixed;
    left: 320px;
    top: 320px;
    z-index: 1000;
    --btn-max-width: 320px;
} */
 .q-footer { z-index: 999;}
/*._devHost_1f9vw_7, :host{pointer-events:none;right:32px;bottom:32px;z-index:1000;--btn-max-width: 320px}
._wrapper_1f9vw_18{display:flex;flex-direction:column-reverse;align-items:flex-end;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}
._box_1f9vw_39{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;align-items:center;gap:16px;padding:20px;border-radius:var(--el-border-radius);box-shadow:0 0 64px 64px #0000001a;pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function);max-width:calc(100vw - 64px);max-height:calc(100vh - 64px)}
 ._open_1f9vw_57 ._box_1f9vw_39{pointer-events:initial;opacity:1}
._compact_1f9vw_62:not(._customContent_1f9vw_62) ._box_1f9vw_39{gap:8px;padding:12px;border-radius:32px}
._avatar_1f9vw_68{position:relative;width:54px;height:54px;flex-shrink:0}
._compact_1f9vw_62 ._avatar_1f9vw_68{width:36px;height:36px}
._avatarBackground_1f9vw_80{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}
._avatarImage_1f9vw_90{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}
._canvas_1f9vw_102{width:100%;height:100%}._actions_1f9vw_107{width:min-content;display:flex;gap:11px;flex-direction:column}
._actionButtons_1f9vw_114{min-width:calc(156px + var(--additional-width, 0px));max-width:var(--btn-max-width);display:flex;gap:8px}
._status_1f9vw_121{font-size:14px;text-wrap:nowrap;line-height:24px;margin:-7px 0;max-width:var(--btn-max-width);overflow:hidden;text-overflow:ellipsis;color:var(--el-text-color)}
._btn_1f9vw_132{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;flex-shrink:1;min-height:36px;min-width:0;max-width:var(--btn-max-width)}
._avatarButton_1f9vw_165{background-color:transparent;color:transparent;box-shadow:none;height:56px;padding:0}
._avatarButton_1f9vw_165 ._avatar_1f9vw_68{margin:1px}
._btn_1f9vw_132:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}
._btn_1f9vw_132:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}
._btn_1f9vw_132._disabled_1f9vw_188{opacity:.5}._btn_1f9vw_132:disabled{opacity:.5;pointer-events:none}
._btn_1f9vw_132:focus-visible{--el-focus-ring-radius: 1px;outline:none}
._btn_1f9vw_132._secondary_1f9vw_202{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}
._btn_1f9vw_132._secondary_1f9vw_202:hover{--el-ring-color: rgba(135, 145, 165, .1)}
._btn_1f9vw_132._secondary_1f9vw_202:active{--el-ring-color: rgba(125, 135, 155, .2)}
._btn_1f9vw_132._iconBtn_1f9vw_216{flex-grow:0;flex-shrink:0;height:36px;width:36px}
._btn_1f9vw_132._select_1f9vw_223{flex-grow:0;flex-shrink:0;padding:6px;gap:4px}
._ellipsis_1f9vw_230{flex-shrink:1;overflow:hidden;text-overflow:ellipsis}
._iconSlot_1f9vw_236{display:flex;font-size:16px}
._btnIcon_1f9vw_241{margin-left:-6px;margin-right:4px;flex-shrink:0}
._minimize_1f9vw_247{pointer-events:all}
._poweredBy_1f9vw_251{pointer-events:all;font-size:10px;align-self:center;text-align:center;color:var(--el-text-color)}
._poweredBy_1f9vw_251 a,
._poweredBy_1f9vw_251 span{opacity:.5}
._poweredBy_1f9vw_251 a{white-space:nowrap;color:inherit;outline-color:var(--el-focus-color)}
._poweredBy_1f9vw_251 a:hover,._poweredBy_1f9vw_251 a:focus-visible{opacity:1}
._compact_1f9vw_62 ._poweredBy_1f9vw_251,._full_1f9vw_276 ._poweredBy_1f9vw_251{margin:-8px 0 -20px}
._terms_1f9vw_280{display:none;max-width:480px;font-size:14px;line-height:20px;accent-color:var(--el-btn-color)}
._terms_1f9vw_280 form{display:flex;flex-direction:column;gap:16px}
._terms_1f9vw_280 p,._terms_1f9vw_280 ul,._terms_1f9vw_280 ol,._terms_1f9vw_280 h1,._terms_1f9vw_280 h2,._terms_1f9vw_280 h3,._terms_1f9vw_280 h4,._terms_1f9vw_280 h5,._terms_1f9vw_280 h6{margin:0;font-weight:400}._terms_1f9vw_280 a{color:var(--el-text-color)}._terms_1f9vw_280 ._strong_1f9vw_311{font-weight:500}._terms_1f9vw_280 h1{font-size:35px}._terms_1f9vw_280 h2{font-size:28px}._terms_1f9vw_280 h3{font-size:24px}._terms_1f9vw_280 h4{font-size:20px}._terms_1f9vw_280 h5{font-size:18px}._terms_1f9vw_280 h6{font-size:16px}._terms_1f9vw_280._show_1f9vw_339{display:block}._termsFooter_1f9vw_343{display:flex;gap:8px;justify-content:end;margin-top:20px}._termsFooter_1f9vw_343 ._btn_1f9vw_132{flex-grow:0}._feedback_1f9vw_354{display:flex;align-items:center;gap:8px;z-index:1;opacity:0;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:12px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._feedback_1f9vw_354._show_1f9vw_339{opacity:.5;translate:0 0;pointer-events:auto}._feedback_1f9vw_354._show_1f9vw_339:hover{opacity:1}._inlineFeedback_1f9vw_380{display:flex;align-items:center;gap:5px;z-index:1;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:14px;font-weight:500;text-wrap:nowrap;line-height:20px}._inlineFeedback_1f9vw_380._show_1f9vw_339{translate:0 0;pointer-events:auto}._inlineFeedback_1f9vw_380 ._feedbackText_1f9vw_399{margin:0 12px}._flag_1f9vw_403{width:24px;height:24px;border-radius:50%;object-fit:cover;border:1px solid var(--el-border-color)}._selectContent_1f9vw_411{z-index:1;overflow:hidden;background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);border-radius:var(--el-border-radius);max-height:min(384px,var(--radix-select-content-available-height));min-width:var(--radix-select-trigger-width)}._selectViewport_1f9vw_422{padding:8px}._selectValue_1f9vw_426{display:none;margin-right:auto;margin-left:auto}._selectIcon_1f9vw_432{padding-right:4px}._selectItem_1f9vw_436{display:flex;-webkit-user-select:none;user-select:none;align-items:center;padding:6px 32px 6px 6px;gap:8px;cursor:pointer;border-radius:var(--el-border-radius);position:relative}._selectItem_1f9vw_436:focus-visible{outline:none}._selectItem_1f9vw_436[data-highlighted]{background-color:#8080801a}._selectItemIndicator_1f9vw_455{position:absolute;right:0;width:32px;display:inline-flex;align-items:center;justify-content:center}._selectScrollButton_1f9vw_464{display:flex;align-items:center;justify-content:center;height:24px;background-color:var(--el-bg-color);cursor:default}._error_1f9vw_473{max-width:320px;font-size:14px;line-height:20px}._error_1f9vw_473 h1{margin:0 0 16px;font-size:20px;font-weight:400}._error_1f9vw_473 p{margin:0} */
</style>
