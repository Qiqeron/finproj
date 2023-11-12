<template>
    <div class="cont">
        
        <div class="cont2">
            <div class="title">ТЕСТ API</div>
            <div v-if="isLoad">Загрузка данных...</div>
            <div class="imgcont" v-else>
                <img class="title" @click="dogUpdate" alt="Возникла ошибка при получении запроса, обновите страницу" :src="imgDog" >
            </div>
            <button @click="dogUpdate" class="button is-primary">Нажмите, чтобы обновить</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgDog: "",
                isLoad: true
            }
        },
        methods: {
            async dogUpdate() {
                try{
                    const response = await
                fetch("https://dog.ceo/api/breeds/image/random");
                    if(!response.ok){
                        throw new Error ("Ошибка при получении запроса");
                    }
                    const data = await response.json()
                    this.imgDog = data.message
                } catch (error) {
                    console.error(error)
                }
            }
        },
        mounted(){
            fetch("https://dog.ceo/api/breeds/"
                                                +"image/random")
                    .then(response => response.json())
                    .then(data => {
                        this.imgDog = data.message
                        this.isLoad = false;
                    })
        }
    }

    
</script>

<style scoped>
    .cont{
        width: 100%;
        margin: 0 auto;
    }
    .cont2{
        max-width: 35vw;
        text-align: center;
        margin: 0 auto;
    }
    .imgcont{
        min-height: 500px;
    }
    img{
        height: 500px;
        padding: solid white 20px
    }
</style>