<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-number">
				<span class="iconfont banner-icon">&#xe626;
				</span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary @close="handleGallaryClose" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
        </fade-animation>
    </div>
</template>

<script >
    import FadeAnimation from 'common/fade/Fade'
    import CommonGallary from 'common/gallary/Gallary'
    export default {
        name: 'DetailBanner',
        props: {
            sightName: String,
            bannerImg: String,
            gallaryImgs: Array
        },
        components: {
            CommonGallary,
            FadeAnimation
        },
        data () {
            return {
                showGallary: false,
            }
        },
        methods: {
            handleBannerClick() {
                this.showGallary =true
            },
            handleGallaryClose() {
                this.showGallary =false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8 ))
            .banner-title
                font-size: .32rem
                padding: 0 .2rem
                flex: 1
            .banner-number
                line-height: .32rem
                height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>