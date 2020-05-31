
export default async function ({ store, error, $axios, params }) {
  if (!store.state.videos.length ){
    const { data } = await $axios.get('/api/get/videos')
    store.commit( 'put',data )
  }

  if ( !store.state.videos.map( ({word}) => word ).includes(params.id) ) {
    error({ statusCode : 404, message: 'not found' })
  }
}
