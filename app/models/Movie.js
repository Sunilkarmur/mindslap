const axios = require('axios');
var connection = require ('../config/connection');

function Movie(){
    this.getSearchMovie = function(req,res) {
        const { search,year } = req.query;
        axios.get('https://www.omdbapi.com/?apikey=4897472c&s='+search+'&page=2')
        .then(function (response) {
            // handle success
            const sources = response.data;
            res.send(sources)
            // if(sources.Response){
            //     res.send({status:true,message:'Get Movie List',data:sources});
            // }else{
            //     res.send({status:false,message:'Get Movie List',data:[]});
            // }
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            // res.send({status:true,message:'Get Movie List',data:JSON.stringify(error)});
        })
        .then(function () {
            // always executed
        })
        
      };
}
module.exports = new Movie();