<template>
  <div class="portfolio">
    <div class="container">
      <div class="skills_projects_wrapper">
        <div class="skills" data-aos="fade-right" data-aos-duration="1500">
          <h3>My skills</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Node.js</p>
          <p>MySQL</p>
          <p>Vue.js</p>
          <p>Vuex</p>
          <p>Vuetify</p>
          <p>Angular</p>
          <p>NestJs</p>
          <p>JQuery</p>
          <p>SCSS</p>
          <p>Axios</p>
        </div>
        <div class="projects">
          <h3 data-aos="fade-left" data-aos-duration="1500">My projects</h3>
          <div class="my_projects">
            <div class="my_projects_item my_projects_item_first" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">
              <div class="mask">
                <h4>Shopping cart</h4>
                <p>Technologies used Vue 3 and Vuex</p>
                <a href="#" class="info">See code</a>
              </div>
            </div>
            <div class="my_projects_item my_projects_item_first" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">
              <div class="mask">
                <h4>Shopping cart</h4>
                <p>Technologies used Vue 3 and Vuex</p>
                <a href="#" class="info">See code</a>
              </div>
            </div>
            <div class="my_projects_item my_projects_item_first" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">
              <img src="@/assets/img/projects/shop.png">
              <div class="mask">
                <h4>Shopping cart</h4>
                <p>Technologies used Vue 3 and Vuex</p>
                <a href="#" class="info">See code</a>
              </div>
            </div>
            <div class="my_projects_item my_projects_item_first" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">
              <img src="@/assets/img/projects/portfolio.png">
              <div class="mask">
                <h4>Portfolio</h4>
                <p>Technologies used Vue 3 and Vuex</p>
                <a href="#" class="info">See code</a>
              </div>
            </div>
            <div class="my_projects_item my_projects_item_first" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">
              <div class="mask">
                <h4>Shopping cart</h4>
                <p>Technologies used Vue 3 and Vuex</p>
                <a href="#" class="info">See code</a>
              </div>
            </div>
            <div class="my_projects_item my_projects_item_first" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="3000">
              <img src="@/assets/img/projects/adaptive.png">
              <div class="mask">
                <h4>Adaptive design</h4>
                <p>Website page adapted to different screen widths</p>
                <a href="#" class="info">See code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-portfolio'
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
.portfolio {
  background-color: $backgroundColor;
  margin-bottom: 70px;
}
.container {
  @include container
}
.skills_projects_wrapper {
  display: flex;
  justify-content: space-between;
}
.skills {
  width: 300px;
  margin: 150px 0 100px 5px;
  //box-shadow: 2px 2px 2px grey;
  text-align: center;
}
h3 {
  font-size: $fontSize*4.5;
  font-weight: 700;
  margin-bottom: 80px;
}
.skills p {
  font-size: $fontSize*3;
  font-weight: 600;
  line-height: 2;
}
.projects {
  max-width: 900px;
  margin-top: 150px;
  text-align: center;
}
.my_projects {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.my_projects_item {
  width: 270px;
  height: 270px;
  box-shadow: 2px 2px 2px 2px grey;
  margin: 15px;

  overflow: hidden;
  position: relative;
  text-align: center;
}
                                      //animation projects card

.my_projects_item .mask {
  background-color: black;
  width: 270px;
  height: 200px;
  position: absolute;
  overflow: hidden;
  top: 35px;
  left: 0;
}

.my_projects_item h4 {
  color: #F1F1F1;
  font-size: $fontSize*2.5;
  padding-top: 20px;
  position: relative;
}
.my_projects_item p {
  padding: 20px 5px 0 5px;
  position: relative;
  color: #F1F1F1;
}
.my_projects_item a.info {
  display: inline-block;
  padding-top: 30px;
  color: #F1F1F1;
}

.my_projects_item img {
  display: block;
  position: relative;
}
.my_projects_item_first img {
  transition: all .2s linear;
  width: 270px;
  height: 270px;
}
.my_projects_item_first .mask {
  opacity: 0;
  transition: all .4s ease-in-out;
}
.my_projects_item_first h2 {
  transform: translateY(-100%);
  transition: all .2s ease-in-out;
}
.my_projects_item_first p {
  transform: translateY(100px);
  opacity: 0;
  transition: all .2s linear;
}
.my_projects_item_first a.info {
  opacity: 0;
  transition: all .2s ease-in-out;
}
.my_projects_item:hover img {
  transform: scale(1.1);
}
.my_projects_item:hover .mask {
  opacity: .9;
}
.my_projects_item:hover h2,
.my_projects_item:hover p,
.my_projects_item:hover a.info {
  opacity: 1;
  transform: translateY(0);
}
.my_projects_item:hover p {
  transition-delay: .2s;
}
.my_projects_item:hover a.info {
  transition-delay: 1s;
}
@media screen and (max-width: 1100px) {
  h3 {
    font-size: $fontSize*3.5;
    font-weight: 700;
    margin-bottom: 60px;
  }
  .skills, .projects {
    margin-top: 80px;
  }
  .skills p {
    font-size: $fontSize*2;
    font-weight: 600;
    line-height: 1.5;
  }
}
@media screen and (max-width: 390px){
  .skills_projects_wrapper {
    display: flex;
    flex-direction: column;
  }
  .skills {
    margin-bottom: 40px;
  }
  .projects {
    margin-top: 40px;
  }
  .my_projects {
    justify-content: center;
  }
}
</style>