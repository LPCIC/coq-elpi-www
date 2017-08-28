(function(dy){"use strict";var
g=112,by="eqTLR",at="Rmult",aw="R0",ax="Ropp",V="Rle",av="Rminus",bE=250,bx="eqTRL",U="Rlt",e=246,bD="Fourier",f=111,af="fourier",Y="Rge",bw="plugins/fourier/fourier.ml",bC=113,as="plugins/fourier/fourierR.ml",X="Rgt",bB=632,ar="Rplus",W=248,aq="Rinv",bv="R",bA="Reals",au="R1",bz="Rdiv",p=dy.jsoo_runtime,k=p.caml_check_bound,bt=p.caml_div,T=p.caml_fresh_oo_id,t=p.caml_mul,c=p.caml_new_string,bu=p.caml_obj_tag,ae=p.caml_register_global,i=p.caml_string_notequal,H=p.caml_wrap_exception;function
b(a,b){return a.length==1?a(b):p.caml_call_gen(a,[b])}function
d(a,b,c){return a.length==2?a(b,c):p.caml_call_gen(a,[b,c])}function
G(a,b,c,d){return a.length==3?a(b,c,d):p.caml_call_gen(a,[b,c,d])}function
dx(a,b,c,d,e){return a.length==4?a(b,c,d,e):p.caml_call_gen(a,[b,c,d,e])}var
s=p.caml_get_global_data(),A=[0,0,1],az=[0,1,1],S=c("fourier_plugin"),O=s.Assert_failure,m=s.List,I=s.Pervasives,a=s.API,bp=s.Pp,bq=s.CErrors,am=s.Array,aO=s.CamlinternalLazy,br=s.Ltac_plugin,bO=[0,c(bw),176,9],bM=[0,c(bw),147,9],bK=c("empty ineq"),bG=c("/"),bN=c("Fourier.Contradiction"),bT=c("not_of_constant"),bV=c(bz),bW=c(aq),bX=c(av),bY=c(at),bZ=c(ax),b0=c(ar),b1=c(aw),b2=c(au),b4=c(bz),b5=c(aq),b6=c(av),b7=c(at),b8=c(ax),b9=c(ar),b_=c(aw),b$=c(au),df=[0,c("Coq"),[0,c(af),[0,c(bD),0]]],dg=c("new_hyp_for_fourier"),dl=c(Y),dm=c(X),dn=c(V),dp=c(U),dh=c("No inequalities"),di=c("fourier failed"),dk=[0,c(as),bB,11],dj=[0,c(as),bB,30],c9=c(Y),c_=c(X),c$=c(V),da=c(U),db=c(by),dc=c(bx),dd=[0,c(as),437,6],c7=c("Rlt_not_le_frac_opp"),c6=c("Rnot_le_le"),c5=c("Rnot_lt_lt"),c4=c("Rfourier_le_le"),c3=c("Rfourier_le_lt"),c2=c("Rfourier_lt_le"),c1=c("Rfourier_lt_lt"),c0=c("Rfourier_le"),cZ=c("Rfourier_lt"),cY=c("Rfourier_not_lt_ge"),cX=c("Rfourier_not_le_gt"),cW=c("Rfourier_not_gt_le"),cV=c("Rfourier_not_ge_lt"),cU=c("Rfourier_eqRL_to_le"),cT=c("Rfourier_eqLR_to_le"),cS=c("Rfourier_ge_to_le"),cR=c("Rfourier_gt_to_lt"),cQ=c("Rle_not_lt"),cP=c("Rnot_lt0"),cO=c("Rle_mult_inv_pos"),cN=c("Rle_zero_1"),cM=c("Rle_zero_zero"),cL=c("Rlt_mult_inv_pos"),cK=c("Rle_zero_pos_plus1"),cJ=c("Rlt_zero_pos_plus1"),cI=c("Rlt_zero_1"),cF=c("Rinv_1"),cG=[0,c(bA),[0,c("RIneq"),0]],cE=c(au),cD=c(aw),cC=c(aq),cB=c(ax),cA=c(ar),cz=c(at),cy=c(av),cw=c(bv),cu=c(Y),ct=c(V),cr=c(X),cq=c(U),cn=c(bD),cc=c(Y),cd=c(X),ce=c(V),cf=c(U),cg=c(U),ch=c(V),ci=c(X),cj=c(Y),ck=c(bv),cl=c(bx),cm=c(by),bR=c("Coq.Reals.Rdefinitions"),bS=c("constant_not_of_R"),bU=c("FourierR.NoRational"),b3=c("FourierR.NoLinear"),cb=c("FourierR.NoIneq"),cp=[0,c(bA),[0,c("Rdefinitions"),0]],cH=[0,c(af),[0,c("Fourier_util"),0]],de=c("FourierR.GoalDone"),ds=c(af),du=c("fourierz"),dw=c(af),bL=s.Failure,bQ=s.Not_found,bP=s.Hashtbl,dt=s.Loc,dq=s.Grammar_API;function
bF(a){b(I[29],a[1]);b(I[27],bG);return b(I[29],a[2])}function
ay(d,c){var
b=d,a=c;for(;;){if(0===a)return b;var
e=p.caml_mod(b,a),b=a,a=e;continue}}function
J(b){var
a=0<=b[2]?b:[0,-b[1]|0,-b[2]|0];if(0===a[1])return A;var
c=ay(a[1],a[2]),d=0<=c?c:-c|0,e=bt(a[2],d);return[0,bt(a[1],d),e]}function
aA(a){return J([0,-a[1]|0,a[2]])}function
ag(b,a){return J([0,t(b[1],a[2])+t(a[1],b[2])|0,t(b[2],a[2])])}function
bH(b,a){return J([0,t(b[1],a[2])-t(a[1],b[2])|0,t(b[2],a[2])])}function
ah(b,a){return J([0,t(b[1],a[1]),t(b[2],a[2])])}function
bI(a){return J([0,a[2],a[1]])}function
bJ(b,a){return J([0,t(b[1],a[2]),t(b[2],a[1])])}function
Z(b,a){return t(b[1],a[2])<t(a[1],b[2])?1:0}function
aB(b,a){return t(b[1],a[2])<=t(a[1],b[2])?1:0}function
B(b,a){a[1]=[0,b,a[1]];return 0}function
aC(a){var
b=[0,0],c=[0,0],e=[0,0];function
f(a){var
d=a[1];if(d){var
f=d[1];return Z(f,A)?B(a,c):Z(A,f)?B(a,b):B(a,e)}throw[0,bL,bK]}d(m[11],f,a);return[0,c[1],[0,e[1],[0,b[1],0]]]}function
aD(c){var
a=[0,0],h=b(m[1],c);function
e(e){var
b=[0,0],f=(h-a[1]|0)-1|0,i=e[2],j=e[1],k=1;if(!(f<1)){var
d=k;for(;;){B(A,b);var
n=d+1|0;if(f!==d){var
d=n;continue}break}}B(az,b);var
g=a[1],l=1;if(!(g<1)){var
c=l;for(;;){B(A,b);var
m=c+1|0;if(g!==c){var
c=m;continue}break}}a[1]=a[1]+1|0;return[0,j,b[1],i]}return d(m[13],e,c)}function
aE(b,a){var
c=b[3],d=c||a[3],e=G(m[19],ag,b[2],a[2]);return[0,G(m[19],ag,b[1],a[1]),e,d]}function
ai(b,a){var
c=a[3],e=a[2];function
f(a){return ah(b,a)}var
g=d(m[13],f,e),h=a[1];function
i(a){return ah(b,a)}return[0,d(m[13],i,h),g,c]}function
aj(a){var
c=a[3],d=a[2];return[0,b(m[4],a[1]),d,c]}function
ak(a){return b(m[3],a[1])}function
aF(b,c){var
a=[0,0];function
e(b){function
e(c){var
d=aA(ak(b)),e=ak(c),f=ai(d,c);return B(aj(aE(ai(e,b),f)),a)}return d(m[11],e,c)}d(m[11],e,b);return a[1]}function
aG(e){var
a=aC(e);if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2]){var
f=b[1],g=aF(a[1],c[1]),h=d(m[13],aj,f);return d(I[22],h,g)}}}throw[0,O,bM]}function
aH(d){var
f=b(m[3],d)[1],g=b(m[1],f),a=[0,aD(d)],e=g-1|0,h=1;if(!(e<1)){var
c=h;for(;;){a[1]=aG(a[1]);var
i=c+1|0;if(e!==c){var
c=i;continue}break}}return a[1]}var
al=[W,bN,T(0)],j=[0,bF,ay,A,az,J,aA,ag,bH,ah,bI,bJ,Z,aB,B,aC,aD,aE,ai,aj,ak,aF,aG,aH,al,function(a){var
b=aH(a);function
c(a){var
b=a[1];if(b)if(!b[2]){var
c=a[3],d=b[1],i=a[2],f=Z(d,A),g=f?1-c:f;if(g)var
e=g;else
var
h=aB(d,A),e=h?c:h;if(e)throw[0,al,[0,[0,d,c,i],0]];return e}throw[0,O,bO]}try{d(m[11],c,b);var
e=0;return e}catch(a){a=H(a);if(a[1]===al)return a[2];throw a}}];ae(109,j,"Fourier_plugin.Fourier");var
r=b(bP[18],[0,a[7][60],a[7][61]]);function
u(c){var
a=j[3];return[0,b(r[1],50),a]}function
aI(b,a){try{var
c=d(r[7],b[1],a);return c}catch(a){a=H(a);if(a===bQ)return j[3];throw a}}function
w(a,b,c){var
e=aI(a,b),f=d(j[7],e,c);G(r[9],a[1],b,f);return a}function
x(a,b){var
c=d(j[7],a[2],b);return[0,a[1],c]}function
aJ(b){var
a=j[4];return x(u(0),a)}function
aK(c,b){var
a=u(0),e=c[1];function
f(c,b){w(a,c,b);return 0}d(r[11],f,e);var
g=b[1];function
h(c,b){w(a,c,b);return 0}d(r[11],h,g);var
i=b[2];return x(x(a,c[2]),i)}function
C(e,c){var
a=u(0),f=e[1];function
g(c,b){w(a,c,b);return 0}d(r[11],g,f);var
h=c[1];function
i(d,c){w(a,d,b(j[6],c));return 0}d(r[11],i,h);var
k=b(j[6],c[2]);return x(x(a,e[2]),k)}function
aL(b,a){var
c=u(0),e=a[1];function
f(e,a){w(c,e,d(j[9],b,a));return 0}d(r[11],f,e);return x(c,d(j[9],b,a[2]))}function
L(e){var
c=b(a[5][8][5],e),d=c[1];if(0===d[0]){var
f=c[3],g=d[1];if(p.caml_equal(c[2],a[5][4][1]))if(p.caml_string_equal(b(a[5][4][5],g),bR))return b(a[5][5][6],f)}return bS}function
_(e){var
d=e;for(;;){var
c=b(a[7][1],d);switch(c[0]){case
5:var
d=c[1];continue;case
10:return L(c[1][1]);default:return bT}}}var
D=[W,bU,T(0)];function
q(l){var
g=l;for(;;){var
f=b(a[7][1],g);switch(f[0]){case
5:var
g=f[1];continue;case
9:var
c=f[2],e=_(f[1]);if(i(e,bV)){if(i(e,bW)){if(i(e,bX)){if(i(e,bY)){if(i(e,bZ)){if(i(e,b0))throw D;var
m=q(k(c,1)[2]),n=q(k(c,0)[1]);return d(j[7],n,m)}var
o=q(k(c,0)[1]);return b(j[6],o)}var
p=q(k(c,1)[2]),r=q(k(c,0)[1]);return d(j[9],r,p)}var
s=q(k(c,1)[2]),t=q(k(c,0)[1]);return d(j[8],t,s)}var
u=q(k(c,0)[1]);return b(j[10],u)}var
v=q(k(c,1)[2]),w=q(k(c,0)[1]);return d(j[11],w,v);case
10:var
h=L(f[1][1]);if(i(h,b1)){if(i(h,b2))throw D;return j[4]}return j[3];default:throw D}}}var
P=[W,b3,T(0)];function
o(l){try{var
g=b(a[7][1],l);switch(g[0]){case
5:var
h=o(g[1]);break;case
9:var
c=g[2],f=_(g[1]);if(i(f,b4))if(i(f,b5))if(i(f,b6))if(i(f,b7))if(i(f,b8)){if(i(f,b9))throw P;var
y=o(k(c,1)[2]),e=aK(o(k(c,0)[1]),y)}else
var
z=o(k(c,0)[1]),e=aL(b(j[6],j[4]),z);else
try{var
m=q(k(c,0)[1]);try{var
F=q(k(c,1)[2]),G=d(j[9],m,F),I=x(u(0),G),n=I}catch(a){a=H(a);if(a!==D)throw a;var
E=k(c,1)[2],n=w(u(0),E,m)}var
e=n}catch(a){a=H(a);if(a!==D)throw a;var
A=q(k(c,1)[2]),B=k(c,0)[1],e=w(u(0),B,A)}else
var
J=o(k(c,1)[2]),e=C(o(k(c,0)[1]),J);else
var
K=q(k(c,0)[1]),M=b(j[10],K),e=x(u(0),M);else{var
p=q(k(c,1)[2]);try{var
Q=q(k(c,0)[1]),R=d(j[11],Q,p),S=x(u(0),R),r=S}catch(a){a=H(a);if(a!==D)throw a;var
N=b(j[10],p),O=k(c,0)[1],r=w(u(0),O,N)}var
e=r}var
h=e;break;case
10:var
s=L(g[1][1]);if(i(s,b_)){if(i(s,b$))throw P;var
t=aJ(0)}else
var
t=u(0);var
h=t;break;default:throw P}return h}catch(a){a=H(a);if(a!==D)if(a!==P)throw a;var
v=j[4];return w(u(0),l,v)}}function
ca(b){var
a=[0,0];function
c(c,b){a[1]=[0,[0,b,c],a[1]];return 0}d(r[11],c,b);return a[1]}var
E=[W,cb,T(0)];function
aM(p){var
s=p[2],f=b(a[8][52][1],p[1]),t=b(a[8][52][1],s),m=b(a[7][1],t);if(9===m[0]){var
g=m[2],n=b(a[7][1],m[1]);switch(n[0]){case
10:var
u=n[1][1];if(2===g.length-1){var
c=k(g,0)[1],e=k(g,1)[2],h=L(u);if(i(h,cc)){if(i(h,cd)){if(i(h,ce)){if(i(h,cf))throw E;var
v=o(e);return[0,[0,f,cg,c,e,C(o(c),v),1],0]}var
w=o(e);return[0,[0,f,ch,c,e,C(o(c),w),0],0]}var
x=o(c);return[0,[0,f,ci,e,c,C(o(e),x),1],0]}var
y=o(c);return[0,[0,f,cj,e,c,C(o(e),y),0],0]}break;case
11:var
q=n[1][1];if(1-d(a[36][7],[2,[0,q[1],q[2]]],a[71][11]))throw E;var
z=k(g,0)[1],j=k(g,1)[2],l=k(g,2)[3],r=b(a[7][1],z);if(10===r[0]){if(i(L(r[1][1]),ck))throw E;var
A=o(j),B=[0,[0,f,cl,l,j,C(o(l),A),0],0],D=o(l);return[0,[0,f,cm,j,l,C(o(j),D),0],B]}throw E}throw E}throw E}function
aN(e){var
a=[0,-1],c=b(r[1],50);function
f(b){var
e=b[5][1];function
f(b,f){var
e=1-d(r[10],c,b);return e?(a[1]=a[1]+1|0,G(r[5],c,b,a[1])):e}return d(r[11],f,e)}d(m[11],f,e);function
g(e){var
f=p.caml_make_vect(a[1]+1|0,j[3]),g=e[5][1];function
h(e,b){var
a=d(r[7],c,e);return k(f,a)[a+1]=b}d(r[11],h,g);var
i=e[6],l=[0,b(j[6],e[5][2]),0],m=b(am[11],f);return[0,d(I[22],m,l),i]}var
h=d(m[13],g,e);return b(j[25],h)}function
n(a){var
c=bu(a);return bE===c?a[1]:e===c?b(aO[2],a):a}function
h(c){var
d=bu(c),f=bE===d?c[1]:e===d?b(aO[2],c):c;return b(a[8][3],f)}function
$(d,c){var
e=G(a[71][35],cn,d,c);return b(a[49][5],e)}var
aP=[e,function(c){return b(a[71][12],0)}],aQ=[e,function(d){var
c=b(a[71][13],0);return b(a[49][5],c)}],aR=[e,function(d){var
c=b(a[71][14],0);return b(a[49][5],c)}],co=[e,function(d){var
c=b(a[71][15],0);return b(a[49][5],c)}];function
v(a){return $(cp,a)}var
aS=[e,function(a){return v(cq)}],cs=[e,function(a){return v(cr)}],aT=[e,function(a){return v(ct)}],cv=[e,function(a){return v(cu)}],cx=[e,function(a){return v(cw)}],aU=[e,function(a){return v(cy)}],M=[e,function(a){return v(cz)}],aa=[e,function(a){return v(cA)}],aV=[e,function(a){return v(cB)}],an=[e,function(a){return v(cC)}],aW=[e,function(a){return v(cD)}],Q=[e,function(a){return v(cE)}],aX=[e,function(a){return $(cG,cF)}];function
l(a){return $(cH,a)}var
ab=[e,function(a){return l(cI)}],ac=[e,function(a){return l(cJ)}],aY=[e,function(a){return l(cK)}],aZ=[e,function(a){return l(cL)}],a0=[e,function(a){return l(cM)}],a1=[e,function(a){return l(cN)}],a2=[e,function(a){return l(cO)}],a3=[e,function(a){return l(cP)}],a4=[e,function(a){return l(cQ)}],a5=[e,function(a){return l(cR)}],a6=[e,function(a){return l(cS)}],a7=[e,function(a){return l(cT)}],a8=[e,function(a){return l(cU)}],a9=[e,function(a){return l(cV)}],a_=[e,function(a){return l(cW)}],a$=[e,function(a){return l(cX)}],ba=[e,function(a){return l(cY)}],bb=[e,function(a){return l(cZ)}],bc=[e,function(a){return l(c0)}],bd=[e,function(a){return l(c1)}],be=[e,function(a){return l(c2)}],bf=[e,function(a){return l(c3)}],bg=[e,function(a){return l(c4)}],bh=[e,function(a){return l(c5)}],bi=[e,function(a){return l(c6)}],bj=[e,function(a){return l(c7)}];function
c8(a){return 1===a[2]?1:0}function
y(a){return[0,a[1],a[2]]}function
ao(e){var
f=b(I[6],e);if(0===f)return n(aW);var
c=[0,n(Q)],g=f-1|0,h=1;if(!(g<1)){var
d=h;for(;;){var
k=c[1],l=[0,n(Q),k],m=[0,n(aa),l];c[1]=b(a[7][17],m);var
o=d+1|0;if(g!==d){var
d=o;continue}break}}if(0<=e)return c[1];var
i=[0,c[1]],j=[0,n(aV),i];return b(a[7][17],j)}function
N(d){var
c=y(d),e=c[1],f=[0,ao(c[2])],g=[0,n(an),f],h=b(a[7][17],g),i=[0,ao(e),h],j=[0,n(M),i];return b(a[7][17],j)}function
F(E,k){var
n=k[2],o=k[1],p=h(ab),c=[0,b(a[f][5],p)],q=h(ab),e=[0,b(a[f][5],q)],l=o-1|0,r=1;if(!(l<1)){var
j=r;for(;;){var
A=c[1],B=h(ac),C=b(a[f][5],B);c[1]=d(a[g][28][4],C,A);var
D=j+1|0;if(l!==j){var
j=D;continue}break}}var
m=n-1|0,s=1;if(!(m<1)){var
i=s;for(;;){var
w=e[1],x=h(ac),y=b(a[f][5],x);e[1]=d(a[g][28][4],y,w);var
z=i+1|0;if(m!==i){var
i=z;continue}break}}var
t=[0,c[1],[0,e[1],0]],u=h(aZ),v=b(a[f][5],u);return d(a[g][28][5],v,t)}function
bk(G,k){var
l=k[1],p=k[2];if(0===l)var
q=h(a0),m=b(a[f][5],q);else
var
F=h(a1),m=b(a[f][5],F);var
c=[0,m],r=h(ab),e=[0,b(a[f][5],r)],n=l-1|0,s=1;if(!(n<1)){var
j=s;for(;;){var
B=c[1],C=h(aY),D=b(a[f][5],C);c[1]=d(a[g][28][4],D,B);var
E=j+1|0;if(n!==j){var
j=E;continue}break}}var
o=p-1|0,t=1;if(!(o<1)){var
i=t;for(;;){var
x=e[1],y=h(ac),z=b(a[f][5],y);e[1]=d(a[g][28][4],z,x);var
A=i+1|0;if(o!==i){var
i=A;continue}break}}var
u=[0,c[1],[0,e[1],0]],v=h(a2),w=b(a[f][5],v);return d(a[g][28][5],w,u)}function
bl(i,c){var
e=c[1],j=c[2];if(0===e){var
k=h(a3);return b(a[f][5],k)}var
l=bk(i,[0,-e|0,j]),m=h(a4),n=b(a[f][5],m);return d(a[g][28][4],n,l)}function
bm(e,c){var
i=F(e,[0,-c[1]|0,c[2]]),j=h(bj),k=b(a[f][5],j);return d(a[g][28][4],k,i)}var
bn=a[f][8];function
K(j){var
c=b(bn,b(a[8][3],j[1])),e=j[2];if(i(e,c9)){if(i(e,c_)){if(i(e,c$)){if(i(e,da)){if(i(e,db)){if(i(e,dc))throw[0,O,dd];var
k=h(a8),l=b(a[f][5],k);return d(a[g][28][4],l,c)}var
m=h(a7),n=b(a[f][5],m);return d(a[g][28][4],n,c)}return c}return c}var
o=h(a5),p=b(a[f][5],o);return d(a[g][28][4],p,c)}var
q=h(a6),r=b(a[f][5],q);return d(a[g][28][4],r,c)}function
bo(a){function
b(a){return 0===a[0]?[0,a[1],a[2]]:[0,a[1],a[3]]}return d(m[13],b,a)}function
z(d){var
c=b(am[11],d),e=b(m[4],c),f=b(am[12],e),g=[0,b(m[3],c),f];return b(a[7][17],g)}var
ad=[W,de,T(0)];function
R(e){function
c(c){var
W=b(a[32][31][5],c),X=b(a[78][29][2],c);b(a[71][3],df);var
Y=d(a[84][10],X,W),Z=b(a[8][52][1],Y),q=b(a[5][1][6],dg);try{var
V=b(a[7][1],Z);if(9===V[0]){var
w=_(V[1]);if(i(w,dl))if(i(w,dm))if(i(w,dn)){if(i(w,dp))throw ad;var
bE=R(0),bF=b(a[f][13],q),bG=h(a9),bH=b(a[f][5],bG),bI=d(a[g][28][4],bH,bF),x=d(a[g][28][4],bI,bE)}else
var
bJ=R(0),bK=b(a[f][13],q),bL=h(a_),bM=b(a[f][5],bL),bN=d(a[g][28][4],bM,bK),x=d(a[g][28][4],bN,bJ);else
var
bO=R(0),bP=b(a[f][13],q),bQ=h(a$),bR=b(a[f][5],bQ),bS=d(a[g][28][4],bR,bP),x=d(a[g][28][4],bS,bO);else
var
bT=R(0),bU=b(a[f][13],q),bV=h(ba),bW=b(a[f][5],bV),bX=d(a[g][28][4],bW,bU),x=d(a[g][28][4],bX,bT);return x}throw ad}catch(i){i=H(i);if(i===ad){var
$=bo(b(a[32][31][2],c)),ab=function(c){var
d=c[2];return[0,b(a[8][11],c[1]),d]},o=[0,0],ac=d(m[13],ab,$),ae=function(a){try{var
b=o[1],c=aM(a);o[1]=d(I[22],c,b);var
e=0;return e}catch(a){a=H(a);if(a===E)return 0;throw a}};d(m[11],ae,ac);if(0===o[1]){var
af=b(bp[3],dh);G(bq[6],0,0,af)}var
r=aN(o[1]),s=[0,b(a[32][10],0)];if(0===r){var
ag=b(bp[3],di);G(bq[6],0,0,ag)}else{if(r)if(r[2])var
J=0;else{var
A=r[1],L=A[2],B=A[1],C=[0,0],ah=d(m[40],o[1],A[3]),ai=function(a){var
b=a[2],c=p.caml_notequal(b,j[3]),d=a[1],e=c?(C[1]=[0,[0,d,b],C[1]],0):c;return e};d(m[11],ai,ah);var
D=C[1];if(!D)throw[0,O,dk];var
P=D[2],S=D[1],t=S[2],k=S[1],l=[0,k[6]],aj=k[3],ak=N(t),u=[0,z([0,n(M),ak,aj])],al=k[4],am=N(t),v=[0,z([0,n(M),am,al])],ao=function(b){var
c=b[2],a=b[1],d=l[1],e=d||a[6];l[1]=e;var
f=a[3],g=N(c),h=z([0,n(M),g,f]),i=u[1];u[1]=z([0,n(aa),i,h]);var
j=a[4],k=N(c),m=z([0,n(M),k,j]),o=v[1];v[1]=z([0,n(aa),o,m]);return 0};d(m[11],ao,P);var
ap=v[1],aq=u[1],ar=l[1]?n(aS):n(aT),T=z([0,ar,aq,ap]),as=N(B);if(k[6])var
at=[0,F(c,y(t)),0],au=[0,K(k),at],av=h(bb),aw=b(a[f][5],av),U=d(a[g][28][5],aw,au);else
var
bz=[0,F(c,y(t)),0],bA=[0,K(k),bz],bB=h(bc),bD=b(a[f][5],bB),U=d(a[g][28][5],bD,bA);var
e=[0,U];l[1]=k[6];var
ax=function(k){var
j=k[2],i=k[1];if(l[1])if(i[6]){var
m=[0,F(c,y(j)),0],n=[0,K(i),m],o=[0,e[1],n],p=h(bd),q=b(a[f][5],p);e[1]=d(a[g][28][5],q,o)}else{var
t=[0,F(c,y(j)),0],u=[0,K(i),t],v=[0,e[1],u],w=h(be),x=b(a[f][5],w);e[1]=d(a[g][28][5],x,v)}else
if(i[6]){var
z=[0,F(c,y(j)),0],A=[0,K(i),z],B=[0,e[1],A],C=h(bf),D=b(a[f][5],C);e[1]=d(a[g][28][5],D,B)}else{var
E=[0,F(c,y(j)),0],G=[0,K(i),E],H=[0,e[1],G],I=h(bg),J=b(a[f][5],I);e[1]=d(a[g][28][5],J,H)}var
r=l[1],s=r||i[6];l[1]=s;return 0};d(m[11],ax,P);var
ay=L?bl(c,y(B)):bm(c,y(B)),az=[0,e[1],0],aA=0,aB=0,aC=function(c){var
e=h(aX),i=b(a[f][5],e),j=b(a[f][5],c);return d(a[g][28][4],j,i)},aD=n(aP),aE=b(a[g][28][3],aD),aF=[0,d(a[32][32][1],aE,aC),aB],aG=b(a[32][10],0),aH=b(a[32][10],0),aI=[0,d(a[g][28][8],aH,aG),aF],aJ=h(Q),aK=[0,n(Q)],aL=[0,n(an),aK],aO=b(a[7][17],aL),aV=b(a[8][3],aO),aW=d(a[bC][2],aV,aJ),aY=[0,ay,[0,d(a[g][28][5],aW,aI),aA]],aZ=b(a[8][3],as),a0=u[1],a1=v[1],a2=z([0,n(aU),a1,a0]),a3=b(a[8][3],a2),a4=d(a[bC][2],a3,aZ),a5=d(a[g][28][5],a4,aY),a6=L?h(bh):h(bi),a7=b(a[f][5],a6),a8=d(a[g][28][4],a7,a5),bj=z([0,n(aR),T]),bk=b(a[8][3],bj),bn=b(a[f][4],bk),br=[0,d(a[g][28][4],bn,a8),az],bs=b(a[8][3],T),bt=b(a[f][11],bs);s[1]=d(a[g][28][5],bt,br);var
bu=[0,s[1],0],bv=b(a[114][1],0),bw=[0,d(a[g][28][4],a[f][14],bv),bu],bx=h(aQ),by=b(a[f][11],bx);s[1]=d(a[g][28][5],by,bw);var
J=1}else
var
J=0;if(!J)throw[0,O,dj]}return s[1]}throw i}}return b(a[32][31][3],c)}var
ap=[0,r,u,aI,w,x,aJ,aK,C,aL,L,_,D,q,P,o,ca,E,aM,aN,n,n,h,$,aP,aQ,aR,co,v,aS,cs,aT,cv,cx,aU,M,aa,aV,an,aW,Q,aX,l,ab,ac,aY,aZ,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,c8,y,ao,N,F,bk,bl,bm,bn,K,bo,z,ad,R];ae(117,ap,"Fourier_plugin.FourierR");b(dq[7][1],S);function
dr(f){var
c=[28,[0,0,[31,d(dt[9],0,[0,[0,[0,S,ds],0],0])]]],e=b(a[5][1][6],du);return dx(br[6][4],1,0,e,c)}var
dv=[0,function(c,a){return b(ap[82],0)}];G(br[6][9],0,[0,S,dw],dv);d(a[76][1],dr,S);var
bs=[0,S];ae(121,bs,"Fourier_plugin.G_fourier");ae(122,[0,j,ap,bs],"Fourier_plugin");return});
