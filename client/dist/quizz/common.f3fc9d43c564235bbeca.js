(self.webpackChunkquizz=self.webpackChunkquizz||[]).push([[592],{568:(t,e,n)=>{"use strict";n.d(e,{H:()=>p});var o=n(639),i=n(665),s=n(8583),c=n(2481);function r(t,e){1&t&&o._UZ(0,"i",7)}function a(t,e){1&t&&o._UZ(0,"i",8)}function l(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",3),o.TgZ(1,"reg-button",4),o.NdJ("click",function(){return o.CHM(t),o.oxw().changeType()}),o.YNc(2,r,1,0,"i",5),o.YNc(3,a,1,0,"i",6),o.qZA(),o.qZA()}if(2&t){const t=o.oxw();o.xp6(1),o.Q6J("solo",!1),o.xp6(1),o.Q6J("ngIf","password"===t.type),o.xp6(1),o.Q6J("ngIf","text"===t.type)}}const d=function(t,e){return{regInput_validate:t,regInput_bindToButton:e}};let p=(()=>{class t{constructor(t){this.controlContainer=t,this.disabled=!1,this.width=0,this.placeholder="",this.validate=!1,this.solo=!0,this.type="text",this.style={},this.displayEye=!1}ngOnInit(){this.displayEye="password"===this.type&&!0,this.parentForm=this.controlContainer.control}changeType(){this.type="password"===this.type?"text":"password"}ngOnChanges(){this.style={width:this.width+"px"}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.gN))},t.\u0275cmp=o.Xpm({type:t,selectors:[["reg-input"]],inputs:{parentForm:"parentForm",parentControlName:"parentControlName",disabled:"disabled",width:"width",placeholder:"placeholder",validate:"validate",solo:"solo",type:"type"},features:[o.TTD],decls:3,vars:11,consts:[[1,"regInput",3,"formGroup"],[3,"ngStyle","formControlName","placeholder","ngClass"],["class","regInput_eyeButton",4,"ngIf"],[1,"regInput_eyeButton"],[3,"solo","click"],["class","fas fa-eye",4,"ngIf"],["class","fas fa-eye-slash",4,"ngIf"],[1,"fas","fa-eye"],[1,"fas","fa-eye-slash"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o._UZ(1,"input",1),o.YNc(2,l,4,3,"div",2),o.qZA()),2&t&&(o.Q6J("formGroup",e.parentForm),o.xp6(1),o.Q6J("ngStyle",e.style)("formControlName",e.parentControlName)("placeholder",e.placeholder)("ngClass",o.WLB(8,d,e.validate,!e.solo)),o.uIk("type",e.type)("disabled",e.disabled?"":null),o.xp6(1),o.Q6J("ngIf",e.displayEye))},directives:[i.JL,i.sg,i.Fj,s.PC,i.JJ,i.u,s.mk,s.O5,c.m],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.regInput[_ngcontent-%COMP%]{display:flex;border-radius:5px}.regInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;color:#4ecdc4;padding:10px;border:none;border-radius:5px;background-color:#ffe66d;transition:.3s}.regInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;background-color:#ffe66d;color:#4ecdc4!important}.regInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#47bdb5}.regInput_bindToButton[_ngcontent-%COMP%]{border-radius:5px 0 0 5px!important}.regInput_validate[_ngcontent-%COMP%]{box-shadow:2px 2px 0 0 #47bdb5;background-color:#4ecdc4!important;color:#fff!important}.regInput_validate[_ngcontent-%COMP%]:focus{background-color:#ffe66d!important}"]}),t})()},9362:(t,e,n)=>{"use strict";n.d(e,{L:()=>s});var o=n(6215),i=n(639);let s=(()=>{class t{constructor(){this.isDisplayed=new o.X(null)}switchModal(){this.isDisplayed.next(!this.isDisplayed.value)}getRegPopDisplay(){return this.isDisplayed}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5965:(t,e,n)=>{"use strict";n.d(e,{X:()=>g});var o=n(639),i=n(1597),s=n(5741),c=n(8583),r=n(2481);function a(t,e){if(1&t&&(o.TgZ(0,"p"),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Oqu(t.placeholder)}}function l(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",7),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw(2).sendValueToParent(e)}),o._uU(1),o.qZA()}if(2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t," ")}}function d(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"reg-button",8),o.NdJ("click",function(){return o.CHM(t).$implicit.action()}),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit,n=o.oxw(2);o.xp6(1),o.Q6J("label",t.label)("width",n.width)}}function p(t,e){if(1&t&&(o.TgZ(0,"div",4),o.YNc(1,l,2,1,"div",5),o.YNc(2,d,2,2,"div",6),o.qZA()),2&t){const t=o.oxw();o.Q6J("ngStyle",t.style)("@menuPop",void 0),o.xp6(1),o.Q6J("ngForOf",t.values),o.xp6(1),o.Q6J("ngForOf",t.buttons)}}let g=(()=>{class t{constructor(){this.values=[],this.choice="",this.width=0,this.buttons=[],this.placeholder="Faites votre choix",this.choiceChange=new o.vpe,this.displayOptions=!1,this.style={}}sendValueToParent(t){this.choice=t,this.choiceChange.emit(this.choice)}ngOnInit(){this.style={width:this.width+2+"px"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["reg-select"]],inputs:{values:"values",choice:"choice",width:"width",buttons:"buttons",placeholder:"placeholder"},outputs:{choiceChange:"choiceChange"},decls:6,vars:4,consts:[["clickOutside","",1,"regSelect",3,"ngStyle","clickOutside","click"],[1,"regSelect_text"],[4,"ngIf"],["class","regSelect_optionsWrapper",3,"ngStyle",4,"ngIf"],[1,"regSelect_optionsWrapper",3,"ngStyle"],["class","regSelect_options",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"regSelect_options",3,"click"],[3,"label","width","click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.NdJ("clickOutside",function(){return e.displayOptions=!1})("click",function(){return e.displayOptions=!e.displayOptions}),o.TgZ(1,"div",1),o.YNc(2,a,2,1,"p",2),o.TgZ(3,"p"),o._uU(4),o.qZA(),o.qZA(),o.YNc(5,p,3,4,"div",3),o.qZA()),2&t&&(o.Q6J("ngStyle",e.style),o.xp6(2),o.Q6J("ngIf",!e.choice),o.xp6(2),o.Oqu(e.choice),o.xp6(1),o.Q6J("ngIf",e.displayOptions))},directives:[s._,c.PC,c.O5,c.sg,r.m],styles:["[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.regSelect[_ngcontent-%COMP%]{border:none;position:relative;background-color:#4ecdc4;border-radius:5px;cursor:pointer}.regSelect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-weight:700;border-radius:5px}.regSelect[_ngcontent-%COMP%]:focus{outline:none}.regSelect_text[_ngcontent-%COMP%]{padding:10px}.regSelect_optionsWrapper[_ngcontent-%COMP%], .regSelect_text[_ngcontent-%COMP%]{background-color:#4ecdc4;border-radius:5px}.regSelect_optionsWrapper[_ngcontent-%COMP%]{position:absolute;z-index:10;top:40px;left:0}.regSelect_options[_ngcontent-%COMP%]{padding:10px;font-weight:700;color:#ffe66d}.regSelect_options[_ngcontent-%COMP%]:hover{background-color:#ffe66d;color:#4ecdc4;border-radius:5px}"],data:{animation:[i.JL]}}),t})()},9573:(t,e,n)=>{"use strict";n.d(e,{q:()=>r});var o=n(1597),i=n(639),s=n(8583);function c(t,e){if(1&t&&(i.TgZ(0,"div",1),i.TgZ(1,"div",2),i._UZ(2,"div",3),i._UZ(3,"div",3),i._UZ(4,"div",3),i._UZ(5,"div",3),i._UZ(6,"div",3),i._UZ(7,"div",3),i.qZA(),i.qZA()),2&t){const t=i.oxw();i.Q6J("@opacityAnim",void 0),i.xp6(1),i.Q6J("ngStyle",t.style)}}let r=(()=>{class t{constructor(){this.size=40,this.isDisplayed=!0,this.style={}}ngOnInit(){this.style={width:this.size+"px",height:this.size+"px"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["reg-spinner"]],inputs:{size:"size",isDisplayed:"isDisplayed"},decls:1,vars:1,consts:[["class","regSpinner",4,"ngIf"],[1,"regSpinner"],[1,"sk-chase",3,"ngStyle"],[1,"sk-chase-dot"]],template:function(t,e){1&t&&i.YNc(0,c,8,2,"div",0),2&t&&i.Q6J("ngIf",e.isDisplayed)},directives:[s.O5,s.PC],styles:['[_ngcontent-%COMP%]:root{--game-size:400px}@media screen and (max-width: 800px){[_ngcontent-%COMP%]:root{--game-size:100%}}.regSpinner[_ngcontent-%COMP%]{z-index:200;position:absolute;top:0;left:50%;height:100%;width:100%;transform:translateX(-50%);display:flex;justify-content:center;align-items:center;flex-direction:column}.regSpinner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#4ecdc4}.regSpinner[_ngcontent-%COMP%]   .sk-chase[_ngcontent-%COMP%]{position:relative;animation:sk-chase 2.5s linear infinite both}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s ease-in-out infinite both}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:before{content:"";display:block;width:25%;height:25%;background-color:#f7fff7;border-radius:100%;animation:sk-chase-dot-before 2s ease-in-out infinite both}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:first-child{animation-delay:-1.1s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(2){animation-delay:-1s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.9s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(4){animation-delay:-.8s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(5){animation-delay:-.7s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(6){animation-delay:-.6s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:first-child:before{animation-delay:-1.1s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(2):before{animation-delay:-1s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(3):before{animation-delay:-.9s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(4):before{animation-delay:-.8s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(5):before{animation-delay:-.7s}.regSpinner[_ngcontent-%COMP%]   .sk-chase-dot[_ngcontent-%COMP%]:nth-child(6):before{animation-delay:-.6s}@keyframes sk-chase{to{transform:rotate(1turn)}}@keyframes sk-chase-dot{80%,to{transform:rotate(1turn)}}@keyframes sk-chase-dot-before{50%{transform:scale(.4)}0%,to{transform:scale(1)}}'],data:{animation:[o.Z7]}}),t})()}}]);