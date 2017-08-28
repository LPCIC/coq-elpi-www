(function(ea){"use strict";var
aw="Firstorder",e=112,av="$l",a0="already done",au="firstorder_using",a9=",",a2=250,ad="$t",aq="gintuition",at=246,g=111,I="Extension: cannot occur",a8="with",ab=118,aZ="Depth",V="firstorder",ap=116,a7="ground_plugin",as="Firstorder_Print_Solver",ac=100,a6="Solver",J="plugins/firstorder/g_ground.ml4",a5=248,ao="Firstorder_Set_Solver",ar="using",a4="-----",a1=103,a3="reversible in 1st order mode",aa=129,t=ea.jsoo_runtime,C=t.caml_check_bound,aW=t.caml_fresh_oo_id,d=t.caml_new_string,aX=t.caml_obj_tag,H=t.caml_register_global,u=t.caml_wrap_exception;function
b(a,b){return a.length==1?a(b):t.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):t.caml_call_gen(a,[b,c])}function
f(a,b,c,d){return a.length==3?a(b,c,d):t.caml_call_gen(a,[b,c,d])}function
q(a,b,c,d,e){return a.length==4?a(b,c,d,e):t.caml_call_gen(a,[b,c,d,e])}function
D(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):t.caml_call_gen(a,[b,c,d,e,f])}function
L(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):t.caml_call_gen(a,[b,c,d,e,f,g])}function
aY(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):t.caml_call_gen(a,[b,c,d,e,f,g,h])}var
p=t.caml_get_global_data(),G=d(a7),aL=[0,d(a7),d("auto_with")],a=p.API,h=p.Util,P=p.Int,z=p.Not_found,x=p.Queue,A=p.Assert_failure,l=p.Pp,v=p.Pervasives,S=p.CErrors,Q=p.Option,aj=p.Heap,aF=p.CamlinternalLazy,i=p.Ltac_plugin,aK=p.Feedback,aJ=p.List,y=p.Loc,j=p.Genarg,o=p.Grammar_API,N=p.CList,aU=p.Array,ax=[0,1],ae=[0,a[24][9]],ba=d("Formula.Is_atom"),bc=[0,0,[0,0,0]],bd=d("_"),bf=d("Unify.UFAIL"),bz=d(" : "),bA=d("| "),bB=d(a4),bC=d(a4),bw=d(" : No such Hint database"),bx=d("Firstorder: "),bZ=d("iff"),b0=d("not"),bX=[0,d("Init"),[0,d("Logic"),0]],bY=d("User"),bU=d(a3),bK=d("No link"),bI=d("No axiom link"),bG=[0,d("plugins/firstorder/rules.ml"),60,7],bE=d("Not the expected number of hyps."),b$=d("not implemented ... yet"),b9=d("Untypable instance, maybe higher-order non-prenex quantification"),b8=d(a0),b_=d(a0),b5=d("can't happen."),b6=d("x"),ca=[0,0],cb=d(a3),d9=[0,d(J),1,0],d8=d(ad),d_=[0,d(aq)],d$=d(aq),d3=d(I),dZ=[0,d(J),1,0],dX=[0,d(J),1,0],dU=[0,d(J),1,0],dR=[0,d(J),1,0],dO=[0,d(J),1,0],dM=[0,d(J),1,0],dJ=[0,d(J),1,0],dI=d("$l'"),dK=[0,d(a8)],dL=d(av),dN=d(ad),dP=[0,d(V)],dQ=d(av),dS=[0,d(a8)],dT=d(ad),dV=[0,d(V)],dW=d(av),dY=d(ad),d0=[0,d(V)],d1=d(V),dD=d(I),dB=d(I),dz=d(I),cX=d('Deprecated syntax; use "," as separator'),cS=d(as),cP=d(as),cM=d(I),cK=d(as),cH=d("Firstorder solver tactic is "),cG=d(I),cE=d(ao),cw=d(ao),ct=d(I),cr=d(ao),co=d(I),cd=[0,d(aw),[0,d(aZ),0]],ce=d("Firstorder Depth"),ch=[0,d("Congruence"),[0,d(aZ),0]],ci=d("Congruence Depth"),cm=d("Firstorder default solver"),cz=[0,d(a6)],cA=[0,d(aw)],cB=[0,d("Set")],cQ=[0,[0,[0,d("Print")],[0,[0,d(aw)],[0,[0,d(a6)],0]]],0],cT=d("GTauto failed"),cY=d("deprecated"),cZ=d("firstorder-deprecated-syntax"),c1=d(au),c9=d(au),dc=d(ar),df=d(a9),di=d(a9),dl=d(ar),ds=d(ar),dx=d(au),dG=d(V),d6=d(aq),bD=p.Control,c0=p.CWarnings;function
a_(h,g,f,e,d,b){var
a=c(h,f,e);return 0===a?c(g,d,b):a}function
a$(j,i,h,g,f,e,d,b){var
a=q(j,h,g,f,e);return 0===a?c(i,d,b):a}var
O=[a5,ba,aW(0)];function
ay(h,g){var
c=h,d=g;for(;;){var
e=b(a[7][1],d);if(6===e[0]){var
f=e[3];if(0<c){var
c=c-1|0,d=f;continue}return 1+ay(0,f)|0}return 0}}function
bb(e,d){var
f=b(a[50][6],d[1])[1][6],g=c(a[56][1],e,d);function
i(a){return ay(f,a)}return c(h[19][15],i,g)}function
W(j,d,i,g,e){var
k=c(a[56][1],j,g);function
l(g){var
h=b(a[8][3],g),j=f(a[84][16],d,h,e),k=f(a[8][79],d,i,j)[2];return c(a[8][48],d,k)[1]}return c(h[19][15],l,k)}function
af(d,c,b){return q(a[55][10],ae[1],d,c,b)}function
X(m,d,A){var
e=q(a[55][1],ae[1],m,d,A),n=c(a[ab][10],d,e);if(n){var
o=n[1],B=o[1];return[0,B,c(a[8][53][6],-1,o[2])]}var
p=c(a[ab][11],d,e);if(p){var
r=p[1];return[5,r[2],r[3]]}var
s=c(a[ab][12],d,e);if(s){var
g=s[1],i=g[2],C=g[3],t=c(a[8][31],d,g[1]),f=t[1],j=c(a[8][2][2],d,t[2]),u=b(a[50][6],f),k=u[2],v=u[1],w=k[4].length-1;if(0===w)return[1,[0,f,j],i];var
D=0<C?1:0,E=function(e){var
f=v[6],g=b(a[8][3],e);return c(a[84][17],d,g)===f?1:0},l=c(h[19][28],E,k[9]);if(!b(a[56][8],[0,f,v,k])){var
H=D?l?1:0:1;if(H)return 1===w?[2,[0,f,j],i,l]:[3,[0,f,j],i,l]}return[6,e]}var
x=c(a[ab][13],d,e);if(x){var
y=x[1],F=y[2],z=c(a[8][31],d,y[1]),G=z[1];return[4,[0,G,c(a[8][2][2],d,z[2])],F]}return[6,af(m,d,e)]}var
be=[0,b(a[5][1][6],bd)];function
az(m,i,p,g,d){var
n=[0,0],k=[0,0],l=[0,0];function
j(A,e,z){var
g=A,o=z;for(;;){var
d=X(m,i,o);switch(d[0]){case
0:var
B=d[2];j(g,1-e,d[1]);var
o=B;continue;case
1:var
s=1-e,D=s?(n[1]=1,0):s;return D;case
4:var
v=d[2],J=d[1],K=b(p,1),L=b(a[8][16],K),M=C(W(m,i,1,J,v),0)[1],N=function(f,i,d){var
h=b(a[6][1][1][2],d);return j([0,L,g],e,c(a[8][53][6],f,h))},O=2-b(h[17][1],v)|0;return q(h[17][83],N,O,0,M);case
5:var
P=d[2],Q=b(p,1),g=[0,b(a[8][16],Q),g],o=P;continue;case
6:var
r=f(a[8][53][1],g,0,d[1]),w=1-c(a[8][80],i,r);if(w){if(e){k[1]=[0,r,k[1]];return 0}l[1]=[0,r,l[1]];var
x=0}else
var
x=w;return x;default:var
E=d[2],F=d[1];if(d[3]){var
y=af(m,i,f(a[8][53][1],g,0,o));if(e)k[1]=[0,y,k[1]];else
l[1]=[0,y,l[1]]}var
t=W(m,i,0,F,E),G=function(f,i,d){var
h=b(a[6][1][1][2],d);return j(g,e,c(a[8][53][6],f,h))},H=function(a){var
c=1-b(h[17][1],a)|0;return q(h[17][83],G,c,0,a)};if(e)var
I=function(a){return a?0:1},u=c(h[19][28],I,t);else
var
u=e;if(u)n[1]=1;return c(h[19][13],H,t)}}}switch(g){case
0:j(0,0,d);break;case
1:j(0,1,d);break;default:var
e=c(a[8][47],i,d),o=e[2],r=e[1],s=function(d){var
c=b(p,1);return b(a[8][16],c)};j(c(h[17][14],s,r),0,o);n[1]=0}return[0,n[1],[0,k[1],l[1]]]}var
m=[0,ax,ae,a_,a$,bb,W,be,az,function(i,g,p,v,f,o){function
l(a){return af(i,g,a)}try{var
q=b(o,0)+1|0,r=ax[1]?az(i,g,o,p,f):bc,s=r[1],w=r[2];if(1===p){var
m=X(i,g,f);switch(m[0]){case
0:var
j=0;break;case
1:var
j=3;break;case
2:var
j=1;break;case
3:var
j=2;break;case
4:var
y=C(W(i,g,0,m[1],m[2]),0)[1],z=b(h[17][105],y),j=[0,q,b(a[6][1][1][2],z),s];break;case
5:var
j=4;break;default:throw[0,O,m[1]]}var
t=[1,j]}else{var
d=X(i,g,f);switch(d[0]){case
0:var
n=d[1],A=d[2],B=l(n),c=X(i,g,n);switch(c[0]){case
0:var
e=[5,c[1],c[2],A];break;case
1:var
e=[0,c[1],c[2]];break;case
2:var
e=[1,c[1],c[2]];break;case
3:var
e=[2,c[1],c[2]];break;case
4:var
e=[4,c[1],c[2]];break;case
5:var
e=[3,n];break;default:var
e=0}var
k=[4,B,e];break;case
1:var
k=0;break;case
2:var
D=d[1];if(d[3])throw[0,O,l(f)];var
k=[0,D];break;case
3:var
E=d[1];if(d[3])throw[0,O,l(f)];var
k=[1,E];break;case
4:var
k=[3,d[1]];break;case
5:var
k=[2,q,d[1],s];break;default:throw[0,O,d[1]]}var
t=[0,k]}var
x=[0,[0,v,l(f),t,w]];return x}catch(a){a=u(a);if(a[1]===O)return[1,a[2]];throw a}}];H(96,m,"Ground_plugin.Formula");var
E=[a5,bf,aW(0)];function
aA(b){return c(a[8][53][6],-1,b)}function
ag(e,d){function
f(c){var
d=c[1];return[0,d,b(a[8][52][1],c[2])]}var
g=c(h[17][12],f,e),i=b(a[8][52][1],d),j=c(a[84][33],g,i);return b(a[8][3],j)}function
ah(g,V,U){var
j=b(x[2],0),p=[0,0];function
s(b,a){var
d=p[1];function
e(c){var
d=c[1];return[0,d,ag([0,[0,b,a],0],c[2])]}p[1]=[0,[0,b,a],c(h[17][12],e,d)];return 0}function
t(b){var
d=c(a[8][4],g,b);if(2===d[0]){var
e=d[1];try{var
f=t(c(P[4][2],e,p[1]));return f}catch(a){a=u(a);if(a===z)return b;throw a}}return b}c(x[3],[0,V,U],j);try{for(;;){var
B=b(x[5],j),W=B[2],k=t(c(a[55][8],g,B[1])),l=t(c(a[55][8],g,W)),i=c(a[8][4],g,k),d=c(a[8][4],g,l);switch(i[0]){case
2:var
q=i[1];if(2===d[0]){var
y=d[1];if(1-(q===y?1:0))if(q<y)s(y,k);else
s(q,l)}else{var
w=ag(p[1],l),$=c(a[84][34],g,w);if(b(P[2][2],$))var
aa=b(a[8][16],q),S=f(a[84][6],g,aa,w)?0:(s(q,w),1);else
var
S=0;if(!S)throw[0,E,k,l]}var
e=3;break;case
6:var
ab=i[3],ac=i[2];switch(d[0]){case
2:var
e=0;break;case
5:var
e=1;break;case
6:var
I=d[3],H=d[2],G=ab,F=ac,e=4;break;default:var
e=2}break;case
7:var
af=i[3],ah=i[2];switch(d[0]){case
2:var
e=0;break;case
5:var
e=1;break;case
7:var
I=d[3],H=d[2],G=af,F=ah,e=4;break;default:var
e=2}break;case
9:var
J=i[2],ai=i[1];switch(d[0]){case
2:var
e=0;break;case
5:var
e=1;break;case
9:var
K=d[2];c(x[3],[0,ai,d[1]],j);var
L=J.length-1;if(L!==K.length-1)throw[0,E,k,l];var
M=L-1|0,aj=0;if(!(M<0)){var
m=aj;for(;;){var
ak=C(K,m)[m+1],al=[0,C(J,m)[m+1],ak];c(x[3],al,j);var
am=m+1|0;if(M!==m){var
m=am;continue}break}}var
e=3;break;default:var
e=2}break;case
13:var
N=i[4],an=i[3],ao=i[2];switch(d[0]){case
2:var
e=0;break;case
5:var
e=1;break;case
13:var
O=d[4],ap=d[3];c(x[3],[0,ao,d[2]],j);c(x[3],[0,an,ap],j);var
Q=N.length-1;if(Q!==O.length-1)throw[0,E,k,l];var
R=Q-1|0,aq=0;if(!(R<0)){var
n=aq;for(;;){var
ar=C(O,n)[n+1],as=[0,C(N,n)[n+1],ar];c(x[3],as,j);var
at=n+1|0;if(R!==n){var
n=at;continue}break}}var
e=3;break;default:var
e=2}break;default:var
e=0}switch(e){case
0:if(2===d[0]){var
D=d[1],v=ag(p[1],k),Z=c(a[84][34],g,v);if(b(P[2][2],Z)){var
_=b(a[8][16],D);if(f(a[84][6],g,_,v))var
A=1;else{s(D,v);var
o=2,A=0}}else
var
A=1;if(A)throw[0,E,k,l]}else
if(5===i[0]){var
Y=[0,c(a[84][10],g,k),l];c(x[3],Y,j);var
o=2}else
var
o=0;break;case
1:var
o=0;break;case
2:var
o=1;break;case
3:var
o=2;break;default:c(x[3],[0,F,H],j);var
ad=aA(I),ae=[0,aA(G),ad];c(x[3],ae,j);var
o=3}switch(o){case
0:if(5===d[0]){var
X=[0,k,c(a[84][10],g,l)];c(x[3],X,j);var
r=1}else
var
r=0;break;case
1:var
r=0;break;case
2:var
r=1;break;default:var
r=2}switch(r){case
0:if(1-f(a[8][67],g,k,l))throw[0,E,k,l];var
T=0;break;case
1:var
T=0;break;default:var
T=1}continue}}catch(a){a=u(a);if(a===x[1])return p[1];throw a}}function
bg(b,g,d){function
e(d){if(c(a[8][80],b,d))if(c(a[8][81],b,d)===g)return 0;function
h(a,c){var
b=e(c);return 0<=a?0<=b?a+b|0:a:b}var
f=q(a[8][63],b,h,-1,d);return 0<=f?f+1|0:-1}return e(d)}function
bh(g,f){var
d=[0,1],e=[0,0];function
h(f,i){var
j=c(a[8][4],g,i);if(2===j[0]){var
k=j[1];try{var
n=f+c(P[4][2],k,e[1])|0,o=b(a[8][9],n);return o}catch(c){c=u(c);if(c===z){var
l=d[1];d[1]++;e[1]=[0,[0,k,l],e[1]];return b(a[8][9],l+f|0)}throw c}}function
m(a){return a+1|0}return D(a[8][82],g,m,h,f,i)}var
i=h(0,f);return[0,d[1]-1|0,i]}function
bi(b,f,e,d,i){try{var
j=ah(b,d,i),g=c(P[4][2],f,j);if(c(a[8][80],b,g))var
h=[0,[1,e]];else
var
k=bg(b,f,d),h=[0,[0,bh(b,g),k]];return h}catch(a){a=u(a);if(a[1]===E)return 0;if(a===z)return[0,[1,e]];throw a}}function
aB(f,e,d){function
g(c){return b(a[8][16],f+c|0)}var
i=c(h[17][48],e,g);return c(a[8][53][5],i,d)}var
Y=[0,E,ah,bi,function(f,e,d){var
b=e[1],g=d[2],i=d[1],j=aB(0,b,e[2]),k=aB(b,i,g);try{var
l=ah(f,j,k),m=function(d){var
e=d[1]<b?1:0,g=d[2];return e?e:c(a[8][80],f,g)},n=c(h[17][22],m,l);return n}catch(a){a=u(a);if(a[1]===E)return 0;throw a}}];H(101,Y,"Ground_plugin.Unify");function
aC(a){if(0===a[0]){var
b=a[1];if(typeof
b==="number")return 999;else
switch(b[0]){case
0:return 90;case
1:return 40;case
2:return-30;case
3:return 60;default:var
c=b[2];if(typeof
c==="number")return 0;else
switch(c[0]){case
0:return ac;case
1:return 80;case
2:return 70;case
3:return-20;case
4:return 50;default:return-10}}}var
d=a[1];if(typeof
d==="number")switch(d){case
0:return ac;case
1:return 40;case
2:return-15;case
3:return-50;default:return ac}return-29}var
bj=[0,function(b,a){var
c=aC(a[3]);return aC(b[3])-c|0}],ai=[0,a[7][75]],bk=[0,function(d,b){var
g=b[2],h=d[2],e=c(a[36][5][1],d[1],b[1]);if(0===e){var
i=function(b,a){var
d=t.caml_int_compare(b[1],a[1]),e=a[2],f=b[2];return 0===d?c(ai[1],f,e):d};return f(Q[5],i,h,g)}return e}],k=b(h[21][1],ai),R=b(h[20][1],bk);function
Z(h,g,e,b){var
d=c(a[8][50],h,g);try{var
i=[0,e,c(k[22],d,b)],j=f(k[4],d,i,b);return j}catch(a){a=u(a);if(a===z)return f(k[4],d,[0,e,0],b);throw a}}function
aD(j,i,g,b){var
d=c(a[8][50],j,i);try{var
l=c(k[22],d,b),m=function(b){return 1-c(a[36][7],b,g)},e=c(h[17][29],m,l),n=e?f(k[4],d,e,b):c(k[6],d,b);return n}catch(a){a=u(a);if(a===z)return b;throw a}}var
K=b(aj[2],bj);function
bl(a){return[0,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]-1|0]}function
bm(b,a){var
d=a[8],e=c(R[4],b,a[7]);return[0,a[1],a[2],a[3],a[4],a[5],a[6],e,d]}function
bn(m,d,e){var
g=c(R[3],d,e[7]);if(g)var
h=g;else{var
i=d[2],n=d[1];if(i){var
j=i[1],k=j[1],o=j[2],l=function(d){var
e=d[2],p=d[1];if(e){var
g=e[1],h=g[1],q=g[2],i=c(a[36][7],n,p);if(i){var
j=k<h?1:0;if(j){var
r=[0,k,b(a[8][3],o)],s=[0,h,b(a[8][3],q)];return f(Y[4],m,s,r)}var
l=j}else
var
l=i;return l}return 0};return c(R[17],l,e[7])}var
h=0}return h}function
ak(j,g,f,e,i,a){var
h=L(m[9],j,g,f,e,i,a[6]);if(0===h[0]){var
b=h[1];if(1===f){var
k=a[8],l=a[7],n=a[6],o=b[2],p=a[3],q=a[2];return[0,c(K[2],b,a[1]),q,p,o,0,n,l,k]}var
r=a[8],s=a[7],t=a[6],u=a[5],v=a[4],w=a[3],x=Z(g,b[2],e,a[2]);return[0,c(K[2],b,a[1]),x,w,v,u,t,s,r]}var
d=h[1];if(1===f)return[0,a[1],a[2],a[3],d,[0,d],a[6],a[7],a[8]];var
y=a[8],z=a[7],A=a[6],B=a[5],C=a[4],D=[0,d,a[3]],E=Z(g,d,e,a[2]);return[0,a[1],E,D,C,B,A,z,y]}function
bo(c,b,a){function
d(a,b){return a[1]===m[7]?b:Z(c,a[2],a[1],b)}var
e=a[8],g=a[7],i=a[6],j=a[5],k=a[4],l=a[3],n=f(h[17][16],d,b,a[2]);return[0,f(h[17][16],K[2],b,a[1]),n,l,k,j,i,g,e]}function
bp(f,e,d){var
g=d[2],i=c(a[8][50],f,e),j=c(k[22],i,g);return b(h[17][3],j)}function
bq(g,f){var
a=f;for(;;){var
c=b(K[3],a[1]),d=b(K[4],a[1]);if(c[1]===m[7]){var
e=[0,d,a[2],a[3],a[4],a[5],a[6],a[7],a[8]];if(a[4]===c[2])return[0,c,e];var
a=e;continue}var
h=a[8],i=a[7],j=a[6],k=a[5],l=a[4],n=a[3];return[0,c,[0,d,aD(g,c[2],c[1],a[2]),n,l,k,j,i,h]]}}function
br(e){var
c=[0,-1],f=R[1];function
d(a){if(a)c[1]++;return c[1]}var
g=b(a[8][16],1);return[0,K[1],k[1],0,g,0,d,f,e]}function
bs(d){if(2===d[0]){var
e=d[1],f=function(a){return[3,[0,e,a+1|0]]},g=b(a[56][9],e);return c(h[17][48],g,f)}return[0,d,0]}var
bt=b(h[17][113],bs);function
bu(c,g,e,d){var
i=b(bt,e);function
j(e,d){var
i=d[1],f=L(a[27][28],0,0,0,c,d[2],e),j=f[1],k=b(a[8][3],f[2]),g=q(a[59][2],0,c,j,k),h=g[1];return[0,ak(c,h,0,e,g[2],i),h]}return f(h[17][16],j,i,[0,d,g])}function
bv(g,d,j,i){var
e=[0,i];function
k(j){var
h=b(a[ap][13],j[7]);switch(h[0]){case
0:case
2:case
3:var
i=h[1][1][1];try{var
k=c(a[84][25],d,i)[1],l=f(a[59][4],g,d,i);e[1]=ak(g,d,2,k,l,e[1]);var
m=0;return m}catch(a){a=u(a);if(a===z)return 0;throw a}default:return 0}}function
m(d,b,a){return c(h[17][11],k,a)}function
n(d){try{var
j=b(a[ap][3],d),e=j}catch(a){a=u(a);if(a!==z)throw a;var
g=c(v[16],d,bw),h=c(v[16],bx,g),i=b(l[3],h),e=f(S[6],0,0,i)}return c(a[ap][1][3],m,e)}c(h[17][11],n,j);return[0,e[1],d]}function
by(d){function
e(f,e,d){var
g=a[27][10],h=b(a[50][1],0),i=D(a[88][3],0,0,h,g,f),j=b(l[14],0),k=b(a[a1][8],i),m=b(l[3],bz),n=c(l[36],a[90][20],e),o=b(l[3],bA),p=c(l[12],o,n),q=c(l[12],p,m),r=c(l[12],q,k),s=c(l[12],r,j);return c(l[12],s,d)}var
g=b(l[3],bB),h=b(l[7],0),i=f(k[11],e,d,h),j=b(l[14],0),m=b(l[3],bC),n=c(l[12],m,j),o=c(l[12],n,i),p=c(l[12],o,g);return c(l[24],0,p)}var
n=[0,ai,[0,k[1],k[2],k[3],k[4],k[5],k[6],k[7],k[8],k[9],k[10],k[11],k[12],k[13],k[14],k[15],k[16],k[17],k[18],k[19],k[20],k[21],k[22],k[23],k[24]],R,Z,aD,K,bl,bm,bn,ak,bo,bp,bq,br,bu,bv,by];H(107,n,"Ground_plugin.Sequent");function
s(r,o,k,s){function
d(d){b(bD[2],0);var
t=b(a[32][31][2],d),e=b(a[78][29][5],d),g=b(a[78][29][2],d);function
p(v,u,t){var
k=v,j=u,i=t;for(;;){if(0<k){if(j){var
r=j[2],m=j[1],o=b(a[6][2][1][1],m),w=b(a[78][29][7],d);if(!q(a[84][3],e,g,o,w)){var
x=f(a[84][32],e,g,o);if(!c(h[17][23],x,i)){var
y=p(k-1|0,r,[0,m,i]),z=b(a[6][2][1][2],m);return L(n[10],e,g,0,[0,o],z,y)}}var
k=k-1|0,j=r,i=[0,m,i];continue}var
A=b(l[3],bE);return f(S[3],0,0,A)}return s}}var
i=p(r,t,0);if(o)var
u=b(a[78][29][7],d),j=L(n[10],e,g,1,m[7],u,i);else
var
j=i;return b(k,j)}return b(a[32][31][3],d)}function
bF(a){if(0===a[0])return a[1];throw[0,A,bG]}function
B(c){return 0===c[0]?b(a[g][58],[0,c[1],0]):a[e][28][29]}function
bH(h,d){function
i(i){try{var
k=function(c){return b(a[g][33],c)},m=b(a[78][29][2],i),o=f(n[12],m,h,d),p=b(a[e][28][3],o),q=c(a[32][32][1],p,k);return q}catch(d){d=u(d);if(d===z){var
j=b(l[3],bI);return c(a[e][28][2],0,j)}throw d}}return b(a[32][31][1],i)}function
bJ(k,j,h,i,d){var
m=s(1,0,i,d),o=[0,a[g][14],0],p=[0,B(h),o];function
q(j){try{var
p=f(n[12],j,k,d),q=b(a[32][10],p),i=q}catch(d){d=u(d);if(d!==z)throw d;var
m=b(l[3],bK),i=c(a[e][28][2],0,m)}function
o(d){function
f(d){function
f(c){var
e=[0,b(a[8][14],[0,c,[0,d]]),0];return b(a[g][65],e)}var
i=b(a[e][28][3],h);return c(a[32][32][1],i,f)}var
i=b(a[e][28][3],d);return c(a[32][32][1],i,f)}return c(a[32][32][1],i,o)}var
r=[0,c(a[32][32][1],a[32][14],q),p],t=b(a[e][28][26],r);return f(a[e][28][30],t,m,j)}function
bL(d,c,b){var
h=s(0,1,c,b);return f(a[e][28][30],a[g][86],h,d)}function
bM(h,f,d){var
i=s(0,1,f,d),j=[0,b(a[e][28][22],i)],k=c(a[g][43],0,j);return c(a[e][28][8],k,h)}function
bN(i,h,d){var
j=s(1,1,h,d),k=b(a[e][28][22],j),l=c(a[e][28][4],a[g][10],k),m=c(a[e][28][8],l,i),n=s(1,1,h,d);return f(a[e][28][30],a[g][14],n,m)}function
bO(l,k,d,j,i){function
h(n){var
o=b(a[78][29][5],n),h=C(c(m[5],o,l),0)[1],p=s(h,0,j,i),q=[0,c(a[e][28][14],h,a[g][14]),0],r=[0,B(d),q],t=a[g][9],u=b(a[e][28][3],d),v=[0,c(a[32][32][1],u,t),r],w=b(a[e][28][26],v);return f(a[e][28][30],w,p,k)}return b(a[32][31][1],h)}function
bP(l,k,d,j,i){function
n(n){var
o=b(a[78][29][5],n),p=c(m[5],o,l);function
q(f){var
h=[0,s(f,0,j,i),0],k=[0,c(a[e][28][14],f,a[g][14]),h],l=[0,B(d),k];return b(a[e][28][26],l)}var
r=c(h[19][15],q,p),t=a[g][9],u=b(a[e][28][3],d),v=c(a[32][32][1],u,t);return f(a[e][28][31],v,r,k)}return b(a[32][31][1],n)}function
bQ(d){var
f=a[g][9],h=b(a[e][28][3],d);return c(a[32][32][1],h,f)}function
bR(d,k,q,j,p,o){var
r=d[2],t=d[1];function
i(l){var
u=b(a[78][29][2],l),v=b(a[78][29][5],l),n=D(m[6],v,u,0,d,k),i=n.length-1,w=b(h[19][12],k),x=s(i,0,p,o),y=[0,c(a[e][28][14],i,a[g][14]),0],z=[0,B(j),y];function
A(s){function
d(e){var
f=C(n,e)[e+1],d=b(h[17][1],f),g=[0,[0,t,e+1|0],b(a[8][2][1],r)],i=[0,b(a[8][17],g),w],j=b(a[8][14],i);function
k(c){return b(a[8][9],d-c|0)}var
l=c(h[19][2],d,k),m=[0,c(a[8][53][6],d,j),l],o=[0,b(a[8][14],m)],p=[0,c(a[8][53][6],d,s),o],q=b(a[8][14],p);return c(a[8][59],q,f)}var
e=c(h[17][48],i,d);return b(a[g][65],e)}var
E=b(a[e][28][3],j),F=[0,c(a[32][32][1],E,A),z],G=b(a[e][28][26],F);return f(a[e][28][30],G,x,q)}return b(a[32][31][1],i)}function
bS(j,i,l,k,d,h,f){var
m=[0,0,j,c(a[8][53][6],1,i)],n=b(a[8][8],m),q=s(2,1,h,f),r=[0,b(a[e][28][22],q),0],t=[0,a[g][10],[0,a[g][10],r]],o=0,p=0,u=[0,B(d),t];function
v(k){var
d=b(a[8][9],2),e=[0,0,c(a[8][53][6],1,j),d],f=[0,k,[0,b(a[8][12],e)]],h=[0,0,i,b(a[8][14],f)],l=[0,b(a[8][12],h),0];return b(a[g][65],l)}var
w=b(a[e][28][3],d),x=[0,c(a[32][32][1],w,v),u],y=[0,b(a[e][28][26],x),p];function
z(c){return b(a[g][33],c)}var
A=b(a[e][28][3],d),C=[0,c(a[32][32][1],A,z),y],D=b(a[g][11],n),E=[0,c(a[e][28][5],D,C),o],F=[0,s(1,0,h,f),0],G=[0,B(d),F],H=[0,b(a[e][28][26],[0,a[g][10],G]),E],I=b(a[g][11],l),J=c(a[e][28][5],I,H);return c(a[e][28][8],J,k)}function
bT(i,h,d){if(m[1][1])var
k=b(l[3],bU),j=c(a[e][28][2],0,k);else
var
j=i;var
n=s(0,1,h,d),o=b(a[e][28][22],n),p=c(a[e][28][4],a[g][10],o),q=c(a[e][28][8],p,i),r=s(0,1,h,d),t=f(a[e][28][30],a[g][14],r,q);return c(a[e][28][8],t,j)}function
bV(l,k,d,j,i){function
h(n){var
o=b(a[78][29][5],n),h=C(c(m[5],o,l),0)[1],p=[0,s(h-1|0,0,j,i),0],q=[0,c(a[e][28][14],h,a[g][14]),p],r=[0,B(d),q],t=b(a[e][28][26],r),u=a[g][9],v=b(a[e][28][3],d),w=c(a[32][32][1],v,u);return f(a[e][28][30],w,t,k)}return b(a[32][31][1],h)}function
bW(k,j,i,f,d){var
l=s(0,1,f,b(n[7],d)),m=[0,b(a[e][28][22],l),0],o=s(1,0,f,b(n[7],d)),p=[0,b(a[e][28][22],o),0],q=[0,a[g][14],p],r=[0,B(i),q];function
t(f){function
d(i){var
j=b(a[78][29][6],i),d=c(h[17][5],j,0),k=[0,f,[0,b(a[8][11],d)]],l=b(a[8][14],k),m=b(a[g][58],[0,d,0]),n=b(a[g][65],[0,l,0]);return c(a[e][28][4],n,m)}return b(a[32][31][1],d)}var
u=b(a[e][28][3],i),v=[0,c(a[32][32][1],u,t),r],w=[0,b(a[e][28][26],[0,a[g][14],v]),m],x=b(a[g][11],k),y=c(a[e][28][5],x,w);return c(a[e][28][8],y,j)}function
aE(c){var
d=f(a[71][35],bY,bX,c);return b(a[49][5],d)}var
F=[at,function(f){var
c=aE(bZ),d=[0,[0,0,[1,b(a[7][46],c)[1]]],0],e=aE(b0);return[0,[0,0,[1,b(a[7][46],e)[1]]],d]}];function
b1(f){var
h=b(a[78][29][6],f);function
i(e){var
d=aX(F),f=[0,e,1],h=a2===d?F[1]:at===d?b(aF[2],F):F;return c(a[g][87],h,f)}var
d=aX(F),j=c(a[e][28][28],i,h),k=a2===d?F[1]:at===d?b(aF[2],F):F,l=b(a[g][82],k);return c(a[32][32][2],l,j)}var
r=[0,s,bF,B,bH,bJ,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bV,bW,b(a[32][31][1],b1)];H(110,r,"Ground_plugin.Rules");function
b2(e,d){function
f(e,d){var
f=b(a[8][52][1],d),g=b(a[8][52][1],e);return c(n[1][1],g,f)}if(0===e[0]){var
g=e[1],h=g[1],j=e[2],k=g[2];if(0===d[0]){var
i=d[1],l=d[2],o=i[2],p=i[1],q=function(b,a){return b-a|0},r=function(b,a){return b-a|0},s=c(m[3],r,q);return L(c(m[4],s,f),p,h,j,l,k,o)}return 0===h?1:-1}var
t=e[1];return 0===d[0]?0===d[1][1]?-1:1:f(t,d[1])}function
b3(d,b){return d===b?0:d===m[7]?1:b===m[7]?-1:c(a[36][5][1],d,b)}var
b4=[0,function(b,a){var
d=a[2],e=a[1],f=b[2],g=b[1];return q(c(m[3],b2,b3),e,g,d,f)}],_=b(h[20][1],b4);function
aG(F,a,m){var
d=[0,_[1]];function
e(g){var
j=g[3];if(0===j[0]){var
a=j[1];if(typeof
a==="number")var
o=1;else
if(2===a[0])var
w=a[3],k=a[2],v=a[1],i=1,o=0;else
var
o=1;if(o)var
i=0}else{var
e=j[1];if(typeof
e==="number")var
i=0;else
var
w=e[3],k=e[2],v=e[1],i=1}if(i){var
x=g[4],q=[0,1],r=[0,w],C=g[1],s=function(b,a){function
e(f,e){var
a=D(Y[3],F,v,k,f,e);if(a){var
b=a[1];return 0===b[0]?(q[1]=0,d[1]=c(_[4],[0,b,C],d[1]),0):(r[1]=1,0)}return 0}var
f=b[1];function
g(b){var
d=a[2];function
f(a){return e(b,a)}return c(h[17][11],f,d)}c(h[17][11],g,f);var
i=b[2];function
j(b){var
d=a[1];function
f(a){return e(b,a)}return c(h[17][11],f,d)}return c(h[17][11],j,i)},z=m[1],A=function(a){return s(x,a[4])};c(n[6][5],A,z);var
p=m[5],y=p?[0,p[1],0]:0;s(x,[0,y,m[3]]);var
t=q[1],u=t?r[1]:t,E=u?(d[1]=c(_[4],[0,[1,k],g[1]],d[1]),0):u;return E}var
B=b(l[3],b5);return f(S[3],0,0,B)}c(h[17][11],e,a);return b(_[21],d[1])}function
aH(f,b){try{var
g=c(n[13],f,b),h=g[1],a=h[3],l=g[2];if(0===a[0]){var
i=a[1];if(typeof
i==="number")var
e=1;else
if(2===i[0])var
d=1,e=0;else
var
e=1;if(e)var
d=0}else
var
d=typeof
a[1]==="number"?0:1;if(d)var
k=aH(f,l),j=[0,[0,h,k[1]],k[2]];else
var
j=[0,0,b];return j}catch(a){a=u(a);if(a===aj[1])return[0,0,b];throw a}}var
aI=b(a[5][1][6],b6);function
b7(j,d,w,v,i,u){if(w===m[7])var
p=aI;else
var
B=f(a[59][4],j,d,v),C=f(a[55][6],j,d,B),t=c(a[8][35],d,C)[1],D=t?t[1]:aI,p=D;function
x(c){return b(a[8][9],i-c|0)}var
y=c(h[17][48],i,x),o=i,n=0,e=j,l=d,k=0,z=c(a[8][53][5],y,u);for(;;){if(0===o)return[0,l,k,z];var
q=f(a[g][15],n,p,e),r=aY(a[34][15],e,l,0,0,0,0,a[27][44]),s=[0,[0,q],r[2][1]],A=r[1],o=o-1|0,n=[0,q,n],e=c(a[8][51],s,e),l=A,k=[0,s,k];continue}}var
M=[0,aH,aG,function(i,d,o,j){function
k(k){var
p=aG(b(a[78][29][2],k),i,j);function
s(i){if(i[2]===m[7])var
d=i[1],k=function(i,j){function
f(D){if(0===d[0]){var
f=d[1];if(0===f[1]){var
k=f[2],m=b(n[7],j),o=[0,q(r[1],0,1,i,m),0],p=b(a[e][28][21],o),s=b(a[g][88],[0,[0,k,0]]);return c(a[e][28][4],s,p)}var
t=b(l[3],b$);return c(a[e][28][2],0,t)}var
u=d[1],v=[0,b(a[e][28][10],a[g][34]),0],w=b(n[7],j),x=[0,q(r[1],0,1,i,w),0],y=[0,b(a[e][28][21],x),0];function
z(d){var
e=b(a[78][29][6],d),f=c(h[17][5],e,0),i=[0,[0,b(a[8][11],f),0]];return b(a[g][88],i)}var
A=[0,b(a[32][31][1],z),y],B=[0,b(a[e][28][26],[0,a[g][10],A]),v],C=b(a[g][11],u);return c(a[e][28][5],C,B)}return b(a[32][31][1],f)};else
var
k=function(v,j){var
d=i[2],k=i[1];function
m(w){var
i=b(a[78][29][2],w);if(0===k[0]){var
p=k[1],m=p[2],o=p[1],s=[0,o,c(a[8][50],i,m)];if(f(n[9],i,[0,d,[0,s]],j)){var
x=b(l[3],b8);return c(a[e][28][2],0,x)}if(0<o)var
y=function(i){function
e(e){var
n=b(a[78][29][2],e),h=b7(b(a[78][29][5],e),n,d,i,o,m),p=h[2],r=h[1],s=b(a[8][14],[0,i,[0,h[3]]]),j=c(a[8][59],s,p);try{var
y=b(a[78][29][5],e),z=q(a[59][2],0,y,r,j),k=z}catch(a){a=u(a);if(!b(S[20],a))throw a;var
t=b(l[3],b9),k=f(S[6],0,0,t)}var
v=k[1],w=b(a[g][65],[0,j,0]),x=b(a[32][30][1],v);return c(a[32][15],x,w)}return b(a[32][31][1],e)},z=b(a[e][28][3],d),t=c(a[32][32][1],z,y);else
var
E=function(c){var
d=[0,b(a[8][14],[0,c,[0,m]]),0];return b(a[g][65],d)},F=b(a[e][28][3],d),t=c(a[32][32][1],F,E);var
A=c(n[8],[0,d,[0,s]],j),B=b(n[7],A),C=[0,q(r[1],1,0,v,B),0],D=[0,b(a[e][28][21],C),0];return b(a[e][28][26],[0,t,[0,a[g][10],D]])}var
G=k[1];if(f(n[9],i,[0,d,0],j)){var
H=b(l[3],b_);return c(a[e][28][2],0,H)}var
I=[0,b(a[e][28][10],a[g][34]),0],J=c(n[8],[0,d,0],j),K=b(n[7],J),L=[0,q(r[1],1,0,v,K),0],M=[0,b(a[e][28][21],L),0],N=[0,a[g][10],M];function
O(d){function
e(e){var
f=b(a[78][29][6],e),i=c(h[17][5],f,0),j=[0,d,[0,b(a[8][11],i)]],k=[0,b(a[8][14],j),0];return b(a[g][65],k)}return b(a[32][31][1],e)}var
P=b(a[e][28][3],d),Q=[0,c(a[32][32][1],P,O),N],R=[0,b(a[e][28][26],[0,a[g][10],Q]),I],T=b(a[g][11],G);return c(a[e][28][5],T,R)}return b(a[32][31][1],m)};return k(o,j)}var
t=c(h[17][12],s,p),v=b(a[e][28][6],t);return c(a[e][28][8],v,d)}return b(a[32][31][1],k)}];H(g,M,"Ground_plugin.Instances");var
al=[0,function(Z,o){function
d(p){var
d=[0,a[5][22][1]];function
g(e){try{var
f=b(a[92][3],e),g=b(a[7][46],f)[1];d[1]=c(a[5][22][7],g,d[1]);var
h=0;return h}catch(b){b=u(b);if(b===a[7][65])return 0;throw b}}var
h=b(a[92][4],0);c(aJ[11],g,h);var
j=b(a[5][22][12],d[1]),k=c(a[24][1][8],a[24][9],[0,a[5][1][12][2],j]);m[2][1]=k;function
z(B,o){function
d(w){if(t.caml_equal(b(i[12][8],0),ca)){var
_=b(a[78][29][2],w),$=b(a[32][31][9],w),aa=[0,b(a[32][31][7],$),_],ab=b(a[90][3],aa);c(aK[10],0,ab)}try{var
ad=b(a[78][29][2],w),I=c(n[13],ad,o),j=I[2],k=I[1],g=function(c){var
d=b(a[78][29][2],w);return f(n[11],d,B,c)},ae=0,h=function(a){return z(ae,a)},d=z([0,k,B],j),C=k[3];if(0===C[0]){var
s=C[1];if(typeof
s==="number")var
x=b(r[11],k[1]);else
switch(s[0]){case
0:var
af=s[1],ag=g(j),x=D(r[9],af,d,k[1],h,ag);break;case
1:var
ah=s[1],ai=g(j),x=D(r[10],ah,d,k[1],h,ai);break;case
2:var
ak=b(a[78][29][2],w),K=c(M[1],ak,o),N=K[1],al=K[2],O=z(c(v[22],N,B),al);if(m[1][1])if(0<o[8])var
am=g(o),P=q(M[3],N,O,h,am),E=1;else
var
E=0;else
var
E=0;if(!E)var
P=O;var
x=P;break;case
3:var
an=s[1];if(m[1][1])var
ao=g(j),Q=D(r[15],an,d,k[1],h,ao);else
var
Q=d;var
x=Q;break;default:var
p=s[2],ap=s[1];if(typeof
p==="number")var
A=d;else
switch(p[0]){case
3:var
au=p[1];if(0<o[8])if(m[1][1])var
av=g(j),R=D(r[16],au,d,k[1],h,av),F=1;else
var
F=0;else
var
F=0;if(!F)var
R=d;var
A=R;break;case
4:var
aw=p[2],ax=p[1];if(m[1][1])var
ay=g(j),S=L(r[12],ax,aw,d,k[1],h,ay);else
var
S=d;var
A=S;break;case
5:var
az=p[3],aA=p[2],aB=p[1],aC=g(j),A=aY(r[13],aB,aA,az,d,k[1],h,aC);break;default:var
ar=p[2],as=p[1],at=g(j),A=L(r[12],as,ar,d,k[1],h,at)}var
aq=g(j),x=D(r[5],ap,A,k[1],h,aq)}var
J=x}else{var
T=C[1];if(typeof
T==="number")switch(T){case
0:var
aD=g(j),y=f(r[8],d,h,aD);break;case
1:var
aE=g(j),y=f(r[6],d,h,aE);break;case
2:var
aF=g(j),y=f(r[7],d,h,aF);break;case
3:var
y=d;break;default:if(m[1][1])var
aG=b(l[3],cb),U=c(a[e][28][2],0,aG);else
var
U=d;var
aH=g(j),y=f(r[14],U,h,aH)}else{var
aI=b(a[78][29][2],w),V=c(M[1],aI,o),W=V[1],aJ=V[2],X=z(c(v[22],W,B),aJ);if(m[1][1])if(0<o[8])var
aL=g(o),Y=q(M[3],W,X,h,aL),G=1;else
var
G=0;else
var
G=0;if(!G)var
Y=X;var
y=Y}var
J=y}var
H=J}catch(a){a=u(a);if(a!==aj[1])throw a;var
H=Z}var
ac=c(r[4],o[4],o);return c(a[e][28][8],ac,H)}return b(a[32][31][1],d)}var
s=b(a[32][31][2],p),w=b(aJ[1],s);return b(o,function(a){var
b=0;function
c(a){return z(b,a)}return q(r[1],w,1,c,a)})}return b(a[32][31][1],d)}];H(115,al,"Ground_plugin.Ground");b(o[7][1],G);var
T=[0,3];function
cc(a){return a?(T[1]=c(v[5],a[1],0),0):(T[1]=3,0)}var
cf=[0,0,ce,cd,function(a){return[0,T[1]]},cc];c(a[42][2],0,cf);var
$=[0,ac];function
cg(a){return a?($[1]=c(v[5],a[1],0),0):($[1]=0,0)}var
cj=[0,0,ci,ch,function(a){return[0,$[1]]},cg];c(a[42][2],0,cj);var
ck=[0,aL,0],cl=[0,function(c,b){return q(a[117][3],0,0,0,0)}];f(i[6][9],0,aL,cl);var
aM=[31,c(y[9],0,[0,ck,0])],am=c(i[14][1],[0,aM],cm),aN=am[3],aO=am[2],aP=am[1],cn=0,cp=[0,[0,0,function(d){if(d)if(!d[2]){var
e=d[1],f=b(j[4],i[1][1]),g=c(j[8],f,e);return function(f){var
d=b(i[8][3],g),e=b(a[85][2][1],0);return c(aP,b(a[85][1],e),d)}}return b(v[2],co)}],cn];function
cq(b,a){return f(o[8][1],a[1],[0,cr,b],a[2])}c(N[80],cq,cp);var
cs=0,cu=[0,function(c){if(c)if(!c[2])return function(b){return a[aa][4]};return b(v[2],ct)},cs];function
cv(d,b){return c(a[aa][1],[0,cw,d],b)}c(N[80],cv,cu);var
cx=[6,b(o[4][7],i[1][1])],cy=[0,[0,b(j[4],i[1][1])],cx],cC=[0,[0,cB,[0,cA,[0,cz,[0,[1,c(y[9],0,cy)],0]]]],0];function
cD(b,a){return f(o[6][1],[0,cE,b],0,a)}c(N[80],cD,cC);var
cF=0,cI=[0,[0,0,function(a){return a?b(v[2],cG):function(f){var
a=b(aN,0),d=b(l[3],cH),e=c(l[12],d,a);return c(aK[6],0,e)}}],cF];function
cJ(b,a){return f(o[8][1],a[1],[0,cK,b],a[2])}c(N[80],cJ,cI);var
cL=0,cN=[0,function(c){return c?b(v[2],cM):function(b){return a[aa][3]}},cL];function
cO(d,b){return c(a[aa][1],[0,cP,d],b)}c(N[80],cO,cN);function
cR(b,a){return f(o[6][1],[0,cS,b],0,a)}c(N[80],cR,cQ);var
cU=b(l[3],cT),cV=c(a[e][28][2],0,cU);function
U(i,d,h,g){var
f=m[1][1];function
j(b){var
d=b[2],e=b[1];m[1][1]=f;return c(a[32][9],[0,d],e)}function
k(o){m[1][1]=i;var
j=d?d[1]:b(aO,0)[2];function
k(i){function
d(d){var
j=b(n[14],T[1]),k=b(a[78][29][2],d),l=b(a[78][29][5],d),m=q(n[15],l,k,h,j)[1],o=b(a[78][29][2],d),p=b(a[78][29][5],d),f=q(n[16],p,o,g,m),r=f[2],s=b(i,f[1]),t=b(a[32][30][1],r);return c(a[e][28][4],t,s)}return b(a[32][31][1],d)}var
l=c(al[1],j,k);m[1][1]=f;return l}var
l=b(a[32][31][1],k);return c(a[32][17],l,j)}function
aQ(e,d,c){return b(i[2][23],a[47][17])}function
aR(g,f,e){function
c(c){return b(a[90][20],c[2])}var
d=b(a[a1][3],c);return b(i[2][23],d)}function
aS(e,d,c){return b(i[2][23],a[90][20])}function
cW(a){return b(l[22],cX)}var
aT=q(c0[2],cZ,cY,0,cW),w=b(j[2],c1);function
c2(d,e){var
f=b(j[17],a[70][26]),g=b(j[4],f),h=c(j[7],g,e),k=c(i[8][10],d,h),l=b(j[17],a[70][26]),m=b(j[5],l);return[0,d,c(j[8],m,k)]}c(o[2][3],w,c2);function
c3(e,d){var
f=b(j[17],a[70][26]),g=b(j[5],f),h=c(j[7],g,d),k=c(i[5][2],e,h),l=b(j[17],a[70][26]),m=b(j[5],l);return c(j[8],m,k)}c(o[2][4],w,c3);function
c4(e,d){var
f=b(j[17],a[70][26]),g=b(j[5],f),h=c(j[7],g,d);return c(i[12][9],e,h)}c(a[35][3],w,c4);var
c5=b(j[17],a[70][26]),c6=b(j[6],c5),c7=[0,b(a[35][5],c6)];c(a[35][4],w,c7);var
c8=b(j[4],w),an=f(o[4][4],o[4][5],c9,c8),c_=0,c$=0;function
da(a,c,b){return[0,a,0]}var
db=[6,o[4][2][15]],dd=[0,[0,[0,[0,0,[0,b(o[5][1],dc)]],db],da],c$];function
de(b,e,a,d,c){return[0,a,b]}var
dg=[0,b(o[5][1],df)],dh=[2,[6,o[4][2][15]],dg],dj=[0,b(o[5][1],di)],dk=[6,o[4][2][15]],dm=[0,[0,[0,[0,[0,[0,0,[0,b(o[5][1],dl)]],dk],dj],dh],de],dd];function
dn(d,b,a,f,e){c(aT,0,0);return[0,a,[0,b,d]]}var
dp=[3,[6,o[4][2][15]]],dq=[6,o[4][2][15]],dr=[6,o[4][2][15]],dt=[0,[0,[0,[0,[0,[0,0,[0,b(o[5][1],ds)]],dr],dq],dp],dn],dm],du=[0,0,[0,[0,0,0,[0,[0,0,function(a){return 0}],dt]],c_]];f(o[4][6],an,0,du);q(i[2][1],w,aQ,aR,aS);var
dv=[0,an,0];function
dw(a){var
d=a[2],e=b(j[4],w);return[0,c(j[7],e,d)]}f(i[9][5],dx,dw,dv);var
dy=0,dA=[0,function(d){if(d){var
e=d[2];if(e){var
f=e[2];if(f)if(!f[2]){var
g=f[1],h=e[1],k=d[1],l=b(j[18],i[1][1]),m=b(j[6],l),n=c(i[12][2][7],m,k),o=b(j[6],w),p=c(i[12][2][7],o,h),q=b(j[17],a[70][25]),r=b(j[6],q),s=c(i[12][2][7],r,g);return function(a){var
d=b(i[12][23],a);return U(1,c(Q[15],d,n),p,s)}}}}return b(v[2],dz)},dy],dC=[0,function(d){if(d){var
e=d[2];if(e)if(!e[2]){var
f=e[1],g=d[1],h=b(j[18],i[1][1]),k=b(j[6],h),l=c(i[12][2][7],k,g),m=b(j[17],a[70][25]),n=b(j[6],m),o=c(i[12][2][7],n,f);return function(a){var
d=b(i[12][23],a);return U(1,c(Q[15],d,l),0,o)}}}return b(v[2],dB)},dA],dE=[0,function(a){if(a){var
d=a[2];if(d)if(!d[2]){var
e=d[1],f=a[1],g=b(j[18],i[1][1]),h=b(j[6],g),k=c(i[12][2][7],h,f),l=b(j[6],w),m=c(i[12][2][7],l,e);return function(a){var
d=b(i[12][23],a);return U(1,c(Q[15],d,k),m,0)}}}return b(v[2],dD)},dC],dF=b(aU[12],dE);f(i[6][9],0,[0,G,dG],dF);function
dH(F){var
m=[0,b(a[5][1][7],dI)],d=a[70][25],k=0,l=0;if(0===d[0]){var
n=[0,dK,[0,[1,c(y[9],0,[0,[0,[5,[0,d[1]]]],m])],l]],o=[0,b(a[5][1][7],dL)];if(0===w[0]){var
p=[0,[1,c(y[9],0,[0,[5,[0,w[1]]],o])],n],q=[0,b(a[5][1][7],dN)],e=i[1][1];if(0===e[0]){var
r=[0,[0,dP,[0,[1,c(y[9],0,[0,[4,[5,[0,e[1]]]],q])],p]],k],t=[0,b(a[5][1][7],dQ)],g=a[70][25],s=0;if(0===g[0]){var
u=[0,dS,[0,[1,c(y[9],0,[0,[0,[5,[0,g[1]]]],t])],s]],v=[0,b(a[5][1][7],dT)],h=i[1][1];if(0===h[0]){var
x=[0,[0,dV,[0,[1,c(y[9],0,[0,[4,[5,[0,h[1]]]],v])],u]],r],z=0,B=[0,b(a[5][1][7],dW)];if(0===w[0]){var
C=[0,[1,c(y[9],0,[0,[5,[0,w[1]]],B])],z],D=[0,b(a[5][1][7],dY)],j=i[1][1];if(0===j[0]){var
E=[0,[0,d0,[0,[1,c(y[9],0,[0,[4,[5,[0,j[1]]]],D])],C]],x];return f(i[9][4],[0,G,d1],0,E)}throw[0,A,dZ]}throw[0,A,dX]}throw[0,A,dU]}throw[0,A,dR]}throw[0,A,dO]}throw[0,A,dM]}throw[0,A,dJ]}c(o[7][3],dH,G);var
d2=0,d4=[0,function(a){if(a)if(!a[2]){var
d=a[1],e=b(j[18],i[1][1]),f=b(j[6],e),g=c(i[12][2][7],f,d);return function(a){var
d=b(i[12][23],a);return U(0,c(Q[15],d,g),0,0)}}return b(v[2],d3)},d2],d5=b(aU[12],d4);f(i[6][9],0,[0,G,d6],d5);function
d7(k){var
h=[0,b(a[5][1][7],d8)],d=i[1][1],e=0,g=0;if(0===d[0]){var
j=[0,[0,d_,[0,[1,c(y[9],0,[0,[4,[5,[0,d[1]]]],h])],g]],e];return f(i[9][4],[0,G,d$],0,j)}throw[0,A,d9]}c(o[7][3],d7,G);var
aV=[0,G,T,$,aM,aP,aO,aN,cV,U,aQ,aR,aS,aT,w,an];H(122,aV,"Ground_plugin.G_ground");H(123,[0,m,Y,n,r,M,al,aV],"Ground_plugin");return});
