import VueDOMPurifyHTML from 'vue-dompurify-html'

export default ({ app }) => {

  app.directive('dompurify-html', VueDOMPurifyHTML)
}
