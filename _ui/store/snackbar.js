export const state = () => ({
    message: '',
    color: '',
    icon: '',
  })

  export const mutations = {
    showMessage (state, payload) {
      state.message = payload.message;
      state.color = payload.color;
      state.icon = payload.icon;
    }
  }