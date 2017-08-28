(function(g_){"use strict";var
b$="xO",ce=" - ",cf="not",_=112,q=250,cd="Z.succ",cq="Z.pred",bf="Z.opp",ch="xH",aN="Zpos",cp="REIFED PROBLEM\n\n",e=246,cc="FF",bb="Z.sub",ck="True",S=111,aj="Z",aM="Extension: cannot occur",T="romega",aP="plugins/romega/refl_omega.ml",co="\n====================================\n",bd=113,be="N",ct="False",cj="with",bc="Z.mul",cs="Prop",cn="romega'",aL="",cg="or",cm="TT",aO="Omega",b_="=SYSTEM===================================\n",aK="Zneg",ba="Z.add",cb="positive",aJ="Z0",cl="  Depends on:",cr="nat",ci="and",ca="\n------------------------------------\n",b9="xI",R="Coq",v=g_.jsoo_runtime,b8=v.caml_int_compare,a=v.caml_new_string,p=v.caml_obj_tag,aI=v.caml_register_global,i=v.caml_string_notequal,b7=v.caml_trampoline,b6=v.caml_trampoline_return,t=v.caml_wrap_exception;function
b(a,b){return a.length==1?a(b):v.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):v.caml_call_gen(a,[b,c])}function
l(a,b,c,d){return a.length==3?a(b,c,d):v.caml_call_gen(a,[b,c,d])}function
a$(a,b,c,d,e){return a.length==4?a(b,c,d,e):v.caml_call_gen(a,[b,c,d,e])}function
g9(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):v.caml_call_gen(a,[b,c,d,e,f])}function
Z(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):v.caml_call_gen(a,[b,c,d,e,f,g])}function
b5(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):v.caml_call_gen(a,[b,c,d,e,f,g,h])}var
r=v.caml_get_global_data(),M=a("romega_plugin"),o=r.CamlinternalLazy,d=r.API,h=r.Bigint,N=r.Option,g=r.Util,j=r.Pervasives,k=r.Printf,w=r.Int,ab=r.Assert_failure,I=r.Not_found,s=r.Pp,b1=r.CErrors,bz=r.Invalid_argument,Q=r.Ltac_plugin,a8=r.List,b3=r.Genarg,a7=r.Grammar_API,b2=r.Array,bg=[0,a(R),[0,a(T),[0,a("ReflOmegaCore"),0]]],e4=a(ba),e5=a(bc),e6=a(bf),e7=a(cq),e8=a(bb),e9=a(cd),e_=a(aJ),e$=a(aK),fa=a(aN),eX=a("Z.ge"),eY=a("Z.gt"),eZ=a("Z.le"),e0=a("Z.lt"),e1=a("Zne"),e2=a("eq"),e3=a(aj),eN=a(ba),eO=a(bc),eP=a(bf),eQ=a(cq),eR=a(bb),eS=a(cd),eT=a(aJ),eU=a(aK),eV=a(aN),eJ=a(aJ),eK=a(aK),eL=a(aN),eG=a(ch),eH=a(b9),eI=a(b$),eE=a(bb),eC=a(bf),eA=a(bc),ey=a(ba),ew=a(aj),eu=a("Npos"),et=a("N0"),es=a(aK),er=a(aN),eq=a(aJ),ep=a(b9),eo=a(b$),en=a(ch),eh=a(ct),ei=a(ck),ej=a(ci),ek=a("iff"),el=a(cf),em=a(cg),eb=a("nil"),ea=a("cons"),d_=[0,a("Init"),[0,a("Datatypes"),0]],d$=a(aL),d9=a("O"),d8=a("S"),d6=a("do_omega"),d4=a("interp_goal_concl"),d2=a("E_SOLVE"),d0=a("E_EXTRACT"),dY=a("E_SPLIT"),dW=a("D_right"),dU=a("D_left"),dS=a("direction"),dQ=a("O_SPLIT_INEQ"),dO=a("O_MERGE_EQ"),dM=a("O_SUM"),dK=a("O_NOT_EXACT_DIVIDE"),dI=a("O_DIVIDE"),dG=a("O_BAD_CONSTANT"),dE=a("Tprop"),dC=a("Timp"),dA=a("Tand"),dy=a("Tor"),dw=a("Tnot"),du=a("FalseTerm"),ds=a("TrueTerm"),dq=a("NeqTerm"),dn=a("GtTerm"),dl=a("LtTerm"),dj=a("GeqTerm"),dh=a("LeqTerm"),df=a("EqTerm"),dd=a("proposition"),db=a("Tvar"),c$=a("Tminus"),c9=a("Topp"),c7=a("Tmult"),c5=a("Tplus"),c3=a("Tint"),c1=a("I"),cZ=a(ct),cX=a(ck),cV=a(cg),cT=a(cf),cR=a(ci),cP=a("eq_refl"),cO=a(aO),cN=a(aO),cM=a(aO),cL=a(aO),cv=a("."),cw=a(aL),cx=a(aL),cu=[0,a(aj),[0,a(be),[0,a("Pos"),0]]],cy=a("Const_omega.DestConstApp"),cz=[0,a(R),[0,a("Logic"),[0,a("Decidable"),0]]],cA=[0,a("ZOmega"),0],cD=[0,[0,a(R),[0,a("Lists"),[0,a("List"),0]]],0],cJ=[0,[0,a(R),[0,a("Numbers"),[0,a("BinNums"),0]]],0],cK=[0,[0,a(R),[0,a("ZArith"),[0,a("BinInt"),0]]],0],fw=[0,[2,0,0],a("%s")],fx=[0,[12,40,[15,[11,a(" + "),[15,[12,41,0]]]]],a("(%a + %a)")],fy=[0,[12,40,[15,[11,a(" * "),[15,[12,41,0]]]]],a("(%a * %a)")],fz=[0,[12,40,[15,[11,a(ce),[15,[12,41,0]]]]],a("(%a - %a)")],fA=[0,[11,a("~ "),[15,0]],a("~ %a")],fB=[0,[12,86,[4,0,[0,2,2],0,0]],a("V%02d")],fI=[0,[11,a(cm),0],a(cm)],fJ=[0,[11,a(cc),0],a(cc)],fK=[0,[15,[12,32,[2,0,[12,32,[15,0]]]]],a("%a %s %a")],fL=[0,[11,a("not("),[15,[12,41,0]]],a("not(%a)")],fM=[0,[12,40,[15,[11,a(" or "),[15,[12,41,0]]]]],a("(%a or %a)")],fN=[0,[12,40,[15,[11,a(" and "),[15,[12,41,0]]]]],a("(%a and %a)")],fO=[0,[12,40,[15,[11,a(" => "),[15,[12,41,0]]]]],a("(%a => %a)")],fP=[0,[11,a(cs),0],a(cs)],fU=[0,a(aP),440,15],fZ=[0,0,0],ge=a(" "),gf=[0,[4,0,0,0,[12,91,[2,0,[12,93,0]]]],a("%d[%s]")],gg=[0,[12,83,[4,0,0,0,[12,40,[15,[12,44,[15,[12,41,0]]]]]]],a("S%d(%a,%a)")],gh=[0,[4,0,0,0,[11,a(ce),[4,0,0,0,[12,10,0]]]],a("%d - %d\n")],gl=a("not_treated"),gk=a("bad history"),gm=[0,[11,a("Cannot find constructor "),[4,0,0,0,0]],a("Cannot find constructor %d")],gn=[0,0,0],go=[0,1,0],gp=[0,[11,a("Cannot find equation "),[4,0,0,0,0]],a("Cannot find equation %d")],gw=[0,a(R),[0,a(T),[0,a("ROmega"),0]]],gx=a("ROmega can't solve this system"),gv=[0,[11,a(co),0],a(co)],gs=[0,[12,32,[4,0,0,0,0]],a(" %d")],gq=[0,[11,a("SYSTEME "),[4,0,0,0,[12,10,0]]],a("SYSTEME %d\n")],gr=a("\n  Depend :"),gt=a("\n  Split points :"),gu=[0,[11,a(ca),0],a(ca)],gj=[0,[11,a("get_hyp "),[4,0,0,0,0]],a("get_hyp %d")],gi=a("find_path"),gd=a("select_smaller"),gb=[0,0,0,0,0],ga=[0,[11,a(b_),0],a(b_)],f4=a("L"),f5=a("R"),f6=a("M"),f3=[0,[11,a(cl),0],a(cl)],f7=a(aL),f8=[0,[11,a("\n  Path: "),[2,0,0]],a("\n  Path: %s")],f9=a("yes"),f$=a("no"),f_=[0,[11,a("\n  Origin: "),[2,0,[11,a(" (negated : "),[2,0,[11,a(")\n\n"),0]]]]],a("\n  Origin: %s (negated : %s)\n\n")],f2=[0,[11,a("  E"),[4,0,0,0,[11,a(" : "),[15,[12,32,[2,0,[11,a(" 0\n"),0]]]]]]],a("  E%d : %a %s 0\n")],f0=[0,[11,a(" L"),[4,0,0,0,0]],a(" L%d")],f1=[0,[11,a(" R"),[4,0,0,0,0]],a(" R%d")],fY=[0,2,0],fX=[0,[11,a("  "),[2,0,[11,a(": "),[15,[12,10,0]]]]],a("  %s: %a\n")],fV=[0,[11,a(cp),0],a(cp)],fW=[0,[11,a("  CONCL: "),[15,[12,10,0]]],a("  CONCL: %a\n")],fT=[0,a(aP),349,9],fS=[0,a(aP),324,9],fR=[0,[4,0,0,0,[11,a(" -> "),[4,0,0,0,[12,10,0]]]],a("%d -> %d\n")],fQ=[0,[11,a("Atome "),[4,0,0,0,[11,a(" non trouv\xc3\xa9\n"),0]]],a("Atome %d non trouv\xc3\xa9\n")],fC=a("="),fD=a("<="),fE=a(">="),fF=a(">"),fG=a("<"),fH=a("!="),fv=[0,[11,a("Omega Equation "),[4,0,0,0,[11,a(" non trouv\xc3\xa9e\n"),0]]],a("Omega Equation %d non trouv\xc3\xa9e\n")],fu=a("get_prop"),fs=[0,a(aP),235,2],fr=a("get_reified_atom"),fq=[0,[11,a("OV"),[4,0,0,0,0]],a("OV%d")],fk=[0,[12,40,[0,[4,0,[0,2,2],0,[12,41,0]]]],a("(%c%02d)")],fl=a(" := "),fm=a("  ===============================\n\n"),fn=a("ENVIRONMENT OF PROPOSITIONS :"),fo=a("ENVIRONMENT OF TERMS :"),fi=a("__goal__"),g4=[0,a("plugins/romega/g_romega.ml4"),1,0],g2=[0,[0,[0,a(T)],[0,[0,a(cj)],[0,[0,a("*")],0]]],0],g3=a("$l"),g6=[0,a(cj)],g7=[0,a(T)],g8=a(cn),gX=a(aM),gV=[0,a(cr),[0,a(cb),[0,a(be),[0,a(aj),0]]]],gU=a(aM),gR=[0,[0,[0,a(T)],0],[0,[0,[0,a("unsafe_romega")],0],0]],gS=a(T),gM=a(aM),gK=a(aM),gA=a(be),gB=a(aj),gC=a(cr),gD=a(cb),gF=a("zify_positive"),gG=a("zify_nat"),gH=a("zify_op"),gI=a("zify_N"),gE=a("No ROmega knowledge base for type "),gy=[0,a("PreOmega"),[0,a("omega"),[0,a(R),0]]],gP=a(T),g0=a(cn),gc=r.Failure,fp=r.Feedback,fb=r.Omega_plugin,fg=r.Hashtbl,g5=r.Loc,gz=r.String;function
aQ(a){var
i=b(d[81][17],a),e=b(d[5][4][3],i);if(e)var
f=b(d[5][1][8],e[1]),k=c(g[15][46][2],f,cu)?c(j[16],f,cv):cw,h=k;else
var
h=cx;var
l=b(d[81][11],a),m=b(d[5][1][8],l);return c(j[16],h,m)}function
$(f){var
e=b(d[7][30],f),c=e[2],a=b(d[7][1],e[1]);switch(a[0]){case
1:if(!c)return[0,b(d[5][1][8],a[1])];break;case
6:if(!a[1])if(!c)return[2,a[2],a[3]];break;case
10:return[1,aQ([1,a[1][1]]),c];case
11:return[1,aQ([2,a[1][1]]),c];case
12:return[1,aQ([3,a[1][1]]),c]}return 0}var
ak=[248,cy,v.caml_fresh_oo_id(0)];function
bh(f){var
e=b(d[7][30],f),g=e[2],a=b(d[7][1],e[1]);switch(a[0]){case
10:var
c=[1,a[1][1]];break;case
11:var
c=[2,a[1][1]];break;case
12:var
c=[3,a[1][1]];break;default:throw ak}return[0,b(d[81][11],c),g]}var
cB=[0,c(j[22],bg,cA),0],cC=c(j[22],[0,bg,0],cB),cE=c(j[22],cD,cC),cF=c(j[22],d[71][27],cE),cG=c(j[22],d[71][26],cF),cH=c(j[22],[0,cz,0],cG),cI=c(j[22],d[71][24],cH);function
E(a){var
c=l(d[71][28],cL,d[71][24],a);return b(d[49][5],c)}function
m(a){var
c=l(d[71][28],cM,cI,a);return b(d[49][5],c)}function
al(a){var
c=l(d[71][28],cN,cK,a);return b(d[49][5],c)}function
F(a){var
c=l(d[71][28],cO,cJ,a);return b(d[49][5],c)}var
cQ=[e,function(a){return E(cP)}],cS=[e,function(a){return E(cR)}],cU=[e,function(a){return E(cT)}],cW=[e,function(a){return E(cV)}],cY=[e,function(a){return E(cX)}],c0=[e,function(a){return E(cZ)}],c2=[e,function(a){return E(c1)}],c4=[e,function(a){return m(c3)}],c6=[e,function(a){return m(c5)}],c8=[e,function(a){return m(c7)}],c_=[e,function(a){return m(c9)}],da=[e,function(a){return m(c$)}],dc=[e,function(a){return m(db)}],de=[e,function(a){return m(dd)}],dg=[e,function(a){return m(df)}],di=[e,function(a){return m(dh)}],dk=[e,function(a){return m(dj)}],dm=[e,function(a){return m(dl)}],dp=[e,function(a){return m(dn)}],dr=[e,function(a){return m(dq)}],dt=[e,function(a){return m(ds)}],dv=[e,function(a){return m(du)}],dx=[e,function(a){return m(dw)}],dz=[e,function(a){return m(dy)}],dB=[e,function(a){return m(dA)}],dD=[e,function(a){return m(dC)}],dF=[e,function(a){return m(dE)}],dH=[e,function(a){return m(dG)}],dJ=[e,function(a){return m(dI)}],dL=[e,function(a){return m(dK)}],dN=[e,function(a){return m(dM)}],dP=[e,function(a){return m(dO)}],dR=[e,function(a){return m(dQ)}],dT=[e,function(a){return m(dS)}],dV=[e,function(a){return m(dU)}],dX=[e,function(a){return m(dW)}],dZ=[e,function(a){return m(dY)}],d1=[e,function(a){return m(d0)}],d3=[e,function(a){return m(d2)}],d5=[e,function(a){return m(d4)}],d7=[e,function(a){return m(d6)}],am=[e,function(a){return E(d8)}],an=[e,function(a){return E(d9)}];function
bi(a){if(0===a){var
c=p(an);return q===c?an[1]:e===c?b(o[2],an):an}var
f=p(am),g=[0,bi(a-1|0)],h=q===f?am[1]:e===f?b(o[2],am):am;return b(d[7][17],[0,h,g])}function
bj(c){var
a=l(d[71][35],d$,d_,c),e=b(d[50][10],a)?function(a){return b(d[2][2][2],[0,a])}:function(a){return d[2][2][1]};return function(c){var
f=e(c),g=[0,b(d[36][13],a),f];return b(d[7][22],g)}}function
bk(e,c,a){function
f(a){if(a){var
i=a[1],j=[0,i,f(a[2])],g=[0,b(bj(ea),e),[0,c]],k=[0,b(d[7][17],g),j];return b(d[7][17],k)}var
h=[0,b(bj(eb),e),[0,c]];return b(d[7][17],h)}return f(a)}var
ec=b(d[50][12],0),ed=b(d[49][6],ec);function
ee(a){return bk(ed,d[7][10],a)}var
ef=d[2][1][1];function
eg(a,b){return bk(ef,a,b)}var
ao=[e,function(a){return F(en)}],ap=[e,function(a){return F(eo)}],aq=[e,function(a){return F(ep)}],ar=[e,function(a){return F(eq)}],as=[e,function(a){return F(er)}],at=[e,function(a){return F(es)}],au=[e,function(a){return F(et)}],av=[e,function(a){return F(eu)}];function
aw(a){if(c(h[17],a,h[6])){var
f=p(ao);return q===f?ao[1]:e===f?b(o[2],ao):ao}var
g=c(h[15],a,h[7]),l=g[2],m=[0,aw(g[1])];if(c(h[17],l,h[5]))var
i=p(ap),n=q===i?ap[1]:e===i?b(o[2],ap):ap,j=n;else
var
k=p(aq),r=q===k?aq[1]:e===k?b(o[2],aq):aq,j=r;return b(d[7][17],[0,j,m])}function
ev(a){if(0===a){var
c=p(au);return q===c?au[1]:e===c?b(o[2],au):au}var
f=p(av),g=[0,aw(b(h[3],a))],i=q===f?av[1]:e===f?b(o[2],av):av;return b(d[7][17],[0,i,g])}var
ex=[e,function(a){return F(ew)}],ez=[e,function(a){return al(ey)}],eB=[e,function(a){return al(eA)}],eD=[e,function(a){return al(eC)}],eF=[e,function(a){return al(eE)}];function
bl(a){function
e(j){var
g=bh(j),a=g[2],f=b(d[5][1][8],g[1]);if(i(f,eG)){if(i(f,eH)){if(!i(f,eI))if(a)if(!a[2]){var
k=e(a[1]);return c(h[14],h[7],k)}}else
if(a)if(!a[2]){var
l=e(a[1]),m=c(h[14],h[7],l);return c(h[12],h[6],m)}}else
if(!a)return h[6];throw ak}try{var
f=[0,e(a)];return f}catch(a){a=t(a);if(a===ak)return 0;throw a}}function
bm(k){try{var
j=bh(k),e=j[2],g=b(d[5][1][8],j[1]);if(i(g,eJ))if(i(g,eK))if(i(g,eL))var
a=0;else
if(e)if(e[2])var
a=0;else
var
f=bl(e[1]),a=1;else
var
a=0;else
if(e)if(e[2])var
a=0;else
var
l=bl(e[1]),f=c(N[15],h[22],l),a=1;else
var
a=0;else
if(e)var
a=0;else
var
f=[0,h[5]],a=1;if(!a)var
f=0;return f}catch(a){a=t(a);if(a===ak)return 0;throw a}}function
bn(a){if(c(h[17],a,h[5])){var
f=p(ar);return q===f?ar[1]:e===f?b(o[2],ar):ar}if(b(h[18],a)){var
g=p(as),j=[0,aw(a)],k=q===g?as[1]:e===g?b(o[2],as):as;return b(d[7][17],[0,k,j])}var
i=p(at),l=[0,aw(b(h[22],a))],m=q===i?at[1]:e===i?b(o[2],at):at;return b(d[7][17],[0,m,l])}function
eM(o){var
a=$(o);if(typeof
a!=="number"&&1===a[0]){var
c=a[1];if(i(c,eN))if(i(c,eO))if(i(c,eP))if(i(c,eQ))if(i(c,eR))if(i(c,eS)){var
r=i(c,eT)?i(c,eU)?i(c,eV)?1:0:0:0;if(!r){var
p=bm(o);return p?[5,p[1]]:0}}else{var
d=a[2];if(d)if(!d[2])return[4,d[1]]}else{var
e=a[2];if(e){var
f=e[2];if(f)if(!f[2])return[2,e[1],f[1]]}}else{var
g=a[2];if(g)if(!g[2]){var
q=g[1];return[0,q,bn(b(h[22],h[6]))]}}else{var
j=a[2];if(j)if(!j[2])return[3,j[1]]}else{var
k=a[2];if(k){var
l=k[2];if(l)if(!l[2])return[1,k[1],l[1]]}}else{var
m=a[2];if(m){var
n=m[2];if(n)if(!n[2])return[0,m[1],n[1]]}}}return 0}function
eW(G,D){var
c=$(D);if(typeof
c!=="number"&&1===c[0]){var
f=c[1];if(i(f,eX))if(i(f,eY))if(i(f,eZ))if(i(f,e0))if(i(f,e1)){if(!i(f,e2)){var
q=c[2];if(q){var
r=q[2];if(r){var
s=r[2];if(s)if(!s[2]){var
H=s[1],I=r[1],E=b(d[8][3],q[1]),F=l(d[78][29][1],d[94][2],G,E),g=$(b(d[8][52][1],F));if(typeof
g!=="number"&&1===g[0])if(!i(g[1],e3))if(!g[2])return[0,I,H];return 2}}}}}else{var
t=c[2];if(t){var
u=t[2];if(u)if(!u[2])return[1,t[1],u[1]]}}else{var
v=c[2];if(v){var
w=v[2];if(w)if(!w[2])return[2,v[1],w[1]]}}else{var
x=c[2];if(x){var
y=x[2];if(y)if(!y[2])return[3,x[1],y[1]]}}else{var
z=c[2];if(z){var
A=z[2];if(A)if(!A[2])return[4,z[1],A[1]]}}else{var
B=c[2];if(B){var
C=B[2];if(C)if(!C[2])return[5,B[1],C[1]]}}}var
a=$(D);if(typeof
a!=="number")switch(a[0]){case
1:var
e=a[1];if(i(e,eh)){if(i(e,ei))if(i(e,ej))if(i(e,ek))if(i(e,el)){if(!i(e,em)){var
h=a[2];if(h){var
j=h[2];if(j)if(!j[2])return[7,h[1],j[1]]}}}else{var
k=a[2];if(k)if(!k[2])return[6,k[1]]}else{var
m=a[2];if(m){var
n=m[2];if(n)if(!n[2])return[10,m[1],n[1]]}}else{var
o=a[2];if(o){var
p=o[2];if(p)if(!p[2])return[8,o[1],p[1]]}}else
if(!a[2])return 0}else
if(!a[2])return 1;break;case
2:return[9,a[1],a[2]]}return 2}function
D(p){var
a=$(p);if(typeof
a!=="number"&&1===a[0]){var
b=a[1];if(i(b,e4))if(i(b,e5))if(i(b,e6))if(i(b,e7))if(i(b,e8))if(i(b,e9)){var
C=i(b,e_)?i(b,e$)?i(b,fa)?1:0:0:0;if(!C)return bm(p)}else{var
d=a[2];if(d)if(!d[2]){var
q=D(d[1]);return c(N[15],h[9],q)}}else{var
e=a[2];if(e){var
f=e[2];if(f)if(!f[2]){var
r=e[1],s=D(f[1]),t=D(r);return l(N[26],h[13],t,s)}}}else{var
g=a[2];if(g)if(!g[2]){var
u=D(g[1]);return c(N[15],h[10],u)}}else{var
j=a[2];if(j)if(!j[2]){var
v=D(j[1]);return c(N[15],h[22],v)}}else{var
k=a[2];if(k){var
m=k[2];if(m)if(!m[2]){var
w=k[1],x=D(m[1]),y=D(w);return l(N[26],h[14],y,x)}}}else{var
n=a[2];if(n){var
o=n[2];if(o)if(!o[2]){var
z=n[1],A=D(o[1]),B=D(z);return l(N[26],h[12],B,A)}}}}return 0}var
f=[0,cQ,cS,cU,cW,cY,c0,c2,c4,c6,c8,c_,da,dc,de,dg,di,dk,dm,dp,dr,dt,dv,dx,dz,dB,dD,dF,dH,dJ,dL,dN,dP,dR,dT,dV,dX,dZ,d1,d3,d5,d7,bi,ev,eg,ee,[0,ex,ez,eB,eD,eF,bn,eM,eW,D]];aI(222,f,"Romega_plugin.Const_omega");var
u=b(fb[1][2],[0,h[17],h[16],h[12],h[13],h[14],h[15],h[22],h[5],h[6],h[2]]),fc=0,fd=0,fe=w[1],ff=[0,function(b,a){return b===a?1:0},fe],y=b(fg[18],ff),U=[0,0],bo=d[_][28][29];function
fh(a){b(j[29],a);b(j[32],0);return b(j[46],j[24])}var
V=d[_][28][4],B=d[7][17];function
bp(c,a){switch(c){case
0:var
b=0===a?1:0;break;case
1:var
b=1===a?1:0;break;default:var
b=2<=a?1:0}return b?1:0}function
bq(l,k){var
b=l,a=k;for(;;){switch(b[0]){case
0:if(0===a[0])return c(h[17],b[1],a[1]);var
d=0;break;case
1:if(1===a[0])var
i=a[2],g=a[1],f=b[2],e=b[1],d=1;else
var
d=0;break;case
2:if(2===a[0])var
i=a[2],g=a[1],f=b[2],e=b[1],d=1;else
var
d=0;break;case
3:if(3===a[0])var
i=a[2],g=a[1],f=b[2],e=b[1],d=1;else
var
d=0;break;case
4:if(4===a[0]){var
b=b[1],a=a[1];continue}var
d=0;break;default:if(5===a[0])return b[1]===a[1]?1:0;var
d=0}if(d){var
j=bq(e,g);if(j){var
b=f,a=i;continue}return j}return 0}}function
ax(c,a){if(0===c[0]){var
f=c[1];if(0===a[0])var
e=a[1],d=f,b=1;else
var
b=0}else{var
g=c[1];if(0===a[0])var
b=0;else
var
e=a[1],d=g,b=1}return b?d===e?1:0:0}var
aa=b(d[5][1][6],fi);function
br(d){var
a=b(y[1],7),c=b(y[1],7);return[0,0,0,b(y[1],7),0,c,a]}function
bs(a){a[4]=a[4]+1|0;return a[4]}function
bt(a){return 0===a[0]?[1,a[1]]:[0,a[1]]}function
fj(a){return a[1]}function
bu(e){function
a(g,f,e){if(e){var
h=e[2],i=e[1],j=l(k[4],fk,g,f),m=a(g,f+1|0,h),n=b(s[5],0),o=b(d[90][7],i),p=b(s[3],fl),q=b(s[3],j),r=b(s[13],0),t=c(s[12],r,q),u=c(s[12],t,p),v=c(s[12],u,o),w=c(s[12],v,n);return c(s[12],w,m)}return b(s[3],fm)}var
f=a(80,0,e[2]),g=b(s[5],0),h=b(s[3],fn),i=c(s[12],h,g),j=c(s[12],i,f),m=a(86,0,e[1]),n=b(s[5],0),o=b(s[3],fo),p=c(s[12],o,n),q=c(s[12],p,m),r=b(s[5],0),t=c(s[12],j,r),u=c(s[12],t,q);return c(fp[10],0,u)}var
aR=[0,-1];function
bv(a){aR[1]=-1;return 0}function
aS(a){aR[1]++;return aR[1]}var
ay=[0,-1];function
bw(a){ay[1]=a;return 0}function
bx(a){ay[1]=-1;return 0}function
by(a){ay[1]++;return ay[1]}function
az(a){return c(k[4],fq,a)}function
aT(e,a){try{var
h=l(g[17][79],d[7][60],e,a[1]);return h}catch(d){d=t(d);if(d===I){var
f=b(g[17][1],a[1]);a[1]=c(g[18],a[1],[0,e,0]);return f}throw d}}function
aU(a){try{var
c=b(g[17][5],a[1]);return c}catch(a){a=t(a);if(a[1]===bz)return b(j[2],fr);throw a}}function
bA(e,d,a){if(e===b(g[17][1],a[1])){a[1]=c(g[18],a[1],[0,d,0]);return 0}throw[0,ab,fs]}function
bB(a,e){try{var
h=l(g[17][79],d[7][60],e,a[2]);return h}catch(d){d=t(d);if(d===I){var
f=b(g[17][1],a[2]);a[2]=c(g[18],a[2],[0,e,0]);return f}throw d}}function
ft(d,a){try{var
e=c(g[17][5],d,a);return e}catch(a){a=t(a);if(a[1]===bz)return b(j[2],fu);throw a}}function
bC(b,a){var
d=a[7][1];return c(y[10],b[5],d)?0:l(y[5],b[5],d,a)}function
aV(a,b){try{var
d=c(y[7],a[5],b);return d}catch(a){a=t(a);if(a===I){c(k[2],fv,b);throw a}throw a}}function
C(c,a){switch(a[0]){case
0:var
d=b(h[2],a[1]);return l(k[1],c,fw,d);case
1:return Z(k[1],c,fx,C,a[1],C,a[2]);case
2:return Z(k[1],c,fy,C,a[1],C,a[2]);case
3:return Z(k[1],c,fz,C,a[1],C,a[2]);case
4:return a$(k[1],c,fA,C,a[1]);default:return l(k[1],c,fB,a[1])}}function
bD(a){switch(a){case
0:return fC;case
1:return fD;case
2:return fE;case
3:return fF;case
4:return fG;default:return fH}}function
z(b,a){if(typeof
a==="number")return 0===a?c(k[1],b,fI):c(k[1],b,fJ);else
switch(a[0]){case
0:var
d=a[2],e=d[3],f=d[2],g=bD(d[1]);return b5(k[1],b,fK,C,f,g,C,e);case
1:return a$(k[1],b,fL,z,a[1]);case
2:return Z(k[1],b,fM,z,a[2],z,a[3]);case
3:return Z(k[1],b,fN,z,a[2],z,a[3]);case
4:return Z(k[1],b,fO,z,a[2],z,a[3]);default:return c(k[1],b,fP)}}function
bE(b){function
c(a){if(a){var
d=a[1],e=d[2],f=d[1];return[1,[2,[5,e],[0,f]],c(a[2])]}return[0,b[4]]}return c(b[3])}function
n(a,d){var
c=p(a),f=q===c?a[1]:e===c?b(o[2],a):a;return b(B,[0,f,d])}function
bF(d,a){function
c(a){switch(a[0]){case
0:return b(f[46][6],a[1]);case
1:var
e=a[1],g=c(a[2]),h=[0,c(e),g];return n(f[46][2],h);case
2:var
i=a[1],j=c(a[2]),k=[0,c(i),j];return n(f[46][3],k);case
3:var
l=a[1],m=c(a[2]),o=[0,c(l),m];return n(f[46][5],o);case
4:var
p=[0,c(a[1])];return n(f[46][4],p);default:var
q=a[1];return b(aU(d),q)}}return c(a)}function
bG(d,b){try{var
a=c(y[7],d[3],b);return a}catch(a){a=t(a);if(a===I){c(k[2],fQ,b);var
e=d[3],f=function(b,a){return l(k[2],fR,b,a)};c(y[11],f,e);throw I}throw a}}function
bH(a){switch(a[0]){case
1:var
b=f[9];return function(a){return n(b,a)};case
2:var
c=f[10];return function(a){return n(c,a)};case
3:var
d=f[12];return function(a){return n(d,a)};default:throw[0,ab,fS]}}function
aA(c,a){switch(a[0]){case
0:var
d=[0,b(f[46][6],a[1])];return n(f[8],d);case
4:var
i=[0,aA(c,a[1])];return n(f[11],i);case
5:var
j=bG(c,a[1]),k=[0,b(f[43],j)];return n(f[13],k);default:var
e=a[1],g=aA(c,a[2]),h=[0,aA(c,e),g];return b(bH(a),h)}}function
ac(a,b){try{var
c=aA(a,b);return c}catch(a){a=t(a);C(j[25],b);throw a}}function
bI(a){switch(a){case
0:var
b=f[15];return function(a){return n(b,a)};case
1:var
c=f[16];return function(a){return n(c,a)};case
2:var
d=f[17];return function(a){return n(d,a)};case
3:var
e=f[19];return function(a){return n(e,a)};case
4:var
g=f[18];return function(a){return n(g,a)};default:var
h=f[20];return function(a){return n(h,a)}}}function
bJ(a){if(typeof
a!=="number")switch(a[0]){case
2:var
b=f[24];return function(a){return n(b,a)};case
3:var
c=f[25];return function(a){return n(c,a)};case
4:var
d=f[26];return function(a){return n(d,a)}}throw[0,ab,fT]}function
ad(c,a){if(typeof
a==="number"){if(0===a){var
d=f[21],i=p(d);return q===i?d[1]:e===i?b(o[2],d):d}var
g=f[22],j=p(g);return q===j?g[1]:e===j?b(o[2],g):g}else
switch(a[0]){case
0:var
h=a[2],k=h[2],l=h[1],m=ac(c,h[3]),r=[0,ac(c,k),m];return b(bI(l),r);case
1:var
s=[0,ad(c,a[1])];return n(f[23],s);case
5:var
w=bB(c,a[1]),x=[0,b(f[42],w)];return n(f[27],x);default:var
t=a[2],u=ad(c,a[3]),v=[0,ad(c,t),u];return b(bJ(a),v)}}function
aW(a,b){try{var
c=ad(a,b);return c}catch(a){a=t(a);z(j[25],b);throw a}}function
bK(b,a){var
c=a[1],d=ac(b,a[2]),e=[0,ac(b,c),d];return n(f[15],e)}var
A=w[2][7];function
G(d){var
a=d;for(;;)switch(a[0]){case
0:return w[2][1];case
1:var
e=a[1],f=G(a[2]);return c(A,G(e),f);case
2:var
g=a[1],h=G(a[2]);return c(A,G(g),h);case
3:var
i=a[1],j=G(a[2]);return c(A,G(i),j);case
4:var
a=a[1];continue;default:return b(w[2][5],a[1])}}function
aB(a){if(a){var
b=a[1],d=aB(a[2]),e=c(A,G(b[3]),d);return c(A,G(b[2]),e)}return w[2][1]}function
J(b){var
a=b;for(;;){if(typeof
a!=="number")switch(a[0]){case
0:return aB([0,a[2],0]);case
1:var
a=a[1];continue;case
2:var
d=a[2],e=J(a[3]);return c(A,J(d),e);case
3:var
f=a[2],g=J(a[3]);return c(A,J(f),g);case
4:var
h=a[2],i=J(a[3]);return c(A,J(h),i)}return w[2][1]}}function
aX(b,a){var
d=a[1],e=c(u[8],a[2],b);function
f(a){var
d=a[1];return[0,d,c(u[8],a[2],b)]}return[0,c(g[17][12],f,d),e]}function
bL(b,a){function
d(p,o){var
b=p,a=o;for(;;){if(b){if(a){var
f=a[2],j=a[1],k=j[2],g=j[1],i=b[2],l=b[1],m=l[2],e=l[1];if(e===g){var
n=c(u[6],m,k);if(c(h[17],n,h[5])){var
b=i,a=f;continue}return[0,[0,e,n],d(i,f)]}return c(u[19],e,g)?[0,[0,e,m],d(i,a)]:[0,[0,g,k],d(b,f)]}return b}return a}}var
e=c(u[6],b[2],a[2]);return[0,d(b[1],a[1]),e]}function
W(g){var
a=g;for(;;)switch(a[0]){case
0:return[0,0,a[1]];case
1:var
i=a[1],j=W(a[2]);return bL(W(i),j);case
2:var
b=a[1],e=a[2];if(0===e[0])var
d=e[1],f=b;else{if(0!==b[0])throw[0,ab,fU];var
d=b[1],f=a[2]}return c(h[17],d,h[5])?[0,0,u[11]]:aX(d,W(f));case
3:var
a=[1,a[1],[4,a[2]]];continue;case
4:var
k=W(a[1]);return aX(u[14],k);default:return[0,[0,[0,a[1],h[6]],0],h[5]]}}function
bM(i,b,a){var
d=a[2],e=a[1];function
f(a){return[0,a[2],a[1]]}var
h=c(g[17][12],f,e);return[0,aS(0),b,h,d]}function
bN(a){switch(a){case
0:return 5;case
1:return 3;case
2:return 4;case
3:return 1;case
4:return 2;default:return 0}}function
bO(k,h,i,c,a){var
j=h[1],l=h[4],m=h[3],n=h[2];function
e(e,d){var
f=bM(k,d,W(e));return[0,i,c,a,[0,m,b(g[17][6],l)],j,n,f]}try{var
o=j?bN(i):i;switch(o){case
0:var
f=e([1,c,[4,a]],0);break;case
1:var
f=e([1,a,[4,c]],1);break;case
2:var
f=e([1,c,[4,a]],1);break;case
3:var
f=e([1,[1,c,[0,u[14]]],[4,a]],1);break;case
4:var
f=e([1,[1,a,[0,u[14]]],[4,c]],1);break;default:var
f=e([1,c,[4,a]],2)}return f}catch(a){a=t(a);if(b(d[99][2],a))throw a;throw a}}function
bP(c,b,a){return[2,c,b,a]}function
aY(c,b,a){return[3,c,b,a]}function
bQ(c,b,a){return[4,c,b,a]}function
aZ(a,e,d,b){var
f=H(a,d);return c(e,f,H(a,b))}function
H(c,d){var
a=b(f[46][7],d);if(typeof
a==="number")return[5,aT(d,c)];else
switch(a[0]){case
0:var
j=a[2],k=a[1];return aZ(c,function(b,a){return[1,b,a]},k,j);case
1:var
e=a[2],g=a[1],h=b(f[46][9],g);if(h){var
l=h[1];return[2,[0,l],H(c,e)]}var
i=b(f[46][9],e);if(i){var
m=[0,i[1]];return[2,H(c,g),m]}return[5,aT(d,c)];case
2:var
n=a[2],o=a[1];return aZ(c,function(b,a){return[3,b,a]},o,n);case
3:return[4,H(c,a[1])];case
4:var
p=[0,u[12]];return[1,H(c,a[1]),p];default:return[0,a[1]]}}function
ae(c,a,f,o,j,n,m,k){var
h=a[4],i=a[3],d=a[2],p=a[1],e=bs(c),q=f?[0,[0,e],d]:d,r=f?[0,[1,e],d]:d;if(f){var
s=[0,i,b(g[17][6],h)];l(y[5],c[6],e,s)}var
t=X(c,[0,o,q,i,[0,0,h]],j,m);return l(n,e,t,X(c,[0,p,r,i,[0,1,h]],j,k))}function
O(a,g,f,e,d,c){var
h=H(a,d),b=bO(a,g,e,h,H(a,c));bC(a,b);return[0,f,b]}function
X(e,b,i,h){var
g=b[1],l=b[4],m=b[3],n=b[2],a=c(f[46][8],i,h);if(typeof
a==="number")switch(a){case
0:return 0;case
1:return 1;default:return[5,h]}else
switch(a[0]){case
0:return O(e,b,h,0,a[1],a[2]);case
1:return O(e,b,h,5,a[1],a[2]);case
2:return O(e,b,h,4,a[1],a[2]);case
3:return O(e,b,h,1,a[1],a[2]);case
4:return O(e,b,h,3,a[1],a[2]);case
5:return O(e,b,h,2,a[1],a[2]);case
6:return[1,X(e,[0,1-g,n,m,[0,2,l]],i,a[1])];case
7:return ae(e,b,1-g,g,i,bP,a[1],a[2]);case
8:return ae(e,b,g,g,i,aY,a[1],a[2]);case
9:return ae(e,b,1-g,1-g,i,bQ,a[1],a[2]);default:var
j=a[2],k=a[1],o=c(d[7][4],j,k);return ae(e,b,g,g,i,aY,c(d[7][4],k,j),o)}}function
bR(f,e,a){b(k[2],fV);l(k[2],fW,z,e);function
h(a){var
c=a[2],e=b(d[5][1][8],a[1]);return a$(k[2],fX,e,z,c)}c(g[17][11],h,a);return bu(f)}function
bS(e,a){var
i=b(d[78][29][7],a),j=b(d[8][52][1],i),k=b(d[78][29][12],a);function
l(a){var
c=a[1];return[0,c,b(d[8][52][1],a[2])]}var
m=c(g[17][12],l,k),f=X(e,[0,1,0,aa,fY],a,j);function
n(b){var
c=b[1];return[0,c,X(e,[0,0,0,c,0],a,b[2])]}var
h=c(g[17][12],n,m);if(U[1])bR(e,f,h);return[0,f,h]}function
a_(e,b,a){if(typeof
a!=="number")switch(a[0]){case
0:return[0,[0,a[2],b],0];case
1:var
d=a[1];return e<50?a9(e+1|0,b,d):b6(a9,[0,b,d]);case
2:var
f=a[3],h=K(b,a[2]),i=K(b,f);return c(g[18],h,i);case
3:var
j=a[3],k=K(b,a[2]),l=function(a){return K(a,j)};return c(g[17][bd],l,k);case
4:var
m=a[3],n=P(b,a[2]),o=K(b,m);return c(g[18],n,o)}return[0,b,0]}function
a9(e,b,a){if(typeof
a!=="number")switch(a[0]){case
0:return[0,[0,a[2],b],0];case
1:var
d=a[1];return e<50?a_(e+1|0,b,d):b6(a_,[0,b,d]);case
2:var
f=a[3],h=P(b,a[2]),i=function(a){return P(a,f)};return c(g[17][bd],i,h);case
3:var
j=a[3],k=P(b,a[2]),l=P(b,j);return c(g[18],k,l);case
4:var
m=a[3],n=K(b,a[2]),o=function(a){return P(a,m)};return c(g[17][bd],o,n)}return[0,b,0]}function
K(a,b){return b7(a_(0,a,b))}function
P(a,b){return b7(a9(0,a,b))}function
a0(a){if(a){var
b=a[2],c=K(0,a[1][2]),d=a0(b);return l(g[17][122],g[18],c,d)}return fZ}function
aC(a){return 0===a[0]?c(k[2],f0,a[1]):c(k[2],f1,a[1])}function
bT(a){function
h(a){var
h=f[7],m=p(h),t=q===m?h[1]:e===m?b(o[2],h):h;z(j[24],[0,t,a]);b(j[32],0);var
i=a[7],n=b(u[31],i[2]),r=[0,i[3],i[4]];function
s(a){return b(u[29],az)}g9(k[2],f2,i[1],s,r,n);b(k[2],f3);c(g[17][11],aC,a[6]);var
v=a[4][2];function
w(a){switch(a){case
0:return f4;case
1:return f5;default:return f6}}var
x=c(g[17][12],w,v),y=c(g[15][7],f7,x);c(k[2],f8,y);var
A=a[5]?f9:f$,B=b(d[5][1][8],a[4][1]);return l(k[2],f_,B,A)}function
i(a){b(k[2],ga);return c(g[17][11],h,a)}return c(g[17][11],i,a)}function
af(e){var
a=e;for(;;){if(a){var
d=a[2],b=a[1];switch(b[0]){case
6:var
f=b[1],g=af(d);return c(w[2][4],f[1],g);case
15:var
h=b[2][2],i=af(b[3][2]);return c(A,af(h),i);default:var
a=d;continue}}return w[2][1]}}function
bU(b,a){return b8(b[5],a[5])}var
Y=b(g[20][1],[0,bU]);function
ag(d){var
a=d;for(;;){if(a){var
b=a[1];switch(b[0]){case
5:var
e=b[1],f=ag(a[2]);return c(Y[4],e,f);case
15:if(!a[2]){var
g=b[2][2],h=ag(b[3][2]),i=ag(g);return c(Y[7],i,h)}break}var
a=a[2];continue}return Y[1]}}function
aD(a){if(0===a[0])return ag(a[1][3]);var
b=a[2],d=aD(a[3]),e=aD(b);return c(Y[7],e,d)}function
bV(h,c){function
i(a,c){var
l=c[4],m=c[3],r=c[2],s=c[1],i=bE(a[2]),j=bF(h,i);bA(a[5],j,h);var
g=f[46][1],k=p(g),t=q===k?g[1]:e===k?b(o[2],g):g,u=n(f[1],[0,t,j]),v=b(d[8][3],u);return[0,[0,a[5],s],[0,v,r],[0,[0,i,[5,a[5]]],m],[0,[1,a[2][1]],l]]}var
j=aD(c),a=l(Y[15],i,j,gb),k=a[3],m=a[2],r=a[1],s=b(g[17][6],a[4]),t=b(g[17][6],k),u=b(g[17][6],m);return[0,b(g[17][6],r),u,t,s]}function
a1(c,a){if(a){var
e=a[2],f=a[1];try{var
j=aV(c,f)[6],d=j}catch(a){a=t(a);if(a!==I)throw a;var
d=0}var
h=a1(c,e),i=b(g[17][6],d);return l(g[17][53],ax,i,h)}return 0}function
bW(a){function
d(c,a){var
d=c[2],e=b(g[17][1],a[2]);return b8(b(g[17][1],d),e)}try{var
e=c(g[17][40],d,a),f=b(g[17][3],e);return f}catch(a){a=t(a);if(a[1]===gc)return b(j[2],gd);throw a}}function
bX(d,a){function
e(f){var
a=f;for(;;){if(a){var
c=a[2],b=a[1];if(l(g[17][49],ax,b,d)){var
a=c;continue}var
h=bt(b);if(l(g[17][49],ax,h,d))throw j[3];return[0,b,e(c)]}return 0}}function
b(a){var
b=a[2],c=a[1];try{var
d=[0,[0,c,e(b)]];return d}catch(a){a=t(a);if(a===j[3])return 0;throw a}}return c(g[17][64],b,a)}function
aE(a){if(0===a[0])return a[1][2];var
b=a[2],d=aE(a[3]);return c(A,aE(b),d)}function
bY(m,a){function
b(a){if(typeof
a==="number")return 0===a?[5,n(f[5],[0])]:[5,n(f[6],[0])];else
switch(a[0]){case
0:var
o=a[1];return c(w[2][3],a[2][7][1],m)?a:[5,o];case
1:var
e=b(a[1]);if(typeof
e!=="number"&&5===e[0])return[5,n(f[3],[0,e[1]])];return[1,e];case
2:var
p=a[3],q=a[1],g=b(a[2]),h=b(p);if(typeof
g!=="number"&&5===g[0])if(typeof
h!=="number"&&5===h[0])return[5,n(f[4],[0,g[1],h[1]])];return[2,q,g,h];case
3:var
r=a[3],s=a[1],i=b(a[2]),j=b(r);if(typeof
i!=="number"&&5===i[0])if(typeof
j!=="number"&&5===j[0])return[5,n(f[2],[0,i[1],j[1]])];return[3,s,i,j];case
4:var
t=a[3],u=a[1],k=b(a[2]),l=b(t);if(typeof
k!=="number"&&5===k[0])if(typeof
l!=="number"&&5===l[0])return[5,c(d[7][4],k[1],l[1])];return[4,u,k,l];default:return a}}return b(a)}function
aF(d,a){if(0===a[0]){var
e=a[1],f=b(w[2][21],e[2]),h=c(g[17][12],j[20],f),i=c(g[15][7],ge,h),m=l(k[4],gf,e[1],i);return c(j[49],d,m)}return b5(k[1],d,gg,a[1],aF,a[2],aF,a[3])}function
aG(a,d){function
e(f,d,c){if(c){var
h=c[1];if(0===h[0]){var
i=h[1],k=c[2],l=aG(a,b(g[17][6],[0,[1,i],d]));return[1,i,e(f,[0,[0,i],d],k),l]}var
j=h[1],m=e(f,[0,[1,j],d],c[2]);return[1,j,aG(a,b(g[17][6],[0,[0,j],d])),m]}return[0,f]}var
f=bX(d,a);try{var
h=bW(f)}catch(e){e=t(e);var
i=b(g[17][1],a),j=b(g[17][1],f);l(k[2],gh,j,i);c(g[17][11],aC,d);throw e}var
m=h[2],n=h[1];return e(n,b(g[17][6],d),m)}function
a2(k,n){var
e=0,a=n,o=k[2],p=k[1];a:for(;;){if(a){var
l=a[1];if(0===l[0]){var
m=l[1],s=a[2],t=m[2];if(c(d[5][1][1],p,m[1])){var
f=[0,t,o];for(;;){var
g=f[1];if(g){var
h=f[2];if(h){var
q=h[2],r=g[2];if(bp(g[1],h[1])){var
f=[0,r,q];continue}}var
i=0}else
var
i=[0,f[2]];if(i)return[0,e,i[1]];var
e=e+1|0,a=s;continue a}}}var
e=e+1|0,a=a[2];continue}return b(j[2],gi)}}function
a3(h){function
i(h){switch(h){case
0:var
a=f[35],d=p(a),i=q===d?a[1]:e===d?b(o[2],a):a;return[0,i];case
1:var
c=f[36],g=p(c),j=q===g?c[1]:e===g?b(o[2],c):c;return[0,j];default:return 0}}var
j=c(g[17][64],i,h),a=f[34],d=p(a),k=q===d?a[1]:e===d?b(o[2],a):a;return c(f[44],k,j)}function
x(h,e){var
d=0,a=h;for(;;){if(a){var
g=a[1];if(1===g[0])if(e===g[1])return b(f[42],d);var
d=d+1|0,a=a[2];continue}var
i=c(k[4],gj,e);return b(j[2],i)}}function
a4(k,j,i){var
l=[0,b(f[42],0)],a=f[28],d=p(a),m=q===d?a[1]:e===d?b(o[2],a):a,n=b(B,[0,m,l]),r=k?u[14]:h[6],s=b(f[46][6],r),t=[0,b(f[46][6],h[6]),j,s,i,n],c=f[31],g=p(c),v=q===g?c[1]:e===g?b(o[2],c):c;return b(B,[0,v,t])}function
L(g,c,M){var
d=M;for(;;){if(d){var
a=d[1];switch(a[0]){case
0:var
y=d[2],w=a[3],v=a[1],i=1;break;case
1:if(!d[2]){var
R=a[1],S=b(f[46][6],a[2]),T=[0,x(c,R[1]),S],l=f[30],A=p(l),U=q===A?l[1]:e===A?b(o[2],l):l;return b(B,[0,U,T])}var
i=0;break;case
3:var
y=d[2],w=a[2],v=a[1],i=1;break;case
4:var
C=a[3],D=a[2],V=C[2],W=C[1],X=D[2],Y=D[1],Z=L(g,[0,[1,a[1]],c],d[2]),_=x(c,V[1]),$=b(f[46][6],W),aa=x(c,X[1]),ab=[0,b(f[46][6],Y),aa,$,_,Z],m=f[31],E=p(m),ac=q===E?m[1]:e===E?b(o[2],m):m;return b(B,[0,ac,ab]);case
5:var
n=a[1],ad=n[4],ae=n[3],af=n[2],ag=L(g,[0,[1,n[1][1]],c],d[2]),ah=x(c,af[1]),ai=b(f[46][6],ad),aj=x(c,ae[1]),ak=[0,b(f[46][6],h[6]),aj,ai,ah,ag],r=f[31],F=p(r),al=q===F?r[1]:e===F?b(o[2],r):r;return b(B,[0,al,ak]);case
6:var
d=d[2];continue;case
9:if(!d[2]){var
am=a[1],an=x(c,a[2][1]);return a4(0,x(c,am[1]),an)}var
i=0;break;case
10:if(!d[2]){var
ao=a[3],ap=a[1],aq=x(c,a[2][1]);return a4(ao,x(c,ap[1]),aq)}var
i=0;break;case
11:var
ar=a[3],as=a[2],at=L(g,[0,[1,a[1]],c],d[2]),au=x(c,ar),av=[0,x(c,as[1]),au,at],s=f[32],G=p(s),aw=q===G?s[1]:e===G?b(o[2],s):s;return b(B,[0,aw,av]);case
15:var
I=a[3],J=a[2],az=I[2],aA=I[1],aB=a[1],aC=L(g,[0,[1,J[1]],c],J[2]),aD=L(g,[0,[1,aA],c],az),aE=[0,x(c,aB[1]),aC,aD],u=f[33],K=p(u),aF=q===K?u[1]:e===K?b(o[2],u):u;return b(B,[0,aF,aE]);case
16:return b(j[2],gl);case
12:case
13:case
14:if(!d[2]){var
ax=[0,x(c,a[1])],t=f[28],H=p(t),ay=q===H?t[1]:e===H?b(o[2],t):t;return b(B,[0,ay,ax])}var
i=0;break;default:var
d=d[2];continue}if(i){var
N=L(g,c,y),O=b(f[46][6],w),P=[0,x(c,v[1]),O,N],k=f[29],z=p(k),Q=q===z?k[1]:e===z?b(o[2],k):k;return b(B,[0,Q,P])}}return b(j[2],gk)}}function
a5(h,e,d,a){if(a){var
i=a[1],m=a[2];try{var
v=c(y[7],e[5],i),g=v}catch(a){a=t(a);if(a!==I)throw a;var
o=c(k[4],gp,i),g=b(j[2],o)}var
l=a2(g[4],d),p=l[2],q=l[1],r=a5(h,e,[0,[1,g[7][1]],d],m),s=a3(p),u=[0,b(f[42],q),s,r];return n(f[38],u)}var
w=[0,L(e,d,h)];return n(f[39],w)}function
aH(h,e,d){if(0===d[0]){var
i=d[1],o=b(w[2][21],i[2]);return a5(i[3],h,e,o)}var
l=d[1],p=d[3],q=d[2];try{var
E=c(y[7],h[6],l),a=E}catch(d){d=t(d);if(d!==I)throw d;var
r=c(k[4],gm,l),a=b(j[2],r)}var
m=a2(a,e),s=m[2],u=m[1],v=c(g[18],a[2],gn),x=[0,[0,a[1],v]],z=c(g[18],a[2],go),A=aH(h,[0,[0,[0,a[1],z]],e],p),B=aH(h,[0,x,e],q),C=a3(s),D=[0,b(f[42],u),C,B,A];return n(f[37],D)}function
bZ(i,e,h){function
l(a){return a[7]}var
m=c(g[17][12],l,h),a=c(u[68],[0,aS,by,az],m),d=af(a),f=a1(i,b(w[2][21],d));if(U[1]){c(k[2],gq,e);c(u[36],az,a);b(j[27],gr);var
n=function(a){return c(k[2],gs,a)};c(w[2][13],n,d);b(j[27],gt);c(g[17][11],aC,f);b(k[2],gu)}return[0,[0,e,d,a],f]}function
b0(K,a,v,I){var
x=v[1],L=v[2];if(U[1])b(k[2],gv);function
M(b,c){return bZ(a,b,c)}var
h=aG(c(g[17][13],M,I),0);if(U[1]){aF(j[24],h);b(j[32],0)}var
z=aE(h),N=b(w[2][21],z);function
O(b){return aV(a,b)}var
B=c(g[17][12],O,N),P=d[5][1][10][1];function
Q(b,a){return c(d[5][1][10][4],a[4][1],b)}var
R=b(c(g[17][15],Q,P),B),T=c(d[5][1][10][6],aa,R),u=b(d[5][1][10][21],T);function
W(a){return l(g[17][119],d[5][1][1],a,L)}var
X=c(g[17][12],W,u),Y=J(x),Z=c(A,aB(B),Y),i=bV(a,h),_=i[4],$=i[3],ab=i[2],ac=i[1],ad=b(w[2][21],Z),ae=c(g[18],ad,ac);function
C(d,c){if(c){var
e=c[1],f=c[2],g=b(aU(a),e);l(y[5],a[3],e,d);return[0,g,C(d+1|0,f)]}return 0}var
af=C(0,ae),m=f[46][1],D=p(m),ag=q===D?m[1]:e===D?b(o[2],m):m,ah=c(f[44],ag,af);function
ai(b){return bK(a,b)}var
aj=c(g[17][12],ai,$),ak=aW(a,x);function
al(b){return aW(a,bY(z,b))}var
am=c(g[17][12],al,X),an=b(f[45],a[2]),ao=c(g[18],aj,am),r=f[14],E=p(r),ap=q===E?r[1]:e===E?b(o[2],r):r,aq=[0,ak,an,ah,c(f[44],ap,ao)],ar=n(f[40],aq);function
as(a){return[0,[0,a,0]]}var
at=c(g[17][12],as,u),au=aH(a,c(g[18],[0,[0,[0,aa,0]],_],at),h),s=f[7],F=p(s),av=q===F?s[1]:e===F?b(o[2],s):s,aw=b(d[8][3],av),ax=b(d[S][5],aw);if(K)var
t=f[5],G=p(t),ay=0,az=q===G?t[1]:e===G?b(o[2],t):t,aA=b(d[8][3],az),H=c(d[S][68],aA,ay);else
var
H=d[S][6];var
aC=n(f[41],[0,au]),aD=b(d[8][3],aC),aI=b(d[S][5],aD),aJ=b(d[8][3],ar),aK=c(d[S][68],aJ,2),aL=c(g[17][12],d[8][11],u),aM=c(g[18],ab,aL);return c(V,c(V,c(V,c(V,c(V,b(d[S][65],aM),aK),aI),bo),H),ax)}var
a6=[0,u,fc,fd,y,U,bo,fh,V,B,bp,bq,ax,aa,br,bs,bt,fj,bu,aS,bv,by,bx,bw,az,aT,aU,bA,bB,ft,bC,aV,C,bD,z,bE,n,bF,bG,bH,ac,bI,bJ,ad,aW,bK,A,G,aB,J,aX,bL,W,bM,bN,bO,bP,aY,bQ,H,aZ,ae,O,X,bR,bS,K,P,a0,aC,bT,af,bU,Y,ag,aD,bV,a1,bW,bX,aE,bY,aF,aG,a2,a3,x,a4,L,aH,a5,bZ,b0,function(f){function
a(h){b(d[71][3],gw);bv(0);bx(0);try{var
a=br(0),c=bS(a,h),j=c[2],k=c[1];bw(b(g[17][1],a[1])-1|0);var
e=a0([0,[0,aa,[1,k]],j]);if(U[1])bT(e);var
m=b0(f,a,c,e);return m}catch(a){a=t(a);if(a===u[28]){var
i=b(s[3],gx);return l(b1[6],0,0,i)}throw a}}return b(d[32][31][3],a)}];aI(234,a6,"Romega_plugin.Refl_omega");b(a7[7][1],M);function
ah(a){var
e=c(a8[13],d[5][1][6],gy),f=b(d[5][4][2],e),g=b(d[5][5][1],a),h=c(d[5][7][2],[0,f],g),i=b(Q[6][6],h);return b(Q[12][21],i)}function
ai(e,a){var
f=c(g[17][96],gz[29],a);function
h(a){if(i(a,gA)){if(i(a,gB)){if(i(a,gC)){if(i(a,gD)){var
d=c(j[16],gE,a),e=b(s[3],d);return l(b1[6],0,0,e)}return ah(gF)}return ah(gG)}return ah(gH)}return ah(gI)}var
k=c(a8[13],h,f),m=b(a6[93],e),n=c(d[_][28][4],d[S][77],m),o=b(d[_][28][26],k),p=b(d[32][25],o),q=b(d[_][28][9],p);return c(d[_][28][4],q,n)}var
gJ=0,gL=[0,function(a){return a?b(j[2],gK):function(a){return ai(1,0)}},gJ],gN=[0,function(a){return a?b(j[2],gM):function(a){return ai(0,0)}},gL],gO=b(b2[12],gN);l(Q[6][9],0,[0,M,gP],gO);function
gQ(a){return l(Q[9][4],[0,M,gS],0,gR)}c(a7[7][3],gQ,M);var
gT=0,gW=[0,function(a){return a?b(j[2],gU):function(a){return ai(0,gV)}},gT],gY=[0,function(a){if(a)if(!a[2]){var
e=a[1],f=b(b3[17],d[70][9]),g=b(b3[6],f),h=c(Q[12][2][7],g,e);return function(a){return ai(0,c(a8[13],d[5][1][8],h))}}return b(j[2],gX)},gW],gZ=b(b2[12],gY);l(Q[6][9],0,[0,M,g0],gZ);function
g1(h){var
f=[0,b(d[5][1][7],g3)],a=d[70][9],e=0;if(0===a[0]){var
g=[0,[0,g7,[0,g6,[0,[1,c(g5[9],0,[0,[0,[5,[0,a[1]]]],f])],e]]],g2];return l(Q[9][4],[0,M,g8],0,g)}throw[0,ab,g4]}c(a7[7][3],g1,M);var
b4=[0,M,ah,ai];aI(242,b4,"Romega_plugin.G_romega");aI(243,[0,f,a6,b4],"Romega_plugin");return});
