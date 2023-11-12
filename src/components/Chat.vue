<template>
  <div class="kostyl">
    <div class="backg">
    <div class="contain">
        <div v-if="username">
          <h2 class="title is-size-1">Чат</h2>
          <div class="chat message">
            <div style="border: 1px inset rgba(11, 11, 11, 0.3); 
            width: 20vw;
            border-radius: 10px;
            margin-top: 10px;
            " 
            class="text" v-for="message in messages" 
            :key="message.id">
             <span class="uname is-size-4 has-text-danger">{{ message.user }}:</span> <span class="msg">{{ message.text }}</span> 
            </div>
            <div v-show="emptyMsg" class="empty is-size-5">Текущих сообщений нет</div>
          </div>
          <div class="conti columns is-vcentered">
            <input @keyup.enter="sendMessage" class="chati input" placeholder="Введите новое сообщение" v-model="newMessage"/>
            <button class="button is-primary" @click="sendMessage">&check;</button>
            <button class="button is-danger" @click="delMessage">&cross;</button>
          </div>   
        </div>
        <div v-else>
          <h4 >Сначала пройдите авторизацию</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      messages: [],
      newMessage: '',
      emptyMsg: true,
      username: localStorage.getItem('username')
    }
  },
  computed(){
    localStorage.setItem('username', this.$route.query.username)
  },
  methods: {
    sendMessage(){
      if (!this.username) {
        this.username = 'Гость'
      }
      if (this.newMessage !== '') {
        this.emptyMsg = false
        console.log(this.newMessage);

        this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.username})
        this.saveChatRecords()
        this.newMessage = ""
      } else {
        alert("Введите сообщение")
      }
    },
    
    saveChatRecords(){
      const records = this.messages
      console.log(records);
      localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
    },
    delMessage(){
      this.messages = []
      localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.message))
      this.emptyMsg = true;
    },
    
    loadChatRecords(){
      const records = JSON.parse(localStorage.getItem(`messages_${this.username}`))
      if (records) {
        this.messages = records,
        this.emptyMsg = false
      }
    }
  },
  created() {
    this.loadChatRecords()
  }
}
</script>

<style scoped>
  body{
    margin: 0;
  }
  .kostyl, .kostyl::after, .kostyl::before{
    width: 100%;
    margin: 0;
    background: linear-gradient(90deg, #f598a8, #f6edb2);
    background-size: cover;
    background-repeat: repeat-y;
  }
  .backg, .backg::after, .backg::before{
    width: 100%;
    
  }
  .contain{
    width: 30vw;
    margin: 0 auto;
    margin-top: 5vh;
    text-align: center;
    
  }
  .chat{
    min-height: 50vh;
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .conti{
    padding-bottom: 25vh;
  }
</style>