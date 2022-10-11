<template>
  <div class="contacts_wrapper">
    <div class="container">
      <div id="observerMap" ref="observer"></div>
      <div id="contacts" class="contacts">
        <div class="about_form">
          <div class="about_me" data-aos-once="true" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <h4>About me</h4>
              <p>workable</p>
              <p>purposeful</p>
              <p>stress resistant</p>
              <p>disciplined</p>
              <p>teamwork skills</p>
              <p>skill learns</p>
          </div>
          <div class="my_form" data-aos-once="true" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <my-form/>
          </div>
        </div>
        <div class="map">
          <div class="my_residence" data-aos-once="true" data-aos="fade-down-left" data-aos-duration="2000">
            <h4>Poland, Pomorskie ,Gdynia, 81-649</h4>
          </div>
          <div v-show="showGeolocation" class="geolocation">
            <img src="@/assets/img/geolocation/geo.png">
          </div>
          <div class="map_wrapper">
            <MyMapSvg/>
          </div>

        </div>
      </div>
      <footer data-aos-once="true" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom">
        <p>2022, Andrii Kalinowski</p>
        <p>Personal area</p>
      </footer>
    </div>
  </div>

</template>

<script>
import MyForm from "@/components/UI/MyForm";
import MyMapSvg from "@/assets/animations/svg/MyMapSvg";
import AnimationSVG from "@/assets/animations/svg/classSvg";
export default {
  name: "my-contacts",
  components: {MyForm, MyMapSvg},
  data() {
    return {
      showGeolocation: false
    }
  },
  methods: {
    showMap() {
      let animationSvg = new AnimationSVG()
      animationSvg.run('map', 'anim-map 6s ease forwards')
    }
  },
  mounted() {
    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    let callback = (entries, observer) => {
      if(entries[0].isIntersecting){
        this.showMap()
        setTimeout(() => this.showGeolocation = true, 5000)
      }
    }
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
.container {
  @include container
}
.contacts_wrapper {
  background-color: $backgroundColor;
}
.contacts {
  display: flex;
  justify-content: space-between;
}
.about_me {
  margin-top: 100px;
  margin-bottom: 60px;
  width: 280px;
  box-shadow: 2px 2px 2px 2px gray;
  text-align: center;
}
.about_me_content {
  margin-bottom: 70px;
}
.about_me h4 {
  display: inline-block;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: $fontSize*4;
}
.about_me p {
  padding-bottom: 30px;
  line-height: 2;
  font-size: $fontSize*3;
}
.about_me p+p {
  padding-bottom: 30px;
}
.my_residence {
  margin-top: 150px;
  text-align: center;
}
.my_residence h4 {
  font-size: $fontSize*4;
  font-weight: 700;
  }
.map {
  position: relative;
  width: 1000px;
  }
.map_wrapper {
  margin-top: 180px;
}
.geolocation {
  position: absolute;
  left: 51%;
  top: 430px;
  width: 20px;
}
.geolocation img {
  width: 100%;
  height: auto;
}
footer {
  width: 100%;
  margin: 20px;
  box-shadow: 2px 2px 2px grey;
  display: flex;
  justify-content: center;
  column-gap: 60px;
  font-weight: 700;
}
@media  screen and (max-width: 1270px){
  .container {
    padding-left: 30px;
  }
  .about_me, .my_form {
    width: 250px;
  }
}
@media  screen and (max-width: 1200px) {
  .geolocation {
  position: absolute;
  left: 52%;
  top: 415px;
  width: 20px;
}
}
 @media  screen and (max-width: 1160px) {
  .geolocation {
  position: absolute;
  left: 52%;
  top: 405px;
  width: 20px;
  }
}
 @media  screen and (max-width: 1130px) {
  .geolocation {
  position: absolute;
  left: 52.5%;
  top: 405px;
  width: 20px;
  }
 }
 @media  screen and (max-width: 1075px) {
  .geolocation {
  position: absolute;
  left: 53%;
  top: 400px;
  width: 20px;
  }
 }
 @media  screen and (max-width: 1050px) {
  .geolocation {
  position: absolute;
  left: 54%;
  top: 395px;
  width: 20px;
  }
 }

@media  screen and (max-width: 1000px){
  .geolocation {
    display: none;
  }
  .about_me h4, .my_residence h4 {
    font-size: $fontSize*3;
    margin-left: 30px;
  }
  .contacts {
    display: flex;
    flex-direction: column;
  }
  .about_form {
    display: flex;
    justify-content: center;
    column-gap: 50px;
  }
  .about_me p {
    padding-bottom: 20px;
    line-height: 1.5;
    font-size: $fontSize*2.5;
  }
  .about_me p+p {
    padding-bottom: 20px;
  }
  .map_wrapper {
    display: none;
  }
  .map {
    width: 100%;
  }
  .my_form {
    margin-right: 30px;
    margin-top: 80px;
  }
  .my_residence {
    margin: 50px auto 40px auto;
  }
}
@media screen and (max-width: 850px){
  .my_residence h4 {
    font-size: $fontSize*3;
    font-weight: 700;
    margin-left: auto;
    margin-right: auto;
  }
  .map {
    width: 100%;
  }
}
@media screen and (max-width: 570px) {
  .about_form {
    display: flex;
    flex-direction: column;
  }
  .about_me {
    margin: 40px auto 40px auto;
  }
  .my_form {
    margin: 0px auto 40px auto;
  }
  .my_residence h4 {
    font-size: $fontSize*2.5;
    font-weight: 700;
    margin-left: 30px;
  }
  .map {
    width: 100%;
  }
}
</style>