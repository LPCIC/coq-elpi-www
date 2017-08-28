(function(bx){"use strict";var
W=112,n="plugins/quote/g_quote.ml4",ap="in",w=250,al="$k",ak="[",m=246,ao="$c",aj=111,K="Extension: cannot occur",p="quote",an="]",ai="$lc",o="Quote",J="$f",ah="plugins/quote/quote.ml",am="using",l=bx.jsoo_runtime,ag=l.caml_check_bound,d=l.caml_new_string,v=l.caml_obj_tag,V=l.caml_register_global,T=l.caml_wrap_exception;function
b(a,b){return a.length==1?a(b):l.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):l.caml_call_gen(a,[b,c])}function
g(a,b,c,d){return a.length==3?a(b,c,d):l.caml_call_gen(a,[b,c,d])}function
U(a,b,c,d,e){return a.length==4?a(b,c,d,e):l.caml_call_gen(a,[b,c,d,e])}var
h=l.caml_get_global_data(),E=d("quote_plugin"),a=h.API,e=h.Util,j=h.Assert_failure,X=h.Pp,Y=h.CErrors,t=h.CamlinternalLazy,aa=h.Option,s=h.Pervasives,f=h.Ltac_plugin,i=h.Loc,k=h.Genarg,ae=h.Grammar_API,aM=[0,d(ah),504,15],aL=[0,d(ah),482,13],aJ=d("invalid inversion scheme for quote."),aH=[0,d("Coq"),[0,d(p),[0,d(o),0]]],aF=d("M"),aE=d("Quote: not a simple fixpoint"),aC=d("End_idx"),aD=[0,d(o),0],aA=d("Left_idx"),aB=[0,d(o),0],ay=d("Right_idx"),az=[0,d(o),0],aw=d("varmap_find"),ax=[0,d(o),0],au=d("Node_vm"),av=[0,d(o),0],as=d("Empty_vm"),at=[0,d(o),0],aq=d(p),ar=d(o),bu=[0,d(n),1,0],br=[0,d(n),1,0],bo=[0,d(n),1,0],bk=[0,d(n),1,0],bh=[0,d(n),1,0],be=[0,d(n),1,0],bb=[0,d(n),1,0],a_=[0,d(n),1,0],a6=[0,d(n),1,0],a3=[0,d(n),1,0],a2=d(al),a4=[0,d(am)],a5=d(ao),a7=[0,d(ap)],a8=[0,d(an)],a9=d(ai),a$=[0,d(ak)],ba=d(J),bc=[0,d(p)],bd=d(al),bf=[0,d(am)],bg=d(ao),bi=[0,d(ap)],bj=d(J),bl=[0,d(p)],bm=[0,[0,d(an)],0],bn=d(ai),bp=[0,d(ak)],bq=d(J),bs=[0,d(p)],bt=d(J),bv=[0,d(p)],bw=d(p),aW=d(K),aU=d(K),aS=d(K),aQ=d(K),aN=d("cont"),aO=d("x"),a0=d(p),aI=h.Not_found,aG=h.Hashtbl,aY=h.Array;function
q(d,c){var
e=g(a[71][35],ar,[0,aq,d],c),f=b(a[49][5],e);return b(a[8][3],f)}var
x=[m,function(a){return q(at,as)}],y=[m,function(a){return q(av,au)}],z=[m,function(a){return q(ax,aw)}],A=[m,function(a){return q(az,ay)}],B=[m,function(a){return q(aB,aA)}],C=[m,function(a){return q(aD,aC)}],F=b(e[20][1],[0,a[7][75]]);function
r(c){var
a=b(X[3],aE);return g(Y[6],0,0,a)}function
L(b,d){var
e=c(a[84][10],b,d);return c(a[8][4],b,e)}function
Z(d){var
c=b(a[5][1][8],d);return l.caml_int_of_string(g(e[15][4],c,1,l.caml_ml_string_length(c)-1|0))}function
_(d){var
e=b(s[20],d),f=c(s[16],aF,e);return b(a[5][1][6],f)}function
G(k,j,i,d){var
f=c(a[8][4],k,j);if(11===f[0]){var
g=f[1],h=g[1];if(0===h[2]){var
l=g[2],m=h[1],n=function(c){return b(a[8][16],d-c|0)},o=c(e[19][2],d,n),p=[0,b(a[8][17],[0,[0,[0,m,0],i+1|0],l]),o];return b(a[8][14],p)}}return r(0)}function
$(j,d,f,m){function
k(n){var
h=n;for(;;){var
f=c(a[8][4],d,h);switch(f[0]){case
5:var
h=f[1];continue;case
9:var
l=f[2],i=f[1];if(c(a[8][26],d,i))if(c(a[8][34],d,i)===m){var
p=b(e[19][38],l);return[11,[0,_(c(a[8][34],d,p))]]}var
q=c(e[19][15],k,l),r=c(a[8][50],d,i);return[4,g(a[89][3],j,d,r),q];default:var
o=c(a[8][50],d,h);return g(a[89][3],j,d,o)}}}return k(f)}function
M(E,D,o){var
p=b(a[32][31][8],o),d=b(a[78][29][2],o);try{var
X=c(a[8][38],d,E),h=X}catch(b){b=T(b);if(b!==a[7][65])throw b;var
h=r(0)}var
H=h[1],I=[0,H,c(a[8][2][2],d,h[2])],J=b(a[50][1],0),K=c(a[13][20],J,I),q=L(d,b(a[8][3],K));if(14===q[0]){var
s=q[1],u=s[1];if(1===u[1].length-1)if(0===u[2]){var
i=s[2];if(1===i[1].length-1)if(1===i[2].length-1){var
x=i[3];if(1===x.length-1){var
y=c(a[8][44],d,x[1]),f=y[1],M=y[2],N=b(e[17][1],f),O=g(a[55][11],0,p,d),j=L(d,M);if(13===j[0]){var
A=j[2],k=[0,0],l=[0,0],n=[0,0],P=j[4],Q=function(i,y){var
q=c(a[8][44],d,y),g=q[2],h=b(e[17][1],q[1]);if(c(a[8][26],d,g))if(1===c(a[8][34],d,g)){n[1]=[0,G(d,b(e[17][3],f)[2],i,h)];return 0}var
r=c(a[8][46],d,g),s=r[2],A=r[1];if(s){var
u=s[2];if(u){var
j=u[2];if(j){var
o=j[2];if(o)if(!o[2]){var
D=o[1];if(c(a[8][26],d,j[1]))if(c(a[8][26],d,D)){var
x=v(z),E=w===x?z[1]:m===x?b(t[2],z):z;if(c(O,A,E)){l[1]=[0,G(d,b(e[17][3],f)[2],i,h)];return 0}}}}}}var
B=k[1],C=$(p,d,g,(N+h|0)+1|0);k[1]=[0,[0,G(d,b(e[17][3],f)[2],i,h),C],B];return 0};c(e[19][14],Q,P);var
B=b(aa[3],n[1]),R=B?b(aa[3],l[1]):B;if(R)r(0);var
C=c(a[8][4],d,A),S=7===C[0]?b(a[84][7],C[3]):A,U=n[1],V=g(e[17][16],F[4],D,F[1]),W=l[1];return[0,b(e[17][6],k[1]),W,S,V,U]}return r(0)}}}}return r(0)}function
H(g,f,k){var
h=k;for(;;){var
l=b(a[8][52][1],h),i=c(F[3],l,f);if(i)return i;var
d=c(a[8][4],g,h);switch(d[0]){case
5:var
h=d[1];continue;case
9:var
m=d[2],j=H(g,f,d[1]);if(j){var
n=function(a){return H(g,f,a)};return c(e[19][30],n,m)}return j;default:return 0}}}function
ab(e,d){var
h=e.length-1,c=v(y),l=h>>>1|0,i=w===c?y[1]:m===c?b(t[2],y):y,j=v(x),k=[0,d],n=w===j?x[1]:m===j?b(t[2],x):x,f=b(a[8][14],[0,n,k]);function
g(c){if(h<c)return f;if(l<c){var
j=c-1|0,m=[0,i,[0,d,ag(e,j)[j+1],f,f]];return b(a[8][14],m)}var
n=g((2*c|0)+1|0),k=c-1|0,o=g(2*c|0),p=[0,i,[0,d,ag(e,k)[k+1],o,n]];return b(a[8][14],p)}return g(1)}function
ac(f){function
c(a){return 1===a?0:[0,1===(a%2|0)?1:0,c(a>>>1|0)]}var
d=v(C),h=w===d?C[1]:m===d?b(t[2],C):C,i=c(f),j=b(e[17][6],i);function
k(g,f){var
h=[0,f];if(g)var
c=v(A),i=w===c?A[1]:m===c?b(t[2],A):A,d=i;else
var
e=v(B),j=w===e?B[1]:m===e?b(t[2],B):B,d=j;return b(a[8][14],[0,d,h])}return g(e[17][16],k,j,h)}function
N(d,k,i){var
f=k;for(;;){var
j=g(a[78][21],d,f,i);if(j)return j;var
l=b(a[78][10],d),h=c(a[8][4],l,f);switch(h[0]){case
5:var
f=h[1];continue;case
9:var
m=h[2],n=function(a){return N(d,a,i)};return c(e[19][28],n,m);default:return 0}}}function
ad(e,c){var
i=b(a[78][10],e);function
f(b,c){if(c){var
h=c[2],d=c[1];return g(a[8][61],i,b,d)?c:N(e,b,d)?[0,b,[0,d,h]]:[0,d,f(b,h)]}return[0,b,0]}if(c){var
d=c[1];return f(d,ad(e,c[2]))}return 0}var
I=b(aG[18],[0,a[7][60],a[7][61]]);function
D(f,d){function
g(c){var
d=c[1];return[0,d,b(a[8][52][1],c[2])]}var
h=c(e[17][12],g,f),i=b(a[8][52][1],d),j=c(a[84][33],h,i);return b(a[8][3],j)}function
O(s,j,f,d){b(a[71][3],aH);var
k=b(I[1],17),i=[0,0],l=[0,1];function
m(d){function
h(t){var
h=t;for(;;){if(h){var
n=h[1],u=h[2],v=n[2],w=n[1];try{var
x=U(a[61][6],s,j,v,d),y=b(a[5][1][11][17],x),z=function(a){var
b=a[1],c=m(a[2]);return[0,Z(b),c]},A=D(c(e[17][12],z,y),w);return A}catch(b){b=T(b);if(b===a[61][4]){var
h=u;continue}throw b}}var
o=f[2];if(o){var
p=f[5],B=o[1];if(p){var
C=p[1];if(H(j,f[4],d))return D([0,[0,1,d],0],C)}try{var
F=b(a[8][52][1],d),G=c(I[7],k,F);return G}catch(c){c=T(c);if(c===aI){var
q=D([0,[0,1,ac(l[1])],0],B);l[1]++;i[1]=[0,d,i[1]];var
E=b(a[8][52][1],d);g(I[5],k,E,q);return q}throw c}}var
r=f[5];if(r)return D([0,[0,1,d],0],r[1]);var
J=b(X[3],aJ);return g(Y[3],0,0,J)}}return h(f[1])}var
h=c(e[17][12],m,d),n=f[3],o=b(e[17][6],i[1]);return[0,h,ab(b(e[19][12],o),n)]}function
P(d){function
f(d,g){if(d){var
h=d[2],i=d[1],j=function(a){return f(h,[0,a,g])},k=b(a[W][28][3],i);return c(a[32][32][1],k,j)}var
l=b(e[17][6],g);return b(a[32][10],l)}return f(d,0)}function
aK(h,f){function
d(d){var
i=c(a[78][29][11],h,d);function
k(b){return c(a[78][29][11],b,d)}var
l=c(e[17][12],k,f);function
m(f){function
d(n){function
d(d){var
o=b(a[32][31][8],d),i=b(a[78][29][2],d),p=b(a[8][50],i),k=M(f,c(e[17][12],p,n),d),l=O(o,i,k,[0,b(a[32][31][5],d),0]),h=l[1];if(h)if(!h[2]){var
m=h[1],q=l[2];if(k[2]){var
r=b(a[8][14],[0,f,[0,q,m]]);return g(a[aj][12],0,r,2)}var
s=b(a[8][14],[0,f,[0,m]]);return g(a[aj][12],0,s,2)}throw[0,j,aL]}return b(a[32][31][3],d)}var
h=P(l);return c(a[32][32][1],h,d)}var
n=b(a[W][28][3],i);return c(a[32][32][1],n,m)}return b(a[32][31][1],d)}var
u=[0,q,x,y,z,A,B,C,F,r,L,Z,_,G,$,M,H,ab,ac,N,ad,I,D,O,P,aK,function(h,n,g,f){function
d(d){var
i=c(a[78][29][11],g,d);function
k(b){return c(a[78][29][11],b,d)}var
l=c(e[17][12],k,f);function
m(d){function
f(o){function
f(f){var
p=b(a[32][31][8],f),i=b(a[78][29][2],f),q=b(a[8][50],i),k=M(d,c(e[17][12],q,o),f),l=O(p,i,k,[0,n,0]),g=l[1];if(g)if(!g[2]){var
m=g[1],r=l[2];return k[2]?b(h,b(a[8][14],[0,d,[0,r,m]])):b(h,b(a[8][14],[0,d,[0,m]]))}throw[0,j,aM]}return b(a[32][31][3],f)}var
g=P(l);return c(a[32][32][1],g,f)}var
o=b(a[W][28][3],i);return c(a[32][32][1],o,m)}return b(a[32][31][1],d)}];V(71,u,"Quote_plugin.Quote");b(ae[7][1],E);var
Q=b(a[5][1][6],aN),R=b(a[5][1][6],aO);function
S(e,d){var
h=b(f[12][2][1],d),j=[0,[2,[1,c(i[9],0,R)]],0],k=[0,[1,c(i[9],0,Q)],j],l=[3,c(i[9],0,k)],m=a[35][2][1],n=c(a[5][1][11][5],R,h),o=[0,g(a[5][1][11][4],Q,e,n),m],p=[29,c(i[9],0,l)];return c(f[12][22],o,p)}var
aP=0,aR=[0,function(d){if(d){var
e=d[2];if(e){var
g=e[2];if(g){var
h=g[2];if(h)if(!h[2]){var
i=h[1],j=g[1],l=e[1],m=d[1],n=b(k[6],a[70][9]),o=c(f[12][2][7],n,m),p=b(k[17],a[70][9]),q=b(k[6],p),r=c(f[12][2][7],q,l),t=b(k[6],a[70][11]),v=c(f[12][2][7],t,j),w=b(k[6],f[1][1]),x=c(f[12][2][7],w,i);return function(b){function
a(a){return S(x,a)}return U(u[26],a,v,o,r)}}}}}return b(s[2],aQ)},aP],aT=[0,function(d){if(d){var
e=d[2];if(e){var
g=e[2];if(g)if(!g[2]){var
h=g[1],i=e[1],j=d[1],l=b(k[6],a[70][9]),m=c(f[12][2][7],l,j),n=b(k[6],a[70][11]),o=c(f[12][2][7],n,i),p=b(k[6],f[1][1]),q=c(f[12][2][7],p,h);return function(c){var
a=0;function
b(a){return S(q,a)}return U(u[26],b,o,m,a)}}}}return b(s[2],aS)},aR],aV=[0,function(d){if(d){var
e=d[2];if(e)if(!e[2]){var
g=e[1],h=d[1],i=b(k[6],a[70][9]),j=c(f[12][2][7],i,h),l=b(k[17],a[70][9]),m=b(k[6],l),n=c(f[12][2][7],m,g);return function(a){return c(u[25],j,n)}}}return b(s[2],aU)},aT],aX=[0,function(d){if(d)if(!d[2]){var
e=d[1],g=b(k[6],a[70][9]),h=c(f[12][2][7],g,e);return function(a){return c(u[25],h,0)}}return b(s[2],aW)},aV],aZ=b(aY[12],aX);g(f[6][9],0,[0,E,a0],aZ);function
a1(Q){var
t=[0,b(a[5][1][7],a2)],d=f[1][1],r=0,s=0;if(0===d[0]){var
u=[0,a4,[0,[1,c(i[9],0,[0,[5,[0,d[1]]],t])],s]],v=[0,b(a[5][1][7],a5)],e=a[70][11];if(0===e[0]){var
w=[0,a8,[0,a7,[0,[1,c(i[9],0,[0,[5,[0,e[1]]],v])],u]]],x=[0,b(a[5][1][7],a9)],h=a[70][9];if(0===h[0]){var
y=[0,a$,[0,[1,c(i[9],0,[0,[0,[5,[0,h[1]]]],x])],w]],z=[0,b(a[5][1][7],ba)],k=a[70][9];if(0===k[0]){var
A=[0,[0,bc,[0,[1,c(i[9],0,[0,[5,[0,k[1]]],z])],y]],r],C=[0,b(a[5][1][7],bd)],l=f[1][1],B=0;if(0===l[0]){var
D=[0,bf,[0,[1,c(i[9],0,[0,[5,[0,l[1]]],C])],B]],F=[0,b(a[5][1][7],bg)],m=a[70][11];if(0===m[0]){var
G=[0,bi,[0,[1,c(i[9],0,[0,[5,[0,m[1]]],F])],D]],H=[0,b(a[5][1][7],bj)],n=a[70][9];if(0===n[0]){var
I=[0,[0,bl,[0,[1,c(i[9],0,[0,[5,[0,n[1]]],H])],G]],A],J=[0,b(a[5][1][7],bn)],o=a[70][9];if(0===o[0]){var
K=[0,bp,[0,[1,c(i[9],0,[0,[0,[5,[0,o[1]]]],J])],bm]],L=[0,b(a[5][1][7],bq)],p=a[70][9];if(0===p[0]){var
M=[0,[0,bs,[0,[1,c(i[9],0,[0,[5,[0,p[1]]],L])],K]],I],O=[0,b(a[5][1][7],bt)],q=a[70][9],N=0;if(0===q[0]){var
P=[0,[0,bv,[0,[1,c(i[9],0,[0,[5,[0,q[1]]],O])],N]],M];return g(f[9][4],[0,E,bw],0,P)}throw[0,j,bu]}throw[0,j,br]}throw[0,j,bo]}throw[0,j,bk]}throw[0,j,bh]}throw[0,j,be]}throw[0,j,bb]}throw[0,j,a_]}throw[0,j,a6]}throw[0,j,a3]}c(ae[7][3],a1,E);var
af=[0,E,Q,R,S];V(77,af,"Quote_plugin.G_quote");V(78,[0,u,af],"Quote_plugin");return});
