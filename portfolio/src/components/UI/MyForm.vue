<template>
  <form action="" @submit.prevent>
    <div class="my_form">
      <h4>Write my</h4>
    </div>
    <input class="input" v-model="name" type="text" placeholder="Name...">
    <input class="input" v-model="surname" type="text" placeholder="Surname...">
    <input class="input" v-model="email" type="email" placeholder="Email...">
    <input class="input" v-model="text" type="text" placeholder="Message..."/>
    <div class="btn">
      <button @click="createMessage" type="submit">Send</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'my-form',
  data() {
    return {
        messages: [],
        name: '',
        surname: '',
        email: '',
        text: ''
    }
  },
  methods: {
    async getMessages() {
      try {
        const response = await axios.get('http://localhost:80/messages')
        this.messages = response.data
      } catch (err) {
        console.log(err)
      }
    },
    async createMessage() {
      try {
        await axios.post('http://localhost:80/messages', {
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
  font-size: $fontSize*2.5;
  font-weight: 700;
  margin: 0 auto 50px auto;
  width: 100px;
  border: 1px solid black;
  padding: 10px 15px;
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