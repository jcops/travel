<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div ref="search" class="search-content" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script >
    import Bscroll from 'better-scroll'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        methods: {
            handleCityClick (city) {
                // this.$store.dispatch('changeCity',city)
                // this.$store.commit('changeCity',city)
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        computed: {
            hasNoData () {
                return !this.list.length
            }
        },
        watch: {
            keyword () {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 ||
                                value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.search)
        }

    }
</script>


<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        background: $bgColor
        padding: 0 .1rem
        .search-input
            width: 100%
            box-sizing: border-box
            height: .62rem
            line-height: .62rem
            padding: 0 .1rem
            text-align: center
            boder-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666

</style>