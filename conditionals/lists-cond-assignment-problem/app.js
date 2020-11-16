const app = Vue.createApp({
    data() {
        return {
            inputedValue: '',
            tasks: [],
            taskListIsVisible: true
        }
    },
    computed: {
        buttonCaption() {
            return this.taskListIsVisible ? 'Hide' : 'Show'; 
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputedValue)
        },
        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
})

app.mount('#assignment')