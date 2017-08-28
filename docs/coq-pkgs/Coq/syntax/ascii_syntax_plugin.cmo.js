(function(_){"use strict";var
J=250,I="Ascii",n=246,H="ascii",b=_.jsoo_runtime,F=b.caml_ml_string_length,c=b.caml_new_string,E=b.caml_obj_tag,G=b.caml_register_global,l=b.caml_string_get,Y=b.caml_wrap_exception;function
e(a,c){return a.length==1?a(c):b.caml_call_gen(a,[c])}function
d(a,c,d){return a.length==2?a(c,d):b.caml_call_gen(a,[c,d])}function
D(a,c,d,e){return a.length==3?a(c,d,e):b.caml_call_gen(a,[c,d,e])}function
Z(a,c,d,e,f){return a.length==4?a(c,d,e,f):b.caml_call_gen(a,[c,d,e,f])}var
g=b.caml_get_global_data(),o=c("ascii_syntax_plugin"),i=[0,c("Coq"),[0,c("Strings"),[0,c(I),0]]],k=g.CAst,h=g.Util,a=g.API,x=g.CamlinternalLazy,V=g.Option,U=g.Pervasives,T=g.Printf,P=g.Pp,R=g.CErrors;e(a[76][3],o);var
j=[248,c("Ascii_syntax.Non_closed_ascii"),b.caml_fresh_oo_id(0)],S=[0,[4,0,[0,2,3],0,0],c("%03d")],O=c("Expects a single character or a three-digits ascii code."),Q=[0,c("interp_ascii_string")],N=c(I),M=c("Ascii interpretation"),K=c(H),L=c(H),X=c("char_scope");function
m(b){var
c=d(h[17][14],a[5][1][6],b);return e(a[5][4][2],c)}function
p(c,b){var
f=e(a[5][1][6],b),g=m(c);return d(a[36][9],g,f)}function
q(c,b){var
f=e(a[5][1][6],b),g=m(c);return d(a[47][2],g,f)}var
r=q(i,K),s=p(i,L),t=[0,[0,s,0],1],u=[3,t];function
v(b){return D(a[71][2],M,i,b)}var
f=[n,function(a){return v(N)}];function
w(b,h){function
c(f,e){if(0===f)return 0;var
g=c(f-1|0,e/2|0),h=0,i=0===(e%2|0)?a[71][6]:a[71][5];return[0,d(k[1],b,[0,i,h]),g]}var
g=E(f),i=c(8,h),j=0,l=J===g?f[1]:n===g?e(x[2],f):f,m=[4,d(k[1],b,[0,l,j]),i];return d(k[1],b,m)}function
y(f,a){if(1===F(a))var
d=l(a,0);else{if(3===F(a)){var
g=l(a,0);if(e(h[11],g)){var
i=l(a,1);if(e(h[11],i)){var
j=l(a,2);if(e(h[11],j))var
d=b.caml_int_of_string(a),c=1;else
var
c=0}else
var
c=0}else
var
c=0}else
var
c=0;if(!c)var
k=e(P[3],O),d=D(R[6],f,Q,k)}return w(f,d)}function
z(c){function
b(e,c){if(c){var
f=c[1][1];if(0===f[0]){var
g=c[2],h=f[1];if(d(a[36][7],h,a[71][5]))return 1+(2*b(e-1|0,g)|0)|0;if(d(a[36][7],h,a[71][6]))return 2*b(e-1|0,g)|0}}else
if(0===e)return 0;throw j}try{var
g=[0,function(i){var
c=i[1];if(4===c[0]){var
g=c[1][1];if(0===g[0]){var
h=E(f),k=c[2],l=g[1],m=J===h?f[1]:n===h?e(x[2],f):f;if(d(a[36][7],l,m))return b(8,k)}}throw j}(c)];return g}catch(a){a=Y(a);if(a===j)return 0;throw a}}function
A(a){if(32<=a)if(!(126<a)){var
b=e(U[17],a);return d(h[15][1],1,b)}return d(T[4],S,a)}function
B(a){var
b=z(a);return d(V[15],A,b)}var
W=[0,[0,d(k[1],0,[0,u,0]),0],B,1];Z(a[75][1],X,[0,r,i],y,W);var
C=[0,o,j,m,p,q,i,r,s,t,u,v,f,w,y,z,A,B];G(20,C,"Ascii_syntax_plugin.Ascii_syntax");G(21,[0,C],"Ascii_syntax_plugin");return});
