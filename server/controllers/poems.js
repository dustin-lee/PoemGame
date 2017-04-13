console.log('in the poems.js')
var mongoose = require('mongoose');
var Poem = mongoose.model('Poem');
var newPoem = mongoose.model('savedPoem')

function poemsController(){
  this.index = function(req,res){
    Poem.find({}, function(err, poems) {
      res.json(poems);
    })
  };

this.create = function(req,res){
  Poem.create(req.body, function(err, result) {
    if(err) {
      console.log('There were validation errors', err);
      res.json(err);
    } else {
      console.log(result);
      console.log('successfully added a poem!');
   res.json(result);
 }
})
}

this.createnew = function(req,res){
  console.log('in server createnew')
  newPoem.create(req.body, function(err, result) {
    if(err) {
      console.log('There were validation errors', err);
      res.json(err);
    } else {
      console.log(result);
      console.log('successfully added a new poem!');
      res.json(result);
 }
})
}

this.show = function(req,res){
  Poem.findOne({_id: req.params.id}, function(err, poem) {
    if(err) {
    console.log('wrong id');
    } else {
      console.log(poem);
      res.json(poem);
}
})
}
this.getpoem = function(req,res){
  Poem.findOne({_id: req.params.id}, function(err, poem) {
    if(err) {
    console.log('wrong id');
    } else {
      console.log(poem);
      res.json(poem);
}
})
}

//newly added to show poems from database to list.html
this.shownew = function(req,res) {
  newPoem.find({}, function(err,newpoems) {
    console.log('in the server shownew')
    if(err) {
      console.log('did not get newpoem')
    } else {
      console.log('it is going back to factory shownew')
      console.log(newpoems)
      res.json(newpoems);
  }
  })
}

};

module.exports = new poemsController(); // what does this export?
