(function(e){function t(t){for(var r,l,o=t[0],s=t[1],u=t[2],c=0,p=[];c<o.length;c++)l=o[c],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function l(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7678f39b"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=l(e);var u=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}a[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var f=u;i.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("56d7")},2:function(e,t){},2147:function(e,t,n){},3:function(e,t){},"3f16":function(e,t,n){},4:function(e,t){},"4f23":function(e,t,n){},5:function(e,t){},5291:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],l=(n("5c0b"),n("2877")),o={},s=Object(l["a"])(o,a,i,!1,null,null,null),u=s.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"file"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.tableData},on:{"row-click":e.preview}},[n("el-table-column",{attrs:{type:"index",label:"#"}}),e._l(e.tableColumn,(function(e,t){return n("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"min-width":e.minWidth,width:e.width,"show-overflow-tooltip":!0,sortable:e.sortable,"default-sort":{prop:"fileName"}}})}))],2)],1)])},p=[],d=(n("ac1f"),n("841c"),n("1276"),n("5319"),{name:"File",components:{},data:function(){return{inputVal:"",id:"",loading:!1,downloadLoading:!1,tableData:[],tableColumn:[{prop:"fileName",label:"文件名称",minWidth:"270",sortable:!0},{prop:"fileSize",label:"文件大小",minWidth:"85"},{prop:"fileType",label:"文件格式",minWidth:"80"},{prop:"rev",label:"版本",minWidth:"60"},{prop:"creator",label:"创建人",minWidth:"200"},{prop:"time",label:"创建时间",minWidth:"162"},{prop:"check",label:"签出人",minWidth:"70"},{prop:"date",label:"签出时间",minWidth:"162"}]}},created:function(){},mounted:function(){this.getFinalList()},methods:{previewTest:function(){var e=this.$router.resolve({path:"/preview",query:{url:"http://121.227.30.214:8102/plm-doc/sys/download/fty583f4edp43eqtuved-1_阀组基座.DWG-2020-05-24-22-33-05-602.dwg",fileName:this.inputVal}}),t=e.href;window.open(t)},getUrlParams:function(e){var t,n=window.location.search;if(1==n.indexOf("?"))return!1;n=n.substr(1),n=n.split("&"),e=e||"";for(var r=0;r<n.length;r++){var a=n[r].split("="),i={};i[a[0]]=decodeURI(a[1]),n[r]=i}if(e)for(var l=0;l<n.length;l++)for(var o in n[l])o==e&&(t=n[l][o]);else t=n;return t},getFinalList:function(){var e=this,t={itemNumber:this.getUrlParams("agile.1001")||"",itemChangeNumber:this.getUrlParams("agile.1014")||"",changeNumber:this.getUrlParams("agile.1047")||""};this.loading=!0,this.$http.get("/agile/view/getFileInfo",{params:t}).then((function(t){e.loading=!1,e.tableData=t.data})).catch((function(){e.loading=!1}))},preview:function(e){var t=e.fileName;t=t.replace(/#/g,"jinghao");var n=this.$router.resolve({path:"/preview",query:{url:"http://192.168.2.90:8001/down/downFile/"+t+"?fileId="+e.fileId,fileName:e.fileName}}),r=n.href;window.open(r)}}}),m=d,h=(n("c72f"),Object(l["a"])(m,f,p,!1,null,"f08a9f44",null)),v=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"pre-view"},[n("h3",{staticClass:"h3"},[e._v("文件: "+e._s(e.fileName))]),e.url?[e.pdfStatusObj.includes(e.fileStatus)?n("pdf-view",{attrs:{url:e.url}}):"AllVideoEtx"===e.fileStatus?n("video-view",{attrs:{url:e.url}}):"AllAchieveEtx"===e.fileStatus?n("compress-view",{attrs:{"file-data":e.fileData}}):e._e()]:e._e()],2)},g=[],w=n("1da1"),x=(n("96cf"),n("a15b"),n("d81d"),n("99af"),n("caad"),n("2532"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-wrap"},[n("el-card",e._l(e.numPages,(function(t){return n("pdf",{key:t,staticClass:"pdfStyle",attrs:{src:e.url,page:t}})})),1)],1)}),y=[],j=n("858e"),_={name:"PdfView",components:{pdf:j["a"]},props:{url:{type:String,default:""}},data:function(){return{numPages:""}},created:function(){this.getNumPages()},methods:{getNumPages:function(){var e=this,t=j["a"].createLoadingTask(this.url);t.promise.then((function(t){e.numPages=t.numPages})).catch((function(){console.error("pdf加载失败")}))}}},O=_,P=(n("5c73"),Object(l["a"])(O,x,y,!1,null,"60c53fc8",null)),S=P.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-wrap"},[n("el-card",[n("video",{staticClass:"video-js vjs-default-skin vjs-big-play-centered",attrs:{controls:"",autoplay:"muted",preload:"auto"}},[n("source",{attrs:{src:e.url}})])])],1)},E=[],k={name:"VideoView",components:{},props:{url:{type:String,default:""}}},A=k,N=(n("e5b3"),Object(l["a"])(A,C,E,!1,null,"317466c0",null)),D=N.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"compress-wrap"},[n("el-card",[n("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:e.treeData,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,a=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[a.children?n("i",{staticClass:"iconfont iconwenjianjia1"}):e._e(),e._v(e._s(r.label))])])}}])})],1)],1)},T=[],L=(n("4de4"),{name:"CompressView",props:{fileData:{type:Object,default:function(){}}},data:function(){return{url:"",filterText:"",treeData:[],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.initFile()},methods:{initFile:function(){var e=this.fileData.treeData,t=[];for(var n in e)t.push({label:n,url:e[n]});var r=[{label:this.fileData.top,url:"",children:t}];this.treeData=r},filterNode:function(e,t){return!e||-1!==t.label.toUpperCase().indexOf(e.toUpperCase())},nodeClick:function(e){if(!e.children){var t=this.$router.resolve({path:"/preview",query:{url:e.url,fileName:e.label}}),n=t.href;window.open(n,"_self")}}}}),U=L,z=(n("bc06"),Object(l["a"])(U,$,T,!1,null,"d3772f96",null)),V=z.exports,W={name:"Preview",components:{PdfView:S,VideoView:D,CompressView:V},props:{},data:function(){return{fullscreenLoading:!1,fileName:this.$route.query.fileName,url:"",fileData:{},fileStatus:"",pdfStatusObj:["AllTxtEtx","AllCADEtx","AllOfficeEtx","AllXlsEtx","AllImageEtx"]}},mounted:function(){this.getFileData()},methods:{getUrlParams:function(e){var t,n=window.location.search;if(1==n.indexOf("?"))return!1;n=n.substr(1),n=n.split("&"),e=e||"";for(var r=0;r<n.length;r++){var a=n[r].split("="),i={};i[a[0]]=decodeURI(a[1]),n[r]=i}if(e)for(var l=0;l<n.length;l++)for(var o in n[l])o==e&&(t=n[l][o]);else t=n;return t},getFileData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,l,o,s,u,c,f,p,d,m,h,v,b,g,w,x,y,j,_,O,P,S,C;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.fullscreenLoading=!0,n={currentUser:e.getUrlParams("agile.userName")},t.next=4,e.$http.get("/agile/view/getWatermarkAndSignInfo",{params:n});case 4:if(r=t.sent.data,a=r.location,i=r.show,l=r.fontSize,o=r.showManner,s=r.tileManner,u=r.color,c=r.transparency,f=r.remark,p=r.isSign,d=a+"&&"+i+"&&http://192.168.2.90:8001/down/downSignFile",m=l+"&&"+o+"&&"+s+"&&"+u.split(",").map((function(e){return e.replace(/[^0-9]/gi,"")})).join("#")+"&&"+c/100+"&&"+"".concat(f),h=e.$route.query.url,v=e.$route.query.fileName.split("."),b=".".concat(v[v.length-1]),g=[".pdf",".doc",".docx",".pptx",".ppt"],w=[".jpg",".png",".gif",".bmp",".heic",".jpeg"],x=[".dwg",".dxf",".DWG"],y=[".xls",".xlsx"],j=[".tar.gz",".tar.bzip2",".tar.xz",".zip",".rar",".tar",".7z","br",".bz2",".lz4",".sz",".xz",".zstd"],_=[".txt",".java",".php",".py",".md",".js",".css",".xml",".log",".json",".html",".svg",".vue"],O=[".mp4",".webm",".ogg"],P=[].concat(g,w,x,j,_,O,y),S="arraybuffer",P.includes(b)){t.next=25;break}return e.$message.error("不支持此类型文件预览"),t.abrupt("return");case 25:j.includes(b)&&(S="json");case 26:C=new FormData,C.append("url",h),"1"===p&&C.append("extra1",d),C.append("extra2",m),e.$http({method:"post",url:"/api/plmfile",headers:{"Content-type":"application/x-www-form-urlencoded"},responseType:S,data:C}).then((function(t){e.fullscreenLoading=!1;var n=[];n.push(t.data);var r="";g.includes(b)?(e.fileStatus="AllOfficeEtx",r="application/pdf"):w.includes(b)?(e.fileStatus="AllImageEtx",r="application/pdf"):x.includes(b)?(e.fileStatus="AllCADEtx",r="application/pdf"):j.includes(b)?(e.fileStatus="AllAchieveEtx",r="contentType",e.fileData=t.data):_.includes(b)?(e.fileStatus="AllTxtEtx",r="application/pdf;charset=utf-8"):O.includes(b)?(e.fileStatus="AllVideoEtx",r="video/mp4"):y.includes(b)&&(e.fileStatus="AllXlsEtx",r="application/pdf"),e.url=window.URL.createObjectURL(new Blob(n,{type:r}))})).catch((function(){e.fullscreenLoading=!1}));case 31:case"end":return t.stop()}}),t)})))()}}},F=W,q=(n("b73b"),Object(l["a"])(F,b,g,!1,null,"72029c40",null)),I=q.exports;r["default"].use(c["a"]);var M=[{path:"/",name:"Home",component:v},{path:"/preview",name:"Preview",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],R=new c["a"]({mode:"history",base:"/",routes:M}),G=R,J=n("a7e7"),X=n.n(J),B=(n("f221"),n("bc3a")),H=n.n(B);r["default"].config.productionTip=!1,r["default"].use(X.a),r["default"].prototype.$http=H.a,new r["default"]({router:G,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c73":function(e,t,n){"use strict";n("4f23")},6:function(e,t){},"632b":function(e,t,n){},"9c0c":function(e,t,n){},b73b:function(e,t,n){"use strict";n("632b")},bc06:function(e,t,n){"use strict";n("2147")},c72f:function(e,t,n){"use strict";n("5291")},e5b3:function(e,t,n){"use strict";n("3f16")}});
//# sourceMappingURL=app.4b781468.js.map