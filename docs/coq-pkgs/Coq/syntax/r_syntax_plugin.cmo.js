(function(ak){"use strict";var
T="Z",S="Rdefinitions",R="positive",Q="Reals",y="Coq",g=ak.jsoo_runtime,c=g.caml_new_string,P=g.caml_register_global,ai=g.caml_wrap_exception;function
e(a,b){return a.length==1?a(b):g.caml_call_gen(a,[b])}function
a(a,b,c){return a.length==2?a(b,c):g.caml_call_gen(a,[b,c])}function
aj(a,b,c,d,e){return a.length==4?a(b,c,d,e):g.caml_call_gen(a,[b,c,d,e])}var
o=g.caml_get_global_data(),z=c("r_syntax_plugin"),i=[0,c(y),[0,c("Numbers"),[0,c("BinNums"),0]]],x=[0,c(y),[0,c(Q),[0,c(S),0]]],b=o.API,d=o.Bigint,f=o.CAst,U=o.Util;e(b[76][3],z);var
h=[248,c("R_syntax.Non_closed_number"),g.caml_fresh_oo_id(0)],V=c(R),X=c(R),_=c(T),aa=c(T),ad=c("R"),ae=c("IZR"),ag=[0,c(y),[0,c(Q),[0,c(S),0]]],ah=c("R_scope");function
j(c){var
d=a(U[17][14],b[5][1][6],c);return e(b[5][4][2],d)}function
p(d,c){var
f=e(b[5][1][6],c),g=j(d);return a(b[47][2],g,f)}var
W=p(i,V);function
q(d,c){return a(b[36][9],d,c)}var
Y=e(b[5][1][6],X),k=q(j(i),Y),A=[0,[0,k,0],1],B=[0,[0,k,0],2],C=[0,[0,k,0],3],r=[3,A],s=[3,B],t=[3,C],Z=[2,[0,k,0]];function
D(g,c){var
h=a(f[1],0,[0,r,0]),i=a(f[1],0,[0,t,0]),j=a(f[1],0,[0,s,0]);function
b(k){var
g=e(d[8],k),c=g[1];if(0===g[2]){var
l=[4,j,[0,b(c),0]];return a(f[1],0,l)}if(a(d[17],c,d[5]))return i;var
m=[4,h,[0,b(c),0]];return a(f[1],0,m)}return b(c)}function
l(k){var
c=k[1];switch(c[0]){case
0:if(a(b[36][7],c[1],t))return d[6];break;case
4:var
g=c[1][1];if(0===g[0]){var
f=c[2];if(f)if(!f[2]){var
i=f[1],j=g[1];if(a(b[36][7],j,s)){var
m=l(i);return e(d[11],m)}if(a(b[36][7],j,r)){var
n=l(i),o=e(d[11],n);return e(d[9],o)}}}break}throw h}var
$=p(i,_),ab=e(b[5][1][6],aa),m=q(j(i),ab),E=[0,[0,m,0],1],F=[0,[0,m,0],2],G=[0,[0,m,0],3],u=[3,E],v=[3,F],w=[3,G],ac=[2,[0,m,0]];function
H(h,b){if(a(d[17],b,d[5]))return a(f[1],0,[0,u,0]);if(e(d[20],b))var
g=v,c=b;else
var
g=w,c=e(d[22],b);var
i=[0,D(h,c),0],j=[4,a(f[1],0,[0,g,0]),i];return a(f[1],0,j)}function
I(k){var
c=k[1];switch(c[0]){case
0:if(a(b[36][7],c[1],u))return d[5];break;case
4:var
g=c[1][1];if(0===g[0]){var
f=c[2];if(f)if(!f[2]){var
i=f[1],j=g[1];if(a(b[36][7],j,v))return l(i);if(a(b[36][7],j,w)){var
m=l(i);return e(d[22],m)}}}break}throw h}var
J=p(x,ad);function
K(d,c){var
f=e(b[5][1][6],c);return a(b[36][10],d,f)}var
n=[1,K(j(x),ae)];function
L(c,b){var
d=[0,H(c,b),0],e=[4,a(f[1],0,[0,n,0]),d];return a(f[1],0,e)}function
M(f){var
c=f[1];if(4===c[0]){var
e=c[1][1];if(0===e[0]){var
d=c[2];if(d)if(!d[2]){var
g=d[1];if(a(b[36][7],e[1],n))return I(g)}}}throw h}function
N(a){try{var
b=[0,M(a)];return b}catch(a){a=ai(a);if(a===h)return 0;throw a}}var
af=[0,[0,a(f[1],0,[0,n,0]),0],N,0];aj(b[75][2],ah,[0,J,ag],L,af);var
O=[0,z,h,i,j,W,q,k,Z,A,B,C,r,s,t,D,l,$,m,ac,E,F,G,u,v,w,H,I,x,J,K,n,L,M,N];P(16,O,"R_syntax_plugin.R_syntax");P(17,[0,O],"R_syntax_plugin");return});
