myApp.controller('showController', ['poemFactory', '$location', '$routeParams', showController]);

function showController(poemFactory, $location, $routeParams){
  var _this = this;


  function showpoem(){
    console.log('in the function showpoem client side')
    poemFactory.getpoem($routeParams.id, function(data){
      _this.Poem=data;
    })
  }
  this.Poem = {};
  this.poems = {};
  showpoem();

  this.newSavedPoem = function(){
    poemFactory.newSavedPoem(this.savedpoem, function(data) {
      console.log('adding')
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        console.log('adding poem')
        newSavedPoem(data);
      }
    })
  }

}
