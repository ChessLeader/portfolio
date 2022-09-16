<template>
  <form action="" @submit.prevent>
    <div class="my_form">
      <h4>Write my</h4>
    </div>
    <input class="input" type="text" placeholder="Name...">
    <input class="input" type="text" placeholder="Email...">
    <input class="input" type="text" placeholder="Subject...">
    <input class="input" type="text" placeholder="Message..."/>
    <div class="btn">
      <button>Send</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'my-form'
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