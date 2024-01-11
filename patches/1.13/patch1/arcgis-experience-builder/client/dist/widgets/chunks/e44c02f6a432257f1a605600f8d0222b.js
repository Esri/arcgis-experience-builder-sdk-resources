"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[84299,71786,23110,22486],{64033:(e,t,r)=>{r.d(t,{a:()=>a,e:()=>n,u:()=>u});var i=r(47817);r(58574);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i.Z)([(0,i._)({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=(0,i.Z)([(0,i.a0)("esri.layers.mixins.CustomParametersMixin")],t),t},s=new i.aq({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let o=class extends i.ao{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=s.toJSON(e)}writePrototype(e,t){t.prototype=(0,i.aa)((0,i.R)(e),!0)}writeThumbnail(e,t){t.thumbnail=(0,i.aa)((0,i.R)(e))}};(0,i.Z)([(0,i._)({json:{write:!0}})],o.prototype,"name",void 0),(0,i.Z)([(0,i._)({json:{write:!0}})],o.prototype,"description",void 0),(0,i.Z)([(0,i._)({json:{read:s.read,write:s.write}})],o.prototype,"drawingTool",void 0),(0,i.Z)([(0,i.aj)("drawingTool")],o.prototype,"writeDrawingTool",null),(0,i.Z)([(0,i._)({json:{write:!0}})],o.prototype,"prototype",void 0),(0,i.Z)([(0,i.aj)("prototype")],o.prototype,"writePrototype",null),(0,i.Z)([(0,i._)({json:{write:!0}})],o.prototype,"thumbnail",void 0),(0,i.Z)([(0,i.aj)("thumbnail")],o.prototype,"writeThumbnail",null),o=(0,i.Z)([(0,i.a0)("esri.layers.support.FeatureTemplate")],o);var a=o;let l=class extends i.ao{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r in e)if(e.hasOwnProperty(r)){const n=e[r];switch(n.type){case"range":t[r]=i.c2.fromJSON(n);break;case"codedValue":t[r]=i.c1.fromJSON(n);break;case"inherited":t[r]=i.c0.fromJSON(n)}}return t}writeDomains(e,t){const r={};for(const t in e)e.hasOwnProperty(t)&&(r[t]=e[t]&&e[t].toJSON());(0,i.aa)(r),t.domains=r}readTemplates(e){return e&&e.map((e=>new a(e)))}writeTemplates(e,t){t.templates=e&&e.map((e=>e.toJSON()))}};(0,i.Z)([(0,i._)({json:{write:!0}})],l.prototype,"id",void 0),(0,i.Z)([(0,i._)({json:{write:!0}})],l.prototype,"name",void 0),(0,i.Z)([(0,i._)({json:{write:!0}})],l.prototype,"domains",void 0),(0,i.Z)([(0,i.ab)("domains")],l.prototype,"readDomains",null),(0,i.Z)([(0,i.aj)("domains")],l.prototype,"writeDomains",null),(0,i.Z)([(0,i._)({json:{write:!0}})],l.prototype,"templates",void 0),(0,i.Z)([(0,i.ab)("templates")],l.prototype,"readTemplates",null),(0,i.Z)([(0,i.aj)("templates")],l.prototype,"writeTemplates",null),l=(0,i.Z)([(0,i.a0)("esri.layers.support.FeatureType")],l);var u=l},83132:(e,t,r)=>{function i(e){return"date"===e.type||"esriFieldTypeDate"===e.type}r.d(t,{e:()=>n});class n{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const r of e){const e=r&&r.name;if(e){const n=s(e);this._fieldsMap.set(e,r),this._fieldsMap.set(n,r),t.push(n),i(r)&&(this.dateFields.push(r),this._dateFieldsSet.add(r))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(s(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}function s(e){return e.toLowerCase().trim()}},60587:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var i=r(47817),n=(r(58574),r(7390)),s=r(19601),o=r(3467),a=r(89300),l=r(52067),u=r(19904),c=r(45914),p=r(44459),f=r(95967);r(68700),r(86977),r(55820),r(69764),r(74970),r(18608),r(29156),r(72304),r(64646),r(21693),r(37085),r(44386),r(3271),r(23110),r(19026),r(94474),r(77639),r(18204),r(89289),r(54100),r(22486),r(50542),r(64033),r(72124),r(24905),r(34970),r(5560),r(33102),r(22649),r(88659),r(76791),r(36238),r(62268),r(86519),r(30286),r(23723),r(79367);const d=i.ae.ofType(i.an);i.S.getLogger("esri.support.GraphicsCollection");let y=class extends d{constructor(e){super(e),this.on("before-add",(e=>{e.item||e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(({item:e})=>{e.layer=null}))}destroy(){this._unownAll()}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())}_createNewInstance(e){return new d(e)}_ownAll(){this.items.forEach((e=>this._own(e)))}_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_unownAll(){this.items.forEach((e=>this._unown(e)))}_unown(e){e.layer===this.owner&&(e.layer=null)}};(0,i.Z)([(0,i._)()],y.prototype,"owner",null),y=(0,i.Z)([(0,i.a0)("esri.support.GraphicsCollection")],y);var h=y;let m=class extends((0,l.t)((0,c.s)(n.b))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new h,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,i.Z)([(0,i._)({type:o.x})],m.prototype,"elevationInfo",void 0),(0,i.Z)([(0,i._)(((e="graphics")=>({type:y,cast:i.du,set(t){const r=(0,i.af)(t,this._get(e),y);r.owner=this,this._set(e,r)}}))())],m.prototype,"graphics",void 0),(0,i.Z)([(0,i._)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,i.Z)([(0,i._)()],m.prototype,"screenSizePerspectiveEnabled",void 0),(0,i.Z)([(0,i._)({readOnly:!0})],m.prototype,"type",void 0),(0,i.Z)([(0,i._)({constructOnly:!0})],m.prototype,"internal",void 0),m=(0,i.Z)([(0,i.a0)("esri.layers.GraphicsLayer")],m);var g=m;function b(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const v=new i.E({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),w=new i.E({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let _=class extends g{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,i.Z)([(0,i._)({readOnly:!0})],_.prototype,"sublayers",null),(0,i.Z)([(0,i._)()],_.prototype,"layer",void 0),(0,i.Z)([(0,i._)({readOnly:!0})],_.prototype,"visibilityMode",void 0),_=(0,i.Z)([(0,i.a0)("esri.layers.MapNotesLayer.MapNotesSublayer")],_);const S=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new i.a).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new i.d).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new i.y).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new i.y).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new i.e).toJSON()}];let x=class extends((0,l.t)((0,c.s)((0,o.l)((0,u.u)((0,n.l)(n.b)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=i.O.WGS84,this.sublayers=new i.ae(S.map((e=>new _({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!b(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!b(t))return null;const n=t.layers.map((e=>{const t=new p.k;return t.read(e,r),t}));return new i.ae({items:n})}readLegacyfeatureCollectionJSON(e,t){return b(t)?(0,i.R)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new i.M({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:i.O.WGS84});const r=i.O.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?i.M.fromJSON(r).union(e):e}),new i.M({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?i.O.fromJSON(t.layers[0].layerDefinition.spatialReference):i.O.WGS84}readSublayers(e,t,r){if(b(t))return null;const n=[];for(let e=0;e<t.layers.length;e++){var s;const{layerDefinition:r,featureSet:o}=t.layers[e],a=null!=(s=r.geometryType)?s:o.geometryType,l=S.find((e=>{var t,i,n;return a===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(i=t.renderer)||null==(n=i.symbol)?void 0:n.type)===e.identifyingSymbol.type}));if(l){const e=new _({id:l.layerId,title:r.name,layer:this,graphics:o.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:n})=>i.an.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:n})))});n.push(e)}}return new i.ae(n)}writeSublayers(e,t,r,n){const{minScale:s,maxScale:o}=this;if((0,i.t)(e))return;const a=e.some((e=>e.graphics.length>0));var l;if(!this.capabilities.operations.supportsMapNotesEditing)return void(a&&(null==n||null==(l=n.messages)||l.push(new i.s("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const u=[];let c=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,i.H)(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const t of S){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(u,r,t,s,o,c,n)}(0,i.bG)("featureCollection.layers",u,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,i.R)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,i.t)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const n of r.graphics)if((0,i.H)(n.geometry)){const r=n.geometry;e?(0,i.bf)(r.spatialReference,e)||((0,s.n)(r.spatialReference,e)||(0,s.V)()||await(0,s.D)(),n.geometry=(0,s.H)(r,e)):e=r.spatialReference,t.push(n)}const r=await(0,a.L)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return(0,i.t)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,n,s,o,a){const l=[];if(!(0,i.t)(t)){for(const e of t.graphics)this._writeMapNote(l,e,r.geometryType,a);this._normalizeObjectIds(l,v),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,i.R)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:n,maxScale:s,objectIdField:"OBJECTID",fields:[v.toJSON(),w.toJSON()],spatialReference:o},featureSet:{features:l,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,n){if((0,i.t)(t))return;const{geometry:s,symbol:o,popupTemplate:a}=t;if((0,i.t)(s))return;var l,u;if(s.type!==r)return void(null==n||null==(l=n.messages)||l.push(new i.aN("map-notes-layer:invalid-geometry-type",`Geometry "${s.type}" cannot be saved in "${r}" layer`,{graphic:t})));if((0,i.t)(o))return void(null==n||null==(u=n.messages)||u.push(new i.aN("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const c={attributes:{...t.attributes},geometry:s.toJSON(),symbol:o.toJSON()};(0,i.H)(a)&&(c.popupInfo=a.toJSON()),e.push(c)}_normalizeObjectIds(e,t){const r=t.name;let i=(0,f.n)(r,e)+1;const n=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||n.has(e[r]))&&(e[r]=i++),n.add(e[r])}}};(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"capabilities",void 0),(0,i.Z)([(0,i.ab)(["portal-item","web-map"],"capabilities",["layers"])],x.prototype,"readCapabilities",null),(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"featureCollections",void 0),(0,i.Z)([(0,i.ab)(["web-map","portal-item"],"featureCollections",["layers"])],x.prototype,"readFeatureCollections",null),(0,i.Z)([(0,i._)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],x.prototype,"featureCollectionJSON",void 0),(0,i.Z)([(0,i.ab)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],x.prototype,"readLegacyfeatureCollectionJSON",null),(0,i.Z)([(0,i._)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],x.prototype,"featureCollectionType",void 0),(0,i.Z)([(0,i._)({json:{write:!1}})],x.prototype,"fullExtent",void 0),(0,i.Z)([(0,i.ab)(["web-map","portal-item"],"fullExtent",["layers"])],x.prototype,"readFullExtent",null),(0,i.Z)([(0,i._)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],x.prototype,"legendEnabled",void 0),(0,i.Z)([(0,i._)({type:["show","hide"]})],x.prototype,"listMode",void 0),(0,i.Z)([(0,i._)({type:Number,nonNullable:!0,json:{write:!1}})],x.prototype,"minScale",void 0),(0,i.Z)([(0,i.ab)(["web-map","portal-item"],"minScale",["layers"])],x.prototype,"readMinScale",null),(0,i.Z)([(0,i._)({type:Number,nonNullable:!0,json:{write:!1}})],x.prototype,"maxScale",void 0),(0,i.Z)([(0,i.ab)(["web-map","portal-item"],"maxScale",["layers"])],x.prototype,"readMaxScale",null),(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"multipointLayer",null),(0,i.Z)([(0,i._)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],x.prototype,"operationalLayerType",void 0),(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"pointLayer",null),(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"polygonLayer",null),(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"polylineLayer",null),(0,i.Z)([(0,i._)({type:i.O})],x.prototype,"spatialReference",void 0),(0,i.Z)([(0,i.ab)(["web-map","portal-item"],"spatialReference",["layers"])],x.prototype,"readSpatialReference",null),(0,i.Z)([(0,i._)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],x.prototype,"sublayers",void 0),(0,i.Z)([(0,i.ab)("web-map","sublayers",["layers"])],x.prototype,"readSublayers",null),(0,i.Z)([(0,i.aj)("web-map","sublayers")],x.prototype,"writeSublayers",null),(0,i.Z)([(0,i._)({readOnly:!0})],x.prototype,"textLayer",null),(0,i.Z)([(0,i._)()],x.prototype,"title",void 0),(0,i.Z)([(0,i._)({readOnly:!0,json:{read:!1}})],x.prototype,"type",void 0),x=(0,i.Z)([(0,i.a0)("esri.layers.MapNotesLayer")],x);const O=x},18204:(e,t,r)=>{r.d(t,{i:()=>s,s:()=>n});var i=r(47817);class n{constructor(e,t,r){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",r&&(this._storage.registerRemoveFunc(this._namespace,r),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,r,i=0){this._storage.put(this._namespace+e,t,r,i)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,r){this._storage.updateSize(this._namespace+e,t,r)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class s{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.b5,this._users=new i.b5}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,r,i){const n=this._db.get(e);if(n&&(this._size-=n.size,this._db.delete(e),n.entry!==t&&this._notifyRemoved(e,n.entry)),r>this._maxSize)return void this._notifyRemoved(e,t);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return void console.warn("Refusing to cache entry with invalid size "+r);const s=1+Math.max(i,-3)- -3;this._db.set(e,{entry:t,size:r,lifetime:s,lives:s}),this._size+=r,this._checkSizeLimit()}updateSize(e,t,r){const i=this._db.get(e);if(i&&i.entry===t){if(this._size-=i.size,r>this._maxSize)return this._db.delete(e),void this._notifyRemoved(e,t);i.size=r,this._size+=r,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},r=new Array;this._db.forEach(((e,i)=>{const n=e.lifetime;r[n]=(r[n]||0)+e.size,this._users.forAll((r=>{const n=r.namespace;if(i.startsWith(n)){const r=t[n]||0;t[n]=r+e.size}}))}));const i={};this._users.forAll((e=>{const r=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const n=t[r]||0;t[r]=n,i[r]=Math.round(100*e.hitRate)+"%"}else i[r]="0%"}));const n=Object.keys(t);n.forEach((e=>t[e]=t[e]/this._size*100)),n.sort(((e,r)=>t[r]-t[e])),n.forEach((r=>e[r]=Math.round(t[r])+"% / "+i[r]));for(let t=r.length-1;t>=0;--t){const i=r[t];i&&(e["Priority "+(t+-3-1)]=Math.round(i/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){this._db.forEach(((t,r)=>{r.startsWith(e)&&(this._size-=t.size,this._db.delete(r),this._notifyRemoved(r,t.entry))}))}clearAll(){this._db.forEach(((e,t)=>this._notifyRemoved(t,e.entry))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(e,t){this._removeFuncs.forAll((r=>{e.startsWith(r[0])&&r[1](t)}))}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db)if(this._db.delete(e),t.lives<=1?(this._size-=t.size,this._notifyRemoved(e,t.entry)):(--t.lives,this._db.set(e,t)),this._size<=.9*this.maxSize)return}}},64646:(e,t,r)=>{r.d(t,{O:()=>m,S:()=>g,d:()=>u,g:()=>h,h:()=>f,m:()=>c,p:()=>l,v:()=>p,w:()=>d,y:()=>y});var i=r(47817);const n=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],s=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${n.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${n.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),a=/(.*)\/(\d+)\/?$/i;function l(e){return!!s.test(e)}function u(e){const t=(0,i.j)(e),r=t.path.match(s)||t.path.match(o);if(!r)return null;const[,n,a,l,u]=r,c=a.indexOf("/");return{title:p(-1!==c?a.slice(c+1):a),serverType:l,sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:n}}}function c(e){const t=(0,i.j)(e).path.match(a);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function p(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function f(e,t){const r=[];if(e){const t=u(e);(0,i.H)(t)&&t.title&&r.push(t.title)}if(t){const e=p(t);r.push(e)}if(2===r.length){if(-1!==r[0].toLowerCase().indexOf(r[1].toLowerCase()))return r[0];if(-1!==r[1].toLowerCase().indexOf(r[0].toLowerCase()))return r[1]}return r.join(" - ")}function d(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),r=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&r}function y(e,t){return e?(0,i.b1)((0,i.b2)(e,t)):e}function h(e){let{url:t}=e;if(!t)return{url:t};t=(0,i.b2)(t,e.logger);const r=(0,i.j)(t),n=u(r.path);let s;if((0,i.H)(n))null!=n.sublayer&&null==e.layer.layerId&&(s=n.sublayer),t=n.url.path;else if(e.nonStandardUrlAllowed){const e=c(r.path);(0,i.H)(e)&&(t=e.serviceUrl,s=e.sublayerId)}return{url:(0,i.b1)(t),layerId:s}}function m(e,t,r,n,s){(0,i.aP)(t,n,"url",s),n.url&&null!=e.layerId&&(n.url=(0,i.b3)(n.url,r,e.layerId.toString()))}function g(e){if(!e)return!1;const t=e.toLowerCase(),r=-1!==t.indexOf("/services/"),i=-1!==t.indexOf("/mapserver/wmsserver"),n=-1!==t.indexOf("/imageserver/wmsserver"),s=-1!==t.indexOf("/wmsserver");return r&&(i||n||s)}},19026:(e,t,r)=>{r.d(t,{a:()=>c,m:()=>f,y:()=>p});var i=r(47817);const n=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function s(e){return e instanceof i.a1}function o(e){return e instanceof i.ae?Object.keys(e.items):s(e)?(0,i.aI)(e).keys():e?Object.keys(e):[]}function a(e,t){return e instanceof i.ae?e.items[t]:e[t]}function l(e){return e?e.declaredClass:null}function u(e,t){const r=e.diff;if(r&&"function"==typeof r)return r(e,t);const c=o(e),p=o(t);if(0===c.length&&0===p.length)return;if(!c.length||!p.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const f=p.filter((e=>-1===c.indexOf(e))),d=c.filter((e=>-1===p.indexOf(e))),y=c.filter((r=>p.indexOf(r)>-1&&a(e,r)!==a(t,r))).concat(f,d).sort(),h=l(e);if(h&&n.indexOf(h)>-1&&y.length)return{type:"complete",oldValue:e,newValue:t};let m;const g=s(e)&&s(t);for(const n of y){const s=a(e,n),o=a(t,n);let c;(g||"function"!=typeof s&&"function"!=typeof o)&&s!==o&&(null==s&&null==o||(c=r&&r[n]&&"function"==typeof r[n]?r[n](s,o):"object"==typeof s&&"object"==typeof o&&l(s)===l(o)?u(s,o):{type:"complete",oldValue:s,newValue:o},(0,i.H)(c)&&((0,i.H)(m)?m.diff[n]=c:m={type:"partial",diff:{[n]:c}})))}return m}function c(e,t){if((0,i.t)(e))return!1;const r=t.split(".");let n=e;for(const e of r){if("complete"===n.type)return!0;if("partial"!==n.type)return!1;{const t=n.diff[e];if(!t)return!1;n=t}}return!0}function p(e,t){for(const r of t)if(c(e,r))return!0;return!1}function f(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&l(e)!==l(t)?{type:"complete",oldValue:e,newValue:t}:u(e,t)}},29156:(e,t,r)=>{r.d(t,{m:()=>s});var i=r(47817),n=r(69764);const s={inches:(0,n.I)(1,"meters","inches"),feet:(0,n.I)(1,"meters","feet"),"us-feet":(0,n.I)(1,"meters","us-feet"),yards:(0,n.I)(1,"meters","yards"),miles:(0,n.I)(1,"meters","miles"),"nautical-miles":(0,n.I)(1,"meters","nautical-miles"),millimeters:(0,n.I)(1,"meters","millimeters"),centimeters:(0,n.I)(1,"meters","centimeters"),decimeters:(0,n.I)(1,"meters","decimeters"),meters:(0,n.I)(1,"meters","meters"),kilometers:(0,n.I)(1,"meters","kilometers"),"decimal-degrees":1/(0,n.R)(1,"meters",i.aW.radius)}},89300:(e,t,r)=>{r.d(t,{L:()=>m});var i=r(47817);const n={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new i.v({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:i.O.WebMercator}),minus180Line:new i.v({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:i.O.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new i.v({paths:[[[180,-180],[180,180]]],spatialReference:i.O.WGS84}),minus180Line:new i.v({paths:[[[-180,-180],[-180,180]]],spatialReference:i.O.WGS84})}};function s(e,t){return Math.ceil((e-t)/(2*t))}function o(e,t){const r=a(e);for(const e of r)for(const r of e)r[0]+=t;return e}function a(e){return(0,i.V)(e)?e.rings:e.paths}async function l(e,t,r){const n="string"==typeof e?(0,i.j)(e):e,s=t[0].spatialReference,o=(0,i.ar)(t[0]),a={...r,query:{...n.query,f:"json",sr:s.wkid?s.wkid:JSON.stringify(s),geometries:JSON.stringify(u(t))}};return function(e,t,r){const n=(0,i.as)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}((await(0,i.U)(n.path+"/simplify",a)).data,o,s)}function u(e){return{geometryType:(0,i.ar)(e[0]),geometries:e.map((e=>e.toJSON()))}}const c=i.S.getLogger("esri.geometry.support.normalizeUtils");function p(e){return"polygon"===e[0].type}function f(e){return"polyline"===e[0].type}function d(e,t,r){if(t){const t=function(e,t){if(!(e instanceof i.v||e instanceof i.x)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw c.error(e),new i.s(e)}const r=a(e),n=[];for(const e of r){const r=[];n.push(r),r.push([e[0][0],e[0][1]]);for(let i=0;i<e.length-1;i++){const n=e[i][0],s=e[i][1],o=e[i+1][0],a=e[i+1][1],l=Math.sqrt((o-n)*(o-n)+(a-s)*(a-s)),u=(a-s)/l,c=(o-n)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const i=e*t,o=c*i+n,a=u*i+s;r.push([o,a])}const e=(l+Math.floor(p-1)*t)/2,i=c*e+n,o=u*e+s;r.push([i,o])}r.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new i.x({rings:n,spatialReference:e.spatialReference}):new i.v({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,i.au)(t,!0)}return r&&(e=o(e,r)),e}function y(e,t,r){if(Array.isArray(e)){const i=e[0];if(i>t){const r=s(i,t);e[0]=i+r*(-2*t)}else if(i<r){const t=s(i,r);e[0]=i+t*(-2*r)}}else{const i=e.x;if(i>t){const r=s(i,t);e=e.clone().offset(r*(-2*t),0)}else if(i<r){const t=s(i,r);e=e.clone().offset(t*(-2*r),0)}}return e}function h(e,t){let r=-1;for(let i=0;i<t.cutIndexes.length;i++){const n=t.cutIndexes[i],o=t.geometries[i],l=a(o);for(let e=0;e<l.length;e++){const t=l[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const i=t[e][0];r=i>r?i:r}r=Number(r.toFixed(9));const i=-360*s(r,180);for(let r=0;r<t.length;r++){const t=o.getPoint(e,r);o.setPoint(e,r,t.clone().offset(i,0))}return!0}}))}if(n===r){if(p(e))for(const t of a(o))e[n]=e[n].addRing(t);else if(f(e))for(const t of a(o))e[n]=e[n].addPath(t)}else r=n,e[n]=o}return e}async function m(e,t,r){if(!Array.isArray(e))return m([e],t);const a=t?t.url:i.aw.geometryServiceUrl;let u,c,p,f,g,b,v,w,_=0;const S=[],x=[];for(const t of e)if((0,i.t)(t))x.push(t);else if(u||(u=t.spatialReference,c=(0,i.av)(u),p=u.isWebMercator,b=p?102100:4326,f=n[b].maxX,g=n[b].minX,v=n[b].plus180Line,w=n[b].minus180Line),c)if("mesh"===t.type)x.push(t);else if("point"===t.type)x.push(y(t.clone(),f,g));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>y(e,f,g))),x.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,c);x.push(e.rings?new i.x(e):e)}else if(t.extent){const e=t.extent,r=s(e.xmin,g)*(2*f);let i=0===r?t.clone():o(t.clone(),r);e.offset(r,0),e.intersects(v)&&e.xmax!==f?(_=e.xmax>_?e.xmax:_,i=d(i,p),S.push(i),x.push("cut")):e.intersects(w)&&e.xmin!==g?(_=e.xmax*(2*f)>_?e.xmax*(2*f):_,i=d(i,p,360),S.push(i),x.push("cut")):x.push(i)}else x.push(t.clone());else x.push(t);let O=s(_,f),z=-90;const N=O,T=new i.v;for(;O>0;){const e=360*O-180;T.addPath([[e,z],[e,-1*z]]),z*=-1,O--}if(S.length>0&&N>0){const t=h(S,await async function(e,t,r,n){const s="string"==typeof e?(0,i.j)(e):e,o=t[0].spatialReference,a={...n,query:{...s.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,i.ar)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=await(0,i.U)(s.path+"/cut",a),{cutIndexes:u,geometries:c=[]}=l.data;return{cutIndexes:u,geometries:c.map((e=>{const t=(0,i.J)(e);return t.spatialReference=o,t}))}}(a,S,T,r)),n=[],s=[];for(let r=0;r<x.length;r++){const o=x[r];if("cut"!==o)s.push(o);else{const o=t.shift(),a=e[r];(0,i.H)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&o.rings.length>=a.rings.length?(n.push(o),s.push("simplify")):s.push(p?(0,i.at)(o):o)}}if(!n.length)return s;const o=await l(a,n,r),u=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?u.push(t):u.push(p?(0,i.at)(o.shift()):o.shift())}return u}const R=[];for(let e=0;e<x.length;e++){const t=x[e];if("cut"!==t)R.push(t);else{const e=S.shift();R.push(!0===p?(0,i.at)(e):e)}}return Promise.resolve(R)}},95967:(e,t,r)=>{r.d(t,{n:()=>n,t:()=>i});const i=1;function n(e,t){let r=0;for(const n of t){var i;const t=null==(i=n.attributes)?void 0:i[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}},22486:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(54100);function n(e,t,r){if(!r||!r.features||!r.hasZ)return;const n=(0,i.t)(r.geometryType,t,e.outSpatialReference);if(n)for(const e of r.features)n(e.geometry)}},43961:(e,t,r)=>{function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const r=t||s(e),i=e.valueUnit||"unknown";return"unknown"===r?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}r.d(t,{e:()=>n,i:()=>s,l:()=>o,n:()=>i})},23110:(e,t,r)=>{r.d(t,{N:()=>b,U:()=>m,V:()=>d,b:()=>f,d:()=>c,p:()=>u,v:()=>p}),r(58574);var i=r(47817),n=r(29156),s=r(43961);const o=i.S.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),a=new i.an,l=Math.PI,u=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function c(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.ColorVariable"!==n.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof t,a=s?null:t,l=a&&a.attributes;let u=s?t:null;const c=n.field,{ipData:p,hasExpression:f}=n.cache;let d=n.cache.compiledFunc;if(!c&&!f){const e=n.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(f){if(!(0,i.H)(r)||!(0,i.H)(r.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,s=t.getViewInfo(e),l=t.createExecContext(a,s);if(!d){const e=t.createSyntaxTree(n.valueExpression);d=t.createFunction(e),n.cache.compiledFunc=d}u=t.executeFunction(d,l)}else l&&(u=l[c]);const y=n.normalizationField,h=l?parseFloat(l[y]):void 0;if(null!=u&&(!y||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const e=g(u,p);if(e){const t=e[0],s=e[1],o=t===s?n.stops[t].color:i.bu.blendColors(n.stops[t].color,n.stops[s].color,e[2],(0,i.H)(r)?r.color:void 0);return new i.bu(o)}}}function p(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const s="number"==typeof t,a=s?null:t,l=a&&a.attributes;let u=s?t:null;const c=n.field,{ipData:p,hasExpression:f}=n.cache;let d=n.cache.compiledFunc;if(!c&&!f){const e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof u)if(f){if((0,i.t)(r)||(0,i.t)(r.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,s=t.getViewInfo(e),l=t.createExecContext(a,s);if(!d){const e=t.createSyntaxTree(n.valueExpression);d=t.createFunction(e),n.cache.compiledFunc=d}u=t.executeFunction(d,l)}else l&&(u=l[c]);const y=n.normalizationField,h=l?parseFloat(l[y]):void 0;if(null!=u&&(!y||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const e=g(u,p);if(e){const t=e[0],r=e[1];if(t===r)return n.stops[t].opacity;{const i=n.stops[t].opacity;return i+(n.stops[r].opacity-i)*e[2]}}}}function f(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const s=n.axis||"heading",a="heading"===s&&"arithmetic"===n.rotationType?90:0,l="heading"===s&&"arithmetic"===n.rotationType?-1:1,u="number"==typeof t?null:t,c=u&&u.attributes,p=n.field,{hasExpression:f}=n.cache;let d=n.cache.compiledFunc,y=0;if(!p&&!f)return y;if(f){if((0,i.t)(r)||(0,i.t)(r.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,s=t.getViewInfo(e),a=t.createExecContext(u,s);if(!d){const e=t.createSyntaxTree(n.valueExpression);d=t.createFunction(e),n.cache.compiledFunc=d}y=t.executeFunction(d,a)}else c&&(y=c[p]||0);return y="number"!=typeof y||isNaN(y)?null:a+l*y,y}function d(e,t,r){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.SizeVariable"!==a.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const u=function(e,t,r,s,o){switch(t.transformationType){case"additive":return function(e,t,r,i){return e+(y(t.minSize,r,i)||t.minDataValue)}(e,t,r,s);case"constant":return function(e,t,r){const i=e.stops;let n=i&&i.length&&i[0].size;return null==n&&(n=e.minSize),y(n,t,r)}(t,r,s);case"clamped-linear":return function(e,t,r,n){const s=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),o=y(t.minSize,r,n),a=y(t.maxSize,r,n),u=(0,i.H)(n)?n.shape:void 0;if(e<=t.minDataValue)return o;if(e>=t.maxDataValue)return a;if("area"===t.scaleBy&&u){const e="circle"===u,t=e?l*(o/2)**2:o*o,r=t+s*((e?l*(a/2)**2:a*a)-t);return e?2*Math.sqrt(r/l):Math.sqrt(r)}return o+s*(a-o)}(e,t,r,s);case"proportional":return function(e,t,r,n){const s=(0,i.H)(n)?n.shape:void 0,o=e/t.minDataValue,a=y(t.minSize,r,n),l=y(t.maxSize,r,n);let u=null;return u="circle"===s?2*Math.sqrt(o*(a/2)**2):"square"===s||"diamond"===s||"image"===s?Math.sqrt(o*a**2):o*a,h(u,a,l)}(e,t,r,s);case"stops":return function(e,t,r,i,n){const[s,o,a]=g(e,n);if(s===o)return y(t.stops[s].size,r,i);{const e=y(t.stops[s].size,r,i);return e+(y(t.stops[o].size,r,i)-e)*a}}(e,t,r,s,o);case"real-world-size":return function(e,t,r,s){const o=((0,i.H)(s)&&s.resolution?s.resolution:1)*n.m[t.valueUnit],a=y(t.minSize,r,s),u=y(t.maxSize,r,s),{valueRepresentation:c}=t;let p=null;return p="area"===c?2*Math.sqrt(e/l)/o:"radius"===c||"distance"===c?2*e/o:e/o,h(p,a,u)}(e,t,r,s);case"identity":return e;case"unknown":return null}}(function(e,t,r){const n="number"==typeof t,a=n?null:t,l=a&&a.attributes;let u=n?t:null;const{isScaleDriven:c}=e.cache;let p=e.cache.compiledFunc;if(c){const t=(0,i.H)(r)?r.scale:void 0,n=(0,i.H)(r)?r.view:void 0;u=null==t||"3d"===n?function(e){let t=null,r=null;const i=e.stops;return i?(t=i[0].value,r=i[i.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):t}else if(!n)switch(e.inputValueType){case"expression":{if((0,i.t)(r)||(0,i.t)(r.arcade))return void o.error("Use of arcade expressions requires an arcade context");const t={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},n=r.arcade.arcadeUtils,s=n.getViewInfo(t),l=n.createExecContext(a,s);if(!p){const t=n.createSyntaxTree(e.valueExpression);p=n.createFunction(t),e.cache.compiledFunc=p}u=n.executeFunction(p,l);break}case"field":l&&(u=l[e.field]);break;case"unknown":u=null}if(!(0,s.e)(u))return null;if(n||!e.normalizationField)return u;const f=l?parseFloat(l[e.normalizationField]):null;return(0,s.e)(f)&&0!==f?u/f:null}(a,t,r),a,t,r,a.cache.ipData);return null==u||isNaN(u)?0:u}function y(e,t,r){return null==e?null:(0,s.n)(e)?d(e,t,r):(0,s.e)(e)?e:null}function h(e,t,r){return(0,s.e)(r)&&e>r?r:(0,s.e)(t)&&e<t?t:e}function m(e,t,r){const{isScaleDriven:i}=e.cache;if(!(i&&"3d"===r||t))return null;const n={scale:t,view:r};let s=y(e.minSize,a,n),o=y(e.maxSize,a,n);if(null!=s||null!=o){if(s>o){const e=o;o=s,s=e}return{minSize:s,maxSize:o}}}function g(e,t){if(!t)return;let r=0,i=t.length-1;return t.some(((t,n)=>e<t?(i=n,!0):(r=n,!1))),[r,i,(e-t[r])/(t[i]-t[r])]}function b(e,t,r){const i=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":d(n,t,r);switch(n.axis){case"width":i[0]=e;break;case"depth":i[1]=e;break;case"height":i[2]=e;break;case"width-and-depth":i[0]=e,i[1]=e;break;case"all":case void 0:case null:i[0]=e,i[1]=e,i[2]=e}}return i}},54100:(e,t,r)=>{r.d(t,{l:()=>a,t:()=>s});var i=r(47817),n=r(69764);function s(e,t,r){if((0,i.t)(t)||(0,i.t)(r)||r.vcsWkid||(0,i.bf)(t,r))return null;const s=(0,n.T)(t)/(0,n.T)(r);if(1===s)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,s);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,s);default:return null}}function o(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function a(e,t,r){if(!e&&!t||!r)return;const i=(0,n.T)(r);l(e,r,i),l(t,r,i)}function l(e,t,r){if(e)for(const i of e)u(i.geometry,t,r)}function u(e,t,r){if(!e||!e.spatialReference||(0,i.bf)(e.spatialReference,t))return;const s=(0,n.T)(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)o(e,e.rings,s);else if("paths"in e)o(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}}}]);