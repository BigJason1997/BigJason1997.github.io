Vue.component('home',{
    data() {
        return{
            // 百度搜索关键字
            baiduKeyword:'',
            // 谷歌搜索关键字
            googleKeyword:'',
            // 常用站点
            favouriteLinks: config.favouriteLinks
        }
    },
    methods: {
        // 百度搜索
        searchBaidu() {
            window.open("https://www.baidu.com/s?wd=" + this.baiduKeyword)
        },
        // 谷歌搜索
        searchGoogle() {
            window.open("https://www.google.com/search?q=" + this.googleKeyword)
        }
    },
    template:
`
<div class="home">
    <el-row>
        <el-col :span="11">
            <el-input placeholder="请输入内容" v-model="baiduKeyword" @keyup.enter.native="searchBaidu">
                <template slot="prepend">
                    <img class="search-logo" src="../../assets/images/icons/baidu.png"/>
                </template>
                <el-button type="primary" slot="append" icon="el-icon-search" @click="searchBaidu"></el-button>
            </el-input>
        </el-col>
        <el-col :offset="2" :span="11">
            <el-input placeholder="请输入内容" v-model="googleKeyword" @keyup.enter.native="searchGoogle">
                <template slot="prepend">
                    <img class="search-logo" src="../../assets/images/icons/google.png"/>
                </template>
                <el-button type="primary" slot="append" icon="el-icon-search" @click="searchGoogle"></el-button>
            </el-input>
        </el-col>
    </el-row>
    <div class="home-content">
        <div v-for="(link,i) in favouriteLinks" :key="'link_' + i">
            <el-link :href="link.url" :underline="false" type="primary" target="_blank">{{link.title}}</el-link>
        </div>
    </div>
</div>
`,
})
