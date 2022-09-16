<template>
  <my-header/>
  <my-portfolio/>
  <my-skills-img/>
  <my-contacts/>
</template>

<script>
  import MyHeader from "@/components/Header";
  import MyPortfolio from "@/components/Portfolio"
  import MySkillsImg from "@/components/SkillsImg";
  import MyContacts from "@/components/MyContacts";
  export default {
    name: 'app',
    components: {MyHeader, MyPortfolio, MySkillsImg, MyContacts}
  }
</script>

<style>
@import "@/assets/styles/reset.css";
@import "@/assets/fonts/fonts.css";
body {
  font-family: Poppins, sans-serif;
}
</style>