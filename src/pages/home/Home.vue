<template>
    <div>
        <home-header ></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconsList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>

    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data () {
            return {
                swiperList: [],
                iconsList: [],
                recommendList: [],
                weekendList: [],
                lastCity: ''
            }
        },
        computed: {
            ...mapState(['city'])
        },
        methods: {
            getHomeInfo () {
                axios.get('/static/mock/index.json?city=' + this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconsList = data.iconsList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList

                }
            }
        },
        mounted () {
            this.lastCity = this.city
            this.getHomeInfo()

        },
        activated () {
            if (this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo()
            }


        }
    }
</script>

<style>

</style>