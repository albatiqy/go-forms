// <!--help-circle info-circle close-circle alert-circle check-circle minus-circle    alert stop-alert cancel-->

export default ({ app, store }, inject) => {
  inject('notifier', {
    showError(message = "Kesalahan telah terjadi") {
      store.commit('snackbar/showMessage', { message, color: "deep-orange accent-3", icon: "mdi-alert-octagon" })
    },
    showWarning(message) {
      store.commit('snackbar/showMessage', { message, color: "deep-orange accent-3", icon: "mdi-alert" })
    },
    showSuccess(message) {
      store.commit('snackbar/showMessage', { message, color: "light-green accent-4", icon: "mdi-check-circle" })
    },
    showInfo(message) {
      store.commit('snackbar/showMessage', { message, color: "light-green accent-4", icon: "mdi-information" })
    },
  })
}