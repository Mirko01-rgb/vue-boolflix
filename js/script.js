function initVue() {
    new Vue({
        el: '#app',
        data: {
          dischi:[],
          //singe:[],


        },
        mounted() {

            axios.get('https://api.themoviedb.org/3/search/movie',{

              params: {
                'api_key': '240c7ea35ff41488d7c3cc3a869f8ccc',
                'query': 'The matrix'

              }
            })
            .then(data => {
              //console.log(data.data.results[0].original_title);




            })
            .catch(() => console.log('error'));
        }

    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
