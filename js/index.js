const vm = new Vue({
    el: '#app',
    data(){
        return {
            // 昵称
            nickname: config.nickname,
            // 菜单索引
            menuIndex: "home"
        }
    },
    mounted() {
       this.initConfig()
    },
    methods: {
        // 初始化配置文件
        initConfig() {
            document.title = config.title
        },
        // 选择菜单
        handleSelectMenu(key) {
            this.menuIndex = key
        }
    }
})
