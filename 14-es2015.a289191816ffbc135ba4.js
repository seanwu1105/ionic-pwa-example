(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QDOj:function(e,t,i){"use strict";i.r(t),i.d(t,"CameraPageModule",function(){return q});var n=i("6g0+"),r=i("PCNd"),c=i("tyNb"),o=i("mrSG"),a=i("VfN6"),s=i("2Vo4"),d=i("/uUt"),b=i("bOdf"),u=i("JIr8"),l=i("KJy6"),p=i("fXoL"),h=i("TEn/");let v=(()=>{class e{constructor(e){this.alertController=e}presentError(e){return Object(o.a)(this,void 0,void 0,function*(){console.error(e);const t=yield this.alertController.create({header:e instanceof Error?e.name:"Unknown Error",message:e instanceof Error?e.message:JSON.stringify(e),buttons:[{text:"ok"}]});yield t.present()})}}return e.\u0275fac=function(t){return new(t||e)(p.Wb(h.a))},e.\u0275prov=p.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=i("BJdS"),g=i("r0o6"),f=i("NXyV"),O=i("jtHE"),j=i("lJxs"),x=i("UXun"),C=i("vkgz"),$=i("CqXF"),w=i("SxV6"),S=i("eIep"),P=i("q7zd"),k=i("JX91"),_=i("7o/Q");class E{call(e,t){return t.subscribe(new I(e))}}class I extends _.a{constructor(e){super(e),this.hasPrev=!1}_next(e){let t;this.hasPrev?t=[this.prev,e]:this.hasPrev=!0,this.prev=e,t&&this.destination.next(t)}}let M=(()=>{class e{constructor(){this.videoStreamSelector=new y,this.videoDevices$=this.videoStreamSelector.devices$,this.mediaStream$=this.videoStreamSelector.stream$,this.imageCapture$=this.mediaStream$.pipe(Object(j.a)(e=>e.getVideoTracks()[0]),Object(l.c)(),Object(j.a)(e=>new ImageCapture(e)),Object(x.a)({bufferSize:1,refCount:!0})),this._capturedImageUrl$=new s.a(void 0),this.capturedImageUrl$=this._capturedImageUrl$.pipe(Object(l.c)(),Object(d.a)(),e=>e.pipe(Object(k.a)(void 0),e=>e.lift(new E),Object(C.a)(([e])=>{e&&URL.revokeObjectURL(e)}),Object(P.a)(e)))}connectPreview$(e){return this.mediaStream$.pipe(Object(C.a)(t=>e.srcObject=t),Object($.a)(e))}capture$(){return this.imageCapture$.pipe(Object(w.a)(),Object(S.a)(e=>e.takePhoto()),Object(C.a)(e=>{this._capturedImageUrl$.next(URL.createObjectURL(e))}),Object(u.a)(e=>Object(o.a)(this,void 0,void 0,function*(){if(!(e instanceof DOMException)||"InvalidStateError"!==e.name&&"UnknownError"!==e.name&&"OperationError"!==e.name)throw e})),Object(l.c)())}nextCamera$(e){return this.videoDevices$.pipe(Object(w.a)(),Object(b.a)(t=>Object(g.a)(()=>t.length>1,Object(f.a)(()=>Object(o.a)(this,void 0,void 0,function*(){return e.srcObject=null})).pipe(Object(P.a)(this.videoStreamSelector.next$())))))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class y{constructor(){this.devices$=Object(f.a)(()=>navigator.mediaDevices.enumerateDevices()).pipe(Object(j.a)(e=>e.filter(e=>"videoinput"===e.kind)),Object(x.a)({bufferSize:1,refCount:!0})),this.currentVideoDeviceIndex=0,this._stream$=new O.a(1),this.stream$=this.devices$.pipe(Object(w.a)(),Object(b.a)(e=>this.getCurrentVideoMedia(e)),Object(C.a)(e=>this._stream$.next(e)),Object(P.a)(this._stream$),Object(x.a)({bufferSize:1,refCount:!0}),Object(l.c)(),Object(l.b)(e=>function(e){return e.getVideoTracks().forEach(e=>e.stop()),e}(e)),Object(x.a)({bufferSize:1,refCount:!0}))}next$(){return this.stream$.pipe(Object(w.a)(),Object(C.a)(e=>e.getVideoTracks().forEach(e=>e.stop())),Object(P.a)(this.devices$),Object(C.a)(()=>this.currentVideoDeviceIndex++),Object(b.a)(e=>this.getCurrentVideoMedia(e)),Object(C.a)(e=>this._stream$.next(e)))}getCurrentVideoMedia(e){return Object(o.a)(this,void 0,void 0,function*(){return navigator.mediaDevices.getUserMedia({video:{deviceId:e[this.currentVideoDeviceIndex%e.length].deviceId}})})}}var U=i("zXXW"),D=i("ofXK"),R=i("9A8T"),V=i("/T4s"),z=i("QPBi");const L=["video"];function J(e,t){if(1&e){const e=p.Tb();p.Sb(0,"ion-button",9),p.ac("click",function(){return p.nc(e),p.cc(2).reverseCamera()}),p.Ob(1,"ion-icon",10),p.Rb()}}const N=function(e){return["/image-viewer",e]};function T(e,t){if(1&e&&(p.Sb(0,"div",11),p.Ob(1,"app-image",12),p.Rb()),2&e){const e=t.ngrxLet;p.Cb(1),p.ic("routerLink",p.kc(2,N,e))("src",e)}}function X(e,t){if(1&e){const e=p.Tb();p.Qb(0),p.Sb(1,"ion-button",3),p.ac("click",function(){return p.nc(e),p.cc().capture()}),p.Ob(2,"ion-icon",4),p.Rb(),p.uc(3,J,2,0,"ion-button",5),p.dc(4,"ngrxPush"),p.uc(5,T,2,4,"div",6),p.Ob(6,"video",7,8),p.Pb()}if(2&e){const e=p.cc();let t=null;p.Cb(3),p.ic("ngIf",(null==(t=p.ec(4,2,e.videoDevices$))?null:t.length)>1),p.Cb(2),p.ic("ngrxLet",e.capturedImageUrl$)}}function Q(e,t){if(1&e&&(p.Sb(0,"div",15),p.Ob(1,"ion-img",16),p.Sb(2,"h3"),p.wc(3),p.Rb(),p.Sb(4,"p"),p.wc(5),p.Rb(),p.Rb()),2&e){const e=t.$implicit;p.Cb(3),p.xc(e("noCameraFound")),p.Cb(2),p.xc(e("message.noCameraFound"))}}function K(e,t){1&e&&(p.Sb(0,"div",13),p.uc(1,Q,6,2,"div",14),p.Rb())}const B=[{path:"",component:(()=>{let e=class{constructor(e,t,i){this.dialogsService=e,this.momentRepository=t,this.cameraService=i,this.videoDevices$=this.cameraService.videoDevices$,this._videoElement$=new s.a(void 0),this.videoElement$=this._videoElement$.pipe(Object(l.c)(),Object(d.a)()),this.capturedImageUrl$=this.cameraService.capturedImageUrl$,this.startPreview()}set videoElement(e){e&&this._videoElement$.next(e.nativeElement)}startPreview(){return this.videoElement$.pipe(Object(b.a)(e=>this.cameraService.connectPreview$(e)),Object(u.a)(e=>Object(o.a)(this,void 0,void 0,function*(){return this.dialogsService.presentError(e)})),Object(a.b)(this)).subscribe()}capture(){this.cameraService.capture$().pipe(Object(l.a)(e=>this.momentRepository.add$(e)),Object(u.a)(e=>Object(o.a)(this,void 0,void 0,function*(){return this.dialogsService.presentError(e)})),Object(a.b)(this)).subscribe()}reverseCamera(){return this.videoElement$.pipe(Object(b.a)(e=>this.cameraService.nextCamera$(e)),Object(a.b)(this)).subscribe()}};return e.\u0275fac=function(t){return new(t||e)(p.Nb(v),p.Nb(m.a),p.Nb(M))},e.\u0275cmp=p.Hb({type:e,selectors:[["app-camera"]],viewQuery:function(e,t){if(1&e&&p.Bc(L,1),2&e){let e;p.lc(e=p.bc())&&(t.videoElement=e.first)}},decls:5,vars:5,consts:[["color","light","fill","clear",1,"dismiss",3,"standalone"],[4,"ngIf","ngIfElse"],["noCamera",""],["fill","clear",1,"capture",3,"click"],["slot","icon-only","name","radio-button-on-outline","color","light"],["class","capture","class","reverse-camera","fill","clear",3,"click",4,"ngIf"],["class","captured ion-margin",4,"ngrxLet"],["playsinline","","autoplay",""],["video",""],["fill","clear",1,"reverse-camera",3,"click"],["slot","icon-only","name","camera-reverse-outline","color","light"],[1,"captured","ion-margin"],[3,"routerLink","src"],[1,"no-camera"],["class","no-camera-illustration",4,"transloco"],[1,"no-camera-illustration"],["src","./assets/icons/undraw-void.svg"]],template:function(e,t){if(1&e&&(p.Ob(0,"app-back-button",0),p.uc(1,X,8,4,"ng-container",1),p.dc(2,"ngrxPush"),p.uc(3,K,2,0,"ng-template",null,2,p.vc)),2&e){const e=p.mc(4);let i=null;p.ic("standalone",!0),p.Cb(1),p.ic("ngIf",0!==(null==(i=p.ec(2,3,t.videoDevices$))?null:i.length))("ngIfElse",e)}},directives:[U.a,D.l,h.c,h.m,R.a,V.a,h.I,c.h,z.c,h.n],pipes:[R.b],styles:["[_nghost-%COMP%]{background:var(--ion-color-dark)}video[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.dismiss[_ngcontent-%COMP%]{position:absolute;left:0;z-index:1}ion-button.capture[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%);z-index:1;height:72px;width:72px;margin:0 0 var(--ion-margin,16px);--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4)}ion-button.capture[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:64px}ion-button.reverse-camera[_ngcontent-%COMP%]{position:absolute;bottom:16px;left:16px;z-index:1;height:48px;width:48px;--border-radius:50%;--padding-end:0;--padding-start:0;--background:rgba(0,0,0,0.4)}.captured[_ngcontent-%COMP%]{position:absolute;bottom:16px;right:16px;overflow:hidden;border-radius:4px;border:1px solid var(--ion-color-light-shade)}.captured[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{z-index:1;width:60px;height:60px}.no-camera[_ngcontent-%COMP%]{width:100%;height:100%;background:var(--ion-color-light-shade)}.no-camera-illustration[_ngcontent-%COMP%]{width:70%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.no-camera-illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin:auto;max-width:400px}.no-camera-illustration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line}"]}),e=Object(o.b)([Object(a.a)()],e),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({imports:[[c.i.forChild(B)],c.i]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({imports:[[r.a,F,n.a]]}),e})()}}]);