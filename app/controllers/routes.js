var Movie = require('../models/Movie');

module.exports = {
  configure: function(app) {
    app.get('/movie',function(req,res) {
      Movie.getSearchMovie(req,res)
    });
  }
};
