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
        },
        // 打开新窗口
        openWindow(url) {
            window.open(url)
        },
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
        <div class="link-container" v-for="(link,i) in favouriteLinks" :key="'link_type_' + i">
            <div class="type-title">{{link.type}}</div>
            <div class="link-type-container">
                <el-tooltip v-for="(_link,i) in link.links" :key="'link_' + i" class="item" effect="dark" :content="_link.title" placement="top">
                    <div class="link-item" @click="openWindow(_link.url)">
                        <img class="icon" :src="_link.icon ? _link.icon : (_link.url + 'favicon.ico')">
                        <div class="link-title">{{_link.title}}</div>
                    </div>
                </el-tooltip>
            </div>
        </div>
    </div>
</div>
`,
})
