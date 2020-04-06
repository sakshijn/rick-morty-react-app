(this["webpackJsonprick-and-morty-app"]=this["webpackJsonprick-and-morty-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),s=a.n(c),i=(a(13),a(7)),l=a(1),o=a(2),m=a(3),u=a(4),d=(a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.items,t=this.props.filterSpecies;return n.a.createElement("div",{className:"row"},e.map((function(e){return t.includes(e.species)?n.a.createElement("div",{className:"card text-white bg-dark col-6 col-md-3 p-sm-1",style:{maxWidth:"18rem"},key:e.name},n.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.name}),n.a.createElement("div",{className:"card-header text-uppercase"},e.name,n.a.createElement("p",null,"id: ",e.id)),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-text row row-cols-2"},n.a.createElement("div",{className:"col text-uppercase"},"Status"),n.a.createElement("div",{className:"col text-right"},e.status),n.a.createElement("div",{className:"col text-uppercase"},"Species"),n.a.createElement("div",{className:"col text-right"},e.species),n.a.createElement("div",{className:"col text-uppercase"},"Gender"),n.a.createElement("div",{className:"col text-right"},e.gender),n.a.createElement("div",{className:"col text-uppercase"},"Origin"),n.a.createElement("div",{className:"col text-right"},e.origin.name),n.a.createElement("div",{className:"col text-uppercase"},"Last Location"),n.a.createElement("div",{className:"col text-right"},e.location.name)))):n.a.createElement("div",{key:e.name})})))}}]),a}(n.a.Component));function p(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-6 form-group"},n.a.createElement("label",{htmlFor:"searchInputName"},"Search by name:"),n.a.createElement("input",{type:"text",className:"form-control",id:"searchInputName",placeholder:"Name",name:"filterName",onChange:e.onChange(),style:{display:"inline-block",maxWidth:"78%"}}),n.a.createElement("button",{type:"button",id:"searchButton",className:"btn btn-primary float-right",onClick:e.onClick()},"Search")),n.a.createElement("div",{className:"col-sm-12 col-md-6 form-group"},n.a.createElement("label",{htmlFor:"sortInputId"},"Sort By Id:"),n.a.createElement("select",{className:"form-control",id:"sortInputId",name:"sort",value:e.sort,onChange:e.onChange()},n.a.createElement("option",{value:"asc"},"Ascending"),n.a.createElement("option",{value:"desc"},"Descending"))))}var f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{border:"1px solid",marginTop:"20px",padding:"10px"}},n.a.createElement("h4",null,"Species"),this.props.species.map((function(t){return n.a.createElement("div",{className:"form-check",key:t},n.a.createElement("input",{className:"form-check-input",type:"checkbox",value:t,name:"filterSpecies",checked:e.props.filterSpecies.includes(t),onChange:function(t){return e.props.onChange(t)}}),n.a.createElement("label",{className:"form-check-label"},t))})))}}]),a}(n.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).updateFilter=function(e){var t=e.target,a=t.value,n=t.name;"checkbox"===t.type&&(t.checked?r.state.filterSpecies.push(t.value):r.state.filterSpecies.pop(t.value),a=r.state.filterSpecies),r.setState(Object(i.a)({},n,a)),"sort"===n&&r.sortById(a)},r.filterByName=function(e){var t=r.state.items.filter((function(e){return e.name.toLowerCase().includes(r.state.filterName.toLowerCase())}));r.setState({filteredItems:t}),e.preventDefault()},r.state={error:null,isLoaded:!1,items:[],species:[],filteredItems:[],filterName:"",filterGender:"",filterSpecies:[],sort:"asc"},r}return Object(o.a)(a,[{key:"sortById",value:function(e){var t=this.state.items,a="asc"===e?t.sort((function(e,t){return e.id>t.id?1:-1})):t.sort((function(e,t){return e.id<t.id?1:-1}));this.setState({filteredItems:a})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.results,filteredItems:t.results,species:t.results.map((function(e){return e.species})).filter((function(e,t,a){return a.indexOf(e)===t})),filterSpecies:t.results.map((function(e){return e.species})).filter((function(e,t,a){return a.indexOf(e)===t}))})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,r=t.isLoaded,c=t.filteredItems,s=t.filterSpecies,i=t.species;return a?n.a.createElement("div",null,"Error: ",a.message):r?n.a.createElement("div",{className:"container",role:"main"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h3",null,"Filters"),n.a.createElement(f,{species:i,filterSpecies:s,onChange:this.updateFilter})),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(p,{onChange:function(){return e.updateFilter},onClick:function(){return e.filterByName},sort:this.state.sort})),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(d,{items:c,filterSpecies:s})))))):n.a.createElement("div",null,"Loading...")}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);s.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.1f052184.chunk.js.map