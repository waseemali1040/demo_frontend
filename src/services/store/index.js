import { createStore } from 'vuex'
import usersModule from "@/services/store/usersModule";
import postsModule from "@/services/store/postsModule";

const store = createStore({

  modules:{
      users:usersModule,
      posts:postsModule
  }
})
export default store