(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{MTLF:function(t,n,o){"use strict";o.r(n),o.d(n,"PhotoPageModule",function(){return I});var e=o("6g0+"),i=o("PCNd"),c=o("tyNb"),b=o("mrSG"),s=o("VfN6"),r=o("itXk"),a=o("lJxs"),l=o("/uUt"),u=o("eIep"),p=o("KJy6"),d=o("fXoL"),h=o("kTgZ"),g=o("TEn/"),m=o("ofXK"),M=o("/T4s");function f(t,n){1&t&&d.Lb(0,"app-image",20),2&t&&d.cc("src",n.ngIf)}function j(t,n){if(1&t&&(d.Nb(0,"ion-slide"),d.ic(1,f,1,1,"app-image",19),d.Yb(2,"async"),d.Mb()),2&t){const t=n.$implicit;d.Ab(1),d.cc("ngIf",d.Zb(2,1,t.photoUrl$))}}function N(t,n){if(1&t){const t=d.Ob();d.Nb(0,"ion-slides",17),d.Vb("ionSlideDidChange",function(n){return d.fc(t),d.Xb().onPhotoSlidesChanged(n)}),d.ic(1,j,3,3,"ion-slide",18),d.Yb(2,"async"),d.Mb()}if(2&t){const t=n.ngIf,o=d.Xb();d.cc("options",t),d.Ab(1),d.cc("ngForOf",d.Zb(2,2,o.junctures$))}}const y=[{path:"",component:(()=>{let t=class{constructor(t,n,o){this.junctureRepository=t,this.route=n,this.router=o,this.currentJunctureId$=this.route.queryParamMap.pipe(Object(a.a)(t=>t.get("id")),Object(p.b)(),Object(l.a)()),this.junctures$=this.junctureRepository.all$,this.currentJunctureIndex$=Object(r.a)([this.junctures$,this.currentJunctureId$]).pipe(Object(a.a)(([t,n])=>t.findIndex(t=>t.id===n))),this.currentJuncture$=Object(r.a)([this.junctures$,this.currentJunctureIndex$]).pipe(Object(a.a)(([t,n])=>t[n])),this.photoSlidesOptions$=this.currentJunctureIndex$.pipe(Object(a.a)(t=>({resistanceRatio:0,initialSlide:t})))}onPhotoSlidesChanged(t){const n=t.target;return this.junctures$.pipe(Object(u.a)(t=>Object(b.a)(this,void 0,void 0,function*(){return t[yield n.getActiveIndex()].id})),Object(u.a)(t=>this.router.navigate([],{queryParams:{id:t},relativeTo:this.route,replaceUrl:!0})),Object(s.b)(this)).subscribe()}};return t.\u0275fac=function(n){return new(n||t)(d.Kb(h.a),d.Kb(c.a),d.Kb(c.g))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-photo"]],decls:53,vars:9,consts:[[1,"ion-no-border"],["slot","start"],["color","light"],["slot","end"],["slot","primary","color","light"],["name","trash-outline","slot","icon-only"],["slot","secondary","color","light"],["name","share-social-outline","slot","icon-only"],["class","photo-slides",3,"options","ionSlideDidChange",4,"ngIf"],["fullscreen",""],["lines","none"],["name","code-outline","slot","start"],["name","document-outline","slot","start"],["name","time-outline","slot","start"],["name","location-outline","slot","start"],["name","home-outline","slot","start"],["src","https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed","frameborder","0","loading","lazy"],[1,"photo-slides",3,"options","ionSlideDidChange"],[4,"ngFor","ngForOf"],["ionImgViewer","",3,"src",4,"ngIf"],["ionImgViewer","",3,"src"]],template:function(t,n){if(1&t&&(d.Nb(0,"ion-header",0),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-buttons",1),d.Lb(3,"ion-back-button",2),d.Mb(),d.Nb(4,"ion-buttons",3),d.Nb(5,"ion-button",4),d.Lb(6,"ion-icon",5),d.Mb(),d.Nb(7,"ion-button",6),d.Lb(8,"ion-icon",7),d.Mb(),d.Mb(),d.Mb(),d.ic(9,N,3,4,"ion-slides",8),d.Yb(10,"async"),d.Mb(),d.Nb(11,"ion-content",9),d.Nb(12,"ion-list",10),d.Nb(13,"ion-item"),d.Lb(14,"ion-icon",11),d.Nb(15,"ion-label"),d.Nb(16,"h3"),d.jc(17,"Hash"),d.Mb(),d.Nb(18,"p"),d.jc(19),d.Yb(20,"async"),d.Mb(),d.Mb(),d.Mb(),d.Nb(21,"ion-item"),d.Lb(22,"ion-icon",12),d.Nb(23,"ion-label"),d.Nb(24,"h3"),d.jc(25,"MIME Type"),d.Mb(),d.Nb(26,"p"),d.jc(27),d.Yb(28,"async"),d.Mb(),d.Mb(),d.Mb(),d.Nb(29,"ion-item"),d.Lb(30,"ion-icon",13),d.Nb(31,"ion-label"),d.Nb(32,"h3"),d.jc(33,"Timestamp"),d.Mb(),d.Nb(34,"p"),d.jc(35,"2020/02/01 10:10:10"),d.Mb(),d.Mb(),d.Mb(),d.Nb(36,"ion-item"),d.Lb(37,"ion-icon",14),d.Nb(38,"ion-label"),d.Nb(39,"h3"),d.jc(40,"Geolocation"),d.Mb(),d.Nb(41,"p"),d.jc(42,"121.69, 23.22"),d.Mb(),d.Mb(),d.Mb(),d.Nb(43,"ion-item"),d.Lb(44,"ion-icon",15),d.Nb(45,"ion-label"),d.Nb(46,"h3"),d.jc(47,"Address"),d.Mb(),d.Nb(48,"p"),d.jc(49,"7F.-1, No.429, Guangfu S. Rd., Xinyi District, Taipei City, 11074"),d.Mb(),d.Mb(),d.Mb(),d.Nb(50,"ion-item"),d.Lb(51,"ion-icon",1),d.Lb(52,"iframe",16),d.Mb(),d.Mb(),d.Mb()),2&t){let t=null,o=null;d.Ab(9),d.cc("ngIf",d.Zb(10,3,n.photoSlidesOptions$)),d.Ab(10),d.kc(null==(t=d.Zb(20,5,n.currentJuncture$))?null:t.id),d.Ab(8),d.kc(null==(o=d.Zb(28,7,n.currentJuncture$))?null:o.mimeType)}},directives:[g.m,g.C,g.f,g.c,g.d,g.e,g.n,m.k,g.h,g.r,g.p,g.q,g.z,m.j,g.y,M.a,e.a],pipes:[m.b],styles:["ion-toolbar[_ngcontent-%COMP%]{position:absolute;--background:transparent}.photo-slides[_ngcontent-%COMP%]{overflow:hidden;border-radius:0 0 32px 32px;box-shadow:0 3px 8px rgba(0,0,0,.24)}.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:auto}.photo-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{height:100%;max-height:40vh;min-height:100px;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}iframe[_ngcontent-%COMP%]{width:100%;height:100px;border-radius:4px}"]}),t=Object(b.b)([Object(s.a)()],t),t})()}];let O=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(y)],c.i]}),t})(),I=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(n){return new(n||t)},imports:[[i.a,O,e.b]]}),t})()}}]);