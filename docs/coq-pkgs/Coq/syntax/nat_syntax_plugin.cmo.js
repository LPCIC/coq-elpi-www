(function(K){"use strict";var
d=K.jsoo_runtime,c=d.caml_new_string,s=d.caml_register_global,J=d.caml_wrap_exception;function
e(a,b){return a.length==1?a(b):d.caml_call_gen(a,[b])}function
a(a,b,c){return a.length==2?a(b,c):d.caml_call_gen(a,[b,c])}function
I(a,b,c,e){return a.length==3?a(b,c,e):d.caml_call_gen(a,[b,c,e])}function
r(a,b,c,e,f){return a.length==4?a(b,c,e,f):d.caml_call_gen(a,[b,c,e,f])}var
i=d.caml_get_global_data(),l=c("nat_syntax_plugin"),b=i.API,g=i.Bigint,h=i.CAst,f=i.Pp,D=i.CErrors,A=i.CWarnings;e(b[76][3],l);var
m=e(g[3],5e3),B=c("Cannot interpret a negative number as a number of type nat"),C=[0,c("nat_of_int")],u=c("limits and on the command executed)."),v=c("may vary from 5000 to 70000 depending on your system "),w=c("working with large numbers in nat (observed threshold "),x=c("Stack overflow or segmentation fault happens when "),y=c("numbers"),z=c("large-nat"),E=c("Nat_syntax.Non_closed_number"),H=c("nat_scope");function
t(j){var
b=e(f[22],u),c=e(f[22],v),d=e(f[22],w),g=e(f[22],x),h=a(f[12],g,d),i=a(f[12],h,c);return a(f[12],i,b)}var
n=r(A[2],z,y,0,t);function
o(c,i){if(e(g[20],i)){if(a(g[16],m,i))a(n,0,0);var
l=a(h[1],c,[0,b[71][7],0]),k=l,j=i,o=a(h[1],c,[0,b[71][8],0]);for(;;){if(d.caml_notequal(j,g[5])){var
p=e(g[10],j),k=a(h[1],c,[4,o,[0,k,0]]),j=p;continue}return k}}var
q=e(f[3],B);return I(D[6],c,C,q)}var
j=[248,E,d.caml_fresh_oo_id(0)];function
k(c){function
d(c){switch(c[0]){case
0:if(a(b[36][7],c[1],b[71][7]))return g[5];break;case
4:var
f=c[1][1];if(0===f[0]){var
d=c[2];if(d)if(!d[2]){var
h=d[1];if(a(b[36][7],f[1],b[71][8])){var
i=k(h);return e(g[9],i)}}}break}throw j}return a(h[5],d,c)}function
p(a){try{var
b=[0,k(a)];return b}catch(a){a=J(a);if(a===j)return 0;throw a}}var
F=[0,a(h[1],0,[0,b[71][7],0]),0],G=[0,[0,a(h[1],0,[0,b[71][8],0]),F],p,1];r(b[75][2],H,[0,b[71][9],b[71][10]],o,G);var
q=[0,l,m,n,o,j,k,p];s(17,q,"Nat_syntax_plugin.Nat_syntax");s(18,[0,q],"Nat_syntax_plugin");return});
