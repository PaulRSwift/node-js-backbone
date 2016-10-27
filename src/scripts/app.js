
var Backbone = require('Backbone')
var $ = require('jquery')


var UserCollection = require('./models-collection.js')
var ViewTemplateConstructor = require('./tempConstr.js')
var cardsTemplateFn = require('./cardTemp.js')

var AppRouter = Backbone.Router.extend({
   routes: {
      "nationality/:nat/gender:/gender" : "showNatandGenProfiles",
      "gender/:gender" : "showGenderProfile",
      "nationality/:nat" : "showNatProfile",
      "": "showHomePage"
   },

showHomePage: function (){
   // document.querySelector('#app-container').innerHTML = "home page"

   var coll = new UserCollection("results=24")

   coll.fetch().then(function(){
      var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
      view.render(coll)
   })
},

showNatProfile: function(natLoca){
   var coll = new UserCollection("results=24&nat=" + natLoca)

   coll.fetch().then(function(){
      console.log(coll)
      var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
      view.render(coll)
   })

},

showGenderProfile: function(shim){

   var coll = new UserCollection("results=24&gender=" + shim)

   coll.fetch().then(function(){
      // console.log(coll)
      var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
      view.render(coll)
   })

},

showNatandGenProfiles: function(shim, natLoca){
   var coll = new UserCollection("results=24&gender=" + shim + "&nat=" + natLoca)
   console.log(coll.url);
   coll.fetch().then(function(){
      console.log(coll)
      var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
      view.render(coll)
   })


},

 initialize : function(){
    Backbone.history.start()
}
})

var app = new AppRouter();
