Vue.component('tinyChat',{
    data() {
        return{
            // websocket对象
            websocket: null,
            // 输入的消息内容
            messageInput: '',
            // 用户id
            userId: '',
            // 昵称
            nickname: '',
            // 消息列表
            messageList: []
        }
    },
    created() {
        this.setUserId()
        this.initWebsocket()
    },
    methods: {
        // 设置userId
        setUserId() {
            let bigJasonStorage = localStorage.getItem("bigJasonStorage")
            try{
                bigJasonStorage = JSON.parse(bigJasonStorage)
                let userId = bigJasonStorage.userId
                if(!userId) {
                    userId = uuid()
                }
                let nickname = bigJasonStorage.nickname
                if(!nickname) {
                    nickname = userId
                }
                localStorage.setItem("bigJasonStorage",JSON.stringify(bigJasonStorage))
            } catch (ex) {
                console.error(ex)
                let userId = uuid()
                bigJasonStorage = {
                    userId: userId,
                    nickname: userId
                }
                localStorage.setItem("bigJasonStorage",JSON.stringify(bigJasonStorage))
            }
            this.userId = bigJasonStorage.userId
            this.nickname = bigJasonStorage.nickname
        },
        // 初始化websocket
        initWebsocket() {
            this.websocket = new WebSocket(config.websocketUrl + '?userId=' + this.userId)
            this.websocket.onopen = this.handleOpenWebsocket
            this.websocket.onclose = this.handleCloseWebsocket
            this.websocket.onmessage = this.handleReceiveMessage
        },
        // websocket连接成功钩子
        handleOpenWebsocket() {
            console.log('聊天室连接成功')
        },
        // websocket断开钩子
        handleCloseWebsocket() {
            console.log('聊天室已断开，正在重连')
            setTimeout(this.initWebsocket,3000)
        },
        // websocket收到消息
        handleReceiveMessage(e) {
            const message = JSON.parse(e.data.split(` [<a href='http://coolaf.com/tool/chattest'>http://coolaf.com</a>]`)[0])
            message.time = new Date()
            this.messageList.push(message)
            this.$nextTick(() => {
                this.$refs['message-list'].scrollTop = this.$refs['message-list'].scrollHeight
            })
        },
        packageMessage() {
          return JSON.stringify({
              userId: this.userId,
              nickname: this.nickname,
              message: this.messageInput
          })
        },
        // 发送消息
        sendMessage() {
            try {
                this.websocket.send(this.packageMessage())
                this.messageInput = ''
            } catch (ex) {
                console.error(ex)
                this.$message.error('消息发送失败');
            }
        }
    },
    template:
        `
<div class="home">
    <el-card class="box-card">
    <div class="message-list" ref="message-list">
        <div class="message-item" v-for="(msg,i) in messageList" :key="'msg_' + i">
            <div :class="['message-item-inner', msg.userId === userId ? 'message-send' : 'message-receive']">
                <div class="message-header">
                    <div class="message-nickname">{{msg.nickname}}</div>
                    <div class="message-time">
                    {{new Date().Format('yyyy年MM月dd日 HH:mm:ss')}}
                    </div>
                </div>
                <div class="message-content">
                    {{msg.message}}
                </div>
            </div>
        </div>
    </div>
    <div style="width: 50%;margin-bottom: 20px">
        <el-input size="mini" v-model="nickname">
            <template slot="prepend">
                <span style="padding: 10px">昵称</span>
            </template>
        </el-input>
        <el-link type="primary" href="https://110.40.159.23:8080/" target="_blank">如无法连接聊天室，点击此处并继续访问后回到此页面</el-link>
    </div>
    <el-input
      resize="none"
      type="textarea"
      :rows="5"
      maxlength="2000"
      @keyup.enter.native="sendMessage"
      v-model="messageInput">
    </el-input>
    <div style="margin-top: 10px;overflow: hidden">
        <el-button plain style="float: right" size="mini" type="primary" @click="sendMessage" :disabled="!messageInput">发送</el-button>
    </div>
    </el-card>
</div>
`,
})
