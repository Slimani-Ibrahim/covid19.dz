(this["webpackJsonpdashboard-covid19.dz"]=this["webpackJsonpdashboard-covid19.dz"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=(a(49),a(3)),o=a(4),A=a(5),s=a(8),u=a(9),d=a(37),m=a(23);function g(e){return r.a.createElement("div",null,"spinner"==e.type?r.a.createElement(d.ProgressSpinner,{style:{width:"30px",height:"30px"},strokeWidth:"7",animationDuration:".5s"}):r.a.createElement(m.ProgressBar,{mode:"indeterminate",style:{height:"4px"}}))}var E=function(e){return r.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-12 col-xs-12 card-dashboard",style:{color:e.color}},r.a.createElement("div",{className:"info-box blue-bg subcard-dashboard"},r.a.createElement("span",{className:"icon-card"},r.a.createElement("i",{className:e.icon}),r.a.createElement("img",{src:e.img,height:55})),r.a.createElement("div",{className:"contentCard"},r.a.createElement("div",{style:{display:"inline-flex"}},null!=e.count?r.a.createElement("strong",{className:"countCard"},e.count):r.a.createElement(g,{type:"spinner"}),0!=e.todayReport&&null!=e.todayReport&&r.a.createElement("span",{className:"new-situation-span",style:{color:e.color}},"+(",e.todayReport,")",r.a.createElement("div",{style:{fontSize:9,marginTop:5}},"\xa0",e.subtitle))),r.a.createElement("div",{className:"title"},e.title))))},f=a(38),p=a.n(f),h=a(39),v=a.n(h);var C=function(e){return r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:v.a,className:"App-flag",alt:"logo"}),r.a.createElement("div",{className:"header-content"},r.a.createElement("strong",{className:"App-title"},"COVID-19 Situation Dashboard in Algeria"),r.a.createElement("div",{className:"low-head"},e.lastUpdate)),r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}))},b=a(16),y=a.n(b),w=a(40),D=a.n(w),B=a(12),N=a.n(B),k=new(function(){function e(){Object(o.a)(this,e)}return Object(A.a)(e,[{key:"getCountryCovid",value:function(e){return N.a.get("https://disease.sh/v2/countries/"+e)}},{key:"getWorldCovid",value:function(){return N.a.get("https://disease.sh/v2/all")}},{key:"getHistoricalCovid",value:function(e){return N.a.get("https://disease.sh/v2/historical/"+e)}},{key:"getCountriesCovid",value:function(){return N.a.get("https://disease.sh/v2/countries")}},{key:"getWilayasCovid",value:function(){return N.a.get("https://api.healthdz.com/status")}},{key:"getDailyReport",value:function(e){return N.a.get("https://api.covid19api.com/live/country/algeria/status/"+e)}},{key:"getTotalAlgeria",value:function(){return N.a.get("https://api.covid19api.com/live/country/algeria")}}]),e}()),O=a(15),I=a(7),j=a(11),P=(r.a.Component,function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getXAxes=function(){var e;switch(n.props.type){case"global":e=["active cases","deaths","recovered"];break;case"today":e=["new cases","deaths"]}return e},n.getYAxes=function(e){var t;switch(n.props.type){case"global":t=[e.active,e.deaths,e.recovered];break;case"today":t=[e.todayCases,e.todayDeaths]}return t},n.state={dataChart:{labels:null,datasets:[{label:"",backgroundColor:"",data:[]}]}},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=this;"world"==this.props.perimeter?k.getWorldCovid().then((function(t){e.setState((function(a){return{dataChart:Object(O.a)({},a.dataChart,{labels:e.getXAxes(),datasets:[{data:e.getYAxes(t.data),backgroundColor:["#ed1d24","#000000","#1ea04c"]}]})}}))})).catch((function(e){console.log(e)})):k.getCountryCovid("Algeria").then((function(t){e.setState((function(a){return{dataChart:Object(O.a)({},a.dataChart,{labels:e.getXAxes(),datasets:[{data:e.getYAxes(t.data),backgroundColor:["#ed1d24","#000000","#1ea04c"]}]})}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(I.Panel,{header:this.props.title,className:"chart-content"},null!=this.state.dataChart.labels?r.a.createElement(j.Chart,{type:"doughnut",data:this.state.dataChart,options:{legend:{position:"right"},responsive:!0}}):r.a.createElement(g,{type:"spinner"}))}}]),a}(r.a.Component)),S=a(41),Q=a.n(S),x=a(20),J=a(18),T=a(19);function R(e){return r.a.createElement("div",{className:"p-grid p-fluid",style:{justifyContent:"center"}},r.a.createElement("div",{className:"p-col-12 p-md-4"},r.a.createElement("div",{className:"p-inputgroup"},r.a.createElement(T.Button,{icon:"pi pi-search",className:"p-button-success icon-button"}),r.a.createElement(J.InputText,{placeholder:e.hint,onChange:e.onChange,className:"filter-inputtext"}))))}var z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).sortedDataSet=function(e){var t=e;return t.sort((function(e,t){return t.cases-e.cases})),t},n.itemTemplate=function(e){return r.a.createElement("div",{className:"p-col-3 card-country"},null!=e&&r.a.createElement(I.Panel,{header:e.country,style:{textAlign:"center"}},"World"==e.country?r.a.createElement("img",{src:Q.a,height:30}):r.a.createElement("img",{src:e.countryInfo.flag,height:30}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-certificate"}),"\xa0Confirmed Cases : ",e.cases),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-heartbeat"}),"\xa0Recovered : ",e.recovered),r.a.createElement("div",null,r.a.createElement("img",{src:y.a,height:15}),"\xa0Deaths : ",e.deaths)))},n.handleSearch=function(e){var t=n.state.countriesFilter.filter((function(t){return t.country.toLowerCase().includes(e.target.value.toLowerCase())}));n.setState({countriesCovid:t})},n.state={countriesCovid:null,countriesFilter:null,widthScreen:0},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.getCountriesCovid().then((function(t){e.setState({countriesCovid:t.data,countriesFilter:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"countries-grid-content"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("strong",{className:"title-covid-world"},this.props.title)),r.a.createElement(R,{hint:"Search country",onChange:this.handleSearch}),null!=this.state.countriesCovid?r.a.createElement(x.DataView,{value:this.sortedDataSet(this.state.countriesCovid),itemTemplate:this.itemTemplate,paginatorPosition:"both",paginator:!0,layout:"desktop"==this.props.viewport?"grid":"list",rows:12}):r.a.createElement(g,{type:"bar"}),r.a.createElement("br",null))}}]),a}(r.a.Component),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).itemTemplate=function(e){return r.a.createElement("div",{className:"p-col-3 card-country"},null!=e&&r.a.createElement(I.Panel,{header:e.fr+" "+e.ar,style:{textAlign:"center"}},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-certificate"}),"\xa0Confirmed Cases : ",e.confirmed),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-eye"}),"\xa0New Cases :  ",e.new_cases),r.a.createElement("div",null,r.a.createElement("img",{src:y.a,height:15}),"\xa0Deaths : ",e.deaths)))},n.handleSearch=function(e){var t=n.state.wilayaFilter.filter((function(t){return t.fr.toLowerCase().includes(e.target.value.toLowerCase())||t.ar.toLowerCase().includes(e.target.value.toLowerCase())}));n.setState({wilayasCovid:t})},n.state={wilayasCovid:null,wilayaFilter:null,widthScreen:0},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.getWilayasCovid().then((function(t){var a=t.data.filter((function(e){return"National"!==e.fr}));e.setState({wilayasCovid:a,wilayaFilter:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"countries-grid-content"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("strong",{className:"title-covid-world"},this.props.title)),r.a.createElement(R,{hint:"Search province",onChange:this.handleSearch}),null!=this.state.wilayasCovid?r.a.createElement(x.DataView,{value:this.state.wilayasCovid,itemTemplate:this.itemTemplate,paginatorPosition:"both",paginator:!0,layout:"desktop"==this.props.viewport?"grid":"list",rows:16}):r.a.createElement(g,{type:"bar"}),r.a.createElement("br",null))}}]),a}(r.a.Component),X=a(24),F=a(42);var U=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],o=e.columns.map((function(e){return r.a.createElement(F.Column,{sortable:"flag"!=e.field,key:e.field,field:e.field,header:e.header,headerStyle:{overflowWrap:"break-word"}})})),A=r.a.createElement("div",{className:"header-table"},r.a.createElement("div",{className:"header-title-table"},r.a.createElement("strong",null,e.title)),r.a.createElement("div",{className:"input-group search-area  col-md-4",style:{marginLeft:"-15px"}},r.a.createElement("div",{className:"p-inputgroup",style:{width:"100%"}},r.a.createElement(T.Button,{icon:"pi pi-search",className:"form-control p-button-success icon-button"}),r.a.createElement(J.InputText,{type:"text",className:"filter-inputtext",onChange:function(e){return c(e.target.value)},placeholder:"Search"}))));return r.a.createElement(X.DataTable,{value:e.data,responsive:!0,header:A,globalFilter:l,paginator:!0,rows:10,rowsPerPageOptions:[5,10,30,50],emptyMessage:"No records found",rowHover:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"},o)},V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).columnsDataTable=[{header:"Rank",field:"rank"},{header:"Country Flag",field:"flag"},{header:"Country Name",field:"country"},{header:"Deaths Ratio %",field:"deathPercent"}],n.dealRankingData=function(e){var t=new Array;e.map((function(e){var a=e.deaths/e.cases*100;t.push({rank:0,flag:r.a.createElement("img",{src:e.countryInfo.flag,height:30,style:{borderRadius:7}}),country:e.country,deathPercent:a.toFixed(2)})})),t.sort((function(e,t){return t.deathPercent-e.deathPercent}));for(var a=0;a<t.length;)t[a].rank=a+1,a++;return t},n.state={data:null},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.getCountriesCovid().then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"rank-container"},null!=this.state.data?r.a.createElement(U,{title:"Ranking of countries by rate of deaths",columns:this.columnsDataTable,data:this.dealRankingData(this.state.data)}):r.a.createElement(g,{type:"bar"}))}}]),a}(n.Component),H=a(17),W=a.n(H),M=a(21);function q(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),A=Object(i.a)(o,2),s=A[0],u=A[1],d=Object(n.useState)(null),m=Object(i.a)(d,2),E=m[0],f=m[1],p=Object(n.useState)(null),h=Object(i.a)(p,2),v=h[0],C=h[1],b={labels:v,datasets:[{label:"Cases",data:l,backgroundColor:"#e50018",borderColor:"#e50018",fill:!1},{label:"Deaths",data:s,backgroundColor:"#0a0a0a",borderColor:"#0a0a0a",fill:!1},{label:"Recovers",data:E,backgroundColor:"#1ea04c",borderColor:"#1ea04c",fill:!1}]};Object(n.useEffect)((function(){(function(){var t=Object(M.a)(W.a.mark((function t(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k.getHistoricalCovid(e.perimeter).then((function(t){var a="Algeria"==e.perimeter?t.data.timeline:t.data;c(w(a.cases)),u(w(a.deaths)),f(w(a.recovered)),C(y(a.cases))})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var y=function(e){var t=Object.entries(e).map((function(e){var t=Object(i.a)(e,2),a=t[0];if(0!=t[1])return a}));return t=t.filter((function(e){return void 0!==e}))},w=function(e){var t=Object.entries(e).map((function(e){var t=Object(i.a)(e,2),a=(t[0],t[1]);if(0!=a)return a}));return t=t.filter((function(e){return void 0!==e}))};return r.a.createElement(I.Panel,{header:e.title,className:"chart-content"},(null===l||void 0===l?void 0:l.length)?r.a.createElement(j.Chart,{type:"line",data:b}):r.a.createElement(g,{type:"spinner"}))}function Z(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),A=Object(i.a)(o,2),s=A[0],u=A[1],d={labels:l,datasets:[{label:e.label,data:s,backgroundColor:e.color,fill:!1,borderColor:e.color}]};Object(n.useEffect)((function(){(function(){var t=Object(M.a)(W.a.mark((function t(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k.getHistoricalCovid(e.country).then((function(t){var a="all"==e.country?t.data:t.data.timeline;switch(e.type){case"cases":c(m(a.cases)),u(E(a.cases));break;case"deaths":c(m(a.deaths)),u(E(a.deaths));break;case"recovered":c(m(a.recovered)),u(E(a.recovered))}})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var m=function(e){var t=Object.entries(e).map((function(e){var t=Object(i.a)(e,2),a=t[0];if(0!==t[1])return a}));return t=t.filter((function(e){return void 0!==e}))},E=function(e){var t=Object.entries(e).map((function(e){var t=Object(i.a)(e,2),a=(t[0],t[1]);if(0!==a)return a}));t=t.filter((function(e){return void 0!==e}));for(var a=[],n=0;n<t.length;)n-1>-1&&(t[n]-t[n-1]<0?a.push(0):a.push(t[n]-t[n-1])),n++;return a};return r.a.createElement(I.Panel,{header:e.title,className:"chart-content"},(null===s||void 0===s?void 0:s.length)?r.a.createElement(j.Chart,{type:"line",data:d}):r.a.createElement(g,{type:"spinner"}))}var K=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getXAxes=function(e){var t=Object.entries(e).map((function(e){var t=Object(i.a)(e,2),a=t[0];if(0!=t[1])return a}));return t=t.filter((function(e){return void 0!==e}))},n.getYAxes=function(e){var t=Object.entries(e).map((function(e){var t=Object(i.a)(e,2),a=(t[0],t[1]);if(0!=a)return a}));return t=t.filter((function(e){return void 0!==e}))},n.timespanToDatetime=function(e){if(""===e)return"";if(null===e)return"";if(void 0===e)return"";var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},n.state={countCases:null,countDeaths:null,countRecovered:null,countActive:null,todayCases:null,todayDeaths:null,lastUpdate:null},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.getCountryCovid("Algeria").then((function(t){e.setState({countCases:t.data.cases,countDeaths:t.data.deaths,countRecovered:t.data.recovered,countActive:t.data.active,todayCases:t.data.todayCases,todayDeaths:t.data.todayDeaths,lastUpdate:"last update : "+e.timespanToDatetime(t.data.updated)})})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,{lastUpdate:this.state.lastUpdate}),r.a.createElement("br",null),r.a.createElement("div",{className:"card-container"},r.a.createElement(E,{icon:"fa fa-certificate",title:"Total Cases",count:this.state.countCases,todayReport:this.state.todayCases,subtitle:"new cases",color:"red"}),"\xa0",r.a.createElement(E,{img:y.a,title:"Total Deaths",count:this.state.countDeaths,todayReport:this.state.todayDeaths,subtitle:"new deaths",color:"white"}),"\xa0",r.a.createElement(E,{icon:"fa fa-heartbeat",title:"Total Recovers",count:this.state.countRecovered,color:"#1ea04c"}),"\xa0",r.a.createElement(E,{img:D.a,title:"Active Cases",count:this.state.countActive,color:"#ffde00"})),r.a.createElement("br",null),r.a.createElement("div",{className:"chart-container"},r.a.createElement(Z,{title:"Daily cases report",type:"cases",label:"cases",country:"algeria",color:"red"}),"\xa0",r.a.createElement(Z,{title:"Daily deaths report",type:"deaths",label:"deaths",country:"algeria",color:"black"}),"\xa0",r.a.createElement(Z,{title:"Daily recovers report",type:"recovered",label:"recovers",country:"algeria",color:"green"})),r.a.createElement("div",{className:"chart-container"},r.a.createElement(q,{title:"Comparative cumulations report",perimeter:"Algeria"}),"\xa0",r.a.createElement(P,{title:"Global Situation",type:"global",perimeter:"Algeria"}),"\xa0",0!==this.state.todayCases?r.a.createElement(P,{title:"Today Situation",type:"today",perimeter:"Algeria"}):r.a.createElement("div",{className:"chart-content"})),r.a.createElement(L,{title:"Situation in Provinces",viewport:window.innerWidth>500?"desktop":"mobile"}),r.a.createElement(z,{title:"COVID-19 around the world",viewport:window.innerWidth>500?"desktop":"mobile"}),r.a.createElement("div",{className:"chart-container"},r.a.createElement(Z,{title:"Daily cases report",type:"cases",label:"cases",country:"all",color:"red"}),"\xa0",r.a.createElement(Z,{title:"Daily deaths report",type:"deaths",label:"deaths",country:"all",color:"black"}),"\xa0",r.a.createElement(Z,{title:"Daily recovers report",type:"recovered",label:"recovers",country:"all",color:"green"})),r.a.createElement("div",{className:"chart-container"},r.a.createElement(q,{title:"Comparative Report",perimeter:"all"}),"\xa0",r.a.createElement(P,{title:"Global Situation",type:"global",perimeter:"world"}),"\xa0",r.a.createElement(P,{title:"Today Situation",type:"today",perimeter:"world"})),r.a.createElement(V,null))}}]),a}(r.a.Component);function Y(e){return r.a.createElement("footer",{className:"page-footer font-small blue pt-4",style:{background:"#20232b",color:"white"}},r.a.createElement("div",{className:"container-fluid text-center text-md-left"},r.a.createElement("div",{className:"row content-footer"},r.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3"},r.a.createElement("h5",null,r.a.createElement("a",{href:"#"},"COVID19.DZ")),r.a.createElement("p",null,"Situation Dashboard for the Corona Virus Disease in Algeria & around the world.")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),r.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},r.a.createElement("h5",{className:"text-uppercase"},"Contact"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-linkedin-square"}),"\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/in/ibrahim-slimani-184161b2/",target:"_blank"},"Ibrahim Slimani")),r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-github-square"}),"\xa0",r.a.createElement("a",{href:"https://github.com/Slimani-Ibrahim",target:"_blank"},"Ibrahim Slimani")),r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-envelope-square"}),"\xa0",r.a.createElement("a",{href:"mailto:slimani.ibr@gmail.com"},"slimani.ibr@gmail.com")),r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-globe"}),"\xa0",r.a.createElement("a",{href:"https://slimani-ibrahim.github.io/profile/",target:"_blank"},"www.ibrahim-slimani.com")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright. Realised by Ibrahim Slimani"))}var G=function(){return r.a.createElement("body",null,r.a.createElement(K,null),r.a.createElement("br",null),r.a.createElement(Y,null))};a(104),a(105),a(106),a(107),a(108),a(109);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))},16:function(e,t){e.exports="data:image/png;base64,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"},38:function(e,t,a){e.exports=a.p+"static/media/covid-icon.dd3920c9.png"},39:function(e,t,a){e.exports=a.p+"static/media/algeria-flag.6bb826dc.png"},40:function(e,t,a){e.exports=a.p+"static/media/bio-danger-yellow.33985a5d.png"},41:function(e,t,a){e.exports=a.p+"static/media/world-icon.c1dd1584.png"},44:function(e,t,a){e.exports=a(110)},49:function(e,t,a){}},[[44,1,2]]]);