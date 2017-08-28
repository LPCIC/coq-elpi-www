(function(eO){"use strict";var
av=".",m=112,bB="cc",bF="$l",bw="  [",bt=3901498,bu=" : ",bE=-431191102,bA="$n",aR=-912009552,R=250,Y="Init",J=246,ay="congruence",bz="[",ax="plugins/cc/g_congruence.ml4",A=111,aw="Extension: cannot occur",bs="A",bv=113,bD="with",az="]",br=915186972,by=888453194,X="Logic",bx=" and ",bq=-318868643,bC="Heq",au="f_equal",at=15500,aQ=1e3,s=eO.jsoo_runtime,l=s.caml_check_bound,ai=s.caml_int_compare,as=s.caml_make_vect,e=s.caml_new_string,Q=s.caml_obj_tag,aj=s.caml_register_global,n=s.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):s.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):s.caml_call_gen(a,[b,c])}function
i(a,b,c,d){return a.length==3?a(b,c,d):s.caml_call_gen(a,[b,c,d])}function
x(a,b,c,d,e){return a.length==4?a(b,c,d,e):s.caml_call_gen(a,[b,c,d,e])}function
eL(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):s.caml_call_gen(a,[b,c,d,e,f])}function
eN(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):s.caml_call_gen(a,[b,c,d,e,f,g])}function
aP(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):s.caml_call_gen(a,[b,c,d,e,f,g,h])}function
eM(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):s.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}var
q=s.caml_get_global_data(),O=e("cc_plugin"),b=q.API,Z=q.Hashset,h=q.Util,o=q.Not_found,g=q.Int,r=q.Queue,d=q.Pp,aI=q.Control,z=q.CErrors,$=q.Assert_failure,aB=q.Feedback,ac=q.Hashtbl,F=q.Pervasives,N=q.CamlinternalLazy,bl=q.CAst,ah=q.Loc,P=q.Ltac_plugin,ab=q.Genarg,bo=q.Grammar_API,aA=[0,0],c8=e("Out of depth ... "),c7=e("Out of instances ... "),c9=e("First run was incomplete, completing ... "),c6=e("Executing ... "),c5=e("Running E-matching algorithm ... "),c4=e("paf_of_patt: pattern is trivial"),c2=e("wrong incomplete class."),cW=e(" ... "),cX=e(" = "),cY=e("Checking if "),cV=e("Yes"),cZ=e("No"),cS=e(av),cT=e("Processing mark for term "),cP=e("weird error in injection subterms merge."),cQ=[0,e("add_pacs")],cN=e(av),cO=e("Updating term "),cK=e(av),cL=e(bx),cM=e("Merging "),cG=e(av),cH=e(bx),cI=e("Linking "),cF=[0,e("plugins/cc/ccalgo.ml"),652,2],cy=e(az),cz=e(" <> "),cA=e(bu),cB=e(bw),cC=e("Adding new disequality, depth="),ct=e(az),cu=e(" == "),cv=e(bu),cw=e(bw),cx=e("Adding new equality, depth="),cs=e("discarding redundant (dis)equality"),co=e(az),cp=e(bz),cl=e(az),cm=e(":="),cn=e(bz),ck=e("incomplete matching."),ca=e("not a node."),cb=[0,e("subterms")],b3=e("not a constructor."),b4=[0,e("get_constructor")],bZ=e("not a representative."),b0=[0,e("get_representative")],bP=e("signature already entered."),bQ=[0,e("enter")],bH=[0,e("Congruence"),[0,e("Verbose"),0]],bI=e("Congruence Verbose"),b9=e("Ccalgo.Discriminable"),cd=e(bs),cf=e(bs),c0=e("_eps_"),c_=e("invalid cc transitivity."),c$=e("not enough args."),da=[0,e("nth_arg")],db=[0,1,20],dc=e("equal_proof "),dd=[0,1,20],de=e("edge_proof "),df=[0,1,20],dg=e("constr_proof "),di=e(","),dh=e("}"),dj=e("{"),dk=[0,1,20],dl=e("path_proof "),dm=[0,1,20],dn=e("congr_proof "),dp=[0,1,20],dq=e("ind_proof "),dL=[0,e("plugins/cc/cctac.ml"),251,9],dO=e("f"),dP=e("I don't know how to handle dependent equality"),ec=[0,0],d5=e("("),d6=e(")"),d1=[0,1],dZ=e("Goal solved, generating proof ..."),dY=e("Computation completed."),dX=e("Problem built, solving ..."),dW=e("Reading subgoal ..."),d0=[13,0,0,0],d2=e("Goal is solvable by congruence but some arguments are missing."),d3=e("  replacing metavariables by arbitrary terms."),d4=e(')",'),d7=e('"congruence with ('),d8=e("  Try "),d9=e("Incomplete"),d_=e("congruence failed"),dV=e(bC),dU=e("H"),dS=e("e"),dT=e("X"),dQ=e(bC),dM=[0,0],dN=[0,1],dK=e("t"),dr=e("CC"),ds=e(au),dt=[0,e(Y),[0,e(X),0]],du=e("eq_rect"),dv=[0,e(Y),[0,e(X),0]],dx=e("eq_refl"),dy=[0,e(Y),[0,e(X),0]],dz=e("eq_sym"),dA=[0,e(Y),[0,e(X),0]],dC=e("eq_trans"),dD=[0,e(Y),[0,e(X),0]],dE=e("eq"),dF=[0,e(Y),[0,e(X),0]],dG=e("False"),dH=[0,e(Y),[0,e(X),0]],d$=e("congruence failed."),eH=e(au),eI=e(au),eC=[0,e(ax),1,0],ey=[0,e(ax),1,0],ev=[0,e(ax),1,0],es=[0,e(ax),1,0],er=e(bF),et=[0,e(bD)],eu=e(bA),ew=[0,e(ay)],ex=e(bF),ez=[0,e(bD)],eA=[0,e(ay)],eB=e(bA),eD=[0,e(ay)],eE=[0,[0,e(ay)],0],eF=e(bB),el=e(aw),ej=e(aw),eh=e(aw),ef=e(aw),ep=e(bB),eK=e(au),en=q.Array,S=5;function
v(d){var
b=aA[1];if(b){var
e=a(d,0);return c(aB[10],0,e)}return b}function
bG(a){aA[1]=a;return 0}var
bJ=[0,0,bI,bH,function(a){return aA[1]},bG];c(b[42][1],0,bJ);var
bK=g[1],bL=[0,function(b,a){return b===a?1:0},bK],ak=a(ac[18],bL);function
bM(b,a){var
c=b[1]===a[1]?1:0,d=a[2],e=b[2],f=c?e===d?1:0:c;return f}var
bN=[0,bM,function(b){var
d=b[1],e=a(g[1],b[2]),f=a(g[1],d);return c(Z[2][1],f,e)}],ad=a(ac[18],bN);function
bO(f,e,b){if(c(ad[10],b[1],e)){var
g=a(d[3],bP);i(z[3],0,bQ,g)}else
i(ad[9],b[1],e,f);return i(ak[9],b[2],f,e)}function
bR(b,a){return c(ad[7],a[1],b)}function
bS(a,b){try{var
d=c(ak[7],a[2],b);c(ad[6],a[1],d);var
e=c(ak[6],a[2],b);return e}catch(a){a=n(a);if(a===o)return 0;throw a}}function
bT(b,a){function
d(a){return bS(b,a)}return c(g[2][13],d,a)}var
bU=[0,function(b,a){var
c=ai(b[1],a[1]),e=a[3],f=a[2],g=b[3],j=b[2];if(0===c){var
d=ai(j,f);return 0===d?i(h[17][45],ai,g,e):d}return c}],bV=[0,function(b,a){var
c=ai(b[1],a[1]),d=a[2],e=b[2];return 0===c?ai(e,d):c}],k=a(h[21][1],bU),j=a(h[21][1],bV);function
aS(b,a){var
c=0===b[0]?0===b[1]?0===a[0]?0===a[1]?1:0:0:0===a[0]?0===a[1]?0:1:0:0===a[0]?0:1;return c?1:0}function
aC(m,l){var
d=m,a=l;for(;;){switch(d[0]){case
0:if(0===a[0])return c(b[7][71],d[1],a[1]);break;case
1:if(1===a[0]){var
n=a[2],o=d[2],g=aS(d[1],a[1]);return g?aS(o,n):g}break;case
2:if(2===a[0])return c(b[5][1][1],d[1],a[1]);break;case
3:if(3===a[0]){var
p=a[2],q=d[2],h=aC(d[1],a[1]);if(h){var
d=q,a=p;continue}return h}break;default:if(4===a[0]){var
e=a[1],f=d[1],i=f[2]===e[2]?1:0,r=e[3],s=e[1][1],t=f[3],u=f[1][1];if(i){var
j=t===r?1:0;if(j)return c(b[5][12],u,s);var
k=j}else
var
k=i;return k}}return 0}}function
aD(d){switch(d[0]){case
0:var
f=a(b[7][61],d[1]);return c(Z[2][1],1,f);case
1:var
g=d[1],h=a(b[4][2],d[2]),j=a(b[4][2],g);return i(Z[2][3],2,j,h);case
2:var
k=a(b[5][1][3],d[1]);return c(Z[2][1],3,k);case
3:var
l=d[1],m=aD(d[2]),n=aD(l);return i(Z[2][3],4,n,m);default:var
e=d[1],o=e[3],p=e[2],q=a(b[5][13],e[1][1]);return x(Z[2][4],5,q,p,o)}}var
B=a(ac[18],[0,b[7][71],b[7][61]]),T=a(ac[18],[0,aC,aD]),aE=a(ac[18],[0,b[5][1][1],b[5][1][3]]),bW=[0,a(b[7][5],F[8])],aT=[0,[1,F[8],[0,F[8],F[8],0]],F[8],k[1],0,bW];function
aU(c){var
b=a(T[1],S);return[0,S,0,as(5,aT),a(B[1],S),0,b]}function
bX(e,d){var
f=a(B[1],S),h=a(aE[1],S),i=g[2][1],j=a(r[2],0),k=a(r[2],0),l=g[2][1],b=a(ak[1],S),c=[0,a(ad[1],S),b];return[0,aU(0),c,l,k,j,0,0,i,h,e,0,f,d]}function
bY(a){return a[1]}function
u(e,g){var
b=0,a=g;for(;;){var
d=l(e[3],a)[a+1][2];if(0<=d){var
b=[0,a,b],a=d;continue}var
f=function(b){l(e[3],b)[b+1][2]=a;return 0};c(h[17][11],f,b);return a}}function
G(e,b){var
c=l(e[3],b)[b+1][1];if(0===c[0])return c[1];var
f=a(d[3],bZ);return i(z[3],0,b0,f)}function
aF(b,a){return l(b[3],a)[a+1][3]}function
b1(d,b,a){var
e=aF(d,b);return c(k[22],a,e)}function
b2(d,f,b){var
a=f;for(;;)try{var
g=aF(d,a),h=c(k[22],b,g);return h}catch(b){b=n(b);if(b===o){var
e=l(d[3],a)[a+1][1];if(0===e[0])throw o;var
a=e[1];continue}throw b}}function
aV(e,b){var
c=l(e[3],b)[b+1][5];if(4===c[0])return c[1];var
f=a(d[3],b3);return i(z[3],0,b4,f)}function
aW(b,a){return G(b,a)[1]}function
b5(a){return a[4]}function
b6(a){return a[5]}function
b7(e,d,b){var
a=G(e,d);a[1]=a[1]+1|0;a[2]=c(g[2][4],b,a[2]);a[3]=c(g[2][4],b,a[3]);return 0}function
b8(e,d,b){var
a=G(e,d);a[1]=a[1]+1|0;a[3]=c(g[2][4],b,a[3]);return 0}var
aX=[248,b9,s.caml_fresh_oo_id(0)];function
b_(b){var
c=a(h[17][4],b[3]);return[0,b[1],b[2]+1|0,c]}function
b$(a,b,e){try{var
k=c(j[22],b,a[6]),d=k}catch(a){a=n(a);if(a!==o)throw a;var
d=g[2][1]}var
f=a[6],h=c(g[2][4],e,d);a[6]=i(j[4],b,h,f);return 0}function
_(b,a){return l(b[3],a)[a+1][5]}function
aG(f,b){var
c=l(f[3],b)[b+1][4];if(c){var
e=c[1];return[0,e[1],e[2]]}var
g=a(d[3],ca);return i(z[3],0,cb,g)}function
aY(a,c){var
b=aG(a,c),d=b[1],e=u(a,b[2]);return[0,u(a,d),e]}function
cc(a){var
b=a[2],c=b+1|0;if(c===a[1]){var
d=((a[1]*3|0)/2|0)+1|0,e=as(d,aT);a[1]=d;eL(h[19][10],a[3],0,e,0,b);a[3]=e}a[2]=c;return b}function
al(a){return[0,0,g[2][1],g[2][1],0,a,j[1]]}var
ce=[0,a(b[5][1][6],cd)],cg=[0,a(b[5][1][6],cf)],ch=a(b[7][5],2),ci=[0,0,a(b[7][5],2),ch],cj=a(b[7][14],ci);function
aZ(g,d){var
h=a(b[7][1],g);if(10===h[0]){var
e=h[1],i=a(b[50][1],0);if(c(b[13][11],e[1],i)){var
f=c(b[5][10][1],e[1],0);if(d){var
j=d[2],k=a(b[7][19],[0,f,d[1]]);return c(b[7][2],k,j)}var
l=a(b[50][1],0),m=c(b[18][3],l,e),n=a(b[50][1],0),o=c(b[13][12],f,n)[2]+1|0,p=c(b[7][36],o,m)[1],q=[0,f,a(b[7][5],1)],r=a(b[7][19],q);return c(b[7][62],r,p)}}return c(b[7][2],g,d)}function
C(d){switch(d[0]){case
0:return aZ(d[1],0);case
1:var
j=d[1],g=[0,cg,a(b[7][9],d[2]),cj],h=a(b[7][15],g),i=[0,ce,a(b[7][9],j),h];return a(b[7][15],i);case
2:return a(b[7][6],d[1]);case
3:var
k=d[1],f=[0,C(d[2]),0],e=k;for(;;){if(3===e[0]){var
l=e[1],f=[0,C(e[2]),f],e=l;continue}if(0===e[0])return aZ(e[1],f);var
m=C(e);return c(b[7][2],m,f)}default:return a(b[7][22],d[1][1])}}function
a0(o,n){var
f=a(b[8][52][1],n);function
e(c){return a0(o,a(b[8][3],c))}var
d=a(b[7][1],f);switch(d[0]){case
6:var
p=d[2],q=d[1],r=e(d[3]),s=[0,q,e(p),r];return a(b[7][14],s);case
7:var
t=d[2],u=d[1],v=e(d[3]),w=[0,u,e(t),v];return a(b[7][15],w);case
8:var
x=d[3],y=d[2],z=d[1],A=e(d[4]),B=e(x),C=[0,z,e(y),B,A];return a(b[7][16],C);case
9:var
D=d[1],E=c(h[19][51],e,d[2]),F=[0,e(D),E];return a(b[7][17],F);case
10:var
g=d[1],G=g[2],H=a(b[5][8][6],g[1]),I=[0,a(b[5][8][2],H),G];return a(b[7][68],I);case
11:var
i=d[1],j=i[1],J=i[2],K=j[2],L=a(b[5][9][5],j[1]),M=[0,[0,a(b[5][9][1],L),K],J];return a(b[7][67],M);case
12:var
k=d[1],l=k[1],m=l[1],N=k[2],O=l[2],P=m[2],Q=a(b[5][9][5],m[1]),R=[0,[0,[0,a(b[5][9][1],Q),P],O],N];return a(b[7][22],R);case
16:var
S=d[2],T=d[1],U=function(c){var
d=a(b[5][8][6],c);return a(b[5][8][2],d)},V=c(b[5][10][2],U,T),W=[0,V,e(S)];return a(b[7][19],W);default:return f}}function
aH(b,a){if(0===a[0]){var
d=a[2],e=a[1],f=function(c,a){return[3,a,aH(b,c)]};return i(h[17][16],f,d,e)}var
c=a[1]-1|0;return l(b,c)[c+1]}function
H(f,e){var
g=a(d[3],cl),h=C(_(f,e)),i=a(b[8][3],h),j=a(b[84][5],i),k=a(d[3],cm),l=a(d[16],e),m=a(d[3],cn),n=c(d[12],m,l),o=c(d[12],n,k),p=c(d[12],o,j);return c(d[12],p,g)}function
am(e){var
f=a(d[3],co),g=C(e),h=a(b[8][3],g),i=a(b[84][5],h),j=a(d[3],cp),k=c(d[12],j,i);return c(d[12],k,f)}function
K(e,f){var
h=e[1];try{var
m=c(T[7],h[6],f);return m}catch(m){m=n(m);if(m===o){var
d=cc(h),v=C(f),w=a(b[8][3],v),x=c(b[78][3],e[13],w),j=a0(a(b[78][10],e[13]),x);switch(f[0]){case
2:var
D=k[1],p=[0,[0,al(j)],-1,D,0,f];break;case
3:var
E=f[2],s=K(e,f[1]),t=K(e,E);b7(h,u(h,s),d);b8(h,u(h,t),d);e[3]=c(g[2][4],d,e[3]);var
F=k[1],p=[0,[0,al(j)],-1,F,[0,[0,s,t]],f];break;case
4:var
G=f[1];c(r[3],[0,d,[0,[0,d,0]]],e[5]);c(r[3],[0,d,[1,[0,d,G[2],0]]],e[5]);var
H=k[1],p=[0,[0,al(j)],-1,H,0,f];break;default:c(r[3],[0,d,[0,[0,d,0]]],e[5]);var
y=k[1],p=[0,[0,al(j)],-1,y,0,f]}l(h[3],d)[d+1]=p;i(T[5],h[6],f,d);try{var
A=c(B[7],e[12],j),q=A}catch(a){a=n(a);if(a!==o)throw a;var
q=g[2][1]}var
z=c(g[2][4],d,q);i(B[9],e[12],j,z);return d}throw m}}function
a1(a,e,d,b){var
f=K(a,d),g=K(a,b);c(r[3],[0,f,g,[0,e,0]],a[4]);return i(B[5],a[1][4],e,[0,d,b])}function
a2(a,d,c,b){var
e=K(a,c),f=K(a,b);a[6]=[0,[0,e,f,d],a[6]];return 0}function
cq(b,d,c,a){b[7]=[0,[0,d,c,a[1],a[3],a[2],a[5],a[4]],b[7]];return 0}function
cr(a,d,b){try{var
e=a[1],f=function(a){return u(e,a)},g=c(h[19][15],f,b),j=c(aE[8],a[9],d),k=function(b){function
c(c,b){return c===u(a[1],b)?1:0}return i(h[19][31],c,g,b)},l=c(h[17][23],k,j);return l}catch(a){a=n(a);if(a===o)return 0;throw a}}function
cD(e,b,a,d){var
c=l(e[3],b)[b+1];c[1]=[1,a,d];c[2]=a;return 0}function
a3(g,f,e){var
a=f,b=e;for(;;){var
c=l(g[3],a)[a+1][1];if(0===c[0])return b;var
d=c[1],h=[0,[0,[0,a,d],c[2]],b],a=d,b=h;continue}}function
cE(c,i,h){var
o=u(c,h);if(u(c,i)===o){var
p=a3(c,h,0),a=[0,a3(c,i,0),p];for(;;){var
b=a[1];if(b){var
d=a[2];if(d){var
f=d[1][1],g=b[1][1],e=g[1]===f[1]?1:0,m=d[2],n=b[2],j=f[2],k=g[2],l=e?k===j?1:0:e;if(l){var
a=[0,n,m];continue}return a}return[0,b,0]}return[0,0,a[2]]}}throw[0,$,cF]}function
a4(b,h,p,x){v(function(n){var
e=a(d[3],cG),f=H(b[1],p),g=a(d[3],cH),i=H(b[1],h),j=a(d[3],cI),k=c(d[12],j,i),l=c(d[12],k,g),m=c(d[12],l,f);return c(d[12],m,e)});var
m=G(b[1],h),e=G(b[1],p);cD(b[1],h,p,x);try{var
J=c(B[7],b[12],m[5]),t=J}catch(a){a=n(a);if(a!==o)throw a;var
t=g[2][1]}var
y=c(g[2][6],h,t);i(B[9],b[12],m[5],y);var
u=c(g[2][7],m[3],e[3]);e[1]=a(g[2][20],u);e[3]=u;e[2]=c(g[2][7],m[2],e[2]);bT(b[2],m[3]);b[3]=c(g[2][7],b[3],m[3]);var
z=l(b[1][3],h)[h+1][3];function
A(d,a){return c(r[3],[0,a,[1,d]],b[5])}c(k[10],A,z);var
C=m[6];function
D(d){function
e(a){return c(r[3],[0,a,[0,d]],b[5])}return a(g[2][13],e)}c(j[10],D,C);var
q=m[4],f=e[4];if(typeof
q==="number"){if(0===q)return 0;if(typeof
f==="number"){if(0===f){e[4]=1;return 0}}else
if(0===f[0]){b[8]=c(g[2][6],p,b[8]);e[4]=1;return 0}}else
if(0===q[0]){var
E=q[1];if(typeof
f==="number"){if(0===f){e[4]=[0,E];b[8]=c(g[2][6],h,b[8]);b[8]=c(g[2][4],p,b[8]);return 0}var
w=0}else
var
w=1===f[0]?1:0;if(!w){b[8]=c(g[2][6],h,b[8]);return 0}}else{var
s=q[1],F=s[2],I=s[1];if(typeof
f==="number"){if(0===f){e[4]=[1,s];return 0}}else
if(0!==f[0])return c(r[3],[0,I,[1,F]],b[5])}return 0}function
cJ(e,f){v(function(n){var
b=a(d[3],cK),g=H(f[1],e[2]),h=a(d[3],cL),i=H(f[1],e[1]),j=a(d[3],cM),k=c(d[12],j,i),l=c(d[12],k,h),m=c(d[12],l,g);return c(d[12],m,b)});var
g=f[1],h=u(g,e[1]),i=u(g,e[2]),j=1-(h===i?1:0);if(j){var
l=aW(g,i);if(aW(g,h)<l)return a4(f,h,i,e);var
b=e[3],k=typeof
b==="number"?0:0===b[0]?[0,b[1],1-b[2]]:[1,b[3],b[4],b[1],b[2],b[5]];return a4(f,i,h,[0,e[2],e[1],k])}return j}function
cR(f,t,b){v(function(j){var
e=a(d[3],cS),g=H(b[1],f),h=a(d[3],cT),i=c(d[12],h,g);return c(d[12],i,e)});var
q=u(b[1],f),h=G(b[1],q);if(0===t[0]){b$(h,t[1],f);b[3]=c(g[2][7],h[2],b[3]);return 0}var
e=t[1],s=l(b[1][3],q)[q+1];if(1-c(k[3],e,s[3]))s[3]=i(k[4],e,f,s[3]);var
j=h[4];if(typeof
j==="number"){if(0===j)return 0===e[2]?(h[4]=[1,[0,f,e]],0):(b[3]=c(g[2][7],h[2],b[3]),h[4]=[0,e],b[8]=c(g[2][4],q,b[8]),0)}else
if(1===j[0]){var
w=j[1],m=w[2],x=w[1];if(e[1]===m[1]){var
A=aV(b[1],e[1]),p=A[3],o=m[3],n=e[3];for(;;){var
y=0<p?1:0;if(y){if(o)if(n){var
B=n[2],C=o[2];c(r[3],[0,o[1],n[1],[1,x,m,f,e,p]],b[4]);var
p=p-1|0,o=C,n=B;continue}var
D=a(d[3],cP);return i(z[3],0,cQ,D)}return y}}throw[0,aX,x,m,f,e]}b[3]=c(g[2][7],h[2],b[3]);return 0}function
cU(e){var
g=e[1];function
h(f){if(f){var
b=f[1],k=f[2],l=u(g,b[2]);if(u(g,b[1])===l)var
j=a(d[3],cV),i=[0,b];else
var
m=h(k),j=a(d[3],cZ),i=m;v(function(p){var
f=a(d[3],cW),g=H(e[1],b[2]),h=a(d[3],cX),i=H(e[1],b[1]),k=a(d[3],cY),l=c(d[12],k,i),m=c(d[12],l,h),n=c(d[12],m,g),o=c(d[12],n,f);return c(d[12],o,j)});return i}return 0}return h(e[6])}var
c1=a(b[5][1][6],c0);function
c3(e){var
f=e[8];function
j(p){var
j=G(e[1],p)[4];if(typeof
j!=="number"&&0===j[0]){var
f=j[1],u=C(_(e[1],f[1])),v=a(b[8][3],u),w=c(b[78][3],e[13],v),x=a(b[8][52][1],w),y=f[3],A=function(a){return C(_(e[1],a))},B=c(h[17][12],A,y),D=a(h[17][6],B),E=c(b[7][64],x,D),F=f[2],l=_(e[1],p),n=E,k=F;for(;;){if(0<k){var
o=a(b[7][42],n),r=o[3],s=o[2],g=c(b[78][4],c1,e[13]),m=e[13];e[13]=i(b[31][2][1],m[2],m[1],[0,[0,g,s],0]);var
t=[0,a(b[7][6],g),0],l=[3,l,[2,g]],n=c(b[16][1],t,r),k=k-1|0;continue}e[1][5]=[0,f,e[1][5]];K(e,l);return 0}}var
q=a(d[3],c2);return i(z[3],0,0,q)}return c(g[2][13],j,f)}function
a5(b){var
a=[0,j[1]],f=b[1],d=b[1][3];function
e(b,h){var
d=b<f[2]?1:0;if(d){var
e=h[1];if(0===e[0]){var
k=e[1][6],l=function(d,l){try{var
k=c(j[22],d,a[1]),e=k}catch(a){a=n(a);if(a!==o)throw a;var
e=g[2][1]}var
f=a[1],h=c(g[2][4],b,e);a[1]=i(j[4],d,h,f);return 0};return c(j[10],l,k)}return 0}return d}c(h[19][14],e,d);return a[1]}function
a6(t,s,d){var
b=a(h[22][9],d),p=b[3];if(p){var
e=p[2],v=p[1],f=v[2],i=v[1],k=t[1];if(0===i[0]){var
m=i[2],q=i[1];if(m){var
A=m[2],B=m[1];try{var
C=c(T[7],k[6],q),D=[0,C,a(h[17][1],m)],E=G(k,f)[6],F=c(j[22],D,E),H=function(g){var
f=aY(t[1],g),i=[0,[0,[0,q,A],f[1]],[0,[0,B,f[2]],e]],j=b[2],k=[0,a(h[19][8],b[1]),j,i];return c(h[22][3],k,d)},I=c(g[2][13],H,F);return I}catch(a){a=n(a);if(a===o)return 0;throw a}}try{var
w=u(k,c(T[7],k[6],q))===f?1:0,J=w?c(h[22][3],[0,b[1],b[2],e],d):w;return J}catch(a){a=n(a);if(a===o)return 0;throw a}}var
r=i[1],x=r-1|0;if(0<=l(b[1],x)[x+1]){var
y=r-1|0;return l(b[1],y)[y+1]===f?c(h[22][3],[0,b[1],b[2],e],d):0}var
z=r-1|0;l(b[1],z)[z+1]=f;return c(h[22][3],[0,b[1],b[2],e],d)}s[1]=[0,[0,b[2],b[1]],s[1]];return 0}function
aJ(d,b){if(0===b[0]){var
e=b[1],f=a(h[17][1],b[2]);return[0,c(T[7],d,e),f]}return c(z[9],0,c4)}function
a7(b){var
l=b[1][6],f=a(h[22][2],0),m=a5(b);function
d(a){var
i=a[5];if(typeof
i==="number")if(0===i)try{var
x=aJ(l,a[4]),y=c(j[22],x,m),d=y}catch(a){a=n(a);if(a!==o)throw a;var
d=g[2][1]}else
var
d=g[2][1];else{var
z=i[1];try{var
A=c(B[7],b[12],z),q=A}catch(a){a=n(a);if(a!==o)throw a;var
q=g[2][1]}var
d=q}function
r(b){return c(h[22][3],[0,as(a[3],-1),a,[0,[0,a[4],b],0]],f)}c(g[2][13],r,d);var
k=a[7];if(typeof
k==="number")if(0===k)try{var
t=aJ(l,a[6]),u=c(j[22],t,m),e=u}catch(a){a=n(a);if(a!==o)throw a;var
e=g[2][1]}else
var
e=g[2][1];else{var
v=k[1];try{var
w=c(B[7],b[12],v),p=w}catch(a){a=n(a);if(a!==o)throw a;var
p=g[2][1]}var
e=p}function
s(b){return c(h[22][3],[0,as(a[3],-1),a,[0,[0,a[6],b],0]],f)}return c(g[2][13],s,e)}c(h[17][11],d,b[7]);return f}function
a8(b){var
c=[0,0],e=a7(b);v(function(b){return a(d[3],c5)});try{for(;;){a(aI[2],0);a6(b,c,e);continue}}catch(a){a=n(a);if(a===h[22][1])return c[1];throw a}}function
aK(w,e){v(function(b){return a(d[3],c6)});try{for(;;){a(aI[2],0);try{cJ(a(r[5],e[4]),e);var
K=1,l=K}catch(b){b=n(b);if(b!==r[1])throw b;try{var
u=a(r[5],e[5]);cR(u[1],u[2],e);var
J=1,l=J}catch(b){b=n(b);if(b!==r[1])throw b;try{var
f=a(g[2][24],e[3]);e[3]=c(g[2][6],f,e[3]);v(function(i){return function(j){var
b=a(d[3],cN),f=H(e[1],i),g=a(d[3],cO),h=c(d[12],g,f);return c(d[12],h,b)}}(f));var
p=aY(e[1],f),q=p[1],y=aG(e[1],f)[2],s=G(e[1],q),t=s[4],V=typeof
t==="number"?0:0===t[0]?(s[4]=1,e[8]=c(g[2][6],q,e[8]),1):0,A=aF(e[1],q),B=function(b,d){return function(a,f){return c(r[3],[0,d,[1,[0,a[1],a[2]-1|0,[0,b,a[3]]]]],e[5])}}(y,f);c(k[10],B,A);var
D=s[6],E=function(b){return function(a,d){return c(r[3],[0,b,[0,[0,a[1],a[2]+1|0]]],e[5])}}(f);c(j[10],E,D);try{var
F=bR(p,e[2]);c(r[3],[0,f,F,0],e[4])}catch(a){a=n(a);if(a!==o)throw a;bO(f,p,e[2])}var
I=1,l=I}catch(a){a=n(a);if(a!==o)throw a;var
l=0}}}if(l)continue;var
x=cU(e);if(x)var
Q=x[1],R=w?[1,Q]:0,m=[0,R];else
if(a(g[2][2],e[8]))if(0<e[10]){var
S=a8(e),T=function(q){var
m=q[2],f=q[1];a(aI[2],0);var
o=0<e[10]?1:0;if(o){if(cr(e,f[1],m))return v(function(b){return a(d[3],cs)});i(aE[5],e[9],f[1],m);var
s=e[1],r=function(b){try{var
e=_(s,b);return e}catch(b){b=n(b);if(a(z[20],b)){var
c=a(d[3],ck);return i(z[3],0,0,c)}throw b}},l=c(h[19][15],r,m),t=a(b[7][6],f[1]),p=c(h[19][15],C,l);a(h[19][40],p);var
g=a(b[7][17],[0,t,p]),j=aH(l,f[4]),k=aH(l,f[6]);e[11]=1;e[10]=e[10]-1|0;return f[2]?(v(function(B){var
f=a(d[3],ct),h=am(k),i=a(d[3],cu),l=am(j),m=a(d[3],cv),n=a(b[8][3],g),o=a(b[84][5],n),p=a(d[3],cw),q=c(d[12],p,o),r=c(d[12],q,m),s=c(d[12],r,l),t=c(d[12],s,i),u=c(d[12],t,h),v=c(d[12],u,f),w=a(d[5],0),x=a(d[16],e[10]),y=a(d[3],cx),z=c(d[12],y,x),A=c(d[12],z,w);return c(d[12],A,v)}),a1(e,g,j,k)):(v(function(B){var
f=a(d[3],cy),h=am(k),i=a(d[3],cz),l=am(j),m=a(d[3],cA),n=a(b[8][3],g),o=a(b[84][5],n),p=a(d[3],cB),q=c(d[12],p,o),r=c(d[12],q,m),s=c(d[12],r,l),t=c(d[12],s,i),u=c(d[12],t,h),v=c(d[12],u,f),w=a(d[5],0),x=a(d[16],e[10]),y=a(d[3],cC),z=c(d[12],y,x),A=c(d[12],z,w);return c(d[12],A,v)}),a2(e,[0,g],j,k))}return o};c(h[17][11],T,S);var
U=e[11]?(e[11]=0,aK(1,e)):(v(function(b){return a(d[3],c7)}),0),m=U}else{v(function(b){return a(d[3],c8)});var
m=0}else{v(function(b){return a(d[3],c9)});c3(e);var
m=aK(0,e)}return m}}catch(a){a=n(a);if(a[1]===aX){var
L=a[5],M=a[4],N=a[3],O=a[2],P=w?[0,[0,O,N,M,L]]:0;return[0,P]}throw a}}var
f=[0,[0,j[1],j[2],j[3],j[4],j[5],j[6],j[7],j[8],j[9],j[10],j[11],j[12],j[13],j[14],j[15],j[16],j[17],j[18],j[19],j[20],j[21],j[22],j[23],j[24]],[0,k[1],k[2],k[3],k[4],k[5],k[6],k[7],k[8],k[9],k[10],k[11],k[12],k[13],k[14],k[15],k[16],k[17],k[18],k[19],k[20],k[21],k[22],k[23],k[24]],B,T,aC,C,v,bY,b5,b6,bX,K,a1,a2,cq,b_,u,b1,b2,_,aV,aG,cE,a5,a6,a7,aJ,a8,aK,H,aU];aj(159,f,"Cc_plugin.Ccalgo");function
ae(a){return[0,a,a,[2,a]]}function
aa(b,a){var
c=b[3],d=a[3];if(2===c[0])if(2===d[0])return ae([3,c[1],d[1]]);return[0,[3,b[1],a[1]],[3,b[2],a[2]],[4,b,a]]}function
w(o,n){var
e=o,b=n;for(;;){var
g=e[3],h=b[3];switch(g[0]){case
2:return b;case
4:var
l=g[2],m=g[1];switch(h[0]){case
2:var
j=0;break;case
3:var
k=h[1][3];if(4===k[0]){var
r=h[2],s=k[1],t=w(l,k[2]),e=aa(w(m,s),t),b=r;continue}var
j=1;break;case
4:var
u=h[1],v=w(l,h[2]);return aa(w(m,u),v);default:var
j=1}break;default:var
j=0}if(!j){if(2===h[0])return e;if(3===g[0]){var
q=g[1],e=q,b=w(g[2],b);continue}}if(c(f[5],e[2],b[1]))return[0,e[1],b[2],[3,e,b]];var
p=a(d[3],c_);return i(z[3],0,0,p)}}function
I(b){var
a=b[3];switch(a[0]){case
0:return[0,b[2],b[1],[1,a[1]]];case
1:return[0,b[2],b[1],[0,a[1]]];case
2:return b;case
3:var
c=a[2],d=I(a[1]);return w(I(c),d);case
4:var
e=a[1],f=I(a[2]);return aa(I(e),f);default:var
g=a[4],h=a[3],i=a[2],j=[5,I(a[1]),i,h,g];return[0,b[2],b[1],j]}}function
a9(d,a){var
b=c(f[3][7],d,a);return[0,b[1],b[2],[0,a]]}function
a_(d,a){var
b=c(f[3][7],d,a);return[0,b[2],b[1],[1,a]]}function
a$(f,e){var
b=f,c=e;for(;;){if(3===b[0]){var
h=b[2],j=b[1];if(0<c){var
b=j,c=c-1|0;continue}return h}var
g=a(d[3],c$);return i(z[3],0,da,g)}}function
ba(c,d,b,a){var
e=a$(c[2],b-a|0);return[0,a$(c[1],b-a|0),e,[5,c,d,b,a]]}function
L(b,e,g){function
j(n){var
h=c(f[30],b,g),i=a(d[4],db),j=c(f[30],b,e),k=a(d[3],dc),l=c(d[12],k,j),m=c(d[12],l,i);return c(d[12],m,h)}a(f[7],j);if(e===g)return ae(c(f[20],b,e));var
h=i(f[23],b,e,g),k=h[1],l=I(an(b,g,h[2]));return w(an(b,e,k),l)}function
bb(b,i){var
g=i[2],j=i[1],k=j[2],l=j[1];function
p(n){var
e=c(f[30],b,k),g=a(d[4],dd),h=c(f[30],b,l),i=a(d[3],de),j=c(d[12],i,h),m=c(d[12],j,g);return c(d[12],m,e)}a(f[7],p);var
q=L(b,l,g[1]),r=I(L(b,k,g[2])),e=g[3];if(typeof
e==="number")var
h=bc(b,g[1],g[2]);else
if(0===e[0])var
m=e[1],s=e[2]?a_(a(f[9],b),m):a9(a(f[9],b),m),h=s;else
var
n=e[2],t=e[5],u=aM(b,e[1],n,e[3],e[4]),o=c(f[21],b,n[1]),h=ba(u,o[1],o[3],t);return w(w(q,h),r)}function
aL(b,g,e){function
l(k){var
e=a(d[4],df),h=c(f[30],b,g),i=a(d[3],dg),j=c(d[12],i,h);return c(d[12],j,e)}a(f[7],l);var
h=i(f[19],b,g,e),j=L(b,g,h);if(0===e[3])return j;var
m=a(f[16],e),k=c(f[22],b,h),n=k[1],o=c(f[20],b,k[2]),p=aL(b,n,m);return w(j,aa(p,ae(o)))}function
an(e,g,b){function
j(u){var
h=a(d[3],dh);function
j(b){return a(d[16],b[1][2])}function
k(b){return a(d[3],di)}var
l=i(d[38],k,j,b),m=a(d[3],dj),n=a(d[4],dk),o=c(f[30],e,g),p=a(d[3],dl),q=c(d[12],p,o),r=c(d[12],q,n),s=c(d[12],r,m),t=c(d[12],s,l);return c(d[12],t,h)}a(f[7],j);if(b){var
h=b[1],k=b[2],l=bb(e,h);return w(an(e,h[1][2],k),l)}return ae(c(f[20],e,g))}function
bc(b,g,e){function
j(n){var
h=c(f[30],b,e),i=a(d[4],dm),j=c(f[30],b,g),k=a(d[3],dn),l=c(d[12],k,j),m=c(d[12],l,i);return c(d[12],m,h)}a(f[7],j);var
h=c(f[22],b,g),k=h[2],l=h[1],i=c(f[22],b,e),m=i[1],n=L(b,k,i[2]);return aa(L(b,l,m),n)}function
aM(b,g,i,e,h){function
j(n){var
h=c(f[30],b,e),i=a(d[4],dp),j=c(f[30],b,g),k=a(d[3],dq),l=c(d[12],k,j),m=c(d[12],l,i);return c(d[12],m,h)}a(f[7],j);var
k=L(b,g,e),l=aL(b,g,i),m=w(k,aL(b,e,h));return w(I(l),m)}var
ao=[0,ae,aa,w,I,a9,a_,ba,L,bb,an,bc,aM,function(c,b){if(bq<=b[1]){var
a=b[2];return aM(c,a[1],a[2],a[3],a[4])}var
d=b[2];return L(c,d[1],d[2])}];aj(160,ao,"Cc_plugin.Ccproof");function
U(c,a){return[J,function(d){return i(b[71][35],dr,c,a)}]}var
aN=U(dt,ds),dw=U(dv,du),bd=U(dy,dx),dB=U(dA,dz),be=U(dD,dC),t=U(dF,dE),M=U(dH,dG);function
bf(d,c,a){return x(b[55][1],b[24][9],d,c,a)}function
ap(d,c,a){return x(b[55][1],b[24][6],d,c,a)}function
aq(d,c,a){return i(b[59][1],d,[0,c],a)}function
y(f,d,j){var
x=bf(f,d,j),e=c(b[8][4],d,x);switch(e[0]){case
6:var
l=e[3],m=e[2];if(i(b[8][53][2],d,1,l)){var
n=a(b[84][7],l),z=aq(f,d,n),A=aq(f,d,m),B=y(f,d,n);return[3,[3,[1,A,z],y(f,d,m)],B]}break;case
9:var
C=e[2],D=y(f,d,e[1]),E=function(a){return y(f,d,a)},F=c(h[19][15],E,C),G=function(b,a){return[3,b,a]};return i(h[19][17],G,D,F);case
10:var
p=e[1],H=p[1],I=c(b[8][2][2],d,p[2]),J=a(b[5][8][6],H),K=[0,a(b[5][8][2],J),I];return[0,a(b[7][68],K)];case
11:var
q=e[1],r=q[1],L=r[2],M=r[1],N=c(b[8][2][2],d,q[2]),O=a(b[5][9][5],M),P=[0,[0,a(b[5][9][1],O),L],N];return[0,a(b[7][67],P)];case
12:var
s=e[1],t=s[1],u=t[2],v=t[1],Q=v[2],R=v[1],S=c(b[8][2][2],d,s[2]),T=a(b[5][9][5],R),g=[0,a(b[5][9][1],T),Q],U=a(b[50][6],g)[1],w=c(b[56][3],f,[0,g,u]);return[4,[0,[0,[0,g,u],S],w,w-U[6]|0]];case
16:var
V=e[2],W=e[1],X=function(c){var
d=a(b[5][8][6],c);return a(b[5][8][2],d)},Y=c(b[5][10][2],X,W),Z=y(f,d,V),_=a(b[5][10][3],Y);return[3,[0,a(b[7][18],_)],Z]}var
k=c(b[84][10],d,j);if(c(b[8][53][3],d,k))return[0,c(b[8][50],d,k)];throw o}function
aO(e,d,g){var
k=ap(e,d,g),h=c(b[8][4],d,k);if(9===h[0]){var
f=h[2],j=Q(t),m=h[1],n=R===j?t[1]:J===j?a(N[2],t):t;if(i(b[84][30],d,n,m))if(3===f.length-1){var
o=y(e,d,l(f,2)[3]),p=y(e,d,l(f,1)[2]);return[0,at,[0,l(f,0)[1],p,o]]}return[0,aR,y(e,d,g)]}return[0,aR,y(e,d,g)]}function
af(e,d,j){var
r=bf(e,d,j),f=c(b[8][4],d,r);switch(f[0]){case
0:var
k=f[1];return[0,[1,k],a(g[2][5],k)];case
6:var
l=f[3],m=f[2];if(i(b[8][53][2],d,1,l)){var
n=a(b[84][7],l),o=af(e,d,m),t=o[2],u=o[1],p=af(e,d,n),v=p[2],w=p[1],x=aq(e,d,n),z=aq(e,d,m);return[0,[0,[1,z,x],[0,u,[0,w,0]]],c(g[2][7],t,v)]}break;case
9:var
A=f[2],B=y(e,d,f[1]),C=function(a){return af(e,d,a)},D=c(h[19][48],C,A),q=a(h[17][38],D),E=q[1],F=i(h[17][15],g[2][7],g[2][1],q[2]);return[0,[0,B,a(h[17][6],E)],F]}var
s=y(e,d,j);return[0,[0,s,0],g[2][1]]}function
bg(a){return 0===a[0]?1:0}function
bh(k,d,j,v){try{var
w=ap(k,d,v),m=c(b[8][37],d,w)}catch(a){a=n(a);if(a===b[7][65])throw o;throw a}var
e=m[2],p=Q(t),x=m[1],y=R===p?t[1]:J===p?a(N[2],t):t;if(i(b[84][30],d,y,x))if(3===e.length-1){var
q=af(k,d,l(e,1)[2]),r=q[1],z=q[2],s=af(k,d,l(e,2)[3]),u=s[1],A=s[2];if(a(g[2][20],z)===j)if(bg(r))var
f=0;else
var
C=l(e,0)[1],f=[0,c(b[8][50],d,C)];else
var
f=1;if(a(g[2][20],A)===j)if(bg(u))var
h=0;else
var
B=l(e,0)[1],h=[0,c(b[8][50],d,B)];else
var
h=1;if(1===f)if(1===h)throw o;return[0,j,f,r,h,u]}throw o}function
dI(o,d,n,m){var
e=o,f=n,h=m;for(;;){var
p=ap(e,d,h),g=c(b[8][4],d,p);if(6===g[0]){var
j=g[3],k=g[2],l=Q(M),q=g[1],r=R===l?M[1]:J===l?a(N[2],M):M;if(i(b[84][30],d,r,j))return[0,by,bh(e,d,f,k)];var
e=c(b[8][51],[0,q,k],e),f=f+1|0,h=j;continue}return[0,br,bh(e,d,f,h)]}}function
dJ(e,d,g){var
p=ap(e,d,g),f=c(b[8][4],d,p);if(6===f[0]){var
k=f[3],l=f[2],m=Q(M),q=f[1],r=R===m?M[1]:J===m?a(N[2],M):M;if(i(b[84][30],d,r,k)){var
h=aO(e,d,l);if(at<=h[1]){var
j=h[2];return[0,bt,[0,j[1],j[2],j[3]]]}return[0,bE,h[2]]}try{var
s=dI(c(b[8][51],[0,q,l],e),d,1,k);return s}catch(a){a=n(a);if(a===o)return[0,aR,y(e,d,g)];throw a}}return aO(e,d,g)}function
V(d,g,f){var
e=Q(d);function
h(c){return a(f,a(b[8][14],[0,c,g]))}var
i=R===e?d[1]:J===e?a(N[2],d):d,j=a(b[m][28][3],i);return c(b[32][32][1],j,h)}function
ag(d,n,v){function
e(j){var
e=Q(d);function
f(o){var
p=a(b[32][31][8],j),w=a(b[32][31][5],j);function
d(q){var
y=c(b[78][29][10],j,o),z=a(h[19][11],n),A=i(b[84][16],q,y,z),d=q,k=A,f=v,e=0,B=a(b[8][14],[0,o,n]);for(;;){if(0===f){var
C=[0,B,a(h[17][6],e)],r=a(b[8][49],C),s=[0,d];x(b[59][5],p,s,r,w);return[0,s[1],r]}var
g=c(b[8][4],d,k);if(6===g[0]){var
t=g[3],l=eM(b[34][9],p,d,0,0,0,0,0,0,g[2]),m=l[2],u=l[1],d=u,k=c(b[8][53][4],m,t),f=f-1|0,e=[0,m,e];continue}throw[0,$,dL]}}return c(b[127][1],0,d)}var
g=R===e?d[1]:J===e?a(N[2],d):d,k=a(b[m][28][3],g);return c(b[32][32][1],k,f)}return a(b[32][31][1],e)}function
ar(e,d){function
f(f){function
g(a){return c(b[59][2],0,a)}var
h=i(b[78][29][1],g,f,d)[1],j=c(b[A][7],e,d),k=a(b[32][30][1],h);return c(b[32][15],k,j)}return a(b[32][31][1],f)}function
bi(d,c,a){return aP(b[60][1],[0,b[27][44]],0,dN,dM,d,c,a)}function
D(g,f){function
d(d){var
h=a(b[32][31][8],d),e=bi(h,a(b[78][29][2],d),g),i=e[1],j=a(f,e[2]),k=a(b[32][30][1],i);return c(b[32][15],k,j)}return a(b[32][31][1],d)}function
p(c){var
d=a(f[6],c);return a(b[8][3],d)}function
E(j){function
e(i){function
f(a){return c(b[78][29][3],i,a)}try{var
e=j[3];switch(e[0]){case
0:var
B=a(b[8][3],e[1]),g=a(b[A][8],B);break;case
1:var
C=a(b[8][3],e[1]),t=p(j[1]),F=p(j[2]),G=function(a){return V(dB,[0,a,F,t,C],b[A][8])},g=D(f(t),G);break;case
2:var
u=e[1],H=p(u),I=function(a){var
c=b[A][8];return V(bd,[0,a,p(u)],c)},g=D(f(H),I);break;case
3:var
v=e[2],o=e[1],J=p(o[1]),w=p(o[2]),K=p(v[2]),L=function(a){var
d=ag(be,[0,a,J,w,K],2),e=[0,E(v),0],f=[0,E(o),e];return c(b[m][28][5],d,f)},g=D(f(w),L);break;case
4:var
q=e[2],r=e[1],k=p(r[1]),h=p(q[1]),l=p(r[2]),x=p(q[2]),M=function(g){function
e(j){function
e(e){var
f=a(b[5][1][6],dO),n=c(b[78][29][8],f,i),o=[0,a(b[8][9],1),[0,h]],p=[0,[0,n],g,a(b[8][14],o)],s=ag(aN,[0,g,e,a(b[8][12],p),k,l],1),t=ag(aN,[0,j,e,l,h,x],1),u=a(b[8][14],[0,l,[0,x]]),v=a(b[8][14],[0,l,[0,h]]),w=ag(be,[0,e,a(b[8][14],[0,k,[0,h]]),v,u],2),y=a(d[3],dP),z=[0,c(b[m][28][7],0,y),0],B=[0,b[A][3],z],C=E(q),D=[0,c(b[m][28][4],t,C),B],F=[0,a(b[m][28][6],D),0],G=E(r),H=[0,c(b[m][28][4],s,G),F];return c(b[m][28][5],w,H)}return D(f(a(b[8][14],[0,k,[0,h]])),e)}return D(f(h),e)},g=D(f(k),M);break;default:var
s=e[1],N=e[4],O=e[3],P=e[2],y=p(s[1]),Q=p(s[2]),z=p(j[1]),R=a(b[8][9],(1+O|0)-N|0),S=function(d){function
e(p){var
f=P[1][2],g=a(b[8][9],1),h=a(b[78][29][2],i),j=a(b[78][29][5],i),e=aP(b[bv][1],j,h,f,g,d,R,z),k=e[2],l=e[1],n=a(b[5][1][6],dK),o=[0,[0,c(b[78][29][8],n,i)],d,k],q=ag(aN,[0,d,p,a(b[8][12],o),y,Q],1),r=E(s),t=c(b[m][28][4],q,r),u=a(b[32][30][1],l);return c(b[m][28][4],u,t)}return D(f(z),e)},g=D(f(y),S)}return g}catch(d){d=n(d);if(a(b[32][33][5],d))return c(b[32][9],0,d);throw d}}return a(b[32][31][1],e)}function
dR(d){function
e(e){function
f(a){return c(b[59][2],0,a)}var
g=i(b[78][29][1],f,e,d)[1],h=a(b[A][8],d),j=a(b[32][30][1],g);return c(b[32][15],j,h)}return a(b[32][31][1],e)}function
bj(j,h,f,i){function
d(d){var
g=p(h),e=p(f);function
k(f){var
l=a(b[5][1][6],dS),h=c(b[78][29][8],l,d),n=a(b[5][1][6],dT),o=c(b[78][29][8],n,d),p=[0,[0,o],f,a(b[8][9],1)],q=a(b[8][12],p),r=[0,V(dw,[0,f,g,q,j,e,a(b[8][11],h)],dR),0],k=[0,f,g,e],s=[0,E(i),r],u=[0,h],v=V(t,k,function(a){return ar(u,a)});return c(b[m][28][5],v,s)}return D(c(b[78][29][3],d,e),k)}return a(b[32][31][1],d)}function
bk(W,U){function
e(j){var
X=a(b[78][29][2],j);a(b[71][3],b[71][4]);function
Y(b){return a(d[3],dW)}a(f[7],Y);var
v=a(b[78][29][5],j),n=a(b[78][29][2],j),J=a(b[32][31][9],j),K=[0,a(b[32][31][7],J),n],e=c(f[11],W,K),o=[0,0],w=[0,0];function
L(a){var
b=y(v,n,a);c(f[12],e,b);return 0}c(h[17][11],L,U);var
M=a(b[32][31][2],j);function
N(k){var
j=a(b[6][2][1][1],k),g=a(b[7][6],j),d=dJ(v,n,a(b[6][2][1][2],k)),i=d[1];if(at<=i){if(by<=i)return br<=i?x(f[15],e,j,1,d[2]):x(f[15],e,j,0,d[2]);if(bt<=i){var
l=d[2];return x(f[14],e,[0,g],l[2],l[3])}var
m=d[2];return x(f[13],e,g,m[2],m[3])}if(bE<=i){var
p=d[2],r=o[1],s=function(a){return x(f[14],e,[2,a[1],g],a[2],p)};c(h[17][11],s,r);w[1]=[0,[0,g,p],w[1]];return 0}var
q=d[2],t=w[1];function
u(a){return x(f[14],e,[2,g,a[1]],q,a[2])}c(h[17][11],u,t);o[1]=[0,[0,g,q],o[1]];return 0}c(h[17][11],N,M);var
z=aO(v,n,a(b[78][29][7],j));if(at<=z[1]){var
F=z[2];x(f[14],e,0,F[2],F[3])}else{var
O=z[2],P=o[1],Q=function(a){return x(f[14],e,[1,a[1]],a[2],O)};c(h[17][11],Q,P)}function
Z(b){return a(d[3],dX)}a(f[7],Z);var
G=c(f[29],1,e);function
_(b){return a(d[3],dY)}a(f[7],_);var
g=a(f[8],e);if(G){var
q=G[1],$=function(b){return a(d[3],dZ)};a(f[7],$);if(typeof
q==="number"){var
H=a(b[32][31][8],j),aa=a(f[10],g),ab=function(d){var
i=c(f[21],g,d[1]),j=d[3];function
k(a){return p(c(f[20],g,a))}var
l=c(h[17][14],k,j),e=i[1],m=e[1],n=d[2],o=[0,m,a(b[8][2][1],e[2])],q=[0,a(b[8][17],o),l];return[0,a(b[8][49],q),n]},ac=c(h[17][12],ab,aa),ad=c(bl[1],0,d0),ae=function(a){var
d=a[2],e=eN(b[95][3],d1,0,0,H,X,a[1]);function
f(a){return ad}var
g=[4,e,c(h[17][48],d,f)],i=c(bl[1],0,g);return c(b[90][11],H,i)},af=a(d[3],d2);c(aB[6],0,af);var
ag=a(d[3],d3),ah=a(d[3],d4),ai=function(h){var
b=a(d[3],d5),e=a(d[13],0),f=a(d[3],d6),g=c(d[12],f,e);return c(d[12],g,b)},aj=i(d[38],ai,ae,ac),ak=a(d[3],d7),al=c(d[12],ak,aj),am=c(d[12],al,ah),an=c(d[26],8,am),ap=a(d[3],d8),aq=c(d[12],ap,an),as=c(d[12],aq,ag);c(aB[6],0,as);var
au=a(d[3],d9);return c(b[m][28][2],0,au)}else{if(0===q[0]){var
r=q[1],I=r[2],B=c(ao[13],g,[0,bq,[0,r[1],I,r[3],r[4]]]);c(f[21],g,I[1]);var
T=function(d){var
e=p(B[1]),h=p(B[2]),i=a(b[32][31][8],d),j=a(b[78][29][2],d),f=bi(i,j,c(b[78][29][3],d,e)),k=f[2],l=f[1],n=a(b[5][1][6],dV),g=c(b[78][29][8],n,d),q=[0,a(b[bv][26],g),0],o=[0,k,e,h],r=[0,E(B),q],s=[0,g],w=V(t,o,function(a){return ar(s,a)}),u=c(b[m][28][5],w,r),v=a(b[32][30][1],l);return c(b[m][28][4],v,u)};return a(b[32][31][1],T)}var
l=q[1],s=c(ao[13],g,[0,-608347012,[0,l[1],l[2]]]),C=c(f[20],g,l[1]),u=c(f[20],g,l[2]),k=l[3];if(typeof
k==="number")return E(s);else
switch(k[0]){case
0:var
av=a(b[8][3],k[1]),R=function(d){var
e=p(C),g=p(u),h=a(b[5][1][6],dQ),f=c(b[78][29][8],h,d),i=[0,av,[0,a(b[8][11],f)]],j=a(b[8][14],i);function
k(d){var
i=[0,a(b[A][9],j),0],h=[0,d,e,g],k=[0,E(s),i],l=[0,f],n=V(t,h,function(a){return ar(l,a)});return c(b[m][28][5],n,k)}return D(c(b[78][29][3],d,e),k)};return a(b[32][31][1],R);case
1:return bj(a(b[8][3],k[1]),C,u,s);default:var
aw=k[2],ax=a(b[8][3],k[1]),ay=a(b[8][3],aw),S=function(e){var
f=p(u),g=a(b[5][1][6],dU),d=c(b[78][29][8],g,e),h=[0,ay,[0,a(b[8][11],d)]],i=a(b[8][14],h),j=[0,a(b[A][9],i),0],k=[0,bj(ax,C,u,s),j],l=ar([0,d],f);return c(b[m][28][5],l,k)};return a(b[32][31][1],S)}}}var
az=a(d[3],d_);return c(b[m][28][2],0,az)}return a(b[32][31][1],e)}var
ea=a(d[3],d$),bm=c(b[m][28][7],0,ea);function
bn(e,d){var
f=bk(e,d),g=a(b[m][28][9],b[A][10]),h=c(b[m][28][4],g,f);return c(b[m][28][8],h,bm)}function
eb(d,e,k,j){var
f=Q(d);function
g(l){function
d(d){function
m(a){return c(b[59][2],0,a)}var
f=i(b[78][29][1],m,d,e),n=f[2],o=f[1],p=a(b[78][29][5],d),g=aP(b[60][1],0,0,0,ec,p,o,n),q=g[1],h=a(b[8][14],[0,l,[0,g[2],e,k]]),r=a(b[78][29][5],d),s=x(b[59][2],0,r,q,h)[1],t=a(j,h),u=a(b[32][30][1],s);return c(b[32][15],u,t)}return a(b[32][31][1],d)}var
h=R===f?d[1]:J===f?a(N[2],d):d,l=a(b[m][28][3],h);return c(b[32][32][1],l,g)}function
ed(k){var
w=a(b[32][31][5],k),d=a(b[78][29][2],k);function
x(e,d){try{var
f=0,g=b[A][5],h=[0],i=function(a){return V(bd,h,a)}(g),j=[0,a(b[m][28][10],i),f],k=[0,a(b[32][10],0),j],l=eb(t,e,d,b[A][11]),o=c(b[m][28][5],l,k);return o}catch(d){d=n(d);if(a(b[32][33][5],d))return c(b[32][9],0,d);throw d}}function
y(e){var
d=e[1],f=e[2];if(d[1]!==b[67][1])if(d[1]!==b[25][1])return c(b[32][9],[0,f],d);return a(b[32][10],0)}var
g=c(b[8][4],d,w);if(9===g[0]){var
h=g[2];if(3===h.length-1){var
p=Q(t),z=g[1],B=h[2],C=h[3],D=R===p?t[1]:J===p?a(N[2],t):t;if(i(b[84][30],d,D,z)){var
q=c(b[8][4],d,B),r=c(b[8][4],d,C);if(9===q[0])if(9===r[0]){var
u=r[2],j=q[2];if(j.length-1===u.length-1)var
v=function(d){if(0<=d){var
e=v(d-1|0),f=l(u,d)[d+1],g=x(l(j,d)[d+1],f);return c(b[m][28][11],g,e)}var
h=bn(aQ,0);return a(b[m][28][10],h)},s=v(j.length-1-1|0),f=1;else
var
f=0}else
var
f=0;else
var
f=0;if(!f)var
s=a(b[32][10],0);var
o=s,e=1}else
var
e=0}else
var
e=0}else
var
e=0;if(!e)var
o=a(b[32][10],0);return c(b[32][12],o,y)}var
W=[0,E,bk,bm,bn,a(b[32][31][1],ed)];aj(163,W,"Cc_plugin.Cctac");a(bo[7][1],O);var
ee=0,eg=[0,function(d){if(d){var
e=d[2];if(e)if(!e[2]){var
f=e[1],g=d[1],h=a(ab[6],b[70][10]),i=c(P[12][2][7],h,g),j=a(ab[17],b[70][11]),k=a(ab[6],j),l=c(P[12][2][7],k,f);return function(a){return c(W[4],i,l)}}}return a(F[2],ef)},ee],ei=[0,function(d){if(d)if(!d[2]){var
e=d[1],f=a(ab[17],b[70][11]),g=a(ab[6],f),h=c(P[12][2][7],g,e);return function(a){return c(W[4],aQ,h)}}return a(F[2],eh)},eg],ek=[0,function(d){if(d)if(!d[2]){var
e=d[1],f=a(ab[6],b[70][10]),g=c(P[12][2][7],f,e);return function(a){return c(W[4],g,0)}}return a(F[2],ej)},ei],em=[0,function(b){return b?a(F[2],el):function(a){return c(W[4],aQ,0)}},ek],eo=a(en[12],em);i(P[6][9],0,[0,O,ep],eo);function
eq(u){var
k=[0,a(b[5][1][7],er)],d=b[70][11],h=0,j=0;if(0===d[0]){var
l=[0,et,[0,[1,c(ah[9],0,[0,[0,[5,[0,d[1]]]],k])],j]],m=[0,a(b[5][1][7],eu)],e=b[70][10];if(0===e[0]){var
n=[0,[0,ew,[0,[1,c(ah[9],0,[0,[5,[0,e[1]]],m])],l]],h],p=[0,a(b[5][1][7],ex)],f=b[70][11],o=0;if(0===f[0]){var
q=[0,[0,eA,[0,ez,[0,[1,c(ah[9],0,[0,[0,[5,[0,f[1]]]],p])],o]]],n],s=[0,a(b[5][1][7],eB)],g=b[70][10],r=0;if(0===g[0]){var
t=[0,eE,[0,[0,eD,[0,[1,c(ah[9],0,[0,[5,[0,g[1]]],s])],r]],q]];return i(P[9][4],[0,O,eF],0,t)}throw[0,$,eC]}throw[0,$,ey]}throw[0,$,ev]}throw[0,$,es]}c(bo[7][3],eq,O);function
eG(f){var
d=[28,[0,0,[31,c(ah[9],0,[0,[0,[0,O,eH],0],0])]]],e=a(b[5][1][6],eI);return x(P[6][4],1,0,e,d)}var
eJ=[0,function(b,a){return W[5]}];i(P[6][9],0,[0,O,eK],eJ);c(b[76][1],eG,O);var
bp=[0,O];aj(169,bp,"Cc_plugin.G_congruence");aj(170,[0,f,ao,W,bp],"Cc_plugin");return});
