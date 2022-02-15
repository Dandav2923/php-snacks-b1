const app = new Vue(
    {
        el: '#app',
        data: {
            cars: [],
        },
        created() {
            axios.get('http://localhost/php-snacks-b1/controller.php')
                .then((results) => {
                    this.cars = results.data.results;
                })
                    .catch((error) => {
                        console.log(error);
                    })
        },
    }
)