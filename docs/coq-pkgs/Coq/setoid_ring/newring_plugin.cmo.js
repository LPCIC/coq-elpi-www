(function(kJ){"use strict";var
ca=",",a2="AddSetoidRing",K='"',b$="field_mod",q=250,b_="(",az="vernac argument needs not wit printer.",aY="AddSetoidField",b9="constants",J="plugins/setoid_ring/g_newring.ml4",ay="Field_tac",bU="with carrier ",b7="postprocess tactic",b8="Init",ax="field",b6="InitialRing",m=246,bT="decidable",b3="Pphi_pow",b4='Using setoid "',b5="tactic recognizing constants",aw="vernac argument needs not globwit printer.",D="Extension: cannot occur",b2="postprocess",a1="gen_phiZ",aD="setoid",b1="ring_mod",bS="$map",y="]",bR="preprocess",aX="power_tac",b0="Print",aC="closed_term",a0="power",bZ="Ring_polynom",aB="protect_fv",ad="Ring",bQ='and "',I=103,bP="$lH",bN="morphism",bO="plugins/setoid_ring/newring.ml",aZ="field_lookup",U="Coq",bL="closed",bM="F",aA="x",aW="ring_lookup",aV="ring",bK="preprocess tactic",x="[",bY='and morphisms "',bJ=111,bI="and equivalence relation ",bH=")",bE="field_mods",bF=":",bG="t",bC="abstract",bD="$f",av="sign",bB="PEeval",au="div",aU="newring_plugin",bW="Add",bX="completeness",aT="IDphi",bV="ring_mods",$=129,bA="Pphi_dev",E=kJ.jsoo_runtime,C=E.caml_check_bound,b=E.caml_new_string,p=E.caml_obj_tag,aS=E.caml_register_global,B=E.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):E.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):E.caml_call_gen(a,[b,c])}function
f(a,b,c,d){return a.length==3?a(b,c,d):E.caml_call_gen(a,[b,c,d])}function
H(a,b,c,d,e){return a.length==4?a(b,c,d,e):E.caml_call_gen(a,[b,c,d,e])}function
N(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):E.caml_call_gen(a,[b,c,d,e,f])}function
kI(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):E.caml_call_gen(a,[b,c,d,e,f,g,h,i])}var
r=E.caml_get_global_data(),a_=[0,b(aU),b("get_res")],ba=[0,[0,b(U),[0,b("Setoids"),[0,b("Setoid"),0]]],[0,[0,b(U),[0,b("Lists"),[0,b("List"),0]]],[0,[0,b(U),[0,b(b8),[0,b("Datatypes"),0]]],[0,[0,b(U),[0,b(b8),[0,b("Logic"),0]]],0]]]],ag=b("setoid_ring"),z=b(aU),d=r.API,j=r.Util,g=r.Ltac_plugin,l=r.Pervasives,o=r.CamlinternalLazy,F=r.Not_found,e=r.Pp,v=r.CErrors,A=r.Assert_failure,k=r.Loc,X=r.Feedback,bi=r.Flags,i=r.Genarg,aH=r.Quote_plugin,h=r.Grammar_API,Z=r.CList,f9=[0,0,0],f_=[0,0,0],fY=b("field kind"),fZ=b(b5),f0=b(bK),f1=b(b7),f2=b(aD),f3=b(a0),f4=b(av),f5=b(au),f6=b("infinite property"),fO=[0,b(ay),0],fP=[0,0,0],fQ=b("field_lemmas"),fR=b("_field_lemma1"),fS=b("_field_lemma2"),fT=b("_field_lemma3"),fU=b("_field_lemma4"),fV=b("_lemma5"),fX=[22,0],fW=[22,0],fN=b("field inverse should be declared as a morphism"),fy=b("arguments of field_simplify do not have all the same type"),fz=[0,b(ax)],fx=[0,b(ay),0],fA=b(K),fB=b(K),fC=b("cannot find a declared field structure over"),fD=[0,b(ax)],fE=[0,b(bO),870,12],fs=[0,1],ft=[0,0],fr=b("bad field structure"),ev=[0,0,0],ew=[0,0,0],el=b("ring kind"),em=b(b5),en=b(bK),eo=b(b7),ep=b(aD),eq=b(a0),er=b(av),es=b(au),ek=b(" cannot be set twice"),ed=[0,b("Ring_base"),0],ee=b("ring_lemmas"),ef=b("_ring_lemma1"),eg=b("_ring_lemma2"),ei=[22,0],eh=[22,0],eb=[0,1],ec=[0,0],ea=b("bad ring structure"),dV=b("ring addition should be declared as a morphism"),dW=b("ring multiplication should be declared as a morphism"),dX=b("ring opposite should be declared as a morphism"),dY=b(K),dZ=b(bQ),d0=b(K),d1=b(K),d2=b('",'),d3=b(bY),d4=b(K),d5=b(b4),d6=b(K),d7=b(bQ),d8=b(K),d9=b(bY),d_=b(K),d$=b(b4),dR=b("cannot find setoid relation"),dD=b("arguments of ring_simplify do not have all the same type"),dE=[0,b(aV)],dF=b(K),dG=b(K),dH=b("cannot find a declared ring structure over"),dI=[0,b(aV)],dJ=[0,b(bO),377,12],cV=[0,b(bZ),0],cU=b("newring"),cP=b(ad),cO=b(ad),cK=b("ring: cannot find relation (not closed)"),cJ=b("ring: cannot find relation"),cB=b(ad),cA=b(ad),cz=b(aA),cy=b(aA),cw=b(aA),cu=b("Ring.exec_tactic: anomaly"),cr=b(aA),cs=b(bM),ct=b(bM),cp=[2,1],cq=[0,1],cl=[0,b(aU),b(aC)],cm=b(bG),co=b(bG),cf=b("not found"),cg=b("map "),ch=[0,b("lookup_map")],cd=b("dummy"),cc=b("global_head_of_constr."),cC=b("Build_Setoid_Theory"),cE=b("None"),cF=b("Some"),cG=b("eq"),cH=b("cons"),cI=b("nil"),cL=b(U),cM=[0,[0,b("Ring_theory"),0],[0,[0,b(bZ),0],[0,[0,b("Ring_tac"),0],[0,[0,b(b6),0],[0,[0,b(ay),0],[0,[0,b("Field_theory"),0],0]]]]]],cQ=[0,b(U),0],cR=b(b6),cW=b("almost_ring_theory"),cX=b("Eqsth"),cZ=b("Eq_ext"),c1=b("Eq_s_ext"),c3=b("ring_theory"),c4=b("mk_reqe"),c6=b("semi_ring_theory"),c7=b("mk_seqe"),c9=b("Abstract"),c_=b("Computational"),da=b("Morphism"),dc=b("inv_morph_nothing"),dd=b("mkhypo"),df=b("hypo"),di=b(bB),dl=b(b3),dp=b(bA),ds=b(a1),dv=b(aT),dz=b(aV),dA=b("ring-tac-carrier-table"),dB=b("ring-tac-name-table"),dL=b("tactic-new-ring-theory"),ey=[0,b(U),0],ez=b(ay),eE=b("FEeval"),eH=b(bB),eK=b(b3),eN=b(bA),eQ=b("display_pow_linear"),eT=b("display_linear"),eW=b(a1),eZ=b(aT),e3=b(ax),e6=b("PCond"),e9=b(a1),fa=b(aT),fe=b("field_cond"),ff=b(ax),fh=b("simpl_field_expr"),fi=b("almost_field_theory"),fj=b("field_theory"),fk=b("semi_field_theory"),fl=b("AF_AR"),fn=b("F_R"),fp=b("SF_SR"),fu=b("field-tac-carrier-table"),fv=b("field-tac-name-table"),fG=b("tactic-new-field-theory"),kF=[0,b(J),1,0],kC=[0,b(J),1,0],kz=[0,b(J),1,0],ky=b("$lt"),kA=[0,b(y)],kB=b(bP),kD=[0,b(x)],kE=b(bD),kG=[0,b(aZ)],kH=b(aZ),kt=b(D),kr=b(aY),kb=b(aY),j_=b(D),j8=b(D),j6=b(aY),j3=b(D),j0=b(bI),j1=b(bU),jZ=b("The following field structures have been declared:"),jY=b(D),jV=b(aw),jT=b(az),jE=b(aw),jC=b(az),jq=b(bX),jn=[0,b(J),1,0],jk=[0,b(J),1,0],jh=[0,b(J),1,0],jg=b("$lrt"),ji=[0,b(y)],jj=b(bP),jl=[0,b(x)],jm=b(bD),jo=[0,b(aW)],jp=b(aW),jb=b(D),i$=b(a2),iV=b(a2),iS=b(D),iQ=b(D),iO=b(a2),iL=b(D),iI=b(bI),iJ=b(bU),iH=b("The following ring structures have been declared:"),iG=b(D),iD=b(aw),iB=b(az),il=b(aw),ij=b(az),hb=[0,0],gF=b(bC),gG=b(bT),gH=b(bN),gI=b(y),gJ=b(x),gK=b(b9),gL=b(y),gM=b(x),gN=b(bL),gO=b(y),gP=b(x),gQ=b(bR),gR=b(y),gS=b(x),gT=b(b2),gU=b(aD),gV=b(y),gW=b(x),gX=b(aX),gY=b(y),gZ=b(x),g0=b(aX),g1=b(av),g2=b(au),gC=[0,b(J),1,0],gz=[0,b(J),1,0],gx=[0,[0,b(y)],0],gy=b("$l"),gA=[0,b(x)],gB=b("$t"),gD=[0,b(aC)],gE=b(aC),gs=b(D),go=[0,b(J),1,0],gl=[0,b(J),1,0],gi=[0,b(J),1,0],gh=b(bS),gj=[0,b(aB)],gk=b("$id"),gm=[0,b("in")],gn=b(bS),gp=[0,b(aB)],gq=b(aB),gc=b(D),ga=b(D),gf=b(aB),gv=b(aC),g3=b(b1),g5=b(b1),g_=b(bT),hc=b(bC),hg=b(bN),hj=b(y),hm=b(x),ho=b(b9),hr=b(y),hu=b(x),hw=b(bL),hz=b(y),hC=b(x),hE=b(bR),hH=b(y),hK=b(x),hM=b(b2),hR=b(aD),hV=b(av),hY=b(y),h1=b(x),h4=b(a0),h7=b(y),h_=b(x),ib=b(aX),ig=b(au),io=b(bV),iq=b(bV),iu=b(bH),iw=b(ca),iy=b(b_),iW=[0,[0,[0,b(b0)],[0,[0,b("Rings")],0]],0],i3=[0,b(bF)],i7=[0,b(ad)],i8=[0,b(bW)],je=b(aW),jr=b(b$),jt=b(b$),jz=b(bX),jG=b(bE),jI=b(bE),jM=b(bH),jO=b(ca),jQ=b(b_),kc=[0,[0,[0,b(b0)],[0,[0,b("Fields")],0]],0],kj=[0,b(bF)],kn=[0,b("Field")],ko=[0,b(bW)],kw=b(aZ),ej=r.Option,cn=r.CAst;function
L(b){var
c=a(e[3],b);return f(v[6],0,0,c)}function
a3(h,g,f,e,b){switch(a(g,e)){case
0:return c(d[24][2],f,b);case
1:return a(d[24][3],b);default:return-1===e?c(d[24][2],f,b):a(h,b)}}function
cb(b,g){var
h=c(d[8][46],b,g)[1];try{var
j=c(d[84][25],b,h)[1];return j}catch(b){b=B(b);if(b===F){var
i=a(e[3],cc);return f(v[3],0,0,i)}throw b}}function
a4(b){try{var
c=a(d[36][11],b);return c}catch(b){b=B(b);if(b===F)return[0,a(d[5][1][6],cd)];throw b}}function
ae(g,e,b){var
l=a(g,a4(b));if(l){var
q=l[1],r=-1;return a3(function(a){return ae(g,e,a)},q,e,r,b)}var
i=a(d[7][1],b);switch(i[0]){case
6:var
s=function(a,b){return ae(g,a,b)};return f(d[24][4],s,e,b);case
9:var
h=i[2],k=i[1],t=0;if(h.length-1<=0){var
u=a(d[7][17],[0,k,h]);return a(d[24][3],u)}var
m=c(j[19][50],t,h),v=m[2],n=a(d[7][17],[0,k,m[1]]),o=a(g,a4(n));if(o){var
w=o[1],p=function(b,a){return a3(function(a){return ae(g,e,a)},w,e,b,a)},x=c(j[19][16],p,v),y=[6,p(-1,n),x];return a(d[24][5],y)}var
z=a(d[7][17],[0,k,h]);return a(d[24][3],z);default:return a(d[24][3],b)}}function
a5(b,a){try{var
c=[0,f(j[17][119],d[36][7],a,b)];return c}catch(a){a=B(a);if(a===F)return 0;throw a}}var
aE=[0,j[15][45][1]];function
aF(b,a){aE[1]=f(j[15][45][4],b,a,aE[1]);return 0}function
ce(d){try{var
b=c(j[15][45][22],d,aE[1]);return b}catch(b){b=B(b);if(b===F){var
g=a(e[3],cf),h=a(e[20],d),i=a(e[3],cg),k=c(e[12],i,h),l=c(e[12],k,g);return f(v[6],0,ch,l)}throw b}}function
aG(h,g,e,b){function
i(a){return c(d[34][17],e,a)}var
j=a(d[8][52][1],b),k=a(d[23][1],0),l=ae(c(ce(h),e,b),k,j),m=f(d[24][10],[0,i],d[24][6],g),n=c(d[24][13],m,l);return a(d[8][3],n)}function
ci(a){var
b=0,c=2,e=[0,function(b,c,d){return aG(a,b,c,d)},c];return f(d[bJ][85],0,e,b)}function
cj(b,a){var
c=[0,[0,a,0]],e=2,g=[0,function(a,c,d){return aG(b,a,c,d)},e];return f(d[bJ][85],0,g,c)}function
ck(g,b){function
h(h){var
i=c(j[17][12],d[49][5],b),k=f(j[17][16],aH[1][8][4],i,aH[1][8][1]);if(f(aH[1][16],h,k,g))return a(d[32][10],0);var
l=a(e[7],0);return c(d[112][28][2],0,l)}return c(d[32][32][1],d[32][14],h)}function
a6(b){var
e=[0,cl,0];function
f(a){return[0,c(k[9],0,a)]}var
g=c(j[17][12],f,b),h=a(i[17],d[70][15]),l=a(i[5],h),m=[0,[0,c(i[7],l,g)],0],n=[1,a(d[5][1][6],cm)],o=[0,c(cn[1],0,n),0],p=a(i[5],d[70][11]),q=[0,e,[0,[0,c(i[7],p,o)],m]],r=[31,c(k[9],0,q)];return[28,[0,[0,[0,a(d[5][1][6],co)],0],r]]}function
a7(e){var
b=a(d[50][1],0),g=a(d[27][11],b),c=f(d[73][10],b,g,e);return[0,c[1],c[2]]}function
M(c){var
b=a(d[50][1],0),e=a(d[27][11],b),f=H(d[73][9],b,e,0,c)[1];return a(d[8][3],f)}function
T(f,e,b){var
g=a(d[12][1],b),h=a(d[2][7][2],e),i=c(d[12][2],h,g),j=[0,a(d[2][7][3],i)],k=[0,[0,kI(d[54][4],0,cq,0,0,0,j,0,b)],cp],l=a(d[5][1][6],f),m=N(d[54][1],0,0,l,0,k);return a(d[7][18],m)}function
a8(o,n){function
p(h,b){var
e=b[1],i=b[3],j=b[2],m=a(l[20],e),n=c(l[16],cr,m),g=a(d[5][1][6],n),o=[2,[1,c(k[9],0,g)]];return[0,e+1|0,[0,o,j],f(d[5][1][11][4],g,h,i)]}var
b=f(j[17][16],p,n,[0,0,0,d[5][1][11][1]]),q=b[3],r=b[2],s=a(d[5][1][6],cs),t=f(d[5][1][11][4],s,o,q),u=[0,t,a(g[12][32],0)[2]],e=a(d[5][1][6],ct),h=[0,[1,c(k[9],0,e)],r],i=[3,c(k[9],0,h)],m=[29,c(k[9],0,i)];return c(g[12][22],u,m)}var
a9=[0,[0]],cv=[0,a_,0],cx=[0,function(e,b){var
f=a(j[17][3],e),h=a(i[6],d[70][3]),k=c(g[12][2][7],h,f);function
m(e){var
f=b[1],g=a(l[20],e),h=c(l[16],cw,g),i=a(d[5][1][6],h);return c(d[5][1][11][22],i,f)}a9[1]=c(j[19][2],k,m);return a(d[32][10],0)}];f(g[6][9],0,a_,cx);function
a$(D,C,n,b,B){function
E(i,b){var
e=b[1],j=b[3],m=b[2],n=a(l[20],e),o=c(l[16],cy,n),h=a(d[5][1][6],o),p=[2,[1,c(k[9],0,h)]],q=a(g[12][2][1],i);return[0,e+1|0,[0,p,m],f(d[5][1][11][4],h,q,j)]}var
r=f(j[17][16],E,B,[0,0,0,d[5][1][11][1]]),F=r[3],G=r[2],I=[0,F,a(g[12][32],0)[2]];function
J(b){var
e=a(l[20],b),f=c(l[16],cz,e);return a(d[5][1][6],f)}var
K=c(j[17][48],n,J),L=a(i[5],d[70][3]),M=[0,cv,[0,[0,c(i[7],L,n)],0]],N=[31,c(k[9],0,M)];function
O(a){return[0,a]}var
P=[5,[28,[0,c(j[17][12],O,K),N]]],x=d[27][2][1],y=d[8][7],z=a(d[13][16],D),h=H(d[31][2][5],C,z,y,x),A=[0,h[1],h[3]],e=p(b),Q=c(j[18],G,[0,P,0]),t=q===e?b[1]:m===e?a(o[2],b):b,u=[0,[0,c(k[9],0,t)],Q],v=[3,c(k[9],0,u)],w=[29,c(k[9],0,v)],R=c(g[12][22],I,w),S=c(d[32][33][2],R,A),T=a(d[83][1],S),s=a(d[34][2],T),U=s[2],V=s[1];function
W(c){var
b=a(g[12][2][2],c),e=b?a(d[8][52][1],b[1]):a(l[2],cu);return a(U,e)}var
X=c(d[27][35],0,V)[2];return[0,c(j[19][15],W,a9[1]),X]}function
bb(b){return[m,function(g){var
c=f(d[71][28],cA,ba,b),e=a(d[49][5],c);return a(d[8][3],e)}]}function
af(a){return[m,function(b){return f(d[71][28],cB,ba,a)}]}var
cD=bb(cC),aI=af(cE),aJ=af(cF),P=bb(cG),aa=af(cH),ab=af(cI);function
ac(b,e){var
c=p(b),f=q===c?b[1]:m===c?a(o[2],b):b;return a(d[8][14],[0,f,e])}function
s(g,b,f){var
e=p(b),h=q===e?b[1]:m===e?a(o[2],b):b,i=[0,c(d[34][1],g,h),f];return a(d[8][14],i)}function
bc(g,l){var
e=c(d[8][4],g,l);if(9===e[0]){var
b=e[2],m=e[1];if(2<=b.length-1){var
n=[0,m,f(j[19][7],b,0,b.length-1-2|0)],h=a(d[8][14],n);if(c(d[8][53][3],g,h)){var
i=b.length-1-1|0,k=b.length-1-2|0,o=C(b,i)[i+1];return[0,h,C(b,k)[k+1],o]}return L(cK)}}return L(cJ)}var
ah=[0,cL,[0,ag,0]];function
cN(a){return c(j[18],ah,a)}var
bd=c(j[17][12],cN,cM);function
Q(b){return[m,function(g){var
c=f(d[71][28],cO,bd,b),e=a(d[49][5],c);return a(d[8][3],e)}]}function
n(a){return[m,function(b){return f(d[71][28],cP,bd,a)}]}var
cS=c(j[17][12],d[5][1][6],[0,cR,[0,ag,cQ]]),cT=a(d[5][4][2],cS);function
be(b){return[m,function(e){var
c=a(d[5][5][1],b);return f(d[5][7][1],[0,cT],d[5][4][1],c)}]}function
V(a){var
b=[0,ag,cV];return[m,function(c){return f(d[71][35],cU,b,a)}]}var
ai=Q(cW),cY=n(cX),c0=n(cZ),c2=n(c1),aj=Q(c3),c5=Q(c4),ak=Q(c6),c8=Q(c7),al=Q(c9),c$=Q(c_),db=Q(da),R=be(dc),de=n(dd),u=n(df);function
bf(h,e,g){var
b=g;for(;;){var
f=c(d[8][4],e,b);if(6===f[0]){var
b=f[3];continue}var
i=bc(e,b)[1],k=function(c){var
b=c[1],d=p(b),e=c[2],f=q===d?b[1]:m===d?a(o[2],b):b;return[0,f,e]},l=c(j[17][12],k,h),n=function(a){return-1===a?1:2},r=[0,[0,cb(e,i),n],l];return function(a){return a5(r,a)}}}var
dg=0;function
dh(b){var
a=b+1|0;if(!(14<a>>>0))switch(a){case
9:case
13:return 2;case
0:case
11:case
14:return 0}return 1}var
dj=[0,[0,V(di),dh],dg];function
dk(b){var
a=b+1|0;if(!(18<a>>>0))switch(a){case
12:case
17:return 2;case
0:case
9:case
10:case
11:case
14:case
16:case
18:return 0}return 1}var
dm=[0,[0,V(dl),dk],dj];function
dn(a){if(11<=a)if(14<=a)var
b=15<=a?0:1;else{if(12!==a)return 2;var
b=1}else
var
b=-1===a?1:8<=a?1:0;return b?0:1}var
dq=[0,[0,V(dp),dn],dm];function
dr(a){return 0}var
dt=[0,[0,n(ds),dr],dq];function
du(a){return 0}var
dw=[0,[0,n(dv),du],dt],dx=[0,[0,ab,function(a){return-1===a?0:1}],dw],dy=[0,[0,aa,function(a){return-1===a?0:2===a?2:1}],dx];aF(dz,function(a,b){return bf(dy,a,b)});function
O(b){return a(d[90][8],b)}var
W=a(j[21][1],[0,d[7][75]]),aK=f(d[53][1],0,dA,W[1]),aL=f(d[53][1],0,dB,d[47][26][1]);function
dC(a){return c(W[22],a,aK[1])}function
dK(e){var
a=e[2],b=e[1],f=c(d[9][7],b,a[1]),h=c(d[9][7],b,a[2]),i=c(d[9][7],b,a[3]),j=c(d[9][7],b,a[4]),k=c(d[9][7],b,a[5]),l=c(d[9][7],b,a[6]),m=c(d[9][7],b,a[9]),n=c(d[9][7],b,a[10]),o=c(g[5][1],b,a[7]),p=c(g[5][1],b,a[8]),q=c(g[5][1],b,a[11]),r=c(g[5][1],b,a[12]);if(f===a[1])if(h===a[2])if(c(d[7][60],i,a[3]))if(j===a[4])if(k===a[5])if(l===a[6])if(m===a[9])if(n===a[10])if(o===a[7])if(p===a[8])if(q===a[11])if(r===a[12])return a;return[0,f,h,i,j,k,l,o,p,m,n,q,r]}function
bg(b){var
a=b[2],c=b[1][1];aK[1]=f(W[4],a[1],a,aK[1]);aL[1]=f(d[47][26][4],c,a,aL[1]);return 0}var
am=a(d[48][2],dL),dM=am[8],dN=am[7];function
dO(a){return[0,a]}function
dP(c,b){var
a=1===c?1:0;return a?bg(b):a}var
dQ=a(d[48][1],[0,am[1],bg,am[3],dP,dO,dK,dN,dM]);function
bh(c,d,b,a){try{var
e=H(g[22][11],c,d[1],b,a),i=e[2],f=H(g[22][12],c,e[1],b,a),j=f[2],h=H(g[22][13],c,f[1],b,a),k=h[2];d[1]=h[1];var
l=ac(cD,[0,b,a,i,j,k]);return l}catch(a){a=B(a);if(a===F)return L(dR);throw a}}function
dS(h,g,f,e,d,c,b,a){return ac(c5,[0,h,g,f,e,d,c,b,a])}function
dT(f,e,d,c,b,a){return ac(c8,[0,f,e,d,c,b,a])}function
dU(v,i,j){var
b=j[5],n=j[4],k=j[3],l=j[2],h=j[1],u=c(d[8][4],i[1],b);if(9===u[0])if(1===u[2].length-1){var
E=p(P),aN=u[1],aO=q===E?P[1]:m===E?a(o[2],P):P;if(f(d[8][67],i[1],aN,aO)){var
aP=s(i,cY,[0,h]),aQ=n?s(i,c0,[0,h,l,k,n[1]]):s(i,c2,[0,h,l,k]),aR=f(d[59][3],v,i,aP);return[0,aR,f(d[59][3],v,i,aQ)]}}var
w=[0,[0,[0,[0,h,[0,b]]],[0,[0,[0,h,[0,b]]],0]],[0,[0,h,[0,b]]]],G=bh(a(d[50][1],0),i,h,b);try{var
aM=c(g[22][14],w,l),x=aM}catch(a){a=B(a);if(a!==F)throw a;var
x=L(dV)}var
r=x[2];try{var
aL=c(g[22][14],w,k),y=aL}catch(a){a=B(a);if(a!==F)throw a;var
y=L(dW)}var
t=y[2];if(n){var
z=n[1];try{var
ao=c(g[22][14],[0,[0,[0,[0,h,[0,b]]],0],[0,[0,h,[0,b]]]],z),A=ao}catch(a){a=B(a);if(a!==F)throw a;var
A=L(dX)}var
C=A[2],H=dS(h,l,k,z,b,r,t,C),I=a(e[3],dY),J=O(C),K=a(e[3],dZ),M=a(e[13],0),N=a(e[3],d0),Q=O(t),R=a(e[3],d1),S=a(e[13],0),T=a(e[3],d2),U=O(r),V=a(e[3],d3),W=a(e[13],0),Y=a(e[3],d4),Z=O(b),_=a(e[3],d5),$=c(e[12],_,Z),aa=c(e[12],$,Y),ab=c(e[12],aa,W),ac=c(e[12],ab,V),ad=c(e[12],ac,U),ae=c(e[12],ad,T),af=c(e[12],ae,S),ag=c(e[12],af,R),ah=c(e[12],ag,Q),ai=c(e[12],ah,N),aj=c(e[12],ai,M),ak=c(e[12],aj,K),al=c(e[12],ak,J),am=c(e[12],al,I),an=function(a){return c(X[6],0,a)};c(bi[47],an,am);var
D=H}else{var
ap=a(e[3],d6),aq=O(t),ar=a(e[3],d7),as=a(e[13],0),at=a(e[3],d8),au=O(r),av=a(e[3],d9),aw=a(e[13],0),ax=a(e[3],d_),ay=O(b),az=a(e[3],d$),aA=c(e[12],az,ay),aB=c(e[12],aA,ax),aC=c(e[12],aB,aw),aD=c(e[12],aC,av),aE=c(e[12],aD,au),aF=c(e[12],aE,at),aG=c(e[12],aF,as),aH=c(e[12],aG,ar),aI=c(e[12],aH,aq),aJ=c(e[12],aI,ap),aK=function(a){return c(X[6],0,a)};c(bi[47],aK,aJ);var
D=dT(h,l,k,b,r,t)}return[0,G,D]}function
bj(h,g,f,e,d,c,b,a){return a?a[1]:dU(h,g,[0,f,e,d,c,b])}function
bk(b){if(typeof
b==="number"){var
c=p(al);return q===c?al[1]:m===c?a(o[2],al):al}else
return 0===b[0]?ac(c$,[0,b[1]]):ac(db,[0,b[1]])}function
bl(w,v,u,t,s,e){if(e){var
b=e[1];if(0===b[0])return a(g[8][3],b[1]);var
h=b[1],i=function(a){return c(d[68][2],0,a)};return a6(c(j[17][12],i,h))}var
f=p(R),l=q===f?R[1]:m===f?a(o[2],R):R,n=[0,[0,c(k[9],0,l)],0],r=[3,c(k[9],0,n)];return[29,c(k[9],0,r)]}function
an(c,b,a){return s(b,de,[0,N(d[58][1],0,0,c,b[1],a),a])}function
bm(e,b,i){var
g=p(u),k=q===g?u[1]:m===g?a(o[2],u):u,h=c(d[34][1],b,k),l=s(b,ab,[0,h]);function
n(c,a){return s(b,aa,[0,h,an(e,b,c),a])}var
r=f(j[17][16],n,i,l),t=f(d[59][3],e,b,r),v=a(d[8][52][1],t);return c(d[34][16],b[1],v)}function
bn(t,b,f){var
h=p(u),v=q===h?u[1]:m===h?a(o[2],u):u,i=c(d[34][1],b,v);if(f){var
l=f[1],e=l[1],w=l[2];if(0===e[0])var
n=a(g[8][3],e[1]);else
var
x=e[1],y=function(a){return c(d[68][2],0,a)},n=a6(c(j[17][12],y,x));return[0,n,s(b,aJ,[0,i,an(t,b,M(w))])]}var
r=p(R),z=q===r?R[1]:m===r?a(o[2],R):R,A=[0,c(k[9],0,z)],B=s(b,aI,[0,i]),C=[3,c(k[9],0,[0,A,0])];return[0,[29,c(k[9],0,C)],B]}function
bo(h,b,e){var
f=p(u),i=q===f?u[1]:m===f?a(o[2],u):u,g=c(d[34][1],b,i);return e?s(b,aJ,[0,g,an(h,b,M(e[1]))]):s(b,aI,[0,g])}function
bp(h,b,e){var
f=p(u),i=q===f?u[1]:m===f?a(o[2],u):u,g=c(d[34][1],b,i);return e?s(b,aJ,[0,g,an(h,b,M(e[1]))]):s(b,aI,[0,g])}function
bq(u,K,ar,J,aq,I,ap,ao,an){var
M=I[2],O=I[1],P=K[2],h=K[1],as=c(j[18],ah,ed);a(d[71][3],as);var
k=a(d[50][1],0),$=N(d[58][1],0,0,k,h,P),s=c(d[8][4],h,$);if(9===s[0]){var
b=s[2],v=b.length-1-6|0;if(2<v>>>0)var
i=0;else{var
t=s[1];switch(v){case
0:var
w=p(ak),aa=b[1],ab=b[2],ac=b[3],ad=b[4],ae=b[5],af=b[6],ag=q===w?ak[1]:m===w?a(o[2],ak):ak;if(f(d[8][67],h,t,ag))var
e=[0,eb,aa,ab,ac,ad,ae,0,0,af],i=1;else
var
i=0;break;case
1:var
i=0;break;default:var
x=b[1],y=b[2],z=b[3],A=b[4],B=b[5],D=b[6],E=b[7],F=b[8],G=p(ai),al=q===G?ai[1]:m===G?a(o[2],ai):ai;if(f(d[8][67],h,t,al))var
e=[0,0,x,y,z,A,B,[0,D],[0,E],F],i=1;else{var
H=p(aj),am=q===H?aj[1]:m===H?a(o[2],aj):aj;if(f(d[8][67],h,t,am))var
e=[0,ec,x,y,z,A,B,[0,D],[0,E],F],i=1;else
var
i=0}}}}else
var
i=0;if(!i)var
e=L(ea);var
Q=e[9],R=e[8],S=e[6],U=e[5],V=e[2],n=[0,h],at=e[4],au=e[3],av=e[1],W=bj(k,n,V,U,S,R,Q,ar),X=W[1],aw=W[2],Y=bn(k,n,ap),ax=Y[2],ay=Y[1],az=bo(k,n,ao),aA=bp(k,n,an),aB=[0,X,[0,aw,[0,P,[0,ax,[0,az,[0,aA,[0,bk(J),0]]]]]]],aC=be(ee),Z=a$(k,n[1],5,aC,aB),_=Z[2],r=Z[1],aD=C(r,3)[4],aE=C(r,4)[5],aF=a(d[5][1][8],u),aG=T(c(l[16],aF,ef),_,aD),aH=a(d[5][1][8],u),aI=T(c(l[16],aH,eg),_,aE),aJ=bl(k,h,J,av,[0,au,at,U,S,R],aq),aK=O?a(g[8][3],O[1]):ei,aL=M?a(g[8][3],M[1]):eh,aM=c(d[8][50],h,V),aN=c(d[8][50],h,Q),aO=c(d[8][50],h,X),aP=C(r,0)[1],aQ=C(r,2)[3],aR=a(dQ,[0,aM,aN,aO,C(r,1)[2],aQ,aP,aJ,ay,aG,aI,aK,aL]);c(d[51][8],u,aR);return 0}function
br(a){return typeof
a==="number"?0:0===a[0]?[0,M(a[1])]:[1,M(a[1])]}function
t(e,b,d){return a(ej[3],b[1])?(b[1]=[0,d],0):L(c(l[16],e,ek))}function
et(q,p,o){var
l=a7(p),b=[0,0],d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],i=[0,0],k=[0,0],r=l[2],s=l[1];function
m(a){switch(a[0]){case
0:return t(el,b,br(a[1]));case
1:return t(em,e,a[1]);case
2:return t(en,f,a[1]);case
3:return t(eo,g,a[1]);case
4:var
c=a[1],j=M(a[2]);return t(ep,d,[0,M(c),j]);case
5:return t(eq,i,[0,a[1],a[2]]);case
6:return t(er,h,a[1]);default:return t(es,k,a[1])}}c(j[17][11],m,o);var
a=b[1],n=a?a[1]:0;return bq(q,[0,s,r],d[1],n,e[1],[0,f[1],g[1]],i[1],h[1],k[1])}function
bs(d,a,c){if(a)return a;var
b=bc(d,c);return[0,b[2],[0,b[3],0]]}function
bt(e,a,b,c){var
g=s(a,ab,[0,b]);function
h(d,c){return s(a,aa,[0,b,d,c])}var
i=f(j[17][16],h,c,g);return f(d[59][3],e,a,i)}function
w(b){var
c=a(d[8][3],b);return a(g[12][2][1],c)}function
S(b){var
d=a(g[12][32],0);return c(g[12][2][6],d,b)}function
eu(a){var
b=w(a[2]),c=w(a[3]),d=w(a[4]),e=w(a[5]),f=w(a[6]),g=S(a[7]),h=S(a[8]),i=w(a[9]),j=w(a[10]),k=S([28,[0,ev,a[11]]]);return[0,b,[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,k,[0,S([28,[0,ew,a[12]]]),0]]]]]]]]]]]}function
ex(I,H,G,E){function
b(n){var
b=a(d[78][29][2],n),h=a(d[32][31][8],n);try{var
i=bs(b,G,E),l=[0,b];if(i){var
o=i[2],k=N(d[58][1],0,0,h,b,i[1]),p=function(g){var
i=N(d[58][1],0,0,h,b,g),c=1-N(d[55][11],0,h,b,k,i);if(c){var
j=a(e[3],dD);return f(v[6],0,dE,j)}return c};c(j[17][11],p,o);try{var
D=dC(c(d[8][50],b,k)),m=D}catch(b){b=B(b);if(b!==F)throw b;var
q=a(e[3],dF),r=O(k),s=a(e[3],dG),t=a(e[13],0),u=a(e[3],dH),x=c(e[12],u,t),y=c(e[12],x,s),z=c(e[12],y,r),C=c(e[12],z,q),m=f(v[6],0,dI,C)}var
J=bt(h,l,a(d[8][3],m[1]),i),K=a(g[12][2][1],J),L=w(bm(h,l,H)),M=eu(m),P=a8(I,c(j[18],M,[0,L,[0,K,0]])),Q=a(d[32][30][1],l[1]),R=c(d[32][15],Q,P);return R}throw[0,A,dJ]}catch(b){b=B(b);if(a(d[32][33][5],b))return c(d[32][9],0,b);throw b}}return a(d[32][31][1],b)}var
eA=c(j[17][12],d[5][1][6],[0,ez,[0,ag,ey]]),eB=a(d[5][4][2],eA),eC=0;function
eD(b){var
a=b+1|0;if(!(16<a>>>0))switch(a){case
11:case
15:return 2;case
0:case
13:case
16:return 0}return 1}var
eF=[0,[0,n(eE),eD],eC];function
eG(b){var
a=b+1|0;if(!(14<a>>>0))switch(a){case
9:case
13:return 2;case
0:case
11:case
14:return 0}return 1}var
eI=[0,[0,V(eH),eG],eF];function
eJ(b){var
a=b+1|0;if(!(18<a>>>0))switch(a){case
12:case
17:return 2;case
0:case
9:case
10:case
11:case
14:case
16:case
18:return 0}return 1}var
eL=[0,[0,V(eK),eJ],eI];function
eM(a){if(11<=a)if(14<=a)var
b=15<=a?0:1;else{if(12!==a)return 2;var
b=1}else
var
b=-1===a?1:8<=a?1:0;return b?0:1}var
eO=[0,[0,V(eN),eM],eL];function
eP(b){var
a=b+1|0;if(!(20<a>>>0))switch(a){case
13:case
18:return 2;case
0:case
10:case
11:case
12:case
15:case
17:case
19:case
20:return 0}return 1}var
eR=[0,[0,n(eQ),eP],eO];function
eS(a){if(12<=a)if(15<=a)var
b=17<=a?0:1;else{if(13!==a)return 2;var
b=1}else
var
b=-1===a?1:9<=a?1:0;return b?0:1}var
eU=[0,[0,n(eT),eS],eR];function
eV(a){return 0}var
eX=[0,[0,n(eW),eV],eU];function
eY(a){return 0}var
e0=[0,[0,n(eZ),eY],eX],e1=[0,[0,ab,function(a){return-1===a?0:1}],e0],e2=[0,[0,aa,function(a){return-1===a?0:2===a?2:1}],e1];aF(e3,function(a,b){return bf(e2,a,b)});var
e4=0;function
e5(b){var
a=b+1|0;if(!(15<a>>>0))switch(a){case
10:case
14:return 2;case
0:case
12:case
15:return 0}return 1}var
e7=[0,[0,n(e6),e5],e4];function
e8(a){return 0}var
e_=[0,[0,n(e9),e8],e7];function
e$(a){return 0}var
fb=[0,[0,n(fa),e$],e_],fc=[0,[0,ab,function(a){return-1===a?0:1}],fb],fd=[0,[0,aa,function(a){return-1===a?0:2===a?2:1}],fc];aF(fe,function(e,f){function
b(c){var
b=c[1],d=p(b),e=c[2],f=q===d?b[1]:m===d?a(o[2],b):b;return[0,f,e]}var
d=c(j[17][12],b,fd);return function(a){return a5(d,a)}});function
fg(a,b,c){return aG(ff,a,b,c)}c(d[77][2],fh,fg);var
ao=n(fi),ap=n(fj),aq=n(fk),fm=n(fl),fo=n(fn),fq=n(fp),aM=f(d[53][1],0,fu,W[1]),aN=f(d[53][1],0,fv,d[47][26][1]);function
fw(a){return c(W[22],a,aM[1])}function
fF(e){var
a=e[2],b=e[1],f=c(d[9][7],b,a[1]),h=c(d[9][7],b,a[2]),i=c(d[9][7],b,a[5]),j=c(d[9][7],b,a[6]),k=c(d[9][7],b,a[7]),l=c(d[9][7],b,a[8]),m=c(d[9][7],b,a[9]),n=c(g[5][1],b,a[3]),o=c(g[5][1],b,a[4]),p=c(g[5][1],b,a[10]),q=c(g[5][1],b,a[11]);if(f===a[1])if(h===a[2])if(i===a[5])if(j===a[6])if(k===a[7])if(l===a[8])if(m===a[9])if(n===a[3])if(o===a[4])if(p===a[10])if(q===a[11])return a;return[0,f,h,n,o,i,j,k,l,m,p,q]}function
bu(b){var
a=b[2],c=b[1][1];aM[1]=f(W[4],a[1],a,aM[1]);aN[1]=f(d[47][26][4],c,a,aN[1]);return 0}var
ar=a(d[48][2],fG),fH=ar[8],fI=ar[7];function
fJ(a){return[0,a]}function
fK(c,b){var
a=1===c?1:0;return a?bu(b):a}var
fL=a(d[48][1],[0,ar[1],bu,ar[3],fK,fJ,fF,fI,fH]);function
fM(h,b,j,e){var
i=c(d[8][4],h[1],e);if(9===i[0])if(1===i[2].length-1){var
l=p(P),s=i[1],t=q===l?P[1]:m===l?a(o[2],P):P;if(f(d[8][67],h[1],s,t)){var
u=a(d[71][16],0)[6],v=a(d[49][5],u),w=[0,a(d[8][3],v),[0,b,b,j]];return a(d[8][14],w)}}bh(a(d[50][1],0),h,b,e);var
n=[0,[0,[0,[0,b,[0,e]]],0],[0,[0,b,[0,e]]]];try{var
r=c(g[22][14],n,j),k=r}catch(a){a=B(a);if(a!==F)throw a;var
k=L(fN)}return k[2]}function
f7(n,bt,bs){var
am=[0,0],an=[0,0],ar=[0,0],as=[0,0],at=[0,0],au=[0,0],av=[0,0],aw=[0,0],ax=[0,0];function
bi(b){if(0===b[0]){var
a=b[1];switch(a[0]){case
0:return t(fY,am,br(a[1]));case
1:return t(fZ,ar,a[1]);case
2:return t(f0,as,a[1]);case
3:return t(f1,at,a[1]);case
4:var
c=a[1],d=M(a[2]);return t(f2,an,[0,M(c),d]);case
5:return t(f3,aw,[0,a[1],a[2]]);case
6:return t(f4,av,a[1]);default:return t(f5,ax,a[1])}}return t(f6,au,M(b[1]))}c(j[17][11],bi,bs);var
ay=am[1],P=ay?ay[1]:0,az=ax[1],aA=av[1],aB=aw[1],aC=at[1],aD=as[1],aE=ar[1],aF=au[1],bm=an[1],aL=c(j[18],ah,fO);a(d[71][3],aL);var
ab=a7(bt),u=ab[2],v=ab[1],k=a(d[50][1],0),e=[0,v],aH=N(d[58][1],0,0,k,e[1],u),I=c(d[8][4],e[1],aH);if(9===I[0]){var
b=I[2],Q=b.length-1-8|0;if(2<Q>>>0)var
i=0;else{var
J=I[1];switch(Q){case
0:var
R=b[1],S=b[2],U=b[3],V=b[4],W=b[5],X=b[6],Y=b[7],Z=b[8],_=p(aq),aI=q===_?aq[1]:m===_?a(o[2],aq):aq;if(f(d[84][30],e[1],aI,J))var
h=[0,fs,R,S,U,V,W,0,0,X,Y,Z,s(e,fq,[0,R,S,U,V,W,X,Y,Z,u])],i=1;else
var
i=0;break;case
1:var
i=0;break;default:var
x=b[1],y=b[2],z=b[3],A=b[4],B=b[5],D=b[6],E=b[7],F=b[8],G=b[9],H=b[10],$=p(ao),aJ=q===$?ao[1]:m===$?a(o[2],ao):ao;if(f(d[84][30],e[1],aJ,J))var
h=[0,0,x,y,z,A,B,[0,D],[0,E],F,G,H,s(e,fm,[0,x,y,z,A,B,D,E,F,G,H,u])],i=1;else{var
aa=p(ap),aK=q===aa?ap[1]:m===aa?a(o[2],ap):ap;if(f(d[84][30],e[1],aK,J))var
h=[0,ft,x,y,z,A,B,[0,D],[0,E],F,G,H,s(e,fo,[0,x,y,z,A,B,D,E,F,G,H,u])],i=1;else
var
i=0}}}}else
var
i=0;if(!i)var
h=L(fr);var
K=h[11],ac=h[8],ad=h[6],ae=h[5],O=h[2],aM=h[12],aN=h[10],aO=h[4],aP=h[3],aQ=h[1],af=bj(k,e,O,ae,ad,ac,K,bm),ag=af[2],ai=af[1];bq(n,[0,e[1],aM],[0,[0,ai,ag]],P,aE,fP,aB,aA,az);var
aj=bn(k,e,aB),aR=aj[2],aS=aj[1],aT=bo(k,e,aA),aU=bp(k,e,az),aV=fM(e,O,aN,K),aW=[0,ai,[0,ag,[0,aV,[0,u,[0,aR,[0,aT,[0,aU,[0,bk(P),0]]]]]]]],aG=[m,function(c){var
b=a(d[5][5][1],fQ);return f(d[5][7][1],[0,eB],d[5][4][1],b)}],ak=a$(k,e[1],9,aG,aW),w=ak[2],r=ak[1],aX=C(r,3)[4],aY=C(r,4)[5],aZ=C(r,5)[6],a0=C(r,6)[7];if(aF)var
a1=[0,c(d[8][50],v,aF[1])],a2=[0,C(r,8)[9],a1],al=a(d[7][17],a2);else
var
al=C(r,7)[8];var
a3=a(d[5][1][8],n),a4=T(c(l[16],a3,fR),w,aX),a5=a(d[5][1][8],n),a6=T(c(l[16],a5,fS),w,aY),a8=a(d[5][1][8],n),a9=T(c(l[16],a8,fT),w,aZ),a_=a(d[5][1][8],n),ba=T(c(l[16],a_,fU),w,a0),bb=a(d[5][1][8],n),bc=T(c(l[16],bb,fV),w,al),bd=bl(k,v,P,aQ,[0,aP,aO,ae,ad,ac],aE),be=aD?a(g[8][3],aD[1]):fX,bf=aC?a(g[8][3],aC[1]):fW,bg=c(d[8][50],v,O),bh=a(fL,[0,bg,c(d[8][50],v,K),bd,aS,a4,a6,a9,ba,bc,be,bf]);c(d[51][8],n,bh);return 0}function
f8(a){var
b=w(a[2]),c=S(a[3]),d=S(a[4]),e=w(a[5]),f=w(a[7]),g=w(a[6]),h=w(a[8]),i=w(a[9]),j=S([28,[0,f9,a[10]]]);return[0,b,[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,S([28,[0,f_,a[11]]]),0]]]]]]]]]]}var
G=[0,cj,ci,ck,et,aL,ex,f7,aN,function(J,I,H,G){function
b(n){var
b=a(d[78][29][2],n),h=a(d[32][31][8],n);try{var
i=bs(b,H,G),l=[0,b],o=c(j[18],ah,fx);a(d[71][3],o);if(i){var
p=i[2],k=N(d[58][1],0,0,h,b,i[1]),q=function(g){var
i=N(d[58][1],0,0,h,b,g),c=1-N(d[55][11],0,h,b,k,i);if(c){var
j=a(e[3],fy);return f(v[6],0,fz,j)}return c};c(j[17][11],q,p);try{var
E=fw(c(d[8][50],b,k)),m=E}catch(b){b=B(b);if(b!==F)throw b;var
r=a(e[3],fA),s=O(k),t=a(e[3],fB),u=a(e[13],0),x=a(e[3],fC),y=c(e[12],x,u),z=c(e[12],y,t),C=c(e[12],z,s),D=c(e[12],C,r),m=f(v[6],0,fD,D)}var
K=bt(h,l,a(d[8][3],m[1]),i),L=a(g[12][2][1],K),M=w(bm(h,l,I)),P=f8(m),Q=a8(J,c(j[18],P,[0,M,[0,L,0]])),R=a(d[32][30][1],l[1]),S=c(d[32][15],R,Q);return S}throw[0,A,fE]}catch(b){b=B(b);if(a(d[32][33][5],b))return c(d[32][9],0,b);throw b}}return a(d[32][31][1],b)}];aS(332,G,"Newring_plugin.Newring");a(h[7][1],z);var
f$=0,gb=[0,function(b){if(b)if(!b[2]){var
e=b[1],f=a(i[6],d[70][6]),h=c(g[12][2][7],f,e);return function(b){return a(G[2],h)}}return a(l[2],ga)},f$],gd=[0,function(b){if(b){var
e=b[2];if(e)if(!e[2]){var
f=e[1],h=b[1],j=a(i[6],d[70][6]),k=c(g[12][2][7],j,h),m=a(i[6],d[70][9]),n=c(g[12][2][7],m,f);return function(a){return c(G[1],k,n)}}}return a(l[2],gc)},gb],ge=a(j[19][12],gd);f(g[6][9],0,[0,z,gf],ge);function
gg(s){var
l=[0,a(d[5][1][7],gh)],b=d[70][6],i=0,j=0;if(0===b[0]){var
m=[0,[0,gj,[0,[1,c(k[9],0,[0,[5,[0,b[1]]],l])],j]],i],o=[0,a(d[5][1][7],gk)],e=d[70][9],n=0;if(0===e[0]){var
p=[0,gm,[0,[1,c(k[9],0,[0,[5,[0,e[1]]],o])],n]],q=[0,a(d[5][1][7],gn)],h=d[70][6];if(0===h[0]){var
r=[0,[0,gp,[0,[1,c(k[9],0,[0,[5,[0,h[1]]],q])],p]],m];return f(g[9][4],[0,z,gq],0,r)}throw[0,A,go]}throw[0,A,gl]}throw[0,A,gi]}c(h[7][3],gg,z);var
gr=0,gt=[0,function(b){if(b){var
e=b[2];if(e)if(!e[2]){var
f=e[1],h=b[1],j=a(i[6],d[70][11]),k=c(g[12][2][7],j,h),m=a(i[17],d[70][26]),n=a(i[6],m),o=c(g[12][2][7],n,f);return function(a){return c(G[3],k,o)}}}return a(l[2],gs)},gr],gu=a(j[19][12],gt);f(g[6][9],0,[0,z,gv],gu);function
gw(n){var
i=[0,a(d[5][1][7],gy)],b=d[70][26],h=0;if(0===b[0]){var
j=[0,gA,[0,[1,c(k[9],0,[0,[0,[5,[0,b[1]]]],i])],gx]],l=[0,a(d[5][1][7],gB)],e=d[70][11];if(0===e[0]){var
m=[0,[0,gD,[0,[1,c(k[9],0,[0,[5,[0,e[1]]],l])],j]],h];return f(g[9][4],[0,z,gE],0,m)}throw[0,A,gC]}throw[0,A,gz]}c(h[7][3],gw,z);function
as(b){switch(b[0]){case
0:var
h=b[1];if(typeof
h==="number")return a(e[3],gF);else{if(0===h[0]){var
k=c(e[31],d[I][8],h[1]),l=a(e[3],gG);return c(e[12],l,k)}var
m=c(e[31],d[I][8],h[1]),n=a(e[3],gH);return c(e[12],n,m)}case
1:var
i=b[1];if(0===i[0]){var
o=i[1],p=a(e[3],gI),q=a(g[2][18],o),r=a(e[3],gJ),s=a(e[13],0),t=a(e[3],gK),u=c(e[12],t,s),v=c(e[12],u,r),w=c(e[12],v,q);return c(e[12],w,p)}var
x=i[1],y=a(e[3],gL),z=f(e[38],e[13],d[47][17],x),A=a(e[3],gM),B=a(e[13],0),C=a(e[3],gN),D=c(e[12],C,B),E=c(e[12],D,A),F=c(e[12],E,z);return c(e[12],F,y);case
2:var
G=b[1],H=a(e[3],gO),J=a(g[2][18],G),K=a(e[3],gP),L=a(e[13],0),M=a(e[3],gQ),N=c(e[12],M,L),O=c(e[12],N,K),P=c(e[12],O,J);return c(e[12],P,H);case
3:var
Q=b[1],R=a(e[3],gR),S=a(g[2][18],Q),T=a(e[3],gS),U=a(e[13],0),V=a(e[3],gT),W=c(e[12],V,U),X=c(e[12],W,T),Y=c(e[12],X,S);return c(e[12],Y,R);case
4:var
Z=b[1],_=c(e[31],d[I][8],b[2]),$=c(e[31],d[I][8],Z),aa=a(e[3],gU),ab=c(e[12],aa,$);return c(e[12],ab,_);case
5:var
j=b[1];if(0===j[0]){var
ac=b[2],ad=j[1],ae=a(e[3],gV),af=a(g[2][18],ad),ag=a(e[3],gW),ah=a(e[13],0),ai=c(e[31],d[I][8],ac),aj=a(e[3],gX),ak=c(e[12],aj,ai),al=c(e[12],ak,ah),am=c(e[12],al,ag),an=c(e[12],am,af);return c(e[12],an,ae)}var
ao=b[2],ap=j[1],aq=a(e[3],gY),ar=f(e[38],e[13],d[47][17],ap),as=a(e[3],gZ),at=a(e[13],0),au=c(e[31],d[I][8],ao),av=a(e[3],g0),aw=c(e[12],av,au),ax=c(e[12],aw,at),ay=c(e[12],ax,as),az=c(e[12],ay,ar);return c(e[12],az,aq);case
6:var
aA=c(e[31],d[I][8],b[1]),aB=a(e[3],g1);return c(e[12],aB,aA);default:var
aC=c(e[31],d[I][8],b[1]),aD=a(e[3],g2);return c(e[12],aD,aC)}}var
aO=a(i[3],g3),g4=a(i[4],aO),at=f(h[4][4],h[4][5],g5,g4),g6=0,g7=0;function
g8(a,c,b){return[0,[0,a]]}var
g9=[6,h[4][9][5]],g$=[0,[0,[0,[0,0,[0,a(h[5][1],g_)]],g9],g8],g7];function
ha(b,a){return hb}var
hd=[0,[0,[0,0,[0,a(h[5][1],hc)]],ha],g$];function
he(a,c,b){return[0,[1,a]]}var
hf=[6,h[4][9][5]],hh=[0,[0,[0,[0,0,[0,a(h[5][1],hg)]],hf],he],hd];function
hi(e,a,d,c,b){return[1,[0,a]]}var
hk=[0,a(h[5][1],hj)],hl=[6,g[3][18]],hn=[0,a(h[5][1],hm)],hp=[0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],ho)]],hn],hl],hk],hi],hh];function
hq(e,a,d,c,b){return[1,[1,a]]}var
hs=[0,a(h[5][1],hr)],ht=[1,[6,h[4][9][8]]],hv=[0,a(h[5][1],hu)],hx=[0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],hw)]],hv],ht],hs],hq],hp];function
hy(e,a,d,c,b){return[2,a]}var
hA=[0,a(h[5][1],hz)],hB=[6,g[3][18]],hD=[0,a(h[5][1],hC)],hF=[0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],hE)]],hD],hB],hA],hy],hx];function
hG(e,a,d,c,b){return[3,a]}var
hI=[0,a(h[5][1],hH)],hJ=[6,g[3][18]],hL=[0,a(h[5][1],hK)],hN=[0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],hM)]],hL],hJ],hI],hG],hF];function
hO(b,a,d,c){return[4,a,b]}var
hP=[6,h[4][9][5]],hQ=[6,h[4][9][5]],hS=[0,[0,[0,[0,[0,0,[0,a(h[5][1],hR)]],hQ],hP],hO],hN];function
hT(a,c,b){return[6,a]}var
hU=[6,h[4][9][5]],hW=[0,[0,[0,[0,0,[0,a(h[5][1],hV)]],hU],hT],hS];function
hX(f,b,e,a,d,c){return[5,[1,b],a]}var
hZ=[0,a(h[5][1],hY)],h0=[1,[6,h[4][9][8]]],h2=[0,a(h[5][1],h1)],h3=[6,h[4][9][5]],h5=[0,[0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],h4)]],h3],h2],h0],hZ],hX],hW];function
h6(f,b,e,a,d,c){return[5,[0,b],a]}var
h8=[0,a(h[5][1],h7)],h9=[6,g[3][18]],h$=[0,a(h[5][1],h_)],ia=[6,h[4][9][5]],ic=[0,[0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],ib)]],ia],h$],h9],h8],h6],h5];function
id(a,c,b){return[7,a]}var
ie=[6,h[4][9][5]],ih=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(h[5][1],ig)]],ie],id],ic]],g6]];f(h[4][6],at,0,ih);function
ii(h,g,d,c){var
b=a(e[3],ij);return f(v[3],0,0,b)}function
ik(h,g,d,c){var
b=a(e[3],il);return f(v[3],0,0,b)}function
im(c,b,a){return as}H(g[2][1],aO,im,ik,ii);function
bv(b){var
c=f(e[38],e[28],as,b);return a(e[45],c)}var
Y=a(i[3],io),ip=a(i[4],Y),bw=f(h[4][4],h[4][5],iq,ip),ir=0,is=0;function
it(d,a,c,b){return a}var
iv=[0,a(h[5][1],iu)],ix=[2,[6,at],[0,a(h[5][1],iw)]],iz=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],iy)]],ix],iv],it],is]],ir]];f(h[4][6],bw,0,iz);function
iA(h,g,d,c){var
b=a(e[3],iB);return f(v[3],0,0,b)}function
iC(h,g,d,c){var
b=a(e[3],iD);return f(v[3],0,0,b)}function
iE(c,b,a){return bv}H(g[2][1],Y,iE,iC,iA);var
iF=0,iK=[0,[0,0,function(b){return b?a(l[2],iG):function(h){var
b=a(e[22],iH);c(X[7],0,b);var
f=G[5][1];function
g(f,b){var
g=a(d[90][6],b[2]),h=a(e[3],iI),i=a(e[13],0),j=a(d[90][6],b[1]),k=a(e[3],iJ),l=a(e[13],0),m=a(d[47][23],f),n=a(d[I][2],m),o=c(e[12],n,l),p=c(e[12],o,k),q=c(e[12],p,j),r=c(e[12],q,i),s=c(e[12],r,h),t=c(e[12],s,g),u=c(e[26],2,t);return c(X[7],0,u)}return c(d[47][26][10],g,f)}}],iF],iM=[0,[0,0,function(b){if(b){var
e=b[2];if(e){var
g=e[2];if(g)if(!g[2]){var
j=g[1],k=e[1],m=b[1],n=a(i[4],d[70][9]),o=c(i[8],n,m),p=a(i[4],d[70][11]),q=c(i[8],p,k),r=a(i[18],Y),s=a(i[4],r),h=c(i[8],s,j);return function(b){var
a=h?h[1]:0;return f(G[4],o,q,a)}}}}return a(l[2],iL)}],iK];function
iN(b,a){return f(h[8][1],a[1],[0,iO,b],a[2])}c(Z[80],iN,iM);var
iP=0,iR=[0,function(b){return b?a(l[2],iQ):function(a){return d[$][3]}},iP],iT=[0,function(b){if(b){var
c=b[2];if(c){var
e=c[2];if(e)if(!e[2])return function(a){return d[$][4]}}}return a(l[2],iS)},iR];function
iU(b,a){return c(d[$][1],[0,iV,b],a)}c(Z[80],iU,iT);var
iX=[5,[6,a(h[4][7],Y)]],iY=a(i[18],Y),iZ=[0,[0,a(i[4],iY)],iX],i0=[0,[1,c(k[9],0,iZ)],0],i1=[6,a(h[4][7],d[70][11])],i2=[0,[0,a(i[4],d[70][11])],i1],i4=[0,i3,[0,[1,c(k[9],0,i2)],i0]],i5=[6,a(h[4][7],d[70][9])],i6=[0,[0,a(i[4],d[70][9])],i5],i9=[0,[0,i8,[0,i7,[0,[1,c(k[9],0,i6)],i4]]],iW];function
i_(b,a){return f(h[6][1],[0,i$,b],0,a)}c(Z[80],i_,i9);var
ja=0,jc=[0,function(b){if(b){var
e=b[2];if(e){var
f=e[2];if(f)if(!f[2]){var
h=f[1],k=e[1],m=b[1],n=a(i[6],g[1][1]),o=c(g[12][2][7],n,m),p=a(i[17],d[70][11]),q=a(i[6],p),r=c(g[12][2][7],q,k),s=a(i[17],d[70][11]),t=a(i[6],s),u=c(g[12][2][7],t,h);return function(c){var
b=a(j[17][93],u);return H(G[6],o,r,b[2],b[1])}}}}return a(l[2],jb)},ja],jd=a(j[19][12],jc);f(g[6][9],0,[0,z,je],jd);function
jf(s){var
l=[0,a(d[5][1][7],jg)],b=d[70][11],i=0,j=0;if(0===b[0]){var
m=[0,ji,[0,[1,c(k[9],0,[0,[0,[5,[0,b[1]]]],l])],j]],n=[0,a(d[5][1][7],jj)],e=d[70][11];if(0===e[0]){var
o=[0,jl,[0,[1,c(k[9],0,[0,[2,[5,[0,e[1]]]],n])],m]],p=[0,a(d[5][1][7],jm)],h=g[1][1],q=0;if(0===h[0]){var
r=[0,[0,jo,[0,[1,c(k[9],0,[0,[6,[0,h[1]],q],p])],o]],i];return f(g[9][4],[0,z,jp],0,r)}throw[0,A,jn]}throw[0,A,jk]}throw[0,A,jh]}c(h[7][3],jf,z);function
aP(b){if(0===b[0])return as(b[1]);var
f=c(e[31],d[I][8],b[1]),g=a(e[3],jq);return c(e[12],g,f)}var
aQ=a(i[3],jr),js=a(i[4],aQ),aR=f(h[4][4],h[4][5],jt,js),ju=0,jv=0,jw=[0,[0,[0,0,[6,at]],function(a,b){return[0,a]}],jv];function
jx(a,c,b){return[1,a]}var
jy=[6,h[4][9][5]],jA=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(h[5][1],jz)]],jy],jx],jw]],ju]];f(h[4][6],aR,0,jA);function
jB(h,g,d,c){var
b=a(e[3],jC);return f(v[3],0,0,b)}function
jD(h,g,d,c){var
b=a(e[3],jE);return f(v[3],0,0,b)}function
jF(c,b,a){return aP}H(g[2][1],aQ,jF,jD,jB);function
bx(b){var
c=f(e[38],e[28],aP,b);return a(e[45],c)}var
_=a(i[3],jG),jH=a(i[4],_),by=f(h[4][4],h[4][5],jI,jH),jJ=0,jK=0;function
jL(d,a,c,b){return a}var
jN=[0,a(h[5][1],jM)],jP=[2,[6,aR],[0,a(h[5][1],jO)]],jR=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,a(h[5][1],jQ)]],jP],jN],jL],jK]],jJ]];f(h[4][6],by,0,jR);function
jS(h,g,d,c){var
b=a(e[3],jT);return f(v[3],0,0,b)}function
jU(h,g,d,c){var
b=a(e[3],jV);return f(v[3],0,0,b)}function
jW(c,b,a){return bx}H(g[2][1],_,jW,jU,jS);var
jX=0,j2=[0,[0,0,function(b){return b?a(l[2],jY):function(h){var
b=a(e[22],jZ);c(X[7],0,b);var
f=G[8][1];function
g(f,b){var
g=a(d[90][6],b[2]),h=a(e[3],j0),i=a(e[13],0),j=a(d[90][6],b[1]),k=a(e[3],j1),l=a(e[13],0),m=a(d[47][23],f),n=a(d[I][2],m),o=c(e[12],n,l),p=c(e[12],o,k),q=c(e[12],p,j),r=c(e[12],q,i),s=c(e[12],r,h),t=c(e[12],s,g),u=c(e[26],2,t);return c(X[7],0,u)}return c(d[47][26][10],g,f)}}],jX],j4=[0,[0,0,function(b){if(b){var
e=b[2];if(e){var
g=e[2];if(g)if(!g[2]){var
j=g[1],k=e[1],m=b[1],n=a(i[4],d[70][9]),o=c(i[8],n,m),p=a(i[4],d[70][11]),q=c(i[8],p,k),r=a(i[18],_),s=a(i[4],r),h=c(i[8],s,j);return function(b){var
a=h?h[1]:0;return f(G[7],o,q,a)}}}}return a(l[2],j3)}],j2];function
j5(b,a){return f(h[8][1],a[1],[0,j6,b],a[2])}c(Z[80],j5,j4);var
j7=0,j9=[0,function(b){return b?a(l[2],j8):function(a){return d[$][3]}},j7],j$=[0,function(b){if(b){var
c=b[2];if(c){var
e=c[2];if(e)if(!e[2])return function(a){return d[$][4]}}}return a(l[2],j_)},j9];function
ka(b,a){return c(d[$][1],[0,kb,b],a)}c(Z[80],ka,j$);var
kd=[5,[6,a(h[4][7],_)]],ke=a(i[18],_),kf=[0,[0,a(i[4],ke)],kd],kg=[0,[1,c(k[9],0,kf)],0],kh=[6,a(h[4][7],d[70][11])],ki=[0,[0,a(i[4],d[70][11])],kh],kk=[0,kj,[0,[1,c(k[9],0,ki)],kg]],kl=[6,a(h[4][7],d[70][9])],km=[0,[0,a(i[4],d[70][9])],kl],kp=[0,[0,ko,[0,kn,[0,[1,c(k[9],0,km)],kk]]],kc];function
kq(b,a){return f(h[6][1],[0,kr,b],0,a)}c(Z[80],kq,kp);var
ks=0,ku=[0,function(b){if(b){var
e=b[2];if(e){var
f=e[2];if(f)if(!f[2]){var
h=f[1],k=e[1],m=b[1],n=a(i[6],g[1][1]),o=c(g[12][2][7],n,m),p=a(i[17],d[70][11]),q=a(i[6],p),r=c(g[12][2][7],q,k),s=a(i[17],d[70][11]),t=a(i[6],s),u=c(g[12][2][7],t,h);return function(c){var
b=a(j[17][93],u);return H(G[9],o,r,b[2],b[1])}}}}return a(l[2],kt)},ks],kv=a(j[19][12],ku);f(g[6][9],0,[0,z,kw],kv);function
kx(r){var
l=[0,a(d[5][1][7],ky)],b=d[70][11],i=0,j=0;if(0===b[0]){var
m=[0,kA,[0,[1,c(k[9],0,[0,[0,[5,[0,b[1]]]],l])],j]],n=[0,a(d[5][1][7],kB)],e=d[70][11];if(0===e[0]){var
o=[0,kD,[0,[1,c(k[9],0,[0,[2,[5,[0,e[1]]]],n])],m]],p=[0,a(d[5][1][7],kE)],h=g[1][1];if(0===h[0]){var
q=[0,[0,kG,[0,[1,c(k[9],0,[0,[5,[0,h[1]]],p])],o]],i];return f(g[9][4],[0,z,kH],0,q)}throw[0,A,kF]}throw[0,A,kC]}throw[0,A,kz]}c(h[7][3],kx,z);var
bz=[0,z,as,aO,at,bv,Y,bw,aP,aQ,aR,bx,_,by];aS(335,bz,"Newring_plugin.G_newring");aS(336,[0,G,bz],"Newring_plugin");return});
