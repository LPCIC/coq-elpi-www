(function(Q){"use strict";var
t="String",p=250,h=246,E="string",D="Strings",C="Coq",b=Q.jsoo_runtime,a=b.caml_new_string,o=b.caml_obj_tag,B=b.caml_register_global,O=b.caml_wrap_exception;function
f(a,c){return a.length==1?a(c):b.caml_call_gen(a,[c])}function
c(a,c,d){return a.length==2?a(c,d):b.caml_call_gen(a,[c,d])}function
N(a,c,d,e){return a.length==3?a(c,d,e):b.caml_call_gen(a,[c,d,e])}function
P(a,c,d,e,f){return a.length==4?a(c,d,e,f):b.caml_call_gen(a,[c,d,e,f])}var
g=b.caml_get_global_data(),u=a("string_syntax_plugin"),l=[0,a(C),[0,a(D),[0,a(t),0]]],j=g.CAst,n=g.CamlinternalLazy,i=g.API,s=g.Buffer,m=g.Ascii_syntax_plugin,I=g.Char;f(i[76][3],u);var
k=[248,a("String_syntax.Non_closed_string"),b.caml_fresh_oo_id(0)],v=c(m[1][5],l,a(E)),q=c(m[1][4],l,a(E)),w=[3,[0,[0,q,0],1]],x=[3,[0,[0,q,0],2]],H=a("EmptyString"),G=a(t),F=a("String interpretation"),L=[0,a(C),[0,a(D),[0,a(t),0]]],M=a("string_scope");function
r(a){return N(i[71][2],F,l,a)}var
d=[h,function(a){return r(G)}],e=[h,function(a){return r(H)}];function
y(a,i){var
r=b.caml_ml_string_length(i);function
k(g){if(g===r){var
l=o(e),s=0,t=p===l?e[1]:h===l?f(n[2],e):e;return c(j[1],a,[0,t,s])}var
u=[0,k(g+1|0),0],v=b.caml_string_get(i,g),q=o(d),w=[0,c(m[1][13],a,v),u],x=0,y=p===q?d[1]:h===q?f(n[2],d):d,z=[4,c(j[1],a,[0,y,x]),w];return c(j[1],a,z)}return k(0)}function
z(a){try{var
j=f(s[1],16),b=function(v){var
l=v;for(;;){var
a=l[1];switch(a[0]){case
0:var
q=o(e),w=a[1],x=p===q?e[1]:h===q?f(n[2],e):e;if(c(i[36][7],w,x))return[0,f(s[2],j)];break;case
4:var
r=a[1][1];if(0===r[0]){var
b=a[2];if(b){var
g=b[2];if(g)if(!g[2]){var
t=o(d),y=g[1],z=b[1],A=r[1],B=p===t?d[1]:h===t?f(n[2],d):d;if(c(i[36][7],A,B)){var
u=f(m[1][15],z);if(u){var
C=f(I[1],u[1]);c(s[10],j,C);var
l=y;continue}throw k}}}}break}throw k}}(a);return b}catch(a){a=O(a);if(a===k)return 0;throw a}}var
J=[0,c(j[1],0,[0,w,0]),0],K=[0,[0,c(j[1],0,[0,x,0]),J],z,1];P(i[75][1],M,[0,v,L],y,K);var
A=[0,u,k,l,v,q,w,x,r,d,e,y,z];B(16,A,"String_syntax_plugin.String_syntax");B(17,[0,A],"String_syntax_plugin");return});
