<template>
    <div class="home">
        <div class="mt-6" v-if="isAuth">
            <div class="title">Приветствую, <b>{{ username }}</b></div>
            <button @click="logout" class="button is-primary">Выйти из аккаунта</button>
        </div>
        <div class= "homeform mt-6" v-else>
            <label class="title lab">Введите ваше имя:</label>
            <input class="homei input" v-model="username">
            <label class="title lab">Пароль:</label>
            <input class="homei input" v-model="password">
            <button class="button is-primary mt-5" @click="login">Сохранить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                isAuth: false,
                username: "",
                password: ''
            }
            
        },
        created(){
            if(localStorage.getItem("isAuth")){
                this.isAuth = true;
                this.username = localStorage.getItem("username");
            }
        },
        methods: {
            login() {
                if (this.username !== "" & this.password !=="") {
                    console.log(this.username)
                    this.isAuth = true;
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('username', this.username)

                    this.$router.push({
                        name: 'Chat',
                        query: { username: this.username }
                    })

                } else {
                    alert('Поле регистрации нельзя оставлять пустым')
                }
            },

            logout() {
                this.isAuth = false;
                this.username = "";
                localStorage.removeItem("isAuth")
                localStorage.removeItem('username')
            }
        }
    }
</script>

<style scoped>
    .home{
        max-width: 30vw;
        margin: 0 auto;
        text-align: center;
    }
    .homeform{
        display: flex;
        flex-direction: column;
    }
    .lab{
        color: rgba(7, 7, 7, 0.468);
    }
</style>