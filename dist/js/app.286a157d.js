(function(e){function t(t){for(var a,l,o=t[0],s=t[1],u=t[2],c=0,d=[];c<o.length;c++)l=o[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function l(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7ff2b0b8"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=l(e);var u=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"024e":function(e,t,n){"use strict";n("7d48")},"0dcc":function(e,t,n){},"1f14":function(e,t,n){"use strict";n("34c5")},2147:function(e,t,n){},"34c5":function(e,t,n){},"3f16":function(e,t,n){},"49e8":function(e,t,n){"use strict";n("0dcc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],l=(n("5c0b"),n("2877")),o={},s=Object(l["a"])(o,r,i,!1,null,null,null),u=s.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"file"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.tableData},on:{"row-click":e.preview}},[n("el-table-column",{attrs:{type:"index",label:"#"}}),e._l(e.tableColumn,(function(e,t){return n("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"min-width":e.minWidth,width:e.width,"show-overflow-tooltip":!0,sortable:e.sortable,"default-sort":{prop:"fileName"}}})}))],2)],1)])},d=[],p=(n("ac1f"),n("1276"),n("5319"),{name:"File",components:{},data:function(){return{id:"",loading:!1,downloadLoading:!1,tableData:[],tableColumn:[{prop:"fileName",label:"文件名称",minWidth:"270",sortable:!0},{prop:"fileSize",label:"文件大小",minWidth:"85"},{prop:"fileType",label:"文件格式",minWidth:"80"},{prop:"rev",label:"版本",minWidth:"60"},{prop:"creator",label:"创建人",minWidth:"200"},{prop:"time",label:"创建时间",minWidth:"162"},{prop:"check",label:"签出人",minWidth:"70"},{prop:"date",label:"签出时间",minWidth:"162"}]}},created:function(){this.getFinalList()},mounted:function(){},methods:{getFinalList:function(){var e=this,t=location.href,n=t.split("&"),a=n[1].split("=");this.id=a[1];var r={id:a[1]};this.loading=!0,this.$http.get("/agile/view/getFileInfo",{params:r}).then((function(t){e.loading=!1,e.tableData=t.data}))},preview:function(e){var t=e.fileName;t=t.replace(/#/g,"jinghao");var n=this.$router.resolve({path:"/preview",query:{url:"http://192.168.2.90:8001/down/downFile/"+t+"?fileId="+e.fileId,fileName:e.fileName}}),a=n.href;window.open(a)},handlePreview:function(e){var t=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_API+"/plm-doc"+e.row.fileUrl,n=this.$router.resolve({path:"/preview",query:{url:t,fileName:e.row.fileName}}),a=n.href;window.open(a,"_blank")}}}),m=p,h=(n("1f14"),Object(l["a"])(m,f,d,!1,null,"3bf2f04e",null)),v=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"pre-view"},[n("h3",{staticClass:"h3"},[e._v("文件: "+e._s(e.fileName))]),e.url?["AllImageEtx"===e.fileStatus?n("image-view",{attrs:{url:e.url}}):e.pdfStatusObj.includes(e.fileStatus)?n("pdf-view",{attrs:{url:e.url}}):"AllOfficeEtx"===e.fileStatus?n("pdf-view",{attrs:{url:e.url,"ispdf-type":!0}}):"AllVideoEtx"===e.fileStatus?n("video-view",{attrs:{url:e.url}}):"AllAchieveEtx"===e.fileStatus?n("compress-view",{attrs:{"file-data":e.fileData}}):"AllXlsEtx"===e.fileStatus?n("xls-view",{attrs:{url:e.url}}):e._e()]:e._e()],2)},w=[],g=(n("99af"),n("caad"),n("2532"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img-wrap"},[n("el-card",[n("img",{attrs:{src:e.url}})])],1)}),x=[],y={name:"ImageView",props:{url:{type:String,default:""}}},_=y,j=(n("a7c3"),Object(l["a"])(_,g,x,!1,null,"97c5dd32",null)),E=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-wrap"},[n("el-card",[n("div",{ref:"mycanvas",attrs:{id:"mycanvas"}})])],1)},O=[],S=n("25c3"),A=n.n(S),P={name:"PdfView",components:{},props:{url:{type:String,default:""},ispdfType:{type:Boolean,default:!1}},mounted:function(){this.initFile()},methods:{getPage:function(e,t,n,a){var r=this;e.getPage(t).then((function(i){var l=n.offsetWidth/i.view[2],o=i.getViewport(l),s=document.createElement("canvas");s.width=o.width,s.height=o.height,n.appendChild(s);var u=s.getContext("2d"),c={canvasContext:u,transform:[1,0,0,1,0,0],viewport:o,intent:"print"};i.render(c).then((function(){t+=1,t<=a&&r.getPage(e,t,n,a)}))}))},initFile:function(){var e={pdfOpenParams:{scrollbars:"0",statusbar:"0"}};A.a.embed(this.url,"#mycanvas",e)}}},D=P,$=(n("024e"),Object(l["a"])(D,C,O,!1,null,"67f2e921",null)),N=$.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-wrap"},[n("el-card",[n("video",{staticClass:"video-js vjs-default-skin vjs-big-play-centered",attrs:{controls:"",autoplay:"muted",preload:"auto"}},[n("source",{attrs:{src:e.url}})])])],1)},V=[],T={name:"VideoView",components:{},props:{url:{type:String,default:""}}},L=T,F=(n("e5b3"),Object(l["a"])(L,k,V,!1,null,"317466c0",null)),z=F.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"compress-wrap"},[n("el-card",[n("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:e.treeData,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,r=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[r.children?n("i",{staticClass:"iconfont iconwenjianjia1"}):e._e(),e._v(e._s(a.label))])])}}])})],1)],1)},I=[],q=(n("4de4"),{name:"CompressView",props:{fileData:{type:Object,default:function(){}}},data:function(){return{url:"",filterText:"",treeData:[],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this.initFile()},methods:{initFile:function(){var e=this.fileData.treeData,t=[];for(var n in e)t.push({label:n,url:e[n]});var a=[{label:this.fileData.top,url:"",children:t}];this.treeData=a},filterNode:function(e,t){return!e||-1!==t.label.toUpperCase().indexOf(e.toUpperCase())},nodeClick:function(e){if(!e.children){var t=this.$router.resolve({path:"/preview",query:{url:e.url,fileName:e.label}}),n=t.href;window.open(n,"_self")}}}}),U=q,B=(n("bc06"),Object(l["a"])(U,W,I,!1,null,"d3772f96",null)),M=B.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xls-wrap"},[n("el-card",[n("iframe",{staticClass:"xls",attrs:{src:e.url}},[n("p",[e._v("您的浏览器不支持 iframe 标签。")])])])],1)},R=[],J={name:"XlsView",components:{},props:{url:{type:String,default:""}}},H=J,G=(n("ccbd"),Object(l["a"])(H,X,R,!1,null,"4331bb71",null)),K=G.exports,Q={name:"Preview",components:{ImageView:E,PdfView:N,VideoView:z,CompressView:M,XlsView:K},props:{},data:function(){return{fullscreenLoading:!1,fileName:this.$route.query.fileName,url:"",fileData:{},fileStatus:"",pdfStatusObj:["AllTxtEtx","AllCADEtx"]}},mounted:function(){this.getFileData()},methods:{getFileData:function(){var e=this,t=this.$route.query.url,n=this.$route.query.fileName.split("."),a=".".concat(n[n.length-1]),r=[".pdf",".doc",".docx",".pptx",".ppt"],i=[".jpg",".png",".gif",".bmp",".heic",".jpeg"],l=[".dwg",".dxf"],o=[".xls",".xlsx"],s=[".tar.gz",".tar.bzip2",".tar.xz",".zip",".rar",".tar",".7z","br",".bz2",".lz4",".sz",".xz",".zstd"],u=[".txt",".java",".php",".py",".md",".js",".css",".xml",".log",".json",".html",".svg",".vue"],c=[".mp4",".webm",".ogg"],f=[].concat(r,i,l,s,u,c,o),d="arraybuffer";if(f.includes(a)){s.includes(a)&&(d="json"),this.fullscreenLoading=!0;var p=new FormData;p.append("url",t),this.$http({method:"post",url:"/plm-doc/api/plmfile",headers:{"Content-type":"application/x-www-form-urlencoded"},responseType:d,data:p}).then((function(t){e.fullscreenLoading=!1;var n=[];n.push(t.data);var f="";r.includes(a)?(e.fileStatus="AllOfficeEtx",f="application/pdf"):i.includes(a)?(e.fileStatus="AllImageEtx",f="image/png"):l.includes(a)?(e.fileStatus="AllCADEtx",f="application/pdf"):s.includes(a)?(e.fileStatus="AllAchieveEtx",f="contentType",e.fileData=t.data.Data):u.includes(a)?(e.fileStatus="AllTxtEtx",f="application/pdf;charset=utf-8"):c.includes(a)?(e.fileStatus="AllVideoEtx",f="video/mp4"):o.includes(a)&&(e.fileStatus="AllXlsEtx",f="application/pdf"),e.url=window.URL.createObjectURL(new Blob(n,{type:f}))})).catch((function(){e.fullscreenLoading=!1}))}else this.$message.error("不支持此类型文件预览")}}},Y=Q,Z=(n("49e8"),Object(l["a"])(Y,b,w,!1,null,"6607416a",null)),ee=Z.exports;a["default"].use(c["a"]);var te=[{path:"/",name:"Home",component:v},{path:"/preview",name:"Preview",component:ee},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ne=new c["a"]({mode:"history",base:"/",routes:te}),ae=ne,re=n("a7e7"),ie=n.n(re),le=(n("f221"),n("bc3a")),oe=n.n(le);a["default"].config.productionTip=!1,a["default"].use(ie.a),a["default"].prototype.$http=oe.a,new a["default"]({router:ae,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7d48":function(e,t,n){},"9c0c":function(e,t,n){},a7c3:function(e,t,n){"use strict";n("b5bb")},b5bb:function(e,t,n){},bc06:function(e,t,n){"use strict";n("2147")},ccbd:function(e,t,n){"use strict";n("e36a")},e36a:function(e,t,n){},e5b3:function(e,t,n){"use strict";n("3f16")}});
//# sourceMappingURL=app.286a157d.js.map