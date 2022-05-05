const vm = new Vue({
    el: '#app',
    data(){
        return {
            nickname: config.nickname
        }
    },
    mounted() {
       this.initConfig()
    },
    methods: {
        // 初始化配置文件
        initConfig() {
            document.title = config.title
        }
    }
})
