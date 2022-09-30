<template>
  <div class="wrapper">
    <div class="header">
    <div class="container">
      <div class="header_nav">
        <div class="logo" data-aos="flip-left" data-aos-duration="3000">Andrii</div>
        <div class="nav">
          <ul class="nav_list">
            <li class="nav_item"><a href="#">Home</a></li>
            <li class="nav_item"><a href="#projects">Projects</a></li>
            <li class="nav_item"><a href="#contacts">Contacts</a></li>
            <li class="nav_item"><a href="#" @click="showDialog">Write me</a></li>
          </ul>
        </div>
      </div>
      <div class="header_content">
        <div class="header_show_name">
          <my-name-svg/>
          <div class="header_content_quote" >
            <p data-aos="fade-up-right" data-aos-duration="3000" data-aos-delay="2000">The enjoyment of one's tools is an essential ingredient of successful work.</p>
            <h6 data-aos="fade-up-right" data-aos-duration="3000" data-aos-delay="3000">Donald Knuth</h6>
          </div>
        </div>
        <div class="header_img">
          <img src="@/assets/img/header/header.png" data-aos="fade-left" data-aos-offset="200" data-aos-duration="2000"  >
        </div>
      </div>
      <div class="header_social_img">
      </div>
    </div>
  </div>
  <section class="services">
    <div class="container">
      <div class="services_row">
        <div class="service_card"><a target="_blank" href="https://gitlab.com/respectk">
          <img src="@/assets/img/social/gitlab.png" alt="gitlab" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom" data-aos-delay="2300">
          <p data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">Here you can see my projects</p>
        </a></div>
        <div class="service_card"><a target="_blank" href="https://github.com/ChessLeader">
          <img src="@/assets/img/social/github.png" alt="github" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom" data-aos-delay="2300">
          <p data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">Here you can see my projects</p>
        </a></div>
        <div class="service_card"><a target="_blank" href="https://www.linkedin.com/in/andrii-kalinowski-09b637232/">
          <img src="@/assets/img/social/linkedin.png" alt="linkedin" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom" data-aos-delay="2300">
          <p data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">Always ready to chat</p>
        </a></div>
        <div class="service_card"><a href="mailto:andrii.kalinowski@gmail.com">
          <img src="@/assets/img/social/gmail.png" alt="gmail" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom" data-aos-delay="2300">
          <p data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">kalinowskiandrii@gmail.com</p>
        </a></div>
      </div>
    </div>
  </section>
  <my-portfolio id="projects"/>
  <my-skills-img/>
  <my-contacts id="contacts"/>
  </div>
  <my-dialog v-model:show="dialogVisible">
    <my-form></my-form>
  </my-dialog>
</template>

<script>
import MyPortfolio from "@/components/Portfolio"
import MySkillsImg from "@/components/SkillsImg";
import MyContacts from "@/components/MyContacts";
import AnimationSVG from "@/assets/animations/svg/classSvg";
import MyNameSvg from "@/assets/animations/svg/HeaderSvg"
import MyDialog from './UI/MyDialog.vue';
import MyForm from './UI/MyForm.vue';

  export default {
    name: 'my-header',
    components: {MyNameSvg,MyContacts,MyPortfolio,MySkillsImg,MyDialog, MyForm},
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
      myNameShow() {
        let animationSvg = new AnimationSVG()
        animationSvg.run('logo', 'anim-line 4s ease forwards')
      },
      showDialog() {
        this.dialogVisible = true
      }
    },
    mounted() {
      this.myNameShow()
    }
  }
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables";
@import "@/assets/styles/media.css";
.header {
  background-color: $backgroundColor;
}
.container {
  @include container
}
.header_nav {
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
  margin-bottom: 200px;
}
                                             //NAV
.logo {
  position: relative;
  font-size: $fontSize*5;
  font-weight: 700;
}
.logo::after {
  position: absolute;
  right: -18px;
  bottom: 5px;
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: #FDA300;
  border-radius: 50%;
}
.nav_list {
  display: flex;
  font-size: $fontSize*3.5;
  font-weight: 700;
  column-gap: 50px;
}
li a {
  position: relative;
  color: black;

}
li a::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: black;
  transform: scale(0);
  transition: .5s;
}
li a:hover {
  opacity: .8;
}
li a:hover::before {
  transform: scale(1);
}

.mobile_nav {
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 100%;
  padding: 70px 40px 50px 30px;
  background-color: rgba(11,29,38,.8);
}
//HEADER CONTENT
.header_content {
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
}
.header_show_name {
  max-width: 700px;
  padding-top: 30px;
}
.header_img {
  max-width: 500px;
}
.header_content_quote>p {
  padding-right: 100px;
  padding-top: 50px;
  font-size: $fontSize*3;
  font-weight: 500;
}
h6 {
  margin-top: 60px;
  margin-left: 390px;
  font-size: $fontSize*2.5;
  font-weight: 600;
}
                                        //SOCIAL CARD
.services_row {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  text-align: center;
  margin-bottom: 80px;
}
.service_card a img {
  margin-top: 60px;
  width: 70px;
  height: 70px;
}
.service_card a p {
  font-weight: 600;
  margin-top: 30px;
  color: black;
}
@media screen and (max-width: 1240px){
  .container {
    padding: 0 30px 0 30px;
  }
  .logo {
    font-size: $fontSize*4;
  }
  .logo::after{
    width: 8px;
    height: 8px;
    right: -10px;
  }
  .nav_list {
    font-size: $fontSize*3;
    column-gap: 40px;
  }
  .header_content {
    column-gap: 30px;
  }
  .header_show_name {
    max-width: 500px;
  }
}
@media screen and (max-width: 1000px){
  .header_show_name {
    max-width: 400px;
  }
  .header_content_quote>p {
    padding-top: 50px;
    font-size: $fontSize*2.5;
  }
  h6 {
    margin-top: 40px;
    margin-left: 170px;
    font-size: $fontSize*2;
  }
  .services_row {
    column-gap: 30px;
    flex-wrap: wrap;
  }
  .service_card a img {
    margin-top: 40px;
    width: 50px;
    height: 50px;
  }
}
@media  screen and (max-width: 822px){
  .logo {
    font-size: $fontSize*3.5;
  }
  .nav_list {
    font-size: $fontSize*2.5;
    column-gap: 30px;
  }
  .header_show_name {
    max-width: 250px;
  }
  .header_content_quote>p {
    padding-top: 30px;
    font-size: $fontSize*1.8;
  }
  .header_content_quote h6 {
    margin-left: 30px;
  }
  .header_img {
    max-width: 300px;
  }
}
@media screen and (max-width: 610px){
  .logo {
    display: none;
  }
  .header_nav {
    padding-top: 40px;
    margin-bottom: 40px;
  }
  .header_content {
    display: flex;
    flex-direction: column;
  }
  .header_img {
    padding-top: 30px;
    width: 200px;
  }
  .header_content_quote>p {
    font-size: $fontSize*1.8;
    padding-top: 15px;
    margin-bottom: 0;
  }
  .header_content_quote h6 {
    margin-top: 10px;
    margin-left: 30px;
  }
}
@media screen and (max-width: 435px) {
  .nav_list {
    font-size: $fontSize*1.8;
    column-gap: 20px;
  }
}
</style>
