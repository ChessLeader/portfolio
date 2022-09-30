<template>
    <div class="dialog" v-if = "show" @click="hideDialog" data-aos="zoom-in">
      <div class="dialog_content" @click.stop data-aos="zoom-in">
            <div class="cross" @click="hideDialog">
                <img src="@/assets/img/icons/cross.png" alt="">
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    position: fixed;
    display: flex;
}
.dialog_content {
    position: relative;
    margin: auto;
    background: white;
    border-radius: 12px;
    min-width: 280px;
    min-height: 400px;
    padding: 20px;
    z-index: 10;
    transition: 1s;
}
.cross {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;

}
.cross:hover {
    opacity: .6;
}
</style>