<template>
  <form action="" @submit.prevent>
    <div class="my_form">
      <h4>Write my</h4>
    </div>
    <input class="input" v-model.trim="name" type="text" placeholder="Name...">
    <input class="input" v-model.trim="surname" type="text" placeholder="Surname...">
    <input class="input" v-model="email" type="email" placeholder="Email...">
    <textarea rows="6" cols="80" class="input" v-model="text" type="text" placeholder="Message..."></textarea>
    <div class="btn">
      <button @click="postAjax" type="submit">Send</button>
    </div>
    <p v-show="showMessage">Thank you for writing to me!<br> I will answer you soon.<br> Regards, Andrii!</p>
  </form>

</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'my-form',
  data() {
    return {
        showMessage: false,
        messages: [],
        name: '',
        surname: '',
        email: '',
        text: ''
    }
  },
  methods: {
    postAjax() {
      $.post(
          'https://146.59.70.220:3000/messages',
          {
            user_name: this.name,
            user_lastname: this.surname,
            user_email: this.email,
            user_text: this.text
          },
          function (data) {
            console.log(data)
          }
      )
    },
    async postMessage() {
      await axios.post('http://localhost:3000/messages', {
        user_name: this.name,
        user_lastname: this.surname,
        user_email: this.email,
        user_text: this.text
      })
          .then((response) => {
            console.log(response)

            this.name = this.surname = this.email = this.text = ''
          })
          .catch((error) => {
            if(error.response) {
              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
            } else if (error.request) {
              console.log(error.request)
            } else {
              console.log('Error', error.message)
            }
          })
    },
    async getMessages() {
      try {
        const response = await axios.get('http://localhost:3000/messages')
        this.messages = response.data
      } catch (err) {
        console.log(err)
      }
    },
    async createMessage() {
      try {
        await axios.post('http://localhost:3000/messages', {
          user_name: this.name,
          user_lastname: this.surname,
          user_email: this.email,
          user_text: this.text
        })
        this.name = ''
        this.surname = ''
        this.email = ''
        this.text = ''
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
form {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.my_form {
  position: relative;
}
h4 {
  font-size: $fontSize*4;
  font-weight: 700;
  margin-bottom: 50px;
}
.input {
  margin-bottom: 40px;
  width: 280px;
  box-shadow: 2px 2px 2px slategrey;
}
.btn {
  position: relative;
  font-size: $fontSize*2.5;
  font-weight: 700;
  margin: 0 auto 50px auto;
  width: 100px;
  border: 1px solid black;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: .5s;
  overflow: hidden;
}
.btn::before, .btn::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: black;
  top: 0;
  left: -100%;
  opacity: .5;
  transition: .4s;
  z-index: -1;
}
.btn::after {
  opacity: 1;
  transition-delay: .2s;
}
.btn:hover {
  color: white;
}
.btn:hover::before, .btn:hover::after {
  left: 0;
}
@media  screen and (max-width: 1270px) {
  .input {
    width: 250px;
  
  }
}
@media screen and (max-width: 1000px){
  .my_form {
    margin-left: 30px;
  }
  h4 {
    font-size: $fontSize*3;
  }
}

</style>