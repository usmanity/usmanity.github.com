webpackJsonp([1],[,,,function(e,t,s){"use strict";var a="7aaaf2cc96ac5f1f0b93e2be9a9b2ead";t.a={apiKey:a,imageUrlBase:"https://image.tmdb.org/t/p/w500/",popularMoviesUrl:"https://api.themoviedb.org/3/discover/movie?api_key="+a,searchUrl:"https://api.themoviedb.org/3/search/movie?api_key="+a+"&page=1&include_adult=false"}},,,,,,,function(e,t,s){function a(e){s(35)}var i=s(1)(s(30),s(46),a,null,null);e.exports=i.exports},,,,,,,,,,,,,,,,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(11),i=s(10),n=s.n(i);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(43),i=s.n(a),n=s(45),r=s.n(n);t.default={name:"app",components:{Popular:i.a,Search:r.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=s(2),n=s.n(i);t.default={name:"movie",props:{info:{required:!0}},data:function(){return{imgUrlBase:a.a.imageUrlBase,showOverlay:!1,overlay:{}}},computed:{fullImgUrl:function(){return this.imgUrlBase+this.info.poster_path},releaseYear:function(){return this.info.release_date.split("-")[0]}},methods:{showOverlayDetails:function(){var e=this;this.showOverlay=!0,n.a.get("https://api.themoviedb.org/3/movie/"+this.info.id+"?api_key="+a.a.apiKey).then(function(t){e.overlay=t.data})},closeOverlay:function(){this.showOverlay=!1}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),i=s.n(a),n=s(42),r=s.n(n),o=s(3);t.default={name:"popular",components:{Movie:r.a},data:function(){return{heading:"Popular movies",movies:[]}},methods:{hasMovies:function(){return this.movies.length>0}},mounted:function(){var e=this;i.a.get(o.a.popularMoviesUrl).then(function(t){e.movies=t.data.results})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=s(2),n=s.n(i);t.default={name:"result",props:{info:{required:!0}},data:function(){return{imgUrlBase:a.a.imageUrlBase,showOverlay:!1,overlay:{}}},computed:{fullImgUrl:function(){return this.imgUrlBase+this.info.poster_path},displayOverlay:function(){return!(!this.showOverlay||!this.overlay)}},methods:{releaseYear:function(){return this.info.release_date.split("-")[0]},closeOverlay:function(){this.showOverlay=!1},showOverlayDetails:function(){var e=this;if(e.showOverlay)return!1;e.showOverlay=!0,n.a.get("https://api.themoviedb.org/3/movie/"+this.info.id+"?api_key="+a.a.apiKey).then(function(t){e.overlay=t.data})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=s(2),n=s.n(i),r=s(44),o=s.n(r);t.default={name:"search",components:{Result:o.a},data:function(){return{query:"",showInstructions:!1,movies:null}},methods:{submitQuery:function(){var e=this;n.a.get(a.a.searchUrl+"&query="+this.query).then(function(t){e.movies=t.data.results},function(e){console.log(e)})},hasResults:function(){return this.movies.length>0}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,s){function a(e){s(37)}var i=s(1)(s(31),s(48),a,"data-v-655a1bd0",null);e.exports=i.exports},function(e,t,s){function a(e){s(36)}var i=s(1)(s(32),s(47),a,"data-v-63de70f9",null);e.exports=i.exports},function(e,t,s){function a(e){s(38)}var i=s(1)(s(33),s(49),a,"data-v-d901b9a6",null);e.exports=i.exports},function(e,t,s){function a(e){s(39)}var i=s(1)(s(34),s(50),a,"data-v-e987f990",null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("popular"),e._v(" "),s("search")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popular"},[s("h1",[e._v(e._s(e.heading))]),e._v(" "),s("hr"),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.hasMovies,expression:"hasMovies"}]},e._l(e.movies,function(e){return s("li",[s("movie",{attrs:{info:e}})],1)})),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.hasMovies,expression:"!hasMovies"}],staticClass:"loader"},[e._v("\n    ...loading\n  ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.info.adult?e._e():s("div",{staticClass:"movie"},[s("a",{attrs:{href:"#"},on:{click:[function(e){e.preventDefault()},e.showOverlayDetails]}},[s("img",{staticClass:"movie-poster",attrs:{src:e.fullImgUrl}})]),e._v(" "),e.showOverlay?s("div",{staticClass:"overlay"},[s("a",{staticClass:"close",on:{click:e.closeOverlay}},[e._v("\n      Done\n    ")]),e._v(" "),s("img",{attrs:{src:e.fullImgUrl}}),e._v(" "),s("div",{staticClass:"details"},[s("div",{staticClass:"title"},[e._v("\n        "+e._s(e.info.title)+"\n      ")]),e._v(" "),s("div",{staticClass:"rating"},[e._v("\n        Average rating: "+e._s(e.overlay.vote_average)+"\n      ")]),e._v(" "),s("div",{staticClass:"release-date"},[e._v("\n        Released on: "+e._s(e.overlay.release_date)+"\n      ")]),e._v(" "),s("div",{staticClass:"overview"},[e._v("\n        "+e._s(e.overlay.overview)+"\n      ")])])]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.info.poster_path?s("div",{staticClass:"result"},[s("img",{staticClass:"result-poster",attrs:{src:e.fullImgUrl}}),e._v(" "),s("div",{staticClass:"details",on:{click:e.showOverlayDetails}},[s("div",{staticClass:"title"},[e._v("\n      "+e._s(e.info.title)+" ("+e._s(e.releaseYear())+")\n    ")]),e._v(" "),s("div",{staticClass:"rating"},[e._v("\n      Average rating: "+e._s(e.info.vote_average)+"\n    ")]),e._v(" "),e.info.overview.length>0?s("div",{staticClass:"overview"},[e._v("\n      "+e._s(e.info.overview)+"\n    ")]):s("div",{staticClass:"no-overview"},[e._v("\n      No overview available for this title 😭\n    ")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.displayOverlay,expression:"displayOverlay"}],staticClass:"overlay"},[s("a",{staticClass:"close",on:{click:e.closeOverlay}},[e._v("\n      Done\n    ")]),e._v(" "),s("img",{attrs:{src:e.fullImgUrl}}),e._v(" "),s("div",{staticClass:"details"},[s("div",{staticClass:"title"},[e._v("\n        "+e._s(e.info.title)+"\n      ")]),e._v(" "),s("div",{staticClass:"rating"},[e._v("\n        Average rating: "+e._s(e.overlay.vote_average)+"\n      ")]),e._v(" "),s("div",{staticClass:"release-date"},[e._v("\n        Released on: "+e._s(e.overlay.release_date)+"\n      ")]),e._v(" "),s("div",{staticClass:"synopsis"},[e._v("\n        "+e._s(e.overlay.overview)+"\n      ")])])])]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-input",attrs:{type:"text",name:"search",value:"",placeholder:"Find a movie..."},domProps:{value:e.query},on:{focus:function(t){e.showInstructions=!0},blur:function(t){e.showInstructions=!1},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitQuery(t)},input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showInstructions,expression:"showInstructions"}],staticClass:"enter-instructions"},[e._v("Press return ↩ to search")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.hasResults,expression:"hasResults"}],staticClass:"search-results"},[s("ul",e._l(e.movies,function(e){return s("li",[s("result",{attrs:{info:e}})],1)}))])])},staticRenderFns:[]}}],[29]);
//# sourceMappingURL=app.3a8c8ada0e94ee4c8bfe.js.map