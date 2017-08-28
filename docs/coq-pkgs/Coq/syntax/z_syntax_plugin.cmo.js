(function(aJ){"use strict";var
ae="Z",ad="N",ac="positive",h=aJ.jsoo_runtime,f=h.caml_new_string,ab=h.caml_register_global,A=h.caml_wrap_exception;function
c(a,b){return a.length==1?a(b):h.caml_call_gen(a,[b])}function
a(a,b,c){return a.length==2?a(b,c):h.caml_call_gen(a,[b,c])}function
aa(a,b,c,d){return a.length==3?a(b,c,d):h.caml_call_gen(a,[b,c,d])}function
B(a,b,c,d,e){return a.length==4?a(b,c,d,e):h.caml_call_gen(a,[b,c,d,e])}var
k=h.caml_get_global_data(),C=f("z_syntax_plugin"),g=[0,f("Coq"),[0,f("Numbers"),[0,f("BinNums"),0]]],d=k.API,e=k.Bigint,b=k.CAst,I=k.Pp,J=k.CErrors,af=k.Util;c(d[76][3],C);var
i=[248,f("Z_syntax.Non_closed_number"),h.caml_fresh_oo_id(0)],au=f('No negative numbers in type "N".'),av=[0,f("interp_N")],ak=f('Only strictly positive numbers in type "positive".'),al=[0,f("interp_positive")],ag=f(ac),ah=f(ac),ap=f("positive_scope"),aq=f(ad),at=f(ad),az=f("N_scope"),aA=f(ae),aB=f(ae),aI=f("Z_scope");function
l(b){var
e=a(af[17][14],d[5][1][6],b);return c(d[5][4][2],e)}function
o(e,b){var
f=c(d[5][1][6],b),g=l(e);return a(d[47][2],g,f)}var
D=o(g,ag);function
p(c,b){return a(d[36][9],c,b)}var
ai=c(d[5][1][6],ah),m=p(l(g),ai),E=[0,[0,m,0],1],F=[0,[0,m,0],2],G=[0,[0,m,0],3],q=[3,E],r=[3,F],s=[3,G],aj=[2,[0,m,0]];function
t(d,g){var
i=a(b[1],d,[0,q,0]),j=a(b[1],d,[0,s,0]),k=a(b[1],d,[0,r,0]);function
f(l){var
h=c(e[8],l),g=h[1];if(0===h[2]){var
m=[4,k,[0,f(g),0]];return a(b[1],d,m)}if(a(e[17],g,e[5]))return j;var
n=[4,i,[0,f(g),0]];return a(b[1],d,n)}return f(g)}function
H(a){var
b=c(I[3],ak);return aa(J[6],a,al,b)}function
K(b,a){return c(e[18],a)?t(b,a):H(b)}function
j(f){function
g(b){switch(b[0]){case
0:if(a(d[36][7],b[1],s))return e[6];break;case
4:var
g=b[1][1];if(0===g[0]){var
f=b[2];if(f)if(!f[2]){var
h=f[1],k=g[1];if(a(d[36][7],k,r)){var
l=j(h);return c(e[11],l)}if(a(d[36][7],k,q)){var
m=j(h),n=c(e[11],m);return c(e[9],n)}}}break}throw i}return a(b[5],g,f)}function
L(a){try{var
b=[0,j(a)];return b}catch(a){a=A(a);if(a===i)return 0;throw a}}var
am=[0,a(b[1],0,[0,s,0]),0],an=[0,a(b[1],0,[0,r,0]),am],ao=[0,[0,a(b[1],0,[0,q,0]),an],L,1];B(d[75][2],ap,[0,D,g],K,ao);var
ar=c(d[5][1][6],aq),u=p(l(g),ar),M=[0,[0,u,0],1],N=[0,[0,u,0],2],v=[3,M],w=[3,N],O=o(g,at),as=[2,[0,u,0]];function
P(d,h,c){if(a(e[17],c,e[5]))var
f=[0,v,0];else
var
g=[0,t(d,c),0],f=[4,a(b[1],0,[0,w,0]),g];return a(b[1],d,f)}function
Q(a){var
b=c(I[3],au);return aa(J[6],a,av,b)}function
R(b,a){return c(e[20],a)?P(b,1,a):Q(b)}function
aw(b){switch(b[0]){case
0:if(a(d[36][7],b[1],v))return e[5];break;case
4:var
f=b[1][1];if(0===f[0]){var
c=b[2];if(c)if(!c[2]){var
g=c[1];if(a(d[36][7],f[1],w))return j(g)}}break}throw i}var
S=c(b[5],aw);function
T(a){try{var
b=[0,c(S,a)];return b}catch(a){a=A(a);if(a===i)return 0;throw a}}var
ax=[0,a(b[1],0,[0,w,0]),0],ay=[0,[0,a(b[1],0,[0,v,0]),ax],T,1];B(d[75][2],az,[0,O,g],R,ay);var
U=o(g,aA),aC=c(d[5][1][6],aB),n=p(l(g),aC),V=[0,[0,n,0],1],W=[0,[0,n,0],2],X=[0,[0,n,0],3],x=[3,V],y=[3,W],z=[3,X],aD=[2,[0,n,0]];function
Y(f,d){if(a(e[17],d,e[5]))return a(b[1],f,[0,x,0]);if(c(e[20],d))var
h=y,g=d;else
var
h=z,g=c(e[22],d);var
i=[0,t(f,g),0],j=[4,a(b[1],f,[0,h,0]),i];return a(b[1],f,j)}function
aE(b){switch(b[0]){case
0:if(a(d[36][7],b[1],x))return e[5];break;case
4:var
g=b[1][1];if(0===g[0]){var
f=b[2];if(f)if(!f[2]){var
h=f[1],k=g[1];if(a(d[36][7],k,y))return j(h);if(a(d[36][7],k,z)){var
l=j(h);return c(e[22],l)}}}break}throw i}var
Z=c(b[5],aE);function
_(a){try{var
b=[0,c(Z,a)];return b}catch(a){a=A(a);if(a===i)return 0;throw a}}var
aF=[0,a(b[1],0,[0,z,0]),0],aG=[0,a(b[1],0,[0,y,0]),aF],aH=[0,[0,a(b[1],0,[0,x,0]),aG],_,1];B(d[75][2],aI,[0,U,g],Y,aH);var
$=[0,C,i,g,l,o,D,p,m,aj,E,F,G,q,r,s,t,H,K,j,L,u,as,M,N,v,w,O,P,Q,R,S,T,U,n,aD,V,W,X,x,y,z,Y,Z,_];ab(22,$,"Z_syntax_plugin.Z_syntax");ab(23,[0,$],"Z_syntax_plugin");return});
