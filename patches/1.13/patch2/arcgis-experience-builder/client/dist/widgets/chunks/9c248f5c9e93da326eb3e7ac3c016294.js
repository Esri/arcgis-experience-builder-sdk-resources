"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[89266],{32644:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(47817);class i{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.s(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new i(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),a=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(a))throw new n.s((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(a))throw new n.s((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),c=parseInt(o,10);return new i(s,c,t)}}},89266:(e,t,r)=>{r.r(t),r.d(t,{P:()=>ko,j:()=>Wo,o:()=>hs});var n=r(47817),i=r(86977),o=r(55820),a=r(74970),s=r(3271),c=r(60640),l=r(35644),u=r(69695),d=r(13019),f=r(27157),h=r(58574),m=r(77232),p=r(30286),g=r(32644);function v(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function x(e,t){return new Float64Array(e,t,16)}function b(e,t,r){const n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=r[0],h=r[1],m=r[2],p=r[3],g=r[4],v=r[5],x=r[6],b=r[7],y=r[8];return e[0]=f*n+h*a+m*l,e[1]=f*i+h*s+m*u,e[2]=f*o+h*c+m*d,e[3]=p*n+g*a+v*l,e[4]=p*i+g*s+v*u,e[5]=p*o+g*c+v*d,e[6]=x*n+b*a+y*l,e[7]=x*i+b*s+y*u,e[8]=x*o+b*c+y*d,e}function y(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],m=t[12],p=t[13],g=t[14],v=t[15],x=r*s-n*a,b=r*c-i*a,y=r*l-o*a,_=n*c-i*s,w=n*l-o*s,T=i*l-o*c,S=u*p-d*m,M=u*g-f*m,C=u*v-h*m,A=d*g-f*p,P=d*v-h*p,O=f*v-h*g;let I=x*O-b*P+y*A+_*C-w*M+T*S;return I?(I=1/I,e[0]=(s*O-c*P+l*A)*I,e[1]=(c*C-a*O-l*M)*I,e[2]=(a*P-s*C+l*S)*I,e[3]=(i*P-n*O-o*A)*I,e[4]=(r*O-i*C+o*M)*I,e[5]=(n*C-r*P-o*S)*I,e[6]=(p*T-g*w+v*_)*I,e[7]=(g*y-m*T-v*b)*I,e[8]=(m*w-p*y+v*x)*I,e):null}function _(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e}Object.freeze({__proto__:null,create:function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},clone:v,fromValues:function(e,t,r,n,i,o,a,s,c,l,u,d,f,h,m,p){return[e,t,r,n,i,o,a,s,c,l,u,d,f,h,m,p]},createView:x,IDENTITY:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]});const w=b,T=_;Object.freeze({__proto__:null,fromMat4:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},set:function(e,t,r,n,i,o,a,s,c,l){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e[4]=o,e[5]=a,e[6]=s,e[7]=c,e[8]=l,e},identity:function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},transpose:function(e,t){if(e===t){const r=t[1],n=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e},invert:function(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*a-s*l,f=-u*o+s*c,h=l*o-a*c;let m=r*d+n*f+i*h;return m?(m=1/m,e[0]=d*m,e[1]=(-u*n+i*l)*m,e[2]=(s*n-i*a)*m,e[3]=f*m,e[4]=(u*r-i*c)*m,e[5]=(-s*r+i*o)*m,e[6]=h*m,e[7]=(-l*r+n*c)*m,e[8]=(a*r-n*o)*m,e):null},adjoint:function(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8];return e[0]=a*u-s*l,e[1]=i*l-n*u,e[2]=n*s-i*a,e[3]=s*c-o*u,e[4]=r*u-i*c,e[5]=i*o-r*s,e[6]=o*l-a*c,e[7]=n*c-r*l,e[8]=r*a-n*o,e},determinant:function(e){const t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],s=e[6],c=e[7],l=e[8];return t*(l*o-a*c)+r*(-l*i+a*s)+n*(c*i-o*s)},multiply:b,translate:function(e,t,r){const n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=r[0],h=r[1];return e[0]=n,e[1]=i,e[2]=o,e[3]=a,e[4]=s,e[5]=c,e[6]=f*n+h*a+l,e[7]=f*i+h*s+u,e[8]=f*o+h*c+d,e},rotate:function(e,t,r){const n=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=Math.sin(r),h=Math.cos(r);return e[0]=h*n+f*a,e[1]=h*i+f*s,e[2]=h*o+f*c,e[3]=h*a-f*n,e[4]=h*s-f*i,e[5]=h*c-f*o,e[6]=l,e[7]=u,e[8]=d,e},scale:function(e,t,r){const n=r[0],i=r[1],o=r[2];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=o*t[6],e[7]=o*t[7],e[8]=o*t[8],e},scaleByVec2:function(e,t,r){const n=r[0],i=r[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e},fromTranslation:function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e},fromRotation:function(e,t){const r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=-r,e[4]=n,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},fromScaling:function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},fromMat2d:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},fromQuat:function(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=r+r,s=n+n,c=i+i,l=r*a,u=n*a,d=n*s,f=i*a,h=i*s,m=i*c,p=o*a,g=o*s,v=o*c;return e[0]=1-d-m,e[3]=u-v,e[6]=f+g,e[1]=u+v,e[4]=1-l-m,e[7]=h-p,e[2]=f-g,e[5]=h+p,e[8]=1-l-d,e},normalFromMat4Legacy:function(e,t){const r=t[0],n=t[1],i=t[2],o=t[4],a=t[5],s=t[6],c=t[8],l=t[9],u=t[10],d=u*a-s*l,f=-u*o+s*c,h=l*o-a*c,m=r*d+n*f+i*h;if(!m)return null;const p=1/m;return e[0]=d*p,e[1]=(-u*n+i*l)*p,e[2]=(s*n-i*a)*p,e[3]=f*p,e[4]=(u*r-i*c)*p,e[5]=(-s*r+i*o)*p,e[6]=h*p,e[7]=(-l*r+n*c)*p,e[8]=(a*r-n*o)*p,e},normalFromMat4:y,projection:function(e,t,r){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/r,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e},str:function(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"},frob:function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+e[6]**2+e[7]**2+e[8]**2)},add:function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e},subtract:_,multiplyScalar:function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e},multiplyScalarAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]},equals:function(e,t){const r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],c=e[5],l=e[6],u=e[7],d=e[8],f=t[0],h=t[1],m=t[2],p=t[3],g=t[4],v=t[5],x=t[6],b=t[7],y=t[8];return Math.abs(r-f)<=o.a*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(n-h)<=o.a*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(i-m)<=o.a*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(a-p)<=o.a*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(s-g)<=o.a*Math.max(1,Math.abs(s),Math.abs(g))&&Math.abs(c-v)<=o.a*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(l-x)<=o.a*Math.max(1,Math.abs(l),Math.abs(x))&&Math.abs(u-b)<=o.a*Math.max(1,Math.abs(u),Math.abs(b))&&Math.abs(d-y)<=o.a*Math.max(1,Math.abs(d),Math.abs(y))},mul:w,sub:T});const S=n.S.getLogger("esri.views.3d.support.buffer.math");function M(e,t,r){if(e.count!==t.count)return void S.error("source and destination buffers need to have the same number of elements");const n=e.count,i=r[0],o=r[1],a=r[2],s=r[4],c=r[5],l=r[6],u=r[8],d=r[9],f=r[10],h=r[12],m=r[13],p=r[14],g=e.typedBuffer,v=e.typedBufferStride,x=t.typedBuffer,b=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*v,r=e*b,n=x[r],y=x[r+1],_=x[r+2];g[t]=i*n+s*y+u*_+h,g[t+1]=o*n+c*y+d*_+m,g[t+2]=a*n+l*y+f*_+p}}function C(e,t,r){if(e.count!==t.count)return void S.error("source and destination buffers need to have the same number of elements");const n=e.count,i=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],h=e.typedBuffer,m=e.typedBufferStride,p=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*m,r=e*g,n=p[r],v=p[r+1],x=p[r+2];h[t]=i*n+s*v+u*x,h[t+1]=o*n+c*v+d*x,h[t+2]=a*n+l*v+f*x}}function A(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*s;i[t]=r*a[n],i[t+1]=r*a[n+1],i[t+2]=r*a[n+2]}}function P(e,t){return[e,t]}function O(e,t){return new Float64Array(e,t,2)}function I(){return P(1,1)}function F(){return P(1,0)}function z(){return P(0,1)}Object.freeze({__proto__:null,transformMat4:M,transformMat3:C,scale:A,shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*s;i[t]=a[n]>>r,i[t+1]=a[n+1]>>r,i[t+2]=a[n+2]>>r}}});const L=I(),D=F(),R=z();function B(e,t,r,n){return[e,t,r,n]}function E(e,t){return new Float64Array(e,t,4)}function N(){return B(1,1,1,1)}function U(){return B(1,0,0,0)}function V(){return B(0,1,0,0)}function H(){return B(0,0,1,0)}function k(){return B(0,0,0,1)}Object.freeze({__proto__:null,create:function(){return[0,0]},clone:function(e){return[e[0],e[1]]},fromValues:P,fromArray:function(e){const t=[0,0],r=Math.min(2,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:O,zeros:function(){return[0,0]},ones:I,unitX:F,unitY:z,ZEROS:[0,0],ONES:L,UNIT_X:D,UNIT_Y:R});const G=N(),j=U(),$=V(),q=H(),W=k();Object.freeze({__proto__:null,create:function(){return[0,0,0,0]},clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:B,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:E,zeros:function(){return[0,0,0,0]},ones:N,unitX:U,unitY:V,unitZ:H,unitW:k,ZEROS:[0,0,0,0],ONES:G,UNIT_X:j,UNIT_Y:$,UNIT_Z:q,UNIT_W:W});class Z{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function X(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new Z(t)}}function Y(e,t=0){let r=0;for(let n=0;n<4;n++)r+=e[t+n]*K[n];return r}const K=[1/256,1/65536,1/16777216,1/4294967296];Y(new Uint8ClampedArray([255,255,255,255]));class Q{constructor(e,t,r,n){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=n,this.center=(0,i.n)(),X(e.length>=1),X(r.length%this._numIndexPerPrimitive==0),X(r.length>=e.length*this._numIndexPerPrimitive),X(3===n.size||4===n.size);const{data:a,size:s}=n,c=e.length;let l=s*r[this._numIndexPerPrimitive*e[0]];J.clear(),J.push(l),this.bbMin=(0,i.t)(a[l],a[l+1],a[l+2]),this.bbMax=(0,i.r)(this.bbMin);for(let t=0;t<c;++t){const n=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){l=s*r[n+e],J.push(l);let t=a[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=a[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=a[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,o.y)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let u=this.radius*this.radius;for(let e=0;e<J.length;++e){l=J.getItemAt(e);const t=a[l]-this.center[0],r=a[l+1]-this.center[1],n=a[l+2]-this.center[2],i=t*t+r*r+n*n;if(i<=u)continue;const o=Math.sqrt(i),s=.5*(o-this.radius);this.radius=this.radius+s,u=this.radius*this.radius;const c=s/o;this.center[0]+=t*c,this.center[1]+=r*c,this.center[2]+=n*c}J.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,o.x)(this.bbMin,this.bbMax)>1){const e=(0,o.y)((0,i.n)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),n=new Array(8);for(let e=0;e<8;++e)n[e]=0;const{data:a,size:s}=this.position;for(let i=0;i<t;++i){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[i];let c=s*this.indices[o],l=a[c],u=a[c+1],d=a[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=s*this.indices[o+e];const t=a[c],r=a[c+1],n=a[c+2];t<l&&(l=t),r<u&&(u=r),n<d&&(d=n)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[i]=t,++n[t]}let c=0;for(let e=0;e<8;++e)n[e]>0&&++c;if(c<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=n[e]>0?new Uint32Array(n[e]):void 0;for(let e=0;e<8;++e)n[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][n[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==l[e]&&(this._children[e]=new Q(l[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){J.prune()}}const J=new n.b5({deallocator:null});class ee{constructor(){this.id=(0,n.cP)()}unload(){}}class te{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=n.dG.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,n.dH)()),this.items=(0,n.dH)()}get(){return 0===this.itemsPtr&&(0,n.dG)((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*re);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,re));e++)this.items.push(this.allocator())}}const re=1024;class ne{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=n.dG.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,n.dH)()),this.itemsPtr=0,this.items=(0,n.dH)(),this.buffers=(0,n.dH)()}get(){0===this.itemsPtr&&(0,n.dG)((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=ie){return new ne(16,O,e)}static createVec3f64(e=ie){return new ne(24,i.u,e)}static createVec4f64(e=ie){return new ne(32,E,e)}static createMat3f64(e=ie){return new ne(72,c.a,e)}static createMat4f64(e=ie){return new ne(128,x,e)}static createQuatf64(e=ie){return new ne(32,c.b,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const ie=4096;ne.createVec2f64();const oe=ne.createVec3f64(),ae=ne.createVec4f64();ne.createMat3f64();const se=ne.createMat4f64();function ce(e){return e?{origin:(0,i.r)(e.origin),vector:(0,i.r)(e.vector)}:{origin:(0,i.n)(),vector:(0,i.n)()}}function le(e,t){const r=pe.get();return r.origin=e,r.vector=t,r}function ue(e,t,r=ce()){return(0,o.r)(r.origin,e),(0,o.r)(r.vector,t),r}function de(e,t){const r=(0,o.c)(oe.get(),t,e.origin),i=(0,o.z)(e.vector,r),a=(0,o.z)(e.vector,e.vector),s=(0,n.cq)(i/a,0,1),c=(0,o.c)(oe.get(),(0,o.d)(oe.get(),e.vector,s),r);return(0,o.z)(c,c)}function fe(e,t,r,i,a){const{vector:s,origin:c}=e,l=(0,o.c)(oe.get(),t,c),u=(0,o.z)(s,l)/(0,o.p)(s);return(0,o.d)(a,s,(0,n.cq)(u,r,i)),(0,o.u)(a,a,e.origin)}function he(e,t,r,i){const a=1e-6,s=e.origin,c=(0,o.u)(oe.get(),s,e.vector),l=t.origin,u=(0,o.u)(oe.get(),l,t.vector),d=oe.get(),f=oe.get();if(d[0]=s[0]-l[0],d[1]=s[1]-l[1],d[2]=s[2]-l[2],f[0]=u[0]-l[0],f[1]=u[1]-l[1],f[2]=u[2]-l[2],Math.abs(f[0])<a&&Math.abs(f[1])<a&&Math.abs(f[2])<a)return!1;const h=oe.get();if(h[0]=c[0]-s[0],h[1]=c[1]-s[1],h[2]=c[2]-s[2],Math.abs(h[0])<a&&Math.abs(h[1])<a&&Math.abs(h[2])<a)return!1;const m=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],p=f[0]*h[0]+f[1]*h[1]+f[2]*h[2],g=d[0]*h[0]+d[1]*h[1]+d[2]*h[2],v=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],x=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*v-p*p;if(Math.abs(x)<a)return!1;let b=(m*p-g*v)/x,y=(m+p*b)/v;r&&(b=(0,n.cq)(b,0,1),y=(0,n.cq)(y,0,1));const _=oe.get(),w=oe.get();return _[0]=s[0]+b*h[0],_[1]=s[1]+b*h[1],_[2]=s[2]+b*h[2],w[0]=l[0]+y*f[0],w[1]=l[1]+y*f[1],w[2]=l[2]+y*f[2],i.tA=b,i.tB=y,i.pA=_,i.pB=w,i.distance2=(0,o.x)(_,w),!0}ne.createQuatf64();const me={tA:0,tB:0,pA:(0,i.n)(),pB:(0,i.n)(),distance2:0},pe=new te((()=>({origin:null,vector:null})));function ge(e){return e?{p0:(0,i.r)(e.p0),p1:(0,i.r)(e.p1),p2:(0,i.r)(e.p2)}:{p0:(0,i.n)(),p1:(0,i.n)(),p2:(0,i.n)()}}function ve(e,t,r,n=ge()){return(0,o.r)(n.p0,e),(0,o.r)(n.p1,t),(0,o.r)(n.p2,r),n}function xe(e,t,r){const n=(0,d.d)(e,t),i=(0,d.d)(t,r),o=(0,d.d)(r,e),a=(n+i+o)/2,s=a*(a-n)*(a-i)*(a-o);return s<=0?0:Math.sqrt(s)}function be(e,t,r){return(0,o.c)(we,t,e),(0,o.c)(Te,r,e),(0,o.s)((0,o._)(we,we,Te))/2}Object.freeze({__proto__:null,create:ce,wrap:le,copy:function(e,t=ce()){return ue(e.origin,e.vector,t)},fromValues:ue,fromPoints:function(e,t,r=ce()){return(0,o.r)(r.origin,e),(0,o.c)(r.vector,t,e),r},distance2:de,distance:function(e,t){return Math.sqrt(de(e,t))},projectPoint:function(e,t,r){return fe(e,t,0,1,r)},pointAt:function(e,t,r){return(0,o.u)(r,e.origin,(0,o.d)(r,e.vector,t))},projectPointClamp:fe,closestRayDistance2:function(e,t){if(he(e,le(t.origin,t.direction),!1,me)){const{tA:t,pB:r,distance2:n}=me;if(t>=0&&t<=1)return n;if(t<0)return(0,o.x)(e.origin,r);if(t>1)return(0,o.x)((0,o.u)(oe.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!he(e,t,!0,me)&&((0,o.r)(r,me.pA),!0)},closestLineSegmentDistance2:function(e,t){return he(e,t,!0,me)?me.distance2:null}});const ye=new te(ce),_e=new te((()=>({p0:null,p1:null,p2:null}))),we=(0,i.n)(),Te=(0,i.n)();Object.freeze({__proto__:null,create:ge,wrap:function(e,t,r){const n=_e.get();return n.p0=e,n.p1=t,n.p2=r,n},copy:function(e,t=ge()){return ve(e.p0,e.p1,e.p2,t)},fromValues:ve,distance2:function(e,t){const r=e.p0,n=e.p1,i=e.p2,a=(0,o.c)(oe.get(),n,r),s=(0,o.c)(oe.get(),i,n),c=(0,o.c)(oe.get(),r,i),l=(0,o.c)(oe.get(),t,r),u=(0,o.c)(oe.get(),t,n),d=(0,o.c)(oe.get(),t,i),f=(0,o._)(a,a,c),h=(0,o.z)((0,o._)(oe.get(),a,f),l),m=(0,o.z)((0,o._)(oe.get(),s,f),u),p=(0,o.z)((0,o._)(oe.get(),c,f),d);if(h>0&&m>0&&p>0){const e=(0,o.z)(f,l);return e*e/(0,o.z)(f,f)}const g=de(ue(r,a,ye.get()),t),v=de(ue(n,s,ye.get()),t),x=de(ue(i,c,ye.get()),t);return Math.min(g,v,x)},intersectRay:function(e,t,r){const n=1e-5,{direction:i,origin:a}=t,{p0:s,p1:c,p2:l}=e,u=c[0]-s[0],d=c[1]-s[1],f=c[2]-s[2],h=l[0]-s[0],m=l[1]-s[1],p=l[2]-s[2],g=i[1]*p-m*i[2],v=i[2]*h-p*i[0],x=i[0]*m-h*i[1],b=u*g+d*v+f*x;if(b>-n&&b<n)return!1;const y=1/b,_=a[0]-s[0],w=a[1]-s[1],T=a[2]-s[2],S=y*(_*g+w*v+T*x);if(S<0||S>1)return!1;const M=w*f-d*T,C=T*u-f*_,A=_*d-u*w,P=y*(i[0]*M+i[1]*C+i[2]*A);return!(P<0||S+P>1||(r&&((0,o.d)(r,i,y*(h*M+m*C+p*A)),(0,o.u)(r,a,r)),0))},areaPoints2d:xe,area2d:function(e){return xe(e.p0,e.p1,e.p2)},areaPoints3d:be});let Se=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const Me=new Uint16Array([0]),Ce=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function Ae(e){if(1===e)return Me;if(e<Ce.length)return new Uint16Array(Ce.buffer,0,e);if(e>Se.length){const t=Math.max(2*Se.length,e);Se=new Uint32Array(t);for(let e=0;e<Se.length;e++)Se[e]=e}return new Uint32Array(Se.buffer,0,e)}const Pe=(0,i.n)(),Oe=(0,i.n)(),Ie=(0,i.n)(),Fe=(0,i.n)();class ze extends ee{constructor(e,t=[],r=0,n=-1){super(),this._primitiveType=r,this.edgeIndicesLength=n,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Ae(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,Le(r)),"position"===e&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,n.t)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position");return function(e,t,r){if(!e)return!1;const{size:n,data:i}=e;(0,o.o)(r,0,0,0),(0,o.o)(Fe,0,0,0);let a=0,s=0;for(let e=0;e<t.length-2;e+=3){const c=t[e+0]*n,l=t[e+1]*n,u=t[e+2]*n;(0,o.o)(Pe,i[c+0],i[c+1],i[c+2]),(0,o.o)(Oe,i[l+0],i[l+1],i[l+2]),(0,o.o)(Ie,i[u+0],i[u+1],i[u+2]);const d=be(Pe,Oe,Ie);d?((0,o.u)(Pe,Pe,Oe),(0,o.u)(Pe,Pe,Ie),(0,o.d)(Pe,Pe,1/3*d),(0,o.u)(r,r,Pe),a+=d):((0,o.u)(Fe,Fe,Pe),(0,o.u)(Fe,Fe,Oe),(0,o.u)(Fe,Fe,Ie),s+=3)}return!(0===s&&0===a||(0!==a?((0,o.d)(r,r,1/a),0):0===s||((0,o.d)(r,Fe,1/s),0)))}(this.vertexAttributes.get("position"),t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position");return function(e,t,r){if(!e||!t)return!1;const{size:n,data:i}=e;(0,o.o)(r,0,0,0);let a=-1,s=0;for(let e=0;e<t.length;e++){const o=t[e]*n;a!==o&&(r[0]+=i[o+0],r[1]+=i[o+1],r[2]+=i[o+2],s++),a=o}return s>1&&(0,o.d)(r,r,1/s),s>0}(this.vertexAttributes.get("position"),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;X(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Ae(e.length/t),n=this.vertexAttributes.get("position");return new Q(r,t,e,n)}}function Le(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}function De(e,t){return(0,o.z)(e,t)/(0,o.s)(e)}function Re(e,t){const r=(0,o.z)(e,t)/((0,o.s)(e)*(0,o.s)(t));return-(0,n.cH)(r)}const Be=(0,i.n)(),Ee=(0,i.n)();function Ne(e){return e?{origin:(0,i.r)(e.origin),direction:(0,i.r)(e.direction)}:{origin:(0,i.n)(),direction:(0,i.n)()}}function Ue(e,t=Ne()){return Ve(e.origin,e.direction,t)}function Ve(e,t,r=Ne()){return(0,o.r)(r.origin,e),(0,o.r)(r.direction,t),r}function He(e,t,r=Ne()){const i=(0,n.dI)((0,d.a)(oe.get(),t));if(i[2]=0,!e.unprojectFromRenderScreen(i,r.origin))return null;const a=(0,n.dI)((0,d.a)(oe.get(),t));a[2]=1;const s=e.unprojectFromRenderScreen(a,oe.get());return(0,n.t)(s)?null:((0,o.c)(r.direction,s,r.origin),r)}function ke(e,t,r=Ne()){return Ge(e,e.screenToRender(t,(0,n.dI)(oe.get())),r)}function Ge(e,t,r=Ne()){(0,o.r)(r.origin,e.eye);const i=(0,o.o)(oe.get(),t[0],t[1],1),a=e.unprojectFromRenderScreen(i,oe.get());return(0,n.t)(a)?null:((0,o.c)(r.direction,a,r.origin),r)}function je(e,t){const r=(0,o._)(oe.get(),(0,o.j)(oe.get(),e.direction),(0,o.c)(oe.get(),t,e.origin));return(0,o.z)(r,r)}function $e(e,t,r){const n=(0,o.z)(e.direction,(0,o.c)(r,t,e.origin));return(0,o.u)(r,e.origin,(0,o.d)(r,e.direction,n)),r}function qe(){return{origin:null,direction:null}}Object.freeze({__proto__:null,projectPoint:function(e,t,r){const n=(0,o.z)(e,t)/(0,o.z)(e,e);return(0,o.d)(r,e,n)},projectPointSignedLength:De,angle:Re,angleAroundAxis:function(e,t,r){(0,o.j)(Be,e),(0,o.j)(Ee,t);const i=(0,o.z)(Be,Ee),a=(0,n.cH)(i),s=(0,o._)(Be,Be,Ee);return(0,o.z)(s,r)<0?2*Math.PI-a:a}});const We=new te(qe);Object.freeze({__proto__:null,create:Ne,wrap:function(e,t){const r=We.get();return r.origin=e,r.direction=t,r},copy:Ue,fromPoints:function(e,t,r=Ne()){return(0,o.r)(r.origin,e),(0,o.c)(r.direction,t,e),r},fromValues:Ve,fromScreen:function(e,t,r=Ne()){return He(e,e.screenToRender(t,(0,n.dI)(oe.get())),r)},fromRender:He,fromScreenAtEye:ke,fromRenderAtEye:Ge,distance2:je,distance:function(e,t){return Math.sqrt(je(e,t))},closestPoint:$e,createWrapper:qe});const Ze=n.S.getLogger("esri.views.3d.support.geometryUtils.sphere");function Xe(e,t=[0,0,0,0]){return(0,f.a)(t,e)}function Ye(e){return Array.isArray(e)?e[3]:e}function Ke(e){return Array.isArray(e)?e:at}function Qe(e,t,r){if((0,n.t)(t))return!1;const i=(0,o.c)(oe.get(),t.origin,Ke(e)),a=(0,o.z)(t.direction,t.direction),s=2*(0,o.z)(t.direction,i),c=s*s-4*a*((0,o.z)(i,i)-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*a);const d=(-s+l)/(2*a);return(u<0||d<u&&d>0)&&(u=d),!(u<0||(r&&(0,o.u)(r,t.origin,(0,o.d)(oe.get(),t.direction,u)),0))}function Je(e,t,r){const n=oe.get(),i=se.get();(0,o._)(n,t.origin,t.direction);const s=Ye(e);(0,o._)(r,n,t.origin),(0,o.d)(r,r,1/(0,o.s)(r)*s);const c=tt(e,t.origin),l=Re(t.origin,r);return(0,a.r)(i),(0,a.f)(i,i,l+c,n),(0,o.I)(r,r,i),r}function et(e,t,r){const n=(0,o.c)(oe.get(),t,Ke(e)),i=(0,o.d)(oe.get(),n,e[3]/(0,o.s)(n));return(0,o.u)(r,i,Ke(e))}function tt(e,t){const r=(0,o.c)(oe.get(),t,Ke(e)),i=(0,o.s)(r),a=Ye(e),s=a+Math.abs(a-i);return(0,n.cH)(a/s)}const rt=(0,i.n)();function nt(e,t,r,n){const i=(0,o.c)(rt,t,Ke(e));switch(r){case 0:{const e=(0,l.r)(i,rt)[2];return(0,o.o)(n,-Math.sin(e),Math.cos(e),0)}case 1:{const e=(0,l.r)(i,rt),t=e[1],r=e[2],a=Math.sin(t);return(0,o.o)(n,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return(0,o.j)(n,i);default:return}}function it(e,t){const r=(0,o.c)(st,t,Ke(e));return(0,o.s)(r)-e[3]}const ot=Ne(),at=(0,i.n)(),st=(0,i.n)();function ct(e=Rt){return[e[0],e[1],e[2],e[3]]}function lt(e,t,r,n){return dt(e,t,r,n,ae.get())}function ut(e,t=ct()){return dt(e[0],e[1],e[2],e[3],t)}function dt(e,t,r,n,i=ct()){return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function ft(e,t,r=ct()){(0,o.r)(r,t);const n=(0,o.z)(t,t);return Math.abs(n-1)>1e-5&&n>1e-12&&(0,o.d)(r,r,1/Math.sqrt(n)),_t(r,e,r),r}function ht(e,t,r,n=ct()){return wt((0,o.c)(oe.get(),e,t),(0,o.c)(oe.get(),r,t),e,n)}function mt(e,t,r,n,i){if(e.count<3)return!1;e.getVec(r,gt);let a=n,s=!1;for(;a<e.count-1&&!s;)e.getVec(a,vt),a++,s=!(0,o.F)(gt,vt);if(!s)return!1;for(a=Math.max(a,i),s=!1;a<e.count&&!s;)e.getVec(a,xt),a++,(0,o.c)(bt,gt,vt),(0,o.j)(bt,bt),(0,o.c)(yt,vt,xt),(0,o.j)(yt,yt),s=!(0,o.F)(gt,xt)&&!(0,o.F)(vt,xt)&&Math.abs((0,o.z)(bt,yt))<pt;return s?(ht(gt,vt,xt,t),!0):(0!==r||1!==n||2!==i)&&mt(e,t,0,1,2)}Object.freeze(at),Object.freeze({__proto__:null,create:function(){return[0,0,0,0]},copy:Xe,fromCenterAndRadius:function(e,t){return B(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:Ye,getCenter:Ke,fromValues:function(e,t,r,n){return B(e,t,r,n)},elevate:function(e,t,r){return e!==r&&(0,o.r)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Ze.error("sphere.setExtent is not yet supported"),e===r?r:Xe(e,r)},intersectRay:Qe,intersectScreen:function(e,t,r,n){return Qe(e,ke(t,r,ot),n)},intersectsRay:function(e,t){return Qe(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Qe(e,t,r))return r;const n=Je(e,t,oe.get());return(0,o.u)(r,t.origin,(0,o.d)(oe.get(),t.direction,(0,o.q)(t.origin,n)/(0,o.s)(t.direction))),r},closestPointOnSilhouette:Je,closestPoint:function(e,t,r){return Qe(e,t,r)?r:($e(t,Ke(e),r),et(e,r,r))},projectPoint:et,distanceToSilhouette:function(e,t){const r=(0,o.c)(oe.get(),t,Ke(e)),n=(0,o.p)(r),i=e[3]*e[3];return Math.sqrt(Math.abs(n-i))},angleToSilhouette:tt,axisAt:nt,altitudeAt:it,setAltitudeAt:function(e,t,r,n){const i=it(e,t),a=nt(e,t,2,st),s=(0,o.d)(st,a,r-i);return(0,o.u)(n,t,s),n}});const pt=.99619469809,gt=(0,i.n)(),vt=(0,i.n)(),xt=(0,i.n)(),bt=(0,i.n)(),yt=(0,i.n)();function _t(e,t,r){return e!==r&&ut(e,r),r[3]=-(0,o.z)(r,t),r}function wt(e,t,r,n=ct()){return ft(r,(0,o._)(oe.get(),t,e),n)}function Tt(e,t,r){return!!(0,n.H)(t)&&Dt(e,t.origin,t.direction,!0,!1,r)}function St(e,t,r){return Dt(e,t.origin,t.vector,!1,!1,r)}function Mt(e,t,r){return Dt(e,t.origin,t.vector,!1,!0,r)}function Ct(e,t){return Lt(e,Ke(t))-t[3]>=0}function At(e,t){return Lt(e,t)>=0}function Pt(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:o)+e[1]*(e[1]>0?n:a)+e[2]*(e[2]>0?i:s)+e[3]>=0}function Ot(e,t){const r=(0,o.z)(e,t.ray.direction),n=-Lt(e,t.ray.origin);if(n<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return n>0;if((n<0||r<0)&&!(n<0&&r<0))return!0;const i=n/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function It(e,t){const r=(0,o.z)(e,t.ray.direction),n=-Lt(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return n>0;const i=n/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function Ft(e,t,r){const n=(0,o.d)(oe.get(),e,-e[3]),i=zt(e,(0,o.c)(oe.get(),t,n),oe.get());return(0,o.u)(r,i,n),r}function zt(e,t,r){const n=(0,o.d)(oe.get(),e,(0,o.z)(e,t));return(0,o.c)(r,t,n),r}function Lt(e,t){return(0,o.z)(e,t)+e[3]}function Dt(e,t,r,i,a,s){const c=(0,o.z)(e,r);if(0===c)return!1;let l=-((0,o.z)(e,t)+e[3])/c;return a&&(l=i?Math.max(0,l):(0,n.cq)(l,0,1)),!(l<0||!i&&l>1||((0,o.u)(s,t,(0,o.d)(s,r,l)),0))}const Rt=[0,0,1,0];Object.freeze({__proto__:null,create:ct,wrap:lt,copy:ut,fromValues:dt,fromNormalAndOffset:function(e,t,r=ct()){return(0,o.r)(r,e),r[3]=t,r},fromPositionAndNormal:ft,fromPoints:ht,fromManyPoints:function(e,t){return mt(e,t,0,1,2)},fromManyPointsSampleAt:mt,setOffsetFromPoint:_t,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:wt,intersectRay:Tt,intersectLineSegment:St,intersectLineSegmentClamp:Mt,isSphereFullyInside:Ct,isSphereFullyOutside:function(e,t){return Lt(e,Ke(t))+t[3]<0},isPointInside:At,isPointOutside:function(e,t){return Lt(e,t)<0},isAABBFullyInside:Pt,clip:Ot,clipInfinite:It,projectPoint:Ft,projectVector:zt,distance:function(e,t){return Math.abs(Lt(e,t))},signedDistance:Lt,normal:function(e){return e},UP:Rt});const Bt=n.S.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function Et(e=tr){return{plane:ct(e.plane),origin:(0,i.r)(e.origin),basis1:(0,i.r)(e.basis1),basis2:(0,i.r)(e.basis2)}}function Nt(e,t=Et()){return Ut(e.origin,e.basis1,e.basis2,t)}function Ut(e,t,r,n=Et()){return(0,o.r)(n.origin,e),(0,o.r)(n.basis1,t),(0,o.r)(n.basis2,r),Vt(n),function(e,t){Math.abs((0,o.z)(e.basis1,e.basis2)/((0,o.s)(e.basis1)*(0,o.s)(e.basis2)))>1e-6&&Bt.warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,o.z)(e.basis1,Yt(e)))>1e-6&&Bt.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,o.z)(Yt(e),e.origin)-e.plane[3])>1e-6&&Bt.warn(t,"Plane offset is not consistent with plane origin")}(n,"fromValues()"),n}function Vt(e){wt(e.basis2,e.basis1,e.origin,e.plane)}function Ht(e,t,r){e!==r&&Nt(e,r);const n=(0,o.d)(oe.get(),Yt(e),t);return(0,o.u)(r.origin,r.origin,n),r.plane[3]-=t,r}function kt(e,t=Et()){const r=(e[2]-e[0])/2,n=(e[3]-e[1])/2;return(0,o.o)(t.origin,e[0]+r,e[1]+n,0),(0,o.o)(t.basis1,r,0,0),(0,o.o)(t.basis2,0,n,0),dt(0,0,1,0,t.plane),t}function Gt(e,t,r){return!!Tt(e.plane,t,r)&&Kt(e,r)}function jt(e,t,r){const i=rr.get();er(e,t,i,rr.get());let a=Number.POSITIVE_INFINITY;for(const s of ar){const c=Jt(e,s,nr.get()),u=oe.get();if(St(i,c,u)){const e=(0,l.n)(oe.get(),t.origin,u),i=Math.abs((0,n.cH)((0,o.z)(t.direction,e)));i<a&&(a=i,(0,o.r)(r,u))}}return a===Number.POSITIVE_INFINITY?$t(e,t,r):r}function $t(e,t,r){if(Gt(e,t,r))return r;const n=rr.get(),i=rr.get();er(e,t,n,i);let a=Number.POSITIVE_INFINITY;for(const s of ar){const c=Jt(e,s,nr.get()),l=oe.get();if(Mt(n,c,l)){const e=je(t,l);if(!At(i,l))continue;e<a&&(a=e,(0,o.r)(r,l))}}return Zt(e,t.origin)<a&&qt(e,t.origin,r),r}function qt(e,t,r){const n=Ft(e.plane,t,oe.get()),i=fe(Qt(e,e.basis1),n,-1,1,oe.get()),a=fe(Qt(e,e.basis2),n,-1,1,oe.get());return(0,o.c)(r,(0,o.u)(oe.get(),i,a),e.origin),r}function Wt(e,t,r){const{origin:n,basis1:i,basis2:a}=e,s=(0,o.c)(oe.get(),t,n),c=De(i,s),l=De(a,s),u=De(Yt(e),s);return(0,o.o)(r,c,l,u)}function Zt(e,t){const r=Wt(e,t,oe.get()),{basis1:n,basis2:i}=e,a=(0,o.s)(n),s=(0,o.s)(i),c=Math.max(Math.abs(r[0])-a,0),l=Math.max(Math.abs(r[1])-s,0),u=r[2];return c*c+l*l+u*u}function Xt(e,t){const r=-e.plane[3];return De(Yt(e),t)-r}function Yt(e){return e.plane}function Kt(e,t){const r=(0,o.c)(oe.get(),t,e.origin),n=(0,o.p)(e.basis1),i=(0,o.p)(e.basis2),a=(0,o.z)(e.basis1,r),s=(0,o.z)(e.basis2,r);return-a-n<0&&a-n<0&&-s-i<0&&s-i<0}function Qt(e,t){const r=nr.get();return(0,o.r)(r.origin,e.origin),(0,o.r)(r.vector,t),r}function Jt(e,t,r){const{basis1:n,basis2:i,origin:a}=e,s=(0,o.d)(oe.get(),n,t.origin[0]),c=(0,o.d)(oe.get(),i,t.origin[1]);(0,o.u)(r.origin,s,c),(0,o.u)(r.origin,r.origin,a);const l=(0,o.d)(oe.get(),n,t.direction[0]),u=(0,o.d)(oe.get(),i,t.direction[1]);return(0,o.d)(r.vector,(0,o.u)(l,l,u),2),r}function er(e,t,r,n){const i=Yt(e);wt(i,t.direction,t.origin,r),wt(r,i,t.origin,n)}const tr={plane:ct(),origin:(0,i.t)(0,0,0),basis1:(0,i.t)(1,0,0),basis2:(0,i.t)(0,1,0)},rr=new te(ct),nr=new te(ce),ir=(0,i.n)(),or=new te((()=>({origin:null,basis1:null,basis2:null,plane:null}))),ar=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],sr=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],cr=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function lr(e=dr){return[e[0],e[1],e[2],e[3]]}function ur(e,t,r,n,i=lr()){return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=ct(),this.origin=(0,i.n)(),this.basis1=(0,i.n)(),this.basis2=(0,i.n)()}},create:Et,wrap:function(e,t,r){const n=or.get();return n.origin=e,n.basis1=t,n.basis2=r,n.plane=lt(0,0,0,0),Vt(n),n},copy:Nt,copyWithoutVerify:function(e,t){(0,o.r)(t.origin,e.origin),(0,o.r)(t.basis1,e.basis1),(0,o.r)(t.basis2,e.basis2),ut(e.plane,t.plane)},fromValues:Ut,updateUnboundedPlane:Vt,elevate:Ht,setExtent:function(e,t,r){return kt(t,r),Ht(r,Xt(e,e.origin),r),r},fromAABoundingRect:kt,intersectRay:Gt,intersectRayClosestSilhouette:function(e,t,r){if(Gt(e,t,r))return r;const n=jt(e,t,oe.get());return(0,o.u)(r,t.origin,(0,o.d)(oe.get(),t.direction,(0,o.q)(t.origin,n)/(0,o.s)(t.direction))),r},closestPointOnSilhouette:jt,closestPoint:$t,projectPoint:qt,projectPointLocal:Wt,distance2:Zt,distance:function(e,t){return Math.sqrt(Zt(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const n of ar){const i=de(Jt(e,n,nr.get()),t);i>r&&(r=i)}return Math.sqrt(r)},extrusionContainsPoint:function(e,t){return At(e.plane,t)&&Kt(e,t)},axisAt:function(e,t,r,n){return function(e,t,r){switch(t){case 0:(0,o.r)(r,e.basis1),(0,o.j)(r,r);break;case 1:(0,o.r)(r,e.basis2),(0,o.j)(r,r);break;case 2:(0,o.r)(r,Yt(e))}return r}(e,r,n)},altitudeAt:Xt,setAltitudeAt:function(e,t,r,n){const i=Xt(e,t),a=(0,o.d)(ir,Yt(e),r-i);return(0,o.u)(n,t,a),n},equals:function(e,t){return(0,o.F)(e.basis1,t.basis1)&&(0,o.F)(e.basis2,t.basis2)&&(0,o.F)(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&Nt(e,r),(0,a.h)(sr,t),(0,a.o)(sr,sr),(0,o.I)(r.basis1,e.basis1,sr),(0,o.I)(r.basis2,e.basis2,sr),(0,o.I)(r.plane,e.plane,sr),(0,o.I)(r.origin,e.origin,t),_t(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,n){return e!==n&&Nt(e,n),(0,a.f)(cr,(0,a.r)(cr),t,r),(0,o.I)(n.basis1,e.basis1,cr),(0,o.I)(n.basis2,e.basis2,cr),Vt(n),n},normal:Yt,UP:tr});const dr=[0,0,1,0];function fr(e){return e?{ray:Ne(e.ray),c0:e.c0,c1:e.c1}:{ray:Ne(),c0:0,c1:Number.MAX_VALUE}}function hr(e,t,r,n=fr()){return Ue(e,n.ray),n.c0=t,n.c1=r,n}function mr(e,t=fr()){return Ue(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function pr(e,t,r=fr()){const n=(0,o.s)(e.vector);return Ve(e.origin,t,r.ray),r.c0=0,r.c1=n,r}function gr(e,t,r){return(0,o.u)(r,e.ray.origin,(0,o.d)(r,e.ray.direction,t))}Object.freeze({__proto__:null,create:lr,wrap:function(e,t,r,n){return ur(e,t,r,n,ae.get())},wrapAxisAngle:function(e,t){return ur(e[0],e[1],e[2],t,ae.get())},copy:function(e,t=lr()){return ur(e[0],e[1],e[2],e[3],t)},fromValues:ur,fromAxisAndAngle:function(e,t,r=lr()){return(0,o.r)(r,e),r[3]=t,r},fromPoints:function(e,t,r=lr()){return(0,o._)(r,e,t),(0,o.j)(r,r),r[3]=Re(e,t),r},axis:function(e){return e},UP:dr});const vr=new te((()=>({c0:0,c1:0,ray:null})));function xr(e){return e?[ct(e[0]),ct(e[1]),ct(e[2]),ct(e[3]),ct(e[4]),ct(e[5])]:[ct(),ct(),ct(),ct(),ct(),ct()]}function br(){return[(0,i.n)(),(0,i.n)(),(0,i.n)(),(0,i.n)(),(0,i.n)(),(0,i.n)(),(0,i.n)(),(0,i.n)()]}function yr(e,t){ht(t[4],t[0],t[3],e[0]),ht(t[1],t[5],t[6],e[1]),ht(t[4],t[5],t[1],e[2]),ht(t[3],t[2],t[6],e[3]),ht(t[0],t[1],t[2],e[4]),ht(t[5],t[4],t[7],e[5])}function _r(e,t){for(let r=0;r<6;r++)if(!Ot(e[r],t))return!1;return!0}Object.freeze({__proto__:null,create:fr,wrap:function(e,t,r){const n=vr.get();return n.ray=e,n.c0=t,n.c1=r,n},copy:function(e,t=fr()){return hr(e.ray,e.c0,e.c1,t)},fromValues:hr,fromRay:mr,fromLineSegment:function(e,t=fr()){return pr(e,(0,o.j)(oe.get(),e.vector),t)},fromLineSegmentAndDirection:pr,getStart:function(e,t){return gr(e,e.c0,t)},getEnd:function(e,t){return gr(e,e.c1,t)},getAt:gr});const wr=[B(-1,-1,-1,1),B(1,-1,-1,1),B(1,1,-1,1),B(-1,1,-1,1),B(-1,-1,1,1),B(1,-1,1,1),B(1,1,1,1),B(-1,1,1,1)],Tr=new te(fr),Sr=br();Object.freeze({__proto__:null,create:xr,createPoints:br,copy:function(e,t=xr()){for(let r=0;r<6;r++)ut(e[r],t[r])},fromMatrix:function(e,t,r,n=Sr){const i=(0,a.e)(se.get(),t,e);(0,a.h)(i,i);for(let e=0;e<8;++e){const t=(0,f.y)(ae.get(),wr[e],i);(0,o.o)(n[e],t[0]/t[3],t[1]/t[3],t[2]/t[3])}yr(r,n)},computePlanes:yr,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(Ct(e[r],t))return!1;return!0},intersectsRay:function(e,t){return _r(e,mr(t,Tr.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++)if(!It(e[r],t))return!1;return!0},intersectsLineSegment:function(e,t,r){return _r(e,pr(t,r,Tr.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(Lt(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(Pt(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});class Mr{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(e,t,r,i,o,a){this.id=(0,n.cP)(),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=i,this.origin=o,this._shaderTransformation=a,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return(0,n.H)(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&((0,o.I)(e,e,this.getStaticTransformation()),!0)}}function Cr(e,t,r){for(let n=0;n<r;++n)t[2*n]=e[n],t[2*n+1]=e[n]-t[2*n]}Mr.pool=new n.cg(Mr);const Ar=new Float64Array(1),Pr=new Float32Array(2),Or=new class{constructor(e=0){this.offset=e,this.sphere=[0,0,0,0],this.tmpVertex=(0,i.n)()}applyToVertex(e,t,r){const n=this.objectTransform.transform;let i=n[0]*e+n[4]*t+n[8]*r+n[12],o=n[1]*e+n[5]*t+n[9]*r+n[13],a=n[2]*e+n[6]*t+n[10]*r+n[14];const s=this.offset/Math.sqrt(i*i+o*o+a*a);i+=i*s,o+=o*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*i+c[4]*o+c[8]*a+c[12],this.tmpVertex[1]=c[1]*i+c[5]*o+c[9]*a+c[13],this.tmpVertex[2]=c[2]*i+c[6]*o+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const n=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*n,t[1]+=t[1]*n,t[2]+=t[2]*n}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}},Ir=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Fr extends(Ir(class{})){}class zr extends Fr{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}class Lr extends zr{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){(0,n.H)(this._texture)&&(t.setUniform1i("tex",0),e.bindTexture(this._texture.glTexture,0)),(0,n.H)(this._textureNormal)&&(t.setUniform1i("normalTexture",1),e.bindTexture(this._textureNormal.glTexture,1)),(0,n.H)(this._textureEmissive)&&(t.setUniform1i("texEmission",2),e.bindTexture(this._textureEmissive.glTexture,2)),(0,n.H)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",3),e.bindTexture(this._textureOcclusion.glTexture,3)),(0,n.H)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",4),e.bindTexture(this._textureMetallicRoughness.glTexture,4))}bindTextureScale(e,t){const r=(0,n.H)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!(0,n.t)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){(0,n.t)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}function Dr(e,t,r,i){return function(e,t){return Math.max((0,n.dJ)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const n=r.parameters,i=r.paddingPixelsOverride;return Rr.scale=Math.min(n.divisor/(t-n.offset),1),Rr.factor=function(e){return Math.abs(e*e*e)}(e),Rr.minPixelSize=n.minPixelSize,Rr.paddingPixels=i,Rr}(t,r,i))}const Rr={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Br=(0,u.a)();function Er(e,t,r,i,o,a,s){const c=function(e){return!!(0,n.H)(e)&&!e.visible}(t),l=r.tolerance;if(!c)if(e.boundingInfo)X(0===e.primitiveType),Ur(e.boundingInfo,i,o,l,a,s);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");Hr(i,o,0,t.length/3,t,r,void 0,a,s)}}const Nr=(0,i.n)();function Ur(e,t,r,i,a,s){if((0,n.t)(e))return;const c=function(e,t,r){return(0,o.o)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,Nr);if((0,u.q)(Br,e.getBBMin()),(0,u.w)(Br,e.getBBMax()),(0,n.H)(a)&&a.applyToAabb(Br),function(e,t,r,n){return function(e,t,r,n,i){const o=(e[0]-n-t[0])*r[0],a=(e[3]+n-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-n-t[1])*r[1],u=(e[4]+n-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-n-t[2])*r[2],f=(e[5]+n-t[2])*r[2];return c=Math.min(c,Math.max(d,f)),!(c<0)&&(s=Math.max(s,Math.min(d,f)),!(s>c)&&s<1/0)}(e,t,r,n)}(Br,t,c,i)){const{primitiveIndices:n,indices:o,position:c}=e,l=n?n.length:o.length/3;if(l>Xr){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&Ur(n[e],t,r,i,a,s);return}}Hr(t,r,0,l,o,c,n,a,s)}}const Vr=(0,i.n)();function Hr(e,t,r,i,o,a,s,c,l){if(s)return function(e,t,r,i,o,a,s,c,l){const u=a.data,d=a.stride||a.size,f=e[0],h=e[1],m=e[2],p=t[0]-f,g=t[1]-h,v=t[2]-m;for(let e=r;e<i;++e){const t=s[e];let r=3*t,i=d*o[r++],a=u[i++],x=u[i++],b=u[i];i=d*o[r++];let y=u[i++],_=u[i++],w=u[i];i=d*o[r];let T=u[i++],S=u[i++],M=u[i];(0,n.H)(c)&&([a,x,b]=c.applyToVertex(a,x,b,e),[y,_,w]=c.applyToVertex(y,_,w,e),[T,S,M]=c.applyToVertex(T,S,M,e));const C=y-a,A=_-x,P=w-b,O=T-a,I=S-x,F=M-b,z=g*F-I*v,L=v*O-F*p,D=p*I-O*g,R=C*z+A*L+P*D;if(Math.abs(R)<=Number.EPSILON)continue;const B=f-a,E=h-x,N=m-b,U=B*z+E*L+N*D;if(R>0){if(U<0||U>R)continue}else if(U>0||U<R)continue;const V=E*P-A*N,H=N*C-P*B,k=B*A-C*E,G=p*V+g*H+v*k;if(R>0){if(G<0||U+G>R)continue}else if(G>0||U+G<R)continue;const j=(O*V+I*H+F*k)/R;j>=0&&l(j,jr(C,A,P,O,I,F,Vr),t)}}(e,t,r,i,o,a,s,c,l);const u=a.data,d=a.stride||a.size,f=e[0],h=e[1],m=e[2],p=t[0]-f,g=t[1]-h,v=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=d*o[t++],i=u[r++],a=u[r++],s=u[r];r=d*o[t++];let x=u[r++],b=u[r++],y=u[r];r=d*o[t++];let _=u[r++],w=u[r++],T=u[r];(0,n.H)(c)&&([i,a,s]=c.applyToVertex(i,a,s,e),[x,b,y]=c.applyToVertex(x,b,y,e),[_,w,T]=c.applyToVertex(_,w,T,e));const S=x-i,M=b-a,C=y-s,A=_-i,P=w-a,O=T-s,I=g*O-P*v,F=v*A-O*p,z=p*P-A*g,L=S*I+M*F+C*z;if(Math.abs(L)<=Number.EPSILON)continue;const D=f-i,R=h-a,B=m-s,E=D*I+R*F+B*z;if(L>0){if(E<0||E>L)continue}else if(E>0||E<L)continue;const N=R*C-M*B,U=B*S-C*D,V=D*M-S*R,H=p*N+g*U+v*V;if(L>0){if(H<0||E+H>L)continue}else if(H>0||E+H<L)continue;const k=(A*N+P*U+O*V)/L;k>=0&&l(k,jr(S,M,C,A,P,O,Vr),e)}}const kr=(0,i.n)(),Gr=(0,i.n)();function jr(e,t,r,n,i,a,s){return(0,o.o)(kr,e,t,r),(0,o.o)(Gr,n,i,a),(0,o._)(s,kr,Gr),(0,o.j)(s,s),s}function $r(e,t,r){if(!e)return;const n=e.parameters,i=e.paddingPixelsOverride;t.setUniform4f(r,n.divisor,n.offset,n.minPixelSize,i)}function qr(e,t){const r=t?qr(t):{};for(const t in e){let n=e[t];n&&n.forEach&&(n=Wr(n)),null==n&&t in r||(r[t]=n)}return r}function Wr(e){const t=[];return e.forEach((e=>t.push(e))),t}const Zr={multiply:1,ignore:2,replace:3,tint:4},Xr=1e3,Yr={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class Kr extends ee{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Yr,this._params=qr(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const n in t){const i=t[n];void 0!==i&&(r=!0,Array.isArray(i)?e[n]=i.slice():e[n]=i)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.H)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function Qr(e,t,r,n){const i=r.typedBuffer,o=r.typedBufferStride,a=e.length;n*=o;for(let r=0;r<a;++r){const a=2*e[r];i[n]=t[a],i[n+1]=t[a+1],n+=o}}function Jr(e,t,r,n,i){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(n*=a,null==i||1===i)for(let r=0;r<s;++r){const i=3*e[r];o[n]=t[i],o[n+1]=t[i+1],o[n+2]=t[i+2],n+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<i;++e)o[n]=t[s],o[n+1]=t[s+1],o[n+2]=t[s+2],n+=a}}function en(e,t,r,n,i=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(n*=a,1===i)for(let r=0;r<s;++r){const i=4*e[r];o[n]=t[i],o[n+1]=t[i+1],o[n+2]=t[i+2],o[n+3]=t[i+3],n+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<i;++e)o[n]=t[s],o[n+1]=t[s+1],o[n+2]=t[s+2],o[n+3]=t[s+3],n+=a}}function tn(e,t,r,n,i,o=1){if(r){const a=n.typedBuffer,s=n.typedBufferStride,c=e.length,l=r[0],u=r[1],d=r[2],f=r[4],h=r[5],m=r[6],p=r[8],g=r[9],v=r[10],x=r[12],b=r[13],y=r[14];if(i*=s,1===o)for(let r=0;r<c;++r){const n=3*e[r],o=t[n],c=t[n+1],_=t[n+2];a[i]=l*o+f*c+p*_+x,a[i+1]=u*o+h*c+g*_+b,a[i+2]=d*o+m*c+v*_+y,i+=s}else for(let r=0;r<c;++r){const n=3*e[r],c=t[n],_=t[n+1],w=t[n+2],T=l*c+f*_+p*w+x,S=u*c+h*_+g*w+b,M=d*c+m*_+v*w+y;for(let e=0;e<o;++e)a[i]=T,a[i+1]=S,a[i+2]=M,i+=s}}else Jr(e,t,n,i,o)}function rn(e,t,r,n,i,o){if(r){const a=r,s=n.typedBuffer,c=n.typedBufferStride,l=e.length,u=a[0],d=a[1],f=a[2],h=a[4],m=a[5],p=a[6],g=a[8],v=a[9],x=a[10],b=Math.abs(1-u*u+h*h+g*g)>1e-5||Math.abs(1-d*d+m*m+v*v)>1e-5||Math.abs(1-f*f+p*p+x*x)>1e-5,y=1e-6,_=1-y;if(i*=c,1===o)for(let r=0;r<l;++r){const n=3*e[r],o=t[n],a=t[n+1],l=t[n+2];let w=u*o+h*a+g*l,T=d*o+m*a+v*l,S=f*o+p*a+x*l;if(b){const e=w*w+T*T+S*S;if(e<_&&e>y){const t=Math.sqrt(e);w/=t,T/=t,S/=t}}s[i+0]=w,s[i+1]=T,s[i+2]=S,i+=c}else for(let r=0;r<l;++r){const n=3*e[r],a=t[n],l=t[n+1],w=t[n+2];let T=u*a+h*l+g*w,S=d*a+m*l+v*w,M=f*a+p*l+x*w;if(b){const e=T*T+S*S+M*M;if(e<_&&e>y){const t=Math.sqrt(e);T/=t,S/=t,M/=t}}for(let e=0;e<o;++e)s[i+0]=T,s[i+1]=S,s[i+2]=M,i+=c}}else Jr(e,t,n,i,o)}function nn(e,t,r,n,i,o=1){const a=n.typedBuffer,s=n.typedBufferStride,c=e.length;if(i*=s,1===o){if(4===r)for(let r=0;r<c;++r){const n=4*e[r];a[i]=t[n],a[i+1]=t[n+1],a[i+2]=t[n+2],a[i+3]=t[n+3],i+=s}else if(3===r)for(let r=0;r<c;++r){const n=3*e[r];a[i]=t[n],a[i+1]=t[n+1],a[i+2]=t[n+2],a[i+3]=255,i+=s}}else if(4===r)for(let r=0;r<c;++r){const n=4*e[r];for(let e=0;e<o;++e)a[i]=t[n],a[i+1]=t[n+1],a[i+2]=t[n+2],a[i+3]=t[n+3],i+=s}else if(3===r)for(let r=0;r<c;++r){const n=3*e[r];for(let e=0;e<o;++e)a[i]=t[n],a[i+1]=t[n+1],a[i+2]=t[n+2],a[i+3]=255,i+=s}}function on(e,...t){let r="";for(let n=0;n<t.length;n++)r+=e[n]+t[n];return r+=e[e.length-1],r}var an;(an=on||(on={})).int=function(e){return Math.round(e).toString()},an.float=function(e){return e.toPrecision(8)};const sn=.001;function cn(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(on`
        #define discardOrAdjustAlpha(color) { if (color.a < ${on.float(sn)}) { discard; } }
      `);break;case 1:r.code.add(on`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(on`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(on`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}function ln(e,t,r=32774,n=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}const un={zNear:0,zFar:1},dn={r:!0,g:!0,b:!0,a:!0};function fn(e){return wn.intern(e)}function hn(e){return Sn.intern(e)}function mn(e){return Cn.intern(e)}function pn(e){return Pn.intern(e)}function gn(e){return In.intern(e)}function vn(e){return zn.intern(e)}function xn(e){return Dn.intern(e)}function bn(e){return Bn.intern(e)}class yn{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function _n(e){return"["+e.join(",")+"]"}const wn=new yn(Tn,(e=>({__tag:"Blending",...e})));function Tn(e){return e?_n([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const Sn=new yn(Mn,(e=>({__tag:"Culling",...e})));function Mn(e){return e?_n([e.face,e.mode]):null}const Cn=new yn(An,(e=>({__tag:"PolygonOffset",...e})));function An(e){return e?_n([e.factor,e.units]):null}const Pn=new yn(On,(e=>({__tag:"DepthTest",...e})));function On(e){return e?_n([e.func]):null}const In=new yn(Fn,(e=>({__tag:"StencilTest",...e})));function Fn(e){return e?_n([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const zn=new yn(Ln,(e=>({__tag:"DepthWrite",...e})));function Ln(e){return e?_n([e.zNear,e.zFar]):null}const Dn=new yn(Rn,(e=>({__tag:"ColorWrite",...e})));function Rn(e){return e?_n([e.r,e.g,e.b,e.a]):null}const Bn=new yn(En,(e=>({__tag:"StencilWrite",...e})));function En(e){return e?_n([e.mask]):null}const Nn=new yn((function(e){return e?_n([Tn(e.blending),Mn(e.culling),An(e.polygonOffset),On(e.depthTest),Fn(e.stencilTest),Ln(e.depthWrite),Rn(e.colorWrite),En(e.stencilWrite)]):null}),(e=>({blending:fn(e.blending),culling:hn(e.culling),polygonOffset:mn(e.polygonOffset),depthTest:pn(e.depthTest),stencilTest:gn(e.stencilTest),depthWrite:vn(e.depthWrite),colorWrite:xn(e.colorWrite),stencilWrite:bn(e.stencilWrite)}))),Un=function(e,t,r,n,i=32774,o=32774,a=[0,0,0,0]){return{srcRgb:770,srcAlpha:1,dstRgb:771,dstAlpha:771,opRgb:i,opAlpha:o,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}(),Vn=ln(1,1),Hn=ln(0,771);const kn={factor:-1,units:-2};function Gn(e){return e?kn:null}function jn(e){return 3===e||2===e?513:515}class $n{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class qn{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}class Wn{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function Zn(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,s=e.count||2,c=Math.ceil((0,n.dB)(s)),l=null!=(o=t._parameterBits)?o:[0];let u=0;for(;l[u]+c>16;)u++,u>=l.length&&l.push(0);t._parameterBits=l;const d=l[u],f=(1<<c)-1<<d;l[u]+=c,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[u]=this._parameterBits[u]&~f|+e<<d&f,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var Xn=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],Yn=999,Kn=9999,Qn=0,Jn=1,ei=2,ti=3,ri=4,ni=5,ii=6,oi=7,ai=8,si=9,ci=10,li=11,ui=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function di(e){return function(e){var t=function(){var e,t,r,n=0,i=0,o=Yn,a=[],s=[],c=1,l=0,u=0,d=!1,f=!1,h="";return function(e){return s=[],null!==e?g(e.replace?e.replace(/\r\n/g,"\n"):e):(a.length&&p(a.join("")),o=ci,p("(eof)"),s)};function p(e){e.length&&s.push({type:ui[o],data:e,position:u,line:c,column:l})}function g(m){var g;for(n=0,r=(h+=m).length;e=h[n],n<r;){switch(g=n,o){case Qn:n="/"===e&&"*"===t?(a.push(e),p(a.join("")),o=Yn,n+1):(a.push(e),t=e,n+1);break;case Jn:case ei:n="\r"!==e&&"\n"!==e||"\\"===t?(a.push(e),t=e,n+1):(p(a.join("")),o=Yn,n);break;case ti:n=v();break;case ri:n="."===e||/[eE]/.test(e)?(a.push(e),o=ni,t=e,n+1):"x"===e&&1===a.length&&"0"===a[0]?(o=li,a.push(e),t=e,n+1):/[^\d]/.test(e)?(p(a.join("")),o=Yn,n):(a.push(e),t=e,n+1);break;case li:n=/[^a-fA-F0-9]/.test(e)?(p(a.join("")),o=Yn,n):(a.push(e),t=e,n+1);break;case ni:"f"===e&&(a.push(e),t=e,n+=1),n=/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(a.push(e),t=e,n+1):/[^\d]/.test(e)?(p(a.join("")),o=Yn,n):(a.push(e),t=e,n+1);break;case Kn:n=b();break;case si:n=/[^\s]/g.test(e)?(p(a.join("")),o=Yn,n):(a.push(e),t=e,n+1);break;case Yn:a=a.length?[]:a,n="/"===t&&"*"===e?(u=i+n-1,o=Qn,t=e,n+1):"/"===t&&"/"===e?(u=i+n-1,o=Jn,t=e,n+1):"#"===e?(o=ei,u=i+n,n):/\s/.test(e)?(o=si,u=i+n,n):(d=/\d/.test(e),f=/[^\w_]/.test(e),u=i+n,o=d?ri:f?ti:Kn,n)}g!==n&&("\n"===h[g]?(l=0,++c):++l)}return i+=n,h=h.slice(n),s}function v(){if("."===t&&/\d/.test(e))return o=ni,n;if("/"===t&&"*"===e)return o=Qn,n;if("/"===t&&"/"===e)return o=Jn,n;if("."===e&&a.length){for(;x(a););return o=ni,n}if(";"===e||")"===e||"("===e){if(a.length)for(;x(a););return p(e),o=Yn,n+1}var r=2===a.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;x(a););return o=Yn,n}return a.push(e),t=e,n+1}function x(e){for(var t,r,n=0;;){if(t=m.t.indexOf(e.slice(0,e.length+n).join("")),r=m.t[t],-1===t){if(n--+e.length>0)continue;r=e.slice(0,1).join("")}return p(r),u+=r.length,(a=a.slice(r.length)).length}}function b(){if(/[^\d\w_]/.test(e)){var r=a.join("");return o=m.r.indexOf(r)>-1?ai:m.o.indexOf(r)>-1?oi:ii,p(a.join("")),o=Yn,n}return a.push(e),t=e,n+1}}(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}const fi=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function hi(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function mi(e,t,r,n){n=n||r;for(const i of e)if("ident"===i.type&&i.data===r)return n in t?t[n]++:t[n]=0,mi(e,t,n+"_"+t[n],n);return r}function pi(e,t,r="afterVersion"){function n(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}const i={data:"\n",type:"whitespace"},o=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let a=function(e){let t=-1,i=0,o=-1;for(let a=0;a<e.length;a++){const s=e[a];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++i:s.data.match(/\#endif\s*.*/)&&--i),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,a)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=n(e,a);if(null===t)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,t)}t<o&&0===i&&(t=a)}return t+1}(e);o(a-1)&&e.splice(a++,0,i);for(const r of t)e.splice(a++,0,r);o(a-1)&&o(a)&&e.splice(a,0,i)}function gi(e,t,r,n="lowp"){pi(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function vi(e,t,r,n,i="lowp"){pi(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:n.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function xi(e,t){let r,n,i=-1;for(let o=t;o<e.length;o++){const t=e[o];if("operator"===t.type&&("["===t.data&&(r=o),"]"===t.data)){n=o;break}"integer"===t.type&&(i=parseInt(t.data,10))}return r&&n&&e.splice(r,n-r+1),i}class bi{constructor(e,t,r,n,i={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),e.instanceCounter.increment(3,this),this._context=e,this._vertexShaderSource=t,this._fragmentShaderSource=r,Array.isArray(i))for(const e of i)this._defines[e]="1";else this._defines=i;this._locations=n}get glName(){return this._glName}get locations(){return this._locations}getDefine(e){return this._defines[e]}dispose(){if(!this._context)return;const e=this._context.gl;if(this._vShader){const t=this._vShader;e.deleteShader(t),this._vShader=null}if(this._fShader){const t=this._fShader;e.deleteShader(t),this._fShader=null}this._glName&&(e.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const e=this._context.gl,t=e.createProgram();e.attachShader(t,this._vShader),e.attachShader(t,this._fShader);for(const r in this._locations){const n=this._locations[r];e.bindAttribLocation(t,n,r)}e.linkProgram(t),this._glName=t,this._initialized=!0}getUniformLocation(e){return this.initialize(),void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this._glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this.getUniformLocation(e)}getAttribLocation(e){return this.initialize(),void 0===this._nameToAttribLocation[e]&&(this._nameToAttribLocation[e]=this._context.gl.getAttribLocation(this._glName,e)),this._nameToAttribLocation[e]}setUniform1i(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){const r=this._nameToUniform1v[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform2iv(e,t){const r=this._nameToUniform2[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform3iv(e,t){const r=this._nameToUniform3[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform4iv(e,t){const r=this._nameToUniform4[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform1f(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){const r=this._nameToUniform1v[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform2f(e,t,r){const n=this._nameToUniform2[e];void 0!==n&&t===n[0]&&r===n[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(e),t,r),void 0===n?this._nameToUniform2[e]=[t,r]:(n[0]=t,n[1]=r))}setUniform2fv(e,t){const r=this._nameToUniform2[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform3f(e,t,r,n){const i=this._nameToUniform3[e];void 0!==i&&t===i[0]&&r===i[1]&&n===i[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(e),t,r,n),void 0===i?this._nameToUniform3[e]=[t,r,n]:(i[0]=t,i[1]=r,i[2]=n))}setUniform3fv(e,t){const r=this._nameToUniform3[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniform4f(e,t,r,n,i){const o=this._nameToUniform4[e];void 0!==o&&t===o[0]&&r===o[1]&&n===o[2]&&i===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(e),t,r,n,i),void 0===o?this._nameToUniform4[e]=[t,r,n,i]:(o[0]=t,o[1]=r,o[2]=n,o[3]=i))}setUniform4fv(e,t){const r=this._nameToUniform4[e];yi(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=bi._arrayCopy(t):bi._arrayAssign(t,r))}setUniformMatrix3fv(e,t,r=!1){const i=this._nameToUniformMatrix3[e];(function(e,t){return!!(0,n.t)(e)||(9!==e.length?yi(e,t):9!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8])})(i,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(e),r,t),void 0===i?this._nameToUniformMatrix3[e]=bi._arrayCopy(t):bi._arrayAssign(t,i))}setUniformMatrix4fv(e,t,r=!1){const i=this._nameToUniformMatrix4[e];(function(e,t){return!!(0,n.t)(e)||(16!==e.length?yi(e,t):16!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8]||e[9]!==t[9]||e[10]!==t[10]||e[11]!==t[11]||e[12]!==t[12]||e[13]!==t[13]||e[14]!==t[14]||e[15]!==t[15])})(i,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(e),r,t),void 0===i?this._nameToUniformMatrix4[e]=bi._arrayCopy(t):bi._arrayAssign(t,i))}assertCompatibleVertexAttributeLocations(e){const t=e.locations===this.locations;return t||console.error("VertexAttributeLocations are incompatible"),t}static _padToThree(e){let t=e.toString();return e<1e3&&(t=("  "+e).slice(-3)),t}_addLineNumbers(e){let t=2;return e.replace(/\n/g,(()=>"\n"+bi._padToThree(t++)+":"))}_loadShader(e){const t=35633===e;let r=t?this._vertexShaderSource:this._fragmentShaderSource,n="";for(const e in this._defines)n+=`#define ${e} ${this._defines[e]}\n`;r=n+r,"webgl2"===this._context.contextVersion&&(r=function(e,t){const r=di(e);if("300 es"===function(e,t="100",r="300 es"){const n=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const i of e)if("preprocessor"===i.type){const e=n.exec(i.data);if(e){const n=e[1].replace(/\s\s+/g," ");if(n===r)return n;if(n===t)return i.data="#version "+r,t;throw new Error("unknown glsl version: "+n)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let n=null,i=null;const o={},a={};for(let e=0;e<r.length;++e){const s=r[e];switch(s.type){case"keyword":"vertex"===t&&"attribute"===s.data?s.data="in":"varying"===s.data&&(s.data="vertex"===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===s.data&&(n||(n=mi(r,o,"fragColor"),gi(r,n,"vec4")),s.data=n),"fragment"===t&&"gl_FragData"===s.data){const t=xi(r,e+1),n=mi(r,o,"fragData");vi(r,n,"vec4",t,"mediump"),s.data=n}else"fragment"===t&&"gl_FragDepthEXT"===s.data&&(i||(i=mi(r,o,"gl_FragDepth")),s.data=i);break;case"ident":if(Xn.indexOf(s.data)>=0){if("vertex"===t&&hi(r,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in a||(a[s.data]=mi(r,o,s.data)),s.data=a[s.data]}}}for(let e=r.length-1;e>=0;--e){const t=r[e];if("preprocessor"===t.type){const n=t.data.match(/\#extension\s+(.*)\:/);if(n&&n[1]&&fi.indexOf(n[1].trim())>=0){const t=r[e+1];r.splice(e,t&&"whitespace"===t.type?2:1)}const i=t.data.match(/\#ifdef\s+(.*)/);i&&i[1]&&fi.indexOf(i[1].trim())>=0&&(t.data="#if 1");const o=t.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&fi.indexOf(o[1].trim())>=0&&(t.data="#if 0")}}return function(e){return e.map((e=>"eof"!==e.type?e.data:"")).join("")}(r)}(r,t?"vertex":"fragment"));const i=this._context.gl,o=i.createShader(e);return i.shaderSource(o,r),i.compileShader(o),o}static _arrayCopy(e){const t=[];for(let r=0;r<e.length;++r)t.push(e[r]);return t}static _arrayAssign(e,t){for(let r=0;r<e.length;++r)t[r]=e[r]}}function yi(e,t){if((0,n.t)(e)||e.length!==t.length)return!0;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!0;return!1}function _i(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}const wi=_i();var Ti;Object.freeze({__proto__:null,create:_i,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,n,i,o,a,s,c,l,u,d,f,h,m,p){const g=new Float32Array(16);return g[0]=e,g[1]=t,g[2]=r,g[3]=n,g[4]=i,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=d,g[12]=f,g[13]=h,g[14]=m,g[15]=p,g},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:wi}),function(e){function t(e,t,r){(0,a.c)(Si,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Si)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(Ti||(Ti={}));const Si=_i();function Mi(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=on`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,n=on`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,i=t.sliceHighlightDisabled?on`#define highlightSlice(_color_, _pos_) (_color_)`:on`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(i)}else{const r=on`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}var Ci;(Ci=Mi||(Mi={})).bindUniformsWithOrigin=function(e,t,r){Ci.bindUniforms(e,t,r.slicePlane,r.origin)},Ci.bindUniforms=function(e,t,r,a){t.slicePlaneEnabled&&((0,n.H)(r)?(a?((0,o.c)(Ai,r.origin,a),e.setUniform3fv("slicePlaneOrigin",Ai)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",i.f),e.setUniform3fv("slicePlaneBasis2",i.f),e.setUniform3fv("slicePlaneOrigin",i.f)))};const Ai=(0,i.n)(),Pi=B(1,1,0,1),Oi=B(1,0,1,1);function Ii(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",Pi).add("unoccludedHighlightFlag","vec4",Oi),e.fragment.code.add(on`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}function Fi(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(on`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(on`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?on`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(on`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(on`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?on`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(on`
      vec4 vvColor() { return vec4(1.0); }
    `)}function zi(e){e.vertex.code.add(on`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(on`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(on`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(on`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(on`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(on`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(on`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function Li(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(zi),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(on`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?on`vec3 worldNormal = normalize(worldPos + localOrigin);`:on`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?on`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:on`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(on`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(Ii||(Ii={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])},function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(Fi||(Fi={})),function(e){e.bindUniforms=function(e,t){t.screenSizePerspective&&($r(t.screenSizePerspective,e,"screenSizePerspective"),$r(t.screenSizePerspectiveAlignment||t.screenSizePerspective,e,"screenSizePerspectiveAlignment"))}}(zi||(zi={})),function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const n=function(e,t,r,n=Di){return n.screenLength=e.screenLength,n.perDistance=Math.tan(.5*t)/(.5*r),n.minWorldLength=e.minWorldLength,n.maxWorldLength=e.maxWorldLength,n}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",n.screenLength*i,n.perDistance,n.minWorldLength,n.maxWorldLength)}}(Li||(Li={}));const Di={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};function Ri(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(on`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}const Bi={mask:255},Ei={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Ni={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Ui(e){e.code.add(on`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function Vi(e){e.fragment.include(Ui),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(on`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}!function(e){e.bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},e.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},e.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}}(Vi||(Vi={}));class Hi{constructor(e,t,r,n,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(1,this),this._glName=this._context.gl.createBuffer(),n&&this.setData(n,i)}static createIndex(e,t,r,n){return new Hi(e,34963,t,r,n)}static createVertex(e,t,r){return new Hi(e,34962,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(e,t){if(!e)return;if("number"==typeof e){if(e<0&&console.error("Buffer size cannot be negative!"),34963===this.bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{let t=e.byteLength;(0,n.dL)(e)&&(t/=2,this._indexType=5123),(0,n.dM)(e)&&(t/=4,this._indexType=5125),this._size=t}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this.bufferType,e,this.usage),this._context.bindVAO(r)}setSubData(e,t=0,r=0,i=e.byteLength){if(!e)return;(t<0||t>=this._size)&&console.error("offset is out of range!");let o=t,a=r,s=i,c=e.byteLength;(0,n.dL)(e)&&(c/=2,o*=2,a*=2,s*=2),(0,n.dM)(e)&&(c/=4,o*=4,a*=4,s*=4),void 0===i&&(i=c-1),r>=i&&console.error("end must be bigger than start!"),t+r-i>this._size&&console.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,d=ArrayBuffer.isView(e)?e.buffer:e,f=0===a&&s===e.byteLength?d:d.slice(a,s);u.bufferSubData(this.bufferType,o,f),this._context.bindVAO(l)}}function ki(e,t,r,n,i){const o=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of n){const r=t[e.name],n=(i||(0+e.baseInstance?e.baseInstance:0))*e.stride;if(void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`),e.baseInstance&&!e.divisor&&console.error(`Vertex attribute '${e.name}' uses baseInstanceOffset without divisor.`),e.count<=4)o.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+n),o.enableVertexAttribArray(r),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)o.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+n),o.enableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)o.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+n),o.enableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function Gi(e,t,r,n){const i=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);for(const e of n){const r=t[e.name];if(e.count<=4)i.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)i.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)i.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(34962)}class ji{constructor(e,t,r,n,i){this._context=e,this._locations=t,this._layout=r,this._buffers=n,this._indexBuffer=i,this._glName=null,this._initialized=!1,e.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].size),this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return;const t=this._context.capabilities.vao;if(t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e].dispose(),delete this._buffers[e];this._indexBuffer=(0,n.dN)(this._indexBuffer)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const e=this._buffers,t=!!this._context.capabilities.vao,r=this._layout,n=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const t in e){const n=e[t];n||console.error("Vertex buffer is uninitialized!");const i=r[t];i||console.error("Vertex element descriptor is empty!"),ki(this._context,this._locations,n,i)}n&&(t?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,n.glName):this._context.bindBuffer(n))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const e=this._buffers,t=this._layout;e||console.error("Vertex buffer dictionary is empty!");for(const r in e){const n=e[r];n||console.error("Vertex buffer is uninitialized!");const i=t[r];Gi(this._context,this._locations,n,i)}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}class $i{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,async function(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new m.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),n=Hi.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),i=new ji(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:n}),o=new bi(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});e.bindProgram(o);const a=new m.b(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(a,0),o.setUniform1i("u_texture",0);const s=e.getBoundFramebufferObject(),{x:c,y:l,width:u,height:d}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(i),e.drawArrays(5,0,4);const f=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,f),o.dispose(),i.dispose(!1),n.dispose(),r.dispose(),a.dispose(),e.setViewport(c,l,u,d),e.bindFramebuffer(s),t.src="",255===f[0]}(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e}))}get doublePrecisionRequiresObfuscation(){if((0,n.t)(this._doublePrecisionRequiresObfuscation)){const e=Wi(this.context,!1),t=Wi(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let qi=null;function Wi(e,t){const r=new m.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),n=Hi.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new ji(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:n}),a=(0,i.t)(5633261.287538229,2626832.878767164,1434988.0495278358),s=(0,i.t)(5633271.46742708,2626873.6381334523,1434963.231608387),c=function(r,n){const i=new bi(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),o=new Float32Array(6);Cr(r,o,3);const a=new Float32Array(6);return Cr(n,a,3),e.bindProgram(i),i.setUniform3f("u_highA",o[0],o[2],o[4]),i.setUniform3f("u_lowA",o[1],o[3],o[5]),i.setUniform3f("u_highB",a[0],a[2],a[4]),i.setUniform3f("u_lowB",a[1],a[3],a[5]),i}(a,s),l=e.getBoundFramebufferObject(),{x:u,y:d,width:f,height:h}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const p=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,p),c.dispose(),o.dispose(!1),n.dispose(),r.dispose(),e.setViewport(u,d,f,h),e.bindFramebuffer(l);const g=(a[2]-s[2])/25,v=Y(p);return Math.abs(g-v)}function Zi({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(on`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(on`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function Xi(e){return!!(0,h.t)("force-double-precision-obfuscation")||(t=e,((0,n.t)(qi)||qi.context!==t)&&(qi=new $i(t)),qi).doublePrecisionRequiresObfuscation;var t}function Yi(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(Zi,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[on`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,on`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?on`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,on`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,on`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?on`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:on``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,n){for(let n=0;n<3;++n)Ar[0]=e[n],Cr(Ar,Pr,1),t[n]=Pr[0],r[n]=Pr[1]})(t,Ki,Qi),e.setUniform3fv("viewOriginHi",Ki),e.setUniform3fv("viewOriginLo",Qi)}}(Yi||(Yi={}));const Ki=(0,i.n)(),Qi=(0,i.n)();function Ji(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(on`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(on`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(on`
      void forwardTextureCoordinates() {}
    `)}function eo(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(on`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function to(e,t){e.include(Ji,t),e.fragment.code.add(on`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(on`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(eo),e.fragment.code.add(on`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}function ro(e,t){const r=e.fragment,n=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&n&&e.include(to,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(on`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(on`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(on`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(on`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(on`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(on`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(on`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${n?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(on`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}function no(e,t){t.linearDepth?e.vertex.code.add(on`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(on`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}(0,c.t)(0,.6,.2),function(e){e.bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}}(ro||(ro={}));const io=n.S.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class oo{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&io.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class ao extends oo{constructor(){super(...arguments),this.vertex=new lo,this.fragment=new lo,this.attributes=new uo,this.varyings=new fo,this.extensions=new ho,this.constants=new mo}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),a=i.code.generateSource(),s="vertex"===e?go:po,c=this.constants.generateSource().concat(i.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${a.join("\n")}`}}class so{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const n=`${e}_${t}_${r}`;return this._set.has(n)||(this._entries.push([e,t,r]),this._set.add(n)),this}generateSource(){return this._entries.map((e=>`uniform ${e[1]} ${e[0]}${(e=>e?`[${e}]`:"")(e[2])};`))}}class co{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class lo extends oo{constructor(){super(...arguments),this.uniforms=new so,this.code=new co,this.constants=new mo}get builder(){return this}}class uo{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class fo{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class ho{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?ho.ALLOWLIST_VERTEX:ho.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}ho.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ho.ALLOWLIST_VERTEX=[];class mo{constructor(){this._entries=[]}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=mo.numberToFloatStr(r);break;case"int":n=mo.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${mo.numberToFloatStr(r[0])},                            ${mo.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${mo.numberToFloatStr(r[0])},                            ${mo.numberToFloatStr(r[1])},                            ${mo.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${mo.numberToFloatStr(r[0])},                            ${mo.numberToFloatStr(r[1])},                            ${mo.numberToFloatStr(r[2])},                            ${mo.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${mo.numberToIntStr(r[0])},                             ${mo.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${mo.numberToIntStr(r[0])},                             ${mo.numberToIntStr(r[1])},                             ${mo.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${mo.numberToIntStr(r[0])},                             ${mo.numberToIntStr(r[1])},                             ${mo.numberToIntStr(r[2])},                             ${mo.numberToIntStr(r[3])})`;break;case"bvec2":n=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":n=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":n=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>mo.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const po="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",go="precision highp float;\nprecision highp sampler2D;";function vo(e){e.include(Ui),e.code.add(on`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}function xo(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(on`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(on`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(on`
      void forwardLinearDepth() {}
    `)}function bo(e){e.vertex.code.add(on`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(on`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}function yo(e){const t=e.fragment.code;t.add(on`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(on`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(on`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function _o(e,t){const r=e.fragment.code;e.include(bo),3===t.pbrMode||4===t.pbrMode?(r.add(on`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(on`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(on`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(on`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(on`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(yo),r.add(on`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(on`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(on`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(on`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(on`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(on`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}function wo(e){e.vertex.code.add(on`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}function To(e){const t=on`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function So(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(on`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(To),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(on`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(on`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}function Mo(e){e.attributes.add("position","vec3"),e.vertex.code.add(on`
    vec3 positionModel() { return position; }
  `)}function Co(e){e.vertex.code.add(on`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${on.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${on.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${on.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${on.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ao(e,t){t.symbolColor?(e.include(Co),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(on`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(on`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}function Po(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(on`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(on`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(on`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}function Oo(e,t){e.include(Mo),e.vertex.include(Zi,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(on`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(on`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function Io(e,t){0===t.normalType||1===t.normalType?(e.include(So,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(on`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(Oo,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(on`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?on`normalize(vPositionWorldCameraRelative);`:on`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(on`
      void forwardNormal() {}
    `)}function Fo(e,t){e.fragment.include(Ui),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(on`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(on`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function zo(e,t){const r=e.vertex.code,n=e.fragment.code;1!==t.output&&3!==t.output||(e.include(no,{linearDepth:!0}),e.include(Ji,t),e.include(Fi,t),e.include(Fo,t),e.include(Mi,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(on`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(cn,t),n.add(on`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(no,{linearDepth:!1}),e.include(So,t),e.include(Io,t),e.include(Ji,t),e.include(Fi,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(on`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?on`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Mi,t),e.include(cn,t),n.add(on`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?on`
            vec3 normal = screenDerivativeNormal(vPositionView);`:on`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(no,{linearDepth:!1}),e.include(Ji,t),e.include(Fi,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(on`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Mi,t),e.include(cn,t),e.include(Ii),n.add(on`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Lo(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(on`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(on`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(on`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(to,t),r.code.add(on`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Do(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(on`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(on`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}function Ro(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(on`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(on`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(on`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(on`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function Bo(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(on`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function Eo(e,t){const r=e.fragment;e.include(Bo),e.include(Do,t),0!==t.pbrMode&&e.include(_o,t),e.include(Ro,t),t.receiveShadows&&e.include(Vi,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(bo),r.code.add(on`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(on`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(on`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(on`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(on`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(on`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(on`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(on`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(on`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(on`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(on`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?on`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:on`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}function No(e,t){const r=e.fragment;r.code.add(on`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(on`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(on`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(on`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}function Uo(e,t){on`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}function Vo(e){e.code.add(on`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function Ho(e){e.include(Vo),e.code.add(on`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${on.int(1)}) {
        return allMixed;
      }
      else if (mode == ${on.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${on.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${on.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${on.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function ko(e){const t=new ao,r=t.vertex.code,n=t.fragment.code;return t.include(Uo,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(Mo),t.varyings.add("vpos","vec3"),t.include(Fi,e),t.include(Yi,e),t.include(Li,e),0!==e.output&&7!==e.output||(t.include(So,e),t.include(no,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(wo),t.include(Lo,e),t.include(Io,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(Ji,e),t.include(xo,e),t.include(Ao,e),t.include(Po,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(on`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${on.float(sn)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?on`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(Mi,e),t.include(cn,e),e.multipassTerrainEnabled&&(t.fragment.include(vo),t.include(Ri,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Ho),n.add(on`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:on`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?on`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:on`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Mi,e),t.include(Eo,e),t.include(Do,e),t.include(cn,e),e.receiveShadows&&t.include(Vi,e),e.multipassTerrainEnabled&&(t.fragment.include(vo),t.include(Ri,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(ro,e),t.include(_o,e),t.fragment.include(Ho),t.include(No,e),n.add(on`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:on`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?on`
        vec3 normal = screenDerivativeNormal(localvpos);`:on`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?on`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:on`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?on`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?on`vec3 normalGround = normalize(vpos + localOrigin);`:on`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:on``}
        ${1===e.pbrMode||2===e.pbrMode?on`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(zo,e),t}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=(0,c.e)(),this.worldFromModel_TH=(0,i.n)(),this.worldFromModel_TL=(0,i.n)()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,i.n)(),this.worldFromView_TL=(0,i.n)(),this.viewFromCameraRelative_RS=(0,c.e)(),this.projFromView=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Oo||(Oo={})),(Io||(Io={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};var Go=Object.freeze({__proto__:null,build:ko});class jo extends qn{initializeProgram(e){const t=jo.shader.get(),r=this.configuration,n=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Xi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new bi(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),Yr)}bindPass(e,t,r){Ti.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const n=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===n)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),function(e,t,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(r.terrainLinearDepthTexture,10))}(this.program,e,r)),7===n&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Zr[t.colorMixMode])),0===n?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Zr[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&ro.bindUniforms(this.program,t,this.configuration.isSchematic)):4===n&&Ii.bindOutputHighlight(e,this.program,r),Fi.bindUniformsForSymbols(this.program,t),Li.bindUniforms(this.program,t,r),$r(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,i.t)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Ti.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Ti.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Yi.bindCustomOrigin(this.program,t),Mi.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Vi.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,n=3===e,i=2===e;return function(e){return Nn.intern(e)}({blending:0!==r.output&&7!==r.output||!r.transparent?null:n?Un:(o=e,2===o?null:1===o?Hn:Vn),culling:$o(r),depthTest:{func:jn(e)},depthWrite:n||i?r.writeDepth&&un:null,colorWrite:dn,stencilWrite:r.sceneHasOcludees?Bi:null,stencilTest:r.sceneHasOcludees?t?Ni:Ei:null,polygonOffset:n||i?null:Gn(r.enableOffset)});var o}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}jo.shader=new $n(Go,(()=>r.e(20171).then(r.bind(r,20171))));const $o=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class qo extends Wn{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}function Wo(e){const t=new ao,r=t.vertex.code,n=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(Mo),t.varyings.add("vpos","vec3"),t.include(Fi,e),t.include(Yi,e),t.include(Li,e),0!==e.output&&7!==e.output||(t.include(So,e),t.include(no,{linearDepth:!1}),e.offsetBackfaces&&t.include(wo),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(Ji,e),t.include(xo,e),t.include(Ao,e),t.include(Po,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(on`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${on.float(sn)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?on`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(Mi,e),t.include(cn,e),e.multipassTerrainEnabled&&(t.fragment.include(vo),t.include(Ri,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Ho),n.add(on`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?on`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:on`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?on`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:on`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Mi,e),t.include(Eo,e),t.include(Do,e),t.include(cn,e),e.receiveShadows&&t.include(Vi,e),e.multipassTerrainEnabled&&(t.fragment.include(vo),t.include(Ri,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(ro,e),t.include(_o,e),t.fragment.include(Ho),n.add(on`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?on`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?on`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:on`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?on`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:on`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${on`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?on`vec3 normalGround = normalize(vpos + localOrigin);`:on`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:on``}
        ${1===e.pbrMode||2===e.pbrMode?on`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(zo,e),t}(0,n.Z)([Zn({count:8})],qo.prototype,"output",void 0),(0,n.Z)([Zn({count:4})],qo.prototype,"alphaDiscardMode",void 0),(0,n.Z)([Zn({count:3})],qo.prototype,"doubleSidedMode",void 0),(0,n.Z)([Zn()],qo.prototype,"isSchematic",void 0),(0,n.Z)([Zn()],qo.prototype,"vertexColors",void 0),(0,n.Z)([Zn()],qo.prototype,"offsetBackfaces",void 0),(0,n.Z)([Zn()],qo.prototype,"symbolColors",void 0),(0,n.Z)([Zn()],qo.prototype,"vvSize",void 0),(0,n.Z)([Zn()],qo.prototype,"vvColor",void 0),(0,n.Z)([Zn()],qo.prototype,"verticalOffset",void 0),(0,n.Z)([Zn()],qo.prototype,"receiveShadows",void 0),(0,n.Z)([Zn()],qo.prototype,"slicePlaneEnabled",void 0),(0,n.Z)([Zn()],qo.prototype,"sliceHighlightDisabled",void 0),(0,n.Z)([Zn()],qo.prototype,"receiveAmbientOcclusion",void 0),(0,n.Z)([Zn()],qo.prototype,"screenSizePerspective",void 0),(0,n.Z)([Zn()],qo.prototype,"textureAlphaPremultiplied",void 0),(0,n.Z)([Zn()],qo.prototype,"hasColorTexture",void 0),(0,n.Z)([Zn()],qo.prototype,"usePBR",void 0),(0,n.Z)([Zn()],qo.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,n.Z)([Zn()],qo.prototype,"hasEmissionTexture",void 0),(0,n.Z)([Zn()],qo.prototype,"hasOcclusionTexture",void 0),(0,n.Z)([Zn()],qo.prototype,"hasNormalTexture",void 0),(0,n.Z)([Zn()],qo.prototype,"instanced",void 0),(0,n.Z)([Zn()],qo.prototype,"instancedColor",void 0),(0,n.Z)([Zn()],qo.prototype,"instancedDoublePrecision",void 0),(0,n.Z)([Zn()],qo.prototype,"vertexTangents",void 0),(0,n.Z)([Zn()],qo.prototype,"normalsTypeDerivate",void 0),(0,n.Z)([Zn()],qo.prototype,"writeDepth",void 0),(0,n.Z)([Zn()],qo.prototype,"sceneHasOcludees",void 0),(0,n.Z)([Zn()],qo.prototype,"transparent",void 0),(0,n.Z)([Zn()],qo.prototype,"enableOffset",void 0),(0,n.Z)([Zn({count:3})],qo.prototype,"cullFace",void 0),(0,n.Z)([Zn({count:4})],qo.prototype,"transparencyPassType",void 0),(0,n.Z)([Zn()],qo.prototype,"multipassTerrainEnabled",void 0),(0,n.Z)([Zn()],qo.prototype,"cullAboveGround",void 0);var Zo=Object.freeze({__proto__:null,build:Wo});class Xo extends jo{initializeProgram(e){const t=Xo.shader.get(),r=this.configuration,n=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Xi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new bi(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),Yr)}}Xo.shader=new $n(Zo,(()=>r.e(23970).then(r.bind(r,23970))));class Yo extends Kr{constructor(e){super(e,Jo),this.supportsEdges=!0,this.techniqueConfig=new qo,this.vertexBufferLayout=Yo.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Yo.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,n=e.symbolColors,i=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(i||o||n)?!!a||s:r?a?c:s:i||o||n?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,a,s,c){if(null!==this.params.verticalOffset){const e=i.camera;(0,o.o)(aa,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=(0,o.j)(ia,aa);break;case 2:t=(0,o.r)(ia,na)}let c=0;if(null!==this.params.verticalOffset){const r=(0,o.c)(sa,aa,e.eye),i=(0,o.s)(r),a=(0,o.d)(r,r,1/i);let s=null;this.params.screenSizePerspective&&(s=(0,o.z)(t,a)),c+=function(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=Dr(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.dK)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.params.verticalOffset,s,this.params.screenSizePerspective)}(0,o.d)(t,t,c),(0,o.L)(oa,t,i.transform.inverseRotation),a=(0,o.c)(ta,a,oa),s=(0,o.c)(ra,s,oa)}Er(e,t,i,a,s,function(e){return(0,n.H)(e)?(Or.offset=e,Or):null}(i.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Ko(e)}createBufferWriter(){return new ea(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,l.A)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=(0,l.A)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Ko extends Lr{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(Xo,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(jo,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Qo=2.1,Jo={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,c.e)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class ea{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,n){!function(e,t,r,n,i,o){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{X(3===t.size);const e=i.getField(a,l.a);e&&tn(s,t.data,r,e,o);break}case"normal":{X(3===t.size);const e=i.getField(a,l.a);e&&rn(s,t.data,n,e,o,1);break}case"uv0":{X(2===t.size);const e=i.getField(a,l.u);e&&Qr(s,t.data,e,o);break}case"color":{X(3===t.size||4===t.size);const e=i.getField(a,l.x);e&&nn(s,t.data,t.size,e,o);break}case"symbolColor":{X(3===t.size||4===t.size);const e=i.getField(a,l.x);e&&nn(s,t.data,t.size,e,o);break}case"tangent":{X(4===t.size);const e=i.getField(a,l.p);e&&en(s,t.data,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,n)}}const ta=(0,i.n)(),ra=(0,i.n)(),na=(0,i.t)(0,0,1),ia=(0,i.n)(),oa=(0,i.n)(),aa=(0,i.n)(),sa=(0,i.n)();async function ca(e,t){const{data:r}=await(0,n.U)(e,{responseType:"image",...t});return r}const la=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],ua=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];let da,fa=null,ha=null;const ma=n.S.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function pa(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ga=pa("DXT1"),va=pa("DXT3"),xa=pa("DXT5");class ba extends ee{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new n.aB,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=ba.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,n.t)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,n.dk)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,n.a8)(e.src)||(0,n.dk)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,n.t)(e))return 0;if((0,n.d5)(e)||(0,n.dO)(e))return t.encoding===ba.BASIS_ENCODING?function(e){if((0,n.t)(fa))return e.byteLength;const t=new fa.BasisFile(new Uint8Array(e));if(t.getNumImages()<1)return 0;const r=t.getNumLevels(0),i=t.getHasAlpha(),o=t.getImageWidth(0,0),a=t.getImageHeight(0,0);t.close(),t.delete();const s=function(e){switch(e){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5}return 0}(i?37496:37492),c=(4**r-1)/(3*4**(r-1));return Math.ceil(o*a*s*c)}(e):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ba.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if((0,n.H)(this.glTexture))return this.glTexture;if((0,n.H)(this.loadingPromise))return this.loadingPromise;const r=this.data;return(0,n.t)(r)?(this.glTexture=new m.b(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,n.d5)(r)||(0,n.dO)(r))&&this.params.encoding===ba.DDS_ENCODING?this.loadFromDDSData(e,r):((0,n.d5)(r)||(0,n.dO)(r))&&this.params.encoding===ba.BASIS_ENCODING?this.loadFromBasis(e,r):(0,n.dO)(r)?this.loadFromPixelData(e,r):(0,n.d5)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,n.t)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,n.H)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:n,sourceTexture:i}=this.powerOfTwoStretchInfo;i.setData(this.data),this.drawStretchedTexture(e,t,r,n,i,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:n}=this.glTexture.descriptor;e!==r||t!==n?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,n),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=function(e,t,r,i){const{textureData:o,internalFormat:a,width:s,height:c}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return ma.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return ma.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,a;switch(i){case ga:o=8,a=33776;break;case va:o=16,a=33778;break;case xa:o=16,a=33779;break;default:return ma.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(ma.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let f,h;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,n.d4)(c)&&(0,n.d4)(l)||(ma.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let m=r[1]+4;const p=[];for(let t=0;t<s;++t)h=(c+3>>2)*(l+3>>2)*o,f=new Uint8Array(e,m,h),p.push(f),m+=h,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:u,height:d}}(r,i);t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=s,t.height=c;const l=new m.b(e,t,o);return e.bindTexture(l,0),l}(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,i){(0,n.t)(fa)&&(fa=await async function(){return(0,n.t)(ha)&&(ha=function(){if((0,n.t)(da)){const e=e=>(0,n.a7)(`esri/libs/basisu/${e}`);da=r.e(17041).then(r.bind(r,17041)).then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return da}(),fa=await ha),ha}());const o=new fa.BasisFile(new Uint8Array(i));if(o.getNumImages()<1)return null;const a=o.getNumLevels(0),s=o.getHasAlpha(),c=o.getImageWidth(0,0),l=o.getImageHeight(0,0),{compressedTextureETC:u,compressedTextureS3TC:d}=e.capabilities,[f,h]=u?s?[1,37496]:[0,37492]:d?s?[3,33779]:[2,33776]:[13,6408];o.startTranscoding();const p=[];for(let e=0;e<a;e++)p.push(new Uint8Array(o.getImageTranscodedSizeInBytes(0,e,f))),o.transcodeImage(p[e],0,e,f,0,0);o.close(),o.delete();const g={...t,samplingMode:a>1?9987:9729,hasMipmap:a>1,internalFormat:h,width:c,height:l};return new m.b(e,g,{type:"compressed",levels:p})}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){X(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new m.b(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=(0,n.az)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async n=>{const i=await ca(r,{signal:n});return this.loadFromImage(e,i,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const o=await(0,n.dP)(r,r.src,!1,i);return this.loadFromImage(e,o,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),(0,n.H)(u)&&u.remove()},c=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},l=e=>{s(),a(e||new n.s("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=(0,n.b8)(i,(()=>l((0,n.b9)())))}))))}loadFromImage(e,t,r){const i=ba.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||(0,n.d4)(i.width)&&(0,n.d4)(i.height)?(o.width=i.width,o.height=i.height,this.glTexture=new m.b(e,o,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,n="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,m.n)(e.gl)&&(t.hasMipmap||!n)}makePowerOfTwoTexture(e,t,r,i,o){const{width:a,height:s}=r,c=(0,n.cD)(a),l=(0,n.cD)(s);let u;switch(i.width=c,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/c,s/l],u=new m.b(e,i),u.updateData(0,0,0,a,s,t);break;case 1:case null:case void 0:u=this.stretchToPowerOfTwo(e,t,i,o)}return i.hasMipmap&&u.generateMipmap(),u}stretchToPowerOfTwo(e,t,r,n){const i=new m.b(e,r),o=new m.a(e,{colorTarget:0,depthStencilTarget:0},i),a=new m.b(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=la,r=Yr,n=-1,i=1){let o=null;return o=t===ua?new Float32Array([n,n,0,0,i,n,1,0,n,i,0,1,i,i,1,1]):new Float32Array([n,n,i,n,n,i,i,i]),new ji(e,r,{geometry:t},{geometry:Hi.createVertex(e,35044,o)})}(e);return this.drawStretchedTexture(e,n,o,s,a,i),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),e.bindFramebuffer(null),o.dispose()),i}drawStretchedTexture(e,t,r,n,i,o){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(i,0),e.bindVAO(n),e.setPipelineState(t.pipeline),e.drawArrays(5,0,function(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}(n,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,n.H)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if((0,n.H)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),(0,n.H)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}ba.DDS_ENCODING="image/vnd-ms.dds",ba.BASIS_ENCODING="image/x.basis";class ya{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,n.a8)(e)?((0,n.ah)(t),(0,n.dQ)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,n.t)(this.streamDataRequester))return(await(0,n.U)(t,{responseType:_a[e]})).data;const i=await(0,p.o)(this.streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw(0,n.am)(i.error),new n.s("",`Request for resource failed: ${i.error}`)}}const _a={image:"image",binary:"array-buffer",json:"json"};function wa(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)n[c]=o[l],n[c+1]=o[l+1],c+=i,l+=a}function Ta(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,u=(r&&r.srcIndex?r.srcIndex:0)*a;if((0,l.s)(t.elementType)){const e=(0,l.y)(t.elementType);if((0,l.t)(t.elementType))for(let t=0;t<s;++t)n[c]=Math.max(o[u]/e,-1),n[c+1]=Math.max(o[u+1]/e,-1),c+=i,u+=a;else for(let t=0;t<s;++t)n[c]=o[u]/e,n[c+1]=o[u+1]/e,c+=i,u+=a}else wa(e,t,r);return e}function Sa(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)n[c]=o[l],n[c+1]=o[l+1],n[c+2]=o[l+2],c+=i,l+=a}function Ma(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)n[c]=o[l],n[c+1]=o[l+1],n[c+2]=o[l+2],n[c+3]=o[l+3],c+=i,l+=a}function Ca(e,t,r,n,i,o){const a=e.typedBuffer,s=e.typedBufferStride,c=o?o.count:e.count;let l=(o&&o.dstIndex?o.dstIndex:0)*s;for(let e=0;e<c;++e)a[l]=t,a[l+1]=r,a[l+2]=n,a[l+3]=i,l+=s}function Aa(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}function Pa(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,l.J)(e.ElementType)))}Object.freeze({__proto__:null,copy:wa,normalizeIntegerBuffer:Ta}),Object.freeze({__proto__:null,copy:Sa}),Object.freeze({__proto__:null,copy:Ma,fill:Ca}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<9;++e)n[c+e]=o[l+e];c+=i,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<16;++e)n[c+e]=o[l+e];c+=i,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)n[c]=o[l],c+=i,l+=a},makeDense:Aa});const Oa=n.S.getLogger("esri.views.3d.glTF");class Ia{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Fa={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},za={pbrMetallicRoughness:Fa,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},La={ESRI_externalColorMixMode:"tint"},Da=(e={})=>{const t={...Fa,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:e.ESRI_externalColorMixMode="tint"}return e}({...La,...e.extras});return{...za,...e,pbrMetallicRoughness:t,extras:r}},Ra={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},Ba=1179937895;class Ea{constructor(e,t,r,n,i){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=i,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,i)=>(t=n||"",r=i||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if((0,n.a8)(r)){const i=(0,n.br)(r);if("model/gltf-binary"!==i.mediaType)try{const n=JSON.parse(i.isBase64?atob(i.data):i.data);return new Ea(e,t,r,n)}catch{}const o=(0,n.dQ)(r);if(Ea.isGLBData(o))return this.fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const n=await e.loadJSON(r,i);return new Ea(e,t,r,n)}const o=await e.loadBinary(r,i);if(Ea.isGLBData(o))return this.fromGLBData(e,t,r,o);const a=await e.loadJSON(r,i);return new Ea(e,t,r,a)}static isGLBData(e){const t=new Ia(e);return t.remainingBytes()>=4&&t.readUint32()===Ba}static async fromGLBData(e,t,r,n){const i=await Ea.parseGLBData(t,n);return new Ea(e,t,r,i.json,i.binaryData)}static async parseGLBData(e,t){const r=new Ia(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),i=r.readUint32(),o=r.readUint32();e.assert(n===Ba,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==i,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===c?(e.assert(1313821514===n,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await Ga(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==n,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let i=this.bufferCache.get(e);if(!i){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);i=new Uint8Array(o),this.bufferCache.set(e,i),n.assert(i.byteLength===r.byteLength,"Buffer byte lengths should match.")}return i}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const i=this.json.bufferViews[r.bufferView],o=await this.getBuffer(i.buffer,t),a=Ha[r.type],s=ka[r.componentType],c=a*s,l=i.byteStride||c;return{raw:o.buffer,byteStride:l,byteOffset:o.byteOffset+(i.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Aa(this.wrapAccessor(l.h,r));case 5123:return Aa(this.wrapAccessor(l.g,r));case 5125:return Aa(this.wrapAccessor(l.F,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+ja[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(l.a,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+ja[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(l.a,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+ja[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new l.p(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(l.u,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new l.M(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new l.e(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new l.v(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new l.w(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new l.I(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new l.u(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(l.p,n);if(5121===n.componentType)return this.wrapAccessor(l.x,n);if(5123===n.componentType)return this.wrapAccessor(l.L,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(l.a,n);if(5121===n.componentType)return this.wrapAccessor(l.O,n);if(5123===n.componentType)return this.wrapAccessor(l.E,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+ja[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const n=this.errorContext;let i=this.materialCache.get(e.material);if(!i){const o=null!=e.material?Da(this.json.materials[e.material]):Da(),a=o.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,u,d,f;a.baseColorTexture&&(n.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(a.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):u=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(o.emissiveTexture.index,t)),a.metallicRoughnessTexture&&r&&(0!==(a.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):f=await this.getTexture(a.metallicRoughnessTexture.index,t));const h=null!=e.material?e.material:-1;i={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:a.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:c,normalTexture:l,name:o.name,id:h,occlusionTexture:u,emissiveTexture:d,emissiveFactor:o.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:f,vertexColors:s,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return i}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],i=(e=>({...Ra,...e}))(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const o=this.json.images[n.source];let a=this.textureCache.get(e);if(!a){let n;if(o.uri)n=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],i=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return new Promise(((r,n)=>{const i=new Blob([e],{type:t}),o=URL.createObjectURL(i),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),a.src=o}))}(new Uint8Array(i.buffer,i.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}a={data:n,wrapS:i.wrapS,wrapT:i.wrapT,minFilter:i.minFilter,name:o.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return Ua;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,a.e)([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r,n.matrix):n.translation||n.rotation||n.scale?(t=v(r),n.translation&&(0,a.c)(t,t,n.translation),n.rotation&&(Va[3]=(0,c.I)(Va,n.rotation),(0,a.f)(t,t,Va[3],Va)),n.scale&&(0,a.i)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,n.a9)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=g.r.parse(this.json.asset.version,"glTF");Na.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Na=new g.r(2,0,"glTF"),Ua=(0,a.g)([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Math.PI/2),Va=(0,c.c)(),Ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},ka={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Ga(e){return new Promise(((t,r)=>{const n=new Blob([e]),i=new FileReader;i.onload=()=>{const e=i.result;t(JSON.parse(e))},i.onerror=e=>{r(e)},i.readAsText(n)}))}const ja={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let $a=0;function qa(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,n.H)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function Wa(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,i=n.length>1;for(const e of n){const t=r.nodes[e],n=[o(e,0)];if(Za(t)&&!i){const e=t.extensions.MSFT_lod.ids;n.push(...e.map(((e,t)=>o(e,t+1))))}await Promise.all(n)}async function o(n,i){const a=r.nodes[n],s=e.getNodeTransform(n);if(Ka.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,i,e.name)}for(const e of a.children||[])await o(e,i)}}function Za(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Xa(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Ya(t.wrapS),t:Ya(t.wrapT)},mipmap:Qa.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(n,r)}return n},i=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(i,r)}return i}function Ya(e){if(33071===e||33648===e||10497===e)return e;Ka.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Ka=new class{error(e){throw new n.s("gltf-loader-error",e)}errorUnsupported(e){throw new n.s("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Oa.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Qa=[9987,9985],Ja=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"],es=n.S.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function ts(e){throw new n.s("",`Request for object resource failed: ${e}`)}function rs(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(es.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(es.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(es.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(es.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else es.warn("Indexed geometries must specify faces"),n=!1;break}default:es.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(es.warn("Geometry requires material"),n=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(es.warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function ns(e){const t=(0,u.B)();return e.forEach((e=>{const r=e.boundingInfo;(0,n.H)(r)&&((0,u.h)(t,r.getBBMin()),(0,u.h)(t,r.getBBMax()))})),t}async function is(e,t){const r=[];for(const i in e){const o=e[i],a=o.images[0].data;if(!a){es.warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+a,c="/textureDefinitions/"+i,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},u=(0,n.H)(t)&&t.disableTextures?Promise.resolve(null):ca(s,t);r.push(u.then((e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===o.channels?o.alphaChannelUsage||"transparency":"none"}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}function os(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function as(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ss=new g.r(1,2,"wosr");function cs(e,t,r){if(e.count!==t.count)return void S.error("source and destination buffers need to have the same number of elements");const n=e.count,i=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],h=e.typedBuffer,m=e.typedBufferStride,p=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*m,r=e*g,n=p[r],v=p[r+1],x=p[r+2],b=p[r+3];h[t]=i*n+s*v+u*x,h[t+1]=o*n+c*v+d*x,h[t+2]=a*n+l*v+f*x,h[t+3]=b}}function ls(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*s;i[t]=r*a[n],i[t+1]=r*a[n+1],i[t+2]=r*a[n+2],i[t+3]=r*a[n+3]}}function us(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ds(e,t,r,i){const o=e.model,a=(0,c.e)(),s=new Array,d=new Map,f=new Map;return o.lods.forEach(((e,c)=>{if(void 0!==i&&c!==i)return;const h={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,n.H)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.B)()};s.push(h),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=o.materials.get(e.material),c=(0,n.H)(e.attributes.texCoord0),m=(0,n.H)(e.attributes.normal);if(!d.has(i)){if(c){if((0,n.H)(s.textureColor)&&!f.has(s.textureColor)){const e=o.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureColor,new ba(e.data,t))}if((0,n.H)(s.textureNormal)&&!f.has(s.textureNormal)){const e=o.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureNormal,new ba(e.data,t))}if((0,n.H)(s.textureOcclusion)&&!f.has(s.textureOcclusion)){const e=o.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureOcclusion,new ba(e.data,t))}if((0,n.H)(s.textureEmissive)&&!f.has(s.textureEmissive)){const e=o.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureEmissive,new ba(e.data,t))}if((0,n.H)(s.textureMetallicRoughness)&&!f.has(s.textureMetallicRoughness)){const e=o.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureMetallicRoughness,new ba(e.data,t))}}const a=s.color[0]**(1/Qo),l=s.color[1]**(1/Qo),u=s.color[2]**(1/Qo),h=s.emissiveFactor[0]**(1/Qo),p=s.emissiveFactor[1]**(1/Qo),g=s.emissiveFactor[2]**(1/Qo);d.set(i,new Yo({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:fs(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[a,l,u],ambient:[a,l,u],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:m?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,n.H)(s.textureColor)&&c?f.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:(0,n.H)(s.textureNormal)&&c?f.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:(0,n.H)(s.textureOcclusion)&&c?f.get(s.textureOcclusion).id:void 0,emissiveTextureId:(0,n.H)(s.textureEmissive)&&c?f.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,n.H)(s.textureMetallicRoughness)&&c?f.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[h,p,g],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const p=function(e,t){switch(t){case 4:return function(e){return"number"==typeof e?Ae(e):(0,n.dL)(e)||(0,n.dO)(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let i=0;i<r;i+=1)if(i%2==0){const r=e[i],o=e[i+1],a=e[i+2];n[t++]=r,n[t++]=o,n[t++]=a}else{const r=e[i+1],o=e[i],a=e[i+2];n[t++]=r,n[t++]=o,n[t++]=a}}return n}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let i=e[1],o=0;for(let a=0;a<r;++a){const r=e[a+2];n[o++]=t,n[o++]=i,n[o++]=r,i=r}return n}}(e)}}(e.indices||e.attributes.position.count,e.primitiveType),g=e.attributes.position.count,v=Pa(l.a,g);M(v,e.attributes.position,e.transform);const x=[["position",{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]],b=[["position",p]];if((0,n.H)(e.attributes.normal)){const t=Pa(l.a,g);y(a,e.transform),C(t,e.attributes.normal,a),x.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["normal",p])}if((0,n.H)(e.attributes.tangent)){const t=Pa(l.p,g);y(a,e.transform),cs(t,e.attributes.tangent,a),x.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["tangent",p])}if((0,n.H)(e.attributes.texCoord0)){const t=Pa(l.u,g);Ta(t,e.attributes.texCoord0),x.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["uv0",p])}if((0,n.H)(e.attributes.color)){const t=Pa(l.x,g);if(4===e.attributes.color.elementCount)e.attributes.color instanceof l.p?ls(t,e.attributes.color,255):e.attributes.color instanceof l.x?Ma(t,e.attributes.color):e.attributes.color instanceof l.L&&ls(t,e.attributes.color,1/256);else{Ca(t,255,255,255,255);const r=new l.O(t.buffer,0,4);e.attributes.color instanceof l.a?A(r,e.attributes.color,255):e.attributes.color instanceof l.O?Sa(r,e.attributes.color):e.attributes.color instanceof l.E&&A(r,e.attributes.color,1/256)}x.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["color",p])}const _=new ze(x,b);h.stageResources.geometries.push(_),h.stageResources.materials.push(d.get(i)),c&&((0,n.H)(s.textureColor)&&h.stageResources.textures.push(f.get(s.textureColor)),(0,n.H)(s.textureNormal)&&h.stageResources.textures.push(f.get(s.textureNormal)),(0,n.H)(s.textureOcclusion)&&h.stageResources.textures.push(f.get(s.textureOcclusion)),(0,n.H)(s.textureEmissive)&&h.stageResources.textures.push(f.get(s.textureEmissive)),(0,n.H)(s.textureMetallicRoughness)&&h.stageResources.textures.push(f.get(s.textureMetallicRoughness))),h.numberOfVertices+=g;const w=_.boundingInfo;(0,n.H)(w)&&((0,u.h)(h.boundingBox,w.getBBMin()),(0,u.h)(h.boundingBox,w.getBBMax()))}))})),s}function fs(e){switch(e){case"BLEND":default:return 0;case"MASK":return 2;case"OPAQUE":return 1}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void S.error("source and destination buffers need to have the same number of elements");const n=e.count,i=r[0],o=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],h=r[9],m=r[10],p=r[11],g=r[12],v=r[13],x=r[14],b=r[15],y=e.typedBuffer,_=e.typedBufferStride,w=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*_,r=e*T,n=w[r],S=w[r+1],M=w[r+2],C=w[r+3];y[t]=i*n+c*S+f*M+g*C,y[t+1]=o*n+l*S+h*M+v*C,y[t+2]=a*n+u*S+m*M+x*C,y[t+3]=s*n+d*S+p*M+b*C}},transformMat3:cs,scale:ls,shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*s;i[t]=a[n]>>r,i[t+1]=a[n+1]>>r,i[t+2]=a[n+2]>>r,i[t+3]=a[n+3]>>r}}});const hs=Object.freeze({__proto__:null,fetch:async function(e,t){const r=us((0,s.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=(0,n.H)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,p.o)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,n.am)(i.error),ts(i.error.details.url)}(e,r,t);const i=await(0,p.o)((0,n.U)(e,(0,n.I)(t)));if(!0===i.ok)return i.value.data;(0,n.am)(i.error),ts(i.error)}(e,t);return{resource:r,textures:await is(r.textureDefinitions,t)}}(r.url,t)),o=function(e,t){const r=[],o=[],a=[],s=[],c=e.resource,l=g.r.parse(c.version||"1.0","wosr");ss.validate(l);const u=c.model.name,d=c.model.geometries,f=c.materialDefinitions,h=e.textures;let m=0;const p=new Map;for(let e=0;e<d.length;e++){const c=d[e];if(!rs(c))continue;const l=as(c),u=c.params.vertexAttributes,g=[];for(const e in u){const t=u[e],r=t.values;g.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const v=[];if("PerAttributeArray"!==c.params.topology){const e=c.params.faces;for(const t in e)v.push([t,new Uint32Array(e[t].values)])}const x=h&&h[l.texture];if(x&&!p.has(l.texture)){const{image:e,params:t}=x,r=new ba(e,t);s.push(r),p.set(l.texture,r)}const b=p.get(l.texture),y=b?b.id:void 0;let _=a[l.material]?a[l.material][l.texture]:null;if(!_){const e=f[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:(0,i.e)(e.diffuse),diffuse:(0,i.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:x?os(x.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};(0,n.H)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),_=new Yo(s),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=_}o.push(_);const w=new ze(g,v);m+=v.position?v.position.length:0,r.push(w)}return{name:u,stageResources:{textures:s,materials:o,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:ns(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):async function(e,t,r={},i=!0){const o=await Ea.load(e,Ka,t,r),a="gltf_"+$a++,s={lods:[],materials:new Map,textures:new Map,meta:qa(o)},c=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type);return await Wa(o,(async(e,t,c,l)=>{const u=void 0!==e.mode?e.mode:4,d=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(u);if((0,n.t)(d))return void Ka.warnUnsupported("Unsupported primitive mode ("+Ja[u]+"). Skipping primitive.");if(!o.hasPositions(e))return void Ka.warn("Skipping primitive without POSITION vertex attribute.");const f=await o.getMaterial(e,r,i),h={transform:v(t),attributes:{position:await o.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await o.getIndexData(e,r),primitiveType:d,material:Xa(s,f,a)};o.hasNormals(e)&&(h.attributes.normal=await o.getNormalData(e,r)),o.hasTangents(e)&&(h.attributes.tangent=await o.getTangentData(e,r)),o.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await o.getTextureCoordinates(e,r)),o.hasVertexColors(e)&&(h.attributes.color=await o.getVertexColors(e,r));let m=null;(0,n.H)(s.meta)&&(0,n.H)(s.meta.ESRI_lod)&&"screenSpaceRadius"===s.meta.ESRI_lod.metric&&(m=s.meta.ESRI_lod.thresholds[c]),s.lods[c]=s.lods[c]||{parts:[],name:l,lodThreshold:m},s.lods[c].parts.push(h)})),{model:s,meta:{isEsriSymbolResource:c,uri:o.uri},customMeta:{}}}(new ya(t.streamDataRequester),r.url,t,t.usePBR)),u=(0,n.a3)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&(0,n.H)(u)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if((0,n.t)(s))return;const u=c.attributes.position,d=u.count,f=(0,i.n)(),h=(0,i.n)(),m=(0,i.n)(),p=Pa(l.x,d),g=Pa(l.a,d),v=(0,a.h)([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],c.transform);for(let n=0;n<d;n++){u.getVec(n,h),s.getVec(n,f),(0,o.I)(h,h,c.transform),(0,o.c)(m,h,t.center),(0,o.i)(m,m,t.radius);const i=m[2],a=(0,o.s)(m),l=Math.min(.45+.55*a*a,1);(0,o.i)(m,m,t.radius),(0,o.I)(m,m,v),(0,o.j)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,o.y)(m,m,f,i>-1?.2:Math.min(-4*i-3.8,1)),g.setVec(n,m),p.set(n,0,255*l),p.set(n,1,255*l),p.set(n,2,255*l),p.set(n,3,255)}c.attributes.normal=g,c.attributes.color=p}}}(c,u);const d=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},f={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=ds(c,d,f,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=ds(c,d,f,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const h=ds(c,d,f);return{lods:h,referenceBoundingBox:h[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}},gltfToEngineResources:ds,parseUrl:us})},60640:(e,t,r)=>{r.d(t,{I:()=>d,a:()=>s,b:()=>l,c:()=>c,e:()=>a,n:()=>B,t:()=>E,w:()=>m});var n=r(86977),i=r(55820),o=r(27157);function a(){return[1,0,0,0,1,0,0,0,1]}function s(e,t){return new Float64Array(e,t,9)}function c(){return[0,0,0,1]}function l(e,t){return new Float64Array(e,t,4)}Object.freeze({__proto__:null,create:a,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,n,i,o,a,s,c){return[e,t,r,n,i,o,a,s,c]},createView:s});function u(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>i.a?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function f(e,t,r){const n=t[0],i=t[1],o=t[2],a=t[3],s=r[0],c=r[1],l=r[2],u=r[3];return e[0]=n*u+a*s+i*l-o*c,e[1]=i*u+a*c+o*s-n*l,e[2]=o*u+a*l+n*c-i*s,e[3]=a*u-n*s-i*c-o*l,e}function h(e,t,r,n){const o=t[0],a=t[1],s=t[2],c=t[3];let l,u,d,f,h,m=r[0],p=r[1],g=r[2],v=r[3];return u=o*m+a*p+s*g+c*v,u<0&&(u=-u,m=-m,p=-p,g=-g,v=-v),1-u>i.a?(l=Math.acos(u),d=Math.sin(l),f=Math.sin((1-n)*l)/d,h=Math.sin(n*l)/d):(f=1-n,h=n),e[0]=f*o+h*m,e[1]=f*a+h*p,e[2]=f*s+h*g,e[3]=f*c+h*v,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){const r=t[0]+t[4]+t[8];let n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const i=(r+1)%3,o=(r+2)%3;n=Math.sqrt(t[3*r+r]-t[3*i+i]-t[3*o+o]+1),e[r]=.5*n,n=.5/n,e[3]=(t[3*i+o]-t[3*o+i])*n,e[i]=(t[3*i+r]+t[3*r+i])*n,e[o]=(t[3*o+r]+t[3*r+o])*n}return e}Object.freeze({__proto__:null,create:c,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,n){return[e,t,r,n]},createView:l,IDENTITY:[0,0,0,1]});const g=o.a,v=o.r,x=o.s,b=f,y=o.l,_=o._,w=o.j,T=o.x,S=T,M=o.q,C=M,A=o.g,P=o.D,O=o.E,I=(0,n.n)(),F=(0,n.t)(1,0,0),z=(0,n.t)(0,1,0),L=[0,0,0,1],D=[0,0,0,1],R=[1,0,0,0,1,0,0,0,1];function B(){return new Float32Array(3)}function E(e,t,r){const n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function N(){return B()}function U(){return E(1,1,1)}function V(){return E(1,0,0)}function H(){return E(0,1,0)}function k(){return E(0,0,1)}Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:u,getAxisAngle:d,multiply:f,rotateX:function(e,t,r){r*=.5;const n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=n*c+a*s,e[1]=i*c+o*s,e[2]=o*c-i*s,e[3]=a*c-n*s,e},rotateY:function(e,t,r){r*=.5;const n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=n*c-o*s,e[1]=i*c+a*s,e[2]=o*c+n*s,e[3]=a*c-i*s,e},rotateZ:function(e,t,r){r*=.5;const n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=n*c+i*s,e[1]=i*c-n*s,e[2]=o*c+a*s,e[3]=a*c-o*s,e},calculateW:function(e,t){const r=t[0],n=t[1],i=t[2];return e[0]=r,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),e},slerp:h,random:function(e){const t=(0,i.t)(),r=(0,i.t)(),n=(0,i.t)(),o=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*n),e[3]=a*Math.cos(2*Math.PI*n),e},invert:function(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=r*r+n*n+i*i+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-n*s,e[2]=-i*s,e[3]=o*s,e},conjugate:m,fromMat3:p,fromEuler:function(e,t,r,n){const i=.5*Math.PI/180;t*=i,r*=i,n*=i;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),l=Math.sin(n),u=Math.cos(n);return e[0]=o*c*u-a*s*l,e[1]=a*s*u+o*c*l,e[2]=a*c*l-o*s*u,e[3]=a*c*u+o*s*l,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:g,set:v,add:x,mul:b,scale:y,dot:_,lerp:w,length:T,len:S,squaredLength:M,sqrLen:C,normalize:A,exactEquals:P,equals:O,rotationTo:function(e,t,r){const n=(0,i.z)(t,r);return n<-.999999?((0,i._)(I,F,t),(0,i.Y)(I)<1e-6&&(0,i._)(I,z,t),(0,i.j)(I,I),u(e,I,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,i._)(I,t,r),e[0]=I[0],e[1]=I[1],e[2]=I[2],e[3]=1+n,A(e,e))},sqlerp:function(e,t,r,n,i,o){return h(L,t,i,o),h(D,r,n,o),h(e,L,D,2*o*(1-o)),e},setAxes:function(e,t,r,n){const i=R;return i[0]=r[0],i[3]=r[1],i[6]=r[2],i[1]=n[0],i[4]=n[1],i[7]=n[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],A(e,p(e,i))}});const G=N(),j=U(),$=V(),q=H(),W=k();Object.freeze({__proto__:null,create:B,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:E,createView:function(e,t){return new Float32Array(e,t,3)},zeros:N,ones:U,unitX:V,unitY:H,unitZ:k,ZEROS:G,ONES:j,UNIT_X:$,UNIT_Y:q,UNIT_Z:W})}}]);