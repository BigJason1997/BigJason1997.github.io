// 配置信息
const config = {
    title: '大森的主页',
    nickname: '大森',
    favouriteLinks: [
        {
            type: '常用网站',
            links: [
                {
                    title: '百度翻译',
                    url: 'https://fanyi.baidu.com/',
                },
                {
                    title: '必应',
                    url: 'https://cn.bing.com/',
                },
                {
                    title: 'QQ邮箱',
                    url: 'https://mail.qq.com/',
                },
                {
                    title: '哔哩哔哩',
                    url: 'https://www.bilibili.com/',
                },
                {
                    title: '阿里云',
                    url: 'https://www.aliyun.com/',
                },
                {
                    title: '腾讯云',
                    url: 'https://cloud.tencent.com//',
                },
            ],
        },
        {
            type: '素材查询',
            links: [
                {
                    title: '阿里iconfont',
                    url: 'https://www.iconfont.cn/',
                    icon: 'https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico',
                },
                {
                    title: '图标库iconPark',
                    url: 'https://iconpark.oceanengine.com/',
                    icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
                },
                {
                    title: '千库网',
                    url: 'https://588ku.com/',
                },
                {
                    title: '爱给网',
                    url: 'https://www.aigei.com/',
                },
                {
                    title: '高清图片pixabay',
                    url: 'https://pixabay.com/',
                },
            ],
        },
        {
            type: '资源查询',
            links: [
                {
                    title: 'Maven仓库',
                    url: 'https://mvnrepository.com/',
                    icon: 'https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico',
                },
                {
                    title: '阿里镜像',
                    url: 'https://developer.aliyun.com/mirror/',
                },
                {
                    title: 'MSDN',
                    url: 'https://msdn.itellyou.cn/',
                },
                {
                    title: 'chrome插件下载',
                    url: 'http://cd.cduukj.com/',
                },
                {
                    title: '哔哩哔哩视频下载',
                    url: 'https://xbeibeix.com/api/bilibili/',
                },
                {
                    title: '电影天堂',
                    url: 'https://www.dygod.net/',
                },
                {
                    title: '茶杯狐（看电视剧）',
                    url: 'https://cupfox.app/',
                    icon: 'https://p0.meituan.net/dpgroup/cd088044f183d2719f3f9fe56d5c34204207.png',
                },
                {
                    title: '油猴脚本',
                    url: 'https://greasyfork.org/zh-CN',
                    icon: 'https://greasyfork.org/packs/media/images/blacklogo16-5421a97c75656cecbe2befcec0778a96.png',
                },
            ],
        },
        {
            type: '实用工具',
            links: [
                {
                    title: '程序员工具',
                    url: 'https://tool.p2hp.com/',
                    icon: 'https://tool.p2hp.com/tools/images/icon.png',
                },
                {
                    title: '在线PS',
                    url: 'https://www.uupoop.com/',
                },
                {
                    title: '图片格式转换',
                    url: 'https://www.aconvert.com/cn/icon/png-to-ico/',
                },
                {
                    title: 'cron表达式生成器',
                    url: 'https://cron.qqe2.com/',
                },
                {
                    title: '文字图案生成器',
                    url: 'https://www.degraeve.com/img2txt.php',
                },
            ],
        },
        {
            type: '开发社区',
            links: [
                {
                    title: '码云Gitee',
                    url: 'https://gitee.com/',
                },
                {
                    title: 'Github',
                    url: 'https://github.com/',
                },
                {
                    title: 'springcloud',
                    url: 'https://spring.io/projects/spring-cloud',
                    icon: 'https://spring.io/images/favicon-9d25009f65637a49ac8d91eb1cf7b75e.ico',
                },
                {
                    title: 'springcloud版本选型',
                    url: 'https://start.spring.io/actuator/info',
                    icon: 'https://spring.io/images/favicon-9d25009f65637a49ac8d91eb1cf7b75e.ico',
                },
                {
                    title: 'CSDN',
                    url: 'https://blog.csdn.net/',
                },
                {
                    title: 'Vue',
                    url: 'https://cn.vuejs.org/v2/guide/',
                    icon: 'https://cn.vuejs.org/images/logo.svg',
                },
                {
                    title: 'ShardingJDBC',
                    url: 'https://shardingsphere.apache.org/document/current/cn/overview/',
                    icon: 'https://shardingsphere.apache.org/document/current/img/favicon.png',
                },
                {
                    title: '若依官网',
                    url: 'http://www.ruoyi.vip/',
                    icon: 'http://www.ruoyi.vip/images/favicon.ico',
                },
                {
                    title: 'ElementUI',
                    url: 'https://element.eleme.cn/#/zh-CN/component/installation',
                    icon: 'https://element.eleme.cn/favicon.ico',
                },
                {
                    title: 'vxe-table',
                    url: 'https://vxetable.cn/v3/#/table/start/install',
                },
                {
                    title: 'ElasticSearch',
                    url: 'https://www.elastic.co/cn/',
                },
                {
                    title: 'ElectronJS',
                    url: 'https://www.electronjs.org/',
                    icon: 'https://www.electronjs.org/images/favicon.b7a59262df48d6563400baf5671da548.ico',
                },
                {
                    title: 'Vue CLI Plugin Electron Builder',
                    url: 'https://nklayman.github.io/vue-cli-plugin-electron-builder/',
                    icon: 'https://nklayman.github.io/vue-cli-plugin-electron-builder/favicon.ico',
                },
            ],
        },
        {
            type: '控制面板',
            links: [
                {
                    title: '宝塔Linux（腾讯云）',
                    url: 'http://www.tzy.cool:8888/tencentcloud/',
                },
                {
                    title: '宝塔Linux（雷神 - 虚拟机）',
                    url: 'http://192.168.1.150:8888/auth_login/',
                },
                {
                    title: '宝塔Windows（腾讯云 - 梅老板）',
                    url: 'http://meiko.tzy.cool:8888/aI3avzfc/',
                },
            ],
        },
    ],
    websocketUrl: 'wss://meiko.tzy.cool:8080/websocket',
};
