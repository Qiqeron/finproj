<template>
    <div class="back">
        <div class="todo-group">

            <!--Header-->
            <h1 class="title has-text-centered" >Список дел</h1>

            <form @submit.prevent ="addTodo">
                <div class="field is-grouped add-form form">
                    <div class="control is-expanded">
                        <input
                        class="input is-dark" 
                        type="text" 
                        placeholder="Введите название новой задачи"
                        v-model="newContent" 
                        >
                    </div>
                    <div class="control">
                        <button :disabled="newContent == 0" class="button is-primary">
                            Add
                        </button>
                    </div>
                    
                    
                </div>
            </form>

            <!--List-->
            <div class="listContainer">
                <div class="card mt-5"
                :class="{'has-background-success-light': i.done}"
                v-for="i in cases" :key="i.id">
                    <div class="card-content content">
                        <div class="columns is-vcentered">
                            <div :class="{'has-text-success line-through': i.done}" class="column">
                                {{ i.content }}
                            </div>
                            <div class="column has-text-right is-5">
                                <button @click="toggleCompleted(i)" :class="i.done ? 'is-success': 'is-light'" class="button is-primary">&check;</button>
                                <button @click = "deleteTodo(i)" class="button is-danger">&cross;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
        
</template>

<script >
    import { v4 as uuidv4 } from 'uuid';
    import { ref } from 'vue'

    
    export default{
        name: 'TodoList',
        data() {
            return {
                newContent: "",
                cases: ref([]),
            }
        },
        methods: {
            addTodo() {   
                this.cases.unshift({
                    id: uuidv4(),
                    content: this.newContent,
                    done: false
                })
                this.newContent = ''

                const records = this.cases
                console.log(records);
                localStorage.setItem(`cases`, JSON.stringify(records))

                const records2 = this.cases
                console.log(records);
                localStorage.setItem(`cases`, JSON.stringify(records))
            },
            toggleCompleted(id){
                id.done = !id.done
            },
            deleteTodo(index){
                this.cases.splice(index, 1);
                localStorage.setItem(`cases`, JSON.stringify(this.cases))
            },
            loadRecords(){
                const records = JSON.parse(localStorage.getItem(`cases`))
                if (records) {
                    this.cases = records
                }
            },
        },
        created() {
                this.loadRecords()
            }
    }

    
</script>

<style scoped>
    @import "bulma/css/bulma";
    body{
        margin: 0;
    }
    .back, .back::after, .back::before{
        width: 100%;
        margin: 0;
        background: linear-gradient(90deg, #f598a8, #f6edb2);
        background-size: cover;
        background-repeat: repeat-y;
    }
    h1{
        color:white;
        font-size: 60px;
    }
    .form{
        block-size: 10px;
    }
    .todo-group{
        max-width: 35vw;
        margin: 50px auto;
        margin-bottom: 0;
    }
    .listContainer{
        margin-top: 7vh;
    }
    .line-through{
        text-decoration: line-through;
    }
</style>