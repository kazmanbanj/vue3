const app = Vue.createApp({
    data() {
        return {
           register: '',
           regName: ''
        }
    },
    methods: {
        alertName() {
            alert('This is me');
        },
        confirmInput() {
            this.regName = this.register
        },
        showOutput(event) {
            this.register = event.target.value
        }
    },
})

app.mount('#assignment');