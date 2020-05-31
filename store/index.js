export const state = () => ({
  videos: [],
  word: ""
})


export const mutations = {
  put(state, videos){
    state.videos = videos
  },
  hello(state, word){
    state.word = word
  }
}
