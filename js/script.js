function initVue() {
    new Vue({
        el: '#app',
        data: {
          movies:[],
          searchInput:'',


          series:[],
          img: 'https://image.tmdb.org/t/p/w342'

        },

        methods:{
          send: function(){
           console.log(this.searchInput);


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
             console.log('Film: ', this.movies);

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
            const resultseries = data.data.results;
            this.series = resultseries;
            console.log( 'Serie tv: ', this.series);

          })
          .catch(() => console.log('error'));
          this.searchInput='';

        },

         vote: function( numVote){
           //console.log(numVote);
           const vote5 = Math.round(numVote/2);
           //console.log(vote5);
           return vote5;


         }

        }


    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
