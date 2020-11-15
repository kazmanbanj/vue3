const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        addNumber(num) {
            this.result = this.result + num
        }
    },
    watch: {
        result(value) {
            if (value > 37) {
                const that = this;
                setTimeout(function() {
                    that.result = 0
                }, 5000)
            }
        }
    },
    computed: {
        compResult() {
            if (this.result < 37) {
                return 'not there yet';
            }
            else if (this.result > 37) {
                return 'too much!';
            }
            else {
                return 37
            }
        }
    }
})

app.mount('#assignment')