const app = Vue.createApp({
    data() {
        return {
            name: 'Banjoko Kazeem',
            age: 30,
            imageURL: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
        }
    },
    methods: {
        randnum() {
            const randno = Math.random();
            return randno;
        },
    },
})

app.mount('#assignment')