(function(a9){"use strict";var
S="Unfolding",h=112,B="f",n=111,m=118,v="X2",Q="Logic",e="X1",k="tauto_flags",P="Intuition",u="id",R="Coq",j=a9.jsoo_runtime,b=j.caml_new_string,O=j.caml_register_global,a8=j.caml_wrap_exception;function
d(a,b){return a.length==1?a(b):j.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):j.caml_call_gen(a,[b,c])}function
A(a,b,c,d){return a.length==3?a(b,c,d):j.caml_call_gen(a,[b,c,d])}function
l(a,b,c,d,e){return a.length==4?a(b,c,d,e):j.caml_call_gen(a,[b,c,d,e])}var
i=j.caml_get_global_data(),w=b("tauto_plugin"),a=i.API,r=i.Ltac_plugin,p=i.Util,q=i.Loc,D=i.Pp,aL=i.Not_found,Y=i.Assert_failure,U=i.Pervasives;d(a[76][3],w);var
aO=b(B),aP=b("x"),aD=[22,0],az=[0,b(Q),[0,b("Init"),[0,b(R),0]]],aw=b(e),ax=b(v),ay=b(u),au=b(e),aq=b(e),ar=b(v),as=b(u),ao=b(e),am=b(e),ak=b(e),W=b(k),X=[0,b("plugins/ltac/tauto.ml"),61,12],T=b("tauto: anomaly"),V=b(k),_=[0,b(P),[0,b("Negation"),[0,b(S),0]]],$=b("unfolding of not in intuition"),ac=[0,b(P),[0,b("Iff"),[0,b(S),0]]],ad=b("unfolding of iff in intuition"),ah=[0,0,0],aA=b("iff"),aB=b("not"),aE=[0,b("Classical_Prop"),[0,b(Q),[0,b(R),0]]],aG=b("NNPP"),aM=[0,1,0,1,1,0],aN=[0,0,0,0,0,0],aQ=[0,b(k),[0,b(e),0]],aR=b("is_empty"),aS=[0,b(k),[0,b(e),0]],aT=b("is_unit_or_eq"),aU=[0,b(k),[0,b(e),0]],aV=b("is_disj"),aW=[0,b(k),[0,b(e),0]],aX=b("is_conj"),aY=[0,b(k),[0,b(e),[0,b(v),[0,b(u),0]]]],aZ=b("flatten_contravariant_disj"),a0=[0,b(k),[0,b(e),[0,b(v),[0,b(u),0]]]],a1=b("flatten_contravariant_conj"),a2=b("apply_nnpp"),a3=b("reduction_not_iff"),a4=[0,b(B),0],a5=b("with_uniform_flags"),a6=[0,b(B),0],a7=b("with_power_flags");function
f(f,e){var
g=e[1],h=d(a[5][1][6],f),i=c(a[5][1][11][22],h,g),b=d(r[12][2][2],i);return b?b[1]:d(U[2],T)}var
C=d(a[35][1][1],V);function
s(e){var
f=e[1],g=d(a[5][1][6],W),b=c(a[5][1][11][22],g,f),h=b[2];if(c(a[35][1][3],b[1],C))return h;throw[0,Y,X]}var
x=[0,1],y=[0,0];function
Z(a){x[1]=a;return 0}var
aa=[0,0,$,_,function(a){return x[1]},Z];c(a[42][1],0,aa);function
ab(a){y[1]=a;return 0}var
ae=[0,1,ad,ac,function(a){return y[1]},ab];c(a[42][1],0,ae);var
t=d(a[32][10],0),af=d(D[7],0),ag=c(a[h][28][2],0,af),o=d(a[32][19],ag),E=a[n][14];function
F(b,c){var
e=b?[0,[0,b[1]]]:0,f=l(a[n][25],1,e,0,c);return d(a[32][19],f)}function
z(b){return d(a[n][5],b)}function
G(b){return d(a[n][58],[0,b,0])}var
H=a[n][34],ai=c(a[n][47],0,ah);function
aj(e,b){function
d(d){var
e=f(ak,b);return c(a[m][5],d,e)?t:o}return c(a[32][32][1],a[32][14],d)}function
al(e,b){function
d(d){var
e=s(b)[5]?a[m][6]:a[m][7];return c(e,d,f(am,b))?t:o}return c(a[32][32][1],a[32][14],d)}function
I(b,e){var
f=c(a[8][69],b,e);if(f){var
h=c(a[8][46],b,e)[1],g=c(a[8][4],b,h);return 11===g[0]?2===d(a[50][6],g[1][1])[1][6]?1:0:0}return f}function
an(e,d){function
b(c){var
b=s(d),e=f(ao,d),g=b[2]?I(c,e)?0:1:0;if(!g)if(l(a[m][8],[0,b[4]],[0,b[1]],c,e))return t;return o}return c(a[32][32][1],a[32][14],b)}function
ap(g,b){function
e(e){var
g=s(b),n=f(aq,b),q=f(ar,b),i=f(as,b),j=l(a[m][9],[0,g[3]],[0,g[1]],e,n);if(j){var
k=j[1][2],r=A(p[17][16],a[8][5],k,q),t=function(a){return E},u=c(a[h][28][28],t,k),v=[0,u,[0,z(i),[0,ai,[0,H,0]]]],w=d(a[h][28][26],v),x=[0,G(c(a[8][32],e,i)),0],y=[0,F([0,w],r),x];return d(a[h][28][26],y)}return o}return c(a[32][32][1],a[32][14],e)}function
at(e,d){function
b(c){var
b=s(d),e=f(au,d),g=b[2]?I(c,e)?0:1:0;if(!g)if(l(a[m][2],[0,b[4]],[0,b[1]],c,e))return t;return o}return c(a[32][32][1],a[32][14],b)}function
av(g,b){function
e(e){var
g=s(b),k=f(aw,b),q=f(ax,b),i=f(ay,b),j=l(a[m][3],[0,g[3]],[0,g[1]],e,k);if(j){var
r=j[1][2],t=function(e,b){var
f=c(a[8][5],b,q),g=[0,l(a[n][44],0,0,e+1|0,0),[0,H,0]],j=[0,E,[0,z(i),g]];return F([0,d(a[h][28][26],j)],f)},u=c(p[17][13],t,r),v=G(c(a[8][32],e,i)),w=d(a[h][28][26],u);return c(a[h][28][4],w,v)}return o}return c(a[32][32][1],a[32][14],e)}function
J(b){var
e=c(p[17][12],a[5][1][6],az),f=d(a[5][4][2],e),g=d(a[5][5][1],b);return[0,0,[0,[0,[1,c(a[5][8][3],[0,f],g)],0]]]}var
K=J(aA),L=J(aB);function
aC(g,e){function
b(b){return[0,c(q[9],0,[10,[5,b],a[137][3]])]}var
d=y[1],f=0===x[1]?0===d?aD:b([0,K,0]):0===d?b([0,L,0]):b([0,L,[0,K,0]]);return c(r[12][22],e,f)}var
aF=c(p[17][12],a[5][1][6],aE),aH=d(a[5][1][6],aG),aI=d(a[5][4][2],aF),aJ=c(a[47][2],aI,aH);function
aK(g,f){function
b(i){try{var
b=d(a[81][3],aJ),f=d(a[h][28][3],b),g=c(a[32][32][1],f,z);return g}catch(b){b=a8(b);if(b===aL){var
e=d(D[7],0);return c(a[h][28][2],0,e)}throw b}}var
e=d(a[32][10],0);return c(a[32][11],e,b)}function
M(f,n,b){var
g=d(a[5][1][6],aO),h=c(q[9],0,g),i=d(a[5][1][6],aP),e=c(q[9],0,i),j=b[2],k=[0,A(a[5][1][11][4],e[2],[0,C,f],b[1]),j],l=[3,c(q[9],0,[0,[1,h],[0,[2,[1,e]],0]])],m=[29,c(q[9],0,l)];return c(r[12][22],k,m)}function
g(g,b,f){function
h(b){return d(a[5][1][6],b)}var
i=c(p[17][12],h,f);function
j(a){return[0,a]}var
e=[0,w,b],k=c(p[17][12],j,i);A(r[6][9],0,e,[0,g]);var
m=[28,[0,k,[31,c(q[9],0,[0,[0,e,0],0])]]];function
n(e){var
c=d(a[5][1][6],b);return l(r[6][4],1,1,c,m)}return c(a[76][1],n,w)}g(aj,aR,aQ);g(al,aT,aS);g(at,aV,aU);g(an,aX,aW);g(av,aZ,aY);g(ap,a1,a0);g(aK,a2,0);g(aC,a3,0);g(function(a,b){return M(aM,a,b)},a5,a4);g(function(a,b){return M(aN,a,b)},a7,a6);var
N=[0];O(57,N,"Tauto_plugin.Tauto");O(58,[0,N],"Tauto_plugin");return});
