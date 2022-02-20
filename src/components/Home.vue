<template>
    <h1>Home page</h1>
  <h3>user counter {{count}}</h3>
  <h3>post Count {{pcount}}</h3>
  <button @click="getUsersList">+</button>

</template>
<script>
import {GET_USER_LIST, SET_COUNT} from '@/services/store/usersModule'
import {mapActions,mapState} from "vuex";

export default {
  computed:{
    ...mapState({count: state=>state.users.count}),
    ...mapState({pcount: state=>state.posts.count})
  },
methods:{
  ...mapActions({
    increment: SET_COUNT
  }),
  getUsersList(){
    this.$store.dispatch(GET_USER_LIST).then(data=>{
      console.log(data)
    })
  }

},


}
</script>