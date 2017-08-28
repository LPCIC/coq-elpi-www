(function(eV){"use strict";var
af="*",bh="term computed",bq="plugins/nsatz/polynom.ml",bg="+",bf="@[%s@]",q=250,aM="(",J="setoid_ring",bk="+ ",bp="Init",be="...",i=246,bo="h",aL=" ",ag="1",aK="nsatz_compute",bd="print_pol dans dansideal",bn=")*",ae="plugins/nsatz/nsatz.ml",bj="c",B="",ao="^",I="Ring_polynom",H="0",bi="$lt",bm=248,bl="u",L="\n",v="CC",r=eV.jsoo_runtime,f=r.caml_check_bound,aI=r.caml_equal,bb=r.caml_fresh_oo_id,aH=r.caml_int_compare,bc=r.caml_int_of_string,eU=r.caml_list_of_js_array,x=r.caml_make_vect,b=r.caml_new_string,p=r.caml_obj_tag,R=r.caml_register_global,ac=r.caml_string_equal,ad=r.caml_string_notequal,ba=r.caml_trampoline,aG=r.caml_trampoline_return,z=r.caml_wrap_exception;function
c(a,b){return a.length==1?a(b):r.caml_call_gen(a,[b])}function
a(a,b,c){return a.length==2?a(b,c):r.caml_call_gen(a,[b,c])}function
k(a,b,c,d){return a.length==3?a(b,c,d):r.caml_call_gen(a,[b,c,d])}function
aJ(a,b,c,d,e){return a.length==4?a(b,c,d,e):r.caml_call_gen(a,[b,c,d,e])}var
m=r.caml_get_global_data(),ax=[0,0,0],C=[0,0],N=[0,1],U=[0,2],aB=[0,b(bp),[0,b("Datatypes"),0]],E=[0,b("Numbers"),[0,b("BinNums"),0]],ab=b("nsatz_plugin"),T=m.CErrors,aq=m.Array,g=m.List,d=m.Pervasives,S=m.Flags,ah=m.Pp,aN=m.Feedback,ap=m.Format,e=m.Util,K=m.Assert_failure,ar=m.Failure,aP=m.Char,D=m.Hashtbl,aw=m.CList,M=m.Printf,aV=m.Heap,ak=m.Not_found,av=m.String,l=m.Num,o=m.CamlinternalLazy,n=m.API,a9=m.Unix,y=m.Big_int,ay=m.Ratio,aF=m.Ltac_plugin,bx=b(L),bu=[0,[18,[1,[0,0,b(B)]],[2,0,[12,10,[17,0,0]]]],b("@[%s\n@]")],bs=[0,[18,[1,[0,0,b(B)]],[2,0,[17,0,0]]],b(bf)],bF=[0,b(bq),363,43],b4=b(be),bH=b(")"),bI=b(aM),bJ=b(B),bK=b(B),bL=b(H),b2=b(be),b3=b(bg),bN=b(B),bO=b(H),bP=b(ag),bR=b(bn),bS=b(aM),bT=b(af),bU=b(H),bV=b(ag),bW=b(ao),bX=b(ao),bY=b(bn),bZ=b(aM),b0=b(ao),b1=b(af),bQ=b(bg),bM=b(H),b9=b("div_pol1"),b_=[0,b(bq),475,9],b$=b(L),ca=b("x:"),cb=b(L),cc=b("r:"),cd=b(L),ce=b("q:"),cf=b(L),cg=b("p:"),ch=b("div_pol:\n"),b7=b(L),b6=b("\n{ "),b8=b("}"),b5=[0,[18,[1,[0,0,b(B)]],[2,0,[17,0,0]]],b(bf)],bG=b(bl),bE=b("non"),bC=[0,0],bD=[0,1],c7=b(L),c6=b(B),c8=b("lp:\n"),c5=b("p: "),c4=b("homogeneous polynomials"),c9=b("computed"),c1=b("new polynomial: "),c0=b(bj),c3=b(bo),c2=b(H),cZ=b("computation of the Groebner basis"),cY=b("coefficient: "),cX=b("verif sum: "),cW=b("r: "),cT=b("remainder: "),cU=b("polynomial reduced to 0"),cV=b("r ok"),cR=[0,[12,91,[4,3,0,0,[12,44,[4,3,0,0,[12,93,0]]]]],b("[%i,%i]")],cQ=[0,0,0],cO=b(" terms"),cP=b(" + "),cN=b(bd),cM=b(bd),cx=b(H),cy=b(ag),cz=b(ao),cs=b(af),ct=b(af),cu=b(af),cv=b(ag),cw=b(B),cA=b("-1"),cB=b(H),cC=b(ag),cF=b(bk),cG=b(B),cH=b(aL),cI=b("-"),cD=b("- "),cE=b(bk),cJ=b(H),cK=b(B),cL=b(aL),cr=b(aL),cp=b(" i="),cq=b("lv= "),cn=b("]"),co=b("["),cl=[0,0],cm=[0,1],cS=b("Ideal.Make(P).NotInIdealUpdate"),ci=b("Ideal.NotInIdeal"),ea=[0,b(ae),247,9],eH=b("nsatz cannot solve this problem"),eE=b("eq_refl"),eF=[0,b(bp),[0,b("Logic"),0]],eG=b(v),eC=b(bh),ep=[0,[11,b("number of parameters: "),[4,3,0,0,0]],b("number of parameters: %i")],em=[0,[12,120,[4,3,0,0,0]],b("x%i")],el=b("nsatz: bad parameter"),et=b("computation without sugar"),eu=b("computation with sugar"),ev=b("ordre lexico computation without sugar"),ew=b("ordre lexico computation with sugar"),ex=b("computation without sugar, division by pairs"),ey=b("computation with sugar, division by pairs"),ez=b("ordre lexico computation without sugar, division by pairs"),eA=b("ordre lexico computation with sugar, division by pairs"),en=eU([b("a"),b("b"),b(bj),b("d"),b("e"),b("f"),b("g"),b(bo),b("i"),b("j"),b("k"),b("l"),b("m"),b("n"),b("o"),b("p"),b("q"),b("r"),b("s"),b("t"),b(bl),b("v"),b("w"),b("x"),b("y"),b("z")]),eo=b("cert ok"),eq=b(bh),er=[0,b(ae),488,11],es=[0,b(ae),476,14],ek=[0,b(ae),505,8],ej=[0,b(ae),443,11],ei=[0,0,0],eh=[0,[11,b("time: "),[18,[1,[0,0,b(B)]],[8,0,[0,1,10],[0,3],[17,0,[12,115,0]]]]],b("time: @[%10.3f@]s")],eg=[0,[11,b("useful spolynomials: "),[4,3,0,0,[12,32,0]]],b("useful spolynomials: %i ")],ef=[0,[11,b("useless spolynomials: "),[4,3,0,0,0]],b("useless spolynomials: %i")],ec=[0,0,0],ed=[0,0,0],ee=b(H),d$=[0,0],d8=b("Npos"),d9=b(v),d6=b("N0"),d7=b(v),d4=b("xH"),d5=b(v),d2=b("xO"),d3=b(v),dZ=b("xI"),d0=b(v),dW=b("Zneg"),dX=b(v),dU=b("Zpos"),dV=b(v),dS=b("Z0"),dT=b(v),dQ=b("Z"),dR=b(v),dO=b("cons"),dP=b(v),dM=b("nil"),dN=b(v),dK=b("list"),dL=b(v),dH=b("PEpow"),dI=[0,b(J),[0,b(I),0]],dJ=b(v),dE=b("PEopp"),dF=[0,b(J),[0,b(I),0]],dG=b(v),dB=b("PEmul"),dC=[0,b(J),[0,b(I),0]],dD=b(v),dy=b("PEsub"),dz=[0,b(J),[0,b(I),0]],dA=b(v),dv=b("PEadd"),dw=[0,b(J),[0,b(I),0]],dx=b(v),ds=b("PEX"),dt=[0,b(J),[0,b(I),0]],du=b(v),dp=b("PEc"),dq=[0,b(J),[0,b(I),0]],dr=b(v),dl=b("PExpr"),dm=[0,b(J),[0,b(I),0]],dn=b(v),eP=b("Extension: cannot occur"),eK=b(aK),eM=b(bi),eN=b(aK),eQ=b(bi),eT=b(aK),eL=m.Loc,eI=m.Grammar_API;function
br(b){return S[24][1]?(a(ap[97],bs,b),c(d[46],d[24])):0}function
bt(b){return S[24][1]?(a(ap[97],bu,b),c(d[46],d[24])):0}function
bv(a){return 0}function
bw(b){if(S[24][1]){var
e=a(d[16],b,bx);c(d[27],e);return c(d[46],d[24])}return 0}function
by(d){var
b=S[24][1];if(b){var
e=c(ah[3],d);return a(aN[10],0,e)}return b}function
bz(d){var
b=S[24][1];if(b){var
e=c(d,0),f=c(ah[3],e);return a(aN[10],0,f)}return b}function
aO(e,d,c){var
b=c;for(;;){if(b){var
f=b[2];if(a(e,d,b[1]))return 1;var
b=f;continue}return 0}}function
bA(e,d){var
b=[0,0];function
f(a){var
c=1-aO(e,a,b[1]),d=c?(b[1]=[0,a,b[1]],0):c;return d}a(g[11],f,d);return c(g[6],b[1])}function
bB(k,f,o){function
p(a){return 1-c(f,a)}var
e=0,b=a(g[30],p,o);for(;;){if(b){var
h=b[2],i=b[1],j=[0,0],l=[0,0],q=function(h,d,i){return function(e){try{var
b=a(k,h,e),g=c(f,b)?(i[1]=1,0):(d[1]=[0,b,d[1]],0);return g}catch(a){a=z(a);if(c(T[20],a))return 0;throw a}}}(i,j,l);a(g[11],q,e);if(l[1]){var
b=h;continue}if(0===j[1]){var
m=[0,h],n=[0,0],r=function(j,g,h){return function(b){try{var
d=a(k,b,j),e=1-c(f,d),i=e?(g[1]=[0,d,g[1]],0):e;return i}catch(a){a=z(a);if(c(T[20],a)){h[1]=[0,b,h[1]];return 0}throw a}}}(i,m,n);a(g[11],r,e);var
s=m[1],e=c(g[6],[0,i,n[1]]),b=s;continue}var
b=a(d[22],j[1],h);continue}return e}}var
j=[0,br,bt,bv,bw,bz,by,aO,bA,bB,function(k,j,d,b,e){var
g=x(b.length-1,[0,d,0]);function
h(i,h){var
b=[0,h],d=[0,0];if(1-c(j,h)){var
l=function(f,e){try{for(;;){var
g=a(k,b[1],e);d[1]=[0,f,d[1]];b[1]=g;continue}}catch(a){a=z(a);if(c(T[20],a))return 0;throw a}};a(aq[14],l,e)}var
m=[0,b[1],d[1]];return f(g,i)[i+1]=m}a(aq[14],h,b);return[0,e,g]}];R(200,j,"Nsatz_plugin.Utile");var
as=[0,function(g){function
H(a){return c(g[14],[0,a])}var
b=H(0),U=H(1);function
I(a){return[0,c(g[14],a)]}var
l=I(bC),V=I(bD);function
W(a){return[1,a,[0,l,V]]}function
J(d,a){if(0===a)return[0,U];var
c=x(a+1|0,[0,b]);f(c,a)[a+1]=[0,U];return[1,d,c]}function
ai(a){return 0===a[0]?1:0}function
aj(a){return 0===a[0]?a[1]:c(d[2],bE)}function
ak(c){return 0===c[0]?a(g[1],c[1],b)?1:0:0}function
s(a){return 0===a[0]?0:a[1]}function
L(b){if(0===b[0])return 0;var
c=b[2],f=b[1];function
g(c,b){var
e=L(c);return a(d[5],e,b)}return k(e[19][18],g,c,f)}function
al(b){var
c=0;function
f(c,b){var
e=L(c);return a(d[5],e,b)}return k(e[19][18],f,b,c)}function
n(c,b){if(0===c[0]){var
f=c[1];if(0===b[0])return a(g[1],f,b[1])}else{var
h=c[2],i=c[1];if(0!==b[0]){var
d=i===b[1]?1:0,j=b[2];return d?k(e[19][31],n,h,j):d}}return 0}function
X(d){if(0===d[0])return d;var
e=d[2],g=e.length-1-1|0,a=[0,g],k=d[1];for(;;){if(0<a[1]){var
h=a[1];if(n(f(e,h)[h+1],[0,b])){a[1]=a[1]-1|0;continue}}if(0<=a[1]){if(0===a[1])return f(e,0)[1];if(a[1]===g)return d;var
i=x(a[1]+1|0,[0,b]),j=a[1],l=0;if(!(j<0)){var
c=l;for(;;){var
m=f(e,c)[c+1];f(i,c)[c+1]=m;var
o=c+1|0;if(j!==c){var
c=o;continue}break}}return[1,k,i]}return[0,b]}}function
h(b,a){if(1===a[0]){var
c=a[2];if(a[1]===b)return c.length-1-1|0}return 0}function
Y(c){if(0===c[0])return 0;var
b=[0,0],f=c[2];function
g(e,c){var
f=e+Y(c)|0;b[1]=a(d[5],b[1],f);return 0}a(e[19][14],g,f);return b[1]}function
u(b){if(0===b[0])return[0,b[1]];var
c=b[1];return[1,c,a(e[19][15],u,b[2])]}function
w(e,c,a){if(1===a[0]){var
d=a[2];if(a[1]===e)return c<d.length-1?f(d,c)[c+1]:[0,b]}return 0===c?a:[0,b]}function
p(j,c){if(0===j[0]){var
D=j[1];if(0===c[0])var
q=[0,a(g[5],D,c[1])];else{var
s=c[2],E=c[1],t=a(e[19][15],u,s),F=p(j,f(s,0)[1]);f(t,0)[1]=F;var
q=[1,E,t]}var
r=q}else{var
l=j[2],i=j[1];if(0===c[0]){var
v=a(e[19][15],u,l),G=p(f(l,0)[1],c);f(v,0)[1]=G;var
y=[1,i,v]}else{var
z=c[2],m=c[1];if(i<m){var
A=a(e[19][15],u,z),H=p(j,f(z,0)[1]);f(A,0)[1]=H;var
n=[1,m,A]}else
if(m<i){var
B=a(e[19][15],u,l),I=p(f(l,0)[1],c);f(B,0)[1]=I;var
n=[1,i,B]}else{var
J=h(i,c),K=h(i,j),o=a(d[5],K,J),C=x(o+1|0,[0,b]),L=0;if(!(o<0)){var
k=L;for(;;){var
M=w(i,k,c),N=p(w(i,k,j),M);f(C,k)[k+1]=N;var
O=k+1|0;if(o!==k){var
k=O;continue}break}}var
n=[1,i,C]}var
y=n}var
r=y}return X(r)}function
M(d){if(0===d[0])return c(g[4],d[1]);var
f=a(e[19][15],M,d[2]);return k(e[19][17],g[12],b,f)}function
N(b,c){if(0===b[0])return[0,a(g[9],b[1],c)];var
d=b[2],f=b[1];function
h(a){return N(a,c)}return[1,f,a(e[19][15],h,d)]}function
Z(c){var
d=M(c);return a(g[1],d,b)?c:N(c,d)}function
_(b){if(0===b[0])return 0;var
d=b[1],f=c(e[19][11],b[2]),g=[0,[0,d,0],a(e[17][12],_,f)];return c(e[17][10],g)}function
$(d,g,c){if(1===c[0]){var
e=c[2],i=c[1];if(i===g){var
j=x(e.length-1+d|0,[0,b]),k=e.length-1-1|0,m=0;if(!(k<0)){var
a=m;for(;;){var
l=a+d|0,o=f(e,a)[a+1];f(j,l)[l+1]=o;var
p=a+1|0;if(k!==a){var
a=p;continue}break}}return[1,i,j]}}if(n(c,[0,b]))return[0,b];var
h=x(d+1|0,[0,b]);f(h,d)[d+1]=c;return[1,g,h]}function
o(d,c){if(0===d[0]){var
j=d[1];if(0===c[0])return[0,a(g[6],j,c[1])];var
l=c[2],m=c[1];if(a(g[1],j,b))return[0,b];var
n=function(a){return o(d,a)};return[1,m,a(e[19][15],n,l)]}var
h=d[2],f=d[1];if(0===c[0]){if(a(g[1],c[1],b))return[0,b];var
q=function(a){return o(a,c)};return[1,f,a(e[19][15],q,h)]}var
i=c[1],r=c[2];if(f<i){var
s=function(a){return o(d,a)};return[1,i,a(e[19][15],s,r)]}if(i<f){var
t=function(a){return o(a,c)};return[1,f,a(e[19][15],t,h)]}function
u(b,a){return $(b,f,o(a,c))}var
v=a(e[19][16],u,h);return k(e[19][17],p,[0,b],v)}function
am(k,c){if(0===c[0])return[0,b];var
d=c[2],g=c[1];if(g===k){var
e=d.length-1-1|0;if(1===e)return f(d,1)[2];var
h=x(e,[0,b]),i=e-1|0,l=0;if(!(i<0)){var
a=l;for(;;){var
j=a+1|0,m=f(d,j)[j+1],n=o([0,H(a+1|0)],m);f(h,a)[a+1]=n;var
p=a+1|0;if(i!==a){var
a=p;continue}break}}return[1,g,h]}return[0,b]}function
t(b){if(0===b[0])return[0,c(g[8],b[1])];var
d=b[1];return[1,d,a(e[19][15],t,b[2])]}function
O(b,a){return p(b,t(a))}function
y(b,a){return 0===a?V:o(b,y(b,a-1|0))}function
m(b,a){return o(b,a)}function
P(b,a){return O(b,a)}function
A(b,a){return y(b,a)}function
q(b,a){return w(b,h(b,a),a)}function
an(b,a){return w(b,0,a)}function
B(b,a){var
c=h(b,a),d=y(W(b),c);return O(a,o(q(b,a),d))}function
Q(c){var
a=c;for(;;){var
b=s(a);if(0<b){var
a=q(b,a);continue}if(0===a[0])return a[1];throw[0,K,bF]}}function
ao(d){var
c=Z(d),e=Q(c);return a(g[3],b,e)?c:t(c)}var
aa=[0,1];function
aq(b){var
a=b;for(;;){if(0===a[0])return a[1];var
a=f(a[2],0)[1];continue}}function
ab(b){if(aa[1]){var
f=c(d[20],b);return a(d[16],bG,f)}if(3<b){var
g=c(aP[1],(b-4|0)+97|0);return a(e[15][1],1,g)}var
h=c(aP[1],b+119|0);return a(e[15][1],1,h)}var
i=[0,0];function
R(n){if(0<i[1]){if(0===n[0]){var
o=n[1];i[1]=i[1]-1|0;if(a(g[3],b,o))return c(g[15],o);var
u=c(g[15],o),v=a(d[16],u,bH);return a(d[16],bI,v)}var
p=n[2],m=ab(n[1]),j=[0,bJ],h=[0,bK],r=R(f(p,0)[1]);if(1-ac(r,bL))j[1]=r;var
q=[0,0],s=p.length-1-1|0;if(!(s<1)){var
l=s;for(;;){if(0<=i[1]){var
k=R(f(p,l)[l+1]);h[1]=bN;if(1===l){if(1-ac(k,bO)){i[1]=i[1]-1|0;if(ac(k,bP))h[1]=m;else
if(a(e[15][18],k,43)){var
z=a(d[16],bR,m),A=a(d[16],k,z);h[1]=a(d[16],bS,A)}else{var
B=a(d[16],bT,m);h[1]=a(d[16],k,B)}}}else
if(1-ac(k,bU)){i[1]=i[1]-1|0;if(ac(k,bV)){var
C=c(d[20],l),D=a(d[16],bW,C);h[1]=a(d[16],m,D)}else
if(a(e[15][18],k,43)){var
E=c(d[20],l),F=a(d[16],bX,E),G=a(d[16],m,F),H=a(d[16],bY,G),I=a(d[16],k,H);h[1]=a(d[16],bZ,I)}else{var
J=c(d[20],l),K=a(d[16],b0,J),L=a(d[16],m,K),M=a(d[16],b1,L);h[1]=a(d[16],k,M)}}var
t=1-c(e[15][32],h[1]),w=t?1-q[1]:t;if(w){i[1]=i[1]-1|0;if(c(e[15][32],j[1]))j[1]=h[1];else{var
y=a(d[16],bQ,h[1]);j[1]=a(d[16],j[1],y)}}}else{h[1]=b2;if(1-q[1]){var
N=a(d[16],b3,h[1]);j[1]=a(d[16],j[1],N)}q[1]=1}var
x=l-1|0;if(1!==l){var
l=x;continue}break}}if(c(e[15][32],j[1])){i[1]=i[1]-1|0;j[1]=bM}return j[1]}return b4}function
v(a){i[1]=20;return R(a)}function
as(b){var
c=v(b);return a(ap[97],b5,c)}function
ad(f){var
b=[0,b6];function
g(c){var
e=v(c),f=a(d[16],e,b7);b[1]=a(d[16],b[1],f);return 0}a(e[19][13],g,f);var
h=a(d[16],b[1],b8);return c(j[3],h)}function
at(a){return ad(c(e[19][12],a))}function
F(j,i,e){if(0===e){if(0===j[0]){var
o=j[1];if(0===i[0]){var
s=i[1],x=a(g[10],o,s);return a(g[1],x,b)?[0,[0,a(g[9],o,s)],l]:c(d[2],b9)}}throw[0,K,b_]}var
t=h(e,i),y=q(e,i),f=[0,j],k=[0,l],u=[0,1],z=B(e,i);for(;;){if(u[1])if(!n(f[1],l)){var
v=h(e,f[1]);if(v<t)u[1]=0;else{var
A=q(e,f[1]),C=B(e,f[1]),D=r(A,y,e-1|0),w=m(D,J(e,v-t|0));k[1]=p(k[1],w);f[1]=P(C,m(w,z))}continue}return[0,k[1],f[1]]}}function
r(f,e,b){var
g=F(f,e,b),h=g[2],i=g[1];if(n(h,l))return i;var
j=c(d[20],b),k=a(d[16],j,b$),m=a(d[16],ca,k),o=a(d[16],cb,m),p=v(h),q=a(d[16],p,o),r=a(d[16],cc,q),s=a(d[16],cd,r),t=v(e),u=a(d[16],t,s),w=a(d[16],ce,u),x=a(d[16],cf,w),y=v(f),z=a(d[16],y,x),A=a(d[16],cg,z),B=a(d[16],ch,A);return c(d[2],B)}function
au(c,b){var
e=s(b),f=s(c);return r(c,b,a(d[5],f,e))}function
av(c,b){var
f=s(b),g=s(c),e=a(d[5],g,f);try{var
i=h(e,b),j=(1+h(e,c)|0)-i|0;r(o(c,y([0,Q(b)],j)),b,e);var
k=1;return k}catch(a){a=z(a);if(a[1]===ar)return 0;throw a}}function
aw(d,b,a){if(0===b[0])return[0,l,b,1,d];if(a===b[1]){var
e=[0,0],c=[0,d],f=q(a,b),j=B(a,b),g=[0,l],k=h(a,b);for(;;){var
n=h(a,b);if(n<=h(a,c[1])){var
o=h(a,c[1]),r=q(a,c[1]),s=B(a,c[1]),i=m(r,J(a,o-k|0)),t=m(i,j);c[1]=P(m(f,s),t);g[1]=p(m(f,g[1]),i);e[1]=e[1]+1|0;continue}return[0,c[1],f,e[1],g[1]]}}return[0,l,b,1,d]}function
E(f,c,a,b){if(1===a[0]){var
g=a[2];if(b===a[1]){var
h=function(c,a){return C(c,a,b-1|0)};return k(e[19][17],h,c,g)}}var
d=b-1|0;return f<50?T(f+1|0,c,a,d):aG(T,[0,c,a,d])}function
T(i,f,e,b){if(0===f[0]){var
p=f[1];if(0===e[0]){var
q=c(g[4],e[1]),s=c(g[4],p);return[0,a(g[12],s,q)]}}if(n(f,l))return e;if(n(e,l))return f;if(0===h(b,e))return i<50?E(i+1|0,e,f,b):aG(E,[0,e,f,b]);if(0===h(b,f))return i<50?E(i+1|0,f,e,b):aG(E,[0,f,e,b]);var
t=G(f,b),k=C(t,G(e,b),b-1|0),u=c(d[20],b);c(j[1],u);var
v=r(f,k,b),o=af(v,r(e,k,b),b);return m(k,r(o,G(o,b),b))}function
ay(a,b,c){return ba(E(0,a,b,c))}function
C(a,b,c){return ba(T(0,a,b,c))}function
ae(c,b,a){return C(c,b,a)}function
ax(c,b){var
e=s(b),f=s(c);return ae(c,b,a(d[5],f,e))}function
G(a,b){if(1===a[0]){var
c=a[2];if(a[1]===b){var
d=function(c,a){return C(c,a,b-1|0)};return k(e[19][17],d,l,c)}}return a}function
ag(u,s,p,o,k,b){var
d=u,a=s,c=p,i=o,g=k;for(;;){if(n(a,l))return d;var
j=h(b,a),e=q(b,a),f=g-j|0,v=t(a),w=F(m(A(t(e),f+1|0),d),v,b)[2],x=ah(e,c,f,b),d=a,a=r(w,m(i,A(c,f)),b),c=x,i=e,g=j;continue}}function
af(j,i,b){var
c=j,a=i;for(;;){if(n(a,l))return c;var
f=h(b,c),d=h(b,a);if(f<d){var
p=a,a=c,c=p;continue}var
g=f-d|0,e=q(b,a),k=t(a),o=F(m(A(t(e),g+1|0),c),k,b)[2];return ag(a,o,A(e,g),e,d,b)}}function
ah(c,g,f,e){var
a=[0,c],d=f-1|0,h=1;if(!(d<1)){var
b=h;for(;;){a[1]=r(m(a[1],c),g,e);var
i=b+1|0;if(d!==b){var
b=i;continue}break}}return a[1]}function
S(a){if(0===a[0])return c(g[13],a[1]);var
b=a[2],d=0;function
f(b,a){return a+S(b)|0}return k(e[19][18],f,b,d)}return[0,I,W,J,ai,ak,s,L,al,n,X,h,Y,u,w,p,M,N,Z,_,aj,$,o,am,t,O,y,m,P,A,q,an,B,Q,ao,aq,aa,ab,i,v,as,ad,at,F,r,au,av,aw,ax,ae,G,ay,C,af,ag,ah,S,c(D[18],[0,n,S])]}];R(206,as,"Nsatz_plugin.Polynom");var
aQ=[bm,ci,bb(0)],aR=[0,0];function
cj(a){return a}function
ck(a){return a}function
A(a){return a.length-1-1|0}function
at(a){return f(a,0)[1]}function
aS(c,d){var
h=A(c);if(aR[1]){var
e=[0,0],a=[0,1];for(;;){if(0===e[1])if(a[1]<=h){var
i=a[1],n=f(d,i)[i+1],j=a[1];e[1]=aH(f(c,j)[j+1],n);a[1]=a[1]+1|0;continue}return e[1]}}var
o=f(d,0)[1],k=aH(f(c,0)[1],o);if(0===k){var
g=[0,0],b=[0,h];for(;;){if(0===g[1])if(1<=b[1]){var
l=b[1],p=f(d,l)[l+1],m=b[1];g[1]=-aH(f(c,m)[m+1],p)|0;b[1]=b[1]-1|0;continue}return g[1]}}return k}function
ai(c,e){var
b=A(c),d=x(b+1|0,0),g=0;if(!(b<0)){var
a=g;for(;;){var
h=f(e,a)[a+1],i=f(c,a)[a+1]-h|0;f(d,a)[a+1]=i;var
j=a+1|0;if(b!==a){var
a=j;continue}break}}return d}function
aT(c,g){var
b=[0,1],a=[0,0],h=A(c);for(;;){if(b[1])if(a[1]<=h){var
d=a[1],i=f(g,d)[d+1],e=a[1];b[1]=i<=f(c,e)[e+1]?1:0;a[1]=a[1]+1|0;continue}return b[1]}}function
au(a){var
c=A(a);f(a,0)[1]=0;var
d=1;if(!(c<1)){var
b=d;for(;;){var
e=f(a,0)[1];a[1]=f(a,b)[b+1]+e|0;var
g=b+1|0;if(c!==b){var
b=g;continue}break}}return a}function
aj(e,h){var
c=A(e),g=x(c+1|0,0),i=1;if(!(c<1)){var
b=i;for(;;){var
j=f(h,b)[b+1],k=f(e,b)[b+1],l=a(d[5],k,j);f(g,b)[b+1]=l;var
m=b+1|0;if(c!==b){var
b=m;continue}break}}return au(g)}function
aU(a){return au(x(a+1|0,0))}var
w=[0,[0,cj,ck],function(b){var
P=c(b[1],cl),t=c(b[1],cm);function
Q(a){return a}function
R(d,c){var
f=c[2],g=d[2],e=a(b[9],d[1],c[1]),h=e?aI(g,f):e;return h}var
y=c(e[17][92],R),S=[0,y,function(d){function
e(a){return a[1]}var
f=a(g[13],e,d);function
h(a){return a[2]}var
i=a(g[13],h,d),j=c(D[20],i);function
l(d,a){return(d*17|0)+c(b[56],a)|0}return k(g[16],l,j,f)}],T=c(D[18],S);function
B(f,e){try{var
b=a(g[5],f,e);return b}catch(b){b=z(b);if(b[1]===ar){var
h=c(d[20],e),i=a(d[16],cp,h),j=function(c,b){var
e=a(d[16],cr,b);return a(d[16],c,e)},l=k(g[16],j,cq,f);return a(d[16],l,i)}throw b}}function
p(h,e){var
m=h[1];function
g(j,i){var
e=[0,0],k=j.length-1-1|0,l=1;if(!(k<1)){var
b=l;for(;;){var
t=f(j,b)[b+1],h=c(d[20],t);if(ad(h,cx))if(ad(h,cy)){var
o=a(d[16],cz,h),p=B(m,b-1|0),q=[0,a(d[16],p,o),0];e[1]=a(d[22],e[1],q)}else{var
s=[0,B(m,b-1|0),0];e[1]=a(d[22],e[1],s)}var
r=b+1|0;if(k!==b){var
b=r;continue}break}}var
g=e[1];if(g){if(i)return a(av[7],cs,g);var
n=a(av[7],ct,g);return a(d[16],cu,n)}return i?cv:cw}function
l(i,j){var
z=i?0:1;if(z)return j?cJ:cK;var
A=0,B=i?i[2]:c(d[2],cM),C=l(B,A),D=a(d[16],cL,C),m=i?i[1]:c(d[2],cN),h=m[2],n=c(b[39],m[1]),o=a(d[16],n,cn),e=a(d[16],co,o);if(ad(e,cA))if(ad(e,cB))if(ad(e,cC))if(45===r.caml_string_get(e,0))var
p=g(h,0),q=k(av[4],e,1,r.caml_ml_string_length(e)-1|0),s=a(d[16],q,p),f=a(d[16],cD,s);else
if(0===j)var
t=g(h,0),u=a(d[16],e,t),f=a(d[16],cE,u);else
var
v=g(h,0),f=a(d[16],e,v);else
if(0===j)var
w=g(h,1),f=a(d[16],cF,w);else
var
f=g(h,1);else
var
f=cG;else
var
x=g(h,1),y=a(d[16],cH,x),f=a(d[16],cI,y);return a(d[16],f,D)}return l(e,1)}function
u(e,b){if(10<c(g[1],b))var
h=c(g[1],b),i=c(d[20],h),j=a(d[16],i,cO),k=a(d[16],cP,j),l=p(e,[0,c(g[3],b),0]),f=a(d[16],l,k);else
var
f=p(e,b);return f}var
U=0;function
l(b,a){return[0,[0,a,aU(b)],0]}function
h(o,n){var
f=o,e=n,d=0;for(;;){if(f){if(e){var
i=e[2],j=e[1],k=f[2],h=f[1],l=aS(h[2],j[2]);if(0<l){var
f=k,d=[0,h,d];continue}if(0<=l){var
m=a(b[15],h[1],j[1]);if(a(b[9],m,P)){var
f=k,e=i;continue}var
f=k,e=i,d=[0,[0,m,h[2]],d];continue}var
e=i,d=[0,j,d];continue}return a(g[8],d,f)}return e?a(g[8],d,e):c(g[6],d)}}function
m(m,g,c){function
d(h){var
n=h[2],o=h[1],d=A(g),e=x(d+1|0,0),i=0;if(!(d<0)){var
c=i;for(;;){var
j=f(n,c)[c+1],k=f(g,c)[c+1]+j|0;f(e,c)[c+1]=k;var
l=c+1|0;if(d!==c){var
c=l;continue}break}}return[0,a(b[22],m,o),e]}return a(aw[12],d,c)}function
n(a){return c(b[1],[0,a])}function
V(d,b){var
a=x(d+1|0,0);f(a,b)[b+1]=1;var
c=au(a);return[0,[0,n(1),c],0]}function
W(a){function
d(a){if(a){var
e=a[1],f=e[2],g=e[1],h=d(a[2]);return[0,[0,c(b[24],g),f],h]}return 0}return d(a)}function
o(f,c){function
d(c){if(c){var
e=c[1],g=e[2],h=e[1],i=d(c[2]);return[0,[0,a(b[22],f,h),g],i]}return 0}return d(c)}function
v(e,d){var
a=e,b=0;for(;;){if(a){var
c=a[1],f=a[2],a=f,b=h(m(c[1],c[2],d),b);continue}return b}}function
X(a,b){if(a){if(0===b)return[0,[0,t,aU(A(c(g[3],a)[2]))],0];var
d=function(b,a){if(1===a)return b;var
c=d(b,a/2|0),e=v(c,c);return 0===(a%2|0)?e:v(b,e)};return d(a,b)}return 0}function
C(d,c){return a(b[48],d,c)}function
i(a){return c(g[3],a[1])[2]}function
E(b,e){b[3]=b[3]+1|0;if(b[4].length-1<=b[3])b[4]=a(aq[5],b[4],x(b[3],ax));var
c=[0,e,b[3]],d=b[3];f(b[4],d)[d+1]=c;return c}function
Y(e,d){var
a=d;for(;;){if(a){var
b=a[1],f=a[2];if(0===aT(e,c(g[3],b[1])[2])){var
a=f;continue}return b}return ax}}function
Z(d,c){var
b=d[1];if(b)return a(D[6],b[1],c);throw ak}function
_(d,c,b){var
a=d[1];return a?k(D[5],a[1],c,b):0}function
F(d,c,e){try{var
a=Z(d,c);return a}catch(a){a=z(a);if(a===ak){var
b=Y(c,e)[1];return b?(_(d,c,b),b):b}throw a}}function
q(d,c){return a(b[45],d,c)}function
G(v,e,u){function
f(d){if(d){var
g=d[1],i=g[2],j=g[1],w=d[2],e=F(v,i,u);if(e){var
k=e[1],l=k[1],x=e[2],y=k[2],n=C(j,l),p=q(l,n),z=q(j,n),A=c(b[24],z),s=m(A,ai(i,y),x),r=f(h(o(p,w),s)),B=r[2];return[0,a(b[22],p,r[1]),B]}return[0,t,d]}return[0,t,0]}var
d=f(e);return[0,d[1],d[2]]}function
$(d,c,b){try{var
e=a(D[6],d[2],[0,c[2],b[2]]);return e}catch(a){a=z(a);if(a===ak)return 0;throw a}}function
H(d,c,b,a){return k(D[5],d[2],[0,c[2],b[2]],a)}function
I(o,j,e,i){function
f(a){if(a){var
g=a[1],i=g[2],p=a[2],r=g[1],d=F(o,i,e);if(d){var
j=d[1],s=d[2],t=j[2],u=q(r,j[1]),k=c(b[24],u),l=ai(i,t),n=f(h(p,m(k,l,s)));return[0,[0,[0,k,l,d],n[1]],n[2]]}return[0,0,a]}return cQ}var
d=f(j),p=d[2],r=d[1];function
s(b,e){function
c(c,b){var
d=b[2],f=b[1];if(a(y,b[3],e[1])){var
g=n(1);return h(c,m(f,d,l(A(d),g)))}return c}return k(g[16],c,b,r)}return[0,k(g[19],s,i,e),p]}function
aa(s,r){var
d=s[1],e=r[1],a=c(g[3],d)[2],i=c(g[3],e)[2],j=c(g[3],d)[1],k=c(g[3],e)[1],t=c(g[4],d),u=c(g[4],e),o=C(j,k),p=aj(a,i),v=ai(p,a),w=ai(p,i);function
f(d,a){var
e=q(j,o),f=m(c(b[24],e),w,a);return h(m(q(k,o),v,d),f)}var
x=f(t,u),y=n(1),z=f(l(A(a),y),0),B=n(1);return[0,x,z,f(0,l(A(a),B))]}function
ab(c,b){return a(d[22],b,[0,c,0])}var
ac=[0,function(b,a){return aS(a[2],b[2])}],s=c(aV[2],ac),J=s[1],ae=s[2],af=s[3],ag=s[4],ah=s[6];function
K(j,d,b){function
e(q,k){var
u=k[1],l=c(g[3],j[1])[2],s=c(g[3],u)[2],d=[0,1],b=[0,1],t=A(l);for(;;){if(d[1])if(b[1]<=t){var
m=b[1],n=0===f(l,m)[m+1]?1:0;if(n)var
o=n;else
var
p=b[1],o=0===f(s,p)[p+1]?1:0;d[1]=o;b[1]=b[1]+1|0;continue}if(d[1])return q;var
v=i(k),w=aj(i(j),v),e=k[2],h=j[2],x=r.caml_lessthan(h,e)?[0,h,e]:[0,e,h];return a(ae,[0,x,w],q)}}return k(g[16],e,b,d)}function
al(e,d){var
a=e,b=d;for(;;){if(a){var
c=a[2],f=a[1];if(c){var
a=c,b=K(f,c,b);continue}}return b}}function
am(h,b,k,m){var
e=b[2],j=b[1],c=j[2],d=j[1];function
l(a){var
j=a[2]!==d?1:0;if(j){var
k=a[2]!==c?1:0;if(k){var
l=aT(e,i(a));if(l){var
m=a[2]<c?1:0;if(m)var
g=m;else
var
p=i(a),g=1-aI(e,aj(i(f(h[4],d)[d+1]),p));if(g){var
n=a[2]<d?1:0;if(n)var
b=n;else
var
o=i(a),b=1-aI(e,aj(i(f(h[4],c)[c+1]),o))}else
var
b=g}else
var
b=l}else
var
b=k}else
var
b=j;return b}return a(g[24],l,k)}function
an(e,d){function
a(h){var
a=0,b=k(ah,function(b,a){return a+1|0},d,a),f=c(g[1],e);return k(M[4],cR,f,b)}return c(j[5],a)}var
w=[bm,cS,bb(0)];function
L(t,m,f,s,e,C){var
x=G(m,t[1],e),q=x[2],D=x[1];function
E(c){var
b=u(f,q);return a(d[16],cT,b)}c(j[5],E);var
y=[0,q,a(b[22],t[2],D)];if(q)throw[0,w,y];c(j[6],cU);function
F(a){return 0}var
H=a(g[13],F,e),i=y[2],z=I(m,o(i,s),e,H),A=z[1],J=z[2];c(j[6],cV);function
K(c){var
b=p(f,J);return a(d[16],cW,b)}c(j[5],K);function
L(k){function
b(c,b,a){return h(c,v(b,a[1]))}var
c=o(i,s),j=p(f,aJ(g[21],b,c,A,e));return a(d[16],cX,j)}c(j[5],L);function
M(c){var
b=p(f,l(1,i));return a(d[16],cY,b)}c(j[5],M);var
r=0,k=c(g[6],e);for(;;){if(k){var
B=k[2],N=k[1],O=function(b){return function(a){return $(m,b,a)}}(N),r=[0,a(g[13],O,B),r],k=B;continue}var
P=a(aw[107],C,r),Q=function(a){return o(n(-1),a)};return[0,i,1,P,a(g[15],Q,A)]}}function
N(a){return a?at(a[1][2]):-1}function
O(e,r,l,Q,b,x){var
h=b[1],m=b[2];c(j[6],cZ);var
i=e[1];if(i)c(D[2],i[1]);var
y=c(g[1],h);return function(S,R){var
l=S,h=R;for(;;){var
s=h[2],b=h[1];an(b,s);try{var
O=c(ag,s),P=[0,[0,c(af,s),O]],t=P}catch(a){a=z(a);if(a!==aV[1])throw a;var
t=0}if(t){var
A=t[1],i=A[2],B=A[1],C=B[1],m=C[2],n=C[1];if(am(e,[0,[0,n,m],B[2]],b,i)){c(j[6],c0);var
h=[0,b,i];continue}var
T=f(e[4],m)[m+1],v=aa(f(e[4],n)[n+1],T),p=v[1],U=v[3],V=v[2];if(Q)if(0!==p){var
ad=N(l[1]);if(ad<N(p)){c(j[6],c3);var
h=[0,b,i];continue}}var
D=G(e,p,b),F=D[1];if(D[2]){var
W=function(c,d,e,f,g){return function(a){var
b=a[2]===d?f:a[2]===c?e:0;return o(g,b)}}(m,n,U,V,F),X=a(g[13],W,b),J=I(e,o(F,p),b,X),Y=J[1],q=E(e,J[2]),Z=function(c){return function(b,a){return H(e,c,a,b)}}(q);k(g[18],Z,Y,b);var
_=function(c){return function(e){var
b=u(r,c[1]);return a(d[16],c1,b)}}(q);c(j[5],_);var
M=ab(q,b);try{var
ac=L(l,e,r,x,M,y);return ac}catch(a){a=z(a);if(a[1]===w){var
$=a[2],l=$,h=[0,M,K(q,b,i)];continue}throw a}}c(j[6],c2);var
h=[0,b,i];continue}return L(l,e,r,x,b,y)}}(l,[0,h,m])}function
ao(b){if(b){var
c=b[2],d=at(b[1][2]),e=function(a){return at(a[2])===d?1:0};return a(g[23],e,c)}return 1}return[0,Q,l,U,V,y,h,W,v,X,function(e,p,i,b){var
f=[0,0,a(D[1],0,51),0,x(1e3,ax)],m=a(g[23],ao,[0,b,i]);if(m)c(j[6],c4);function
q(f){var
c=u(e,b);return a(d[16],c5,c)}c(j[5],q);function
r(f){function
b(c,b){var
f=u(e,b),g=a(d[16],f,c7);return a(d[16],c,g)}var
c=k(g[16],b,c6,i);return a(d[16],c8,c)}c(j[5],r);function
s(a){return E(f,a)}var
h=a(g[13],s,i);function
v(a){return H(f,a,a,l(p,n(1)))}a(g[11],v,h);var
y=[0,b,t];try{var
C=O(f,e,y,m,[0,h,J],b),o=C}catch(a){a=z(a);if(a[1]!==w)throw a;var
A=a[2];try{var
B=O(f,e,A,m,[0,h,al(h,J)],b)}catch(a){a=z(a);if(a[1]===w)throw aQ;throw a}var
o=B}c(j[6],c9);return o},T]},aQ,aR];R(212,w,"Nsatz_plugin.Ideal");var
c_=c(y[35],0),aW=l[49],aX=y[24],aY=y[27],aZ=y[16],c$=l[48],da=y[25],db=y[4],dc=y[5],dd=y[10],de=y[8],df=y[3],dg=y[15],dh=y[33];function
di(a){try{var
b=c(y[37],a);return b}catch(a){a=z(a);if(a[1]===ar)return 1;throw a}}var
dj=y[19];function
dk(e,d){var
c=e,b=d;for(;;){if(a(aX,b,c_))return c;if(a(aY,c,b)){var
g=b,b=c,c=g;continue}var
f=a(aZ,c,b),c=b,b=f;continue}}function
a0(b){return a(l[32],b,C)?0:[0,b]}function
a1(a){var
b=a[2],c=a[1];return 1===b?c:[6,c,b]}function
az(a){var
b=a[1];if(typeof
b==="number")return a[2];var
c=a[2];return typeof
c==="number"?b:[3,b,c]}function
a2(c){var
b=c[1];if(typeof
b==="number")return 0;var
d=c[2];if(typeof
d==="number")return 0;else
if(0===d[0])if(a(l[32],d[1],N))return b;if(typeof
b!=="number"&&0===b[0]){var
e=c[2];if(a(l[32],b[1],N))return e}return[5,b,c[2]]}function
u(d,b,a){var
e=k(n[71][35],d,b,a);return c(n[49][5],e)}var
aA=[i,function(a){return u(dn,dm,dl)}],O=[i,function(a){return u(dr,dq,dp)}],V=[i,function(a){return u(du,dt,ds)}],W=[i,function(a){return u(dx,dw,dv)}],X=[i,function(a){return u(dA,dz,dy)}],Y=[i,function(a){return u(dD,dC,dB)}],Z=[i,function(a){return u(dG,dF,dE)}],_=[i,function(a){return u(dJ,dI,dH)}],a3=[i,function(a){return u(dL,aB,dK)}],a4=[i,function(a){return u(dN,aB,dM)}],a5=[i,function(a){return u(dP,aB,dO)}],h=[i,function(a){return u(dR,E,dQ)}],al=[i,function(a){return u(dT,E,dS)}],$=[i,function(a){return u(dV,E,dU)}],dY=[i,function(a){return u(dX,E,dW)}],d1=[i,function(a){return u(d0,E,dZ)}],aa=[i,function(a){return u(d3,E,d2)}],am=[i,function(a){return u(d5,E,d4)}],an=[i,function(a){return u(d7,E,d6)}],d_=[i,function(a){return u(d9,E,d8)}];function
s(a,d){var
b=p(a),f=c(e[19][12],d),g=q===b?a[1]:i===b?c(o[2],a):a;return c(n[7][17],[0,g,f])}function
aC(f){var
a=p(h),b=0,d=0,e=q===a?h[1]:i===a?c(o[2],h):h;return s(a3,[0,s(aA,[0,e,d]),b])}function
P(b){if(a(l[26],b,N)){var
d=p(am);return q===d?am[1]:i===d?c(o[2],am):am}var
e=a(l[12],b,U);return a(l[26],e,C)?s(aa,[0,P(a(l[11],b,U)),0]):s(d1,[0,P(a(l[11],b,U)),0])}function
a6(b){if(a(l[26],b,C)){var
d=p(al);return q===d?al[1]:i===d?c(o[2],al):al}return a(l[28],b,C)?s($,[0,P(b),0]):s(dY,[0,P(a(l[4],d$,b)),0])}function
F(A){var
b=A;for(;;)if(typeof
b==="number"){var
b=[0,C];continue}else
switch(b[0]){case
0:var
x=c(l[50],b[1]),d=c(ay[5],x),y=c(ay[3],d);c(l[48],y);var
z=c(ay[2],d),f=p(h),B=[0,a6(c(l[48],z)),0],D=q===f?h[1]:i===f?c(o[2],h):h;return s(O,[0,D,B]);case
1:var
g=p(h),E=[0,P(c(l[43],b[1])),0],G=q===g?h[1]:i===g?c(o[2],h):h;return s(V,[0,G,E]);case
2:var
j=p(h),H=[0,F(b[1]),0],I=q===j?h[1]:i===j?c(o[2],h):h;return s(Z,[0,I,H]);case
3:var
J=b[1],K=[0,F(b[2]),0],k=p(h),L=[0,F(J),K],M=q===k?h[1]:i===k?c(o[2],h):h;return s(W,[0,M,L]);case
4:var
Q=b[1],R=[0,F(b[2]),0],m=p(h),S=[0,F(Q),R],T=q===m?h[1]:i===m?c(o[2],h):h;return s(X,[0,T,S]);case
5:var
U=b[1],$=[0,F(b[2]),0],n=p(h),aa=[0,F(U),$],ab=q===n?h[1]:i===n?c(o[2],h):h;return s(Y,[0,ab,aa]);default:var
r=b[2],ac=b[1];if(0===r){var
t=p(h),ad=[0,a6(N),0],ae=q===t?h[1]:i===t?c(o[2],h):h;return s(O,[0,ae,ad])}var
u=c(l[45],r),af=0;if(a(l[32],u,C))var
e=p(an),v=q===e?an[1]:i===e?c(o[2],an):an;else
var
v=s(d_,[0,P(u),0]);var
w=p(h),ag=[0,F(ac),[0,v,af]],ah=q===w?h[1]:i===w?c(o[2],h):h;return s(_,[0,ah,ag])}}function
Q(g){var
b=c(n[7][1],g);if(9===b[0]){var
d=b[2];if(1===d.length-1){var
e=d[1],f=p(aa),h=b[1],j=q===f?aa[1]:i===f?c(o[2],aa):aa;if(a(n[7][60],h,j)){var
k=Q(e);return a(l[6],U,k)}var
m=Q(e),r=a(l[6],U,m);return a(l[1],N,r)}}return N}function
G(L){var
j=c(n[7][1],L);if(9===j[0]){var
d=j[2],x=d.length-1,b=j[1];if(2===x){var
k=d[2],y=p(V),M=q===y?V[1]:i===y?c(o[2],V):V;if(a(n[7][60],b,M)){var
N=Q(k);return[1,c(l[40],N)]}var
z=p(O),P=q===z?O[1]:i===z?c(o[2],O):O;if(a(n[7][60],b,P)){var
h=c(n[7][1],k);if(9===h[0]){var
s=h[2];if(1===s.length-1){var
t=s[1],u=p($),I=h[1],J=q===u?$[1]:i===u?c(o[2],$):$;if(a(n[7][60],I,J))var
m=Q(t),g=1;else
var
K=Q(t),m=a(l[4],C,K),g=1}else
var
g=0}else
var
g=0;if(!g)var
m=C;return[0,m]}var
A=p(Z),R=q===A?Z[1]:i===A?c(o[2],Z):Z;return a(n[7][60],b,R)?[2,G(k)]:0}if(3===x){var
e=d[2],f=d[3],B=p(W),S=q===B?W[1]:i===B?c(o[2],W):W;if(a(n[7][60],b,S)){var
T=G(f);return[3,G(e),T]}var
D=p(X),U=q===D?X[1]:i===D?c(o[2],X):X;if(a(n[7][60],b,U)){var
aa=G(f);return[4,G(e),aa]}var
E=p(Y),ab=q===E?Y[1]:i===E?c(o[2],Y):Y;if(a(n[7][60],b,ab)){var
ac=G(f);return[5,G(e),ac]}var
F=p(_),ad=q===F?_[1]:i===F?c(o[2],_):_;if(a(n[7][60],b,ad)){var
v=c(n[7][1],f);if(9===v[0]){var
w=v[2];if(1===w.length-1)var
H=Q(w[1]),r=1;else
var
r=0}else
var
r=0;if(!r)var
H=C;var
ae=c(l[44],H);return[6,G(e),ae]}return 0}}return 0}function
a7(e){var
b=c(n[7][1],e);if(9===b[0]){var
a=b[2],d=a.length-1-1|0;if(!(2<d>>>0))switch(d){case
0:return 0;case
1:break;default:var
f=a[2],g=a7(a[3]);return[0,G(f),g]}}throw[0,K,ea]}function
eb(c,b){function
e(g,f){var
b=g,c=f;for(;;)if(typeof
b==="number")return c;else
switch(b[0]){case
0:return c;case
1:var
h=bc(b[1]);return a(d[5],c,h);case
2:var
b=b[1];continue;case
3:var
i=b[2],j=e(b[1],c),b=i,c=j;continue;case
4:var
k=b[2],l=e(b[1],c),b=k,c=l;continue;case
5:var
m=b[2],n=e(b[1],c),b=m,c=n;continue;default:var
b=b[1];continue}}return e(b,c)}var
a8=c(as[1],[0,aX,aY,da,db,dc,dd,de,df,dg,aZ,dj,dk,di,aW,dh]),t=c(w[2],a8);function
aD(h,a){var
b=c(t[1],a);function
g(b){if(b){var
m=b[2],n=b[1],r=n[1],o=c(w[1][1],n[2]).length-1-1|0,s=function(h,l){var
g=h[2],d=h[1],e=c(w[1][1],l[2]),a=[0,0],m=1;if(!(o<1)){var
b=m;for(;;){if(0<f(e,b)[b+1])a[1]=b;var
q=b+1|0;if(o!==b){var
b=q;continue}break}}if(0===a[1])return[0,d,g];if(d<a[1]){var
i=a[1],n=f(e,i)[i+1];return[0,a[1],n]}if(a[1]===d){var
j=a[1];if(f(e,j)[j+1]<g){var
k=a[1],p=f(e,k)[k+1];return[0,a[1],p]}}return[0,d,g]},p=k(e[17][15],s,ec,b),h=p[2],a=p[1];if(0===a){var
i=function(a){if(0===a[0])return a0(c(c$,a[1]));var
b=a[2],f=a[1];function
g(e,b,a){var
g=a1([0,[1,c(d[20],f)],e]);return az([0,a,a2([0,i(b),g])])}return k(e[19][41],g,b,0)},j=i(r);return c(e[17][47],m)?j:az([0,j,g(m)])}var
t=function(i,g){var
b=g[2],j=g[1],k=i[2],l=i[1];if(h<=f(c(w[1][1],b),a)[a+1]){var
m=c(w[1][1],b),d=c(e[19][8],m);d[a+1]=f(d,a)[a+1]-h|0;return[0,[0,[0,j,c(w[1][2],d)],l],k]}return[0,l,[0,[0,j,b],k]]},q=k(e[17][15],t,ed,b),u=q[2],v=q[1],x=1===h?[1,c(d[20],a)]:a1([0,[1,c(d[20],a)],h]),y=g(c(e[17][6],u));return az([0,a2([0,x,g(c(e[17][6],v))]),y])}return a0(c(l[43],ee))}return g(b)}function
a_(b,a){function
d(b,a){if(b){if(0===b[1]){var
c=b[2];if(a){var
e=a[1];return[0,e,d(c,a[2])]}throw[0,K,ej]}var
f=d(b[2],a);return[0,t[3],f]}return a}var
f=d(b,c(e[17][6],a));return c(e[17][6],f)}function
eB(av){var
u=a7(av),g=k(e[17][15],eb,0,u);if(u){var
v=u[1];if(typeof
v==="number")var
d=0;else
if(0===v[0]){var
L=v[1];if(0===L[0]){var
y=u[2];if(y){var
A=y[1];if(typeof
A==="number")var
E=1;else
if(0===A[0]){var
N=A[1],O=L[1];if(0===N[0]){var
P=N[1],Y=y[2];if(7<O>>>0){var
Z=c(ah[3],el);k(T[6],0,0,Z)}else
switch(O){case
0:c(j[6],et);w[4][1]=0;break;case
1:c(j[6],eu);w[4][1]=0;break;case
2:c(j[6],ev);w[4][1]=1;break;case
3:c(j[6],ew);w[4][1]=1;break;case
4:c(j[6],ex);w[4][1]=0;break;case
5:c(j[6],ey);w[4][1]=0;break;case
6:c(j[6],ez);w[4][1]=1;break;default:c(j[6],eA);w[4][1]=1}var
_=function(b){return a(M[4],em,b+1|0)},$=a(e[17][48],g,_),aa=[0,a(e[18],en,$)],ab=function(b){function
d(b){if(typeof
b==="number")var
e=t[3];else
switch(b[0]){case
0:var
h=b[1];if(a(l[32],h,C))var
i=t[3];else
var
k=[0,c(aW,h)],i=a(t[2],g,k);var
e=i;break;case
1:var
f=bc(b[1]);if(f<=P)var
m=c(a8[2],f),j=a(t[2],g,m);else
var
j=a(t[4],g,f);var
e=j;break;case
2:var
n=d(b[1]),e=c(t[7],n);break;case
3:var
o=b[1],p=d(b[2]),q=d(o),e=a(t[6],q,p);break;case
4:var
r=b[1],s=d(b[2]),u=c(t[7],s),v=d(r),e=a(t[6],v,u);break;case
5:var
w=b[1],x=d(b[2]),y=d(w),e=a(t[8],y,x);break;default:var
z=b[2],A=d(b[1]),e=a(t[9],A,z)}return e}return d(b)},B=a(e[17][12],ab,Y);if(B){var
ac=B[1],ad=c(e[17][6],B[2]),H=c(t[11][1],12),X=function(b){try{var
c=a(t[11][7],H,b);return c}catch(a){a=z(a);if(a===ak){k(t[11][5],H,b,1);return 0}throw a}},I=function(b){if(b){var
c=b[1],d=I(b[2]),e=d[2],f=d[1];if(!a(t[5],c,t[3]))if(!X(c))return[0,[0,c,f],[0,0,e]];return[0,f,[0,1,e]]}return ei},J=I(ad),Q=J[2],ae=J[1],V=c(a9[87],0),r=aJ(t[10],aa,g,ae,ac),W=function(d){var
b=c(a9[87],0)-V;return a(M[4],eh,b)};c(j[5],W);c(j[6],eo);var
af=c(e[17][6],r[3]),D=[0,r[4],af],m=c(e[17][1],D),n=x(m,0),G=function(b){if(!(m<=b))if(!f(n,b)[b+1]){f(n,b)[b+1]=1;var
c=a(e[17][5],D,b),d=function(e,d){var
c=1-a(t[5],d,t[3]);return c?G((e+b|0)+1|0):c};return a(e[17][80],d,c)}return 0};G(0);var
R=function(b,c){function
d(a,d){if(m<=((b+a|0)+1|0))return 1;var
c=(b+a|0)+1|0;return f(n,c)[c+1]}return f(n,b)[b+1]?[0,a(e[17][73],d,c)]:0},b=a(aw[65],R,D),S=function(f){var
d=m-c(e[17][1],b)|0;return a(M[4],ef,d)};c(j[5],S);var
U=function(f){var
d=c(e[17][1],b);return a(M[4],eg,d)};c(j[5],U);if(b){var
ag=b[2],ai=a_(Q,b[1]),aj=aD(g,a(t[2],g,r[1])),al=[6,0,r[2]],am=c(e[17][6],ag),an=function(a){return a_(Q,a)},ao=a(e[17][12],an,am),ap=function(a){return aD(g,a)},aq=c(e[17][12],ap),ar=a(e[17][12],aq,ao),as=function(a){return aD(g,a)},at=a(e[17][12],as,ai),au=function(b){return a(M[4],ep,P)};c(j[5],au);c(j[6],eq);var
ax=a(e[18],[0,[0,aj,[0,al,at]],0],ar),ay=function(b){return a(e[17][12],F,b)},az=a(e[17][12],ay,ax),aB=s(a4,[0,aC(0),0]),aE=function(d,b){var
a=p(h),f=0,g=0,j=q===a?h[1]:i===a?c(o[2],h):h,l=s(a4,[0,s(aA,[0,j,g]),f]);function
m(d,b){var
a=p(h),e=[0,d,[0,b,0]],f=0,g=q===a?h[1]:i===a?c(o[2],h):h;return s(a5,[0,s(aA,[0,g,f]),e])}var
n=[0,k(e[17][16],m,d,l),[0,b,0]];return s(a5,[0,aC(0),n])},aF=k(e[17][16],aE,az,aB);c(j[6],eC);return aF}throw[0,K,er]}throw[0,K,es]}var
d=1,E=0}else
var
E=1;if(E)var
d=1}else
var
d=1}else
var
d=1}else
var
d=0}throw[0,K,ek]}function
eD(a){var
b=[0,s(a3,[0,aC(0),0]),a],d=[0,u(eG,eF,eE),b],e=c(n[7][17],d),f=[0,c(n[8][3],e),0];return c(n[111][65],f)}var
aE=[0,function(a){try{var
e=eB(a),b=e}catch(a){a=z(a);if(a!==w[3])throw a;var
d=c(ah[3],eH),b=k(T[6],0,0,d)}return eD(b)}];R(219,aE,"Nsatz_plugin.Nsatz");c(eI[7][1],ab);function
eJ(f){var
b=[31,a(eL[9],0,[0,[0,[0,ab,eK],0],0])],d=[28,[0,[0,[0,c(n[5][1][7],eM)],0],b]],e=c(n[5][1][6],eN);return aJ(aF[6][4],1,0,e,d)}function
eO(a){if(a)if(!a[2]){var
b=a[1];return function(d){var
a=c(n[8][52][1],b);return c(aE[1],a)}}return c(d[2],eP)}var
eR=[0,[0,c(n[5][1][7],eQ)],0],eS=[0,a(aF[12][31],eR,eO)];k(aF[6][9],0,[0,ab,eT],eS);a(n[76][1],eJ,ab);var
a$=[0,ab];R(223,a$,"Nsatz_plugin.G_nsatz");R(224,[0,j,as,w,aE,a$],"Nsatz_plugin");return});
