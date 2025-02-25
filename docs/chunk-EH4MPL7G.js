import{A as L,B as Z,C as R,D,E as w,F as ee,G as M,H as N,I as te,J as ne,N as ie,P as oe,Q as re,S as U,T as ae,a as x,b as q,c as S,d as G,e as J,f as I,g as K,h as Q,i as W,j as X,k as P,l as a,m as u,n as s,o as B,p as E,q as p,r as i,s as n,t as m,u as Y,v as y,w as T,x as b,y as r,z as l}from"./chunk-RW4NGYY4.js";var F="https://restcountries.com/v3.1",d=class o{constructor(t){this.http=t}SearchByAlphaCode(t){return this.http.get(`${F}/alpha/${t}`).pipe(q(e=>e.length>0?e[0]:null),S(()=>x(null)))}SearchRegion(t){return this.http.get(`${F}/region/${t}`).pipe(S(()=>x([])))}SearchCountry(t){return this.http.get(`${F}/name/${t}`).pipe(S(()=>x([])))}SearchCapital(t){return this.http.get(`${F}/capital/${t}`).pipe(S(()=>x([])))}static \u0275fac=function(e){return new(e||o)(K(ne))};static \u0275prov=J({token:o,factory:o.\u0275fac,providedIn:"root"})};var C=class o{onValue=new X;placeholder="";emitTerm(t){this.onValue.emit(t)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=s({type:o,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},standalone:!1,decls:2,vars:1,consts:[["txtInput",""],["type","text",1,"form-control",3,"keyup.enter","placeholder"]],template:function(e,c){if(e&1){let f=Y();i(0,"input",1,0),y("keyup.enter",function(){Q(f);let me=b(1);return W(c.emitTerm(me.value))}),n()}e&2&&p("placeholder",c.placeholder)},encapsulation:2})};var se=o=>["/countries/by",o];function ue(o,t){o&1&&(i(0,"div",2),r(1,` No hay paises para mostrar.
`),n())}function de(o,t){if(o&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),n(),i(5,"td"),m(6,"img",5),n(),i(7,"td"),r(8),n(),i(9,"td"),r(10),n(),i(11,"td"),r(12),R(13,"number"),n(),i(14,"td")(15,"a",6),r(16,"Ver m\xE1s"),n()()()),o&2){let e=t.$implicit,c=t.index;a(2),l(c+1),a(2),l(e.flag),a(2),p("src",e.flags.svg,P)("alt",e.name.common),a(2),l(e.capital),a(2),l(e.name.common),a(2),l(D(13,8,e.population)),a(3),p("routerLink",Z(10,se,e.cca3))}}function fe(o,t){if(o&1&&(i(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),n(),i(5,"th"),r(6,"Icono"),n(),i(7,"th"),r(8,"Bandera"),n(),i(9,"th"),r(10,"Nombre"),n(),i(11,"th"),r(12,"Pa\xEDs"),n(),i(13,"th"),r(14,"Poblaci\xF3n"),n(),m(15,"th"),n()(),i(16,"tbody"),E(17,de,17,12,"tr",4),n()()),o&2){let e=T();a(17),p("ngForOf",e.countries)}}var v=class o{countries=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=s({type:o,selectors:[["countries-table"]],inputs:{countries:"countries"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(e,c){if(e&1&&E(0,ue,2,0,"div",1)(1,fe,18,1,"ng-template",null,0,w),e&2){let f=b(2);p("ngIf",c.countries.length===0)("ngIfElse",f)}},dependencies:[ee,M,re,N],styles:["img[_ngcontent-%COMP%]{width:25px}"]})};var j=class o{constructor(t){this.countriesService=t}countries=[];SearchByCapital(t){this.countriesService.SearchCapital(t).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||o)(u(d))};static \u0275cmp=s({type:o,selectors:[["countries-by-capital-page"]],standalone:!1,decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital...",3,"onValue"],[3,"countries"]],template:function(e,c){e&1&&(i(0,"h2"),r(1,"Por capital"),n(),m(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onValue",function(h){return c.SearchByCapital(h)}),n()()(),m(6,"hr"),i(7,"div",0)(8,"div",1),m(9,"countries-table",3),n()()),e&2&&(a(9),p("countries",c.countries))},dependencies:[C,v],encapsulation:2})};var O=class o{constructor(t){this.countriesService=t}countries=[];SearchByCountry(t){this.countriesService.SearchCountry(t).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||o)(u(d))};static \u0275cmp=s({type:o,selectors:[["countries-by-country-page"]],standalone:!1,decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs...",3,"onValue"],[3,"countries"]],template:function(e,c){e&1&&(i(0,"h2"),r(1,"Por pa\xEDs"),n(),m(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onValue",function(h){return c.SearchByCountry(h)}),n()()(),m(6,"hr"),i(7,"div",0)(8,"div",1),m(9,"countries-table",3),n()()),e&2&&(a(9),p("countries",c.countries))},dependencies:[C,v],encapsulation:2})};var $=class o{constructor(t){this.countriesService=t}countries=[];SearchByRegion(t){this.countriesService.SearchRegion(t).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||o)(u(d))};static \u0275cmp=s({type:o,selectors:[["countries-by-region-page"]],standalone:!1,decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por region...",3,"onValue"],[3,"countries"]],template:function(e,c){e&1&&(i(0,"h2"),r(1,"Por region"),n(),m(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onValue",function(h){return c.SearchByRegion(h)}),n()()(),m(6,"hr"),i(7,"div",0)(8,"div",1),m(9,"countries-table",3),n()()),e&2&&(a(9),p("countries",c.countries))},dependencies:[C,v],encapsulation:2})};function ye(o,t){o&1&&(i(0,"div",2),r(1," Espere por favor... "),n())}function ge(o,t){if(o&1&&(i(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),r(4,"Pa\xEDs: "),i(5,"strong"),r(6),n()()()(),i(7,"div",3)(8,"div",5)(9,"h3"),r(10,"Bandera"),n(),m(11,"img",6),n(),i(12,"div",7)(13,"h3"),r(14,"Informaci\xF3n"),n(),i(15,"ul",8)(16,"li",9)(17,"strong"),r(18,"Poblaci\xF3n:"),n(),r(19),R(20,"number"),n(),i(21,"li",9)(22,"strong"),r(23,"C\xF3digo:"),n(),r(24),n()()()(),i(25,"div",10)(26,"div",7)(27,"h3"),r(28,"Traducciones"),n(),i(29,"div",11)(30,"span",12),r(31),n(),i(32,"span",12),r(33),n(),i(34,"span",12),r(35),n(),i(36,"span",12),r(37),n(),i(38,"span",12),r(39),n(),i(40,"span",12),r(41),n(),i(42,"span",12),r(43),n()()()()()),o&2){let e=T();a(6),l(e.country.name.common),a(5),p("src",e.country.flags.svg,P)("alt",e.country.name.common),a(8),L(" ",D(20,12,e.country.population)," "),a(5),L(" ",e.country.cca3," "),a(7),l(e.country.translations.ara.common),a(2),l(e.country.translations.spa.common),a(2),l(e.country.translations.bre.common),a(2),l(e.country.translations.cym.common),a(2),l(e.country.translations.deu.common),a(2),l(e.country.translations.est.common),a(2),l(e.country.translations.fin.common)}}var k=class o{constructor(t,e,c){this.activatedRoute=t;this.countriesService=e;this.router=c}country;ngOnInit(){this.activatedRoute.params.pipe(G(({id:t})=>this.countriesService.SearchByAlphaCode(t))).subscribe(t=>(console.log({country:t}),t?(this.country=t,t):this.router.navigateByUrl("")))}static \u0275fac=function(e){return new(e||o)(u(ie),u(d),u(oe))};static \u0275cmp=s({type:o,selectors:[["countries-country-page"]],standalone:!1,decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(e,c){if(e&1&&E(0,ye,2,0,"ng-template",null,0,w)(2,ge,44,14,"div",1),e&2){let f=b(1);a(2),p("ngIf",c.country)("ngIfElse",f)}},dependencies:[M,N],encapsulation:2})};var Ce=[{path:"by-capital",component:j},{path:"by-country",component:O},{path:"by-region",component:$},{path:"by/:id",component:k},{path:"**",redirectTo:"by-capital"}],A=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=B({type:o});static \u0275inj=I({imports:[U.forChild(Ce),U]})};var ce=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=B({type:o});static \u0275inj=I({imports:[te,A,ae]})};export{ce as CountriesModule};
