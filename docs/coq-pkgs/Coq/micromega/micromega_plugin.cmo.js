(function(Ba){"use strict";var
gI="QMicromega",kP="__varmap",lu="__p",k7="__p%i",lt="__ff",ko="=",gN=">=",ck=" * ",J="micromega",ls="enum_proof\n",e3='command "',kO="( )^2",d5=148,kN="<>",gQ="real_nonlinear_prover",lr="(%a)-(%a)",kn=" [*] ",k5="__wit",k6=" ,",fa=115,km="Zero",e6=120,e$="Lia",lq="scale_term : not implemented",kM="]",gM=117,bR=166,kL=" \n",kl="RED",k4='Unfortunately Coq isn\'t aware of the presence of any "csdp" executable in the path. \n\n',e_=128,lp="parse_zop",lo="Zmicromega",kK="0",ln=")-(",aZ=248,gK="%a * %a",bz=164,kk="Sos_Q",kj="Sos_Z",bl=167,lm=">",d4=" + ",z="Coq",kJ="LRA_Q",G=112,k3=")+(",kH="NQA",kI="AProof : ",ki="<linear_prover",kG="LRA_R",gP="$i",aj="$t",e5=182,k1="[",k2="CProof : %a",P="Tauto",kh=132,kF="%a + %a",k0=" Cannot find witness",kE="the use of a specialized external tool called csdp. \n\n",kZ=157,gH="PsatzZ",ll="Rdefinitions",kD="Timeout",kY="D",kX=" Skipping what remains of this tactic: the complexity of the goal requires ",lk="A(",kB="psatz_Q",kC='" exited ',kg=216,kz="psatz_Z",kA="Rpow_def",ky="nat",kV=154,kW="PsatzQ",lj=205,gG="pure_sos",e9=195,ag="VarMap",kf="%i ",kx="(%a)+(%a)",lh="}",li="monoid",l=250,kU="PsatzR",kw="buggy certificate",V="ZMicromega",kd="NRA",ke="C0",bS="plugins/micromega/certificate.ml",kc="compare_num",d=246,lg="Nia",d2=151,ai="Extension: cannot occur",kT=204,e8=113,kb="ZArithRing",e2=208,kv="{",ka="AProof : %a\n",ku="",a0=149,by="RingMicromega",j$=134,j_="C1",gL="real nonlinear prover",gJ=100,lf="%a %s %s",le="=<",kS="positive",j9="__arith",d3="Reals",j7=", ",gF="<=",j8="QArith",e1=438,kt=" -> ",ld="psatz_R",gO="[%a]",ks="Csdp packages are provided by some OS distributions; binaries and source code can be downloaded from https://projects.coin-or.org/Csdp",lc="Bad logical fragment",j6=215,U="plugins/micromega/g_micromega.ml4",gE="plugins/micromega/mfourier.ml",kr=206,lb=171,kq=127,kR="CProof : ",ah=111,e0=196,la="EnvRing",kQ="Refl",j5="t",e4=209,k_="linear prover",k$="Depth",k9="Sos_R",e7=114,gD="%i",kp=")^(",k8="}\n",H=Ba.jsoo_runtime,x=H.caml_check_bound,T=H.caml_equal,j2=H.caml_float_compare,aY=H.caml_fresh_oo_id,Z=H.caml_int_compare,j4=H.caml_int_of_string,gC=H.caml_lessthan,A9=H.caml_list_of_js_array,j3=H.caml_ml_string_length,eZ=H.caml_mul,b=H.caml_new_string,k=H.caml_obj_tag,aX=H.caml_register_global,v=H.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):H.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):H.caml_call_gen(a,[b,c])}function
e(a,b,c,d){return a.length==3?a(b,c,d):H.caml_call_gen(a,[b,c,d])}function
F(a,b,c,d,e){return a.length==4?a(b,c,d,e):H.caml_call_gen(a,[b,c,d,e])}function
aW(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):H.caml_call_gen(a,[b,c,d,e,f])}function
B(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):H.caml_call_gen(a,[b,c,d,e,f,g])}function
d1(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):H.caml_call_gen(a,[b,c,d,e,f,g,h])}function
bQ(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):H.caml_call_gen(a,[b,c,d,e,f,g,h,i])}function
A$(a,b,c,d,e,f,g,h,i,j,k){return a.length==10?a(b,c,d,e,f,g,h,i,j,k):H.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k])}function
A_(a,b,c,d,e,f,g,h,i,j,k,l){return a.length==11?a(b,c,d,e,f,g,h,i,j,k,l):H.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k,l])}var
E=H.caml_get_global_data(),eg=[0,0,0],A8=[12,44,[2,0,[11,b(")\n"),0]]],ep=[0,0],cV=[0,0,0],iX=[0,b(z),[0,b("Logic"),[0,b("Decidable"),0]]],ga=A9([[0,b(z),[0,b("Lists"),[0,b("List"),0]]],[0,b(V),0],[0,b(P),0],[0,b(by),0],[0,b(la),0],[0,b(z),[0,b(J),[0,b(V),0]]],[0,b(z),[0,b(J),[0,b("RMicromega"),0]]],[0,b(z),[0,b(J),[0,b(P),0]]],[0,b(z),[0,b(J),[0,b(by),0]]],[0,b(z),[0,b(J),[0,b(la),0]]],[0,b(z),[0,b(j8),[0,b("QArith_base"),0]]],[0,b(z),[0,b(d3),[0,b(ll),0]]],[0,b(z),[0,b(d3),[0,b(kA),0]]],[0,b("LRing_normalise"),0]]),iZ=[0,[0,b(z),[0,b("Numbers"),[0,b("BinNums"),0]]],0],i0=[0,[0,b(z),[0,b(d3),[0,b(ll),0]]],[0,[0,b(z),[0,b(d3),[0,b(kA),0]]],[0,[0,b(z),[0,b(d3),[0,b("Raxioms"),0]]],[0,[0,b(z),[0,b(j8),[0,b("Qreals"),0]]],0]]]],i1=[0,[0,b(z),[0,b("ZArith"),[0,b("BinInt"),0]]],0],jQ=b(".csdp.cache"),w=b("micromega_plugin"),i=E.Pervasives,g=E.Num,n=E.Printf,q=E.Big_int,D=E.Unix,ea=E.Marshal,d$=E.Printexc,h=E.List,bm=E.Hashtbl,C=E.Assert_failure,gV=E.Ratio,fb=E.Failure,d_=E.Set,M=E.Not_found,bH=E.Map,bq=E.CErrors,iF=E.String,j=E.CamlinternalLazy,f=E.API,O=E.Loc,bv=E.Pp,jn=E.Invalid_argument,r=E.Ltac_plugin,S=E.Genarg,aw=E.Grammar_API,ay=E.Array,lv=b(kK),lw=[0,[12,118,[2,0,0]],b("v%s")],lx=[0,[11,b("1/("),[15,[12,41,0]]],b("1/(%a)")],ly=[0,[11,b("- ("),[15,[12,41,0]]],b("- (%a)")],lz=[0,[12,40,[15,[11,b(k3),[15,[12,41,0]]]]],b(kx)],lA=[0,[12,40,[15,[11,b(ln),[15,[12,41,0]]]]],b(lr)],lB=[0,[12,40,[15,[11,b(")*("),[15,[12,41,0]]]]],b("(%a)*(%a)")],lC=[0,[12,40,[15,[11,b(")/("),[15,[12,41,0]]]]],b("(%a)/(%a)")],lD=[0,[12,40,[15,[11,b(kp),[4,3,0,0,[12,41,0]]]]],b("(%a)^(%i)")],lE=[0,[11,b("Aeq("),[4,3,0,0,[12,41,0]]],b("Aeq(%i)")],lF=[0,[11,b("Ale("),[4,3,0,0,[12,41,0]]],b("Ale(%i)")],lG=[0,[11,b("Alt("),[4,3,0,0,[12,41,0]]],b("Alt(%i)")],lH=[0,[11,b("eq("),[2,0,[12,41,0]]],b("eq(%s)")],lI=[0,[11,b("le("),[2,0,[12,41,0]]],b("le(%s)")],lJ=[0,[11,b("lt("),[2,0,[12,41,0]]],b("lt(%s)")],lK=[0,[12,40,[15,[11,b(")^2"),0]]],b("(%a)^2")],lL=[0,[11,b(li),0],b(li)],lM=[0,[15,[11,b(ck),[15,0]]],b(gK)],lN=[0,[15,[11,b(d4),[15,0]]],b(kF)],lO=[0,[15,[11,b(ck),[15,0]]],b(gK)],lR=b(";"),lZ=b("map3"),ms=[0,[11,b(e3),[2,0,[11,b(kC),[4,3,0,0,0]]]],b('command "%s" exited %i')],mr=[0,[11,b(e3),[2,0,[11,b(kC),[2,0,0]]]],b('command "%s" exited %s')],mt=[0,[11,b(e3),[2,0,[11,b('" killed '),[4,3,0,0,0]]]],b('command "%s" killed %i')],mu=[0,[11,b(e3),[2,0,[11,b('" stopped '),[4,3,0,0,0]]]],b('command "%s" stopped %i')],mi=[0,b("plugins/micromega/mutils.ml"),287,7],mc=b("select_pos"),l7=[0,0,0],l4=b("list_fold_right_elements"),l2=b("try_find"),lU=b("from_option"),nI=[0,0],nT=[0,0,0],nU=[0,[0,0],0],nC=[0,0],nB=[0,0],nA=[0,0],ns=[0,[0,0]],nt=[0,[0,0]],nu=[0,[0,0]],nv=[0,[0,0]],no=[0,[0,0]],np=[0,[0,0]],nq=[0,[0,0]],nr=[0,[0,0]],nf=[0,[0,0],0],nd=[0,0,0],m8=[0,1],m9=[0,2],m_=[0,3],m3=[0,0],m5=[0,0],m4=[0,1],m7=[0,3],m6=[0,0],mJ=[0,[1,0]],mK=[0,0,[0,0]],mL=[0,[0,0],0],mM=[0,0],mN=[0,[1,0]],mO=[0,[1,0]],mP=[0,0],mQ=[0,[1,0]],mR=[0,[1,0]],mS=[0,[1,0]],mT=[0,0],mU=[0,[1,0]],mV=[0,0,0],mW=[0,0,0],mX=[0,0],mY=[0,0,0],mZ=[0,0],mF=[1,0],mE=[0,0],mw=[1,0],mx=[1,0],my=[0,0],mA=[0,0],mz=[0,0],nk=[0,0],nn=[0,0],nG=[0,0],nK=[0,[0,0],0],nL=[0,0,0],nM=[0,[0,0],0],nN=[0,0,0],nO=[0,[0,0],0],nP=[0,0,0],nQ=[0,0,0],nR=[0,0,0],nV=[0,[0,0],0],nW=[0,0,0],nX=[0,[0,0],0],nY=[0,0,0],nZ=[0,[0,0],0],n0=[0,0,0],n1=[0,0,0],n2=[0,0,0],oM=[0,[11,b(km),0],b(km)],oN=[0,[11,b("Hyp "),[4,3,0,0,0]],b("Hyp %i")],oO=[0,[11,b("Def "),[4,3,0,0,0]],b("Def %i")],oP=[0,[11,b("Cst "),[2,0,0]],b("Cst %s")],oQ=[0,[11,b(kO),0],b(kO)],oR=[0,[11,b("P * "),[15,0]],b("P * %a")],oS=[0,[12,40,[15,[11,b(")/"),[2,0,0]]]],b("(%a)/%s")],oT=[0,[15,[11,b(ck),[15,0]]],b(gK)],oU=[0,[15,[11,b(d4),[15,0]]],b(kF)],oV=[0,[12,91,[15,[12,93,0]]],b(gO)],oW=[0,[12,46,0],b(".")],oX=[0,[4,3,0,0,[11,b(":= "),[15,[11,b(" ; "),[15,0]]]]],b("%i:= %a ; %a")],oY=[0,[4,3,0,0,[12,123,[15,[11,b(gF),[15,[11,b(gF),[15,[12,125,[15,0]]]]]]]]],b("%i{%a<=%a<=%a}%a")],pc=[0,0],pb=[0,[11,b("apply_pivot -> {"),[15,[11,b(k8),0]]],b("apply_pivot -> {%a}\n")],pa=[0,[11,b("xpivot_eq {"),[15,[11,b("} "),[15,[12,32,[2,0,[11,b(" {"),[15,[11,b(k8),0]]]]]]]]],b("xpivot_eq {%a} %a %s {%a}\n")],o$=[0,0],o_=[0,[11,b("mult "),[2,0,[12,32,[15,[11,b(" ("),[15,[12,44,[2,0,[11,b(") -> ("),[15,A8]]]]]]]]]],b("mult %s %a (%a,%s) -> (%a,%s)\n")],o9=[0,0],o8=[0,0,[0,0]],o7=[0,0,[0,0]],o5=[0,[15,[12,32,[2,0,[12,32,[2,0,0]]]]],b(lf)],o4=[0,[2,0,[12,46,[15,[11,b(" +"),0]]]],b("%s.%a +")],o1=[0,b("plugins/micromega/polynomial.ml"),542,10],o0=[0,[11,b("normalise_proof "),[15,[11,b(kt),[15,0]]]],b("normalise_proof %a -> %a")],oJ=[0,[15,[12,32,[2,0,[12,32,[2,0,0]]]]],b(lf)],oH=b(gN),oG=b(ko),oy=b(kc),oz=b(kc),oC=[0,0],ox=[0,0],ou=[0,0],os=[0,[2,0,[12,e6,[4,3,0,0,[11,b(d4),0]]]],b("%sx%i + ")],oj=[0,0],oi=[0,1],og=[0,0],oe=[0,[2,0,[12,32,0]],b("%s ")],of=[0,[2,0,[12,42,[15,[12,32,0]]]],b("%s*%a ")],n6=[0,[12,e6,[4,3,0,0,[12,46,0]]],b("x%i.")],n7=[0,[12,e6,[4,3,0,0,[12,94,[4,3,0,0,[12,46,0]]]]],b("x%i^%i.")],ov=[0,1],pn=[0,[12,72,[4,3,0,0,0]],b("H%i")],po=[0,[11,b("E("),[4,3,0,0,[12,44,[15,[12,44,[15,[12,41,0]]]]]]],b("E(%i,%a,%a)")],pp=[0,[11,b(lk),[15,[12,44,[15,[12,41,0]]]]],b("A(%a,%a)")],qq=[0,1],qr=[0,[0,0,0]],qn=b("merge_proof : pivot is not possible"),qo=[0,1],qp=[0,1],qm=[0,0],qg=[0,1],qh=[0,1],qi=[0,1],qj=[0,1],qk=[0,1],ql=[0,1],qc=[0,0],qd=[0,-1],qe=[0,[11,b("optimise Exception : "),[2,0,0]],b("optimise Exception : %s")],qa=[0,0,0],p3=[0,0],p4=[0,0],p5=[0,0],p6=[0,0],p7=[0,0],p8=[0,0],p9=[0,0],p_=[0,0],p2=[0,0],p1=b("bound_of_variable: impossible"),p0=[0,0,0],pY=[0,0,0],pZ=b("SystemContradiction"),pX=[0,0],pW=[0,[4,3,0,0,[11,b(kt),[2,0,[12,10,0]]]],b("%i -> %s\n")],pT=[0,0],pS=[0,0,0,0],pQ=[0,0],pO=[0,0],pP=[0,0],pR=[0,b(gE),309,4],pN=[0,b(gE),261,9],pK=[0,1],pL=[0,0],pH=[0,b(gE),199,4],pG=[0,[11,b("(val x = "),[2,0,[11,b(k6),[15,[12,44,[2,0,[12,41,0]]]]]]],b("(val x = %s ,%a,%s)")],pB=[0,[2,0,[11,b(" <= "),0]],b("%s <= ")],pC=[0,[11,b(gF),[2,0,[12,10,0]]],b("<=%s\n")],pD=b("\n"),py=[0,[4,3,0,0,[12,32,0]],b(kf)],px=b(kv),pz=b(lh),pu=[0,[4,3,0,0,[12,32,0]],b(kf)],pt=b(kv),pv=b(lh),pr=[0,[12,40,[15,[12,44,[15,[12,41,0]]]]],b("(%a,%a)")],pq=b("oo"),pi=[0,1],pl=b("Mfourier.SystemContradiction"),pJ=b("Mfourier.TimeOut"),rh=b(lq),ri=b("scale term: not implemented"),rj=b(lq),rm=[0,0],rn=b("term_to_q_expr: not implemented"),rs=[0,0],rt=b("term_to_z_expr: not implemented"),rz=b("Cuts should already be compiled"),r$=[0,0],sa=[0,1],sb=[0,0],sc=[0,1],sd=[0,b(bS),1276,1],r2=[0,[11,b(ls),0],b(ls)],r4=[0,b(bS),1175,2],r3=[0,[11,b("Found interval: "),[15,[11,b(" in ["),[2,0,[12,59,[2,0,[11,b("] -> "),0]]]]]]],b("Found interval: %a in [%s;%s] -> ")],r5=[0,0],r6=[0,1],r9=[0,b(bS),1202,2],r7=[0,[11,b("xlia:  "),[15,[11,b(kL),0]]],b("xlia:  %a \n")],r8=[0,[11,b("after reduction:  "),[15,[11,b(kL),0]]],b("after reduction:  %a \n")],r0=[0,[11,b("Found a new bound "),[15,0]],b("Found a new bound %a")],rY=[0,1],rZ=[0,0,0],r1=b("Interval without proof"),rX=[0,[11,b("Bad news : loss of completeness "),[15,[12,61,[2,0,0]]]],b("Bad news : loss of completeness %a=%s")],rV=[0,0],rT=[0,1],rU=[0,-1],rR=[0,1],rS=[0,-1],rN=[0,[2,0,[11,b(ck),[2,0,[11,b(d4),[2,0,[11,b(ck),[2,0,[11,b(" = "),[2,0,[12,10,0]]]]]]]]]],b("%s * %s + %s * %s = %s\n")],rI=[0,1],rJ=[0,b(bS),817,5],rK=[0,0],rG=[0,[11,b(ki),0],b(ki)],rH=[0,[12,62,0],b(lm)],rF=b("proof_of_farkas : not enough hyps"),rB=[0,[11,b(kI),[15,[12,10,0]]],b(ka)],rC=[0,[11,b(kR),[15,0]],b(k2)],rA=[0,[11,b("compiled proof "),[15,[12,10,0]]],b("compiled proof %a\n")],ry=[0,[0,0]],rx=b("id_of_hyp"),rv=[0,0],rw=[0,1],rr=[0,0],ro=[0,1],rp=[0,0],rl=b("bad index"),rg=b("pexpr_of_cstr_compat"),re=[0,b(bS),512,9],rc=[0,b(bS),493,12],q7=[0,0],q3=b("cannot happen"),q0=[0,[11,b(kI),[15,[12,10,0]]],b(ka)],q1=[0,[11,b(kR),[15,0]],b(k2)],qZ=[0,[11,b("raw certificate "),[2,0,0]],b("raw certificate %s")],qU=b("make_certificate(1)"),qV=b("empty_certificate"),qP=b("= 0"),qQ=b("<> 0"),qR=b("> 0"),qS=b(">= 0"),qN=[0,1],qM=[0,0],qH=[0,0],qI=[0,[0,0]],qJ=[0,0],qL=[0,b(bS),gJ,1],qK=[0,0],qG=[0,[0,0]],qF=[0,[0,0]],qx=[0,0],qC=[0,[0,0],0],qD=[0,0,0],qW=b("Certificate.Found"),qY=b("Certificate.Strict"),rL=b("Certificate.FoundProof"),rO=b("Certificate.Result"),sm=[0,0,0],sk=[0,0,0],si=[0,0,[0,5,0]],sl=[0,1,[0,4,[0,5,0]]],sj=[0,1,[0,6,[0,5,0]]],sg=[0,1,[0,6,[0,5,0]]],se=b("Persistent_cache.PHashtable(Key).InvalidTableFormat"),sf=b("Persistent_cache.PHashtable(Key).UnboundTable"),sz=b("tt"),sA=b("ff"),sB=b("X "),sC=[0,[11,b(lk),[15,[12,41,0]]],b("A(%a)")],sD=[0,[11,b("C("),[15,[12,44,[15,[12,41,0]]]]],b("C(%a,%a)")],sE=[0,[11,b("D("),[15,[12,44,[15,[12,41,0]]]]],b("D(%a,%a)")],sF=[0,[11,b("N("),[15,[12,41,0]]],b("N(%a)")],sH=b(ku),sG=[0,[11,b("I("),[15,[2,0,[12,44,[15,[12,41,0]]]]]],b("I(%a%s,%a)")],w7=[0,0],xj=b("[]"),xk=[0,[12,91,[15,[12,93,0]]],b(gO)],xl=[0,[12,91,[15,[11,b(j7),[15,[11,b(j7),[15,[12,93,0]]]]]]],b("[%a, %a, %a]")],xn=[0,[12,68,0],b(kY)],xo=[0,[11,b("R["),[15,[12,44,[15,[12,93,0]]]]],b("R[%a,%a]")],xp=[0,[11,b("C["),[15,[12,44,[15,[12,93,0]]]]],b("C[%a,%a]")],xq=b(kM),xr=b(k1),xs=[0,[11,b("EP["),[15,[12,44,[15,[12,44,[15,[12,93,0]]]]]]],b("EP[%a,%a,%a]")],xF=b("abstract_wrt_formula"),yE=b(gQ),yC=b(gQ),yz=b(gQ),yt=b(gL),ys=b(gL),yr=b(gL),yc=b(kw),yb=b(kw),x7=b("csdpcert"),x8=b(J),x9=b("plugins"),x2=b(j9),x3=[0,0],x4=b(k0),xW=b(lc),xX=b(kD),xY=b(ks),xZ=b(k4),x0=b(kE),x1=b(kX),xQ=b(k5),xR=b(j5),xS=[0,[0,b(z),[0,b(J),[0,b(ag),0]]],[0,[0,b(ag),0],0]],xT=b(ag),xU=b(kP),xV=b(lt),xN=b(j9),xO=[0,0],xP=b(k0),xH=b(lc),xI=b(kD),xJ=b(ks),xK=b(k4),xL=b(kE),xM=b(kX),xD=b("bad old index"),xE=b("proof compaction error"),xB=[0,[15,[11,b(" ;"),0]],b("%a ;")],xA=b(k1),xC=b(kM),xy=[0,0],xv=b(k5),xw=b(kP),xx=b(lt),xm=[0,[15,[12,47,[15,0]]],b("%a/%a")],xg=b(j5),xh=[0,[0,b(z),[0,b(J),[0,b(ag),0]]],[0,[0,b(ag),0],0]],xi=b(ag),xd=b("Empty"),xe=[0,[0,b(z),[0,b(J),[0,b(ag),0]]],[0,[0,b(ag),0],0]],xf=b(ag),xa=b("Leaf"),xb=[0,[0,b(z),[0,b(J),[0,b(ag),0]]],[0,[0,b(ag),0],0]],xc=b(ag),w9=b("Node"),w_=[0,[0,b(z),[0,b(J),[0,b(ag),0]]],[0,[0,b(ag),0],0]],w$=b(ag),vP=b(ke),vQ=b(j_),vR=b("CQ _"),vS=[0,[12,40,[15,[11,b(d4),[15,[12,41,0]]]]],b("(%a + %a)")],vT=[0,[12,40,[15,[11,b(" - "),[15,[12,41,0]]]]],b("(%a - %a)")],vU=[0,[12,40,[15,[11,b(ck),[15,[12,41,0]]]]],b("(%a * %a)")],vV=[0,[11,b("(/ "),[15,[12,41,0]]],b("(/ %a)")],vW=[0,[11,b("(- "),[15,[12,41,0]]],b("(- %a)")],wN=[0,0,0],w4=[0,[11,b(lu),[4,3,0,0,0]],b(k7)],w3=[0,[11,b(lu),[4,3,0,0,0]],b(k7)],w2=[0,[11,b("__x"),[4,3,0,0,0]],b("__x%i")],w0=[0,b("plugins/micromega/coq_micromega.ml"),1386,11],wQ=b("error : parse_arith(2)"),wP=b("parse_qexpr parse error"),wO=[0,0],wz=b("get_rank"),ww=[1,b("Oups")],wu=b(lp),wt=b(lp),wr=[0,[12,40,[15,[12,32,[15,[12,32,[15,[12,41,0]]]]]]],b("(%a %a %a)")],wk=[0,[12,61,0],b(ko)],wl=[0,[11,b(kN),0],b(kN)],wm=[0,[11,b(le),0],b(le)],wn=[0,[11,b(gN),0],b(gN)],wo=[0,[12,60,0],b("<")],wp=[0,[12,62,0],b(lm)],wd=[0,[12,48,0],b(kK)],we=[0,[11,b("(In "),[15,[12,41,[12,37,[11,b(ky),0]]]]],b("(In %a)%%nat")],wf=[0,[12,40,[15,[11,b("^2)"),0]]],b("(%a^2)")],wg=[0,[11,b("( "),[15,[11,b(kn),[15,[12,41,0]]]]],b("( %a [*] %a)")],wh=[0,[12,40,[15,[11,b(kn),[15,[12,41,0]]]]],b("(%a [*] %a)")],wi=[0,[12,40,[15,[11,b(" [+] "),[15,[12,41,0]]]]],b("(%a [+] %a)")],wj=[0,[12,40,[15,[12,41,[12,37,[11,b(kS),0]]]]],b("(%a)%%positive")],wa=[0,[12,91,[15,[12,93,0]]],b(gO)],v$=[0,[12,40,[15,[12,32,[12,64,[15,[12,41,0]]]]]],b("(%a @%a)")],v7=[0,[11,b("Pc "),[15,0]],b("Pc %a")],v8=[0,[11,b("Pinj("),[15,[12,44,[15,[12,41,0]]]]],b("Pinj(%a,%a)")],v9=[0,[11,b("PX("),[15,[12,44,[15,[12,44,[15,[12,41,0]]]]]]],b("PX(%a,%a,%a)")],v1=[0,[11,b("V "),[15,0]],b("V %a")],v2=[0,[12,40,[15,[11,b(k3),[15,[12,41,0]]]]],b(kx)],v3=[0,[12,40,[15,[11,b(ln),[15,[12,41,0]]]]],b(lr)],v4=[0,[15,[11,b("*("),[15,[12,41,0]]]],b("%a*(%a)")],v5=[0,[11,b("-("),[15,[12,41,0]]],b("-(%a)")],v6=[0,[12,40,[15,[11,b(kp),[15,[12,41,0]]]]],b("(%a)^(%a)")],vY=[0,[15,[11,b(k6),[15,0]]],b("%a ,%a")],vZ=[0,[15,0],b("%a")],v0=[0,[2,0,[15,[2,0,0]]],b("%s%a%s")],vN=[0,[2,0,0],b("%s")],vL=[0,[4,3,0,0,0],b(gD)],vJ=[0,[4,3,0,0,0],b(gD)],vI=[0,[4,3,0,0,0],b(gD)],vE=b("ukn"),vF=b("BadTerm"),vG=b("Goal"),vz=b("Formula"),vA=[0,[0,b(z),[0,b(J),[0,b(by),0]]],[0,[0,b(by),0],0]],vB=b(by),vw=b("Build_Formula"),vx=[0,[0,b(z),[0,b(J),[0,b(by),0]]],[0,[0,b(by),0],0]],vy=b(by),vs=b("N_of_Z"),vt=[0,[0,b(z),[0,b("setoid_ring"),[0,b(kb),0]]],0],vu=b(kb),vo=b("ZWitness"),vp=[0,[0,b(z),[0,b(J),[0,b(V),0]]],0],vq=b(gI),vk=b("QWitness"),vl=[0,[0,b(z),[0,b(J),[0,b(gI),0]]],0],vm=b(gI),vg=b("BFormula"),vh=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],vi=b(V),vd=b("I"),ve=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],vf=b(V),va=b("X"),vb=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],vc=b(V),u9=b("A"),u_=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],u$=b(V),u6=b("N"),u7=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],u8=b(V),u3=b(kY),u4=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],u5=b(V),u0=b("Cj"),u1=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],u2=b(V),uX=b("FF"),uY=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],uZ=b(V),uU=b("TT"),uV=[0,[0,b(z),[0,b(J),[0,b(P),0]]],[0,[0,b(P),0],0]],uW=b(V),uQ=b("make_conj"),uR=[0,[0,b(kQ),0],0],uS=b(lo),uM=b("make_impl"),uN=[0,[0,b(kQ),0],0],uO=b(lo),uK=b("coneMember"),uJ=b(gH),uI=b("PsatzC"),uH=b("PsatzAdd"),uG=b("PsatzMulC"),uF=b("PsatzMulE"),uE=b("PsatzSquare"),uD=b("PsatzIn"),uC=b("OpGt"),uB=b("OpGe"),uA=b("OpLt"),uz=b("OpLe"),uy=b("OpNEq"),ux=b("OpEq"),uw=b("Pinj"),uv=b("Pc"),uu=b("PX"),ut=b("PEpow"),us=b("PEsub"),ur=b("PEmul"),uq=b("PEopp"),up=b("PEadd"),uo=b("PEc"),un=b("PEX"),um=b("Q2R"),ul=b("IZR"),uk=b("pow"),uj=b("Rinv"),uh=b("Rdiv"),ug=b("Rmult"),uf=b("Ropp"),ue=b("Rminus"),ud=b("Rplus"),uc=b("Rlt"),ub=b("Rle"),ua=b("Rge"),t$=b("Rgt"),t_=b("Qpower"),t9=b("Qmult"),t8=b("Qopp"),t7=b("Qminus"),t6=b("Qplus"),t5=b("Qeq"),t4=b("Qlt"),t3=b("Qle"),t1=b("Qge"),tZ=b("Qgt"),tY=b("Z.pow"),tX=b("Z.mul"),tW=b("Z.opp"),tV=b("Z.sub"),tU=b("Z.add"),tT=b("eq"),tS=b("Z.lt"),tR=b("Z.le"),tQ=b("Z.ge"),tP=b("Z.gt"),tN=b("EnumProof"),tL=b("CutProof"),tJ=b("RatProof"),tH=b("DoneProof"),tF=b("ZArithProof"),tE=b("R1"),tD=b("R0"),tC=b("COpp"),tB=b("CInv"),tA=b("CMult"),tz=b("CMinus"),ty=b("CPlus"),tx=b("CZ"),tw=b("CQ"),tv=b(j_),tu=b(ke),ts=b("Rcst"),tr=b("Qmake"),tp=b("Build_Witness"),to=b("R"),tn=b("Q"),tm=b("Zneg"),tl=b("Zpos"),tk=b("Z0"),tj=b("Z"),ti=b("xI"),th=b("xO"),tg=b("xH"),te=b(kS),tc=b("option"),ta=b("None"),s$=b("pair"),s_=b("Npos"),s9=b("N0"),s7=b(ky),s6=b("S"),s5=b("O"),s3=b("list"),s2=b("nil"),s1=b("cons"),s0=b("False"),sZ=b("True"),sY=b("iff"),sX=b("not"),sW=b("or"),sV=b("and"),sJ=[0,0,0],sq=b(ku),sp=[0,[11,b("time "),[2,0,[12,32,[8,0,0,0,[12,10,0]]]]],b("time %s %f\n")],ss=[0,b(e$),[0,b("Enum"),0]],st=b("Lia Enum"),sv=[0,b("Lra"),[0,b(k$),0]],sx=[0,b(e$),[0,b(k$),0]],sP=b(V),sQ=b(V),sR=b(V),sS=b(V),sT=b(V),sU=b(V),vH=b("Coq_micromega.M.ParseError"),xG=b("Coq_micromega.CsdpNotFound"),x5=b("csdp"),ye=b(".lia.cache"),yg=b(".nia.cache"),yi=b(".nra.cache"),yl=b(k_),yo=b(k_),yq=b("nra"),yu=b("lia"),yv=b("nlia"),yF=b(gG),yI=b(gG),yL=b(gG),A5=[0,b(U),1,0],A3=[0,b(U),1,0],A0=[0,b(U),1,0],AZ=b(aj),A1=[0,b(kB)],A2=b(aj),A4=b(gP),A6=[0,b(kB)],A7=b(kW),AU=b(ai),AS=b(ai),AO=[0,b(U),1,0],AM=[0,b(U),1,0],AJ=[0,b(U),1,0],AI=b(aj),AK=[0,b(ld)],AL=b(aj),AN=b(gP),AP=[0,b(ld)],AQ=b(kU),AD=b(ai),AB=b(ai),Ax=[0,b(U),1,0],Aw=b(aj),Ay=[0,b("lra_R")],Az=b(kG),Ar=b(ai),An=[0,b(U),1,0],Am=b(aj),Ao=[0,b("lra_Q")],Ap=b(kJ),Ah=b(ai),Ad=[0,b(U),1,0],Ac=b(aj),Ae=[0,b("sos_R")],Af=b(k9),z9=b(ai),z5=[0,b(U),1,0],z4=b(aj),z6=[0,b("sos_Q")],z7=b(kk),zZ=b(ai),zV=[0,b(U),1,0],zU=b(aj),zW=[0,b("sos_Z")],zX=b(kj),zP=b(ai),zL=[0,b(U),1,0],zK=b(aj),zM=[0,b("xnqa")],zN=b(kH),zF=b(ai),zB=[0,b(U),1,0],zA=b(aj),zC=[0,b("xnra")],zD=b(kd),zv=b(ai),zr=[0,b(U),1,0],zq=b(aj),zs=[0,b("xnlia")],zt=b(lg),zl=b(ai),zh=[0,b(U),1,0],zg=b(aj),zi=[0,b("xlia")],zj=b(e$),zb=b(ai),y9=[0,b(U),1,0],y7=[0,b(U),1,0],y4=[0,b(U),1,0],y3=b(aj),y5=[0,b(kz)],y6=b(aj),y8=b(gP),y_=[0,b(kz)],y$=b(gH),yY=b(ai),yW=b(ai),yR=b(kl),yS=b("myred"),yU=b(kl),y1=b(gH),ze=b(e$),zo=b(lg),zy=b(kd),zI=b(kH),zS=b(kj),z2=b(kk),Aa=b(k9),Ak=b(kJ),Au=b(kG),AG=b(kU),AX=b(kW),sh=E.End_of_file,x_=E.Envars,x$=E.Filename,x6=E.System;function
ak(d,b){if(typeof
b==="number")return c(i[49],d,lv);else
switch(b[0]){case
0:var
m=a(g[40],b[1]);return c(i[49],d,m);case
1:return e(n[1],d,lw,b[1]);case
2:return F(n[1],d,lx,ak,b[1]);case
3:return F(n[1],d,ly,ak,b[1]);case
4:var
f=b[1];return B(n[1],d,lz,ak,f[1],ak,f[2]);case
5:var
h=b[1];return B(n[1],d,lA,ak,h[1],ak,h[2]);case
6:var
j=b[1];return B(n[1],d,lB,ak,j[1],ak,j[2]);case
7:var
k=b[1];return B(n[1],d,lC,ak,k[1],ak,k[2]);default:var
l=b[1];return aW(n[1],d,lD,ak,l[1],l[2])}}function
bT(d,b){switch(b[0]){case
0:return e(n[1],d,lE,b[1]);case
1:return e(n[1],d,lF,b[1]);case
2:return e(n[1],d,lG,b[1]);case
3:var
f=a(g[40],b[1]);return e(n[1],d,lH,f);case
4:var
h=a(g[40],b[1]);return e(n[1],d,lI,h);case
5:var
i=a(g[40],b[1]);return e(n[1],d,lJ,i);case
6:return F(n[1],d,lK,ak,b[1]);case
7:return c(n[1],d,lL);case
8:return B(n[1],d,lM,ak,b[1],bT,b[2]);case
9:return B(n[1],d,lN,bT,b[1],bT,b[2]);default:return B(n[1],d,lO,bT,b[1],bT,b[2])}}var
gR=[0,ak,bT];aX(726,gR,"Micromega_plugin.Sos_types");var
lP=0;function
lQ(e,b,d){var
a=d;for(;;){if(a){var
f=a[2];c(e,b,a[1]);c(i[49],b,lR);var
a=f;continue}return 0}}function
gS(b,c){try{var
d=a(b,0);a(c,0);return d}catch(b){b=v(b);try{a(c,0)}catch(a){throw b}throw b}}function
lS(c,b){return b?[0,a(c,b[1])]:0}function
lT(b){return b?b[1]:a(i[2],lU)}function
lV(e,d){var
b=e;for(;;){if(b){var
f=b[2],c=a(b[1][1],d);if(c)return c;var
b=f;continue}return 0}}function
lW(e,d){var
b=0,a=d;for(;;){if(a){var
f=a[2];c(e,b,a[1]);var
b=b+1|0,a=f;continue}return 0}}function
lX(g,f){var
b=0,a=f;for(;;){if(a){var
d=a[2],j=a[1],i=function(d){return function(b,a){return[0,c(g,d,a),b]}}(j),b=e(h[16],i,b,d),a=d;continue}return b}}function
lY(f,d){var
b=0,a=d;for(;;){if(a){var
i=a[2],j=a[1],g=function(d){return function(b,a){return[0,c(f,d,a),b]}}(j),b=e(h[16],g,b,a),a=i;continue}return b}}function
gT(f,d,c,b){if(d){if(c)if(b){var
g=b[1],h=c[1],j=d[1],k=gT(f,d[2],c[2],b[2]);return[0,e(f,j,h,g),k]}}else
if(!c)if(!b)return 0;return a(i[1],lZ)}function
l0(g,f,e){var
b=f,a=e;for(;;){if(b){var
h=b[2],i=b[1];if(a){var
d=a[2];if(c(g,i,a[1])){var
b=h,a=d;continue}var
a=d;continue}return 0}return 1}}function
l1(c){return function(d){var
b=d;for(;;){if(b){var
e=b[2],f=b[1];try{var
g=a(c,f);return g}catch(a){a=v(a);if(a[1]===fb){var
b=e;continue}throw a}}return a(i[2],l2)}}}function
l3(g,b){function
d(b){if(b){var
e=b[2],f=b[1];return e?c(g,f,d(e)):f}return a(i[1],l4)}return d(b)}function
l5(e,d){var
a=[0,0,d];for(;;){var
b=a[2],c=a[1];if(b<e)return c;var
a=[0,[0,b,c],b-1|0];continue}}function
l6(g,b){function
c(e,b){var
c=e[2],d=e[1];if(d)return[0,d,[0,b,c]];var
f=a(g,b);return f?[0,[0,[0,f[1],b]],c]:[0,d,[0,b,c]]}return e(h[16],c,l7,b)}function
gU(d,b){var
a=c(q[17],d,b),e=c(q[15],d,a),f=c(q[15],b,a),g=c(q[10],e,f);return c(q[10],a,g)}function
d6(b){return 2===b[0]?a(gV[3],b[1]):q[2]}function
d7(b){switch(b[0]){case
0:return a(q[35],b[1]);case
1:return b[1];default:return a(gV[2],b[1])}}function
gW(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[2],b=gU(b,d6(a[1])),a=e;continue}return b}}function
gX(e,d){var
b=e,a=d;for(;;){if(a){var
f=a[2],g=d7(a[1]),b=c(q[17],b,g),a=f;continue}return b}}function
l8(b){var
a=gX(q[1],b);return 0===c(q[23],a,q[1])?q[2]:a}function
l9(a){var
b=gW(q[2],a);function
d(a){var
d=d6(a),e=d7(a),f=c(q[10],e,b);return c(q[15],f,d)}return c(h[13],d,a)}function
fc(e,a){function
b(d,a){if(a){var
f=a[1],g=b(d+1|0,a[2]);return[0,c(e,f,d),g]}return 0}return b(0,a)}function
l_(c,b){var
d=fc(function(d,b){return[0,b,a(c,d)]},b);return a(h[6],d)}function
gY(c,b){var
d=c+a(h[1],b)|0;return[0,fc(function(b,a){return[0,b,a+c|0]},b),d]}function
l$(a){function
b(e,a){if(a){var
c=a[1],f=a[2],g=c[1],d=gY(e,c[2]),h=d[1];return[0,[0,g,h],b(d[2],f)]}return 0}return b(0,a)}function
ma(g,a){function
b(i){var
a=i;for(;;){if(a){var
d=a[2],e=a[1],f=e[2],j=e[1],k=function(a){return a[2]},l=c(h[13],k,f),m=function(a){return c(h[27],a,g)};if(c(h[24],m,l))return[0,[0,j,f],b(d)];var
a=d;continue}return 0}}return b(a)}function
mb(c,b){function
e(h,d,g){var
c=h,b=g;for(;;){if(d){var
j=d[2],k=d[1];if(b){var
f=b[2],l=b[1];if(c===k)return[0,l,e(c+1|0,j,f)];var
c=c+1|0,b=f;continue}return a(i[2],mc)}return 0}}return e(0,c,b)}function
gZ(a){return a?gZ(a[1])+1|0:0}function
bU(a){return typeof
a==="number"?1:0===a[0]?1+(2*bU(a[1])|0)|0:2*bU(a[1])|0}function
md(a){return a?bU(a[1]):0}function
fd(a){return typeof
a==="number"?1:0===a[0]?1+(2*fd(a[1])|0)|0:2*fd(a[1])|0}function
me(a){return typeof
a==="number"?0:0===a[0]?bU(a[1]):-bU(a[1])|0}function
cl(a){if(typeof
a==="number")return q[2];else{if(0===a[0]){var
b=cl(a[1]),d=c(q[11],2,b);return c(q[7],1,d)}var
e=cl(a[1]);return c(q[11],2,e)}}function
d8(b){if(typeof
b==="number")return q[1];else{if(0===b[0])return cl(b[1]);var
c=cl(b[1]);return a(q[3],c)}}function
mf(a){return[1,d8(a)]}var
mg=[0,gZ,bU,md,fd,me,cl,d8,mf,function(a){var
b=a[1],d=[1,d8([0,a[2]])],e=[1,d8(b)];return c(g[9],e,d)}];function
g0(a){return 0===a?0:[0,g0(a-1|0)]}function
bV(a){return 1===a?0:1===(a&1)?[0,bV(a>>>1|0)]:[1,bV(a>>>1|0)]}function
mh(a){if(0<=a)return 0===a?0:[0,bV(a)];throw[0,C,mi]}function
fe(a){return 1===a?0:1===(a&1)?[0,fe(a>>>1|0)]:[1,fe(a>>>1|0)]}function
mj(a){var
b=Z(a,0);return 0===b?0:1===b?[0,bV(a)]:[1,bV(-a|0)]}function
d9(d){var
f=a(q[35],2);function
b(a){if(c(q[24],a,q[2]))return 0;var
d=c(q[14],a,f),e=d[1];return c(q[24],q[2],d[2])?[0,b(e)]:[1,b(e)]}return b(d)}function
g1(b){var
c=a(q[22],b);return 0===c?0:1===c?[0,d9(b)]:[1,d9(a(q[3],b))]}var
mk=[0,g0,bV,mh,fe,mj,d9,g1,function(a){var
b=d9(d6(a));return[0,g1(d7(a)),b]}];function
ml(d){var
b=d;for(;;){if(b){var
e=b[2],c=a(b[1],0);if(0===c){var
b=e;continue}return c}return 0}}function
mm(g,f,e){var
b=f,a=e;for(;;){if(b){if(a){var
h=a[2],i=b[2],d=c(g,b[1],a[1]);if(0===d){var
b=i,a=h;continue}return d}return 1}return a?-1:0}}var
mn=[0,ml,mm,function(e,d){var
b=d,c=0;for(;;){if(b){var
f=b[2],g=a(e,b[1])^c,b=f,c=g;continue}return c^a(bm[20],0)}}];function
mo(a){return a}function
mp(a){return a+1|0}var
g2=[0,mo,mp,function(d,b){var
e=a(i[20],b);return c(i[49],d,e)},Z],mq=a(d_[1],[0,g2[4]]);function
g3(a){for(;;)try{var
d=c(D[13],0,a)[2];return d}catch(a){a=v(a);if(a[1]===D[1]){var
b=a[2];if(typeof
b==="number")if(11===b)continue}throw a}}var
m=[0,lP,lQ,gS,lS,lT,lV,lW,lX,lY,gT,l0,l1,l3,l5,l6,gU,d6,d7,gW,gX,l8,l9,fc,l_,gY,l$,ma,mb,mg,mk,mn,g2,mq,g3,function(b,s,r){var
f=a(D[64],0),g=f[2],j=f[1],k=a(D[64],0),l=k[2],m=k[1],o=a(D[64],0),p=o[2],t=o[1],u=aW(D[66],b,s,j,l,p),q=a(D[29],g);c(i[55],q,r);a(i[46],q);var
d=g3(u);function
w(e){var
b=[0,j,[0,g,[0,m,[0,l,[0,t,[0,p,0]]]]]];function
d(b){try{var
c=a(D[22],b);return c}catch(a){return 0}}return c(h[11],d,b)}return gS(function(p){switch(d[0]){case
0:var
c=d[1];if(0===c){var
f=a(D[28],m);try{var
j=a(ea[3],f);return j}catch(c){c=v(c);var
g=a(d$[1],c),h=e(n[4],mr,b,g);return a(i[2],h)}}var
k=e(n[4],ms,b,c);return a(i[2],k);case
1:var
l=e(n[4],mt,b,d[1]);return a(i[2],l);default:var
o=e(n[4],mu,b,d[1]);return a(i[2],o)}},w)}];aX(737,m,"Micromega_plugin.Mutils");function
bA(a){return 0===a?1:0}function
eb(a,b){if(a){var
c=a[1];return[0,c,eb(a[2],b)]}return b}function
g4(a){switch(a){case
0:return 0;case
1:return 2;default:return 1}}function
ff(b,a){return b?[0,ff(b[1],a)]:a}var
mv=[0];function
a1(a){return typeof
a==="number"?mw:0===a[0]?[1,a1(a[1])]:[0,a[1]]}function
bW(b,a){if(typeof
b==="number")return typeof
a==="number"?mx:0===a[0]?[1,a1(a[1])]:[0,a[1]];else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[1,a1(c)]:0===a[0]?[1,cm(c,a[1])]:[0,bW(c,a[1])]}var
d=b[1];return typeof
a==="number"?[0,d]:0===a[0]?[0,bW(d,a[1])]:[1,bW(d,a[1])]}}function
cm(b,a){if(typeof
b==="number")return typeof
a==="number"?my:0===a[0]?[0,a1(a[1])]:[1,a1(a[1])];else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[0,a1(c)]:0===a[0]?[0,cm(c,a[1])]:[1,cm(c,a[1])]}var
d=b[1];return typeof
a==="number"?[1,a1(d)]:0===a[0]?[1,cm(d,a[1])]:[0,bW(d,a[1])]}}function
cn(a){return typeof
a==="number"?0:0===a[0]?[0,[1,a[1]]]:[0,cn(a[1])]}function
co(a){return typeof
a==="number"?0===a?mz:1:[0,[0,a[1]]]}function
cp(a){return typeof
a==="number"?a:[0,[1,a[1]]]}function
g5(a){return typeof
a==="number"?0:0===a[0]?[0,[1,[1,a[1]]]]:[0,[1,cn(a[1])]]}function
bX(b,a){if(typeof
b==="number")return typeof
a==="number"?0:1;else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[0,[1,c]]:0===a[0]?cp(bX(c,a[1])):co(bX(c,a[1]))}var
d=b[1];return typeof
a==="number"?[0,cn(d)]:0===a[0]?co(cq(d,a[1])):cp(bX(d,a[1]))}}function
cq(b,a){if(typeof
b==="number")return 1;else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[0,cn(c)]:0===a[0]?co(cq(c,a[1])):cp(bX(c,a[1]))}var
d=b[1];return typeof
a==="number"?g5(d):0===a[0]?cp(cq(d,a[1])):co(cq(d,a[1]))}}function
fg(c,b){var
a=bX(c,b);return typeof
a==="number"?0:a[1]}function
fh(b,a){return typeof
b==="number"?a:0===b[0]?bW(a,[1,fh(b[1],a)]):[1,fh(b[1],a)]}function
cr(a){return typeof
a==="number"?mA:0===a[0]?[0,cr(a[1])]:[0,cr(a[1])]}function
g6(h,g,f){var
c=h,b=g,a=f;for(;;)if(typeof
b==="number")return typeof
a==="number"?c:1;else{if(0===b[0]){var
d=b[1];if(typeof
a==="number")return 2;else{if(0===a[0]){var
b=d,a=a[1];continue}var
c=2,b=d,a=a[1];continue}}var
e=b[1];if(typeof
a==="number")return 2;else{if(0===a[0]){var
c=1,b=e,a=a[1];continue}var
b=e,a=a[1];continue}}}var
mB=0;function
g7(a,b){return g6(mB,a,b)}function
fi(j,i,h){var
c=j,b=i,a=h;for(;;){if(c){var
d=c[1];if(typeof
b==="number")return 0;else{if(0===b[0]){var
e=b[1];if(typeof
a==="number")return 0;else{if(0===a[0]){var
f=a[1];switch(g7(e,f)){case
0:return b;case
1:var
c=d,a=b,b=fg(f,e);continue;default:var
c=d,b=fg(e,f);continue}}var
c=d,a=a[1];continue}}var
g=b[1];if(typeof
a==="number")return 0;else{if(0===a[0]){var
c=d,b=g;continue}return[1,fi(d,g,a[1])]}}}return 0}}function
mC(b,a){var
c=cr(a);return fi(ff(cr(b),c),b,a)}function
g8(a){return a?a1(g8(a[1])):0}var
y=[0,a1,bW,cm,cn,co,cp,g5,bX,cq,fg,fh,cr,g6,g7,fi,mC,g8],mD=[0,function(b){return b?[0,a(y[17],b[1])]:0}];function
ec(a,d,b){if(typeof
b==="number")return d;else{if(0===b[0]){var
e=ec(a,d,b[1]);return c(a,d,c(a,e,e))}var
f=ec(a,d,b[1]);return c(a,f,f)}}function
g9(e,d,c){var
b=e,a=d;for(;;){if(b){var
f=b[1];if(a){var
b=f,a=a[2];continue}return c}return a?a[1]:c}}function
bY(c,b){if(b){var
d=b[1],e=bY(c,b[2]);return[0,a(c,d),e]}return 0}function
fj(d,b,a){if(a){var
e=a[1];return c(d,e,fj(d,b,a[2]))}return b}function
fk(a){return typeof
a==="number"?0:0===a[0]?[0,[1,a[1]]]:[1,[1,a[1]]]}function
g_(b){return typeof
b==="number"?mE:0===b[0]?[0,[0,b[1]]]:[1,a(y[4],b[1])]}function
g$(b){return typeof
b==="number"?mF:0===b[0]?[0,a(y[4],b[1])]:[1,[0,b[1]]]}function
bB(c,b){if(typeof
c==="number")return typeof
b==="number"?0:0===b[0]?[1,[1,b[1]]]:[1,a(y[4],b[1])];else{if(0===c[0]){var
d=c[1];return typeof
b==="number"?[0,[1,d]]:0===b[0]?fk(bB(d,b[1])):g_(bB(d,b[1]))}var
e=c[1];return typeof
b==="number"?[0,a(y[4],e)]:0===b[0]?g$(bB(e,b[1])):fk(bB(e,b[1]))}}function
bn(b,a){if(typeof
b==="number")return a;else{if(0===b[0]){var
d=b[1];return typeof
a==="number"?b:0===a[0]?[0,c(y[2],d,a[1])]:bB(d,a[1])}var
e=b[1];return typeof
a==="number"?b:0===a[0]?bB(a[1],e):[1,c(y[2],e,a[1])]}}function
bC(a){return typeof
a==="number"?0:0===a[0]?[1,a[1]]:[0,a[1]]}function
ed(b,a){return bn(b,bC(a))}function
bD(b,a){if(typeof
b==="number")return 0;else{if(0===b[0]){var
d=b[1];return typeof
a==="number"?0:0===a[0]?[0,c(y[11],d,a[1])]:[1,c(y[11],d,a[1])]}var
e=b[1];return typeof
a==="number"?0:0===a[0]?[1,c(y[11],e,a[1])]:[0,c(y[11],e,a[1])]}}function
cs(b,a){if(typeof
b==="number")return typeof
a==="number"?0:0===a[0]?1:2;else{if(0===b[0]){var
d=b[1];if(typeof
a!=="number"&&0===a[0])return c(y[14],d,a[1]);return 2}var
e=b[1];if(typeof
a!=="number"&&1===a[0])return g4(c(y[14],e,a[1]));return 1}}function
ha(b,a){return 2<=cs(b,a)?0:1}function
fl(b,a){return 1===cs(b,a)?1:0}function
mG(b,a){return 2<=cs(b,a)?1:0}function
mH(b,a){return 1===cs(b,a)?a:b}function
ee(a){if(typeof
a!=="number"&&1===a[0])return[0,a[1]];return a}function
mI(a){if(typeof
a!=="number"&&0===a[0])return[0,a[1]];return 0}function
bE(b,a){if(typeof
b==="number")return ha(mJ,a)?mK:mL;else{if(0===b[0]){var
e=bE(b[1],a),f=e[1],c=bn(bD(mN,e[2]),mM);if(fl(c,a))return[0,bD(mO,f),c];var
i=ed(c,a);return[0,bn(bD(mQ,f),mP),i]}var
g=bE(b[1],a),h=g[1],d=bD(mR,g[2]);if(fl(d,a))return[0,bD(mS,h),d];var
j=ed(d,a);return[0,bn(bD(mU,h),mT),j]}}function
hb(b,a){if(typeof
b==="number")return mV;else{if(0===b[0]){var
c=b[1];if(typeof
a==="number")return mW;else{if(0===a[0])return bE(c,a);var
d=bE(c,[0,a[1]]),e=d[2],f=d[1];if(typeof
e==="number")return[0,bC(f),0];var
l=bn(a,e);return[0,bC(bn(f,mX)),l]}}var
g=b[1];if(typeof
a==="number")return mY;else{if(0===a[0]){var
h=bE(g,a),i=h[2],j=h[1];if(typeof
i==="number")return[0,bC(j),0];var
m=ed(a,i);return[0,bC(bn(j,mZ)),m]}var
k=bE(g,[0,a[1]]),n=k[1];return[0,n,bC(k[2])]}}}function
m0(b,a){return hb(b,a)[1]}var
t=[0,fk,g_,g$,bB,bn,bC,ed,bD,cs,ha,fl,mG,mH,ee,mI,bE,hb,m0,function(b,a){if(typeof
b==="number")return ee(a);else{if(0===b[0]){var
d=b[1];return typeof
a==="number"?ee(b):0===a[0]?[0,c(y[16],d,a[1])]:[0,c(y[16],d,a[1])]}var
e=b[1];return typeof
a==="number"?ee(b):0===a[0]?[0,c(y[16],e,a[1])]:[0,c(y[16],e,a[1])]}}];function
az(b,a){return 0===c(t[9],b,a)?1:0}function
m1(a){return[0,a]}function
m2(a){return[0,a]}function
fm(d,f,e){var
b=f,a=e;for(;;)switch(b[0]){case
0:var
g=b[1];return 0===a[0]?c(d,g,a[1]):0;case
1:var
h=b[2],i=b[1];if(1===a[0]){var
j=a[2];if(0===c(y[14],i,a[1])){var
b=h,a=j;continue}return 0}return 0;default:var
k=b[3],l=b[2],m=b[1];if(2===a[0]){var
n=a[3],o=a[1];if(0===c(y[14],l,a[2])){if(fm(d,m,o)){var
b=k,a=n;continue}return 0}return 0}return 0}}function
W(b,a){switch(a[0]){case
0:return a;case
1:var
d=a[2];return[1,c(y[2],b,a[1]),d];default:return[1,b,a]}}function
hc(b,c){return typeof
b==="number"?c:0===b[0]?[1,[1,b[1]],c]:[1,a(y[4],b[1]),c]}function
K(f,e,a,d,b){switch(a[0]){case
0:return c(e,a[1],f)?W(0,b):[2,a,d,b];case
1:return[2,a,d,b];default:var
g=a[2],h=a[1];return fm(e,a[3],[0,f])?[2,h,c(y[2],g,d),b]:[2,a,d,b]}}function
hd(c,b,a){return[2,[0,b],a,[0,c]]}function
he(b,a){return hd(b,a,0)}function
ac(c,b){switch(b[0]){case
0:return[0,a(c,b[1])];case
1:var
d=b[1];return[1,d,ac(c,b[2])];default:var
e=b[2],f=b[1],g=ac(c,b[3]);return[2,ac(c,f),e,g]}}function
bo(d,a,b){switch(a[0]){case
0:return[0,c(d,a[1],b)];case
1:var
e=a[1];return[1,e,bo(d,a[2],b)];default:var
f=a[2],g=a[1];return[2,g,f,bo(d,a[3],b)]}}function
bZ(d,a,b){switch(a[0]){case
0:return[0,c(d,a[1],b)];case
1:var
e=a[1];return[1,e,bZ(d,a[2],b)];default:var
f=a[2],g=a[1];return[2,g,f,bZ(d,a[3],b)]}}function
ct(g,f,e,b,d){switch(d[0]){case
0:return W(b,bo(g,e,d[1]));case
1:var
i=d[2],m=d[1],h=c(t[4],m,b);return typeof
h==="number"?W(b,c(f,i,e)):0===h[0]?W(b,c(f,[1,h[1],i],e)):W(m,ct(g,f,e,h[1],i));default:var
j=d[3],k=d[2],l=d[1];return typeof
b==="number"?[2,l,k,c(f,j,e)]:0===b[0]?[2,l,k,ct(g,f,e,[1,b[1]],j)]:[2,l,k,ct(g,f,e,a(y[4],b[1]),j)]}}function
cu(h,g,f,e,b,d){switch(d[0]){case
0:var
o=d[1];return W(b,bo(h,ac(g,e),o));case
1:var
j=d[2],n=d[1],i=c(t[4],n,b);return typeof
i==="number"?W(b,c(f,j,e)):0===i[0]?W(b,c(f,[1,i[1],j],e)):W(n,cu(h,g,f,e,i[1],j));default:var
k=d[3],l=d[2],m=d[1];return typeof
b==="number"?[2,m,l,c(f,k,e)]:0===b[0]?[2,m,l,cu(h,g,f,e,[1,b[1]],k)]:[2,m,l,cu(h,g,f,e,a(y[4],b[1]),k)]}}function
fn(f,g,j,d,e,b){switch(b[0]){case
0:return[2,d,e,b];case
1:var
k=b[2],h=b[1];return typeof
h==="number"?[2,d,e,k]:0===h[0]?[2,d,e,[1,[1,h[1]],k]]:[2,d,e,[1,a(y[4],h[1]),k]];default:var
l=b[3],m=b[2],n=b[1],i=c(t[4],m,e);return typeof
i==="number"?K(f,g,c(j,n,d),m,l):0===i[0]?K(f,g,c(j,[2,n,i[1],[0,f]],d),e,l):K(f,g,fn(f,g,j,d,i[1],n),m,l)}}function
fo(g,f,h,k,d,e,b){switch(b[0]){case
0:return[2,ac(f,d),e,b];case
1:var
l=b[2],i=b[1];if(typeof
i==="number")return[2,ac(f,d),e,l];else{if(0===i[0]){var
p=[1,[1,i[1]],l];return[2,ac(f,d),e,p]}var
q=[1,a(y[4],i[1]),l];return[2,ac(f,d),e,q]}default:var
m=b[3],n=b[2],o=b[1],j=c(t[4],n,e);return typeof
j==="number"?K(g,h,c(k,o,d),n,m):0===j[0]?K(g,h,c(k,[2,o,j[1],[0,g]],d),e,m):K(g,h,fo(g,f,h,k,d,j[1],o),n,m)}}function
X(b,e,d,f,g){switch(g[0]){case
0:return bo(e,f,g[1]);case
1:var
q=g[2],r=g[1];return ct(e,function(a,c){return X(b,e,d,a,c)},q,r,f);default:var
h=g[3],j=g[2],i=g[1];switch(f[0]){case
0:return[2,i,j,bo(e,h,f[1])];case
1:var
m=f[2],k=f[1];return typeof
k==="number"?[2,i,j,X(b,e,d,m,h)]:0===k[0]?[2,i,j,X(b,e,d,[1,[1,k[1]],m],h)]:[2,i,j,X(b,e,d,[1,a(y[4],k[1]),m],h)];default:var
n=f[3],o=f[2],p=f[1],l=c(t[4],o,j);if(typeof
l==="number"){var
s=X(b,e,d,n,h);return K(b,d,X(b,e,d,p,i),o,s)}else{if(0===l[0]){var
u=l[1],v=X(b,e,d,n,h);return K(b,d,X(b,e,d,[2,p,u,[0,b]],i),j,v)}var
w=l[1],x=X(b,e,d,n,h);return K(b,d,fn(b,d,function(a,c){return X(b,e,d,a,c)},i,w,p),o,x)}}}}function
ad(d,f,g,b,e,h,i){switch(i[0]){case
0:return bZ(g,h,i[1]);case
1:var
s=i[2],u=i[1];return cu(f,b,function(a,c){return ad(d,f,g,b,e,a,c)},s,u,h);default:var
j=i[3],l=i[2],k=i[1];switch(h[0]){case
0:var
v=h[1],w=bo(f,ac(b,j),v);return[2,ac(b,k),l,w];case
1:var
o=h[2],m=h[1];if(typeof
m==="number"){var
x=ad(d,f,g,b,e,o,j);return[2,ac(b,k),l,x]}else{if(0===m[0]){var
z=ad(d,f,g,b,e,[1,[1,m[1]],o],j);return[2,ac(b,k),l,z]}var
A=ad(d,f,g,b,e,[1,a(y[4],m[1]),o],j);return[2,ac(b,k),l,A]}default:var
p=h[3],q=h[2],r=h[1],n=c(t[4],q,l);if(typeof
n==="number"){var
B=ad(d,f,g,b,e,p,j);return K(d,e,ad(d,f,g,b,e,r,k),q,B)}else{if(0===n[0]){var
C=n[1],D=ad(d,f,g,b,e,p,j);return K(d,e,ad(d,f,g,b,e,[2,r,C,[0,d]],k),l,D)}var
E=n[1],F=ad(d,f,g,b,e,p,j);return K(d,e,fo(d,b,e,function(a,c){return ad(d,f,g,b,e,a,c)},k,E,r),q,F)}}}}function
cv(f,e,d,a,b){switch(a[0]){case
0:return[0,c(e,a[1],b)];case
1:var
g=a[1];return W(g,cv(f,e,d,a[2],b));default:var
h=a[2],i=a[1],j=cv(f,e,d,a[3],b);return K(f,d,cv(f,e,d,i,b),h,j)}}function
cw(d,g,f,b,e,a){return c(b,a,d)?[0,d]:c(b,a,g)?e:cv(d,f,b,e,a)}function
a2(f,j,i,e,g,d,b,h){switch(h[0]){case
0:return W(b,cw(f,j,i,e,d,h[1]));case
1:var
l=h[2],p=h[1],k=c(t[4],p,b);return typeof
k==="number"?W(b,c(g,l,d)):0===k[0]?W(b,c(g,[1,k[1],l],d)):W(p,a2(f,j,i,e,g,d,k[1],l));default:var
m=h[3],n=h[2],o=h[1];if(typeof
b==="number"){var
q=c(g,m,d);return K(f,e,a2(f,j,i,e,g,d,0,o),n,q)}else{if(0===b[0]){var
r=a2(f,j,i,e,g,d,[1,b[1]],m);return K(f,e,a2(f,j,i,e,g,d,b,o),n,r)}var
s=a2(f,j,i,e,g,d,a(y[4],b[1]),m);return K(f,e,a2(f,j,i,e,g,d,b,o),n,s)}}}function
_(b,e,f,d,c,g,h){switch(h[0]){case
0:return cw(b,e,d,c,g,h[1]);case
1:var
q=h[2],r=h[1];return a2(b,e,d,c,function(a,g){return _(b,e,f,d,c,a,g)},q,r,g);default:var
i=h[3],m=h[2],k=h[1];switch(g[0]){case
0:return cw(b,e,d,c,h,g[1]);case
1:var
l=g[2],j=g[1],s=typeof
j==="number"?_(b,e,f,d,c,l,i):0===j[0]?_(b,e,f,d,c,[1,[1,j[1]],l],i):_(b,e,f,d,c,[1,a(y[4],j[1]),l],i);return K(b,c,_(b,e,f,d,c,g,k),m,s);default:var
n=g[3],o=g[2],p=g[1],t=_(b,e,f,d,c,n,i),u=0,v=a2(b,e,d,c,function(a,g){return _(b,e,f,d,c,a,g)},i,u,p),w=_(b,e,f,d,c,W(0,n),k),x=_(b,e,f,d,c,p,k),z=K(b,c,v,o,t);return X(b,f,c,K(b,c,X(b,f,c,K(b,c,x,o,[0,b]),w),m,[0,b]),z)}}}function
cx(a,e,g,f,b,d){switch(d[0]){case
0:var
h=d[1];return[0,c(f,h,h)];case
1:var
l=d[1];return[1,l,cx(a,e,g,f,b,d[2])];default:var
i=d[3],j=d[2],k=d[1],m=_(a,e,g,f,b,k,W(0,cw(a,e,f,b,i,c(g,e,e)))),n=cx(a,e,g,f,b,i);return K(a,b,X(a,g,b,K(a,b,cx(a,e,g,f,b,k),j,[0,a]),m),j,n)}}function
hf(c,b,a){return hc(a,he(c,b))}function
cy(h,g,f,e,d,c,n,b,m){var
j=n,i=m;for(;;)if(typeof
i==="number")return a(c,_(h,g,f,e,d,j,b));else{if(0===i[0]){var
k=i[1];return a(c,_(h,g,f,e,d,cy(h,g,f,e,d,c,cy(h,g,f,e,d,c,j,b,k),b,k),b))}var
l=i[1],j=cy(h,g,f,e,d,c,j,b,l),i=l;continue}}function
hg(h,a,g,f,e,d,c,b){return b?cy(h,a,g,f,e,d,[0,a],c,b[1]):[0,a]}function
al(a,f,c,g,e,d,b,h){switch(h[0]){case
0:return[0,h[1]];case
1:return hf(a,f,h[1]);case
2:var
i=h[2],j=h[1];if(5===j[0]){var
m=al(a,f,c,g,e,d,b,j[1]);return ad(a,c,e,d,b,al(a,f,c,g,e,d,b,i),m)}if(5===i[0]){var
l=al(a,f,c,g,e,d,b,i[1]);return ad(a,c,e,d,b,al(a,f,c,g,e,d,b,j),l)}var
k=al(a,f,c,g,e,d,b,i);return X(a,c,b,al(a,f,c,g,e,d,b,j),k);case
3:var
n=h[1],o=al(a,f,c,g,e,d,b,h[2]);return ad(a,c,e,d,b,al(a,f,c,g,e,d,b,n),o);case
4:var
p=h[1],q=al(a,f,c,g,e,d,b,h[2]);return _(a,f,c,g,b,al(a,f,c,g,e,d,b,p),q);case
5:return ac(d,al(a,f,c,g,e,d,b,h[1]));default:var
r=h[2],s=al(a,f,c,g,e,d,b,h[1]);return hg(a,f,c,g,b,function(a){return a},s,r)}}function
a3(c,b){if(typeof
b==="number")switch(b){case
0:return 0;case
1:return 1;default:return 2}else
switch(b[0]){case
0:return[0,a(c,b[1])];case
1:var
d=b[1],e=a3(c,b[2]);return[1,a3(c,d),e];case
2:var
f=b[1],g=a3(c,b[2]);return[2,a3(c,f),g];case
3:return[3,a3(c,b[1])];default:var
h=b[1],i=a3(c,b[2]);return[4,a3(c,h),i]}}var
ef=0;function
eh(e,d,b,f){if(f){var
h=f[2],g=f[1],i=c(d,b,g);if(i){if(a(e,i[1]))return 0;var
j=eh(e,d,b,h);return j?[0,[0,g,j[1]]]:0}var
k=eh(e,d,b,h);return k?[0,[0,g,k[1]]]:0}var
l=c(d,b,b);return l?a(e,l[1])?0:[0,[0,b,0]]:[0,[0,b,0]]}function
hh(g,f,e,d){var
a=e,b=d;for(;;){if(a){var
h=a[2],c=eh(g,f,a[1],b);if(c){var
a=h,b=c[1];continue}return 0}return[0,b]}}function
hi(e,d,c,a){var
b=0;return fj(function(f,a){var
b=hh(e,d,c,f);return b?[0,b[1],a]:a},b,a)}function
cz(d,c,a,b){if(a){var
e=a[2],f=hi(d,c,a[1],b);return eb(cz(d,c,e,b),f)}return ef}function
ei(b,a){return eb(b,a)}function
am(d,c,f,e,p,o){var
b=p,g=o;for(;;)if(typeof
g==="number")switch(g){case
0:return b?ef:eg;case
1:return b?eg:ef;default:return eg}else
switch(g[0]){case
0:var
h=g[1];return b?a(f,h):a(e,h);case
1:var
i=g[2],j=g[1];if(b){var
q=am(d,c,f,e,b,i);return ei(am(d,c,f,e,b,j),q)}var
r=am(d,c,f,e,b,i);return cz(d,c,am(d,c,f,e,b,j),r);case
2:var
k=g[2],l=g[1];if(b){var
s=am(d,c,f,e,b,k);return cz(d,c,am(d,c,f,e,b,l),s)}var
t=am(d,c,f,e,b,k);return ei(am(d,c,f,e,b,l),t);case
3:var
u=g[1],b=bA(b),g=u;continue;default:var
m=g[2],n=g[1];if(b){var
v=am(d,c,f,e,b,m);return cz(d,c,am(d,c,f,e,bA(b),n),v)}var
w=am(d,c,f,e,b,m);return ei(am(d,c,f,e,bA(b),n),w)}}function
hj(f,e,d){var
b=e,a=d;for(;;){if(b){var
g=b[2],h=b[1];if(a){var
i=a[2];if(c(f,h,a[1])){var
b=g,a=i;continue}return 0}return 0}return 1}}function
ej(g,f,e,d,c,b,a){return hj(c,am(g,f,e,d,1,b),a)}function
fp(d,b,a){return bA(c(d,b,a))}function
fq(f,e,b,a){var
d=c(e,b,a);return d?fp(f,b,a):d}function
hk(b,a){switch(b){case
0:return m3;case
1:return 1===a?m4:0===a?m5:0;case
2:return 1===a?0:[0,a];default:return 1===a?0:0===a?m6:m7}}function
hl(b,a){switch(b){case
0:return[0,a];case
1:return 0===a?m8:0;case
2:return 1===a?0:m9;default:return 1===a?0:0===a?m_:[0,a]}}function
ek(c,b){return b?a(c,b[1]):0}function
fr(d,b,a){if(b){var
e=b[1];return a?c(d,e,a[1]):0}return 0}function
hm(g,f,e,d,c,b,a){var
h=a[1];return 0===a[2]?[0,[0,_(g,f,e,d,c,b,h),0]]:0}function
hn(g,f,e,d,c,b,a){var
h=b[1],i=a[1],j=hk(b[2],a[2]);return ek(function(a){return[0,[0,_(g,f,e,d,c,h,i),a]]},j)}function
cA(e,d,c,b,a){var
f=b[1],g=a[1],h=hl(b[2],a[2]);return ek(function(a){return[0,[0,X(e,d,c,f,g),a]]},h)}function
bp(a,f,d,e,c,h,g,b){if(typeof
b==="number")return[0,[0,[0,a],0]];else
switch(b[0]){case
0:return[0,g9(b[1],g,[0,[0,a],0])];case
1:return[0,[0,cx(a,f,d,e,c,b[1]),3]];case
2:var
j=b[1],k=bp(a,f,d,e,c,h,g,b[2]);return ek(function(b){return hm(a,f,d,e,c,j,b)},k);case
3:var
l=b[1],m=bp(a,f,d,e,c,h,g,b[2]),n=bp(a,f,d,e,c,h,g,l);return fr(function(b,g){return hn(a,f,d,e,c,b,g)},n,m);case
4:var
o=b[1],p=bp(a,f,d,e,c,h,g,b[2]),q=bp(a,f,d,e,c,h,g,o);return fr(function(b,e){return cA(a,d,c,b,e)},q,p);default:var
i=b[1];return fq(c,h,a,i)?[0,[0,[0,i],2]]:0}}function
cB(a,d,f,e){var
g=e[1],h=e[2];if(0===g[0]){var
b=g[1];switch(h){case
0:return fp(d,b,a);case
1:return c(d,b,a);case
2:return c(f,b,a);default:return fq(d,f,b,a)}}return 0}function
el(c,i,h,g,b,a,f,e){var
d=bp(c,i,h,g,b,a,f,e);return d?cB(c,b,a,d[1]):0}function
b0(g,f,e,d,c,b,a){return function(h){return al(g,f,e,d,c,b,a,h)}}function
$(e,d,c,b,a){return function(f,g){return ad(e,d,c,b,a,f,g)}}function
ho(c,b,a){return function(d,e){return X(c,b,a,d,e)}}function
hp(g,l,f,k,e,d,b,j){var
m=j[3],n=j[2],o=j[1],h=a(b0(g,l,f,k,e,d,b),o),i=a(b0(g,l,f,k,e,d,b),m);switch(n){case
0:var
p=[0,[0,c($(g,f,e,d,b),i,h),2],0];return[0,[0,c($(g,f,e,d,b),h,i),2],p];case
1:return[0,[0,c($(g,f,e,d,b),h,i),0],0];case
2:return[0,[0,c($(g,f,e,d,b),h,i),2],0];case
3:return[0,[0,c($(g,f,e,d,b),i,h),2],0];case
4:return[0,[0,c($(g,f,e,d,b),h,i),3],0];default:return[0,[0,c($(g,f,e,d,b),i,h),3],0]}}function
fs(h,g,f,e,d,c,b,a){var
i=hp(h,g,f,e,d,c,b,a);return bY(function(a){return[0,a,0]},i)}function
hq(g,l,f,k,e,d,b,j){var
m=j[3],n=j[2],o=j[1],h=a(b0(g,l,f,k,e,d,b),o),i=a(b0(g,l,f,k,e,d,b),m);switch(n){case
0:return[0,[0,c($(g,f,e,d,b),h,i),0],0];case
1:var
p=[0,[0,c($(g,f,e,d,b),i,h),2],0];return[0,[0,c($(g,f,e,d,b),h,i),2],p];case
2:return[0,[0,c($(g,f,e,d,b),i,h),3],0];case
3:return[0,[0,c($(g,f,e,d,b),h,i),3],0];case
4:return[0,[0,c($(g,f,e,d,b),i,h),2],0];default:return[0,[0,c($(g,f,e,d,b),h,i),2],0]}}function
ft(h,g,f,e,d,c,b,a){var
i=hq(h,g,f,e,d,c,b,a);return bY(function(a){return[0,a,0]},i)}function
em(f,e){var
d=f,b=e;for(;;)switch(b[0]){case
0:return[0,b[1]];case
1:var
g=b[2],d=c(y[2],b[1],d),b=g;continue;default:var
h=b[3],i=b[2],j=b[1],k=em(a(y[1],d),h);return[2,[4,em(d,j),[6,[1,d],[0,i]]],k]}}function
m$(a){return em(0,a)}function
aA(c,b){switch(b[0]){case
0:return[0,a(c,b[1])];case
1:return[1,b[1]];case
2:var
d=b[1],e=aA(c,b[2]);return[2,aA(c,d),e];case
3:var
f=b[1],g=aA(c,b[2]);return[3,aA(c,f),g];case
4:var
h=b[1],i=aA(c,b[2]);return[4,aA(c,h),i];case
5:return[5,aA(c,b[1])];default:var
j=b[2];return[6,aA(c,b[1]),j]}}function
hr(b,a){var
c=a[2],d=a[1],e=aA(b,a[3]);return[0,aA(b,d),c,e]}function
na(q,h,f,g,b){if(typeof
b!=="number")switch(b[0]){case
1:var
m=b[1];if(0===m[0]){var
n=m[1];return c(g,q,n)?0:[5,c(f,n,n)]}return[1,m];case
3:var
a=b[2],d=b[1];if(typeof
d==="number")return 0;else
switch(d[0]){case
3:var
i=d[2],j=d[1];if(typeof
j!=="number"&&5===j[0]){var
s=j[1];return typeof
a==="number"?0:5===a[0]?[3,[5,c(f,a[1],s)],i]:b}if(typeof
i!=="number"&&5===i[0]){var
r=i[1];return typeof
a==="number"?0:5===a[0]?[3,[5,c(f,a[1],r)],j]:b}return typeof
a==="number"?0:5===a[0]?c(g,h,a[1])?d:[3,d,a]:b;case
5:var
e=d[1];if(typeof
a==="number")return 0;else
switch(a[0]){case
3:var
k=a[2],l=a[1];if(typeof
l!=="number"&&5===l[0])return[3,[5,c(f,e,l[1])],k];if(typeof
k!=="number"&&5===k[0])return[3,[5,c(f,e,k[1])],l];return c(g,h,e)?a:[3,d,a];case
4:return[4,[3,[5,e],a[1]],[3,[5,e],a[2]]];case
5:return[5,c(f,e,a[1])];default:return c(g,h,e)?a:[3,d,a]}default:return typeof
a==="number"?0:5===a[0]?c(g,h,a[1])?d:[3,d,a]:b}case
4:var
o=b[2],p=b[1];return typeof
p==="number"?o:typeof
o==="number"?p:[4,p,o]}return b}function
nb(a){return a[1]}function
nc(a){return a[2]}function
aB(b,a){var
d=c(t[8],a[1],[0,b[2]]);return az(c(t[8],b[1],[0,a[2]]),d)}function
cC(b,a){var
d=c(t[8],a[1],[0,b[2]]),e=c(t[8],b[1],[0,a[2]]);return c(t[10],e,d)}function
aC(b,a){var
d=c(y[11],b[2],a[2]),e=c(t[8],a[1],[0,b[2]]),f=c(t[8],b[1],[0,a[2]]);return[0,c(t[5],f,e),d]}function
a4(b,a){var
d=c(y[11],b[2],a[2]);return[0,c(t[8],b[1],a[1]),d]}function
bF(b){var
c=b[2];return[0,a(t[6],b[1]),c]}function
b1(b,a){return aC(b,bF(a))}function
fu(b){var
a=b[1];return typeof
a==="number"?nd:0===a[0]?[0,[0,b[2]],a[1]]:[0,[1,b[2]],a[1]]}function
fv(a,b){return ec(a4,a,b)}function
ne(b,a){return typeof
a==="number"?nf:0===a[0]?fv(b,a[1]):fu(fv(b,a[1]))}function
ng(e,d,c){var
a=d,b=c;for(;;)if(typeof
a==="number")return e;else{if(0===a[0])return a[1];var
f=a[3],g=a[2],h=a[1];if(typeof
b==="number")return g;else{if(0===b[0]){var
a=f,b=b[1];continue}var
a=h,b=b[1];continue}}}function
b2(b,a,c){return typeof
a==="number"?[0,c]:0===a[0]?[1,0,b,b2(b,a[1],c)]:[1,b2(b,a[1],c),b,0]}function
fw(d,a,b,c){if(typeof
c==="number")return b2(d,a,b);else{if(0===c[0]){var
g=c[1];return typeof
a==="number"?[0,b]:0===a[0]?[1,0,g,b2(d,a[1],b)]:[1,b2(d,a[1],b),g,0]}var
e=c[3],h=c[2],f=c[1];return typeof
a==="number"?[1,f,b,e]:0===a[0]?[1,f,h,fw(d,a[1],b,e)]:[1,fw(d,a[1],b,f),h,e]}}var
nh=t[10],ni=t[8],nj=t[5],nl=0;function
nm(a,b){return el(nl,nk,nj,ni,az,nh,a,b)}var
aa=$(0,t[5],t[7],t[6],az),aD=ho(0,t[5],az),cD=b0(0,nn,t[5],t[8],t[7],t[6],az);function
hs(e){var
f=e[3],g=e[2],b=a(cD,e[1]),d=a(cD,f);switch(g){case
0:var
h=[0,[0,c(aa,d,c(aD,b,no)),3],0];return[0,[0,c(aa,b,c(aD,d,np)),3],h];case
1:return[0,[0,c(aa,b,d),0],0];case
2:return[0,[0,c(aa,b,c(aD,d,nq)),3],0];case
3:return[0,[0,c(aa,d,c(aD,b,nr)),3],0];case
4:return[0,[0,c(aa,b,d),3],0];default:return[0,[0,c(aa,d,b),3],0]}}function
ht(a){var
b=hs(a);return bY(function(a){return[0,a,0]},b)}function
hu(e){var
f=e[3],g=e[2],b=a(cD,e[1]),d=a(cD,f);switch(g){case
0:return[0,[0,c(aa,b,d),0],0];case
1:var
h=[0,[0,c(aa,d,c(aD,b,ns)),3],0];return[0,[0,c(aa,b,c(aD,d,nt)),3],h];case
2:return[0,[0,c(aa,d,b),3],0];case
3:return[0,[0,c(aa,b,d),3],0];case
4:return[0,[0,c(aa,d,c(aD,b,nu)),3],0];default:return[0,[0,c(aa,b,c(aD,d,nv)),3],0]}}function
hv(a){var
b=hu(a);return bY(function(a){return[0,a,0]},b)}var
nw=t[10],nx=0;function
fx(a){return cB(nx,az,nw,a)}var
ny=t[5],nz=0;function
hw(a,b){return cA(nz,ny,az,a,b)}function
hx(e,d){var
a=c(t[17],e,d),b=a[1];return typeof
a[2]==="number"?b:c(t[5],b,nA)}function
fy(b,a){var
d=c(t[19],b,a);return c(t[13],d,nB)}function
cE(d){var
a=d;for(;;)switch(a[0]){case
0:return[0,0,a[1]];case
1:var
a=a[2];continue;default:var
e=a[3],b=cE(a[1]),f=b[2],g=b[1],c=cE(e),h=c[2],i=c[1];return[0,fy(fy(g,f),i),h]}}function
cF(a,b){switch(a[0]){case
0:return[0,c(t[18],a[1],b)];case
1:var
d=a[1];return[1,d,cF(a[2],b)];default:var
e=a[2],f=a[1],g=cF(a[3],b);return[2,cF(f,b),e,g]}}function
en(b){var
e=cE(b),f=e[2],d=e[1];if(c(t[12],d,0)){var
g=hx(a(t[6],f),d),h=a(t[6],g);return[0,cF(bZ(t[7],b,f),d),h]}return[0,b,0]}function
eo(d){var
e=d[2],a=d[1];switch(e){case
0:var
f=cE(a),g=f[2],b=f[1];if(c(t[12],b,0))if(bA(az(g,0)))if(bA(az(c(t[19],b,g),b)))return 0;return[0,[0,en(a),0]];case
1:return[0,[0,[0,a,0],e]];case
2:return[0,[0,en(bZ(t[7],a,nC)),3]];default:return[0,[0,en(a),3]]}}function
hy(a){var
b=a[1],d=a[2];return[0,c(aD,b[1],[0,b[2]]),d]}function
hz(a){return 0===a[0]?typeof
a[1]==="number"?1:0:0}var
nD=t[10],nE=t[8],nF=t[5],nH=0;function
cG(a,b){return bp(nH,nG,nF,nE,az,nD,a,b)}function
fz(a){return 0===a?1:3<=a?1:0}function
fA(w,v){var
d=w,b=v;for(;;)if(typeof
b==="number")return 0;else
switch(b[0]){case
0:var
x=b[2],g=cG(d,b[1]);if(g){var
h=g[1];if(fx(h))return 1;var
d=[0,h,d],b=x;continue}return 0;case
1:var
y=b[2],i=cG(d,b[1]);if(i){var
j=eo(i[1]);if(j){var
d=[0,hy(j[1]),d],b=y;continue}return 1}return 0;default:var
z=b[3],A=b[2],k=cG(d,b[1]);if(k){var
B=k[1],l=cG(d,A);if(l){var
C=l[1],m=eo(B);if(m){var
n=m[1],o=n[1],p=o[1],D=n[2],E=o[2],q=eo(C);if(q){var
r=q[1],s=r[1],F=r[2],G=s[2],H=s[1];if(fz(D))if(fz(F))if(hz(c(aD,p,H))){var
f=z,e=a(t[6],E);for(;;){if(f){var
I=f[2],J=f[1],u=fA([0,[0,c(aa,p,[0,e]),0],d],J);if(u){var
f=I,e=c(t[5],e,nI);continue}return u}return c(t[12],e,G)}}return 0}return 1}return 1}return 0}return 0}}function
nJ(b,a){return ej(fx,hw,ht,hv,fA,b,a)}function
hA(a,b){return el(nL,nK,aC,a4,aB,cC,a,b)}function
hB(a){return fs(nN,nM,aC,a4,b1,bF,aB,a)}function
hC(a){return ft(nP,nO,aC,a4,b1,bF,aB,a)}function
hD(a){return cB(nQ,aB,cC,a)}function
hE(a,b){return cA(nR,aC,aB,a,b)}function
nS(b,a){return ej(hD,hE,hB,hC,hA,b,a)}function
aJ(a){if(typeof
a==="number")return 0===a?nT:nU;else
switch(a[0]){case
0:return a[1];case
1:return[0,a[1],0];case
2:var
b=a[1],c=aJ(a[2]);return aC(aJ(b),c);case
3:var
d=a[1],e=aJ(a[2]);return b1(aJ(d),e);case
4:var
f=a[1],g=aJ(a[2]);return a4(aJ(f),g);case
5:return fu(aJ(a[1]));default:return bF(aJ(a[1]))}}function
hF(a,b){return el(nW,nV,aC,a4,aB,cC,a,b)}function
hG(a){return fs(nY,nX,aC,a4,b1,bF,aB,a)}function
hH(a){return ft(n0,nZ,aC,a4,b1,bF,aB,a)}function
hI(a){return cB(n1,aB,cC,a)}function
hJ(a,b){return cA(n2,aC,aB,a,b)}var
s=[0,bA,eb,g4,ff,mv,y,mD,ec,g9,bY,fj,t,az,m1,m2,fm,W,hc,K,hd,he,ac,bo,bZ,ct,cu,fn,fo,X,ad,cv,cw,a2,_,cx,hf,cy,hg,al,a3,ef,eg,eh,hh,hi,cz,ei,am,hj,ej,fp,fq,hk,hl,ek,fr,hm,hn,cA,bp,cB,el,b0,$,ho,hp,fs,hq,ft,em,m$,aA,hr,na,nb,nc,aB,cC,aC,a4,bF,b1,fu,fv,ne,ng,b2,fw,nm,aa,aD,cD,hs,ht,hu,hv,fx,hw,hx,fy,cE,cF,en,eo,hy,hz,cG,fz,fA,nJ,hA,hB,hC,hD,hE,nS,aJ,hF,hG,hH,hI,hJ,function(b,a){return ej(hI,hJ,hG,hH,hF,a3(function(a){return hr(aJ,a)},b),a)}];aX(738,s,"Micromega_plugin.Micromega");var
fB=g[2],bG=g[7],n4=g[3],Q=a(bH[1],[0,Z]),n3=0;function
n5(a,b){function
d(c,b){return 1===b?e(n[1],a,n6,c):F(n[1],a,n7,c,b)}return c(Q[11],d,b)}var
fC=Q[1];function
hK(a){var
b=0;function
c(c,b,a){return a+b|0}return e(Q[12],c,a,b)}function
n8(b,a){var
c=hK(b),d=hK(a);return c===d?e(Q[9],Z,b,a):Z(c,d)}function
hL(a){return T(a,Q[1])}function
n9(a){return e(Q[4],a,1,Q[1])}function
n_(a){try{var
b=1,c=function(c,b,a){if(1===a){if(1===b)return 0;throw M}throw M},d=1-e(Q[12],c,a,b);return d}catch(a){a=v(a);if(a===M)return 0;throw a}}function
n$(a){if(hL(a))return 0;try{var
b=function(c,b,f){var
d=b/2|0;if(0===(b%2|0))return e(Q[4],c,d,a);throw M},c=[0,e(Q[12],b,a,fC)];return c}catch(a){a=v(a);if(a===M)return 0;throw a}}function
cH(b,a){try{var
d=c(Q[23],b,a);return d}catch(a){a=v(a);if(a===M)return 0;throw a}}function
oa(b,a){var
c=cH(b,a)+1|0;return e(Q[4],b,c,a)}function
hM(b,a){function
c(b,c,a){var
d=cH(b,a)+c|0;return e(Q[4],b,d,a)}return e(Q[12],c,b,a)}function
ob(d,c){var
b=fC,a=c;for(;;){if(0===a)return b;var
b=hM(b,d),a=a-1|0;continue}}function
oc(b,a){var
f=i[7];function
g(e,d,a){var
f=H.caml_div(cH(e,b),d);return c(i[4],a,f)}var
d=e(Q[12],g,a,f),h=Q[1];function
j(c,g,b){var
f=g-eZ(cH(c,a),d)|0;return 0===f?b:e(Q[4],c,f,b)}return[0,e(Q[12],j,b,h),d]}var
I=[0,fC,hL,n9,n_,cH,oa,hM,ob,oc,n8,n5,Q[12],n$],R=a(bH[1],[0,I[10]]);function
od(b,d){function
f(f,d){if(0===c(I[10],I[1],f)){var
h=a(g[40],d);return e(n[1],b,oe,h)}var
i=I[11],j=a(g[40],d);return aW(n[1],b,of,j,i,f)}return c(R[11],f,d)}function
hN(b,a){try{var
d=c(R[23],b,a);return d}catch(a){a=v(a);if(a===M)return og;throw a}}function
oh(b){var
c=R[1],d=a(I[3],b);return e(R[4],d,oi,c)}function
hO(a){return e(R[4],I[1],a,R[1])}function
hP(d,f,b){if(0===a(g[25],f))return b;var
h=c(fB,hN(d,b),f);return 0===a(g[25],h)?c(R[6],d,b):e(R[4],d,h,b)}function
hQ(f,b,d){if(0===a(g[25],b))return hO(oj);var
h=R[1];function
i(g,d,a){var
h=c(bG,b,d),i=c(I[7],f,g);return e(R[4],i,h,a)}return e(R[12],i,d,h)}function
hR(b,a){function
c(c,b,a){return hP(c,b,a)}return e(R[12],c,b,a)}function
ok(b,a){var
c=R[1];function
d(d,c,b){return hR(hQ(d,c,a),b)}return e(R[12],d,b,c)}function
ol(b){function
d(b){return a(g[3],b)}return c(R[24],d,b)}var
hS=R[12];function
om(b){var
c=1;return e(hS,function(e,c,b){var
d=b?0===a(g[25],c)?1:0:b;return d},b,c)}var
on=a(R[9],g[37]),hT=[0,hN,oh,hP,hO,hQ,ok,hR,ol,hS,od,on,om,function(b){var
c=1;function
d(c,f,b){if(b){var
d=a(I[2],c);if(!d)return a(I[4],c);var
e=d}else
var
e=b;return e}return e(R[12],d,b,c)}];function
oo(k,j){var
b=k,a=j;for(;;){if(b){var
d=b[1],l=b[2],m=d[2],n=d[1];if(a){var
e=a[1],f=n===e[1]?1:0,o=a[2],p=e[2];if(f){var
h=c(g[26],m,p);if(h){var
b=l,a=o;continue}var
i=h}else
var
i=f;return i}return 0}return a?0:1}}function
op(e){var
c=0,b=e;for(;;){if(b){var
d=b[1],f=b[2],h=d[1],i=[0,h,a(g[52],d[2])],c=c+a(bm[20],i)|0,b=f;continue}return a(bm[20],c)}}var
oq=0;function
or(f,b){function
d(b){var
c=b[1],d=a(g[40],b[2]);return e(n[2],os,d,c)}return c(h[11],d,b)}function
ot(a){function
d(i,h){var
b=i,a=h;for(;;){if(a){var
e=a[2],f=a[1];if(c(g[31],f,ou))return[0,[0,b,f],d(b+1|0,e)];var
b=b+1|0,a=e;continue}return 0}}return d(0,a)}function
ow(a){function
b(c,a){if(a){var
d=a[1],e=a[2],f=d[2];return c===d[1]?[0,f,b(c+1|0,e)]:[0,ep,b(c+1|0,a)]}return 0}return b(0,a)}function
bI(d,b,a){return c(g[26],b,ox)?a:[0,[0,d,b],a]}function
hU(d,c,b){if(b){var
f=b[2],g=b[1],h=g[2],e=g[1],j=Z(d,e)+1|0;if(2<j>>>0)return a(i[2],oy);switch(j){case
0:return bI(d,a(c,ep),b);case
1:return bI(e,a(c,h),f);default:return[0,[0,e,h],hU(d,c,f)]}}return bI(d,a(c,ep),0)}function
hV(d,c,b){if(b){var
f=b[2],g=b[1],e=g[1],h=Z(d,e)+1|0,j=g[2];if(2<h>>>0)return a(i[2],oz);switch(h){case
0:return bI(d,c,b);case
1:return bI(e,c,f);default:return[0,[0,e,j],hV(d,c,f)]}}return bI(d,c,0)}function
oA(d){var
f=q[1];function
g(d,b){var
e=a(m[18],b[2]);return c(q[17],d,e)}var
b=e(h[16],g,f,d);return 0===c(q[23],b,q[1])?q[2]:b}function
oB(a,b){if(0===a[0]){var
d=a[1];if(0===d)return 0;if(1===d)return b}function
e(b){var
d=b[1];return[0,d,c(g[7],a,b[2])]}return c(h[13],e,b)}function
eq(o,n){var
b=o,a=n;for(;;){if(b){if(a){var
e=a[2],i=a[1],j=i[2],f=i[1],h=b[2],k=b[1],l=k[2],d=k[1];if(T(d,f)){var
m=c(g[1],l,j);if(c(g[26],m,oC)){var
b=h,a=e;continue}return[0,[0,d,m],eq(h,e)]}return gC(d,f)?[0,[0,d,l],eq(h,a)]:[0,[0,f,j],eq(b,e)]}return b}return a?a:0}}function
oD(d,b){var
e=0,f=[0,function(a){return c(g[37],d[2],b[2])},e],h=[0,function(a){return Z(d[1],b[1])},f];return a(m[31][1],h)}var
oE=a(m[31][2],oD);function
hW(e,d){var
a=d;for(;;){if(a){var
b=a[1],c=Z(b[1],e),f=a[2],g=b[2];if(-1===c){var
a=f;continue}return 0===c?[0,[0,g,a]]:0}return 0}}function
oF(c,b){var
a=hW(c,b);return a?[0,a[1][1]]:0}var
bJ=[0,oo,op,oq,or,ot,ep,ov,ow,bI,hU,hV,oA,oB,eq,oE,hW,oF,function(c){var
a=c;for(;;){if(a){var
b=a[2],d=a[1][1];if(b){var
a=b;continue}return d+1|0}return 1}}];function
fD(a){return 0===a?oG:oH}function
oI(c,b){var
d=b[2],e=b[1],f=a(g[40],b[3]),h=fD(d);return B(n[1],c,oJ,bJ[4],e,h,f)}function
oK(b,a){if(0===b){if(0===a)return 0}else
if(0!==a)return 1;return 1}function
oL(b,a){if(0!==b)if(0!==a)return 1;return 0}function
aE(d,b){if(typeof
b==="number")return c(n[1],d,oM);else
switch(b[0]){case
0:return e(n[1],d,oN,b[1]);case
1:return e(n[1],d,oO,b[1]);case
2:var
f=a(q[33],b[1]);return e(n[1],d,oP,f);case
3:return c(n[1],d,oQ);case
4:return F(n[1],d,oR,aE,b[2]);case
5:var
g=b[2],h=a(q[33],b[1]);return aW(n[1],d,oS,aE,g,h);case
6:return B(n[1],d,oT,aE,b[1],aE,b[2]);case
7:return B(n[1],d,oU,aE,b[1],aE,b[2]);default:return F(n[1],d,oV,aE,b[1])}}function
cI(d,b){if(typeof
b==="number")return c(n[1],d,oW);else{if(0===b[0])return d1(n[1],d,oX,b[1],aE,b[2],cI,b[3]);var
e=b[5],f=b[4],g=b[3],h=b[2],i=b[1],j=a(m[2],cI);return A_(n[1],d,oY,i,aE,h,bJ[4],g,aE,f,j,e)}}function
b3(e){var
a=e;for(;;){if(typeof
a==="number")var
b=0;else
switch(a[0]){case
8:var
d=a[1],b=1;break;case
0:case
1:return a[1];case
4:case
5:var
d=a[2],b=1;break;case
6:case
7:var
f=a[1],g=b3(a[2]),h=b3(f);return c(i[5],h,g);default:var
b=0}if(b){var
a=d;continue}return-1}}function
fE(a){if(typeof
a==="number")return-1;else{if(0===a[0]){var
b=a[2],d=a[1],f=fE(a[3]),g=b3(b),j=c(i[5],g,f);return c(i[5],d,j)}var
k=a[5],l=a[2],m=a[1],n=b3(a[4]),o=b3(l),p=c(i[5],o,n),q=c(i[5],m,p),r=function(b,a){var
d=fE(a);return c(i[5],b,d)};return e(h[16],r,q,k)}}function
a5(b,a){if(typeof
a!=="number")switch(a[0]){case
4:var
n=a[1],d=a5(b,a[2]);return[0,d[1],d[2],[4,n,d[3]]];case
5:var
e=a5(b,a[2]),f=e[2];return[0,[0,[0,f,e[3]],e[1]],f+1|0,[1,f]];case
6:var
o=a[2],g=a5(b,a[1]),p=g[3],q=g[1],h=a5(g[2],o),r=h[2],s=[6,p,h[3]];return[0,c(i[22],h[1],q),r,s];case
7:var
t=a[2],j=a5(b,a[1]),u=j[3],v=j[1],k=a5(j[2],t),w=k[2],x=[7,u,k[3]];return[0,c(i[22],k[1],v),w,x];case
8:var
l=a5(b,a[1]),m=l[2];return[0,[0,[0,m,l[3]],l[1]],m+1|0,[1,m]]}return[0,0,b,a]}function
er(c,a){if(typeof
a!=="number"&&8===a[0]){var
b=a5(c,a[1]);return[0,b[1],b[2],[8,b[3]]]}return a5(c,a)}function
fF(b){var
a=b;for(;;){if(typeof
a!=="number"&&8===a[0]){var
a=a[1];continue}return a}}function
fG(f,o){var
b=o;for(;;)if(typeof
b==="number")return[0,f,0];else{if(0===b[0]){var
d=b[2],l=b[1];if(typeof
d!=="number"&&5===d[0])if(typeof
b[3]==="number"){var
b=[0,l,d[2],0];continue}var
p=b[3],g=er(f,d),q=g[3],r=g[1],m=fG(g[2],p),s=m[1],t=[0,l,q,m[2]],u=function(b,a){return[0,a[1],[8,a[2]],b]};return[0,s,e(h[16],u,t,r)]}var
v=b[5],w=b[4],x=b[3],y=b[1],j=er(f,fF(b[2])),z=j[3],A=j[2],B=j[1],k=er(A,fF(w)),C=k[3],D=k[2],E=k[1],F=function(a){return fG(D,a)},G=c(h[13],F,v),n=a(h[39],G),H=n[2],I=n[1],J=c(i[22],E,B),K=[1,y,z,x,C,H],L=function(b,a){return[0,a[1],[8,a[2]],b]},M=e(h[16],L,K,J);return[0,e(h[16],i[5],0,I),M]}}function
oZ(c,a){var
b=fG(c,a);if(m[1])aW(n[2],o0,cI,a,cI,b[2]);return b}function
hX(b,a){if(typeof
b==="number")var
c=a;else{if(typeof
a!=="number")return[7,b,a];var
c=b}return c}function
fH(b,d){var
e=a(q[22],b)+1|0;if(2<e>>>0)throw[0,C,o1];switch(e){case
0:return[4,[0,0,[1,b]],d];case
1:return 0;default:return c(q[24],b,q[2])?d:[6,[2,b],d]}}function
hY(c,b){var
d=c[2],e=c[1];return e?[4,[0,e,d],b]:fH(a(m[18],d),b)}var
cJ=a(bH[1],[0,I[10]]),cK=a(bH[1],[0,Z]),cL=[0,cJ[1]],cM=[0,cK[1]],es=[0,0];function
o2(a){cL[1]=cJ[1];cM[1]=cK[1];es[1]=0;return 0}function
o3(b){try{var
a=c(cJ[23],b,cL[1]);return a}catch(a){a=v(a);if(a===M){var
d=es[1];cL[1]=e(cJ[4],b,d,cL[1]);cM[1]=e(cK[4],d,b,cM[1]);es[1]++;return d}throw a}}var
aK=[0,cJ,cK,cL,cM,es,o2,o3,function(a){return c(cK[23],a,cM[1])}];function
fI(a){var
b=a[2],d=a[1];function
e(b,a){return Z(b[1],a[1])}return[0,c(h[41],e,d),b]}function
et(c,b){var
d=b[2],e=a(aK[8],b[1]),f=I[11],h=a(g[40],d);return aW(n[1],c,o4,h,f,e)}function
eu(c,b){var
d=b[2],e=b[1],f=a(g[40],b[3]),h=fD(d),i=a(m[2],et);return B(n[1],c,o5,i,e,h,f)}function
o6(c){function
d(d,c,b){var
e=b[1],f=b[2];return a(I[2],d)?[0,e,c]:[0,[0,[0,a(aK[7],d),c],e],f]}var
b=e(hT[9],d,c,o7);return fI([0,b[1],b[2]])}function
hZ(b,d,l){var
e=l[2],j=l[1];if(a(I[2],d))var
q=c(bG,b,e),f=[0,c(bJ[13],b,j),q];else
if(0===a(g[25],b))var
f=o8;else{if(0===a(g[25],e))var
k=0;else
var
t=c(bG,b,e),k=[0,[0,a(aK[7],d),t],0];var
r=function(e){var
f=e[2],g=a(aK[8],e[1]),h=c(I[7],d,g),i=a(aK[7],h);return[0,i,c(bG,b,f)]},s=c(h[13],r,j),f=fI([0,c(i[22],k,s),o9])}var
o=f[2],p=f[1];if(m[1]){var
u=a(g[40],o),v=a(m[2],et),w=a(g[40],e),x=a(m[2],et),y=I[11],z=a(g[40],b);A$(n[2],o_,z,y,d,x,j,w,v,p,u)}return[0,p,o]}function
h0(c,b){return a(I[2],b)?[0,0,c]:[0,[0,[0,a(aK[7],b),c],0],o$]}function
h1(w,v,d,u){var
f=u[1],j=w[1],F=u[2],G=w[2];if(m[1]){var
H=a(g[40],d),J=a(aK[8],v);bQ(n[2],pa,eu,j,I[11],J,H,eu,f)}var
K=f[2],x=a(aK[8],v);function
C(b,a){var
d=a[2],e=b[2],f=a[1],g=b[1];return gC(e,d)?-1:T(e,d)?c(I[10],g,f):1}var
p=[0,I[1],i[7]],o=[0,f,F];for(;;){var
q=o[2],b=o[1],_=p[2],$=p[1],V=b[1],W=[0,pc,I[1],0],X=function(b,d){var
e=b[3],f=b[2],j=d[2],k=b[1],l=a(aK[8],d[1]),g=c(I[9],l,x),h=g[2],i=g[1];return-1===C([0,f,e],[0,i,h])?[0,j,i,h]:[0,k,f,e]},l=e(h[16],X,W,V),D=l[3],Y=l[2],Z=l[1],E=0<D?[0,[0,Z,Y,D]]:0;if(E){var
r=E[1],s=r[3],t=r[2],aa=r[1];if(-1===C([0,t,s],[0,$,_])){var
k=a(g[15],d),y=c(bG,[0,-a(g[25],d)|0],aa),L=c(I[8],x,s-1|0),z=c(I[7],t,L),M=a(g[3],j[3]),A=hZ(y,z,[0,j[1],M]),N=A[2],O=A[1],P=c(bG,k,b[3]),Q=c(fB,a(g[3],N),P),R=c(bJ[13],k,b[1]),B=[0,c(bJ[14],R,O),K,Q],S=fH(a(m[18],k),q),U=hX(hY(h0(y,z),G),S);if(m[1])e(n[2],pb,eu,B);var
p=[0,t,s],o=[0,B,U];continue}return[0,b,q]}return[0,b,q]}}var
p=[0,n3,fB,n4,bG,I,hT,bJ,fD,oI,oK,oL,aE,cI,b3,fE,er,fF,oZ,hX,fH,hY,[0,aK,fI,et,eu,o6,hZ,h0,h1,function(b,a){var
d=a[1],f=a[2],e=c(bJ[17],b,d[1]);if(e){var
g=e[1];return function(a){return[0,h1([0,d,f],b,g,a)]}}return function(a){return 0}}]];aX(742,p,"Micromega_plugin.Polynomial");var
ap=m[4],ev=m[5],pd=0,pe=0,pf=j2;function
h2(a){var
b=a[1];if(b){var
d=a[2];if(d)return c(g[29],b[1],d[1])?[0,a]:0}return[0,a]}function
pg(a){var
b=a[2],d=c(ap,g[3],a[1]);return[0,c(ap,g[3],b),d]}function
ph(b,a){var
e=a[2],f=a[1],h=b[2],i=b[1];function
d(d,b,a){if(b){var
e=b[1];return a?[0,c(d,e,a[1])]:b}return a?a:0}var
j=d(g[39],h,e);return h2([0,d(g[38],i,f),j])}function
fJ(b){var
d=b[1];if(d){var
e=b[2];if(e){var
f=e[1],h=a(g[24],d[1]),i=a(g[22],f),j=c(g[4],i,h);return[0,c(g[1],j,pi)]}}return 0}function
pj(e,d){var
a=fJ(e),b=fJ(d);return a?b?c(g[29],a[1],b[1]):1:0}var
b4=[0,h2,pg,ph,fJ,pj,function(d,a){var
b=d[2],e=d[1];if(e){var
f=e[1];if(b){var
i=b[1],h=c(g[29],f,a);return h?c(g[29],a,i):h}return c(g[29],f,a)}return b?c(g[29],a,b[1]):1}],aL=a(d_[1],[0,Z]),h3=p[7],ab=a(bm[18],[0,h3[1],h3[2]]),h4=[0,i[7]],b5=[aZ,pl,aY(0)],pk=0;function
pm(a){function
d(h,g){var
a=h,b=g;for(;;){switch(a[0]){case
0:return c(aL[4],a[1],b);case
1:var
f=a[3],e=a[2];break;default:var
f=a[2],e=a[1]}var
a=e,b=d(f,b);continue}}return d(a,aL[1])}function
cN(b,a){switch(a[0]){case
0:return e(n[1],b,pn,a[1]);case
1:return d1(n[1],b,po,a[1],cN,a[2],cN,a[3]);default:return B(n[1],b,pp,cN,a[1],cN,a[2])}}function
fK(d,b){if(b){var
e=a(g[40],b[1]);return c(i[49],d,e)}return c(i[49],d,pq)}function
h5(b,a){return B(n[1],b,pr,fK,a[1],fK,a[2])}function
ps(a,b){c(i[49],a,pt);var
d=0;function
f(b,c){return e(n[1],a,pu,b)}e(aL[15],f,b,d);return c(i[49],a,pv)}function
pw(a,b){c(i[49],a,px);var
d=0;function
f(b,c){return e(n[1],a,py,b)}e(aL[15],f,b,d);return c(i[49],a,pz)}function
pA(b,a){return h5(b,a[1])}function
h6(b,d){var
f=d[2],h=f[2],j=f[1],k=d[1];if(j){var
l=a(g[40],j[1]);e(n[1],b,pB,l)}c(p[7][4],b,k);if(h){var
m=a(g[40],h[1]);return e(n[1],b,pC,m)}return c(i[49],b,pD)}function
pE(b,a){function
d(c,a){return h6(b,[0,c,a[1][1]])}return c(ab[11],d,a)}function
pF(c,b){var
d=b[2],e=b[1],f=a(g[40],b[3]),h=p[7][4],i=a(g[40],e);return B(n[1],c,pG,i,h,d,f)}function
h7(b,a){var
d=b[4],e=b[3],g=a[4],h=a[2],i=a[1],j=b[2],k=b[1];if(e===a[3])if(d===g){var
f=c(b4[3],k,i);return f?[0,[0,f[1],[2,j,h],e,d]]:0}throw[0,C,pH]}function
pI(f,b,d){try{var
a=c(ab[7],d,f),g=h7(b,a[1]);if(g){a[1]=g[1];var
h=0;return h}throw[0,b5,[2,b[2],a[1][2]]]}catch(a){a=v(a);if(a===M)return e(ab[9],d,f,[0,b]);throw a}}var
h8=[aZ,pJ,aY(0)];function
ew(d,c,b){var
e=h4[1];if(a(ab[14],b)<e)return pI(d,c,b);throw h8}function
ex(d,b){var
k=a(b4[1],b[1]);if(k){var
l=k[1],i=l[2],j=l[1];if(d){var
e=d[1][2],f=function(a){return c(g[9],a,e)};if(1===a(g[25],e))var
o=b[4],p=b[3],q=b[2],r=c(ap,f,i),m=[0,[0,c(ap,f,j),r],q,p,o];else
var
t=b[3],u=b[4],v=b[2],w=c(ap,f,j),m=[0,[0,c(ap,f,i),w],v,u,t];if(c(g[31],e,pK))var
s=function(a){var
b=a[1];return[0,b,c(g[9],a[2],e)]},n=c(h[13],s,d);else
var
n=d;return[0,n,m]}return c(b4[6],[0,j,i],pL)?1:0}return 0}function
pM(a){return 0===a?g[26]:g[30]}function
fL(h){var
d=0,c=0,b=h;for(;;){if(b){var
e=b[2],f=a(g[25],b[1][2]);if(0===f)throw[0,C,pN];if(1===f){var
c=c+1|0,b=e;continue}var
d=d+1|0,b=e;continue}return[0,d,c]}}function
fM(a,e){var
b=a[3],c=a[1],f=a[2],d=fL(c),g=d[2],h=d[1],i=[0,e],j=0===f?[0,[0,b],[0,b]]:[0,[0,b],0];return ex(c,[0,j,i,g,h])}function
h9(d){var
b=a(ab[1],1e3);function
f(b,a){return[0,b,a]}var
g=c(m[23],f,d),i=aL[1];function
j(f,d){var
g=d[2],i=d[1],a=fM(i,g);if(typeof
a==="number"){if(0===a)throw[0,b5,[0,g]];return f}ew(a[1],a[2],b);var
j=i[1];function
k(b,a){return c(aL[4],a[1],b)}return e(h[16],k,f,j)}return[0,b,e(h[16],j,i,g)]}function
fN(a){var
b=a[1],c=0;function
d(c,b,a){return[0,[0,c,b[1]],a]}return e(ab[13],d,b,c)}function
ey(e,b){var
f=b[2],i=e[2],j=b[1],k=e[1];if(c(g[31],i,pO))if(c(g[31],f,pP)){var
d=function(s,r){var
b=s,a=r;for(;;){if(b){if(a){var
j=a[2],m=a[1],n=m[2],k=m[1],l=b[2],o=b[1],p=o[2],e=o[1];if(e===k){var
t=c(g[9],n,f),u=c(g[9],p,i),q=c(g[1],u,t);if(c(g[26],q,pQ)){var
b=l,a=j;continue}return[0,[0,e,q],d(l,j)]}if(e<k){var
v=d(l,a);return[0,[0,e,c(g[9],p,i)],v]}var
w=d(b,j);return[0,[0,k,c(g[9],n,f)],w]}var
x=function(a){var
b=a[1];return[0,b,c(g[9],a[2],i)]};return c(h[13],x,b)}if(a){var
y=function(a){var
b=a[1];return[0,b,c(g[9],a[2],f)]};return c(h[13],y,a)}return 0}},a=d(k,j);return[0,a,fL(a)]}throw[0,C,pR]}function
h_(q,f,b,e){var
h=e[3],i=e[2],j=e[1],k=c(p[7][17],q,f);if(k){var
l=k[1],d=function(c,a){return a?[0,[0,l,f,[0,[0,[0,a[1]],0],b[2],b[3],b[4]]],c]:c},m=b[1],n=m[2],o=m[1];if(1===a(g[25],l)){var
r=d(h,n);return[0,d(j,o),i,r]}var
s=d(h,o);return[0,d(j,n),i,s]}return[0,j,[0,[0,f,b],i],h]}function
h$(d,b){var
j=b[1];function
k(c,b,a){return h_(d,c,b[1],a)}var
f=e(ab[13],k,j,pS),l=f[3],m=f[2],n=f[1],o=a(ab[14],b[1]),i=a(ab[1],o);function
p(a){return e(ab[9],i,a[1],[0,a[2]])}c(h[11],p,m);function
q(e){function
b(f){var
h=f[3],j=f[1],k=e[3],l=e[1],p=f[2],q=e[2],r=h[1],s=a(ev,k[1][1]),t=a(ev,r[1]),u=a(g[3],j),v=c(g[9],t,u),w=c(g[9],s,l),x=c(g[1],w,v),m=ey([0,q,l],[0,p,a(g[3],j)]),n=m[2],o=[0,[0,[0,x],0],[1,d,k[2],h[2]],n[2],n[1]],b=ex(m[1],o);if(typeof
b==="number"){if(0===b)throw[0,b5,o[2]];return 0}return ew(b[1],b[2],i)}return c(h[11],b,l)}c(h[11],q,n);return[0,i,c(aL[6],d,b[2])]}function
ia(h,f,t,s,r,e){var
b=e[2],d=e[1],i=c(p[7][17],h,d);if(i){var
j=i[1],k=c(g[30],j,pT)?a(g[3],f):f,l=a(g[15],j),m=ey([0,t,k],[0,d,l]),n=m[2],u=n[2],v=n[1],w=m[1],x=c(g[9],s,k),o=function(a){var
b=c(g[9],a,l);return c(g[1],x,b)},q=b[1],y=q[1],z=c(ap,o,q[2]),A=[0,c(ap,o,y),z];return[0,w,[0,A,[1,h,r,b[2]],u,v]]}return[0,d,b]}function
ib(d,e,h,g,b){var
i=a(ev,c(p[7][17],d,e)),j=a(ab[14],b[1]),f=a(ab[1],j),k=b[1];function
l(k,j){var
c=ia(d,i,e,h,g,[0,k,j[1]]),b=c[2],a=ex(c[1],b);if(typeof
a==="number"){if(0===a)throw[0,b5,b[2]];return 0}return ew(a[1],a[2],f)}c(ab[11],l,k);return[0,f,c(aL[6],d,b[2])]}function
pU(a){var
b=0;function
c(c,a,b){return(b+a[1][4]|0)+a[1][3]|0}return e(ab[13],c,a,b)}var
bK=a(bH[1],[0,Z]);function
pV(c,b){var
d=0;function
f(d,b,f){var
e=a(g[40],b);return F(n[1],c,pW,d,e)}return e(bK[12],f,b,d)}function
ic(k,a){function
d(m,e,l){var
b=m,a=l;for(;;){if(b){var
f=b[2],h=b[1],i=h[2],j=h[1];try{var
n=c(bK[23],j,k),o=c(g[6],n,i),p=d(f,c(g[1],e,o),a);return p}catch(c){c=v(c);if(c===M){var
b=f,a=[0,[0,j,i],a];continue}throw c}}return[0,e,a]}}return d(a,pX,0)}function
id(f,e,d){function
b(a){var
b=c(g[4],a,e);return c(g[9],b,f)}var
h=d[2],j=d[1],k=a(g[25],f);if(0===k)return c(b4[6],d,e)?pY:a(i[2],pZ);if(1===k){var
l=c(ap,b,h);return[0,c(ap,b,j),l]}var
m=c(ap,b,j);return[0,c(ap,b,h),m]}function
fO(g,f,b){function
d(k,j,h){var
b=ic(g,k),l=b[1],d=c(p[7][17],f,b[2]),m=d?d[1]:p2,n=id(m,l,j[1][1]),e=c(b4[3],h,n);return e?e[1]:a(i[2],p1)}return e(ab[13],d,b,p0)}function
ie(d){var
e=d[1];if(e){var
f=d[2],b=e[1];if(f){var
h=f[1];if(c(g[29],b,p3))if(c(g[29],p4,h))return p5;var
k=a(g[22],h),l=a(g[24],b);return c(g[29],l,k)?a(g[24],b):b}return c(g[29],b,p6)?p7:a(g[24],b)}var
i=d[2];if(i){var
j=i[1],m=a(g[22],j);return c(g[29],p8,m)?p9:a(g[22],j)}return p_}function
ig(g,l,k,d,b){function
e(b,f){var
m=a(l,b);try{var
q=function(a){return a[1][1]!==g?1:0},d=c(h[29],q,m)[1],j=d[1],r=e(ib(j,d[2],d[3],d[4],b),[0,[0,j,b],f]);return r}catch(d){d=v(d);if(d===M){var
n=a(k,b);try{var
o=function(a){return a[1]!==g?1:0},i=c(h[29],o,n)[1],p=e(h$(i,b),[0,[0,i,b],f]);return p}catch(a){a=v(a);if(a===M)return[0,[0,b,f]];throw a}}throw d}}return e(d,b)}function
fP(d,c,b,a){try{var
e=ig(d,c,b,h9(a),0);return e}catch(a){a=v(a);if(a[1]===b5)return[1,a[2]];throw a}}function
ih(w,v){var
d=v,c=0,i=0,j=0,f=0;for(;;){if(d){var
k=d[2],n=d[1],b=n[2],l=n[1];if(l){var
o=l[2],p=l[1],x=p[2];if(w===p[1]){var
m=function(b){return function(a,c){return c?[0,b[4]+b[3]|0,a]:a}}(b),q=b[1],r=q[2],s=q[1];if(1===a(g[25],x)){var
y=m(f,r),d=k,c=[0,[0,o,b],c],i=m(i,s),f=y;continue}var
z=m(f,s),d=k,c=[0,[0,o,b],c],i=m(i,r),f=z;continue}var
d=k,c=[0,[0,l,b],c],j=(b[4]+b[3]|0)+j|0;continue}var
d=k,c=[0,[0,0,b],c],j=(b[4]+b[3]|0)+j|0;continue}var
t=a(h[1],i),A=0,B=function(b,a){return b+a|0},C=e(h[16],B,A,i),u=a(h[1],f),D=0,E=function(b,a){return b+a|0};return[0,c,j+u*C+t*e(h[16],E,D,f)-u*t]}}var
fQ=[0,ih,function(a){var
b=a[2],d=[0,0,fN(a)];function
f(b,a){var
d=a[1],c=ih(b,a[2]);return[0,[0,[0,b,c[2]],d],c[1]]}var
g=e(aL[15],f,b,d)[1];function
i(b,a){return j2(b[2],a[2])}return c(h[41],i,g)}];function
fR(a){var
b=a[1];if(b){var
d=a[2];if(d)return c(g[26],b[1],d[1])}return 0}function
p$(a,h){var
b=a[1];if(b){var
d=a[2];if(d){var
e=d[1],f=c(g[26],b[1],e);return f?c(g[26],h,e):f}}return 0}function
fS(b,e){var
a=e;for(;;){if(a){var
c=a[2],d=a[1][1];if(d===b)return[0,1,c];if(d<b){var
a=c;continue}return[0,0,a]}return qa}}function
ii(d){var
a=d;for(;;){if(a){var
b=a[1],c=b[1],e=a[2],f=b[4],g=b[3],h=b[2];if(c)if(!c[2])return[0,[0,c[1][1],c,h,g,f]];var
a=e;continue}return 0}}function
ij(f,k){var
j=ii(f);if(j)return[0,j[1]];var
b=f;a:for(;;){if(b){var
c=b[1],i=c[1],a=i,o=b[2],p=c[4],q=c[3],r=c[2];for(;;){if(a){var
g=a[1][1],n=a[2],l=0,m=function(d){return function(a,b){var
c=b[2];return fS(d,b[1])[1]?fR(c[1])?a+1|0:a:a}}(g);if(2!==e(h[16],m,l,k)){var
a=n;continue}var
d=[0,g]}else
var
d=0;if(d)return[0,[0,d[1],i,r,q,p]];var
b=o;continue a}}return 0}}var
fT=[0,fR,p$,fS,ii,ij,function(f){var
i=fN(f),j=0;function
k(b,d){var
a=d[2],e=a[1],f=e[1],j=d[1];if(f){var
h=e[2];if(h){var
i=f[1];return c(g[26],i,h[1])?[0,[0,j,i,a[2],a[4]+a[3]|0],b]:b}}return b}var
b=e(h[16],k,j,i),d=ij(b,i);if(d){var
a=d[1];return[0,[0,[0,a[1],a[2],a[3],a[4]],0],0]}var
l=0;function
m(s,f){var
p=f[1],e=p,n=i,k=s,t=f[4],u=f[3],v=f[2];a:for(;;){if(e){var
o=e[1][1],c=n,b=0,a=0,q=e[2],r=t-1|0;for(;;){if(c){var
g=c[2],l=c[1],d=l[2],h=d[3]+d[4]|0,m=fS(o,l[1]),j=m[2];if(0===m[1]){var
c=g,b=b+h|0,a=[0,[0,j,d],a];continue}if(fR(d[1])){var
c=g,b=b+h|0,a=[0,[0,j,d],a];continue}var
c=g,b=(b+h|0)+r|0,a=[0,[0,j,d],a];continue}var
e=q,n=a,k=[0,[0,[0,o,p,v,u],b],k];continue a}}return k}}var
n=e(h[16],m,l,b);function
o(b,a){return Z(b[2],a[2])}return c(h[41],o,n)}];function
qb(g,d){var
j=0;function
k(d,b){var
e=a(p[7][18],b[1]);return c(i[5],d,e)}var
b=e(h[16],k,j,d),l=[0,[0,e(p[7][11],b,qd,g),0,qc],d],f=fP(b,fT[6],fQ[2],l);if(0===f[0]){var
m=f[1][1];try{var
q=[0,fO(bK[1],b,m[1])];return q}catch(b){b=v(b);if(a(bq[20],b)){var
o=a(d$[1],b);c(n[2],qe,o);return 0}throw b}}return 0}var
qf=[0,qb,function(j){var
d=fP(i[7],fT[6],fQ[2],j);if(0===d[0]){var
c=d[1][2],b=bK[1];for(;;){if(c){var
f=c[1],g=f[1],k=c[2],l=ie(fO(b,g,f[2][1])),c=k,b=e(bK[4],g,l,b);continue}var
m=0,n=function(c,b,a){return[0,[0,c,b],a]},o=e(bK[12],n,b,m);return[0,a(h[6],o)]}}return[1,d[1]]}];function
br(b,a){return ey(b,a)[1]}function
ik(d,b,a){var
f=0;function
g(b,f){function
g(a,e){var
b=c(d,f,e);return b?[0,b[1],a]:a}return e(h[16],g,b,a)}return e(h[16],g,f,b)}function
ez(b,a){if(0===b)if(0===a)return 0;return 1}function
fU(s,r,q){var
j=q[2],k=q[1],l=r[2],m=r[1],n=j[3],e=j[2],f=j[1],o=l[3],h=l[2],i=l[1],t=c(p[7][17],s,i),u=c(p[7][17],s,f);if(t)if(u){var
b=u[1],d=t[1],v=a(g[25],b);if(-1===eZ(a(g[25],d),v)){var
w=a(g[15],b),x=c(g[9],n,w),y=a(g[15],d),z=c(g[9],o,y),A=c(g[1],z,x),B=ez(h,e),C=[0,f,a(g[15],b)],D=[0,br([0,i,a(g[15],d)],C),B,A],E=[0,k,a(g[15],b)];return[0,[0,br([0,m,a(g[15],d)],E),D]]}if(0===h){var
F=c(g[9],n,qg),G=c(g[9],d,b),H=a(g[3],G),I=c(g[9],o,H),J=c(g[1],I,F),K=ez(h,e),L=c(g[9],d,b),M=[0,br([0,i,a(g[3],L)],[0,f,qh]),K,J],N=c(g[9],d,b);return[0,[0,br([0,m,a(g[3],N)],[0,k,qi]),M]]}if(0===e){var
O=c(g[9],o,qj),P=c(g[9],b,d),Q=a(g[3],P),R=c(g[9],n,Q),S=c(g[1],R,O),T=ez(h,e),U=c(g[9],b,d),V=[0,br([0,f,a(g[3],U)],[0,i,qk]),T,S],W=c(g[9],b,d);return[0,[0,br([0,k,a(g[3],W)],[0,m,ql]),V]]}return 0}return 0}function
il(a){function
b(b,d){var
c=d[2],e=d[1];if(0===b[0]){var
f=b[1],a=fM(c,0);return typeof
a==="number"?0===a?[1,[0,e,c]]:[0,f]:[0,[0,[0,e,c,a[1],a[2]],f]]}return b}return e(h[16],b,qm,a)}function
im(t,e,s){var
k=e[2],l=e[1],m=e[4][1],u=m[2],v=m[1];function
n(e,b,a){if(b){var
f=b[1][3];if(a){var
d=a[1];return c(e,f,d)?[0,[0,l,k,d]]:b}return b}return a?[0,[0,l,k,a[1]]]:0}var
b=n(g[29],t,v),d=n(g[30],s,u);if(b)if(d){var
f=d[1],h=f[2],o=f[1],j=b[1],p=j[1],w=j[2];if(c(g[29],j[3],f[3]))return[0,[0,b,d]];var
q=h[1];if(q){var
r=fU(q[1][1],[0,p,w],[0,o,h]);return r?[1,r[1]]:a(i[2],qn)}return[1,[0,br([0,p,qp],[0,o,qo]),h]]}return[0,[0,b,d]]}var
A=[0,pd,ap,ev,pe,pf,b4,aL,pk,ab,h4,b5,pm,cN,fK,h5,ps,pw,pA,h6,pE,pF,h7,h8,ew,ex,pM,fL,fM,h9,fN,ey,h_,h$,ia,ib,pU,bK,pV,ic,id,fO,ie,ig,fP,fQ,fT,qf,[0,br,ik,ez,fU,il,im,function(t,a){function
b(a){switch(a[0]){case
0:var
j=a[1];return[0,[0,[0,[0,j,qq],0],c(h[5],t,j)],0];case
1:var
u=a[3],v=a[1],w=b(a[2]),x=b(u);return ik(function(a,b){return fU(v,a,b)},w,x);default:var
y=a[2],z=b(a[1]),A=b(y),f=il(c(i[22],z,A));if(0===f[0]){var
B=f[1],C=function(a,c){if(0===a[0]){var
b=a[1];return im(b[1],c,b[2])}return a},g=e(h[16],C,qr,B);if(0===g[0]){var
k=g[1],d=k[2],l=k[1];if(l){var
m=l[1],n=m[2],o=m[1];if(d){var
p=d[1];return[0,[0,o,n],[0,[0,p[1],p[2]],0]]}var
r=n,q=o}else{if(!d)return 0;var
s=d[1],r=s[2],q=s[1]}return[0,[0,q,r],0]}return[0,g[1],0]}return[0,f[1],0]}}return b(a)}]];aX(744,A,"Micromega_plugin.Mfourier");var
qs=0,qt=0,qu=0,qv=s[13],qw=s[12][8],qy=0;function
qz(b){return[1,a(m[29][7],b)]}var
cO=[0,m[30][7],qz,qy,qx,qw,qv],qA=s[77],qB=s[80],qE=m[29][9],bs=[0,function(b){return[0,a(m[30][7],b),0]},qE,qD,qC,qB,qA];function
cP(e,b){function
d(b){switch(b[0]){case
0:var
g=a(e[2],b[1]);return a(p[6][4],g);case
1:var
h=a(m[29][2],b[1]);return a(p[6][2],h);case
2:var
i=b[1],j=d(b[2]),k=d(i);return c(p[6][7],k,j);case
3:var
l=b[1],n=d(b[2]),o=a(p[6][8],n),q=d(l);return c(p[6][7],q,o);case
4:var
r=b[2],s=d(b[1]),t=d(r);return c(p[6][6],s,t);case
5:var
u=d(b[1]);return a(p[6][8],u);default:var
v=b[2],w=d(b[1]),x=a(m[29][3],v),f=function(b){if(0===b){var
d=a(e[2],e[4]);return a(p[6][4],d)}var
g=f(b-1|0);return c(p[6][6],w,g)};return f(x)}}return d(b)}function
io(b){function
c(f,c,b){var
d=a(m[30][2],f),e=1===c?[1,d]:[6,[1,d],a(m[30][3],c)];return T(b,qG)?e:[4,e,b]}return e(p[5][12],c,b,qF)}function
ip(o,f){function
p(b){var
d=a(g[24],b);return c(g[26],d,b)}if(c(h[23],p,f)){var
i=function(a){return io(c(h[5],o,a))},e=qK,b=0,d=f;for(;;){if(d){var
j=d[2],k=d[1];if(c(g[26],k,qH)){var
b=b+1|0,d=j;continue}var
q=a(m[18],k),l=[0,a(m[30][7],q)],n=T(l,qI)?i(b):[4,l,i(b)],r=T(e,qJ)?n:[2,n,e],e=r,b=b+1|0,d=j;continue}return e}}throw[0,C,qL]}function
iq(e,d){var
b=d;for(;;){var
c=a(e,b);if(T(c,b))return c;var
b=c;continue}}function
ir(b,e){var
d=F(s[74],b[3],b[4],b[5],b[6]);function
c(b){if(typeof
b!=="number")switch(b[0]){case
3:var
e=b[1],f=c(b[2]);return a(d,[3,c(e),f]);case
4:var
g=b[1],h=c(b[2]);return a(d,[4,c(g),h])}return a(d,b)}return c(e)}function
eA(b,a){return iq(function(a){return ir(b,a)},a)}function
is(d){function
j(p,o){var
f=p,d=o;for(;;){if(f){var
g=f[2],a=f[1];if(d){var
c=d[1];if(typeof
c==="number")var
b=0;else
switch(c[0]){case
2:if(typeof
a==="number")var
b=0;else
if(2===a[0]){var
h=c[1],k=a[2],l=c[2];if(T(h,a[1]))var
e=[0,[2,h,[4,l,k]]],b=1;else
var
e=0,b=1}else
var
b=0;break;case
3:if(typeof
a==="number")var
b=0;else
if(3===a[0]){var
i=c[1],m=a[2],n=c[2];if(T(i,a[1]))var
e=[0,[3,i,[4,n,m]]],b=1;else
var
e=0,b=1}else
var
b=0;break;default:var
b=0}if(!b)var
e=0;if(e){var
f=g,d=[0,e[1]];continue}return[4,c,j(g,[0,a])]}var
f=g,d=[0,a];continue}return d?d[1]:0}}var
a=d,b=0,f=0;for(;;){if(typeof
a!=="number"&&4===a[0]){var
e=[0,a[1],b],a=a[2],b=e;continue}return j(c(h[41],H.caml_compare,[0,a,b]),f)}}function
it(b,f){var
g=0;function
i(d,a){return[0,c(p[6][1],b,a),d]}var
d=e(h[16],i,g,f);if(T(b,p[5][1])){var
j=[1,q[1]],k=a(h[6],d);return[0,a(p[7][5],[0,[1,q[2]],k]),0,j]}var
l=[1,q[1]],m=a(h[6],d);return[0,a(p[7][5],[0,[1,q[1]],m]),0,l]}function
iu(a){function
c(f,d){var
b=f,a=d;for(;;){if(a){if(0===a[1][2]){var
b=b+1|0,a=a[2];continue}var
g=c(b+1|0,a[2]),h=1,i=p[7][3],j=function(a){return qN};return[0,[0,e(p[7][10],b+1|0,j,i),h,qM],g]}return 0}}return c(0,a)}function
qO(a){switch(a){case
0:return qP;case
1:return qQ;case
2:return qR;default:return qS}}var
eB=a(d_[1],[0,p[5][10]]);function
iv(b){function
f(a){return a[1]}var
d=c(h[13],f,b),g=a(eB[5],p[5][1]);function
j(b,a){function
d(b,d,a){return c(eB[4],b,a)}return e(p[6][9],d,a,b)}var
k=e(h[16],j,g,d),l=0;function
m(b,a){return[0,it(b,d),a]}var
n=e(eB[15],m,k,l),o=[1,q[2]],r=1;function
s(a){return 2===a[2]?[1,q[2]]:[1,q[1]]}var
t=c(h[13],s,b),u=[0,a(p[7][5],[0,[1,q[2]],t]),r,o],v=[0,u,iu(b)],w=c(i[22],v,n),x=[1,q[1]];return[0,[0,a(p[7][5],[0,[1,q[2]],0]),1,x],w]}var
qT=m[30][7];function
fV(d,b){var
e=b[1],g=d[1],f=b[2];if(e){var
j=e[2],h=function(d,b){if(d){var
e=d[1],l=d[2];if(b){var
j=b[1],f=h(l,b[2]),k=c(q[23],e,q[1]);if(-1===k){var
n=[0,a(m[30][1],j)];return[4,[2,[0,a(g,e)],n],f]}if(0===k)return f;var
o=[0,a(m[30][1],j)];return[4,[3,[5,a(g,e)],o],f]}return a(i[2],qU)}return 0};return is(eA(d,h(j,f)))}return a(i[2],qV)}var
qX=[aZ,qW,aY(0)],fW=[aZ,qY,aY(0)],aM=a(bH[1],[0,p[5][10]]);function
iw(b){var
d=[0,0];function
o(b,a){return Z(b[1],a[1])}var
f=[0,aM[1],0];function
i(i,f){var
j=i[2],k=i[1],q=f[2],m=[0,f[1],0];function
n(f,j,i){var
h=i[2],b=i[1];if(T(f,p[5][1]))return[0,b,h];try{var
q=c(aM[23],f,b),l=q,k=b}catch(a){a=v(a);if(a!==M)throw a;var
m=e(aM[4],f,d[1],b),n=d[1];d[1]++;var
l=n,k=m}var
o=0===a(g[25],j)?h:[0,[0,l,j],h];return[0,k,o]}var
b=e(p[6][9],n,k,m),r=b[2],s=b[1],t=c(p[6][1],p[5][1],k),u=a(g[3],t);if(0===j)var
l=0;else{if(!(3<=j))throw fW;var
l=1}return[0,s,[0,[0,c(h[41],o,r),l,u],q]]}return e(h[17],i,b,f)[2]}function
ix(e){var
f=iv(e);try{var
b=a(A[47][2],f);if(0===b[0])var
h=a(p[7][8],b[1]),d=[0,a(m[22],h)];else
var
d=0;return d}catch(b){b=v(b);if(a(bq[20],b)){if(A[4]){var
g=a(d$[1],b);c(n[2],qZ,g);a(i[46],i[24])}return 0}throw b}}function
iy(b){try{var
d=iw(b),f=a(A[47][2],d);if(0===f[0])var
g=0;else{var
i=f[1];if(A[4])e(n[2],q0,A[13],i);var
k=c(A[48][7],d,i),l=a(h[3],k)[1],o=function(a){return[0,a[1]+1|0,a[2]]},j=c(h[13],o,l);if(A[4])e(n[2],q1,p[7][4],j);var
q=a(p[7][8],j),g=[0,a(m[22],q)]}return g}catch(a){a=v(a);if(a===fW)return ix(b);throw a}}function
iz(d){var
b=a(h[39],d),e=b[2],c=iy(b[1]);return c?[0,[0,c[1],e]]:0}function
q2(e,b){var
d=a(h[1],b)-1|0,f=c(m[14],0,d),g=c(h[40],b,f);function
j(a){return 1===a[1][2]?1:0}var
k=c(h[32],j,g)[2];function
l(b){var
c=b[1],d=c[2],f=b[2],g=c[1];return 1===d?a(i[2],q3):[0,[0,cP(e,g),d],f]}return iz(c(h[13],l,k))}function
iA(c,b){try{var
e=q2(c,b);return e}catch(b){b=v(b);if(a(bq[20],b)){var
d=a(d$[1],b);a(i[27],d);return 0}throw b}}function
cQ(e,b){var
d=a(h[1],e),f=c(i[5],b,eZ(d,b));return c(i[5],d,f)}function
q4(d,b,a){var
e=cQ(a,d);A[10][1]=e;var
c=iA(b,a);return c?[0,fV(b,c[1])]:0}function
q5(n,b){a(p[22][1][6],0);var
o=cQ(b,n);A[10][1]=o;function
q(c,b){return[0,c,[0,a(m[30][1],b)]]}var
f=c(m[23],q,b);function
r(b,a){var
d=a[1],e=b[1],f=d[1],g=e[1],h=[3,b[2],a[2]];return[0,[0,[4,g,f],c(s[53],e[2],d[2])],h]}var
t=c(m[9],r,f),u=0;function
v(b,a){var
c=a[1],d=c[2],e=a[2],f=c[1];return d?[0,[0,[0,f,d[1]],e],b]:b}var
w=e(h[16],v,u,t),g=c(i[22],f,w);function
x(a){return cP(bs,a[1][1])}var
y=c(h[13],x,g),z=aM[1];function
B(c,b){function
d(c,f,b){var
d=a(p[5][13],c);return d?e(aM[4],d[1],c,b):b}return e(p[6][9],d,b,c)}var
C=e(h[16],B,z,y);function
j(b){var
c=[0,bs[4]];function
d(d,c,b){var
e=a(m[30][3],c);return[4,[6,[1,a(m[30][2],d)],e],b]}return e(p[5][12],d,b,c)}var
D=d1(s[63],bs[3],bs[4],s[79],s[80],s[82],s[81],s[77]),E=0;function
F(d,c,b){var
e=[1,a(D,j(d))];return[0,[0,[0,j(c),3],e],b]}var
G=e(aM[12],F,C,E),k=c(i[22],g,G);function
H(a){return a[1]}var
l=iA(bs,c(h[13],H,k));if(l){var
I=fV(bs,l[1]),d=function(b){if(typeof
b==="number")return 0;else
switch(b[0]){case
0:var
e=a(m[29][1],b[1]);return c(h[5],k,e)[2];case
1:return[1,b[1]];case
2:var
f=b[1];return[2,f,d(b[2])];case
3:var
g=b[1],i=d(b[2]);return[3,d(g),i];case
4:var
j=b[1],l=d(b[2]);return[4,d(j),l];default:return[5,b[1]]}};return[0,d(I)]}return 0}function
q6(b){function
f(a){return a[1]}var
i=c(h[13],f,b),j=a(p[6][4],q7);function
k(b,a){return c(p[6][7],a,b)}var
l=e(h[16],k,j,i),m=0;function
n(b,c,a){return T(b,p[5][1])?a:[0,b,a]}var
d=e(p[6][9],n,l,m);function
o(b){var
e=b[1],f=b[2],i=c(p[6][1],p[5][1],e),j=a(g[3],i);function
k(a){return c(p[6][1],a,e)}var
l=c(h[13],k,d);return[0,a(p[7][5],l),f,j]}return[0,c(h[13],o,b),d]}function
q8(b,a){return[2,b,a]}function
q9(b,a){return[4,b,a]}function
q_(a){return[0,a]}function
q$(a){return[5,a]}function
ra(e,d,b){var
a=b;for(;;){if(a){var
f=a[2];if(c(e,d,a[1]))return 1;var
a=f;continue}return 0}}function
iB(d,b,g){var
a=g;for(;;){if(a){var
e=a[2],f=a[1];if(c(d,b,f[1])){var
a=e;continue}return[0,f,iB(d,b,e)]}return 0}}function
iC(b,a){return 0===c(p[7][15],b,a)?1:0}function
rb(c,a){var
b=0;function
d(b,a){return iC(a,c)?b:[0,a,b]}return e(h[16],d,b,a)}function
fX(b,a){var
c=a[2],d=a[1];if(0===c)return[0,cP(b,d),0];if(3<=c)return[0,cP(b,d),1];throw[0,C,rc]}function
iD(a){return 0===a?0:3}function
rd(d){var
b=a(h[39],d),e=b[1],f=a(m[22],b[2]);function
g(a){return[1,a]}var
i=c(h[13],g,f);return c(h[40],e,i)}function
iE(b){var
f=b[3],g=b[2],e=a(h[39],b[1]),i=e[1],d=a(m[22],[0,f,e[2]]);if(d){var
j=d[2],k=[1,d[1]],l=function(a){return[1,a]},n=c(h[13],l,j);return[0,c(h[40],i,n),g,k]}throw[0,C,re]}function
rf(e,d){var
b=iE(d),c=b[3],f=b[2],g=b[1];try{var
h=ip(e,a(p[7][8],g)),j=a(m[17],c),k=a(m[30][7],j),l=a(m[18],c),n=a(m[30][7],l),o=[0,[2,[4,[0,k],h],[5,[0,n]]],iD(f)];return o}catch(b){b=v(b);if(b[1]===fb)return a(i[2],rg);throw b}}function
bL(b){if(typeof
b==="number")return[0,q[2],0];else
switch(b[0]){case
0:var
e=b[1],z=[0,[1,a(m[18],e)]];return[0,a(m[17],e),z];case
1:return[0,q[2],[1,b[1]]];case
2:return a(i[2],rh);case
3:var
f=bL(b[1]);return[0,f[1],[3,f[2]]];case
4:var
g=b[1],A=g[2],h=bL(g[1]),j=h[2],k=h[1],l=bL(A),n=l[2],o=l[1],d=c(q[17],k,o),p=c(q[15],k,d),r=c(q[15],o,d),B=c(q[10],p,r),s=c(q[10],d,B);return 0===c(q[23],s,q[2])?[0,q[2],[4,[0,j,n]]]:[0,s,[4,[0,[6,[0,[0,[1,r]],j]],[6,[0,[0,[1,p]],n]]]]];case
5:return a(i[2],ri);case
6:var
t=b[1],C=t[2],u=bL(t[1]),D=u[2],E=u[1],v=bL(C),F=[6,[0,D,v[2]]];return[0,c(q[10],E,v[1]),F];case
7:return a(i[2],rj);default:var
w=b[1],x=w[2],y=bL(w[1]),G=[8,[0,y[2],x]];return[0,c(q[19],y[1],x),G]}}function
fY(b){var
a=bL(b);return[0,a[1],a[2]]}function
rk(h,g,f){var
d=0,c=0,b=f;for(;;){if(b){var
e=b[2];if(a(h,b[1])){if(d===g)return c;var
d=d+1|0,c=c+1|0,b=e;continue}var
c=c+1|0,b=e;continue}return a(i[2],rl)}}function
bM(b){switch(b[0]){case
0:return[0,q[2],[0,b[1]]];case
1:return[0,q[2],[1,b[1]]];case
2:return[0,q[2],[2,b[1]]];case
3:var
e=b[1],v=[3,[1,a(m[18],e)]];return[0,a(m[17],e),v];case
4:var
f=b[1],w=[4,[1,a(m[18],f)]];return[0,a(m[17],f),w];case
5:var
g=b[1],x=[5,[1,a(m[18],g)]];return[0,a(m[17],g),x];case
6:var
h=fY(b[1]),i=h[1],y=[6,h[2]];return[0,c(q[10],i,i),y];case
7:return[0,q[2],[7,b[1]]];case
8:var
z=b[2],j=fY(b[1]),A=j[2],B=j[1],k=bM(z),C=[8,A,k[2]];return[0,c(q[10],B,k[1]),C];case
9:var
D=b[2],l=bM(b[1]),n=l[1],E=l[2],o=bM(D),p=o[1],F=o[2],d=c(q[17],n,p),r=c(q[15],n,d),s=c(q[15],p,d),G=c(q[10],r,s);return[0,c(q[10],d,G),[9,[10,[4,[1,s]],E],[10,[4,[1,r]],F]]];default:var
H=b[2],t=bM(b[1]),I=t[2],J=t[1],u=bM(H),K=[10,I,u[2]];return[0,c(q[10],J,u[1]),K]}}function
aN(b){if(typeof
b==="number")return[0,a(m[30][8],rm)];else
switch(b[0]){case
0:return[0,a(m[30][8],b[1])];case
1:var
c=b[1],j=j4(e(iF[4],c,1,j3(c)-1|0));return[1,a(m[30][4],j)];case
3:return[5,aN(b[1])];case
4:var
d=b[1],k=d[1],l=aN(d[2]);return[2,aN(k),l];case
5:var
f=b[1],n=f[1],o=aN(f[2]);return[3,aN(n),o];case
6:var
g=b[1],p=g[1],q=aN(g[2]);return[4,aN(p),q];case
8:var
h=b[1],r=h[1],s=a(m[30][3],h[2]);return[6,aN(r),s];default:return a(i[2],rn)}}function
fZ(b){var
c=aN(b),d=s[77],e=s[81],f=s[82],g=s[80],h=s[79],i=a(m[30][8],ro),j=a(m[30][8],rp);return bQ(s[39],j,i,h,g,f,e,d,c)}function
eC(b){if(b){var
c=b[2],d=b[1];if(c){var
e=eC(c);return[3,[0,a(m[30][1],d)],e]}return[0,a(m[30][1],d)]}return 0}function
rq(b){function
d(b){switch(b[0]){case
0:return[0,a(m[30][1],b[1])];case
1:return[0,a(m[30][1],b[1])];case
2:return[0,a(m[30][1],b[1])];case
6:return[1,fZ(b[1])];case
7:return eC(b[1]);case
8:var
f=b[1],h=d(b[2]);return[2,fZ(f),h];case
9:var
i=b[1],j=d(b[2]);return[4,d(i),j];case
10:var
k=b[1],l=d(b[2]);return[3,d(k),l];default:var
e=b[1];return 0===c(g[37],e,rr)?0:[5,a(m[30][8],e)]}}return eA(bs,d(b))}function
aO(b){if(typeof
b==="number")return rs;else
switch(b[0]){case
0:var
k=a(g[49],b[1]);return[0,a(m[30][7],k)];case
1:var
c=b[1],l=j4(e(iF[4],c,1,j3(c)-1|0));return[1,a(m[30][4],l)];case
3:return[5,aO(b[1])];case
4:var
d=b[1],n=d[1],o=aO(d[2]);return[2,aO(n),o];case
5:var
f=b[1],p=f[1],q=aO(f[2]);return[3,aO(p),q];case
6:var
h=b[1],r=h[1],s=aO(h[2]);return[4,aO(r),s];case
8:var
j=b[1],t=j[1],u=a(m[30][3],j[2]);return[6,aO(t),u];default:return a(i[2],rt)}}function
f0(b){var
c=aO(b),d=s[13],e=s[12][6],f=s[12][7],g=s[12][8],h=s[12][5],i=a(m[30][5],1),j=a(m[30][5],0);return bQ(s[39],j,i,h,g,f,e,d,c)}function
ru(b){var
e=bM(b)[2];function
d(k){var
b=k;for(;;)switch(b[0]){case
0:return[0,a(m[30][1],b[1])];case
1:return[0,a(m[30][1],b[1])];case
2:return[0,a(m[30][1],b[1])];case
6:return[1,f0(b[1])];case
7:return eC(b[1]);case
8:var
i=b[2],e=b[1];if(typeof
e==="number")var
f=0;else
if(0===e[0])var
j=c(g[26],e[1],rw),f=1;else
var
f=0;if(!f)var
j=0;if(j){var
b=i;continue}var
n=d(i);return[2,f0(e),n];case
9:var
o=b[1],p=d(b[2]);return[4,d(o),p];case
10:var
q=b[1],r=d(b[2]);return[3,d(q),r];default:var
h=b[1];if(0===c(g[37],h,rv))return 0;var
l=a(g[49],h);return[5,a(m[30][7],l)]}}return eA(cO,d(e))}var
iG=[0,function(e,d){var
c=0,b=d;for(;;){if(b){var
f=b[2];if(T(e,b[1]))return c;var
c=c+1|0,b=f;continue}return a(i[2],rx)}}];function
f1(b){var
c=b[1],d=a(m[18],b[2]),f=[0,a(m[30][7],d)];function
g(f,b){var
g=b[2],h=a(p[22][1][8],b[1]);function
c(d,c,b){var
e=a(m[30][3],c);return[4,[6,[1,a(m[30][2],d)],e],b]}var
d=e(p[5][12],c,h,ry),i=a(m[18],g);return[2,[4,[0,a(m[30][7],i)],d],f]}return e(h[16],g,f,c)}function
aP(d,b){if(typeof
b==="number")return 0;else
switch(b[0]){case
2:return[5,a(m[30][7],b[1])];case
3:var
f=f1(b[1]);return[1,a(s[92],f)];case
4:var
g=b[2],h=f1(b[1]),j=a(s[92],h);return[2,j,aP(d,g)];case
6:var
k=b[1],l=aP(d,b[2]);return[3,aP(d,k),l];case
7:var
n=b[1],o=aP(d,b[2]);return[4,aP(d,n),o];case
0:case
1:var
e=c(iG[1],b[1],d);return[0,a(m[30][1],e)];default:return a(i[2],rz)}}function
cR(b,a){if(typeof
a==="number")return 0;else{if(0===a[0]){var
e=a[3],d=a[2],f=a[1];if(typeof
d!=="number"&&8===d[0]){var
i=d[1],j=cR([0,f,b],e);return[1,aP(b,i),j]}var
g=cR([0,f,b],e);return[0,aP(b,d),g]}var
k=a[5],l=a[4],m=a[2],n=[0,a[1],b],o=function(a){return cR(n,a)},p=c(h[13],o,k),q=aP(b,l);return[2,aP(b,m),q,p]}}function
iH(e,b){var
f=1+a(p[15],b)|0,d=c(p[18],f,b)[2];if(A[4])F(n[1],i[24],rA,p[13],d);return cR(e,d)}function
eD(b){var
d=a(A[47][2],b);if(0===d[0])return 0;var
f=d[1];if(A[4])e(n[2],rB,A[13],f);var
i=c(A[48][7],b,f),g=a(h[3],i)[1];if(A[4])e(n[2],rC,p[7][4],g);var
j=a(p[7][8],g);return[0,a(m[22],j)]}function
rD(d,b){var
e=a(g[40],b);return c(i[49],d,e)}function
rE(d,b){var
e=a(q[33],b);return c(i[49],d,e)}function
eE(g,f){var
e=0,d=g,b=f;for(;;){if(b){if(d){var
h=b[2],j=d[2],k=c(p[20],b[1],d[1]),e=c(p[19],k,e),d=j,b=h;continue}return a(i[2],rF)}return e}}function
iI(d){var
b=a(h[39],d),e=b[2],c=eD(b[1]);return c?[0,eE(e,c[1])]:0}var
iJ=A[4]?function(b){a(n[2],rG);a(i[46],i[24]);var
c=iI(b);a(n[2],rH);a(i[46],i[24]);return c}:iI;function
f2(l){var
d=l[2],f=l[1],i=f[3],j=f[2],k=f[1];if(k){var
o=function(a){return a[2]},p=c(h[13],o,k),n=a(m[21],p),b=[1,n];if(c(g[32],b,rI))return[2,f,d];var
q=c(g[12],i,b);if(0===a(g[25],q)){if(1<=a(g[25],b)){var
r=c(g[9],i,b),s=function(a){var
d=a[1];return[0,d,c(g[9],a[2],b)]};return[2,[0,c(h[13],s,k),j,r],[5,n,d]]}throw[0,C,rJ]}if(0===j)return[0,[8,d]];var
t=c(g[9],i,b),u=a(g[24],t),v=function(a){var
d=a[1];return[0,d,c(g[9],a[2],b)]};return[1,[0,c(h[13],v,k),j,u],[8,d]]}return e(A[26],j,rK,i)?0:[0,d]}function
iK(k,j,i){var
e=i[1],f=j[1],l=e[2],n=e[1],o=f[2],q=f[1],t=i[2],u=j[2],v=e[3],w=f[3];function
h(d,b){var
e=a(m[18],b),f=c(p[20],e,t),h=a(m[18],d),i=[7,c(p[20],h,u),f],j=c(g[6],v,b),k=c(g[6],w,d),r=c(g[1],k,j),s=c(A[48][3],o,l),x=c(p[7][13],b,n),y=c(p[7][13],d,q);return[0,[0,c(p[7][14],y,x),s,r],i]}var
r=c(p[7][17],k,q),s=c(p[7][17],k,n);if(r)if(s){var
b=s[1],d=r[1],x=a(g[25],b);if(-1===eZ(a(g[25],d),x)){var
y=a(g[15],b);return[0,h(y,a(g[15],d))]}if(0===o){var
z=[0,a(g[25],d)],B=c(g[6],b,z),C=a(g[3],B);return[0,h(C,a(g[15],d))]}if(0===l){var
D=a(g[15],b),E=[0,a(g[25],b)],F=c(g[6],d,E);return[0,h(D,a(g[3],F))]}return 0}return 0}var
cS=[aZ,rL,aY(0)];function
iL(a){var
b=0;function
c(b,c){var
a=f2([0,c[1],c[2]]);if(typeof
a==="number")return b;else
switch(a[0]){case
0:throw[0,cS,a[1]];case
1:return[0,[0,a[1],a[2]],b];default:return[0,[0,a[1],a[2]],b]}}return e(h[16],c,b,a)}function
cT(g,b){if(0===a(q[22],b))return[0,q[2],q[1]];var
d=c(q[14],g,b),h=d[1],e=cT(b,d[2]),f=e[2],i=e[1],j=c(q[10],h,f);return[0,f,c(q[8],i,j)]}function
rM(j,h){var
b=a(q[35],j),d=a(q[35],h),e=cT(b,d),f=e[2],g=e[1],k=c(q[10],f,d),l=c(q[10],g,b),m=c(q[5],l,k),o=a(q[33],m),p=a(q[33],d),r=a(q[33],f),s=a(q[33],b),t=a(q[33],g);return d1(n[1],i[24],rN,t,s,r,p,o)}var
rP=[aZ,rO,aY(0)];function
rQ(c){function
b(a){return 0===a[1][2]?1:0}return a(h[32],b)}function
iM(r,p){var
f=p[1],g=r[1];if(0===g[2])if(0===f[2]){var
d=g[1],b=f[1];for(;;){if(d)if(b){var
h=b[2],i=b[1],j=i[2],k=i[1],l=d[2],n=d[1],o=n[2],e=n[1];if(T(e,k)){var
s=q[2],t=a(m[18],j),u=a(m[18],o),v=c(q[17],u,t);if(0===c(q[23],v,s))return[0,[0,e,o,j]];var
d=l,b=h;continue}if(gC(e,k)){var
d=l;continue}var
b=h;continue}return 0}}return 0}function
iN(l,k){var
d=0,b=k;for(;;){if(b){var
f=b[2],e=b[1],n=a(l,e),g=c(m[15],n,f),i=g[1];if(i){var
j=i[1],o=j[2],p=j[1];return[0,[0,[0,p,e,o]],c(h[8],d,g[2])]}var
d=[0,e,d],b=f;continue}return[0,0,d]}}function
iO(a){return iN(iM,a)}function
eF(f,b){var
c=0;function
d(c,d){var
e=a(f,d);if(e){var
b=f2(e[1]);if(typeof
b==="number")return c;else
switch(b[0]){case
0:throw[0,cS,b[1]];case
1:return[0,[0,b[1],b[2]],c];default:return[0,[0,b[1],b[2]],c]}}return[0,d,c]}return e(h[16],d,c,b)}function
eG(c,b,a){return eF(function(a){return iK(c,b,a)},a)}function
iP(r){var
i=iO(r),j=i[1],s=i[2];if(j){var
b=j[1],k=b[3],l=k[1],n=b[2],o=n[2],d=n[1],e=b[1],t=k[2],u=e[2],v=e[1],w=a(m[18],e[3]),q=cT(a(m[18],u),w),f=[1,q[1]],h=[1,q[2]],x=c(g[6],h,l[3]),y=c(g[6],f,d[3]),z=c(g[1],y,x),A=c(p[7][13],h,l[1]),B=c(p[7][13],f,d[1]),C=[0,c(p[7][14],B,A),0,z],D=a(m[18],h),E=c(p[20],D,t),F=a(m[18],f),G=c(p[20],F,o);return[0,eG(v,[0,C,c(p[19],G,E)],[0,[0,d,o],s])]}return 0}function
iQ(e){function
f(b){var
a=b[1];if(0===a[2])try{var
d=a[1],e=function(d){var
a=d[2],b=c(g[26],a,rR);return b?b:c(g[26],a,rS)},f=[0,c(h[29],e,d)[1]];return f}catch(a){a=v(a);if(a===M)return 0;throw a}return 0}var
a=c(m[15],f,e),b=a[1],i=a[2];if(b){var
d=b[1];return[0,eG(d[1],d[2],i)]}return 0}function
iR(f){function
i(e){var
b=e[1];if(0===b[2])try{var
f=b[1],i=function(b){var
d=b[2],f=b[1],h=c(g[26],d,rT),e=h||c(g[26],d,rU);if(e){var
i=a(p[22][1][8],f);return a(p[5][4],i)}return e},d=c(h[29],i,f)[1],j=a(p[22][1][8],d),k=b[1],l=function(g){var
b=g[1],e=b===d?1:0;if(e)var
f=e;else
var
h=a(p[22][1][8],b),f=0===c(p[5][9],h,j)[2]?1:0;return f},m=c(h[23],l,k)?[0,d]:0;return m}catch(a){a=v(a);if(a===M)return 0;throw a}return 0}var
b=c(m[15],i,f),d=b[1],j=b[2];if(d){var
e=d[1];return[0,eF(c(p[22][9],e[1],e[2]),j)]}return 0}function
iS(r){function
s(i){var
b=i;for(;;){if(b){var
d=b[2],e=b[1],j=e[1],f=a(m[18],e[2]);try{var
k=function(g){return function(b){var
d=a(m[18],b[2]),e=q[2],f=c(q[17],g,d);return c(q[24],f,e)}}(f),g=c(h[29],k,d),l=g[1],n=[0,[0,[0,j,f],[0,l,a(m[18],g[2])]]];return n}catch(a){a=v(a);if(a===M){var
b=d;continue}throw a}}return 0}}function
t(b){var
a=b[1];return 0===a[2]?s(a[1]):0}var
b=c(m[15],t,r),d=b[1],u=b[2];if(d){var
e=d[1],f=e[2],i=f[1],j=e[1],k=j[2],l=j[1],w=f[2],x=k[1],y=l[1],n=cT(l[2],k[2]),z=[1,n[2]],A=[1,n[1]],o=function(d,b){var
a=c(p[7][17],d,b);return a?a[1]:rV};return[0,eF(function(f){var
b=f[1],d=b[1],h=f[2],j=b[3],k=b[2],l=o(y,d),m=o(x,d),n=c(g[6],m,z),q=c(g[6],l,A),r=c(g[1],q,n),e=a(g[3],r),s=c(g[6],e,i[3]),t=c(g[1],s,j),u=c(p[7][13],e,i[1]);return[0,[0,[0,c(p[7][14],u,d),k,t],[7,[4,[0,0,e],w],h]]]},u)]}return 0}function
rW(i){function
j(c){var
b=c[1];if(0===b[2])try{var
d=[0,a(h[3],b[1])[1]];return d}catch(a){a=v(a);if(a===M)return 0;throw a}return 0}var
d=c(m[15],j,i),e=d[1],k=d[2];if(e){var
f=e[1],b=f[2],l=f[1];if(A[4]){var
o=a(g[40],b[1][3]);F(n[2],rX,p[7][4],b[1][1],o)}return[0,eG(l,b,k)]}return 0}function
f3(e,d){var
b=d;for(;;){var
c=a(e,b);if(c){var
b=c[1];continue}return b}}function
f4(e,d){var
b=e;for(;;){if(b){var
f=b[2],c=a(b[1],d);if(c)return[0,c[1]];var
b=f;continue}return 0}}function
f5(a){var
b=[0,iQ,[0,iP,[0,iS,0]]];return f3(function(a){return f4(b,a)},a)}function
iT(a){var
b=[0,iR,0];return f3(function(a){return f4(b,a)},a)}function
iU(d){function
C(a){return 0===a[2]?1:0}var
r=c(h[32],C,d),s=r[2],t=r[1];if(t)var
D=0,E=function(b,a){function
d(b){return c(p[7][1],a[1],b[1])}return c(h[24],d,t)?b:[0,a[1],b]},u=e(h[16],E,D,s);else
var
F=function(a){return a[1]},u=c(h[15],F,s);var
G=[0,p[7][3],rZ];function
H(b,f){var
h=a(A[6][4],b[2]),m=h?c(g[29],h[1],rY):0;if(m)return b;var
j=c(A[47][1],f,d);if(j){var
k=j[1];if(A[4])e(n[2],r0,p[7][4],f);var
i=b[2],l=b[1];return c(A[6][5],k,i)?[0,f,k]:[0,l,i]}return b}var
v=e(h[16],H,G,u),w=v[2],x=w[1],I=v[1];if(x){var
y=w[2];if(y)var
b=[0,[0,x[1],I,y[1]]],o=1;else
var
o=0}else
var
o=0;if(!o)var
b=0;if(b){var
f=b[1],j=f[3],k=f[2],l=f[1],J=a(m[17],l),K=q[2],L=a(m[18],l),M=c(q[8],L,K),N=a(m[17],j),O=a(m[18],j),P=[1,c(q[5],q[2],O)],z=eD([0,[0,c(p[7][13],[1,N],k),1,P],d]),Q=a(g[3],[1,M]),R=a(g[3],[1,J]),B=eD([0,[0,c(p[7][13],R,k),1,Q],d]);if(z)if(B){var
S=B[1],T=a(h[4],z[1]);return[0,[0,a(h[4],S),[0,l,k,j],T]]}return a(i[2],r1)}return 0}function
eH(b){function
d(b){var
d=b[1][1];function
e(b){return 0!==a(g[25],b[2])?1:0}return c(h[23],e,d)}return c(h[23],d,b)}function
f6(o,l,b){function
q(j,b){if(A[4]){a(n[2],r2);a(i[46],i[24])}if(eH(b)){var
k=a(h[39],b),l=k[2],m=iU(k[1]);if(m){var
c=m[1],d=c[2],o=d[3],e=d[2],q=d[1],s=c[3],t=c[1];if(A[4]){var
u=a(g[40],o),v=a(g[40],q);aW(n[2],r3,p[7][4],e,v,u)}var
w=a(g[22],o),r=f(j,e,a(g[24],q),w,b);if(r){var
x=r[1],y=eE(l,s);return[0,[1,j,eE(l,t),e,y,x]]}return 0}return 0}throw[0,C,r4]}function
f(b,h,a,e,d){if(c(g[28],a,e))return r5;var
i=j(b+1|0,[0,[0,[0,h,0,a],[1,b]],d]);if(i){var
l=i[1],k=f(b,h,c(g[1],a,r6),e,d);return k?[0,[0,l,k[1]]]:0}return 0}function
j(d,b){if(eH(b)){if(A[4]){var
h=function(b,a){return c(p[9],b,a[1])},i=a(m[2],h);e(n[2],r7,i,b)}try{var
f=a(l,b);if(A[4]){var
j=function(b,a){return c(p[9],b,a[1])},k=a(m[2],j);e(n[2],r8,k,f)}var
g=iJ(f),r=g?[0,[0,d,g[1],0]]:o?q(d,f):0;return r}catch(a){a=v(a);if(a[1]===cS)return[0,[0,d,a[2],0]];throw a}}throw[0,C,r9]}var
k=a(h[1],b);try{var
t=j(k,iL(b)),d=t}catch(a){a=v(a);if(a[1]!==cS)throw a;var
d=[0,[0,k,a[2],0]]}if(d){var
r=d[1],s=function(b,a){return a};return[0,iH(c(m[23],s,b),r)]}return 0}function
f7(b){var
d=b[2],c=a(p[22][5],b[1]),e=c[1];return[0,e,d,a(g[3],c[2])]}function
r_(e,d,b){a(p[22][1][6],0);var
f=cQ(b,d);A[10][1]=f;function
g(a){return fX(cO,a)}var
i=c(h[13],g,b),j=c(h[13],f7,i);function
k(b,a){return[0,b,[0,a]]}return f6(e,f5,c(m[23],k,j))}var
aF=[0,qs,qt,qu,cO,bs,cO,cP,io,ip,iq,ir,eA,is,it,iu,qO,eB,iv,qT,fV,qX,fW,aM,iw,ix,iy,iz,cQ,q4,q5,q6,q8,q9,q_,q$,ra,iB,iC,rb,fX,iD,rd,iE,rf,fY,rk,bM,aN,fZ,eC,rq,aO,f0,ru,iG,f1,aP,cR,iH,eD,rD,rE,eE,iJ,f2,iK,cS,iL,cT,rM,rP,rQ,iM,iN,iO,eF,eG,iP,iQ,iR,iS,rW,f3,f4,f5,iT,iU,eH,f6,f7,r_,function(n,l,f){a(p[22][1][6],0);var
o=cQ(f,l);A[10][1]=o;function
q(a){return fX(cO,a)}var
r=c(h[13],q,f);function
s(b,a){return[0,b,[0,a]]}var
b=c(m[23],s,r);function
t(b){return a(p[6][13],b[1][1])}var
g=c(h[23],t,b),u=aM[1];function
v(c,b){var
d=b[1][1];function
f(c,f,b){var
d=a(p[5][13],c);return d?e(aM[4],d[1],c,b):b}return e(p[6][9],f,d,c)}var
w=e(h[16],v,u,b);function
x(d,c,b){var
f=a(p[6][4],r$),g=e(p[6][3],d,sa,f),h=a(p[22][5],g),i=a(p[6][4],sb);return[0,[0,[0,e(p[6][3],c,sc,i),1],[3,h]],b]}var
d=e(aM[12],x,w,b);if(g)var
j=d;else
var
B=function(b,a){var
d=a[1],e=b[1],f=d[1],g=e[1],h=[6,b[2],a[2]],i=c(p[10],e[2],d[2]);return[0,[0,c(p[6][6],g,f),i],h]},D=c(m[8],B,d),j=c(i[22],d,D);function
y(a){var
b=a[2];return[0,f7(a[1]),b]}var
k=c(h[13],y,j);if(eH(k)){var
z=g?f5:iT;return f6(n,z,k)}throw[0,C,sd]}];aX(746,aF,"Micromega_plugin.Certificate");var
cU=[0,function(p){var
b=a(bm[18],p),m=[aZ,se,aY(0)],f=[aZ,sf,aY(0)];function
q(d,c){var
f=a(b[1],d),g=e(D[21],c,sg,e1);return[0,a(D[29],g),1,f]}function
r(b,c){try{var
d=a(b,0);a(c,0);return d}catch(b){b=v(b);try{a(c,0)}catch(a){throw b}throw b}}function
s(b){try{var
c=[0,a(ea[3],b)];return c}catch(b){b=v(b);if(b===sh)return 0;if(a(bq[20],b))throw m;throw b}}function
t(c,a){var
d=e(D[32],a,0,1);try{e(D[32],a,0,0);var
f=0===c?4:1;e(D[80],a,f,1);var
g=1,b=g}catch(a){a=v(a);if(a[1]!==D[1])throw a;var
b=0}e(D[32],a,d,0);return b}function
u(a){var
c=e(D[32],a,0,1);try{e(D[32],a,0,0);var
b=e(D[80],a,0,1);return b}catch(b){b=v(b);if(b[1]===D[1]){e(D[32],a,c,0);return 0}throw b}}function
g(d,c,b){return t(d,c)?r(b,function(a){return u(c)}):a(b,0)}function
h(h){var
f=e(D[21],h,si,e1),j=a(D[28],f),d=a(b[1],gJ);function
n(f){for(;;){var
a=s(j);if(a){var
c=a[1];e(b[5],d,c[1],c[2]);continue}return 0}}try{g(0,f,n);a(i[77],j);var
o=e(D[21],h,sl,e1),p=[0,a(D[29],o),1,d];return p}catch(f){f=v(f);if(f===m){a(i[77],j);var
l=e(D[21],h,sj,e1),k=a(D[29],l);g(1,l,function(g){function
f(b,a){return e(ea[1],k,[0,b,a],sk)}c(b[11],f,d);return a(i[46],k)});return[0,k,1,d]}throw f}}function
w(c){var
d=c[1],e=c[3];return 0===c[2]?0:(a(i[59],d),a(b[2],e),c[2]=0,0)}function
n(c,j,h){var
d=c[1],k=c[3];if(0===c[2])throw f;var
l=a(D[31],d);e(b[5],k,j,h);return g(1,l,function(b){e(ea[1],d,[0,j,h],sm);return a(i[46],d)})}function
o(a,d){var
e=a[3];if(0===a[2])throw f;return c(b[7],e,d)}return[0,q,h,o,n,w,function(c,e){var
b=[d,function(b){try{var
a=[0,h(c)];return a}catch(a){return 0}}];return function(c){var
f=k(b),g=l===f?b[1]:d===f?a(j[2],b):b;if(g){var
h=g[1];try{var
m=o(h,c);return m}catch(b){b=v(b);if(b===M){var
i=a(e,c);n(h,c,i);return i}throw b}}return a(e,c)}}]}];aX(749,cU,"Micromega_plugin.Persistent_cache");var
sn=0;function
so(d,c,b){var
f=a(D[94],0)[1],g=a(c,b),h=a(D[94],0)[1]-f;e(n[2],sp,d,h);a(i[46],i[24]);return g}var
eI=i[7],f8=[0,eI],eJ=[0,1],f9=[0,eI];function
f_(a){return[0,eJ[1],f9[1]]}function
eK(a){return f8[1]}function
iV(b,a){function
c(b){var
c=b?b[1]:eI;a[1]=c;return 0}function
d(b){return[0,a[1]]}return[0,0,e(h[17],i[16],b,sq),b,d,c]}function
sr(a){eJ[1]=a;return 0}var
su=[0,0,st,ss,function(a){return eJ[1]},sr],sw=iV(sv,f8);c(f[42][2],0,sw);var
sy=iV(sx,f9);c(f[42][2],0,sy);c(f[42][1],0,su);function
bt(d,b){if(typeof
b==="number")return 0===b?c(i[49],d,sz):c(i[49],d,sA);else
switch(b[0]){case
0:return c(i[49],d,sB);case
1:return F(n[1],d,sC,m[32][3],b[2]);case
2:return B(n[1],d,sD,bt,b[1],bt,b[2]);case
3:return B(n[1],d,sE,bt,b[1],bt,b[2]);case
4:return F(n[1],d,sF,bt,b[1]);default:var
e=b[2],g=b[3],h=b[1],j=e?a(f[5][1][8],e[1]):sH;return d1(n[1],d,sG,bt,h,j,bt,g)}}function
aQ(c,b){if(typeof
b==="number")return 0===b?0:1;else
switch(b[0]){case
0:return[0,b[1]];case
1:var
d=b[3],e=b[2];return[1,a(c,b[1]),e,d];case
2:var
f=b[1],g=aQ(c,b[2]);return[2,aQ(c,f),g];case
3:var
h=b[1],i=aQ(c,b[2]);return[3,aQ(c,h),i];case
4:return[4,aQ(c,b[1])];default:var
j=b[2],k=b[1],l=aQ(c,b[3]);return[5,aQ(c,k),j,l]}}function
a6(c,b){if(typeof
b==="number")return 0===b?0:1;else
switch(b[0]){case
0:return[0,a(c,b[1])];case
1:return[1,b[1],b[2],b[3]];case
2:var
d=b[1],e=a6(c,b[2]);return[2,a6(c,d),e];case
3:var
f=b[1],g=a6(c,b[2]);return[3,a6(c,f),g];case
4:return[4,a6(c,b[1])];default:var
h=b[2],i=b[1],j=a6(c,b[3]);return[5,a6(c,i),h,j]}}function
f$(a){if(typeof
a!=="number"&&5===a[0]){var
b=a[2];if(b){var
c=b[1];return[0,c,f$(a[3])]}}return 0}var
eL=0,sI=0;function
eM(I,H,m,l,b){function
j(b,a){return c(i[22],b,a)}function
k(b,e){if(e){var
h=e[2],d=e[1],i=c(l,b[1],d[1]);if(i){if(a(m,i[1]))return[0,[0,b[2],[0,d[2],0]]];var
f=k(b,h);return 0===f[0]?[0,f[1]]:[1,[0,d,f[1]]]}var
g=k(b,h);return 0===g[0]?[0,g[1]]:[1,[0,d,g[1]]]}var
j=c(l,b[1],b[1]);return j?a(m,j[1])?[0,[0,b[2],0]]:[1,[0,b,0]]:[1,[0,b,0]]}function
g(a,d){if(a){var
m=a[1],f=g(a[2],d),l=f[2],n=f[1],j=function(l,f){var
g=f[2],h=f[1],a=m,d=l;for(;;){if(a){var
j=a[2],e=k(a[1],d);if(0!==e[0]){var
a=j,d=e[1];continue}var
b=[0,e[1]]}else
var
b=[1,d];return 0===b[0]?[0,h,c(i[22],g,b[1])]:[0,[0,b[1],h],g]}},b=e(h[17],j,d,sJ),o=b[1],p=c(i[22],l,b[2]);return[0,c(i[22],n,o),p]}return[0,eL,0]}function
f(O,N){var
b=O,d=N;for(;;)if(typeof
d==="number")return 0===d?b?[0,eL,0]:[0,cV,0]:b?[0,cV,0]:[0,eL,0];else
switch(d[0]){case
0:return b?[0,cV,0]:[0,cV,0];case
1:var
e=d[2],k=d[1],P=0;if(b)var
L=a(H,k),M=function(a){function
b(a){return[0,a,e]}return c(h[13],b,a)},l=c(h[13],M,L);else
var
J=a(I,k),K=function(a){function
b(a){return[0,a,e]}return c(h[13],b,a)},l=c(h[13],K,J);return[0,l,P];case
2:var
Q=d[2],m=f(b,d[1]),n=m[2],o=m[1],p=f(b,Q),q=p[2],r=p[1];if(b){var
R=c(i[22],n,q);return[0,j(o,r),R]}var
s=g(o,r),S=s[1],T=c(i[22],q,s[2]);return[0,S,c(i[22],n,T)];case
3:var
U=d[2],t=f(b,d[1]),u=t[2],v=t[1],w=f(b,U),x=w[2],y=w[1];if(b){var
z=g(v,y),V=z[1],W=c(i[22],x,z[2]);return[0,V,c(i[22],u,W)]}var
X=c(i[22],u,x);return[0,j(v,y),X];case
4:var
b=1-b,d=d[1];continue;default:var
Y=d[3],A=f(1-b,d[1]),B=A[2],C=A[1],D=f(b,Y),E=D[2],F=D[1];if(b){var
G=g(C,F),Z=G[1],_=c(i[22],E,G[2]);return[0,Z,c(i[22],B,_)]}var
$=c(i[22],B,E);return[0,j(C,F),$]}}return f(1,b)}var
aq=a(d_[1],[0,Z]),sK=a(bH[1],[0,Z]);function
iW(f,a){function
d(h,g){var
b=h,a=g;for(;;){if(a){var
e=a[2],i=a[1];if(c(aq[3],b,f))return[0,i,d(b+1|0,e)];var
b=b+1|0,a=e;continue}return 0}}return d(0,a)}var
sL=c(i[22],f[71][27],ga),sM=c(i[22],f[71][26],sL),sN=c(i[22],[0,iX,0],sM),iY=c(i[22],f[71][24],sN);function
L(d,c,b){var
g=e(f[71][28],d,c,b),h=a(f[49][5],g);return a(f[8][3],h)}var
sO=f[71][24];function
an(a){return L(sP,sO,a)}function
u(a){return L(sQ,iY,a)}function
aG(a){return L(sR,iZ,a)}function
ao(a){return L(sS,i0,a)}function
aR(a){return L(sT,i1,a)}function
aS(a){return L(sU,ga,a)}var
a7=[d,function(a){return an(sV)}],a8=[d,function(a){return an(sW)}],cW=[d,function(a){return an(sX)}],cX=[d,function(a){return an(sY)}],a9=[d,function(a){return an(sZ)}],ar=[d,function(a){return an(s0)}],cY=[d,function(a){return u(s1)}],cZ=[d,function(a){return u(s2)}],s4=[d,function(a){return u(s3)}],c0=[d,function(a){return an(s5)}],c1=[d,function(a){return an(s6)}],s8=[d,function(a){return an(s7)}],c2=[d,function(a){return aG(s9)}],c3=[d,function(a){return aG(s_)}],c4=[d,function(a){return an(s$)}],tb=[d,function(a){return an(ta)}],td=[d,function(a){return an(tc)}],tf=[d,function(a){return aG(te)}],a_=[d,function(a){return aG(tg)}],a$=[d,function(a){return aG(th)}],ba=[d,function(a){return aG(ti)}],bb=[d,function(a){return aG(tj)}],c5=[d,function(a){return aG(tk)}],c6=[d,function(a){return aG(tl)}],c7=[d,function(a){return aG(tm)}],c8=[d,function(a){return u(tn)}],bc=[d,function(a){return u(to)}],tq=[d,function(a){return u(tp)}],as=[d,function(a){return u(tr)}],tt=[d,function(a){return u(ts)}],c9=[d,function(a){return aS(tu)}],c_=[d,function(a){return aS(tv)}],c$=[d,function(a){return aS(tw)}],da=[d,function(a){return aS(tx)}],db=[d,function(a){return aS(ty)}],dc=[d,function(a){return aS(tz)}],dd=[d,function(a){return aS(tA)}],de=[d,function(a){return aS(tB)}],df=[d,function(a){return aS(tC)}],at=[d,function(a){return u(tD)}],au=[d,function(a){return u(tE)}],tG=[d,function(a){return u(tF)}],tI=[d,function(a){return u(tH)}],tK=[d,function(a){return u(tJ)}],tM=[d,function(a){return u(tL)}],tO=[d,function(a){return u(tN)}],i2=[d,function(a){return aR(tP)}],i3=[d,function(a){return aR(tQ)}],i4=[d,function(a){return aR(tR)}],i5=[d,function(a){return aR(tS)}],av=[d,function(a){return an(tT)}],b6=[d,function(a){return aR(tU)}],b7=[d,function(a){return aR(tV)}],b8=[d,function(a){return aR(tW)}],b9=[d,function(a){return aR(tX)}],b_=[d,function(a){return aR(tY)}],t0=[d,function(a){return u(tZ)}],t2=[d,function(a){return u(t1)}],i6=[d,function(a){return u(t3)}],i7=[d,function(a){return u(t4)}],i8=[d,function(a){return u(t5)}],b$=[d,function(a){return u(t6)}],ca=[d,function(a){return u(t7)}],cb=[d,function(a){return u(t8)}],cc=[d,function(a){return u(t9)}],cd=[d,function(a){return u(t_)}],i9=[d,function(a){return ao(t$)}],i_=[d,function(a){return ao(ua)}],i$=[d,function(a){return ao(ub)}],ja=[d,function(a){return ao(uc)}],ae=[d,function(a){return ao(ud)}],aH=[d,function(a){return ao(ue)}],aT=[d,function(a){return ao(uf)}],af=[d,function(a){return ao(ug)}],ui=[d,function(a){return ao(uh)}],bd=[d,function(a){return ao(uj)}],ce=[d,function(a){return ao(uk)}],be=[d,function(a){return ao(ul)}],bf=[d,function(a){return ao(um)}],dg=[d,function(a){return u(un)}],dh=[d,function(a){return u(uo)}],di=[d,function(a){return u(up)}],dj=[d,function(a){return u(uq)}],dk=[d,function(a){return u(ur)}],dl=[d,function(a){return u(us)}],dm=[d,function(a){return u(ut)}],dn=[d,function(a){return u(uu)}],dp=[d,function(a){return u(uv)}],dq=[d,function(a){return u(uw)}],dr=[d,function(a){return u(ux)}],ds=[d,function(a){return u(uy)}],dt=[d,function(a){return u(uz)}],du=[d,function(a){return u(uA)}],dv=[d,function(a){return u(uB)}],dw=[d,function(a){return u(uC)}],dx=[d,function(a){return u(uD)}],dy=[d,function(a){return u(uE)}],dz=[d,function(a){return u(uF)}],dA=[d,function(a){return u(uG)}],dB=[d,function(a){return u(uH)}],dC=[d,function(a){return u(uI)}],dD=[d,function(a){return u(uJ)}],uL=[d,function(a){return u(uK)}],uP=[d,function(a){return L(uO,uN,uM)}],uT=[d,function(a){return L(uS,uR,uQ)}],dE=[d,function(a){return L(uW,uV,uU)}],dF=[d,function(a){return L(uZ,uY,uX)}],dG=[d,function(a){return L(u2,u1,u0)}],dH=[d,function(a){return L(u5,u4,u3)}],dI=[d,function(a){return L(u8,u7,u6)}],dJ=[d,function(a){return L(u$,u_,u9)}],dK=[d,function(a){return L(vc,vb,va)}],dL=[d,function(a){return L(vf,ve,vd)}],vj=[d,function(a){return L(vi,vh,vg)}],vn=[d,function(a){return L(vm,vl,vk)}],vr=[d,function(a){return L(vq,vp,vo)}],vv=[d,function(a){return L(vu,vt,vs)}],dM=[d,function(a){return L(vy,vx,vw)}],vC=[d,function(a){return L(vB,vA,vz)}];function
vD(b){if(typeof
b==="number")return vE;else
switch(b[0]){case
0:return b[1];case
1:return a(i[20],b[1]);case
2:return vF;case
3:return b[1];default:return vG}}var
N=[aZ,vH,aY(0)];function
cf(b,e){var
a=c(f[8][4],b,e);switch(a[0]){case
9:var
g=a[2],d=c(f[8][4],b,a[1]);if(12===d[0])return[0,d[1][1][2],g];throw N;case
12:return[0,a[1][1][2],[0]];default:throw N}}function
gb(a,d){var
b=cf(a,d),c=b[1],e=b[2];if(1===c)return 0;if(2===c)return[0,gb(a,x(e,0)[1])];throw N}function
jb(c,b){var
d=a(m[29][1],b);return e(n[1],c,vI,d)}function
eN(b){if(b){var
c=k(c1),g=[0,eN(b[1])],h=l===c?c1[1]:d===c?a(j[2],c1):c1;return a(f[8][14],[0,h,g])}var
e=k(c0);return l===e?c0[1]:d===e?a(j[2],c0):c0}function
cg(a,e){var
b=cf(a,e),c=b[2],d=b[1]-1|0;if(2<d>>>0)throw N;switch(d){case
0:return[0,cg(a,x(c,0)[1])];case
1:return[1,cg(a,x(c,0)[1])];default:return 0}}function
ax(b){if(typeof
b==="number"){var
c=k(a_);return l===c?a_[1]:d===c?a(j[2],a_):a_}else{if(0===b[0]){var
e=k(ba),h=[0,ax(b[1])],i=l===e?ba[1]:d===e?a(j[2],ba):ba;return a(f[8][14],[0,i,h])}var
g=k(a$),m=[0,ax(b[1])],n=l===g?a$[1]:d===g?a(j[2],a$):a$;return a(f[8][14],[0,n,m])}}function
dN(c,b){var
d=a(m[29][2],b);return e(n[1],c,vJ,d)}function
jc(b){if(b){var
c=k(c3),g=[0,ax(b[1])],h=l===c?c3[1]:d===c?a(j[2],c3):c3;return a(f[8][14],[0,h,g])}var
e=k(c2);return l===e?c2[1]:d===e?a(j[2],c2):c2}function
gc(b){if(typeof
b==="number"){var
c=k(a_);return l===c?a_[1]:d===c?a(j[2],a_):a_}else{if(0===b[0]){var
e=k(ba),h=[0,gc(b[1])],i=l===e?ba[1]:d===e?a(j[2],ba):ba;return a(f[8][14],[0,i,h])}var
g=k(a$),m=[0,gc(b[1])],n=l===g?a$[1]:d===g?a(j[2],a$):a$;return a(f[8][14],[0,n,m])}}function
vK(c,b){var
d=a(m[29][4],b);return e(n[1],c,vL,d)}function
jd(d,b){var
e=a(m[29][3],b),f=a(i[20],e);return c(i[49],d,f)}function
vM(i,h,g,e,b){var
m=b[1],n=a(e,b[2]),c=k(c4),o=[0,i,h,a(g,m),n],p=l===c?c4[1]:d===c?a(j[2],c4):c4;return a(f[8][14],[0,p,o])}function
bN(a,e){var
b=cf(a,e),c=b[2],d=b[1]-1|0;if(2<d>>>0)throw N;switch(d){case
0:return 0;case
1:return[0,cg(a,x(c,0)[1])];default:return[1,cg(a,x(c,0)[1])]}}function
bu(b){if(typeof
b==="number"){var
c=k(c5);return l===c?c5[1]:d===c?a(j[2],c5):c5}else{if(0===b[0]){var
e=k(c6),h=[0,ax(b[1])],i=l===e?c6[1]:d===e?a(j[2],c6):c6;return a(f[8][14],[0,i,h])}var
g=k(c7),m=[0,ax(b[1])],n=l===g?c7[1]:d===g?a(j[2],c7):c7;return a(f[8][14],[0,n,m])}}function
je(c,b){var
d=a(m[29][7],b),f=a(q[33],d);return e(n[1],c,vN,f)}function
vO(b){var
e=a(m[17],b),g=ax(a(m[30][6],e)),h=a(m[18],b),c=k(as),i=[0,bu(a(m[30][7],h)),g],n=l===c?as[1]:d===c?a(j[2],as):as;return a(f[8][14],[0,n,i])}function
eO(b){var
e=ax(b[2]),c=k(as),g=[0,bu(b[1]),e],h=l===c?as[1]:d===c?a(j[2],as):as;return a(f[8][14],[0,h,g])}function
dO(b,m){var
g=c(f[8][4],b,m);if(9===g[0]){var
h=g[2],i=k(as),n=g[1],o=l===i?as[1]:d===i?a(j[2],as):as;if(e(f[8][61],b,n,o)){var
p=cg(b,x(h,1)[2]);return[0,bN(b,x(h,0)[1]),p]}throw N}throw N}function
bg(b,a){if(typeof
a==="number")return 0===a?c(i[49],b,vP):c(i[49],b,vQ);else
switch(a[0]){case
0:return c(i[49],b,vR);case
1:return je(b,a[1]);case
2:return B(n[1],b,vS,bg,a[1],bg,a[2]);case
3:return B(n[1],b,vT,bg,a[1],bg,a[2]);case
4:return B(n[1],b,vU,bg,a[1],bg,a[2]);case
5:return F(n[1],b,vV,bg,a[1]);default:return F(n[1],b,vW,bg,a[1])}}function
bh(b){if(typeof
b==="number"){if(0===b){var
c=k(c9);return l===c?c9[1]:d===c?a(j[2],c9):c9}var
e=k(c_);return l===e?c_[1]:d===e?a(j[2],c_):c_}else
switch(b[0]){case
0:var
g=k(c$),q=[0,eO(b[1])],r=l===g?c$[1]:d===g?a(j[2],c$):c$;return a(f[8][14],[0,r,q]);case
1:var
h=k(da),s=[0,bu(b[1])],t=l===h?da[1]:d===h?a(j[2],da):da;return a(f[8][14],[0,t,s]);case
2:var
u=b[1],v=bh(b[2]),i=k(db),w=[0,bh(u),v],x=l===i?db[1]:d===i?a(j[2],db):db;return a(f[8][14],[0,x,w]);case
3:var
y=b[1],z=bh(b[2]),m=k(dc),A=[0,bh(y),z],B=l===m?dc[1]:d===m?a(j[2],dc):dc;return a(f[8][14],[0,B,A]);case
4:var
C=b[1],D=bh(b[2]),n=k(dd),E=[0,bh(C),D],F=l===n?dd[1]:d===n?a(j[2],dd):dd;return a(f[8][14],[0,F,E]);case
5:var
o=k(de),G=[0,bh(b[1])],H=l===o?de[1]:d===o?a(j[2],de):de;return a(f[8][14],[0,H,G]);default:var
p=k(df),I=[0,bh(b[1])],J=l===p?df[1]:d===p?a(j[2],df):df;return a(f[8][14],[0,J,I])}}function
bi(a,e){var
c=cf(a,e),b=c[2],d=c[1]-1|0;if(7<d>>>0)throw N;switch(d){case
0:return 0;case
1:return 1;case
2:return[0,dO(a,x(b,0)[1])];case
3:var
f=bi(a,x(b,1)[2]);return[2,bi(a,x(b,0)[1]),f];case
4:var
g=bi(a,x(b,1)[2]);return[3,bi(a,x(b,0)[1]),g];case
5:var
h=bi(a,x(b,1)[2]);return[4,bi(a,x(b,0)[1]),h];case
6:return[5,bi(a,x(b,0)[1])];default:return[6,bi(a,x(b,0)[1])]}}function
jf(a,b,g){var
d=cf(a,g),e=d[2],f=d[1];if(1===f)return 0;if(2===f){var
h=jf(a,b,x(e,2)[3]);return[0,c(b,a,x(e,1)[2]),h]}throw N}function
jg(c,e,b){if(b){var
i=b[1],m=jg(c,e,b[2]),g=k(cY),n=[0,c,a(e,i),m],o=l===g?cY[1]:d===g?a(j[2],cY):cY;return a(f[8][14],[0,o,n])}var
h=k(cZ),p=[0,c],q=l===h?cZ[1]:d===h?a(j[2],cZ):cZ;return a(f[8][14],[0,q,p])}function
vX(f,e,b,d,a){function
c(d,a){if(a){var
e=a[2],f=a[1];return e?B(n[1],d,vY,b,f,c,e):F(n[1],d,vZ,b,f)}return 0}return B(n[1],d,v0,f,c,a,e)}function
gd(e,d,a){function
b(d,a){switch(a[0]){case
0:return c(e,d,a[1]);case
1:return F(n[1],d,v1,dN,a[1]);case
2:return B(n[1],d,v2,b,a[1],b,a[2]);case
3:return B(n[1],d,v3,b,a[1],b,a[2]);case
4:return B(n[1],d,v4,b,a[1],b,a[2]);case
5:return F(n[1],d,v5,b,a[1]);default:return B(n[1],d,v6,b,a[1],jd,a[2])}}return b(d,a)}function
ge(e,q,b){function
c(b){switch(b[0]){case
0:var
g=k(dh),r=[0,e,a(q,b[1])],s=l===g?dh[1]:d===g?a(j[2],dh):dh;return a(f[8][14],[0,s,r]);case
1:var
h=k(dg),t=[0,e,ax(b[1])],u=l===h?dg[1]:d===h?a(j[2],dg):dg;return a(f[8][14],[0,u,t]);case
2:var
v=b[1],w=c(b[2]),i=k(di),x=[0,e,c(v),w],y=l===i?di[1]:d===i?a(j[2],di):di;return a(f[8][14],[0,y,x]);case
3:var
z=b[1],A=c(b[2]),m=k(dl),B=[0,e,c(z),A],C=l===m?dl[1]:d===m?a(j[2],dl):dl;return a(f[8][14],[0,C,B]);case
4:var
D=b[1],E=c(b[2]),n=k(dk),F=[0,e,c(D),E],G=l===n?dk[1]:d===n?a(j[2],dk):dk;return a(f[8][14],[0,G,F]);case
5:var
o=k(dj),H=[0,e,c(b[1])],I=l===o?dj[1]:d===o?a(j[2],dj):dj;return a(f[8][14],[0,I,H]);default:var
J=b[1],K=jc(b[2]),p=k(dm),L=[0,e,c(J),K],M=l===p?dm[1]:d===p?a(j[2],dm):dm;return a(f[8][14],[0,M,L])}}return c(b)}function
gf(e,m,b){function
c(b){switch(b[0]){case
0:var
g=k(dp),n=[0,e,a(m,b[1])],o=l===g?dp[1]:d===g?a(j[2],dp):dp;return a(f[8][14],[0,o,n]);case
1:var
p=b[1],q=c(b[2]),h=k(dq),r=[0,e,ax(p),q],s=l===h?dq[1]:d===h?a(j[2],dq):dq;return a(f[8][14],[0,s,r]);default:var
t=b[2],u=b[1],v=c(b[3]),w=ax(t),i=k(dn),x=[0,e,c(u),w,v],y=l===i?dn[1]:d===i?a(j[2],dn):dn;return a(f[8][14],[0,y,x])}}return c(b)}function
eP(d,c,a){function
b(c,a){switch(a[0]){case
0:return F(n[1],c,v7,d,a[1]);case
1:return B(n[1],c,v8,dN,a[1],b,a[2]);default:return bQ(n[1],c,v9,b,a[1],dN,a[2],b,a[3])}}return b(c,a)}function
v_(d,b,a){function
e(b,a){function
e(a){var
c=a[2],e=a[1][1],f=m[32][3];function
g(a,b){return eP(d,a,b)}return B(n[1],b,v$,g,e,f,c)}return c(h[11],e,a)}function
f(a){return F(n[1],b,wa,e,a)}return c(h[11],f,a)}function
wb(b,g,i){var
h=k(b),c=l===h?b[1]:d===h?a(j[2],b):b;function
e(b){if(typeof
b==="number"){var
h=k(dD),r=[0,c],s=l===h?dD[1]:d===h?a(j[2],dD):dD;return a(f[8][14],[0,s,r])}else
switch(b[0]){case
0:var
i=k(dx),t=[0,c,eN(b[1])],u=l===i?dx[1]:d===i?a(j[2],dx):dx;return a(f[8][14],[0,u,t]);case
1:var
m=k(dy),v=[0,c,gf(c,g,b[1])],w=l===m?dy[1]:d===m?a(j[2],dy):dy;return a(f[8][14],[0,w,v]);case
2:var
x=b[1],y=e(b[2]),n=k(dA),z=[0,c,gf(c,g,x),y],A=l===n?dA[1]:d===n?a(j[2],dA):dA;return a(f[8][14],[0,A,z]);case
3:var
B=b[1],C=e(b[2]),o=k(dz),D=[0,c,e(B),C],E=l===o?dz[1]:d===o?a(j[2],dz):dz;return a(f[8][14],[0,E,D]);case
4:var
F=b[1],G=e(b[2]),p=k(dB),H=[0,c,e(F),G],I=l===p?dB[1]:d===p?a(j[2],dB):dB;return a(f[8][14],[0,I,H]);default:var
q=k(dC),J=[0,c,a(g,b[1])],K=l===q?dC[1]:d===q?a(j[2],dC):dC;return a(f[8][14],[0,K,J])}}return e(i)}function
wc(e,b,a){function
d(b,a){if(typeof
a==="number")return c(n[1],b,wd);else
switch(a[0]){case
0:return F(n[1],b,we,jb,a[1]);case
1:var
f=a[1],g=function(a,b){return eP(e,a,b)};return F(n[1],b,wf,g,f);case
2:var
h=a[2],i=a[1],j=function(a,b){return eP(e,a,b)};return B(n[1],b,wg,j,i,d,h);case
3:return B(n[1],b,wh,d,a[1],d,a[2]);case
4:return B(n[1],b,wi,d,a[1],d,a[2]);default:return F(n[1],b,wj,e,a[1])}}return d(b,a)}function
jh(i){switch(i){case
0:var
b=k(dr);return l===b?dr[1]:d===b?a(j[2],dr):dr;case
1:var
c=k(ds);return l===c?ds[1]:d===c?a(j[2],ds):ds;case
2:var
e=k(dt);return l===e?dt[1]:d===e?a(j[2],dt):dt;case
3:var
f=k(dv);return l===f?dv[1]:d===f?a(j[2],dv):dv;case
4:var
g=k(du);return l===g?du[1]:d===g?a(j[2],du):du;default:var
h=k(dw);return l===h?dw[1]:d===h?a(j[2],dw):dw}}function
ji(a,b){switch(b){case
0:return c(n[1],a,wk);case
1:return c(n[1],a,wl);case
2:return c(n[1],a,wm);case
3:return c(n[1],a,wn);case
4:return c(n[1],a,wo);default:return c(n[1],a,wp)}}function
wq(b,c,a){var
d=a[3],e=a[2],f=a[1];function
g(a,c){return gd(b,a,c)}function
h(a,c){return gd(b,a,c)}return bQ(n[1],c,wr,h,f,ji,e,g,d)}function
ws(c,e,b){var
h=b[2],i=b[1],m=ge(c,e,b[3]),n=jh(h),g=k(dM),o=[0,c,ge(c,e,i),n,m],p=l===g?dM[1]:d===g?a(j[2],dM):dM;return a(f[8][14],[0,p,o])}function
dP(i,g,b){try{var
m=function(h){var
b=h[1],c=k(b),m=l===c?b[1]:d===c?a(j[2],b):b;return e(f[8][61],i,g,m)},n=c(h[29],m,b)[2];return n}catch(a){a=v(a);if(a===M)throw N;throw a}}var
gg=[0,[0,i2,5],[0,[0,i3,3],[0,[0,i5,4],[0,[0,i4,2],0]]]],gh=[0,[0,i9,5],[0,[0,i_,3],[0,[0,ja,4],[0,[0,i$,2],0]]]],gi=[0,[0,i7,4],[0,[0,i6,2],[0,[0,i8,0],0]]];function
gj(a,c,b){return aW(f[55][11],0,a[1],a[2],c,b)}function
jj(n,m){var
b=m[2],g=m[1],h=n[2],o=c(f[8][4],h,g);switch(o[0]){case
10:var
r=x(b,1)[2],s=x(b,0)[1];return[0,dP(h,g,gg),s,r];case
11:if(0===o[1][1][2]){var
p=k(av),t=l===p?av[1]:d===p?a(j[2],av):av;if(e(f[8][61],h,g,t)){var
q=k(bb),u=l===q?bb[1]:d===q?a(j[2],bb):bb;if(gj(n,x(b,0)[1],u)){var
v=x(b,2)[3];return[0,0,x(b,1)[2],v]}}throw N}break}return a(i[2],wt)}function
jk(n,m){var
b=m[2],g=m[1],h=n[2],o=c(f[8][4],h,g);switch(o[0]){case
10:var
r=x(b,1)[2],s=x(b,0)[1];return[0,dP(h,g,gh),s,r];case
11:if(0===o[1][1][2]){var
p=k(av),t=l===p?av[1]:d===p?a(j[2],av):av;if(e(f[8][61],h,g,t)){var
q=k(bc),u=l===q?bc[1]:d===q?a(j[2],bc):bc;if(gj(n,x(b,0)[1],u)){var
v=x(b,2)[3];return[0,0,x(b,1)[2],v]}}throw N}break}return a(i[2],wu)}function
jl(c,a){var
b=a[2],d=a[1],e=x(b,1)[2],f=x(b,0)[1];return[0,dP(c[2],d,gi),f,e]}function
wv(b,a){return 12===c(f[8][4],b,a)[0]?1:0}function
jm(i,g,b){try{var
m=function(h){var
b=h[1],c=k(b),m=l===c?b[1]:d===c?a(j[2],b):b;return e(f[8][61],i,g,m)},n=c(h[29],m,b)[2];return n}catch(a){a=v(a);if(a===M)return ww;throw a}}function
wx(g,i,c){function
d(a,c,b){if(a){var
g=a[1],j=a[2];if(e(f[8][61],i,g,b))return[0,a,c];var
h=d(j,c+1|0,b);return[0,[0,g,h[1]],h[2]]}return[0,[0,b,0],c]}var
b=d(g,1,c),h=b[1];return[0,h,a(m[30][2],b[2])]}function
wy(g,d,c){var
a=g,b=1;for(;;){if(a){var
h=a[2];if(e(f[8][61],d,a[1],c))return b;var
a=h,b=b+1|0;continue}throw[0,jn,wz]}}var
wA=0,bO=[0,wx,wy,wA,function(a){return a}];function
eQ(d,j,t,s,g,b){function
m(c,b){var
a=e(bO[1],c,d,b);return[0,[1,a[2]],a[1]]}function
h(b,g){function
u(f,e,a){var
g=a[2],b=h(f,a[1]),i=b[1],d=h(b[2],g),j=d[2];return[0,c(e,i,d[1]),j]}try{var
C=[0,[0,a(j,g)],b];return C}catch(j){j=v(j);if(j===N){var
l=c(f[8][4],d,g);if(9===l[0]){var
i=l[2],n=l[1];if(10===c(f[8][4],d,n)[0]){var
k=jm(d,n,s);if(typeof
k==="number"){if(0===k){var
o=h(b,x(i,0)[1]);return[0,[5,o[1]],o[2]]}try{var
q=h(b,x(i,0)[1]),w=q[2],y=q[1],z=[0,c(t,y,x(i,1)[2]),w];return z}catch(c){c=v(c);if(a(bq[20],c)){var
p=e(bO[1],b,d,g);return[0,[1,p[2]],p[1]]}throw c}}else{if(0===k[0]){var
A=k[1],B=x(i,1)[2];return u(b,A,[0,x(i,0)[1],B])}var
r=e(bO[1],b,d,g);return[0,[1,r[2]],r[1]]}}return m(b,g)}return m(b,g)}throw j}}return h(g,b)}var
wB=[0,[0,b8,0],[0,[0,b_,1],0]],wC=[0,[0,b9,[0,function(b,a){return[4,b,a]}]],wB],wD=[0,[0,b7,[0,function(b,a){return[3,b,a]}]],wC],jo=[0,[0,b6,[0,function(b,a){return[2,b,a]}]],wD],wE=[0,[0,cb,0],[0,[0,cd,1],0]],wF=[0,[0,cc,[0,function(b,a){return[4,b,a]}]],wE],wG=[0,[0,ca,[0,function(b,a){return[3,b,a]}]],wF],jp=[0,[0,b$,[0,function(b,a){return[2,b,a]}]],wG],wH=[0,[0,aT,0],[0,[0,ce,1],0]],wI=[0,[0,af,[0,function(b,a){return[4,b,a]}]],wH],wJ=[0,[0,aH,[0,function(b,a){return[3,b,a]}]],wI],jq=[0,[0,ae,[0,function(b,a){return[2,b,a]}]],wJ],wK=0,wL=[0,[0,af,function(b,a){return[4,b,a]}],wK],wM=[0,[0,aH,function(b,a){return[3,b,a]}],wL],jr=[0,[0,ae,function(b,a){return[2,b,a]}],wM];function
eR(b,i){var
m=c(f[8][4],b,i);switch(m[0]){case
9:var
g=m[2],h=m[1];try{var
A=dP(b,h,jr),B=eR(b,x(g,0)[1]),C=c(A,B,eR(b,x(g,1)[2]));return C}catch(i){i=v(i);if(i===N){var
n=k(bd),u=l===n?bd[1]:d===n?a(j[2],bd):bd;if(e(f[8][61],b,h,u)){var
o=eR(b,x(g,0)[1]),w=a(s[gM],o);if(c(s[77],w,wN))throw N;return[5,o]}var
p=k(bf),y=l===p?bf[1]:d===p?a(j[2],bf):bf;if(e(f[8][61],b,h,y))return[0,dO(b,x(g,0)[1])];var
q=k(be),z=l===q?be[1]:d===q?a(j[2],be):be;if(e(f[8][61],b,h,z))return[1,bN(b,x(g,0)[1])];throw N}throw i}case
10:var
r=k(at),D=l===r?at[1]:d===r?a(j[2],at):at;if(e(f[8][61],b,i,D))return 0;var
t=k(au),E=l===t?au[1]:d===t?a(j[2],au):au;if(e(f[8][61],b,i,E))return 1;throw N;default:throw N}}function
js(b,a){return eR(b,a)}function
jt(b){function
c(e,d){var
c=bN(b,d);if(typeof
c!=="number"&&1===c[0])return wO;return[6,e,a(s[12][15],c)]}function
d(a){return bN(b,a)}return function(a,e){return eQ(b,d,c,jo,a,e)}}function
ju(d){function
b(e,f){var
b=bN(d,f);if(typeof
b!=="number"&&1===b[0]){if(0===e[0])return[0,c(s[85],e[1],b)];a(i[27],wP);a(i[46],i[24]);throw N}return[6,e,a(s[12][15],b)]}function
e(a){return dO(d,a)}return function(a,c){return eQ(d,e,b,jp,a,c)}}function
jv(b){function
c(d,c){var
e=gb(b,c);return[6,d,a(s[7][1],e)]}function
d(a){return js(b,a)}return function(a,e){return eQ(b,d,c,jq,a,e)}}function
eS(o,j,n,m,h){var
b=h[2],d=c(f[8][4],b,m);if(9===d[0]){var
g=c(o,h,[0,d[1],d[2]]),p=g[3],q=g[1],k=e(j,b,n,g[2]),r=k[1],l=e(j,b,k[2],p);return[0,[0,r,q,l[1]],l[2]]}return a(i[2],wQ)}function
wR(a,b,c){return eS(jj,jt,a,b,c)}function
wS(a,b,c){return eS(jl,ju,a,b,c)}function
wT(a,b,c){return eS(jk,jv,a,b,c)}function
bw(a){if(typeof
a==="number")return 0===a?0:1;else
switch(a[0]){case
0:return 2;case
1:return[0,a[1]];case
2:var
b=a[1],c=bw(a[2]);return[1,bw(b),c];case
3:var
d=a[1],e=bw(a[2]);return[2,bw(d),e];case
4:return[3,bw(a[1])];default:var
f=a[1],g=bw(a[3]);return[4,bw(f),g]}}function
jw(b,a){return[2,b,a]}function
jx(b,a){return[3,b,a]}function
jy(b,a){return[2,[5,b,0,a],[5,a,0,b]]}function
jz(b,a){return[5,b,0,a]}function
dQ(e,d,b,a){if(typeof
b!=="number"&&0===b[0])if(typeof
a!=="number"&&0===a[0])return[0,d];return c(e,b,a)}function
wU(o,p,i,h,g){var
n=o[2];function
L(f,d,c){try{var
b=e(p,f,c,o),g=b[2],h=b[1],i=[0,[1,h,d,c],g,a(m[32][2],d)];return i}catch(b){b=v(b);if(a(bq[20],b))return[0,[0,c],f,d];throw b}}function
b(i,h,g){var
m=c(f[8][4],n,g);switch(m[0]){case
6:var
E=m[3],Q=m[2];if(e(f[8][53][2],n,1,E)){var
r=b(i,h,Q),R=r[1],s=b(r[2],r[3],E),S=s[3],T=s[2];return[0,dQ(jz,g,R,s[1]),T,S]}break;case
9:var
p=m[2],q=m[1],G=p.length-1;if(!(3<=G))switch(G){case
0:break;case
1:var
H=k(cW),U=p[1],V=l===H?cW[1]:d===H?a(j[2],cW):cW;if(e(f[8][61],n,q,V)){var
t=b(i,h,U);return[0,[4,t[1]],t[2],t[3]]}break;default:var
u=p[1],v=p[2],I=k(a7),W=l===I?a7[1]:d===I?a(j[2],a7):a7;if(e(f[8][61],n,q,W)){var
w=b(i,h,u),X=w[1],x=b(w[2],w[3],v),Y=x[3],Z=x[2];return[0,dQ(jw,g,X,x[1]),Z,Y]}var
J=k(a8),_=l===J?a8[1]:d===J?a(j[2],a8):a8;if(e(f[8][61],n,q,_)){var
y=b(i,h,u),$=y[1],z=b(y[2],y[3],v),aa=z[3],ab=z[2];return[0,dQ(jx,g,$,z[1]),ab,aa]}var
K=k(cX),ac=l===K?cX[1]:d===K?a(j[2],cX):cX;if(e(f[8][61],n,q,ac)){var
A=b(i,h,u),ad=A[1],B=b(A[2],A[3],v),ae=B[3],af=B[2];return[0,dQ(jy,g,ad,B[1]),af,ae]}}return L(i,h,g)}var
C=k(a9),O=l===C?a9[1]:d===C?a(j[2],a9):a9;if(e(f[8][61],n,g,O))return[0,0,i,h];var
D=k(ar),P=l===D?ar[1]:d===D?a(j[2],ar):ar;if(e(f[8][61],n,g,P))return[0,1,i,h];var
M=F(f[58][4],0,o[1],o[2],g);if(a(f[4][1],M))return[0,[0,g],i,h];throw N}return b(i,h,g)}function
wV(c,r,b){function
e(b){if(typeof
b==="number"){if(0===b){var
g=k(dE),s=[0,c],t=l===g?dE[1]:d===g?a(j[2],dE):dE;return a(f[8][14],[0,t,s])}var
h=k(dF),u=[0,c],v=l===h?dF[1]:d===h?a(j[2],dF):dF;return a(f[8][14],[0,v,u])}else
switch(b[0]){case
0:var
i=k(dK),w=[0,c,b[1]],x=l===i?dK[1]:d===i?a(j[2],dK):dK;return a(f[8][14],[0,x,w]);case
1:var
m=k(dJ),y=[0,c,a(r,b[1])],z=l===m?dJ[1]:d===m?a(j[2],dJ):dJ;return a(f[8][14],[0,z,y]);case
2:var
A=b[1],B=e(b[2]),n=k(dG),C=[0,c,e(A),B],D=l===n?dG[1]:d===n?a(j[2],dG):dG;return a(f[8][14],[0,D,C]);case
3:var
E=b[1],F=e(b[2]),o=k(dH),G=[0,c,e(E),F],H=l===o?dH[1]:d===o?a(j[2],dH):dH;return a(f[8][14],[0,H,G]);case
4:var
p=k(dI),I=[0,c,e(b[1])],J=l===p?dI[1]:d===p?a(j[2],dI):dI;return a(f[8][14],[0,J,I]);default:var
K=b[1],L=e(b[3]),q=k(dL),M=[0,c,e(K),L],N=l===q?dL[1]:d===q?a(j[2],dL):dL;return a(f[8][14],[0,N,M])}}return e(b)}function
jA(h,a){function
d(j,i){var
b=j,a=i;for(;;){if(typeof
a==="number")var
c=0;else
switch(a[0]){case
0:return e(bO[1],b,h,a[1])[1];case
4:var
a=a[1];continue;case
5:var
g=a[3],f=a[1],c=1;break;case
1:var
c=0;break;default:var
g=a[2],f=a[1],c=1}if(c){var
b=d(b,f),a=g;continue}return b}}return d(0,a)}function
jB(b){function
d(e){var
b=e;for(;;)switch(b[0]){case
0:return aq[1];case
1:var
f=a(m[29][2],b[1]);return a(aq[5],f);case
5:case
6:var
b=b[1];continue;default:var
g=b[1],h=d(b[2]),i=d(g);return c(aq[7],i,h)}}function
e(l){var
a=l;for(;;){if(typeof
a==="number")var
b=0;else
switch(a[0]){case
1:var
f=a[1],i=f[1],j=d(f[3]),k=d(i);return c(aq[7],k,j);case
4:var
a=a[1];continue;case
5:var
h=a[3],g=a[1],b=1;break;case
0:var
b=0;break;default:var
h=a[2],g=a[1],b=1}if(b){var
m=e(h),n=e(g);return c(aq[7],n,m)}return aq[1]}}return e(b)}var
wW=[d,function(x){function
o(c){var
b=c[1],e=k(b),f=c[2],g=l===e?b[1]:d===e?a(j[2],b):b;return[0,f,g]}var
p=c(h[13],o,gg),b=k(b_);function
q(b){var
c=a(m[29][3],b);return bu(a(m[30][5],c))}var
r=l===b?b_[1]:d===b?a(j[2],b_):b_,e=k(b9),s=l===e?b9[1]:d===e?a(j[2],b9):b9,f=k(b8),t=l===f?b8[1]:d===f?a(j[2],b8):b8,g=k(b7),u=l===g?b7[1]:d===g?a(j[2],b7):b7,i=k(b6),v=l===i?b6[1]:d===i?a(j[2],b6):b6,n=k(bb),w=l===n?bb[1]:d===n?a(j[2],bb):bb;return[0,w,bu,v,u,t,s,r,q,p]}],wX=[d,function(x){function
o(c){var
b=c[1],e=k(b),f=c[2],g=l===e?b[1]:d===e?a(j[2],b):b;return[0,f,g]}var
p=c(h[13],o,gi),b=k(cd);function
q(b){var
c=a(m[29][3],b);return bu(a(m[30][5],c))}var
r=l===b?cd[1]:d===b?a(j[2],cd):cd,e=k(cc),s=l===e?cc[1]:d===e?a(j[2],cc):cc,f=k(cb),t=l===f?cb[1]:d===f?a(j[2],cb):cb,g=k(ca),u=l===g?ca[1]:d===g?a(j[2],ca):ca,i=k(b$),v=l===i?b$[1]:d===i?a(j[2],b$):b$,n=k(c8),w=l===n?c8[1]:d===n?a(j[2],c8):c8;return[0,w,eO,v,u,t,s,r,q,p]}];function
jC(o){var
e=k(af),p=l===e?af[1]:d===e?a(j[2],af):af,g=k(ae),q=l===g?ae[1]:d===g?a(j[2],ae):ae,h=k(au),b=l===h?au[1]:d===h?a(j[2],au):au;function
i(c,b){return a(f[8][14],[0,q,[0,c,b]])}function
m(c,b){return a(f[8][14],[0,p,[0,c,b]])}var
n=i(b,b);function
c(a){return typeof
a==="number"?b:0===a[0]?i(b,m(n,c(a[1]))):m(n,c(a[1]))}return c(o)}function
wY(e){var
b=a(m[29][3],e);if(0===b){var
c=k(at);return l===c?at[1]:d===c?a(j[2],at):at}return jC(a(m[30][2],b))}function
aU(b){if(typeof
b==="number"){if(0===b){var
c=k(at);return l===c?at[1]:d===c?a(j[2],at):at}var
e=k(au);return l===e?au[1]:d===e?a(j[2],au):au}else
switch(b[0]){case
0:var
g=k(bf),q=[0,eO(b[1])],r=l===g?bf[1]:d===g?a(j[2],bf):bf;return a(f[8][14],[0,r,q]);case
1:var
h=k(be),s=[0,bu(b[1])],t=l===h?be[1]:d===h?a(j[2],be):be;return a(f[8][14],[0,t,s]);case
2:var
u=b[1],v=aU(b[2]),i=k(ae),w=[0,aU(u),v],x=l===i?ae[1]:d===i?a(j[2],ae):ae;return a(f[8][14],[0,x,w]);case
3:var
y=b[1],z=aU(b[2]),m=k(aH),A=[0,aU(y),z],B=l===m?aH[1]:d===m?a(j[2],aH):aH;return a(f[8][14],[0,B,A]);case
4:var
C=b[1],D=aU(b[2]),n=k(af),E=[0,aU(C),D],F=l===n?af[1]:d===n?a(j[2],af):af;return a(f[8][14],[0,F,E]);case
5:var
o=k(bd),G=[0,aU(b[1])],H=l===o?bd[1]:d===o?a(j[2],bd):bd;return a(f[8][14],[0,H,G]);default:var
p=k(aT),I=[0,aU(b[1])],J=l===p?aT[1]:d===p?a(j[2],aT):aT;return a(f[8][14],[0,J,I])}}var
wZ=[d,function(x){function
o(c){var
b=c[1],e=k(b),f=c[2],g=l===e?b[1]:d===e?a(j[2],b):b;return[0,f,g]}var
p=c(h[13],o,gh),b=k(ce);function
q(b){var
c=a(m[29][3],b);return eN(a(m[30][1],c))}var
r=l===b?ce[1]:d===b?a(j[2],ce):ce,e=k(af),s=l===e?af[1]:d===e?a(j[2],af):af,f=k(aT),t=l===f?aT[1]:d===f?a(j[2],aT):aT,g=k(aH),u=l===g?aH[1]:d===g?a(j[2],aH):aH,i=k(ae),v=l===i?ae[1]:d===i?a(j[2],ae):ae,n=k(bc),w=l===n?bc[1]:d===n?a(j[2],bc):bc;return[0,w,aU,v,u,t,s,r,q,p]}];function
gk(i,h,g){var
b=[0,i,h,g];for(;;){var
d=b[1];if(0===d)return b[3];var
c=b[2];if(c){var
e=c[1],j=c[2],b=[0,d-1|0,j,a(f[8][8],[0,e[1],e[2],b[3]])];continue}throw[0,C,w0]}}function
w1(p,g,b){var
u=jB(b),w=a(aq[21],u);function
x(b,a){return[0,a,b+1|0]}var
q=c(h[14],x,w),r=jA(p,b);function
y(b){var
d=g[1],e=c(n[4],w2,b[2]);return[0,a(f[5][1][6],e),d]}var
o=c(h[13],y,q);function
z(b,g){var
d=f[8][7],e=c(n[4],w3,b+1|0);return[0,a(f[5][1][6],e),d]}var
s=c(h[14],z,r);function
A(b,a){return[0,a[1],b[1]]}var
B=e(h[19],A,q,o);function
t(e,b){function
d(b){switch(b[0]){case
0:return a(g[2],b[1]);case
1:var
i=a(m[29][2],b[1]),j=e+c(h[33],i,q)|0;return a(f[8][9],j);case
2:var
k=b[1],l=d(b[2]),n=[0,d(k),l];return a(f[8][14],[0,g[3],n]);case
3:var
o=b[1],p=d(b[2]),r=[0,d(o),p];return a(f[8][14],[0,g[4],r]);case
4:var
s=b[1],t=d(b[2]),u=[0,d(s),t];return a(f[8][14],[0,g[6],u]);case
5:var
v=[0,d(b[1])];return a(f[8][14],[0,g[5],v]);default:var
w=b[1],x=a(g[8],b[2]),y=[0,d(w),x];return a(f[8][14],[0,g[7],y])}}return d(b)}function
C(b,i,e){try{var
p=[0,c(h[33],b,g[9]),[0,i,e]],q=a(f[8][14],p);return q}catch(b){b=v(b);if(b===M){var
m=k(av),n=[0,g[1],i,e],o=l===m?av[1]:d===m?a(j[2],av):av;return a(f[8][14],[0,o,n])}throw b}}function
i(h,g,b){if(typeof
b==="number"){if(0===b){var
n=k(a9);return l===n?a9[1]:d===n?a(j[2],a9):a9}var
o=k(ar);return l===o?ar[1]:d===o?a(j[2],ar):ar}else
switch(b[0]){case
0:var
y=h+e(bO[2],r,p,b[1])|0;return a(f[8][9],y);case
1:var
m=b[1],v=m[2],w=m[1],x=t(g,m[3]);return C(v,t(g,w),x);case
2:var
z=b[1],A=i(h,g,b[2]),q=k(a7),B=[0,i(h,g,z),A],D=l===q?a7[1]:d===q?a(j[2],a7):a7;return a(f[8][14],[0,D,B]);case
3:var
E=b[1],F=i(h,g,b[2]),s=k(a8),G=[0,i(h,g,E),F],H=l===s?a8[1]:d===s?a(j[2],a8):a8;return a(f[8][14],[0,H,G]);case
4:var
u=k(ar),I=b[1],J=l===u?ar[1]:d===u?a(j[2],ar):ar,K=i(h,g,I);return c(f[8][5],K,J);default:var
L=b[1],M=i(h+1|0,g+1|0,b[3]),N=i(h,g,L);return c(f[8][5],N,M)}}var
D=a(h[1],o),E=a(h[1],s),F=a6(function(b){var
d=e(bO[2],r,p,b),g=c(n[4],w4,d),h=a(f[5][1][6],g);return a(f[8][11],h)},b),G=a(h[6],B),H=a(h[6],s),I=i(a(h[1],o),0,b);function
J(a){return[0,[0,a[1]],a[2]]}var
K=gk(D,c(h[13],J,o),I);function
L(a){return[0,[0,a[1]],a[2]]}return[0,gk(E,c(h[13],L,s),K),H,G,F]}var
o=[0,iX,ga,iY,iZ,i0,i1,L,an,u,aG,ao,aR,aS,a7,a8,cW,cX,a9,ar,cY,cZ,s4,c0,c1,s8,c2,c3,c4,tb,td,tf,a_,a$,ba,bb,c5,c6,c7,c8,bc,tq,as,tt,c9,c_,c$,da,db,dc,dd,de,df,at,au,tG,tI,tK,tM,tO,i2,i3,i4,i5,av,b6,b7,b8,b9,b_,t0,t2,i6,i7,i8,b$,ca,cb,cc,cd,i9,i_,i$,ja,ae,aH,aT,af,ui,bd,ce,be,bf,dg,dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,dA,dB,dC,dD,uL,uP,uT,dE,dF,dG,dH,dI,dJ,dK,dL,vj,vn,vr,vv,dM,vC,vD,N,cf,gb,jb,eN,cg,ax,dN,jc,gc,vK,jd,vM,bN,bu,je,vO,eO,dO,bg,bh,bi,jf,jg,vX,dN,ax,gd,ge,gf,eP,v_,wb,wc,jh,ji,wq,ws,dP,gg,gh,gi,gj,jj,jk,jl,wv,jm,bO,eQ,jo,jp,jq,bN,dO,jr,js,jt,ju,jv,eS,wR,wS,wT,bw,jw,jx,jy,jz,dQ,wU,wV,jA,jB,wW,wX,jC,wY,aU,wZ,gk,w1,function(g,e){var
c=e,b=g;for(;;){if(b){var
d=b[1],h=b[2],i=d[3],j=d[2],k=a(f[5][1][6],d[1]),c=F(f[8][83],k,j,i,c),b=h;continue}return c}}];function
dR(d){var
b=d;for(;;){if(typeof
b!=="number")switch(b[0]){case
0:return[0,a(m[29][1],b[1]),0];case
2:var
b=b[2];continue;case
3:var
e=b[1],f=dR(b[2]),g=dR(e);return c(i[22],g,f);case
4:var
h=b[1],j=dR(b[2]),k=dR(h);return c(i[22],k,j)}return 0}}function
w5(a,f,e){return function(g){var
a=g;for(;;){if(a){var
d=a[1],i=a[2];try{var
j=c(h[5],e,d),k=c(h[5],f,d)===j?1:0,b=k}catch(a){a=v(a);if(a[1]!==jn)throw a;var
b=0}if(b){var
a=i;continue}return b}return 1}}(a)}function
w6(d,b,g){function
e(j,i){var
d=j,b=i;for(;;){if(typeof
b!=="number")switch(b[0]){case
0:var
k=a(m[29][1],b[1]),l=c(h[5],g,k)[2];return c(f[5][1][10][7],d,l);case
2:var
b=b[2];continue;case
3:case
4:var
n=b[2],d=e(d,b[1]),b=n;continue}return d}}return e(d,b)}function
jD(e,d,a){if(a){var
g=a[2],b=c(m[6],e,[0,a[1],d]);if(b){var
h=b[1],f=jD(e,d,g);return f?[0,[0,h,f[1]]]:0}return 0}return w7}function
w8(e,d){var
c=e,b=d;for(;;){if(b){var
g=b[2],h=[0,c,[0,a(f[7][6],b[1])]],c=a(f[7][17],h),b=g;continue}return c}}var
dS=[d,function(a){return e(o[7],w$,w_,w9)}],dT=[d,function(a){return e(o[7],xc,xb,xa)}],dU=[d,function(a){return e(o[7],xf,xe,xd)}],dV=[d,function(a){return e(o[7],xi,xh,xg)}];function
dW(c,b){if(typeof
b==="number"){var
e=k(dU),i=[0,c],m=l===e?dU[1]:d===e?a(j[2],dU):dU;return a(f[8][14],[0,m,i])}else{if(0===b[0]){var
g=k(dT),n=[0,c,b[1]],o=l===g?dT[1]:d===g?a(j[2],dT):dT;return a(f[8][14],[0,o,n])}var
p=b[2],q=b[1],r=dW(c,b[3]),h=k(dS),s=[0,c,dW(c,q),p,r],t=l===h?dS[1]:d===h?a(j[2],dS):dS;return a(f[8][14],[0,t,s])}}function
gl(b){if(b){var
c=b[1][1],d=0,f=function(d,b){var
e=b[1],f=a(m[30][2],b[2]);return F(s[88],c,f,e,d)};return e(h[16],f,d,b)}return 0}function
gm(b,a){return typeof
a==="number"?c(i[49],b,xj):0===a[0]?F(n[1],b,xk,o[a0],a[1]):bQ(n[1],b,xl,gm,a[1],o[a0],a[2],gm,a[3])}function
eT(b){if(typeof
b==="number"){var
c=o[56],n=k(c);return l===n?c[1]:d===n?a(j[2],c):c}else
switch(b[0]){case
0:var
t=b[1],u=eT(b[2]),v=[0,e(o[bR],o[35],o[d5],t),u],g=o[57],p=k(g),w=l===p?g[1]:d===p?a(j[2],g):g;return a(f[8][14],[0,w,v]);case
1:var
x=b[1],y=eT(b[2]),z=[0,e(o[bR],o[35],o[d5],x),y],h=o[58],q=k(h),A=l===q?h[1]:d===q?a(j[2],h):h;return a(f[8][14],[0,A,z]);default:var
i=o[55],r=k(i),B=b[3],C=b[2],D=b[1],E=l===r?i[1]:d===r?a(j[2],i):i,F=e(o[kZ],E,eT,B),G=e(o[bR],o[35],o[d5],C),H=[0,e(o[bR],o[35],o[d5],D),G,F],m=o[59],s=k(m),I=l===s?m[1]:d===s?a(j[2],m):m;return a(f[8][14],[0,I,H])}}function
bx(a){if(typeof
a==="number")return 1;else
switch(a[0]){case
0:return 1;case
1:return 1;case
2:return 1+bx(a[2])|0;case
5:return 1;default:var
b=a[1],c=bx(a[2]);return bx(b)+c|0}}function
eU(a){if(typeof
a==="number")return 1;else
switch(a[0]){case
0:var
b=a[2],c=bx(a[1]);return eU(b)+c|0;case
1:var
d=a[2],f=bx(a[1]);return eU(d)+f|0;default:var
g=a[3],i=a[2],j=a[1],k=0,l=function(b,a){return eU(a)+b|0},m=e(h[16],l,k,g),n=bx(i);return(bx(j)+n|0)+m|0}}function
jE(a){return eT(a)}function
aI(b,a){return B(n[1],b,xm,o[a0],a[1],o[141],a[2])}function
bP(d,b){if(typeof
b==="number")return c(n[1],d,xn);else
switch(b[0]){case
0:var
f=b[2],g=b[1],h=a(o[bl],o[a0]);return B(n[1],d,xo,h,g,bP,f);case
1:var
i=b[2],j=b[1],k=a(o[bl],o[a0]);return B(n[1],d,xp,k,j,bP,i);default:var
l=b[3],m=b[2],p=b[1],q=e(o[158],xr,xq,bP),r=a(o[bl],o[a0]),s=a(o[bl],o[a0]);return bQ(n[1],d,xs,s,p,r,m,q,l)}}function
gn(h,g,f,e,b){if(b){var
i=b[1],m=i[2],n=i[1],c=gn(h,g,f,e,b[2]),j=c[3],k=c[2],l=c[1];try{var
d=aW(o[kT],h,g,k,j,m),p=[0,[0,[0,n,d[1]],l],d[2],d[3]];return p}catch(b){b=v(b);if(a(bq[20],b))return[0,l,k,j];throw b}}return[0,0,f,e]}function
go(d,c,h,g,f){var
i=a(m[32][1],0),b=aW(o[kT],d,c,h,i,f),j=b[1],e=gn(d,c,b[2],b[3],g);return[0,e[1],j,e[2]]}var
dX=[d,function(q){var
b=o[55],f=k(b),i=l===f?b[1]:d===f?a(j[2],b):b,c=o[35],g=k(c),m=o[d5],n=l===g?c[1]:d===g?a(j[2],c):c,e=o[35],h=k(e),p=l===h?e[1]:d===h?a(j[2],e):e;return[0,p,n,m,i,jE]}],dY=[d,function(s){var
m=c(o[bR],o[39],o[d2]),b=o[e_],g=k(b),n=l===g?b[1]:d===g?a(j[2],b):b,e=o[39],h=k(e),p=o[d2],q=l===h?e[1]:d===h?a(j[2],e):e,f=o[39],i=k(f),r=l===i?f[1]:d===i?a(j[2],f):f;return[0,r,q,p,n,m]}],xt=[d,function(s){var
m=c(o[bR],o[39],o[d2]),b=o[e_],g=k(b),n=l===g?b[1]:d===g?a(j[2],b):b,e=o[43],h=k(e),p=o[kV],q=l===h?e[1]:d===h?a(j[2],e):e,f=o[40],i=k(f),r=l===i?f[1]:d===i?a(j[2],f):f;return[0,r,q,p,n,m]}];function
jF(d,b,a){return c(d,b,a)?1:c(d,a,b)?0:1}function
jG(d,b,a){function
e(b){return jF(d,a,b)}return c(h[23],e,b)}function
jH(h,g){var
d=0,b=g;for(;;){if(b){var
f=b[2],e=b[1];if(a(h,e))return[0,[0,e],c(i[22],d,f)];var
d=[0,e,d],b=f;continue}return[0,0,d]}}function
jI(b,a){return jH(function(c){return jG(b,a,c)},a)}function
gp(a,d){var
b=jI(a,d),c=b[1];if(c){var
e=c[1];return[0,e,gp(a,b[2])]}return 0}function
xu(b){return gp(function(c,b){var
d=a(f[8][3],b),g=a(f[8][3],c);return e(f[84][6],f[27][10],g,d)},b)}function
jJ(b,q,p,n,m){var
g=o[kh],h=k(g),r=[0,b[2]],s=l===h?g[1]:d===h?a(j[2],g):g,i=a(f[8][14],[0,s,r]),t=c(o[lb],b[2],b[3]),u=e(o[lj],i,t,m),v=gl(n),w=dW(b[1],v);function
x(m){var
r=a(f[78][29][7],m),g=k(dV),n=0,s=[0,[0,xv,q,p],0],t=[0,b[1]],v=l===g?dV[1]:d===g?a(j[2],dV):dV,x=[0,[0,xw,w,a(f[8][14],[0,v,t])],s],e=o[kq],h=k(e),y=[0,i],z=l===h?e[1]:d===h?a(j[2],e):e,A=[0,[0,xx,u,a(f[8][14],[0,z,y])],x],B=c(o[kg],A,r),C=[0,a(f[ah][4],B),n];return a(f[G][28][26],C)}return a(f[32][31][3],x)}function
jK(d,b){function
e(b){var
c=b[1];return[0,function(d){var
e=[0,a(b[2],0),d],c=a(b[3],e);return c?[0,[0,c[1],b]]:0},c]}var
f=c(h[13],e,d);function
g(a){return a[1]}var
i=c(h[13],g,b);return c(m[6],f,i)}function
eV(e,a){function
b(a){if(a){var
f=a[2],c=jK(e,a[1]);if(c){var
g=c[1],d=b(f);return d?[0,[0,g,d[1]]]:0}return 0}return xy}return b(a)}function
xz(d,a,b){c(i[49],a,xA);function
e(b){return F(n[1],a,xB,d,b)}c(h[11],e,b);return c(i[49],a,xC)}function
jL(f,d,b){function
g(k,b,j){var
d=b[2],l=b[1];function
n(b,a){return[0,b[1],a]}var
e=c(m[23],n,j);function
o(b){try{var
f=c(h[5],k,b)[1],d=f}catch(b){b=v(b);if(b[1]!==fb)throw b;var
d=a(i[2],xD)}return c(h[33],d,e)}try{var
t=c(d[5],l,o),g=t}catch(b){b=v(b);if(!a(bq[20],b))throw b;var
p=function(a){return a[1]},q=c(h[13],p,e),r=[0,a(d[2],0),q],f=a(d[3],r),s=f?f[1]:a(i[2],xE),g=s}return g}var
j=c(h[40],f,d);function
k(b){function
f(c){var
d=c[2],g=c[1],f=iW(a(d[2][4],d[1]),g);return e(m[11],T,f,b)}var
d=c(h[29],f,j);return g(d[1],d[2],b)}return c(h[13],k,b)}function
jM(B,b){function
e(b){if(typeof
b==="number")return 0===b?0:1;else
switch(b[0]){case
0:return[0,b[1]];case
1:var
v=b[3],w=b[2],C=b[1];return c(m[33][3],w,B)?[1,C,w,v]:[0,v];case
2:var
D=b[2],h=e(b[1]),i=e(D);if(typeof
h!=="number"&&0===h[0])if(typeof
i!=="number"&&0===i[0]){var
n=o[14],x=k(n),E=[0,h[1],i[1]],F=l===x?n[1]:d===x?a(j[2],n):n;return[0,a(f[8][14],[0,F,E])]}return[2,h,i];case
3:var
G=b[2],p=e(b[1]),q=e(G);if(typeof
p!=="number"&&0===p[0])if(typeof
q!=="number"&&0===q[0]){var
r=o[15],y=k(r),H=[0,p[1],q[1]],I=l===y?r[1]:d===y?a(j[2],r):r;return[0,a(f[8][14],[0,I,H])]}return[3,p,q];case
4:var
s=e(b[1]);if(typeof
s!=="number"&&0===s[0]){var
t=o[16],z=k(t),J=[0,s[1]],K=l===z?t[1]:d===z?a(j[2],t):t;return[0,a(f[8][14],[0,K,J])]}return[4,s];default:var
A=b[2],L=b[3],u=e(b[1]),g=e(L);if(typeof
u!=="number"&&0===u[0]){var
M=u[1];if(A)return g;if(typeof
g!=="number"&&0===g[0])return[0,c(f[8][5],M,g[1])]}return[5,u,A,g]}}return e(b)}function
bj(c,b){if(typeof
c==="number"){if(0===c){if(typeof
b==="number")if(0===b)return 0}else
if(typeof
b==="number")if(0!==b)return 1}else
switch(c[0]){case
0:return[0,c[1]];case
1:if(typeof
b!=="number"&&1===b[0])return b;break;case
2:if(typeof
b!=="number"&&2===b[0]){var
d=b[1],e=c[1],f=bj(c[2],b[2]);return[2,bj(e,d),f]}break;case
3:if(typeof
b!=="number"&&3===b[0]){var
g=b[1],h=c[1],j=bj(c[2],b[2]);return[3,bj(h,g),j]}break;case
4:if(typeof
b!=="number"&&4===b[0])return[4,bj(c[1],b[1])];break;default:if(typeof
b!=="number"&&5===b[0]){var
k=b[2],l=b[1],m=c[1],n=bj(c[3],b[3]);return[5,bj(m,l),k,n]}}return a(i[2],xF)}var
eW=[aZ,xG,aY(0)];function
gq(b,a){var
c=[0,a,0];function
d(c,b){var
d=b[2],e=b[1],a=c[2],f=c[1];if(typeof
a!=="number"&&0===a[0])return[0,e,d];return[0,[5,a,[0,f],e],[0,f,d]]}return e(h[17],d,b,c)}function
gr(k,j,i,g,f,t,D,s,r,C){var
l=gq(s,r)[1],n=eM(k,j,i,g,l),b=n[1],u=n[2],p=eV(t,b);if(p){var
q=p[1],v=c(h[40],b,q),w=m[33][1],x=function(b,a){return c(m[33][4],a,b)},y=e(h[16],x,w,u),z=function(f,b){var
d=b[2],g=b[1],i=m[33][1],j=a(d[2][4],d[1]);function
k(b,a){var
d=c(h[5],g,b)[2];return c(m[33][4],d,a)}var
l=e(aq[15],k,j,i);return c(m[33][7],f,l)},d=jM(e(h[16],z,y,v),l),A=jL(b,q,eM(k,j,i,g,d)[1]),B=f$(d);return[0,[0,B,d,e(o[kZ],f[4],f[5],A)]]}return 0}function
gs(d,c,b){var
g=a(f[32][31][8],b);return e(f[ah][15],d,c,g)}function
bk(aG,aF,aE,aD,aC,p,n){return function(aH,aI){function
b(b){var
q=a(f[78][29][2],b),J=a(f[78][29][7],b),K=a(f[78][29][12],b);try{var
w=[0,a(f[78][29][5],b),q],r=go(w,aG,o[e5][3],K,J),S=r[2],T=r[1],x=a(o[e5][4],r[3]),y=k(p),s=l===y?p[1]:d===y?a(j[2],p):p,z=k(n),U=l===z?n[1]:d===z?a(j[2],n):n,B=gr(aF,aE,aD,aC,s,aH,x,T,S,w);if(B)var
t=B[1],C=t[2],V=t[3],W=t[1],g=e(o[j6],q,U,C),u=g[3],X=g[4],Y=g[2],Z=g[1],D=function(a){return c(f[ah][67],0,a[1])},_=c(h[13],D,u),$=a(f[G][28][26],_),aa=c(h[13],D,Y),ab=a(f[G][28][26],aa),ac=function(a){return[0,c(O[9],0,[1,[0,a]])]},E=gs(0,a(f[5][1][6],xN),b),ad=function(b){var
c=b[2];return[0,a(f[8][11],b[1]),c]},ae=c(h[13],ad,u),m=o[22],H=k(m),af=0,ag=[0,s[4]],ai=l===H?m[1]:d===H?a(j[2],m):m,aj=[0,ab,[0,$,[0,jJ(s,V,a(f[8][14],[0,ai,ag]),ae,X),af]]],ak=a(f[G][28][26],aj),al=c(o[kr],q,C),am=a(h[6],al),an=function(a){return c(h[5],x,a[2]-1|0)},ao=c(h[13],an,u),ap=c(i[22],am,ao),aq=c(f[G][28][4],ak,aI),ar=a(f[ah][57],0),as=c(f[G][28][4],ar,aq),at=[0,a(f[8][11],E),ap],au=a(f[8][49],at),av=[0,a(f[ah][8],au),0],aw=c(h[13],f[8][11],W),ax=[0,a(f[ah][65],aw),av],ay=[0,as,[0,a(f[G][28][26],ax),0]],az=ac(E),aA=F(f[ah][25],1,xO,az,Z),I=c(f[G][28][5],aA,ay);else
var
aB=a(bv[3],xP),I=c(f[G][28][2],0,aB);return I}catch(b){b=v(b);if(b===o[j$]){var
L=a(bv[3],xH);return c(f[G][28][2],0,L)}if(b===A[23]){var
M=a(bv[3],xI);return c(f[G][28][2],0,M)}if(b===eW){a(i[46],i[24]);var
N=c(i[16],xK,xJ),P=c(i[16],xL,N),Q=c(i[16],xM,P),R=a(bv[3],Q);return c(f[G][28][2],0,R)}throw b}}return a(f[32][31][3],b)}}function
jN(y,x,w){var
b=o[43],n=k(b),p=l===n?b[1]:d===n?a(j[2],b):b,g=o[40],q=k(g),z=o[kV],r=l===q?g[1]:d===q?a(j[2],g):g,h=o[e_],s=k(h),A=l===s?h[1]:d===s?a(j[2],h):h,i=o[22],t=k(i),B=[0,A],C=l===t?i[1]:d===t?a(j[2],i):i,D=a(f[8][14],[0,C,B]),m=o[kh],u=k(m),E=[0,p],F=l===u?m[1]:d===u?a(j[2],m):m,v=a(f[8][14],[0,F,E]),H=c(o[lb],p,z),I=e(o[lj],v,H,w),J=dW(r,gl(x));function
K(h){var
m=a(f[78][29][7],h),n=[0,e(o[7],xT,xS,xR),[0,r]],p=[0,[0,xU,J,a(f[8][14],n)],[0,[0,xQ,y,D],0]],b=o[kq],g=k(b),i=0,q=[0,v],s=l===g?b[1]:d===g?a(j[2],b):b,t=[0,[0,xV,I,a(f[8][14],[0,s,q])],p],u=c(o[kg],t,m),w=[0,a(f[ah][4],u),i];return a(f[G][28][26],w)}return a(f[32][31][3],K)}function
dZ(aI){return function(aJ){var
K=o[197],L=s[e6],M=s[119],N=s[121],P=s[122],g=[d,function(s){var
m=c(o[bR],o[39],o[d2]),b=o[e_],g=k(b),n=l===g?b[1]:d===g?a(j[2],b):b,e=o[43],h=k(e),p=o[d2],q=l===h?e[1]:d===h?a(j[2],e):e,f=o[40],i=k(f),r=l===i?f[1]:d===i?a(j[2],f):f;return[0,r,q,p,n,m]}];function
b(b){var
p=a(f[78][29][2],b),Q=a(f[78][29][7],b),R=a(f[78][29][12],b);try{var
u=[0,a(f[78][29][5],b),p],q=go(u,K,o[e5][3],R,Q),w=q[2],x=q[1],y=a(o[e5][4],q[3]),z=k(g),Y=l===z?g[1]:d===z?a(j[2],g):g,Z=function(b){var
c=b[2],d=b[1];return[0,d,aQ(a(s[73],s[gM]),c)]},_=c(h[13],Z,x),B=gr(L,M,N,P,Y,aI,y,_,aQ(a(s[73],s[gM]),w),u);if(B)var
r=B[1],$=r[3],aa=r[2],ab=r[1],ac=function(a){return c(h[27],a[1],ab)},C=gq(c(h[30],ac,x),w),ad=C[2],D=bj(aa,C[1]),m=o[213],E=k(m),ae=l===E?m[1]:d===E?a(j[2],m):m,n=e(o[j6],p,ae,D),t=n[3],af=n[4],ag=n[2],ai=n[1],H=function(a){return c(f[ah][67],0,a[1])},aj=c(h[13],H,t),ak=a(f[G][28][26],aj),al=c(h[13],H,ag),am=a(f[G][28][26],al),an=function(a){return[0,c(O[9],0,[1,[0,a]])]},I=gs(0,a(f[5][1][6],x2),b),ao=function(b){var
c=b[2];return[0,a(f[8][11],b[1]),c]},ap=[0,am,[0,ak,[0,jN($,c(h[13],ao,t),af),0]]],aq=a(f[G][28][26],ap),ar=c(o[kr],p,D),as=a(h[6],ar),at=function(a){return c(h[5],y,a[2]-1|0)},au=c(h[13],at,t),av=c(i[22],as,au),aw=c(f[G][28][4],aq,aJ),ax=a(f[ah][57],0),ay=c(f[G][28][4],ax,aw),az=[0,a(f[8][11],I),av],aA=a(f[8][49],az),aB=[0,a(f[ah][8],aA),0],aC=c(h[13],f[8][11],ad),aD=[0,a(f[ah][65],aC),aB],aE=[0,ay,[0,a(f[G][28][26],aD),0]],aF=an(I),aG=F(f[ah][25],1,x3,aF,ai),J=c(f[G][28][5],aG,aE);else
var
aH=a(bv[3],x4),J=c(f[G][28][2],0,aH);return J}catch(b){b=v(b);if(b===o[j$]){var
S=a(bv[3],xW);return c(f[G][28][2],0,S)}if(b===A[23]){var
T=a(bv[3],xX);return c(f[G][28][2],0,T)}if(b===eW){a(i[46],i[24]);var
U=c(i[16],xZ,xY),V=c(i[16],x0,U),W=c(i[16],x1,V),X=a(bv[3],W);return c(f[G][28][2],0,X)}throw b}}return a(f[32][31][3],b)}}function
jO(d,c){var
b=a(d,c);return b?[0,[0,b[1],0]]:0}var
jP=a(cU[1],[0,T,bm[20]]),gt=a(x6[8],x5)?0:[d,function(a){throw eW}];function
jR(p,o){var
g=k(gt);if(l!==g)if(d===g)a(j[2],gt);var
q=[0,x9,[0,x8,[0,c(i[16],x7,f[142][1]),0]]],r=a(x_[3],0),n=e(h[16],x$[4],r,q),b=e(m[35],n,[0,n],[0,p,o]);return 0===b[0]?b[1]:a(i[2],b[1])}function
ya(a){return jR(a[1],a[2])}var
jS=c(jP[6],jQ,ya);function
gu(c,b){return a(jS,[0,c,b])}function
d0(a){switch(a[0]){case
0:return[0,[0,a[1],0]];case
1:var
b=a[1];return[1,b,d0(a[2])];default:var
c=a[2],d=a[1],e=d0(a[3]);return[2,d0(d),c,e]}}function
gv(f,b){var
d=gu(f,b);if(d){var
e=a(aF[51],d[1]);return c(s[ah],b,e)?[0,e]:(a(i[27],yb),0)}return 0}function
jT(f,b){function
g(a){var
b=a[2];return[0,d0(a[1]),b]}var
d=gu(f,c(h[13],g,b));if(d){var
e=a(aF[54],d[1]);return c(s[89],b,e)?[0,e]:(a(i[27],yc),a(i[46],i[24]),0)}return 0}function
ch(e,d,b){function
f(i,h){var
b=i,d=h;for(;;){if(typeof
b!=="number")switch(b[0]){case
0:var
g=a(m[29][1],b[1]);return e<=g?c(aq[4],g-e|0,d):d;case
2:var
b=b[2];continue;case
3:case
4:var
j=b[1],k=f(b[2],d),b=j,d=k;continue}return d}}return f(b,d)}function
ci(a){return ch(0,aq[1],a)}function
aV(b,d){function
c(b){if(typeof
b!=="number")switch(b[0]){case
0:var
e=a(d,a(m[29][1],b[1]));return[0,a(m[30][1],e)];case
2:var
f=b[1];return[2,f,c(b[2])];case
3:var
g=b[1],h=c(b[2]);return[3,c(g),h];case
4:var
i=b[1],j=c(b[2]);return[4,c(i),j]}return b}return c(b)}function
eX(a){function
d(i,g,f){var
b=i,a=g,c=f;for(;;)if(typeof
a==="number")return c;else
switch(a[0]){case
0:var
j=a[2],k=ch(b,c,a[1]),b=b+1|0,a=j,c=k;continue;case
1:var
l=a[2],m=ch(b,c,a[1]),b=b+1|0,a=l,c=m;continue;default:var
n=a[3],o=a[1],p=ch(b,ch(b,c,a[2]),o),q=function(c,a){return d(b+1|0,a,c)};return e(h[16],q,p,n)}}return d(0,a,aq[1])}function
eY(b,f){function
d(c,b){return b<c?b:a(f,b-c|0)+c|0}function
e(b,a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
f=a[1],g=e(b+1|0,a[2]);return[0,aV(f,function(a){return d(b,a)}),g];case
1:var
h=a[1],i=e(b+1|0,a[2]);return[1,aV(h,function(a){return d(b,a)}),i];default:var
j=a[3],k=a[2],l=a[1],m=function(a){return e(b+1|0,a)},n=c(s[10],m,j),o=aV(k,function(a){return d(b,a)});return[2,aV(l,function(a){return d(b,a)}),o,n]}}return e(0,b)}function
cj(d,b){function
e(b){var
c=b[2];return[0,a(s[71],b[1]),c]}return a(d,c(h[13],e,b))}var
gw=a(cU[1],[0,T,bm[20]]),jU=a(cU[1],[0,T,bm[20]]);function
yd(a){var
b=a[1],d=a[2];return cj(c(aF[91],b[1],b[2]),d)}var
jV=c(gw[6],ye,yd);function
yf(a){var
b=a[1],d=a[2];return cj(c(aF[92],b[1],b[2]),d)}var
jW=c(gw[6],yg,yf);function
yh(b){var
c=b[2];return cj(a(aF[30],b[1]),c)}var
jX=c(jU[6],yi,yh);function
yj(b,a){return e(o[bz],aI,b,a[1])}var
yk=a(o[bl],aI),jY=[0,yl,eK,function(a){var
b=a[2];return cj(c(aF[29],a[1],aF[5]),b)},ci,aV,yk,yj];function
ym(b,a){return e(o[bz],aI,b,a[1])}var
yn=a(o[bl],aI),jZ=[0,yo,eK,function(a){var
b=a[2];return cj(c(aF[29],a[1],aF[5]),b)},ci,aV,yn,ym];function
yp(b,a){return e(o[bz],aI,b,a[1])}var
gx=[0,yq,eK,jX,ci,aV,a(o[bl],aI),yp];function
gy(c,b){function
d(b,a){return e(o[bz],aI,b,a[1])}var
f=a(o[bl],aI);function
g(a){return gv(a[1],a[2])}return[0,yr,function(a){return[0,c,b]},g,ci,aV,f,d]}function
gz(c,b){function
d(b,a){return e(o[bz],aI,b,a[1])}var
f=a(o[bl],aI);function
g(a){return gv(a[1],a[2])}return[0,ys,function(a){return[0,c,b]},g,ci,aV,f,d]}function
gA(b,a){function
c(b,a){return e(o[bz],o[a0],b,a[1])}function
d(a){var
b=a[2],c=a[1];return jO(function(a){return jT(c,a)},b)}return[0,yt,function(c){return[0,b,a]},d,eX,eY,bP,c]}var
gB=[0,yu,f_,jV,eX,eY,bP,function(b,a){return e(o[bz],o[a0],b,a[1])}],j0=[0,yv,f_,jW,eX,eY,bP,function(b,a){return e(o[bz],o[a0],b,a[1])}];function
yw(b){var
a=eV([0,gB,0],eM(s[96],s[94],s[97],s[98],b)[1]);if(a){var
d=a[1],e=function(a){return a[1]};return[0,c(h[13],e,d)]}return 0}var
yx=a(bk(o[e0],s[e8],s[G],s[e7],s[fa],dY,o[e4]),[0,jY,0]);function
yy(b){var
c=[0,gy(yz,[0,b]),0];return a(bk(o[e0],s[e8],s[G],s[e7],s[fa],dY,o[e4]),c)}var
yA=dZ([0,jZ,0]);function
yB(a){return dZ([0,gz(yC,[0,a]),0])}function
yD(b){var
c=[0,gA(yE,[0,b]),0];return a(bk(o[e9],s[96],s[94],s[97],s[98],dX,o[e2]),c)}var
yG=[0,gA(yF,0),0],yH=a(bk(o[e9],s[96],s[94],s[97],s[98],dX,o[e2]),yG),yJ=[0,gy(yI,0),0],yK=a(bk(o[e0],s[e8],s[G],s[e7],s[fa],dY,o[e4]),yJ),yM=dZ([0,gz(yL,0),0]),yN=a(bk(o[e9],s[96],s[94],s[97],s[98],dX,o[e2]),[0,gB,0]),yO=a(bk(o[e9],s[96],s[94],s[97],s[98],dX,o[e2]),[0,j0,0]),yP=dZ([0,gx,0]),Y=[0,sn,so,eI,f8,eJ,f9,f_,eK,bt,aQ,a6,f$,eL,cV,sI,eM,aq,sK,iW,o,dR,w5,w6,jD,w8,dS,dT,dU,dV,dW,gl,gm,bx,eU,jE,aI,bP,gn,go,dX,dY,xt,jF,jG,jH,jI,gp,xu,jJ,jK,eV,eV,xz,jL,jM,bj,eW,gq,gr,gs,bk,jN,dZ,jO,jP,jQ,gt,jR,jS,gu,d0,gv,jT,ch,ci,aV,eX,eY,cj,gw,jU,jV,jW,jX,jY,jZ,gx,gy,gz,gA,gB,j0,yw,yx,yy,yA,yB,yD,yH,yK,yM,yN,yO,yP,a(bk(o[e0],s[e8],s[G],s[e7],s[fa],dY,o[e4]),[0,gx,0])];aX(758,Y,"Micromega_plugin.Coq_micromega");a(aw[7][1],w);function
yQ(e){var
b=[28,[0,0,[31,c(O[9],0,[0,[0,[0,w,yR],0],0])]]],d=a(f[5][1][6],yS);return F(r[6][4],1,0,d,b)}var
yT=[0,function(b,a){return f[ah][89]}];e(r[6][9],0,[0,w,yU],yT);c(f[76][1],yQ,w);var
yV=0,yX=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(a){var
b=c(r[12][23],a,f);return c(Y[98],-1,b)}}return a(i[2],yW)},yV],yZ=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=d[1],g=b[1],h=a(S[6],f[70][14]),j=c(r[12][2][7],h,g),k=a(S[6],r[1][1]),l=c(r[12][2][7],k,e);return function(a){var
b=c(r[12][23],a,l);return c(Y[98],j,b)}}}return a(i[2],yY)},yX],y0=a(ay[12],yZ);e(r[6][9],0,[0,w,y1],y0);function
y2(q){var
j=[0,a(f[5][1][7],y3)],b=r[1][1],h=0,i=0;if(0===b[0]){var
k=[0,[0,y5,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],j])],i]],h],m=[0,a(f[5][1][7],y6)],d=r[1][1],l=0;if(0===d[0]){var
n=[0,[1,c(O[9],0,[0,[5,[0,d[1]]],m])],l],o=[0,a(f[5][1][7],y8)],g=f[70][14];if(0===g[0]){var
p=[0,[0,y_,[0,[1,c(O[9],0,[0,[5,[0,g[1]]],o])],n]],k];return e(r[9][4],[0,w,y$],0,p)}throw[0,C,y9]}throw[0,C,y7]}throw[0,C,y4]}c(aw[7][3],y2,w);var
za=0,zc=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[102],d)}}return a(i[2],zb)},za],zd=a(ay[12],zc);e(r[6][9],0,[0,w,ze],zd);function
zf(j){var
h=[0,a(f[5][1][7],zg)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,zi,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,zj],0,i)}throw[0,C,zh]}c(aw[7][3],zf,w);var
zk=0,zm=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[103],d)}}return a(i[2],zl)},zk],zn=a(ay[12],zm);e(r[6][9],0,[0,w,zo],zn);function
zp(j){var
h=[0,a(f[5][1][7],zq)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,zs,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,zt],0,i)}throw[0,C,zr]}c(aw[7][3],zp,w);var
zu=0,zw=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[104],d)}}return a(i[2],zv)},zu],zx=a(ay[12],zw);e(r[6][9],0,[0,w,zy],zx);function
zz(j){var
h=[0,a(f[5][1][7],zA)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,zC,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,zD],0,i)}throw[0,C,zB]}c(aw[7][3],zz,w);var
zE=0,zG=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[105],d)}}return a(i[2],zF)},zE],zH=a(ay[12],zG);e(r[6][9],0,[0,w,zI],zH);function
zJ(j){var
h=[0,a(f[5][1][7],zK)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,zM,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,zN],0,i)}throw[0,C,zL]}c(aw[7][3],zJ,w);var
zO=0,zQ=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[99],d)}}return a(i[2],zP)},zO],zR=a(ay[12],zQ);e(r[6][9],0,[0,w,zS],zR);function
zT(j){var
h=[0,a(f[5][1][7],zU)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,zW,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,zX],0,i)}throw[0,C,zV]}c(aw[7][3],zT,w);var
zY=0,z0=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[gJ],d)}}return a(i[2],zZ)},zY],z1=a(ay[12],z0);e(r[6][9],0,[0,w,z2],z1);function
z3(j){var
h=[0,a(f[5][1][7],z4)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,z6,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,z7],0,i)}throw[0,C,z5]}c(aw[7][3],z3,w);var
z8=0,z_=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[101],d)}}return a(i[2],z9)},z8],z$=a(ay[12],z_);e(r[6][9],0,[0,w,Aa],z$);function
Ab(j){var
h=[0,a(f[5][1][7],Ac)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,Ae,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,Af],0,i)}throw[0,C,Ad]}c(aw[7][3],Ab,w);var
Ag=0,Ai=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[94],d)}}return a(i[2],Ah)},Ag],Aj=a(ay[12],Ai);e(r[6][9],0,[0,w,Ak],Aj);function
Al(j){var
h=[0,a(f[5][1][7],Am)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,Ao,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,Ap],0,i)}throw[0,C,An]}c(aw[7][3],Al,w);var
Aq=0,As=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(b){var
d=c(r[12][23],b,f);return a(Y[96],d)}}return a(i[2],Ar)},Aq],At=a(ay[12],As);e(r[6][9],0,[0,w,Au],At);function
Av(j){var
h=[0,a(f[5][1][7],Aw)],b=r[1][1],d=0,g=0;if(0===b[0]){var
i=[0,[0,Ay,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],h])],g]],d];return e(r[9][4],[0,w,Az],0,i)}throw[0,C,Ax]}c(aw[7][3],Av,w);var
AA=0,AC=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(a){var
b=c(r[12][23],a,f);return c(Y[97],-1,b)}}return a(i[2],AB)},AA],AE=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=d[1],g=b[1],h=a(S[6],f[70][14]),j=c(r[12][2][7],h,g),k=a(S[6],r[1][1]),l=c(r[12][2][7],k,e);return function(a){var
b=c(r[12][23],a,l);return c(Y[97],j,b)}}}return a(i[2],AD)},AC],AF=a(ay[12],AE);e(r[6][9],0,[0,w,AG],AF);function
AH(q){var
j=[0,a(f[5][1][7],AI)],b=r[1][1],h=0,i=0;if(0===b[0]){var
k=[0,[0,AK,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],j])],i]],h],m=[0,a(f[5][1][7],AL)],d=r[1][1],l=0;if(0===d[0]){var
n=[0,[1,c(O[9],0,[0,[5,[0,d[1]]],m])],l],o=[0,a(f[5][1][7],AN)],g=f[70][14];if(0===g[0]){var
p=[0,[0,AP,[0,[1,c(O[9],0,[0,[5,[0,g[1]]],o])],n]],k];return e(r[9][4],[0,w,AQ],0,p)}throw[0,C,AO]}throw[0,C,AM]}throw[0,C,AJ]}c(aw[7][3],AH,w);var
AR=0,AT=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(S[6],r[1][1]),f=c(r[12][2][7],e,d);return function(a){var
b=c(r[12][23],a,f);return c(Y[95],-1,b)}}return a(i[2],AS)},AR],AV=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=d[1],g=b[1],h=a(S[6],f[70][14]),j=c(r[12][2][7],h,g),k=a(S[6],r[1][1]),l=c(r[12][2][7],k,e);return function(a){var
b=c(r[12][23],a,l);return c(Y[95],j,b)}}}return a(i[2],AU)},AT],AW=a(ay[12],AV);e(r[6][9],0,[0,w,AX],AW);function
AY(q){var
j=[0,a(f[5][1][7],AZ)],b=r[1][1],h=0,i=0;if(0===b[0]){var
k=[0,[0,A1,[0,[1,c(O[9],0,[0,[5,[0,b[1]]],j])],i]],h],m=[0,a(f[5][1][7],A2)],d=r[1][1],l=0;if(0===d[0]){var
n=[0,[1,c(O[9],0,[0,[5,[0,d[1]]],m])],l],o=[0,a(f[5][1][7],A4)],g=f[70][14];if(0===g[0]){var
p=[0,[0,A6,[0,[1,c(O[9],0,[0,[5,[0,g[1]]],o])],n]],k];return e(r[9][4],[0,w,A7],0,p)}throw[0,C,A5]}throw[0,C,A3]}throw[0,C,A0]}c(aw[7][3],AY,w);var
j1=[0,w];aX(763,j1,"Micromega_plugin.G_micromega");aX(764,[0,gR,m,s,p,A,aF,cU,Y,j1],"Micromega_plugin");return});
