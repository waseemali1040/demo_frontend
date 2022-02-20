import VueAxios from "vue-axios";
import axios from "axios";

const ApiService={
    init(app){
        app.use(VueAxios, axios)
        this.axios = axios;
        this.axios.defaults.baseURL = 'http://localhost/demo_backend/';
        return this;
    },

    get(url){
        this.axios.get(url).then(result=>{
           return result;
        });
    },
    post(resource, params) {
        return new Promise(resolve => {
            return this.axios
                .post(`${resource}`, params)
                .then(data => {

                    resolve(data);
                })
                .catch(error => {
                    alert(error);
                });
        });
    },


}
export default ApiService
