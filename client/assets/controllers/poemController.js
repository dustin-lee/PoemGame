
myApp.controller('poemController', ['poemFactory', '$location', '$routeParams', poemController]);

function poemController(poemFactory, $location, $routeParams){
  var _this = this;

  function showpoem(data){
    poemFactory.show(data._id, function(data){
      this.Poem=data;
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        $location.path('/codepoem/'+data._id);
      }
    })
  }

//newly added to show poems from database to list.html
  var shownewpoem = function(){
    console.log('in shownewpoem')
    poemFactory.shownew(function(data){
      console.log('in the shownew controller function')
      _this.newpoem=data;
      console.log(this.newpoem)
      console.log('getting the newpoems')
    })
  }
  shownewpoem();


  this.addpoem = function(){
    poemFactory.addpoem(this.poem, function(data) {
      console.log('adding')
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        console.log('adding poem')
        showpoem(data);
      }
    })
  }

  this.addnewpoem = function(){
    poemFactory.addnewpoem(this.newpoem, function(data) {
      console.log('adding new poem')
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        console.log('adding a new poem')
        showpoem(data);
      }
    })
  }

}
