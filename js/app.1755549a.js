(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/test_task_outside_digital/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("button",{staticClass:"btn",on:{click:function(e){t.modalFirst=!t.modalFirst}}},[t._v(" Налоговый вычет ")]),a("modals",{directives:[{name:"show",rawName:"v-show",value:t.modalFirst,expression:"modalFirst"}],attrs:{title:"First modal"},on:{close:function(e){t.modalFirst=!1}}},[a("div",{staticClass:"body-wrapper",attrs:{slot:"body"},slot:"body"},[a("p",{staticClass:"text-info"},[t._v(" Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода. ")]),a("label",{staticClass:"title"},[t._v("Ваша зарплата в месяц")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.salary,expression:"salary",modifiers:{number:!0}}],staticClass:"salary",attrs:{type:"number",placeholder:"Введите данные",title:"Введите значение больше или равное 12 792 руб (Размер МРОТ в 2021 году)"},domProps:{value:t.salary},on:{input:function(e){e.target.composing||(t.salary=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("button",{staticClass:"title calc",attrs:{disabled:t.isDisabledBtn},on:{click:t.calcSizePayoff}},[t._v(" Рассчитать ")]),t.visible?a("div",{staticClass:"calculation"},[a("p",{staticClass:"title"},[t._v("Итого можете внести в качестве досрочных:")]),a("div",{staticClass:"checkboxes__wrapper"},t._l(t.arrPayoff,(function(e,n){return a("div",{key:n,staticClass:"checkboxes-item",attrs:{id:e.year}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkboxValue[n],expression:"checkboxValue[index]"}],attrs:{name:"checkboxPayoff",type:"checkbox"},domProps:{checked:Array.isArray(t.checkboxValue[n])?t._i(t.checkboxValue[n],null)>-1:t.checkboxValue[n]},on:{change:function(e){var a=t.checkboxValue[n],r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);r.checked?o<0&&t.$set(t.checkboxValue,n,a.concat([i])):o>-1&&t.$set(t.checkboxValue,n,a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.checkboxValue,n,s)}}}),a("label",[a("span",[t._v(" "+t._s(e.sumPayoff)+" рублей ")]),t._v(" в "+t._s(e.year)+t._s(e.ending)+" год ")])])})),0)]):t._e(),a("div",{staticClass:"switch__wrapper"},[a("p",{staticClass:"title"},[t._v("Что уменьшаем?")]),a("button",{staticClass:"switch active"},[t._v("Платёж")]),a("button",{staticClass:"switch"},[t._v("Срок")])]),a("button",{staticClass:"btnPrimary",on:{click:function(e){t.modalFirst=!1}}},[t._v(" Добавить ")])])])],1)])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal__wrapper",on:{click:function(e){return t.$emit("close")}}},[a("div",{staticClass:"modal-content",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-title"},[t._v(" Налоговый вычет ")]),a("span",{staticClass:"button-close",on:{click:function(e){return t.$emit("close")}}},[t._v("×")])]),a("div",{staticClass:"modal-body"},[t._t("body")],2)])])])],1)},o=[],c={props:{title:{type:String,required:!0}},data:function(){return{}},mounted:function(){var t=this;document.body.addEventListener("keyup",(function(e){"escape"===e.key&&t.$emit("close")}))}},l=c,u=(a("c1b3"),a("2877")),f=Object(u["a"])(l,i,o,!1,null,"ec5c3734",null),d=f.exports,p=26e4,v={name:"App",components:{modals:d},data:function(){return{visible:!1,modalFirst:!1,checkboxValue:[],salary:"",arrPayoff:[],years:null}},computed:{isDisabledBtn:function(){return!(this.salary>12791)},inputSalary:function(){var t=this.salary,e=12*t*.13;return e}},methods:{calcSizePayoff:function(){this.createTablePayoff(this.inputSalary)},createTablePayoff:function(t){this.visible=!0;for(var e=Math.ceil(p/t),a=0,n=0;n<=e;++n){var r={year:n+1,ending:"",sumPayoff:""},s=n+1;if(r.year=s,a<p){var i=p-a;if(i<t){r.sumPayoff=i,r.ending=this.declOfNum(s),this.arrPayoff.push(r);break}}a+=t,r.sumPayoff=t,r.ending=this.declOfNum(s),this.arrPayoff.push(r)}},declOfNum:function(t){var e=["-ый","-ой","-ий"];return 1===t||4===t||5===t||t>9&&t<20?e[0]:2===t||t>5&&t<9?e[1]:3===t?e[2]:e[1]}}},b=v,m=(a("cf25"),Object(u["a"])(b,r,s,!1,null,null,null)),y=m.exports,h=a("1dce"),_=a.n(h);n["a"].use(_.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")},"589d":function(t,e,a){},c1b3:function(t,e,a){"use strict";a("589d")},cf25:function(t,e,a){"use strict";a("fea6")},fea6:function(t,e,a){}});