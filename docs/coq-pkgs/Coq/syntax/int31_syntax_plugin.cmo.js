(function(U){"use strict";var
F="int31",E="digits",D="Int31",e=U.jsoo_runtime,a=e.caml_new_string,C=e.caml_register_global,S=e.caml_wrap_exception;function
c(a,b){return a.length==1?a(b):e.caml_call_gen(a,[b])}function
d(a,b,c){return a.length==2?a(b,c):e.caml_call_gen(a,[b,c])}function
R(a,b,c,d){return a.length==3?a(b,c,d):e.caml_call_gen(a,[b,c,d])}function
T(a,b,c,d,f){return a.length==4?a(b,c,d,f):e.caml_call_gen(a,[b,c,d,f])}var
g=e.caml_get_global_data(),q=a("int31_syntax_plugin"),j=[0,a("Coq"),[0,a("Numbers"),[0,a("Cyclic"),[0,a(D),[0,a(D),0]]]]],v=a("int31_scope"),b=g.API,f=g.Bigint,h=g.CAst,r=g.List,N=g.Pp,P=g.CErrors;c(b[76][3],q);var
M=a("int31 are only non-negative numbers."),O=[0,a("interp_int31")],H=a(F),I=a(F),J=a(E),K=a(E),L=a("Int31_syntax.Non_closed");function
i(a){var
e=d(r[15],b[5][1][6],a);return c(b[5][4][2],e)}function
s(e,a){var
f=c(b[5][1][6],a),g=i(e);return d(b[47][2],g,f)}function
n(e,a){var
f=c(b[5][5][1],a);return d(b[5][9][2],e,f)}function
t(b,a){return n([0,i(b)],a)}function
G(e,d,a){var
f=c(b[5][5][1],d);return n([2,[0,i(e)],f],a)}var
u=s(j,H);function
k(a){return t(j,a)}var
l=[3,[0,[0,k(I),0],1]],o=[3,[0,[0,k(J),0],1]],p=[3,[0,[0,k(K),0],2]],m=[248,L,e.caml_fresh_oo_id(0)];function
w(a,e){var
g=d(h[1],a,[0,l,0]),i=d(h[1],a,[0,o,0]),j=d(h[1],a,[0,p,0]);function
b(a,e){if(0<a){var
d=c(f[8],e),g=d[2],h=b(a-1|0,d[1]),k=g?j:i;return[0,k,h]}return 0}var
k=b(31,e),m=[4,g,c(r[6],k)];return d(h[1],a,m)}function
x(a){var
b=c(N[3],M);return R(P[6],a,O,b)}function
y(b,a){return c(f[20],a)?w(b,a):x(b)}function
z(q){var
g=q[1];if(4===g[0]){var
k=g[1][1];if(0===k[0]){var
r=g[2];if(d(b[36][7],k[1],l)){var
e=r,a=f[5];for(;;){if(e){var
h=e[1][1];if(0===h[0]){var
i=e[2],j=h[1];if(d(b[36][7],j,o)){var
e=i,a=c(f[11],a);continue}if(d(b[36][7],j,p)){var
n=c(f[11],a),e=i,a=c(f[9],n);continue}}throw m}return a}}}}throw m}function
A(a){try{var
b=[0,z(a)];return b}catch(a){a=S(a);if(a===m)return 0;throw a}}var
Q=[0,[0,d(h[1],0,[0,l,0]),0],A,1];T(b[75][2],v,[0,u,j],y,Q);var
B=[0,q,i,s,n,t,G,j,u,k,v,l,o,p,m,w,x,y,z,A];C(16,B,"Int31_syntax_plugin.Int31_syntax");C(17,[0,B],"Int31_syntax_plugin");return});
