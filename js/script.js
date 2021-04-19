function initVue() {
    new Vue({
        el: '#app',
        data: {
          movies:[],
          searchInput:'',

          series:[],

        },

        methods:{
          send: function(){
           //console.log(this.searchMovie);

           axios.get('https://api.themoviedb.org/3/search/movie' ,{

             params: {
               'api_key': '240c7ea35ff41488d7c3cc3a869f8ccc',
               'query':this.searchInput

             }
           })

           .then(data => {
             //console.log(data.data.results);
             //console.log(data.data.results[0].original_title);

             const results = data.data.results;
             this.movies = results;
             //console.log(this.movies);
             
           })
           .catch(() => console.log('error'));
         },



        //serie tv
         sendSeries: function(){
          //console.log(this.searchseries);

          axios.get('https://api.themoviedb.org/3/search/tv' ,{

            params: {
              'api_key': '240c7ea35ff41488d7c3cc3a869f8ccc',
              'query':this.searchInput


            }
          })

          .then(data => {
            console.log(data.data.results);
            //console.log(data.data.results[0].original_title);

            const resultseries = data.data.results;
            this.series = resultseries;
            console.log(this.series);

          })
          .catch(() => console.log('error'));
         }

        }


    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
