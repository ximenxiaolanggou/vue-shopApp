import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate',(input,fmtString) => {
  return moment(input).format(fmtString)
})
