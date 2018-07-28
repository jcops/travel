<template>
    <div class="">
        <detail-banner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script >
    import axios from 'axios'
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                sightName: '',
                bannerImg:  '',
                gallaryImgs: [],
                list: []
            }
        },
        methods: {
            getDatailInfo() {
                axios.get('/static/mock/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    console.log(data)
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            }
        },
        mounted () {
            this.getDatailInfo()
        },

    }
</script>

<style lang="stylus" scoped>
    .content
        height: .100rem
</style>