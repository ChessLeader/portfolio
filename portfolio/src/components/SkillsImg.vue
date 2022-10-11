<template>
  <div class="container">
    <div class="skills_row">
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/angular.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/css.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/figma.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/gimp.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/git.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/html.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/inkscape.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/jquery.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/js.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/nest.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/node.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/sass.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/vc.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/vue.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/vuetify.png"></div>
      <div class="skills_img" data-aos-once="true" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="bottom"><img src="@/assets/img/skills/ws.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-skills-img'
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
.container {
  @include container
}
.skills_row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 20px;
  margin: 70px 0 70px 0;
}
.skills_img {
  margin: 3px;
  width: 50px;
  height: 50px;
  background-size: 100%;
  filter: drop-shadow(0px 0px  3px black);
}
</style>