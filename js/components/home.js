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
        // 获取图标地址
        getFavicon(link) {
            let domain = link.url.split('/'); //以“/”进行分割
            if( domain[2] ) {
                domain = domain[0] + '//' + domain[2];
            } else {
                domain = ''; //如果url不正确就取空
            }
            return domain + '/favicon.ico'
        }
    },
    template:
`
<div class="home">
    <el-row>
        <el-col :span="11">
            <el-input v-model="baiduKeyword" @keyup.enter.native="searchBaidu">
                <template slot="prepend">
                    <img class="search-logo" src="../../assets/images/icons/baidu.png"/>
                </template>
                <el-button type="primary" slot="append" icon="el-icon-search" @click="searchBaidu"></el-button>
            </el-input>
        </el-col>
        <el-col :offset="2" :span="11">
            <el-input v-model="googleKeyword" @keyup.enter.native="searchGoogle">
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
                        <img class="icon" :src="_link.icon ? _link.icon : getFavicon(_link)" onerror="this.src='../../assets/images/icons/default_icon.png'">
                        <div class="link-title">{{_link.title}}</div>
                    </div>
                </el-tooltip>
            </div>
        </div>
    </div>
</div>
`,
})
