(self.webpackChunkquizz=self.webpackChunkquizz||[]).push([[211],{8211:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ThemesModule:()=>ne});var i=n(5806),r=n(665),o=n(8002),s=n(5435),c=n(639),a=n(1320),d=n(7764),l=n(8747),h=n(362),p=n(568),u=n(8583);const m=["*"];let g=(()=>{class e{constructor(e,t){this.controlContainer=e,this.alert=t,this.controlName="",this.width=0,this.multiple=!1,this.multiMax=void 0,this.labelValue="Ajouter des images",this.filesAddText="Fichier(s) Ajout\xe9(s)",this.style={}}ngOnInit(){this.parentForm=this.controlContainer.control,this.parentHandler()}ngOnChanges(e){this.style={width:this.width+"px"}}parentHandler(){this.parentForm.valueChanges.pipe((0,o.U)(e=>e[this.controlName])).subscribe(e=>{e&&(this.labelValue=e.length>0?this.filesAddText:this.labelValue)})}onChange(e){if(this.multiMax&&e.target.files.length+this.parentForm.value[this.controlName].length>this.multiMax)return this.alert.message=`Vous essayez de rajouter ${e.target.files.length-(this.multiMax-this.parentForm.value[this.controlName].length)} photos en trop`,void this.alert.switchAlert();e.target.files&&e.target.files.length>0&&this.parentForm.patchValue(this.multiple?{[this.controlName]:[...this.parentForm.value[this.controlName],...e.target.files]}:{[this.controlName]:e.target.files})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(r.gN),c.Y36(a.c))},e.\u0275cmp=c.Xpm({type:e,selectors:[["reg-file"]],inputs:{parentForm:"parentForm",controlName:"controlName",width:"width",multiple:"multiple",multiMax:"multiMax",labelValue:"labelValue",filesAddText:"filesAddText"},features:[c.TTD],ngContentSelectors:m,decls:5,vars:6,consts:[[1,"regFile",3,"formGroup"],[1,"regFile_label",3,"ngStyle"],["type","file",1,"regFile_noInput",3,"multiple","change"]],template:function(e,t){1&e&&(c.F$t(),c.TgZ(0,"div",0),c.TgZ(1,"label",1),c._uU(2),c.Hsn(3),c.qZA(),c.TgZ(4,"input",2),c.NdJ("change",function(e){return t.onChange(e)}),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",t.parentForm),c.xp6(1),c.Q6J("ngStyle",t.style),c.uIk("for",t.controlName),c.xp6(1),c.hij("",t.labelValue," "),c.xp6(2),c.Q6J("multiple",t.multiple),c.uIk("id",t.controlName))},directives:[r.JL,r.sg,u.PC],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.regFile[_ngcontent-%COMP%], .regFile_label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.regFile_label[_ngcontent-%COMP%]{font-size:small;background-color:#4ecdc4;color:#fff;padding:10px;border:none;transition:.3s;font-weight:700;border-radius:5px;box-shadow:2px 2px 0 0 #47bdb5;cursor:pointer;width:100%}.regFile_label[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 0;background-color:#47bdb5;color:#ffe66d}.regFile[_ngcontent-%COMP%]:focus{outline:0}.regFile_noInput[_ngcontent-%COMP%]{display:none}"]}),e})();var f=n(9573),x=n(2481);const _=[[["","background",""]],[["","card",""]]],T=function(e){return{sideMenu_displayed:e}},w=["[background]","[card]"];let P=(()=>{class e{constructor(e){this.document=e,this.display=!1}ngOnInit(){}ngOnChanges(e){[".root",".navBar"].forEach(e=>{this.document.querySelector(e).style.marginLeft=this.display?"150px":"0px"})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(u.K0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["side-menu"]],inputs:{display:"display"},features:[c.TTD],ngContentSelectors:w,decls:9,vars:3,consts:[[1,"sideMenu",3,"ngClass"],[1,"sideMenu_transclude"]],template:function(e,t){1&e&&(c.F$t(_),c.TgZ(0,"div",0),c.TgZ(1,"p"),c._uU(2,"Dos de carte"),c.qZA(),c.TgZ(3,"div",1),c.Hsn(4,0,["class","sideMenu_transclude"]),c.qZA(),c.TgZ(5,"p"),c._uU(6,"Images selectionn\xe9es"),c.qZA(),c.TgZ(7,"div",1),c.Hsn(8,1),c.qZA(),c.qZA()),2&e&&c.Q6J("ngClass",c.VKq(1,T,t.display))},directives:[u.mk],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.sideMenu[_ngcontent-%COMP%]{width:0;position:absolute;top:0;left:0;background-color:#ffe66d;font-size:small;height:100%;overflow-y:scroll;overflow-x:hidden;transition:.2s ease;z-index:1}.sideMenu_transclude[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.sideMenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Questrial,sans-serif;font-weight:700;width:100%;padding:10px 0;background-color:#4ecdc4;text-align:center}.sideMenu_displayed[_ngcontent-%COMP%]{border-right:2px solid #4ecdc4;width:150px}"]}),e})();var C=n(5741),v=n(623);function Z(e,t){if(1&e){const e=c.EpF();c.ynx(0),c.TgZ(1,"reg-button",26),c.NdJ("click",function(){return c.CHM(e),c.oxw().displayCrop("cardBack")}),c._UZ(2,"i",27),c.qZA(),c.BQk()}2&e&&(c.xp6(1),c.Q6J("width",50))}function b(e,t){if(1&e){const e=c.EpF();c.ynx(0),c.TgZ(1,"reg-button",26),c.NdJ("click",function(){return c.CHM(e),c.oxw().displayCrop("pictures")}),c._UZ(2,"i",27),c.qZA(),c.BQk()}2&e&&(c.xp6(1),c.Q6J("width",50))}function y(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"reg-button",28),c.NdJ("click",function(){c.CHM(e);const t=c.oxw();return t.displaySideMenu=!t.displaySideMenu}),c._UZ(1,"i",29),c.qZA()}2&e&&c.Q6J("width",40)}function M(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"pictures-preview",32),c.NdJ("fileDelete",function(t){return c.CHM(e),c.oxw(2).pictureDelete(t,"cardBack")}),c.qZA()}if(2&e){const e=t.$implicit;c.Q6J("index",t.index)("picture",e)("size",100)}}function O(e,t){if(1&e&&(c.TgZ(0,"div",30),c.YNc(1,M,1,3,"pictures-preview",31),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngForOf",e.postThemeForm.value.cardBack)}}function k(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"pictures-preview",32),c.NdJ("fileDelete",function(t){return c.CHM(e),c.oxw(2).pictureDelete(t,"pictures")}),c.qZA()}if(2&e){const e=t.$implicit;c.Q6J("index",t.index)("picture",e)("size",100)}}function F(e,t){if(1&e&&(c.TgZ(0,"div",33),c.YNc(1,k,1,3,"pictures-preview",31),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngForOf",e.postThemeForm.value.pictures)}}const I=function(){return["sideMenu_button"]};let A=(()=>{class e{constructor(e,t,n,i,o,s){this.fb=e,this.alert=t,this.request=n,this.cropModal=i,this.routerHistory=o,this.router=s,this.postThemeForm=this.fb.group({name:["",[r.kI.minLength(2),r.kI.required]],cardBack:[[],r.kI.required],pictures:[[],[r.kI.required,r.kI.minLength(10)]]}),this.buttonLabel="Valider",this.displaySideMenu=!1,this.pictureLengthTest=0,this.pictureLengthPreviousValue=0,this.pictureMinText=10,this.gotFiles={cardBack:0,pictures:0},this.isLoading=!1}ngOnInit(){this.pictureChangeHandler()}ngOnDestroy(){this.postThemeForm.reset()}pictureChangeHandler(){this.postThemeForm.valueChanges.pipe((0,o.U)(e=>{for(const t in this.gotFiles)e[t]&&(this.gotFiles[t]=e[t].length||0);return e.pictures}),(0,s.h)(e=>!!e&&(this.pictureMinText=this.computePictureMinText(),e.length!==this.pictureLengthPreviousValue&&(this.pictureLengthPreviousValue=e.length,e.length!==this.pictureLengthTest&&!0)))).subscribe(()=>{this.checkSame()})}displayCrop(e){this.cropModal.setInfo({props:{type:e,pictures:this.postThemeForm.value[e],opacity:.6,closeOnClick:!1,result:e=>this.postThemeForm.patchValue({[e.type]:e.payload})}})}checkSame(){const e=this.postThemeForm.value.pictures;if(!e)return;let t=[];t=e.map((e,t,n)=>{let i=0;return n.forEach(t=>{t.name===e.name&&i++}),i>1?"doublon":void 0}),t.includes("doublon")&&(this.alert.message=" Attention vous avez mis plusieurs fois la meme image",this.alert.switchAlert())}pictureDelete(e,t){const n=[...this.postThemeForm.value[t]].filter((t,n)=>n!==e);this.postThemeForm.patchValue({[t]:[...n]})}onSubmit(e){this.isLoading=!0,e.preventDefault();const{name:t,pictures:n,cardBack:i}=this.postThemeForm.value,r=new FormData;r.append("name",t),r.append("cardBack",i[0]),n.forEach(e=>{r.append("pictures",e)}),this.request.post("themes/",r).subscribe({next:e=>{this.isLoading=!1,this.alert.message="Theme correctement ajout\xe9",this.alert.switchAlert(),this.postThemeForm.reset(),this.goPreviousPage()},error:e=>{this.alert.message=e.error,this.alert.switchAlert()}})}goPreviousPage(){this.router.navigate([this.routerHistory.getPrevious()])}computePictureMinText(){const e=10-this.gotFiles.pictures;return e>=0?e:0}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(r.qu),c.Y36(a.c),c.Y36(d.s),c.Y36(l.O),c.Y36(h.H),c.Y36(i.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-post-theme"]],decls:34,vars:28,consts:[[1,"postTheme"],[1,"postTheme_topTitle"],[1,"fas","fa-chevron-circle-left","fa-2x",3,"click"],[1,"postTheme_form"],[3,"formGroup","submit"],[1,"postTheme_titleInput"],["for","post_image",1,"postTheme_firstLabel"],[1,"postTheme_regComps"],["id","post_image",3,"parentForm","parentControlName","width","validate"],[1,"postTheme_inputPictures"],[1,"postTheme_picturesButtonsinputBox"],["for","post_cardBack_button"],[1,"postTheme_picturesButtonsClick"],["id","post_cardBack_button",3,"width","parentForm","controlName"],[4,"ngIf"],["for","post_image_button"],["id","post_img_button",3,"width","parentForm","controlName","multiple","multiMax"],[1,"postTheme_vallidationEye"],["id","clickOutside_sideMenu_button",3,"width","click",4,"ngIf"],[1,"postTheme_validationSpinn"],[3,"size","isDisplayed"],[3,"type","label","disabled","width"],[1,"postTheme_preview"],["clickOutside","",3,"exceptions","display","clickOutside"],["background","",4,"ngIf"],["card","",4,"ngIf"],[3,"width","click"],[1,"fas","fa-crop-alt"],["id","clickOutside_sideMenu_button",3,"width","click"],[1,"fas","fa-eye"],["background",""],[3,"index","picture","size","fileDelete",4,"ngFor","ngForOf"],[3,"index","picture","size","fileDelete"],["card",""]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"i",2),c.NdJ("click",function(){return t.goPreviousPage()}),c.qZA(),c.TgZ(3,"h2"),c._uU(4,"Ajouter un theme"),c.qZA(),c.qZA(),c.TgZ(5,"div",3),c.TgZ(6,"form",4),c.NdJ("submit",function(e){return t.onSubmit(e)}),c.TgZ(7,"div",5),c.TgZ(8,"label",6),c._uU(9,"Entrez le nom du theme"),c.qZA(),c.TgZ(10,"div",7),c._UZ(11,"reg-input",8),c.qZA(),c.qZA(),c.TgZ(12,"div",9),c.TgZ(13,"div",10),c.TgZ(14,"label",11),c._uU(15,"Ajoutez un dos de carte"),c.qZA(),c.TgZ(16,"div",12),c._UZ(17,"reg-file",13),c.YNc(18,Z,3,1,"ng-container",14),c.qZA(),c.qZA(),c.TgZ(19,"div",10),c.TgZ(20,"label",15),c._uU(21),c.qZA(),c.TgZ(22,"div",12),c._UZ(23,"reg-file",16),c.YNc(24,b,3,1,"ng-container",14),c.qZA(),c.qZA(),c.TgZ(25,"div",17),c.YNc(26,y,2,1,"reg-button",18),c.TgZ(27,"div",19),c._UZ(28,"reg-spinner",20),c._UZ(29,"reg-button",21),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(30,"div",22),c.qZA(),c.TgZ(31,"side-menu",23),c.NdJ("clickOutside",function(){return t.displaySideMenu=!1}),c.YNc(32,O,2,1,"div",24),c.YNc(33,F,2,1,"div",25),c.qZA(),c.qZA()),2&e&&(c.xp6(6),c.Q6J("formGroup",t.postThemeForm),c.xp6(5),c.Q6J("parentForm",t.postThemeForm)("parentControlName","name")("width",200)("validate",t.postThemeForm.controls.name.valid),c.xp6(6),c.Q6J("width",130)("parentForm",t.postThemeForm)("controlName","cardBack"),c.xp6(1),c.Q6J("ngIf",t.gotFiles.cardBack>0),c.xp6(3),c.hij("Ajoutez au minimum ",t.pictureMinText," images pour creer un theme"),c.xp6(2),c.Q6J("width",130)("parentForm",t.postThemeForm)("controlName","pictures")("multiple",!0)("multiMax",100),c.xp6(1),c.Q6J("ngIf",t.gotFiles.pictures>0),c.xp6(2),c.Q6J("ngIf",t.gotFiles.cardBack>0||t.gotFiles.pictures>0),c.xp6(2),c.Q6J("size",20)("isDisplayed",t.isLoading),c.xp6(1),c.Q6J("type","submit")("label","Valider")("disabled",!t.postThemeForm.valid)("width",130),c.xp6(2),c.Q6J("exceptions",c.DdM(27,I))("display",t.displaySideMenu),c.xp6(1),c.Q6J("ngIf",t.gotFiles.cardBack>0),c.xp6(1),c.Q6J("ngIf",t.gotFiles.pictures>0))},directives:[r._Y,r.JL,r.sg,p.H,g,u.O5,f.q,x.m,P,C._,u.sg,v.V],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.postTheme[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.postTheme_firstLabel[_ngcontent-%COMP%]{color:#fff!important}.postTheme_topTitle[_ngcontent-%COMP%]{display:flex;width:90%;padding:10px;align-items:center}.postTheme[_ngcontent-%COMP%]   .fa-chevron-circle-left[_ngcontent-%COMP%]{color:#ffe66d;cursor:pointer;margin-right:10px}.postTheme_validationSpinn[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.postTheme[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#4ecdc4;font-size:small}.postTheme_titleInput[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;border-radius:5px;background-color:#4ecdc4;padding:10px;width:90%;align-items:center}.postTheme_titleInput[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:5px}.postTheme_regComps[_ngcontent-%COMP%]{display:flex}.postTheme_inputPictures[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;border-radius:5px;background-color:#ffe66d;padding:10px;width:90%}.postTheme[_ngcontent-%COMP%]   #clickOutside_sideMenu_button[_ngcontent-%COMP%]{margin-right:10px}.postTheme_picturesButtonsinputBox[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:10px}.postTheme_picturesButtonsinputBox[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:5px}.postTheme_preview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.postTheme_preview[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.postTheme_picturesButtonsClick[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.postTheme_picturesButtonsClick[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:10px}.postTheme_vallidationEye[_ngcontent-%COMP%]{display:flex;justify-content:center}.postTheme_form[_ngcontent-%COMP%], .postTheme_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.postTheme_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}"]}),e})();var q=n(1239),B=n(3025),J=n(9880),N=n(8891),L=n(9796),z=n(9105);function Q(e,t,n,i){return(0,z.m)(n)&&(i=n,n=void 0),i?Q(e,t,n).pipe((0,o.U)(e=>(0,L.k)(e)?i(...e):i(e))):new N.y(i=>{S(e,t,function(e){i.next(arguments.length>1?Array.prototype.slice.call(arguments):e)},i,n)})}function S(e,t,n,i,r){let o;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(e)){const i=e;e.addEventListener(t,n,r),o=()=>i.removeEventListener(t,n,r)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(e)){const i=e;e.on(t,n),o=()=>i.off(t,n)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(e)){const i=e;e.addListener(t,n),o=()=>i.removeListener(t,n)}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(let o=0,s=e.length;o<s;o++)S(e[o],t,n,i,r)}i.add(o)}var U=n(3190),D=n(2340);function Y(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",18),c.TgZ(1,"reg-button",19),c.NdJ("click",function(){return c.CHM(e),c.oxw().displayCrop("cardBack")}),c._UZ(2,"i",20),c.qZA(),c.TgZ(3,"div",21),c._UZ(4,"reg-spinner",22),c.TgZ(5,"reg-button",19),c.NdJ("click",function(){return c.CHM(e),c.oxw().postNewCards("posted")}),c._uU(6,"Valider"),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(1),c.Q6J("width",50)("solo",!1),c.xp6(3),c.Q6J("size",20)("isDisplayed",e.isLoading.cardBack),c.xp6(1),c.Q6J("width",50)("solo",!1)}}function j(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",23),c.TgZ(1,"reg-button",24),c.NdJ("click",function(){return c.CHM(e),c.oxw().displayCrop("pictures")}),c._UZ(2,"i",20),c.qZA(),c.TgZ(3,"div",21),c._UZ(4,"reg-spinner",22),c.TgZ(5,"reg-button",24),c.NdJ("click",function(){return c.CHM(e),c.oxw().postNewCards("notPosted")}),c._uU(6,"Valider"),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(1),c.Q6J("width",50)("height",20),c.xp6(3),c.Q6J("size",20)("isDisplayed",e.isLoading.pictures),c.xp6(1),c.Q6J("width",100)("height",20)}}function H(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"pictures-preview",25),c.NdJ("fileDelete",function(){const t=c.CHM(e).$implicit;return c.oxw().deleteCard("posted",t.id)}),c._UZ(1,"reg-spinner",22),c.qZA()}if(2&e){const e=t.$implicit,n=t.index,i=c.oxw();c.Q6J("picture",e.file)("size",60)("index",n),c.xp6(1),c.Q6J("size",20)("isDisplayed",i.isLoading.deletePicture[e.id])}}function V(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"pictures-preview",26),c.NdJ("fileDelete",function(t){return c.CHM(e),c.oxw().deleteCard("notPosted",t)}),c._uU(1," plop "),c.qZA()}if(2&e){const e=t.index;c.Q6J("picture",t.$implicit)("size",60)("index",e)}}let E=(()=>{class e{constructor(e,t,n){this.cropModal=e,this.alert=t,this.request=n,this.theme={},this.themeIndex=0,this.onDelete=new c.vpe,this.cardBackStyle={},this.cardsPreview=[],this.cardsPreviewNotPosted=[],this.cardBackChange=!1,this.picturesChange=!1,this.isLoading={cardBack:!1,pictures:!1,deletePicture:[]}}ngOnInit(){this.getCardBack(),this.cardsPreview=this.getPreview(this.theme.images),this.formHandler()}formHandler(){this.cardBackFormHandler(),this.picturesFormHandler()}cardBackFormHandler(){this.themePutForm.valueChanges.pipe((0,o.U)(e=>e["cardBack"+this.themeIndex]),(0,s.h)(e=>e.length>0),(0,U.w)(e=>this.readData(e[0]))).subscribe(e=>{this.changeCardBackPreview(e),this.cardBackChange=!0})}picturesFormHandler(){this.themePutForm.valueChanges.pipe((0,o.U)(e=>e["pictures"+this.themeIndex]),(0,s.h)(e=>e.length>0)).subscribe(e=>{this.cardsPreviewNotPosted=[...e],this.picturesChange=!0})}getCardBack(){const e=this.theme.images.filter(e=>"cardBack"===e.type);0!==e.length&&this.changeCardBackPreview(D.N.proxy+e[0].path)}getPreview(e){const t=[];return e.filter(e=>"themePic"===e.type).forEach(e=>{this.isLoading.deletePicture.push({[e.id]:!1}),t.push({file:D.N.proxy+e.path,id:e._id})}),t}delete(){this.onDelete.emit(this.theme._id)}deleteCard(e,t){"notPosted"===e&&this.deleteNotPostedPrev(t),"posted"===e&&this.deletePostedCard(t)}deletePostedCard(e){if(this.cardsPreview.length<=10)return this.alert.message="Vous ne pouvez pas avoir moins de 10 cartes",void this.alert.switchAlert();this.isLoading.deletePicture[e]=!0,this.request.delete("uploads/"+this.theme._id+"/"+e).subscribe({next:t=>{this.cardsPreview=this.cardsPreview.filter(t=>t.id!==e),this.isLoading.deletePicture[e]=!1,this.alert.message="Carte correctement retir\xe9e",this.alert.switchAlert()},error:e=>{e.error&&(this.alert.message=e.error,this.alert.switchAlert())}})}deleteNotPostedPrev(e){this.cardsPreviewNotPosted=this.cardsPreviewNotPosted.filter((t,n)=>n!==e),this.themePutForm.patchValue({["pictures"+this.themeIndex]:this.cardsPreviewNotPosted})}changeCardBackPreview(e){this.cardBackStyle.backgroundImage=`url('${e}')`}readData(e){const t=new FileReader;return t.readAsDataURL(e),Q(t,"load").pipe((0,o.U)(e=>e.target.result))}displayCrop(e){const t=e+this.themeIndex;this.cropModal.setInfo({props:{type:t,pictures:this.themePutForm.value[t],opacity:.6,closeOnClick:!1,result:e=>{const{payload:t}=e;this.themePutForm.patchValue({[(e.type==="cardBack"+this.themeIndex?"cardBack":"pictures")+this.themeIndex]:t})}}})}postNewCards(e){"notPosted"===e&&this.addNotPosted(),"posted"===e&&this.editPosted()}editPosted(){this.isLoading.cardBack=!0;const e=this.themePutForm.value["cardBack"+this.themeIndex],t=new FormData;t.append("cardBack",e[0]),this.request.put("themes/"+this.theme._id,t).subscribe({next:e=>{this.cardBackChange=!1,this.themePutForm.patchValue({["cardBack"+this.themeIndex]:[]}),this.isLoading.cardBack=!1},error:e=>{}})}addNotPosted(){this.isLoading.pictures=!0;const e=this.themePutForm.value["pictures"+this.themeIndex],t=new FormData;e.forEach(e=>{t.append("pictures",e)}),this.request.put("themes/"+this.theme._id,t).subscribe({next:e=>{this.cardsPreviewNotPosted=[],this.themePutForm.patchValue({["pictures"+this.themeIndex]:[]}),this.cardsPreview=this.getPreview(e.images),this.isLoading.pictures=!1},error:e=>{}})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.O),c.Y36(a.c),c.Y36(d.s))},e.\u0275cmp=c.Xpm({type:e,selectors:[["delete-theme-item"]],inputs:{theme:"theme",themePutForm:"themePutForm",themeIndex:"themeIndex"},outputs:{onDelete:"onDelete"},decls:24,vars:18,consts:[[1,"deleteThemeItem"],[1,"deleteThemeItem_bar"],[3,"width","height","danger","click"],[1,"deleteThemeItem_pictureContainer"],[1,"deleteThemeItem_cardBack"],[1,"deleteThemeItem_cardBackContainer"],[1,"deleteThemeItem_picture",3,"ngStyle"],[3,"formGroup"],["labelValue","Modifier le dos de carte",3,"parentForm","controlName","width"],["class","deleteThemeItem_cardBackModify",4,"ngIf"],[1,"deleteThemeItem_setPreview"],[1,"deleteThemeItem_cardTop"],["labelValue","","filesAddText","",3,"width","parentForm","controlName","multiple"],[1,"fas","fa-plus"],["class","deleteThemeItem_picturesButtons",4,"ngIf"],[1,"deleteThemeItem_previewSoloContainer"],["pictureType","path",3,"picture","size","index","fileDelete",4,"ngFor","ngForOf"],["pictureType","blob",3,"picture","size","index","fileDelete",4,"ngFor","ngForOf"],[1,"deleteThemeItem_cardBackModify"],[3,"width","solo","click"],[1,"fas","fa-crop-alt"],[1,"deleteThemeItem_validationSpinn"],[3,"size","isDisplayed"],[1,"deleteThemeItem_picturesButtons"],[3,"width","height","click"],["pictureType","path",3,"picture","size","index","fileDelete"],["pictureType","blob",3,"picture","size","index","fileDelete"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h2"),c._uU(3),c.qZA(),c.TgZ(4,"reg-button",2),c.NdJ("click",function(){return t.delete()}),c._uU(5,"supprimer"),c.qZA(),c.qZA(),c.TgZ(6,"div",3),c.TgZ(7,"div",4),c.TgZ(8,"div",5),c.TgZ(9,"div",6),c.TgZ(10,"form",7),c._UZ(11,"reg-file",8),c.qZA(),c.qZA(),c.YNc(12,Y,7,6,"div",9),c.qZA(),c.qZA(),c.TgZ(13,"div",10),c.TgZ(14,"div",11),c.TgZ(15,"p"),c._uU(16,"Cartes"),c.qZA(),c.TgZ(17,"form",7),c.TgZ(18,"reg-file",12),c._UZ(19,"i",13),c.qZA(),c.qZA(),c.qZA(),c.YNc(20,j,7,6,"div",14),c.TgZ(21,"div",15),c.YNc(22,H,2,5,"pictures-preview",16),c.YNc(23,V,2,3,"pictures-preview",17),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(3),c.Oqu(t.theme.name),c.xp6(1),c.Q6J("width",140)("height",30)("danger",!0),c.xp6(5),c.Q6J("ngStyle",t.cardBackStyle),c.xp6(1),c.Q6J("formGroup",t.themePutForm),c.xp6(1),c.Q6J("parentForm",t.themePutForm)("controlName","cardBack"+t.themeIndex)("width",50),c.xp6(1),c.Q6J("ngIf",t.cardBackChange),c.xp6(5),c.Q6J("formGroup",t.themePutForm),c.xp6(1),c.Q6J("width",50)("parentForm",t.themePutForm)("controlName","pictures"+t.themeIndex)("multiple",!0),c.xp6(2),c.Q6J("ngIf",t.cardsPreviewNotPosted.length>0),c.xp6(2),c.Q6J("ngForOf",t.cardsPreview),c.xp6(1),c.Q6J("ngForOf",t.cardsPreviewNotPosted))},directives:[x.m,u.PC,r._Y,r.JL,r.sg,g,u.O5,u.sg,f.q,v.V],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.deleteThemeItem[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.deleteThemeItem[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#4ecdc4}.deleteThemeItem_validationSpinn[_ngcontent-%COMP%]{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:flex;justify-content:center;align-items:center}.deleteThemeItem_bar[_ngcontent-%COMP%]{border-radius:5px;display:flex;justify-content:space-between;align-items:center;width:100%;z-index:2;background-color:#ffe66d;box-shadow:0 2px 0 0 #47bdb5}.deleteThemeItem_bar[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.deleteThemeItem_pictureContainer[_ngcontent-%COMP%]{margin-top:-5px;width:100%;display:flex;flex-direction:column;justify-content:space-between}.deleteThemeItem_picture[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end;width:100px;height:100px;background-size:cover;border-radius:5px;box-shadow:2px 2px 0 0 #47bdb5;padding:5px}.deleteThemeItem_cardBack[_ngcontent-%COMP%]{z-index:1;background-color:#4ecdc4;padding:10px;display:flex}.deleteThemeItem_cardBackContainer[_ngcontent-%COMP%]{align-items:center;border-radius:5px}.deleteThemeItem_cardBackContainer[_ngcontent-%COMP%], .deleteThemeItem_picturesButtons[_ngcontent-%COMP%]{width:100%;background-color:#ffe66d;display:flex;justify-content:space-between}.deleteThemeItem_picturesButtons[_ngcontent-%COMP%]{border-radius:0 0 5px 5px}.deleteThemeItem_picturesButtons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.deleteThemeItem_cardBackModify[_ngcontent-%COMP%]{height:100%;width:calc(100% - 80px);display:flex;flex-direction:column}.deleteThemeItem_cardBackModify[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:5px}.deleteThemeItem_previewSolo[_ngcontent-%COMP%]{position:relative;display:flex;width:60px;height:60px;margin:5px;background-size:cover;border-radius:5px;box-shadow:2px 2px 0 0 #47bdb5}.deleteThemeItem_setPreview[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#4ecdc4;border-radius:0 0 5px 5px;padding:10px}.deleteThemeItem_previewSoloContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;position:relative}.deleteThemeItem_cardTop[_ngcontent-%COMP%]{z-index:2;padding:5px;border-radius:5px;background-color:#ffe66d;box-shadow:0 2px 0 0 #47bdb5;display:flex;align-items:center;justify-content:space-between}.deleteThemeItem_cardTop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4ecdc4;font-size:small}"]}),e})();function $(e,t){if(1&e){const e=c.EpF();c._UZ(0,"reg-spinner",5),c.TgZ(1,"delete-theme-item",6),c.NdJ("onDelete",function(t){return c.CHM(e),c.oxw(2).delete(t)}),c.qZA()}if(2&e){const e=c.oxw(),t=e.$implicit,n=e.index,i=c.oxw();c.Q6J("size",50)("isDisplayed",i.isLoading),c.xp6(1),c.Q6J("theme",t)("themeIndex",n)("themePutForm",i.themesPutForm.controls["theme"+n])}}function G(e,t){1&e&&c.YNc(0,$,2,5,"ng-template",4)}let X=(()=>{class e{constructor(e,t,n,i,r){this.request=e,this.alert=t,this.fb=n,this.gameParams=i,this.bigSpinner=r,this.themeIndexChange=new c.vpe,this.themeLength=new c.vpe,this.userThemes=[],this.themesPutForm=this.fb.group({}),this.isLoading=!1}ngOnInit(){this.getThemes(),this.bigSpinner.show("getThemes")}onSwiper(e){this.themeIndexChange.emit(e.realIndex+1)}onSwiperStart(e){this.themeIndexChange.emit(e.realIndex+1)}delete(e){this.isLoading=!0,this.request.delete("themes/"+e).subscribe({next:e=>{this.userThemes=this.userThemes.filter(t=>t._id!==e._id),this.gameParams.setTheme({}),this.isLoading=!1,this.alert.message="Theme correctement supprim\xe9",this.alert.switchAlert()},error:e=>{this.alert.message=e.error,this.alert.switchAlert()}})}getThemes(){this.request.get("themes/all").subscribe({next:e=>{this.userThemes=e,this.themeLength.emit(e.length),this.createForms(e),this.bigSpinner.hide("getThemes")},error:e=>{console.log(e)}})}createForms(e){let t={};e.forEach((e,n)=>{t=Object.assign(Object.assign({},t),{["theme"+n]:this.fb.group({["cardBack"+n]:[[]],["pictures"+n]:[[]]})})}),this.themesPutForm=this.fb.group(t)}trackByFn(e,t){return t._id}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(d.s),c.Y36(a.c),c.Y36(r.qu),c.Y36(q.t),c.Y36(B.L))},e.\u0275cmp=c.Xpm({type:e,selectors:[["delete-theme"]],inputs:{themeIndex:"themeIndex"},outputs:{themeIndexChange:"themeIndexChange",themeLength:"themeLength"},decls:4,vars:5,consts:[[1,"deleteTheme"],[1,"deleteTheme_container"],[3,"slidesPerView","spaceBetween","roundLengths","swiper","slideChange"],[4,"ngFor","ngForOf","ngForTrackBy"],["swiperSlide",""],[3,"size","isDisplayed"],[1,"deleteTheme_itemContainer",3,"theme","themeIndex","themePutForm","onDelete"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"swiper",2),c.NdJ("swiper",function(e){return t.onSwiperStart(e)})("slideChange",function(e){return t.onSwiper(e)}),c.YNc(3,G,1,0,void 0,3),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(2),c.Q6J("slidesPerView",1)("spaceBetween",10)("roundLengths",!0),c.xp6(1),c.Q6J("ngForOf",t.userThemes)("ngForTrackBy",t.trackByFn))},directives:[J.nF,u.sg,J.YC,f.q,E],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.deleteTheme[_ngcontent-%COMP%]{flex-direction:column;align-items:center;display:flex}.deleteTheme_container[_ngcontent-%COMP%]{align-items:center;height:100%;margin-bottom:75px;position:relative}.deleteTheme_container[_ngcontent-%COMP%], .deleteTheme_itemContainer[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.deleteTheme[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]{width:90%}"]}),e})();function K(e,t){if(1&e&&(c.TgZ(0,"div",5),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.AsE("",e.themePosition," / ",e.themeSize,"")}}function R(e,t){if(1&e&&(c.TgZ(0,"reg-button",6),c.TgZ(1,"div",7),c._uU(2),c._UZ(3,"i",8),c.qZA(),c.qZA()),2&e){const e=t.$implicit;c.Q6J("height",30)("width",150)("routerLink",e.link),c.xp6(2),c.hij(" ",e.value," ")}}const W=[{path:"",component:(()=>{class e{constructor(e){this.cdref=e,this.themesCrud=[{value:"Ajouter un theme",link:["/user/profile/themes/post"]}],this.themeSize=0}forceIndexChange(e){this.themePosition=e,this.cdref.detectChanges()}getThemeLength(e){this.themeSize=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(c.sBO))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-theme-landing"]],decls:7,vars:3,consts:[[1,"themeLanding"],[1,"themeLanding_wrapper"],["class","themeLanding_number",4,"ngIf"],[3,"height","width","routerLink",4,"ngFor","ngForOf"],[3,"themeIndex","themeIndexChange","themeLength"],[1,"themeLanding_number"],[3,"height","width","routerLink"],[1,"themeLanding_addButton"],[1,"fas","fa-plus"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2"),c._uU(2,"Mes Themes"),c.qZA(),c.TgZ(3,"div",1),c.YNc(4,K,3,2,"div",2),c.YNc(5,R,4,4,"reg-button",3),c.qZA(),c.TgZ(6,"delete-theme",4),c.NdJ("themeIndexChange",function(e){return t.forceIndexChange(e)})("themeLength",function(e){return t.getThemeLength(e)}),c.qZA(),c.qZA()),2&e&&(c.xp6(4),c.Q6J("ngIf",t.themeSize>0),c.xp6(1),c.Q6J("ngForOf",t.themesCrud),c.xp6(1),c.Q6J("themeIndex",t.themePosition))},directives:[u.O5,u.sg,X,x.m,i.rH],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.themeLanding[_ngcontent-%COMP%]{display:flex;flex-direction:column}.themeLanding[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{align-self:center;margin-bottom:10px}.themeLanding_wrapper[_ngcontent-%COMP%]{align-self:center;display:flex;justify-content:space-between;align-items:center;width:90%}.themeLanding_wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:10px}.themeLanding_wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;color:#4ecdc4;display:flex;align-items:center;justify-content:center}.themeLanding_addButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:5px}.themeLanding_number[_ngcontent-%COMP%]{background-color:#ffe66d;height:30px;border-radius:5px;display:flex;align-items:center;justify-content:center;width:50px}"]}),e})()},{path:"post",component:A}];let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Bz.forChild(W)],i.Bz]}),e})();var te=n(6684);let ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[ee,te.m,J.kz]]}),e})()}}]);