<template>
  <div class="row">
    <div class="wrapper">
      <header>Todo App</header>
      <div class="inputField">
        <input type="text" placeholder="Task Title" v-model="formData.task_title">
        <input type="datetime-local" v-model="formData.task_date">
        <input style="background: #8E49E8; color: white" type="submit" @click="submitForm()" value="New Task +"><br>
      </div>
      <ul class="todoList">
        <!-- data are comes from local storage -->
        <template v-for='task of toDoList' :key='task._id'>
          <li><b>{{ task.task_title }} </b> - {{ filteredTodo(task.task_date) }}</li>
        </template>
      </ul>
<!--      <div class="footer">-->
<!--        <span>You have <span class="pendingTasks"></span> pending tasks</span>-->
<!--        <button>Clear All</button>-->
<!--      </div>-->
    </div>

  </div>



</template>
<script>

export default {
  data() {
    return {
      formData: {
        task_title: null,
        task_date: null,
      },
      toDoList: [{task_title: null, task_date: null}],
    }
  },
  methods: {
    filteredTodo(sdate) {

      let d = new Date(sdate)
      const timezo = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // console.log('timezon'+timezo)
      let getlocale = window.navigator.userLanguage || window.navigator.language;
      // console.log('local'+getlocale)
      let getTime = d.toLocaleString(getlocale, {timeZone: timezo,hour: 'numeric', hour12: true});
      // let gethour =
     let getDay = d.getDate()
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
     let monthName = monthNames[d.getMonth()]
      return "Deadline: " + getTime +", " + getDay +" "+ monthName;

    },

    submitForm() {
      // console.log(this.formData.task_date + 'chek ')
      if (this.formData.task_date == null){
        alert("Select Date First")
      }else {
        var formatedDate = new Date(this.formData.task_date);
        this.formData.task_date = formatedDate
        // console.log(formatedDate);
        this.apiService.post('api/createtask', this.formData).then(res => {
          if (res.data._metadata.outcome ==="FAILED"){
            alert(res.data._metadata.message)
          }

          this.getToDoList()
        });
      }

    },
    getToDoList() {
      this.axios.get("api/gettodolist").then(result => {
        this.toDoList = result.data.records.data;
      });
    }
  },
  created() {
    this.getToDoList()
  }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
::selection{
  color: #ffff;
  background: rgb(142, 73, 232);
}
body{
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  padding: 10px;
  background: linear-gradient(to bottom, #68EACC 0%, #497BE8 100%);
}
.wrapper{
  background: #fff;
  max-width: 1000px;
  width: 100%;
  margin: 120px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper header{
  font-size: 30px;
  font-weight: 600;
}
.wrapper .inputField{
  margin: 20px 0;
  width: 100%;
  display: flex;
  height: 45px;
}
.inputField input{
  width: 85%;
  height: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 17px;
  padding-left: 15px;
  transition: all 0.3s ease;
}
.inputField input:focus{
  border-color: #8E49E8;
}
.inputField button{
  width: 50px;
  height: 100%;
  border: none;
  color: #fff;
  margin-left: 5px;
  font-size: 21px;
  outline: none;
  background: #8E49E8;
  cursor: pointer;
  border-radius: 3px;
  opacity: 0.6;
  pointer-events: none;
  transition: all 0.3s ease;
}
.inputField button:hover,
.footer button:hover{
  background: #721ce3;
}
.inputField button.active{
  opacity: 1;
  pointer-events: auto;
}
.wrapper .todoList{
  max-height: 250px;
  overflow-y: auto;
}
.todoList li{
  position: relative;
  list-style: none;
  height: 45px;
  line-height: 45px;
  margin-bottom: 8px;
  background: #f2f2f2;
  border-radius: 3px;
  padding: 0 15px;
  cursor: default;
  overflow: hidden;
}
.todoList li .icon{
  position: absolute;
  right: -45px;
  background: #e74c3c;
  width: 45px;
  text-align: center;
  color: #fff;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.todoList li:hover .icon{
  right: 0px;
}
.wrapper .footer{
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}
.footer button{
  padding: 6px 10px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  margin-left: 5px;
  background: #8E49E8;
  cursor: pointer;
  user-select: none;
  opacity: 0.6;
  pointer-events: none;
  transition: all 0.3s ease;
}
.footer button.active{
  opacity: 1;
  pointer-events: auto;
}
</style>
