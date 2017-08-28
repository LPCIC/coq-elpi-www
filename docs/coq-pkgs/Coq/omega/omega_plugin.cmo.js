(function(lU){"use strict";var
ey="not",ez="*",k=112,eO=" 0\n",eS="Z.lt",eW="Z.le",c4="Equation E",c3=" and E",dm=": ",a7=".\n",h=250,ex="Z.succ",eG="(",eM="Z.pred",eN="not a number",eL="ZArith",ew="+ ",eD="- ",es="------------------------\n\n",d=246,ev="Z.sub",eJ=127,er="tag_hypothesis",aM="omega",eC="Inequation E",i=111,dn="Z",eK="Extension: cannot occur",aV=113,eI=")",dp="plugins/omega/coq_omega.ml",eR="N",eV="State",eF="with",cE=139,eB="omega'",eQ="X%d",eA=" subsumes E",dr=" E",aj="Omega",eP=" states ",aW=248,eu="positive",dl=-18,et="Equations E",dq="nat",eU="Omega: Can't solve a goal with non-linear products",c2=-16,eH="Z.ge",eE="Z.gt",a6="Coq",eT="E%d subsumes E%d.\n",E=lU.jsoo_runtime,ai=E.caml_check_bound,ep=E.caml_equal,aU=E.caml_fresh_oo_id,c=E.caml_new_string,cX=E.caml_notequal,g=E.caml_obj_tag,c0=E.caml_register_global,c1=E.caml_string_notequal,cZ=E.caml_trampoline,cY=E.caml_trampoline_return,r=E.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):E.caml_call_gen(a,[b])}function
e(a,b,c){return a.length==2?a(b,c):E.caml_call_gen(a,[b,c])}function
n(a,b,c,d){return a.length==3?a(b,c,d):E.caml_call_gen(a,[b,c,d])}function
cD(a,b,c,d,e){return a.length==4?a(b,c,d,e):E.caml_call_gen(a,[b,c,d,e])}function
eq(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):E.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}var
D=E.caml_get_global_data(),lT=[11,c(" + "),[2,0,[12,32,[2,0,[11,c(dr),[4,0,0,0,[11,c(a7),0]]]]]]],ec=[0,[0,2],[0,1,0]],dJ=[0,c(a6),[0,c("Logic"),[0,c("Decidable"),0]]],aL=c("omega_plugin"),p=D.List,u=D.Printf,m=D.Pervasives,o=D.Util,F=D.Not_found,ak=D.Int,t=D.Hashtbl,a8=D.Assert_failure,b=D.API,f=D.CamlinternalLazy,A=D.Bigint,ag=D.Pp,_=D.CErrors,em=D.Loc,aT=D.Ltac_plugin,en=D.Genarg,el=D.Grammar_API,aN=[0,0],fg=[0,[11,c(eC),[4,0,0,0,[11,c(" is divided by "),[2,0,[11,c(" and the constant coefficient is rounded by substracting "),[2,0,[11,c(a7),0]]]]]]],c("Inequation E%d is divided by %s and the constant coefficient is rounded by substracting %s.\n")],fh=[0,[11,c("Constant in equation E"),[4,0,0,0,[11,c(" is not divisible by the pgcd "),[2,0,[11,c(" of its other coefficients.\n"),0]]]]],c("Constant in equation E%d is not divisible by the pgcd %s of its other coefficients.\n")],fi=[0,[12,69,[4,0,0,0,[11,c(" is trivially satisfiable.\n"),0]]],c("E%d is trivially satisfiable.\n")],fj=[0,[11,c(c4),[4,0,0,0,[11,c(" is divided by the pgcd "),[2,0,[11,c(" of its coefficients.\n"),0]]]]],c("Equation E%d is divided by the pgcd %s of its coefficients.\n")],fk=[0,[11,c("We state "),[2,0,[11,c(dr),[4,0,0,0,[11,c(" = "),[2,0,[12,32,[2,0,[11,c(dr),[4,0,0,0,lT]]]]]]]]]],c("We state %s E%d = %s %s E%d + %s %s E%d.\n")],fl=[0,[11,c("We define a new equation E"),[4,0,0,0,[11,c(dm),0]]],c("We define a new equation E%d: ")],fm=c(" 0"),fn=[0,[11,c("We define E"),[4,0,0,0,[11,c(dm),0]]],c("We define E%d: ")],fo=c(eO),fp=[0,[12,69,[4,0,0,0,[11,c(eA),[4,0,0,0,[11,c(a7),0]]]]],c(eT)],fq=[0,[12,69,[4,0,0,0,[11,c(eA),[4,0,0,0,[11,c(a7),0]]]]],c(eT)],fr=[0,[11,c(et),[4,0,0,0,[11,c(c3),[4,0,0,0,[11,c(" imply a contradiction on their constant factors.\n"),0]]]]],c("Equations E%d and E%d imply a contradiction on their constant factors.\n")],fs=[0,[11,c(et),[4,0,0,0,[11,c(c3),[4,0,0,0,[11,c(" state that their body is at the same time equal and different\n"),0]]]]],c("Equations E%d and E%d state that their body is at the same time equal and different\n")],ft=[0,[12,69,[4,0,0,0,[11,c(c3),[4,0,0,0,[11,c(" can be merged into E"),[4,0,0,0,[11,c(a7),0]]]]]]],c("E%d and E%d can be merged into E%d.\n")],fu=[0,[11,c(c4),[4,0,0,0,[11,c(eP),[2,0,[11,c(" = 0.\n"),0]]]]],c("Equation E%d states %s = 0.\n")],fv=[0,[11,c(eC),[4,0,0,0,[11,c(" states 0 != 0.\n"),0]]],c("Inequation E%d states 0 != 0.\n")],fw=[0,[11,c(c4),[4,0,0,0,[11,c(eP),[2,0,[11,c(" >= 0.\n"),0]]]]],c("Equation E%d states %s >= 0.\n")],fx=[0,[11,c(c4),[4,0,0,0,[11,c(" is split in E"),[4,0,0,0,[11,c(c3),[4,0,0,0,[11,c("\n\n"),0]]]]]]],c("Equation E%d is split in E%d and E%d\n\n")],fy=[0,[11,c("To ensure a solution in the dark shadow the equation E"),[4,0,0,0,[11,c(" is weakened by "),[2,0,[11,c(a7),0]]]]],c("To ensure a solution in the dark shadow the equation E%d is weakened by %s.\n")],fI=c("depend"),fL=c("solve"),fJ=[0,c("plugins/omega/omega.ml"),600,15],fH=c("disequation in simplify"),fG=c("Product dardk"),fF=[0,0,0,0],fD=c("TL"),fC=c("eliminate_with_in"),fz=[0,[12,88,[4,0,0,0,0]],c(eQ)],fe=c(">= 0\n"),ff=c(es),fb=[0,[12,69,[4,0,0,0,[11,c(dm),0]]],c("E%d: ")],fc=[0,[2,0,[11,c(eO),0]],c("%s 0\n")],fd=c(es),e_=c("equation"),e$=c("inequation"),fa=c("disequation"),e7=c("="),e8=c(">="),e9=c("!="),e0=c(eD),e3=c(ew),e4=c(""),e1=[0,[2,0,[12,32,0]],c("%s ")],e2=[0,[2,0,[12,32,[2,0,[12,32,0]]]],c("%s %s ")],e5=[0,[11,c(ew),[2,0,[12,32,0]]],c("+ %s ")],e6=[0,[11,c(eD),[2,0,[12,32,0]]],c("- %s ")],eX=c("pgcd_l"),eY=c("Omega.MakeOmegaSolver(I).UNSOLVABLE"),eZ=c("Omega.MakeOmegaSolver(I).NO_CONTRADICTION"),fA=c("Omega.MakeOmegaSolver(I).FACTOR1"),fB=c("Omega.MakeOmegaSolver(I).CHOPVAR"),fE=c("Omega.MakeOmegaSolver(I).SOLVED_SYSTEM"),fK=c("Omega.MakeOmegaSolver(I).FULL_SOLUTION"),iZ=c(eG),i0=c("+"),i1=c(eI),i2=c("~"),i3=c(eG),i4=c(ez),i5=c(eI),i6=c("?"),i7=c("weight"),jg=[0,2],jh=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],ji=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],jc=[0,2],jd=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],je=[0,2],jf=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],jj=[0,2],jk=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],jl=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],jM=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],[0,[0,[0,1],[0,[0,1],[0,[0,2],[0,[0,1],0]]]],0]]]],jN=[0,1],jO=[0,2],jP=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jQ=[0,2],jR=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jS=c(eU),jT=[0,2],jU=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],j1=[0,1],j2=[0,2],j3=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],0]],j4=[0,[0,[0,1],[0,[0,1],0]],0],j5=c(eU),j6=[0,2],j7=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],0]],j8=[0,[0,[0,1],0],0],j9=[0,1],j_=[0,2],j$=[0,1],ka=[0,2],kb=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],kc=[0,1],kt=[0,0,0],kq=[0,1],kr=[0,2],km=[0,1],kn=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],ko=[0,1],kp=[0,2],ks=[0,1],kv=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],ku=[0,2],ll=[0,c(a6),[0,c(aM),[0,c(aj),0]]],lg=c("_left"),lh=c("_right"),k4=[0,1],kX=[0,2],kY=[0,1],kZ=[0,2],k0=[0,1],k1=[0,2],k2=[0,1],k3=[0,1],k5=[0,[0,3],[0,1,0]],k6=[0,[0,2],[0,1,0]],k7=[0,[0,2],[0,1,0]],k8=[0,[0,1],[0,1,0]],k9=[0,[0,2],[0,1,0]],k_=[0,[0,1],[0,1,0]],k$=[0,[0,2],[0,1,0]],la=[0,[0,1],[0,1,0]],lb=[0,[0,2],[0,1,0]],lc=[0,[0,1],[0,1,0]],ld=[0,[0,2],[0,1,0]],le=[0,[0,1],[0,1,0]],kU=[0,0,0],kV=c("Omega can't solve this system"),kS=c(eV),kR=[0,1,0],kz=[0,[0,3],0],kA=[0,[0,2],0],kB=[0,[0,3],0],kC=[0,[0,3],0],kD=[0,[0,1],[0,1,0]],kE=[0,[0,2],[0,1,0]],kF=[0,[0,2],[0,1,0]],kG=[0,[0,[0,1],0],0],kH=[0,2],kI=[0,1],kJ=[0,1],kK=[0,[0,2],[0,1,0]],kL=[0,[0,1],[0,1,0]],kM=[0,[0,3],0],kN=[0,[0,[0,1],0],0],kO=[0,[0,3],0],kP=[0,[0,2],[0,1,0]],kQ=[0,[0,2],[0,1,0]],kw=c("auxiliary"),kx=c("auxiliary_1"),ky=c("auxiliary_2"),kj=c("condense.1"),kk=[0,2],kl=[0,0,0],ki=c("reduce_factor.1"),ke=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],kf=[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]],kg=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,2],0]],0]],kh=[0,[0,[0,1],0],0],kd=c("shrink.1"),jZ=[0,2],j0=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jX=[0,2],jY=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jV=[0,2],jW=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]]],jz=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]]],jA=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jB=[0,1],jC=[0,2],jD=[0,2],jE=[0,2],jF=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jG=[0,2],jH=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jI=[0,2],jJ=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jK=[0,2],jL=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jm=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],0]]]]]]],jn=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jo=[0,1],jp=[0,2],jq=[0,2],jr=[0,2],js=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jt=[0,2],ju=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jv=[0,2],jw=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jx=[0,2],jy=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jb=[0,c(dp),735,17],ja=[0,c(dp),736,13],i$=[0,c(dp),695,9],i9=c("H"),i_=c("P"),i8=c("compile_equation."),iY=c("x"),iX=c("occurrence "),iW=c("abstract_path "),iU=c(eN),iV=c(eN),iT=c("Omega: Not a quantifier-free goal"),iP=c(ey),iN=c(eS),iL=c(eH),iK=c(eE),iJ=c(eW),iI=c(ev),iH=c(eM),iG=c(ex),iE=c(" is not an evaluable constant."),iF=[0,c("Coq_omega")],iD=c("True"),iC=c("False"),iB=c("ex"),iA=c("eq"),iz=c("or"),iy=c("and"),ix=c(ey),iw=c("iff"),iv=c("imp_simp"),iu=c("not_not"),it=c("not_iff"),is=c("not_imp"),ir=c("not_and"),iq=c("not_or"),ip=c("dec_True"),io=c("dec_not_not"),im=c("dec_False"),il=c("dec_not"),ik=c("dec_iff"),ij=c("dec_imp"),ii=c("dec_and"),ih=c("dec_or"),ig=c("eq_ind_r"),ie=c("not_gt"),id=c("not_ge"),ic=c("not_lt"),ib=c("not_le"),ia=c("not_eq"),h$=c("dec_gt"),h_=c("dec_ge"),h9=c("dec_lt"),h8=c("dec_le"),h7=c("dec_eq_nat"),h6=c("le_gt_dec"),h5=c("pred_of_minus"),h4=c("O"),h3=c("S"),h2=c(dq),h1=c("Nat.pred"),h0=c("Nat.mul"),hZ=c("Nat.add"),hY=c("Nat.sub"),hX=c("gt"),hW=c("ge"),hV=c("lt"),hU=c("le"),hT=c(eS),hS=c(eH),hR=c(eE),hQ=c(eW),hP=c("Zne"),hO=c("neq"),hN=c("Znot_gt_le"),hM=c("Znot_ge_lt"),hL=c("Znot_lt_ge"),hK=c("Znot_le_gt"),hJ=c("not_Zne"),hI=c("not_Zeq"),hH=c("dec_Zge"),hG=c("dec_Zgt"),hF=c("Z.lt_decidable"),hE=c("Z.le_decidable"),hD=c("dec_Zne"),hC=c("Z.eq_decidable"),hB=c("intro_Z"),hA=c("new_var"),hz=c("Zle_left"),hy=c("Zgt_left"),hx=c("Zge_left"),hw=c("Zlt_left"),hv=c("Zne_left"),hu=c("Zegal_left"),ht=c("fast_Zopp_involutive"),hs=c("fast_Zopp_eq_mult_neg_1"),hr=c("fast_Zopp_mult_distr_r"),hq=c("fast_Zopp_plus_distr"),hp=c("fast_Zmult_opp_comm"),ho=c("fast_Zmult_plus_distr_l"),hn=c("fast_Zred_factor6"),hm=c("fast_Zred_factor5"),hl=c("fast_Zred_factor4"),hk=c("fast_Zred_factor3"),hj=c("fast_Zred_factor2"),hi=c("fast_Zred_factor1"),hh=c("fast_Zred_factor0"),hg=c("OMEGA20"),hf=c("OMEGA19"),he=c("OMEGA18"),hd=c("OMEGA17"),hc=c("fast_OMEGA16"),hb=c("fast_OMEGA15"),ha=c("fast_OMEGA14"),g$=c("fast_OMEGA13"),g_=c("fast_OMEGA12"),g9=c("fast_OMEGA11"),g8=c("fast_OMEGA10"),g7=c("OMEGA9"),g6=c("OMEGA8"),g5=c("OMEGA7"),g4=c("OMEGA6"),g3=c("OMEGA5"),g2=c("OMEGA4"),g1=c("OMEGA3"),g0=c("OMEGA2"),gZ=c("OMEGA1"),gY=c("Zmult_le_approx"),gX=c("fast_Zmult_comm"),gW=c("fast_Zplus_comm"),gV=c("fast_Zplus_permute"),gU=c("fast_Zmult_assoc_reverse"),gT=c("fast_Zplus_assoc"),gS=c("fast_Zplus_assoc_reverse"),gR=c("inj_eq"),gQ=c("inj_neq"),gP=c("Znat.inj_gt"),gO=c("Znat.inj_ge"),gN=c("Znat.inj_lt"),gM=c("Znat.inj_le"),gL=c("Nat2Z.inj_succ"),gK=c("inj_minus2"),gJ=c("Nat2Z.inj_sub"),gI=c("Nat2Z.inj_mul"),gH=c("Nat2Z.inj_add"),gG=c("Z.of_nat"),gF=c(eM),gE=c(ex),gD=c(ev),gC=c("Z.opp"),gB=c("Z.mul"),gA=c("Z.add"),gz=c("Gt"),gy=c("comparison"),gx=c(dn),gw=c("Zneg"),gv=c("Zpos"),gu=c("Z0"),gt=c("xI"),gs=c("xO"),gr=c("xH"),gf=c("find_contr"),ge=c(er),gc=c(er),ga=[0,1],f$=[0,[12,88,[4,0,0,0,0]],c(eQ)],f_=c("WW"),f9=c("Zvar"),f8=c(eV),f6=c(aj),fR=[0,c(aj),[0,c("System"),0]],fS=c("Omega system time displaying flag"),fV=[0,c(aj),[0,c("Action"),0]],fW=c("Omega action display flag"),fZ=[0,c(aj),[0,c("OldStyle"),0]],f0=c("Omega old style flag"),f3=[0,c("Stable"),[0,c(aj),0]],f4=c("Omega automatic reset of generated names"),gg=[0,[0,c(a6),[0,c(aM),[0,c("OmegaLemmas"),0]]],0],gl=c(aj),gm=c(aj),gn=[0,[0,c(a6),[0,c(eL),0]],0],go=c(aj),gp=[0,[0,c(a6),[0,c(eL),[0,c("BinInt"),0]]],0],gq=c(aj),lf=c("Coq_omega.Undecidable"),lP=[0,c("plugins/omega/g_omega.ml4"),1,0],lN=[0,[0,[0,c(aM)],[0,[0,c(eF)],[0,[0,c(ez)],0]]],0],lO=c("$l"),lQ=[0,c(eF)],lR=[0,c(aM)],lS=c(eB),lH=c(eK),lF=[0,c(dq),[0,c(eu),[0,c(eR),[0,c(dn),0]]]],lE=c(eK),lz=c(aM),lA=c(aM),lp=c(eR),lq=c(dn),lr=c(dq),ls=c(eu),lu=c("zify_positive"),lv=c("zify_nat"),lw=c("zify_op"),lx=c("zify_N"),lt=c("No Omega knowledge base for type "),ln=[0,c("PreOmega"),[0,c(aM),[0,c(a6),0]]],lC=c(aM),lL=c(eB),lo=D.String,lJ=D.Array,c5=[0,aN,function(f){var
j=f[1],v=f[2];function
aq(b,a){var
c=e(f[2],b,a),d=c||ep(b,a);return d}function
A(b,a){return e(f[2],a,b)}function
M(b,a){var
c=e(f[2],a,b),d=c||ep(b,a);return d}var
h=f[3],k=f[4],i=f[5];function
x(b,a){return e(f[6],b,a)[1]}function
N(b,a){return e(f[6],b,a)[2]}var
c=f[8],d=f[9],y=e(h,d,d),ad=a(f[7],d);function
l(b){return e(f[2],b,c)?a(f[7],b):b}var
g=f[10],w=f[7];function
ar(b,a){return b<a?1:0}function
as(b,a){return a<b?1:0}function
at(b,a){return b<=a?1:0}function
au(b,a){return a<=b?1:0}function
av(b){a(m[29],b);a(m[32],0);return a(m[46],m[24])}function
E(b,a){a[1]=[0,b,a[1]];return 0}function
ae(f,d){var
b=f,a=d;for(;;){if(e(j,a,c))return b;var
g=N(b,a),b=a,a=g;continue}}function
af(b){return b?n(p[16],ae,b[1],b[2]):a(m[2],eX)}function
G(b,a){var
g=M(b,c),f=A(a,c);return 0===g?0===f?x(b,a):e(k,x(e(h,b,d),a),d):0===f?e(k,x(e(k,b,d),a),d):x(b,a)}var
q=[aW,eY,aU(0)],ag=[aW,eZ,aU(0)];function
H(h,f){var
b=f[2],k=f[1],o=0;function
q(i,b){var
k=e(v,b[1],c)?e0:i?e3:e4;a(m[27],k);var
f=l(b[1]);if(e(j,f,d)){var
o=a(h,b[2]);e(u[2],e1,o)}else{var
p=a(h,b[2]),q=a(g,f);n(u[2],e2,q,p)}return 1}n(p[16],q,o,k);if(A(b,c)){var
r=a(g,b);return e(u[2],e5,r)}var
i=e(v,b,c);if(i){var
s=a(g,l(b));return e(u[2],e6,s)}return i}function
W(a){function
b(b,a){if(15===a[0]){var
c=a[2][2],f=W(a[3][2]),g=W(c);return e(h,e(h,e(h,b,d),g),f)}return e(h,b,d)}return n(p[16],b,c,a)}function
O(a){switch(a){case
0:return e7;case
1:return e8;default:return e9}}function
P(a){switch(a){case
0:return e_;case
1:return e$;default:return fa}}function
z(c,b){function
d(a){var
b=a[4],d=a[3],f=a[2];e(u[2],fb,a[1]);H(c,[0,d,b]);var
g=O(f);return e(u[2],fc,g)}e(p[11],d,b);return a(m[27],fd)}function
aw(c,b){function
d(b){H(c,b);return a(m[27],fe)}e(p[11],d,b);return a(m[27],ff)}function
Q(c,q){var
d=q;for(;;){if(d){var
b=d[1],r=d[2];switch(b[0]){case
0:var
s=b[3],t=b[1],v=a(g,b[4]),w=a(g,s);cD(u[2],fg,t[1],w,v);break;case
1:var
x=b[1],y=a(g,b[2]);n(u[2],fh,x[1],y);break;case
2:e(u[2],fi,b[1]);break;case
3:var
z=b[1],A=a(g,b[2]);n(u[2],fj,z[1],A);break;case
4:var
j=b[3],k=j[2],l=b[2],i=l[2],B=j[1],C=l[1],D=b[1],E=k[1],F=P(k[2]),G=a(g,B),I=i[1],J=P(i[2]),K=a(g,C),L=P(i[2]);eq(u[2],fk,L,D,K,J,I,G,F,E);break;case
5:var
f=b[1][1];e(u[2],fl,f[1]);H(c,[0,f[3],f[4]]);var
M=O(f[2]);a(m[27],M);a(m[27],fm);break;case
6:var
h=b[1];e(u[2],fn,h[1]);H(c,[0,h[3],h[4]]);var
N=O(h[2]);a(m[27],N);a(m[27],fo);break;case
7:n(u[2],fp,b[1],b[2]);break;case
8:n(u[2],fq,b[1],b[2]);break;case
9:n(u[2],fr,b[1][1],b[2][1]);break;case
10:n(u[2],fs,b[1][1],b[2][1]);break;case
11:cD(u[2],ft,b[2][1],b[3],b[1]);break;case
12:var
R=b[1],S=a(g,b[2]);n(u[2],fu,R,S);break;case
13:e(u[2],fv,b[1]);break;case
14:var
T=b[1],U=a(g,b[2]);n(u[2],fw,T,U);break;case
15:var
o=b[3],p=b[2],V=o[2],W=p[2];cD(u[2],fx,b[1][1],p[1],o[1]);Q(c,W);a(m[32],0);Q(c,V);a(m[32],0);break;default:var
X=b[1],Y=a(g,b[2]);n(u[2],fy,X,Y)}var
d=r;continue}return a(m[46],m[24])}}function
ah(a){return e(u[4],fz,a)}var
X=[0,0];function
R(a){X[1]=0;return 0}function
S(a){return X[1]}function
b(a){if(aN[1])Q(ah,[0,a,0]);return E(a,X)}function
ax(b,a){return a[2]-b[2]|0}var
ai=a(p[41],ax);function
ay(b){var
c=b[2],d=c[2],e=b[1];return[0,e,[0,a(ai,c[1]),d]]}function
B(i){function
d(k){var
b=k;for(;;){if(b){var
f=b[2],g=b[1],h=a(i,g[1]);if(e(j,h,c)){var
b=f;continue}var
l=d(f);return[0,[0,h,g[2]],l]}return 0}}return d}function
C(c,b){var
d=a(c,b[4]),e=b[3],f=a(B(c),e);return[0,b[1],b[2],f,d]}function
az(b){return a(w,b)}function
I(a){return C(az,a)}function
J(m,l){var
b=m,a=l;for(;;){if(b){if(a){var
g=a[2],f=a[1],i=b[2],d=b[1];if(d[2]===f[2]){var
k=e(h,d[1],f[1]);if(e(j,k,c)){var
b=i,a=g;continue}var
n=J(i,g);return[0,[0,k,d[2]],n]}return f[2]<d[2]?[0,d,J(i,a)]:[0,f,J(b,g)]}return b}return a}}function
Y(d,b,c){var
f=e(h,b[4],c[4]),g=J(b[3],c[3]),i=b[2];return[0,a(d,0),i,g,f]}var
Z=[aW,fA,aU(0)];function
_(a){if(a){var
c=a[2],b=a[1];if(e(j,l(b[1]),d))return[0,b,c];var
f=_(c);return[0,f[1],[0,b,f[2]]]}throw Z}var
T=[aW,fB,aU(0)];function
K(c,a){if(a){var
d=a[2],b=a[1];if(b[2]===c)return[0,b,d];var
e=K(c,d);return[0,e[1],[0,b,e[2]]]}throw T}function
s(f){var
g=f[4],o=f[3],m=f[2],n=f[1];if(0===o)switch(m){case
0:if(e(j,g,c))return 0;b([12,n,g]);throw q;case
1:if(M(g,c))return 0;b([14,n,g]);throw q;default:if(cX(g,c))return 0;b([13,n]);throw q}function
v(a){return l(a[1])}var
h=af(e(p[13],v,o));if(0===m)if(cX(N(g,h),c)){b([1,f,h]);throw q}if(2===m)if(cX(N(g,h),c)){b([2,f[1]]);return 0}if(cX(h,d)){var
s=G(g,h),w=e(k,g,e(i,s,h)),t=[0,n,m,a(B(function(a){return x(a,h)}),o),s];if(0===m)var
r=0;else
if(2===m)var
r=0;else
var
u=[0,f,t,h,w],r=1;if(!r)var
u=[3,f,h];b(u);return[0,t,0]}return[0,f,0]}function
D(o,g,f,c){var
h=g[1],p=c[3],q=g[2];try{var
k=K(q,p)[1],l=e(j,h,d)?a(w,k[1]):e(j,h,ad)?k[1]:a(m[2],fC),n=Y(o,c,C(function(a){return e(i,a,l)},f));b([4,n[1],[0,d,c],[0,l,f]]);return n}catch(a){a=r(a);if(a===T)return c;throw a}}function
$(b,a){var
c=e(i,y,a);return e(k,b,e(i,a,G(e(h,e(i,y,b),a),c)))}function
aj(q,f,H,F){var
g=q[1],j=f[3],I=q[3],t=a(q[2],0);if(0===j){z(I,[0,f,0]);a(m[2],fD)}var
J=a(p[4],j),L=a(p[3],j)[2],M=[0,l(a(p[3],j)[1]),L];function
N(b,a){var
c=b[1],d=b[2];if(A(c,l(a[1]))){var
e=a[2];return[0,l(a[1]),e]}return[0,c,d]}var
u=n(p[16],N,M,J),O=u[2],c=e(h,u[1],d),P=$(f[4],c),Q=f[3],R=a(B(function(a){return $(a,c)}),Q),S=[0,[0,a(w,c),t],R],v=[0,a(g,0),0,S,P],T=e(i,y,c),U=a(w,G(e(h,e(i,y,f[4]),c),T)),V=f[3],W=a(B(function(b){var
d=e(i,y,c);return a(w,G(e(h,e(i,y,b),c),d))}),V);b([5,[0,v,[0,a(g,0),0,W,U],f,c,t]]);var
X=s(v),k=a(p[3],X),r=K(O,k[3])[1];function
Y(a){return s(D(g,r,k,a))}var
Z=e(o[17][aV],Y,H);function
_(a){return s(D(g,r,k,a))}var
aa=e(o[17][aV],_,F),E=D(g,r,k,f),ab=C(function(a){return x(a,c)},E);b([3,E,c]);var
ac=s(ab);return[0,a(p[3],ac),Z,aa]}function
al(d,i){var
b=i;for(;;){var
g=b[3],f=b[2],a=b[1],c=d[1],j=d[3];if(aN[1])z(j,[0,a,f]);try{var
h=_(a[3])[1],k=function(b,c,d){return function(a){return s(D(c,d,b,a))}}(a,c,h),l=e(o[17][aV],k,g),m=function(b,c,d){return function(a){return s(D(c,d,b,a))}}(a,c,h),n=[0,e(o[17][aV],m,f),l];return n}catch(c){c=r(c);if(c===Z){var
b=aj(d,a,f,g);continue}throw c}}}function
aa(k,o){var
f=o;for(;;){var
g=f[2],h=f[1],s=k[3],m=function(a){if(a){var
c=a[2],b=a[1],g=b[3],h=function(a){return e(j,l(a[1]),d)};if(e(p[24],h,g))return[0,b,c];var
f=m(c);return[0,f[1],[0,b,f[2]]]}throw F};if(h){var
t=h[2],u=h[1];try{var
n=m(h),v=n[2],w=n[1],a=w,i=v}catch(b){b=r(b);if(b!==F)throw b;var
a=u,i=t}if(0===a[3]){if(e(j,a[4],c)){b([2,a[1]]);var
f=[0,i,g];continue}b([12,a[1],a[4]]);throw q}var
f=al(k,[0,a,i,g]);continue}if(aN[1])z(s,g);return g}}function
L(o,d){function
y(a){var
b=a[3];if(b)if(e(v,b[1][1],c))return[0,I(a),0];return[0,a,1]}var
f=e(t[1],0,7);function
i(z){var
l=y(z),m=l[2],a=l[1],g=a[3];if(0===g){if(e(v,a[4],c)){b([14,a[1],a[4]]);throw q}return b([2,a[1]])}try{var
o=e(t[6],f,g),i=o[2],j=o[1];if(1===m)if(j)var
k=j[1],C=e(v,k[4],a[4])?(b([7,k[1],a[1]]),k):(b([7,a[1],k[1]]),a),d=[0,[0,C],i];else
var
d=[0,[0,a],i];else
if(i){var
h=i[1];if(A(h[4],a[4]))b([8,h[1],a[1]]);else
b([8,a[1],h[1]]);var
E=A(h[4],a[4])?h:a,d=[0,j,[0,E]]}else
var
d=[0,j,[0,a]];var
p=d[1];if(p){var
s=d[2];if(s){var
u=s[1],w=p[1];if(e(v,w[4],u[4])){b([9,w,I(u)]);throw q}var
x=1}else
var
x=0}else
var
x=0;e(t[9],f,g);var
D=n(t[5],f,g,d);return D}catch(b){b=r(b);if(b===F){var
B=1===m?[0,[0,a],0]:[0,0,[0,a]];return n(t[5],f,g,B)}throw b}}e(p[11],i,d);var
h=[0,0],g=[0,0];function
k(n,f){var
c=f[1];if(c){var
i=f[2];if(i){var
k=i[1],d=c[1];if(e(j,d[4],k[4])){var
l=a(o,0);b([11,l,d,k[1]]);return E([0,l,0,d[3],d[4]],h)}}}var
m=f[2];if(c)E(c[1],g);return m?E(I(m[1]),g):0}e(t[11],k,f);return[0,h[1],g[1]]}var
U=[aW,fE,aU(0)];function
am(g){var
b=e(t[1],0,7);function
h(d,c){try{var
a=e(t[6],b,d),g=l(c);a[1]=e(m[5],a[1],g);var
h=0;return h}catch(a){a=r(a);if(a===F){var
f=[0,l(c)];return n(t[5],b,d,f)}throw a}}function
i(a){var
b=a[3];function
c(a){return h(a[2],a[1])}return e(p[11],c,b)}e(p[11],i,g);var
d=[0,c],a=[0,-1],f=[0,0];function
j(h,g){var
b=g[1];f[1]++;var
i=e(v,b,d[1]),c=i||(-1===a[1]?1:0),j=c?(a[1]=h,d[1]=b,0):c;return j}e(t[11],j,b);if(f[1]<1)throw U;return a[1]}function
an(i,b){function
d(d,b){var
e=d[3],f=d[2],g=d[1];try{var
h=K(i,b[3])[1],j=M(h[1],c)?[0,g,[0,[0,h[1],b],f],e]:[0,g,f,[0,[0,a(w,h[1]),b],e]];return j}catch(a){a=r(a);if(a===T)return[0,[0,b,g],f,e];throw a}}return n(p[16],d,fF,b)}function
ao(u,t,c,g){var
f=0;function
h(h,c){var
j=c[2],f=c[1];function
l(n,l){var
o=l[2],g=l[1],v=C(function(a){return e(i,a,f)},o),p=Y(u,C(function(a){return e(i,a,g)},j),v);b([4,p[1],[0,g,j],[0,f,o]]);var
h=s(p);if(h){var
c=h[1];if(h[2])return a(m[2],fG);if(t){var
w=e(k,g,d),q=e(i,e(k,f,d),w);b([16,c[1],q]);var
x=e(k,c[4],q),r=[0,c[1],1,c[3],x]}else
var
r=c;return[0,r,n]}return n}return n(p[16],l,h,g)}return n(p[16],h,f,c)}function
ab(c,f,b){var
g=c[3],h=c[1],a=an(am(b),b),i=a[1],j=ao(h,f,a[2],a[3]),d=e(m[22],i,j);if(aN[1])z(g,d);return d}function
aA(c,l,d){var
h=c[1],n=c[3];function
q(a){return 2===a[2]?1:0}if(e(p[24],q,d))a(m[2],fH);R(0);function
t(a){return b([6,a])}e(p[11],t,d);var
u=e(o[17][aV],s,d);function
v(a){return 0===a[2]?1:0}var
i=e(p[32],v,u),w=i[1],j=L(h,i[2]),x=j[2],y=[0,e(m[22],w,j[1]),x];function
g(b,d){var
a=aa(c,d);return b<50?f(b+1|0,a):cY(f,[0,a])}function
f(e,f){var
a=L(h,f),b=a[2],c=a[1];if(0===c)return b;var
d=[0,c,b];return e<50?g(e+1|0,d):cY(g,[0,d])}function
A(a){return cZ(g(0,a))}function
B(a){return cZ(f(0,a))}function
k(b){try{var
a=k(B(ab(c,l,b)));return a}catch(a){a=r(a);if(a===U){if(aN[1])z(n,b);return b}throw a}}return k(A(y))}function
V(k,j,i){var
f=k,c=j,d=i;for(;;){if(d){var
g=d[2],b=d[1];switch(b[0]){case
0:if(e(ak[4][1],b[1][1],f)){var
c=[0,b,c],d=g;continue}var
d=g;continue;case
1:var
f=[0,b[1][1],f],c=[0,b,c],d=g;continue;case
2:var
d=g;continue;case
3:if(e(ak[4][1],b[1][1],f)){var
c=[0,b,c],d=g;continue}var
d=g;continue;case
4:var
l=b[3][2],n=b[2][2];if(e(ak[4][1],b[1],f)){var
f=[0,n[1],[0,l[1],f]],c=[0,b,c],d=g;continue}var
d=g;continue;case
5:var
h=b[1],o=h[3];if(e(ak[4][1],h[1][1],f)){var
f=[0,o[1],f],c=[0,b,c],d=g;continue}var
d=g;continue;case
6:if(e(ak[4][1],b[1][1],f)){var
c=[0,b,c],d=g;continue}var
d=g;continue;case
7:var
d=g;continue;case
8:var
d=g;continue;case
9:var
f=[0,b[1][1],[0,b[2][1],f]],c=[0,b,c],d=g;continue;case
10:var
f=[0,b[1][1],[0,b[2][1],f]],c=[0,b,c],d=g;continue;case
11:var
p=b[3],q=b[2];if(e(ak[4][1],b[1],f)){var
f=[0,q[1],[0,p,f]],c=[0,b,c],d=g;continue}var
d=g;continue;case
12:var
f=[0,b[1],f],c=[0,b,c],d=g;continue;case
13:var
f=[0,b[1],f],c=[0,b,c],d=g;continue;case
14:var
f=[0,b[1],f],c=[0,b,c],d=g;continue;case
15:return a(m[2],fI);default:if(e(ak[4][1],b[1],f)){var
c=[0,b,c],d=g;continue}var
d=g;continue}}return[0,f,c]}}function
ap(a){var
g=a[2],h=a[1];function
i(a){return 2===a[2]?1:0}var
j=e(p[32],i,g)[1];function
d(a){var
b=a[3];if(b)if(e(v,b[1][1],c))return[0,I(a),0];return[0,a,1]}var
f=e(t[1],0,7);function
k(a){var
b=d(a),c=b[1];return n(t[5],f,[0,c[3],c[4]],[0,b[2],a])}e(p[11],k,j);function
l(a){if(0===a[2]){var
c=d(a),g=c[1],i=c[2],j=g[4],k=g[3];try{var
h=e(t[6],f,[0,k,j]);b([10,a,h[2],i===h[1]?1:0]);throw q}catch(a){a=r(a);if(a===F)return 0;throw a}}throw[0,a8,fJ]}return e(p[11],l,h)}var
ac=[aW,fK,aU(0)];return[0,j,v,aq,A,M,h,k,i,x,N,c,d,y,ad,l,g,w,ar,as,at,au,av,E,ae,af,G,q,ag,H,W,O,P,z,aw,g,Q,ah,b,S,R,ai,ay,B,C,I,J,Y,Z,_,T,K,s,D,$,aj,al,aa,L,U,am,an,ao,ab,aA,V,ap,ac,function(c,j){var
f=c[1],D=c[3];R(0);function
E(a){return b([6,a])}e(p[11],E,j);function
i(d,a){ap(a);var
b=aa(c,a);return d<50?h(d+1|0,b):cY(h,[0,b])}function
h(j,k){function
l(a){return 2===a[2]?1:0}var
a=e(p[32],l,k),b=a[1],c=L(f,a[2]),d=c[2],g=c[1];if(0===g)return e(m[22],b,d);var
h=[0,g,e(m[22],b,d)];return j<50?i(j+1|0,h):cY(i,[0,h])}function
G(a){return cZ(i(0,a))}function
H(a){return cZ(h(0,a))}function
l(b){try{var
a=l(H(ab(c,0,b)));return a}catch(a){a=r(a);if(a===U){if(aN[1])z(D,b);return b}throw a}}function
I(l){var
c=l;for(;;){var
g=c[1];if(g){var
j=c[2],b=g[1],n=c[3],o=g[2],h=a(f,0),i=a(f,0),q=e(k,b[4],d),r=[0,h,1,b[3],q],s=e(k,a(w,b[4]),d),t=b[3],u=[0,i,1,a(B(w),t),s],v=function(b,c,d){return function(a){return[0,[0,[0,b[1],c,0],a[1]],[0,d,a[2]]]}}(b,i,u),x=e(p[13],v,j),y=function(b,c,d){return function(a){return[0,[0,[0,b[1],c,1],a[1]],[0,d,a[2]]]}}(b,h,r),z=e(p[13],y,j),A=e(m[22],z,x),c=[0,o,A,[0,[0,b[1],[0,b,h,i]],n]];continue}return[0,c[2],c[3]]}}try{var
J=e(o[17][aV],s,j),K=function(a){return 0===a[2]?1:0},u=e(p[32],K,J),M=u[2],N=u[1],O=function(a){return 2===a[2]?1:0},v=e(p[32],O,M),P=v[1],x=L(f,v[2]),Q=x[1],T=e(m[22],x[2],P),W=G([0,e(m[22],N,Q),T]),X=function(a){return 2===a[2]?1:0},y=e(p[32],X,W),Y=y[2],Z=y[1],_=S(0),A=I([0,Z,[0,[0,0,Y],0],0]),$=A[2],ad=A[1],ae=function(a){var
b=a[1],f=a[2];R(0);try{l(f);throw ag}catch(a){a=r(a);if(a===q){var
c=V(0,0,S(0)),d=c[1],g=c[2],h=function(a){return e(ak[4][1],a[2],d)},i=e(p[32],h,b)[1],j=function(a){return a[1]};return[0,e(p[13],j,i),d,b,g]}throw a}},af=e(p[13],ae,ad),ah=function(d){var
b=e(t[1],0,7),a=[0,-1],c=[0,0];function
f(c){try{e(t[6],b,c)[1]++;var
a=0;return a}catch(a){a=r(a);if(a===F)return n(t[5],b,c,[0,1]);throw a}}function
g(a){var
b=a[1];if(b)return e(p[11],f,b);throw[0,ac,a[4],a[2]]}e(p[11],g,d);function
h(e,b){var
d=c[1]<b[1]?1:0,f=d?(a[1]=e,c[1]=b[1],0):d;return f}e(t[11],h,b);return a[1]},g=function(d){try{var
c=ah(d),l=function(g){var
b=g[3];for(;;){if(b){var
d=b[1],e=b[2],f=d[3];if(c===d[1])return f;var
b=e;continue}return a(m[2],fL)}},f=e(p[32],l,d),q=f[2],s=f[1],h=function(a){var
b=a[4],d=a[3],e=a[2],f=a[1];function
g(b,a){return b===a?1:0}return[0,n(o[17][87],g,c,f),e,d,b]},t=e(p[13],h,s),u=e(p[13],h,q),i=g(t),v=i[2],w=i[1],j=g(u),x=j[2],y=j[1],b=e(ak[4][2],c,$),k=b[1],z=b[3],A=b[2],B=function(b,a){return b===a?1:0},C=n(o[17][53],B,v,x),D=[0,[0,[15,k,[0,A,w],[0,z,y]],0],[0,k[1],C]];return D}catch(a){a=r(a);if(a[1]===ac)return[0,a[2],a[3]];throw a}},C=g(af),ai=V(C[2],C[1],_)[2];return ai}catch(a){a=r(a);if(a===q)return V(0,0,S(0))[2];throw a}}]}];c0(414,c5,"Omega_plugin.Omega");var
l=a(c5[2],[0,A[17],A[16],A[12],A[13],A[14],A[15],A[22],A[5],A[6],A[2]]),fM=0;function
aO(c){function
d(e){var
d=a(b[8][11],c);return a(b[i][9],d)}return a(b[32][31][1],d)}function
a9(c){function
d(e){var
d=a(b[8][11],c);return a(b[i][5],d)}return a(b[32][31][1],d)}var
cF=[0,0],a_=[0,0],a$=[0,0],cG=[0,1];function
fN(d,c,b){return a(c,b)}var
fO=[0,0];function
fP(a,b){return a[1]}function
ba(b,a){b[1]=a;return 0}function
fQ(a){return ba(cF,a)}var
fT=[0,0,fS,fR,function(a){return cF[1]},fQ];e(b[42][1],0,fT);function
fU(a){return ba(a_,a)}var
fX=[0,0,fW,fV,function(a){return a_[1]},fU];e(b[42][1],0,fX);function
fY(a){return ba(a$,a)}var
f1=[0,0,f0,fZ,function(a){return a$[1]},fY];e(b[42][1],0,f1);function
f2(a){return ba(cG,a)}var
f5=[0,1,f4,f3,function(a){return cG[1]},f2];e(b[42][1],0,f5);var
c6=[0,0];function
ds(c){var
a=c6[1];function
b(a){a[1][1]=a[2];return 0}return e(o[17][11],b,a)}function
aP(a){var
b=[0,a];c6[1]=[0,[0,b,a],c6[1]];return b}var
dt=aP(0);function
aa(f){var
c=a(m[20],dt[1]),d=e(m[16],f6,c);dt[1]++;return a(b[5][1][6],d)}var
du=aP(0);function
f7(c){var
a=e(b[cE][8],f8,[0,du[1]]);du[1]++;return a}var
dv=aP(0);function
dw(f){var
c=a(m[20],dv[1]),d=e(m[16],f9,c);dv[1]++;return a(b[5][1][6],d)}var
dx=aP(0);function
bb(a){dx[1]++;return dx[1]}var
dy=aP(1e3);function
c7(a){dy[1]++;return dy[1]}var
dz=aP(0);function
dA(a){dz[1]++;return e(b[cE][8],f_,[0,dz[1]])}function
aX(a){return e(u[4],f$,a)}var
c8=[0,0],cH=e(t[1],0,7),c9=e(t[1],0,7);function
dB(b){c8[1]=0;return a(t[2],cH)}function
c_(b){try{var
a=e(t[6],c9,b);return a}catch(a){a=r(a);if(a===F){var
c=dA(0);n(t[5],cH,c,b);n(t[5],c9,b,c);return c}throw a}}function
cI(b){try{var
a=e(t[6],cH,b);return a}catch(a){a=r(a);if(a===F){var
c=c8[1];n(t[5],cH,b,c);n(t[5],c9,c,b);c8[1]++;return c}throw a}}function
N(c){return a(b[k][28][26],c)}function
dC(a){return cD(b[i][44],0,ga,1,[0,[0,a,0]])}function
s(c){return a(b[i][65],c)}function
gb(c){return a(b[i][9],c)}function
L(c){var
e=g(c),j=0,k=h===e?c[1]:d===e?a(f[2],c):c;return a(b[i][82],[0,[0,0,k],j])}function
c$(c,a){return n(b[78][29][1],b[94][2],c,a)}function
dD(c){return function(d){var
a=d;for(;;){if(a){var
b=a[1],e=a[2],f=b[1];if(c===b[2])return f;var
a=e;continue}throw F}}}var
bc=[0,0];function
dE(a){bc[1]=0;return 0}function
G(b){try{var
c=bc[1],d=a(dD(b),c);return d}catch(b){b=r(b);if(b===F)return a(m[2],gc);throw b}}function
gd(c){try{var
d=e(b[5][1][13][3],c,bc[1]);return d}catch(b){b=r(b);if(b===F)return a(m[2],ge);throw b}}function
aF(b,a){bc[1]=[0,[0,b,a],bc[1]];return 0}var
bd=[0,0];function
dF(a){return bd[1]}function
da(a){bd[1]=0;return 0}function
dG(d,c){try{var
e=bd[1],f=a(b[8][67],d),g=n(o[17][119],f,c,e);return g}catch(b){b=r(b);if(b===F)return a(m[2],gf);throw b}}function
dH(d,c,b,a){bd[1]=[0,[0,d,[0,c,b,a]],bd[1]];return 0}function
dI(b){var
a=cG[1];return a?(ds(0),dB(0),dE(0),da(0)):a}var
gh=e(o[18],b[71][27],gg),gi=e(o[18],[0,dJ,0],gh),gj=e(o[18],b[71][26],gi),dK=e(o[18],b[71][24],gj);function
be(e,d,c){var
f=n(b[71][28],e,d,c),g=a(b[49][5],f);return a(b[8][3],g)}var
gk=b[71][24];function
B(a){return be(gl,gk,a)}function
j(a){return be(gm,dK,a)}function
Z(a){return be(go,gn,a)}function
M(a){return be(gq,gp,a)}var
al=[d,function(a){return j(gr)}],am=[d,function(a){return j(gs)}],an=[d,function(a){return j(gt)}],O=[d,function(a){return j(gu)}],P=[d,function(a){return j(gv)}],Q=[d,function(a){return j(gw)}],v=[d,function(a){return j(gx)}],ao=[d,function(a){return j(gy)}],ap=[d,function(a){return j(gz)}],w=[d,function(a){return M(gA)}],H=[d,function(a){return M(gB)}],y=[d,function(a){return M(gC)}],ab=[d,function(a){return M(gD)}],ac=[d,function(a){return M(gE)}],aY=[d,function(a){return M(gF)}],aq=[d,function(a){return M(gG)}],bf=[d,function(a){return Z(gH)}],bg=[d,function(a){return Z(gI)}],bh=[d,function(a){return Z(gJ)}],bi=[d,function(a){return j(gK)}],bj=[d,function(a){return Z(gL)}],bk=[d,function(a){return Z(gM)}],bl=[d,function(a){return Z(gN)}],bm=[d,function(a){return Z(gO)}],bn=[d,function(a){return Z(gP)}],bo=[d,function(a){return Z(gQ)}],bp=[d,function(a){return Z(gR)}],z=[d,function(a){return j(gS)}],bq=[d,function(a){return j(gT)}],br=[d,function(a){return j(gU)}],ar=[d,function(a){return j(gV)}],as=[d,function(a){return j(gW)}],bs=[d,function(a){return j(gX)}],bt=[d,function(a){return j(gY)}],bu=[d,function(a){return j(gZ)}],bv=[d,function(a){return j(g0)}],bw=[d,function(a){return j(g1)}],bx=[d,function(a){return j(g2)}],by=[d,function(a){return j(g3)}],bz=[d,function(a){return j(g4)}],bA=[d,function(a){return j(g5)}],bB=[d,function(a){return j(g6)}],bC=[d,function(a){return j(g7)}],bD=[d,function(a){return j(g8)}],R=[d,function(a){return j(g9)}],I=[d,function(a){return j(g_)}],bE=[d,function(a){return j(g$)}],bF=[d,function(a){return j(ha)}],bG=[d,function(a){return j(hb)}],bH=[d,function(a){return j(hc)}],bI=[d,function(a){return j(hd)}],bJ=[d,function(a){return j(he)}],bK=[d,function(a){return j(hf)}],bL=[d,function(a){return j(hg)}],bM=[d,function(a){return j(hh)}],bN=[d,function(a){return j(hi)}],bO=[d,function(a){return j(hj)}],bP=[d,function(a){return j(hk)}],bQ=[d,function(a){return j(hl)}],S=[d,function(a){return j(hm)}],bR=[d,function(a){return j(hn)}],bS=[d,function(a){return j(ho)}],bT=[d,function(a){return j(hp)}],bU=[d,function(a){return j(hq)}],bV=[d,function(a){return j(hr)}],T=[d,function(a){return j(hs)}],bW=[d,function(a){return j(ht)}],bX=[d,function(a){return j(hu)}],bY=[d,function(a){return j(hv)}],bZ=[d,function(a){return j(hw)}],b0=[d,function(a){return j(hx)}],b1=[d,function(a){return j(hy)}],b2=[d,function(a){return j(hz)}],b3=[d,function(a){return j(hA)}],b4=[d,function(a){return j(hB)}],b5=[d,function(a){return M(hC)}],dL=[d,function(a){return j(hD)}],dM=[d,function(a){return M(hE)}],dN=[d,function(a){return M(hF)}],dO=[d,function(a){return j(hG)}],dP=[d,function(a){return j(hH)}],b6=[d,function(a){return j(hI)}],dQ=[d,function(a){return j(hJ)}],dR=[d,function(a){return j(hK)}],dS=[d,function(a){return j(hL)}],dT=[d,function(a){return j(hM)}],dU=[d,function(a){return j(hN)}],at=[d,function(a){return j(hO)}],au=[d,function(a){return j(hP)}],ad=[d,function(a){return M(hQ)}],ae=[d,function(a){return M(hR)}],aZ=[d,function(a){return M(hS)}],a0=[d,function(a){return M(hT)}],av=[d,function(a){return B(hU)}],b7=[d,function(a){return B(hV)}],b8=[d,function(a){return B(hW)}],aw=[d,function(a){return B(hX)}],ax=[d,function(a){return B(hY)}],b9=[d,function(a){return B(hZ)}],b_=[d,function(a){return B(h0)}],b$=[d,function(a){return B(h1)}],U=[d,function(a){return B(h2)}],ay=[d,function(a){return B(h3)}],az=[d,function(a){return B(h4)}],ca=[d,function(a){return j(h5)}],cb=[d,function(a){return j(h6)}],cc=[d,function(a){return j(h7)}],dV=[d,function(a){return j(h8)}],dW=[d,function(a){return j(h9)}],dX=[d,function(a){return j(h_)}],dY=[d,function(a){return j(h$)}],cd=[d,function(a){return j(ia)}],dZ=[d,function(a){return j(ib)}],d0=[d,function(a){return j(ic)}],d1=[d,function(a){return j(id)}],d2=[d,function(a){return j(ie)}],ce=[d,function(a){return j(ig)}],cf=[d,function(a){return j(ih)}],cg=[d,function(a){return j(ii)}],ch=[d,function(a){return j(ij)}],ci=[d,function(a){return j(ik)}],cj=[d,function(a){return j(il)}],ck=[d,function(a){return j(im)}],cl=[d,function(a){return j(io)}],cm=[d,function(a){return j(ip)}],cn=[d,function(a){return j(iq)}],co=[d,function(a){return j(ir)}],cp=[d,function(a){return j(is)}],cq=[d,function(a){return j(it)}],cr=[d,function(a){return j(iu)}],cs=[d,function(a){return j(iv)}],ct=[d,function(a){return j(iw)}],af=[d,function(a){return B(ix)}],aA=[d,function(a){return B(iy)}],aB=[d,function(a){return B(iz)}],J=[d,function(a){return B(iA)}],cu=[d,function(a){return B(iB)}],aC=[d,function(a){return B(iC)}],cv=[d,function(a){return B(iD)}];function
aD(l,c){var
i=g(c),o=h===i?c[1]:d===i?a(f[2],c):c,j=e(b[8][4],b[27][10],o);if(10===j[0]){var
k=j[1][1],r=a(b[50][1],0);if(e(b[94][6],r,[1,k]))return[1,k]}var
p=e(m[16],l,iE),q=a(ag[3],p);return n(_[3],0,iF,q)}var
d3=[d,function(a){return aD(iG,ac)}],d4=[d,function(a){return aD(iH,aY)}],d5=[d,function(a){return aD(iI,ab)}],db=[d,function(a){return aD(iJ,ad)}],aG=[d,function(a){return aD(iK,ae)}],iM=[d,function(a){return aD(iL,aZ)}],iO=[d,function(a){return aD(iN,a0)}],cJ=[d,function(a){return aD(iP,af)}];function
iQ(c){var
d=a(b[5][1][6],c);return a(b[8][11],d)}function
$(i,e){var
c=g(w),j=[0,i,e],k=h===c?w[1]:d===c?a(f[2],w):w;return a(b[8][14],[0,k,j])}function
cK(i,e){var
c=g(H),j=[0,i,e],k=h===c?H[1]:d===c?a(f[2],H):H;return a(b[8][14],[0,k,j])}function
d6(i,e){var
c=g(ab),j=[0,i,e],k=h===c?ab[1]:d===c?a(f[2],ab):ab;return a(b[8][14],[0,k,j])}function
cw(j,i){var
c=g(v),k=h===c?v[1]:d===c?a(f[2],v):v,e=g(J),l=[0,k,j,i],m=h===e?J[1]:d===e?a(f[2],J):J;return a(b[8][14],[0,m,l])}function
iR(i,e){var
c=g(ad),j=[0,i,e],k=h===c?ad[1]:d===c?a(f[2],ad):ad;return a(b[8][14],[0,k,j])}function
aH(i,e){var
c=g(ae),j=[0,i,e],k=h===c?ae[1]:d===c?a(f[2],ae):ae;return a(b[8][14],[0,k,j])}function
aI(e){var
c=g(y),i=[0,e],j=h===c?y[1]:d===c?a(f[2],y):y;return a(b[8][14],[0,j,i])}function
cx(i,e){var
c=g(aA),j=[0,i,e],k=h===c?aA[1]:d===c?a(f[2],aA):aA;return a(b[8][14],[0,k,j])}function
cL(i,e){var
c=g(aB),j=[0,i,e],k=h===c?aB[1]:d===c?a(f[2],aB):aB;return a(b[8][14],[0,k,j])}function
aE(e){var
c=g(af),i=[0,e],j=h===c?af[1]:d===c?a(f[2],af):af;return a(b[8][14],[0,j,i])}function
iS(j,i){var
c=g(ao),k=h===c?ao[1]:d===c?a(f[2],ao):ao,e=g(J),l=[0,k,j,i],m=h===e?J[1]:d===e?a(f[2],J):J;return a(b[8][14],[0,m,l])}function
aJ(e){var
c=g(aq),i=[0,e],j=h===c?aq[1]:d===c?a(f[2],aq):aq;return a(b[8][14],[0,j,i])}function
C(c){function
i(c){if(e(l[1],c,l[12])){var
j=g(al);return h===j?al[1]:d===j?a(f[2],al):al}var
o=[0,i(e(l[9],c,l[13]))],p=l[11],q=e(l[10],c,l[13]);if(e(l[1],q,p))var
k=g(am),r=h===k?am[1]:d===k?a(f[2],am):am,m=r;else
var
n=g(an),s=h===n?an[1]:d===n?a(f[2],an):an,m=s;return a(b[8][14],[0,m,o])}if(e(l[1],c,l[11])){var
j=g(O);return h===j?O[1]:d===j?a(f[2],O):O}var
o=[0,i(a(l[15],c))];if(e(l[4],c,l[11]))var
k=g(P),p=h===k?P[1]:d===k?a(f[2],P):P,m=p;else
var
n=g(Q),q=h===n?Q[1]:d===n?a(f[2],Q):Q,m=q;return a(b[8][14],[0,m,o])}function
aQ(l,H){function
j(c,a){return n(b[8][61],l,c,a)}var
m=e(b[8][46],l,H),c=m[2],i=m[1],k=e(b[8][4],l,i);if(c){var
o=c[2];if(o){var
p=o[2];if(p){if(!p[2]){var
q=g(J),N=h===q?J[1]:d===q?a(f[2],J):J;if(j(N,i))return[1,16,c]}}else{var
r=g(at),O=h===r?at[1]:d===r?a(f[2],at):at;if(j(i,O))return[1,17,c];var
s=g(au),P=h===s?au[1]:d===s?a(f[2],au):au;if(j(i,P))return[1,18,c];var
t=g(ad),Q=h===t?ad[1]:d===t?a(f[2],ad):ad;if(j(i,Q))return[1,19,c];var
u=g(a0),R=h===u?a0[1]:d===u?a(f[2],a0):a0;if(j(i,R))return[1,20,c];var
v=g(aZ),S=h===v?aZ[1]:d===v?a(f[2],aZ):aZ;if(j(i,S))return[1,21,c];var
w=g(ae),T=h===w?ae[1]:d===w?a(f[2],ae):ae;if(j(i,T))return[1,22,c];var
x=g(aA),U=h===x?aA[1]:d===x?a(f[2],aA):aA;if(j(i,U))return[1,25,c];var
y=g(aB),V=h===y?aB[1]:d===y?a(f[2],aB):aB;if(j(i,V))return[1,26,c];var
z=g(ct),W=h===z?ct[1]:d===z?a(f[2],ct):ct;if(j(i,W))return[1,30,c];var
A=g(av),X=h===A?av[1]:d===A?a(f[2],av):av;if(j(i,X))return[1,31,c];var
B=g(b7),Y=h===B?b7[1]:d===B?a(f[2],b7):b7;if(j(i,Y))return[1,32,c];var
C=g(b8),Z=h===C?b8[1]:d===C?a(f[2],b8):b8;if(j(i,Z))return[1,33,c];var
D=g(aw),$=h===D?aw[1]:d===D?a(f[2],aw):aw;if(j(i,$))return[1,34,c]}}else{var
E=g(af),aa=h===E?af[1]:d===E?a(f[2],af):af;if(j(i,aa))return[1,29,c]}}else{var
F=g(aC),ab=h===F?aC[1]:d===F?a(f[2],aC):aC;if(j(i,ab))return[1,27,c];var
G=g(cv),ac=h===G?cv[1]:d===G?a(f[2],cv):cv;if(j(i,ac))return[1,28,c]}switch(k[0]){case
1:if(!c)return[0,k[1]];break;case
6:if(k[1]){if(!c){var
I=a(ag[3],iT);return n(_[6],0,0,I)}}else
if(!c)return[2,k[2],k[3]];break;case
10:var
K=a(b[81][5],[1,k[1][1]]);return[1,[0,a(b[47][22],K)],c];case
11:var
L=a(b[81][5],[2,k[1][1]]);return[1,[0,a(b[47][22],L)],c];case
12:var
M=a(b[81][5],[3,k[1][1]]);return[1,[0,a(b[47][22],M)],c]}return 0}function
cy(c,p){function
k(d,a){return n(b[8][61],c,d,a)}var
l=e(b[8][46],c,p),i=l[2],j=l[1];e(b[8][4],c,j);if(!i){var
m=g(v),q=h===m?v[1]:d===m?a(f[2],v):v;if(k(j,q))return[1,23,i];var
o=g(U),r=h===o?U[1]:d===o?a(f[2],U):U;if(k(j,r))return[1,24,i]}return 0}function
cz(k,I){function
j(c,a){return n(b[8][61],k,c,a)}var
l=e(b[8][46],k,I),c=l[2],i=l[1],m=e(b[8][4],k,i);if(c){var
o=c[2];if(o){if(!o[2]){var
p=g(w),J=h===p?w[1]:d===p?a(f[2],w):w;if(j(i,J))return[1,0,c];var
q=g(H),K=h===q?H[1]:d===q?a(f[2],H):H;if(j(i,K))return[1,1,c];var
r=g(ab),L=h===r?ab[1]:d===r?a(f[2],ab):ab;if(j(i,L))return[1,2,c];var
s=g(b9),M=h===s?b9[1]:d===s?a(f[2],b9):b9;if(j(i,M))return[1,6,c];var
t=g(b_),N=h===t?b_[1]:d===t?a(f[2],b_):b_;if(j(i,N))return[1,7,c];var
u=g(ax),R=h===u?ax[1]:d===u?a(f[2],ax):ax;if(j(i,R))return[1,8,c]}}else{var
v=g(ac),S=h===v?ac[1]:d===v?a(f[2],ac):ac;if(j(i,S))return[1,3,c];var
x=g(aY),T=h===x?aY[1]:d===x?a(f[2],aY):aY;if(j(i,T))return[1,5,c];var
z=g(y),U=h===z?y[1]:d===z?a(f[2],y):y;if(j(i,U))return[1,4,c];var
A=g(b$),V=h===A?b$[1]:d===A?a(f[2],b$):b$;if(j(i,V))return[1,9,c];var
B=g(ay),W=h===B?ay[1]:d===B?a(f[2],ay):ay;if(j(i,W))return[1,10,c];var
C=g(P),X=h===C?P[1]:d===C?a(f[2],P):P;if(j(i,X))return[1,13,c];var
D=g(Q),Y=h===D?Q[1]:d===D?a(f[2],Q):Q;if(j(i,Y))return[1,12,c];var
E=g(aq),Z=h===E?aq[1]:d===E?a(f[2],aq):aq;if(j(i,Z))return[1,15,c]}}else{var
F=g(az),_=h===F?az[1]:d===F?a(f[2],az):az;if(j(i,_))return[1,11,c];var
G=g(O),$=h===G?O[1]:d===G?a(f[2],O):O;if(j(i,$))return[1,14,c];if(1===m[0])return[0,m[1]]}return 0}function
d7(j,u){function
c(c,a){return n(b[8][61],j,c,a)}function
i(t){var
o=e(b[8][46],j,t),k=o[2],n=o[1];if(k){if(!k[2]){var
p=k[1],q=g(an),u=h===q?an[1]:d===q?a(f[2],an):an;if(c(n,u)){var
v=i(p),w=e(l[8],l[13],v);return e(l[6],l[12],w)}var
r=g(am),x=h===r?am[1]:d===r?a(f[2],am):am;if(c(n,x)){var
y=i(p);return e(l[8],l[13],y)}}}else{var
s=g(al),z=h===s?al[1]:d===s?a(f[2],al):al;if(c(n,z))return l[12]}return a(m[2],iU)}var
p=e(b[8][46],j,u),k=p[2],o=p[1];if(k){if(!k[2]){var
q=k[1],r=g(P),v=h===r?P[1]:d===r?a(f[2],P):P;if(c(o,v))return i(q);var
s=g(Q),w=h===s?Q[1]:d===s?a(f[2],Q):Q;if(c(o,w)){var
x=i(q);return a(l[17],x)}}}else{var
t=g(O),y=h===t?O[1]:d===t?a(f[2],O):O;if(c(o,y))return l[11]}return a(m[2],iV)}function
cM(C,B,f,c){function
d(f,h,u){var
c=e(b[8][4],C,u);if(5===c[0]){var
ao=c[3],ap=c[2],aq=[0,d(f,h,c[1]),ap,ao];return a(b[8][20],aq)}if(h){var
i=h[1];if(typeof
i==="number")switch(i){case
0:var
k=h[2];switch(c[0]){case
6:var
G=c[2],H=c[1],I=[0,H,G,d(f+1|0,k,c[3])];return a(b[8][8],I);case
7:var
J=c[2],K=c[1],L=[0,K,J,d(f+1|0,k,c[3])];return a(b[8][12],L);case
8:var
M=c[3],N=c[2],O=c[1],P=[0,O,N,M,d(f+1|0,k,c[4])];return a(b[8][18],P);case
14:var
g=0;break;default:var
g=1}break;case
1:var
p=h[2];switch(c[0]){case
6:var
T=c[3],U=c[1],V=[0,U,d(f,p,c[2]),T];return a(b[8][8],V);case
7:var
W=c[3],X=c[1],Y=[0,X,d(f,p,c[2]),W];return a(b[8][12],Y);case
8:var
Z=c[4],_=c[2],$=c[1],aa=[0,$,_,d(f,p,c[3]),Z];return a(b[8][18],aa);case
14:var
g=0;break;default:var
g=1}break;case
2:var
ab=h[2];switch(c[0]){case
9:var
ac=c[2],ad=[0,d(f,ab,c[1]),ac];return a(b[8][14],ad);case
14:var
g=0;break;default:var
g=1}break;default:var
ae=h[2];switch(c[0]){case
9:var
af=c[1],q=a(o[19][8],c[2]);q[1]=d(f,ae,ai(q,0)[1]);return a(b[8][14],[0,af,q]);case
14:var
g=0;break;default:var
g=1}}else
if(0===i[0]){var
y=i[1],ag=h[2];switch(c[0]){case
9:var
ah=c[1],r=a(o[19][8],c[2]),z=y-1|0,A=y-1|0,aj=d(f,ag,ai(r,z)[z+1]);ai(r,A)[A+1]=aj;return a(b[8][14],[0,ah,r]);case
14:var
g=0;break;default:var
g=1}}else{var
s=i[1],ak=h[2];switch(c[0]){case
13:var
al=c[3],am=c[2],an=c[1],t=a(o[19][8],c[4]);t[s+1]=d(f,ak,ai(t,s)[s+1]);return a(b[8][75],[0,an,am,al,t]);case
14:var
g=0;break;default:var
g=1}}if(g){var
D=a(o[17][1],h),E=a(m[20],D),F=e(m[16],iW,E);return a(m[2],F)}var
v=c[1],l=v[2],n=l[3],w=v[1],j=w[2],Q=l[2],R=l[1],x=a(o[19][8],n),S=d(f+(n.length-1)|0,h,ai(n,j)[j+1]);ai(x,j)[j+1]=S;return a(b[8][78],[0,w,[0,R,Q,x]])}return e(B,f,u)}return d(1,f,c)}function
d8(s,r,q){var
c=r,f=q;for(;;){var
d=e(b[8][4],s,f);if(5===d[0]){var
f=d[1];continue}if(c){var
h=c[1];if(typeof
h==="number")switch(h){case
0:var
i=c[2];switch(d[0]){case
6:var
c=i,f=d[3];continue;case
7:var
c=i,f=d[3];continue;case
8:var
c=i,f=d[4];continue;case
14:var
g=0;break;default:var
g=1}break;case
1:var
j=c[2];switch(d[0]){case
6:var
c=j,f=d[2];continue;case
7:var
c=j,f=d[2];continue;case
8:var
c=j,f=d[3];continue;case
14:var
g=0;break;default:var
g=1}break;case
2:var
w=c[2];switch(d[0]){case
9:var
c=w,f=d[1];continue;case
14:var
g=0;break;default:var
g=1}break;default:var
x=c[2];switch(d[0]){case
9:var
c=x,f=ai(d[2],0)[1];continue;case
14:var
g=0;break;default:var
g=1}}else
if(0===h[0]){var
y=c[2],z=h[1];switch(d[0]){case
9:var
n=z-1|0,c=y,f=ai(d[2],n)[n+1];continue;case
14:var
g=0;break;default:var
g=1}}else{var
p=h[1],A=c[2];switch(d[0]){case
13:var
c=A,f=ai(d[4],p)[p+1];continue;case
14:var
g=0;break;default:var
g=1}}if(g){var
t=a(o[17][1],c),u=a(m[20],t),v=e(m[16],iX,u);return a(m[2],v)}var
k=d[1],l=k[1][2],f=ai(k[2][3],l)[l+1];continue}return f}}function
dc(g,f,e,d){var
c=[0,a(b[8][9],0)],h=cM(g,function(e,d){c[1]=d;return a(b[8][9],e)},e,d),i=c[1],j=[0,[0,a(b[5][1][6],iY)],f,h];return[0,a(b[8][12],j),i]}function
V(j){function
c(c){var
d=a(b[78][29][7],c),f=a(o[17][6],j);function
g(b,a){return c$(c,a)}var
h=cM(a(b[78][29][2],c),g,f,d);return e(b[i][68],h,2)}return a(b[32][31][3],c)}function
aK(d){var
c=d;for(;;)switch(c[0]){case
0:var
e=c[2],f=c[1];a(m[27],iZ);aK(f);a(m[27],i0);aK(e);return a(m[27],i1);case
1:var
g=c[1];a(m[27],i2);var
c=g;continue;case
2:var
h=c[2],i=c[1];a(m[27],i3);aK(i);a(m[27],i4);aK(h);return a(m[27],i5);case
3:var
j=a(b[5][1][8],c[1]);return a(m[27],j);case
4:var
k=a(l[16],c[1]);return a(m[27],k);default:return a(m[27],i6)}}function
W(c){var
b=c;for(;;)switch(b[0]){case
0:return a(m[2],i7);case
1:var
b=b[1];continue;case
2:var
b=b[1];continue;case
3:return cI(b[1]);case
4:return-1;default:return-1}}function
x(c){switch(c[0]){case
0:var
k=c[1],l=x(c[2]),e=g(w),m=[0,x(k),l],n=h===e?w[1]:d===e?a(f[2],w):w;return a(b[8][14],[0,n,m]);case
1:var
i=g(y),o=[0,x(c[1])],p=h===i?y[1]:d===i?a(f[2],y):y;return a(b[8][14],[0,p,o]);case
2:var
q=c[1],r=x(c[2]),j=g(H),s=[0,x(q),r],t=h===j?H[1]:d===j?a(f[2],H):H;return a(b[8][14],[0,t,s]);case
3:return a(b[8][11],c[1]);case
4:return C(c[1]);default:return c[1]}}function
d9(i,h){var
p=0;return function(q){var
c=p,b=q;for(;;){switch(b[0]){case
0:var
d=b[1];if(2===d[0]){var
e=d[1];if(3===e[0]){var
f=d[2];if(4===f[0]){var
k=b[2],l=f[1],c=[0,[0,l,cI(e[1])],c],b=k;continue}}}break;case
4:var
m=b[1],g=bb(0);aF(i,g);return[0,g,h,a(o[17][6],c),m]}var
j=a(ag[3],i8);return n(_[3],0,0,j)}}}function
K(b){function
c(a){if(a){var
d=a[1],e=d[2],f=d[1],g=c(a[2]);return[0,[2,[3,c_(e)],[4,f]],g]}return[4,b[4]]}return c(b[3])}function
dd(d,a,c){var
f=e(b[55][3],a,c);return eq(b[34][9],d,a,0,0,0,0,0,0,f)}function
de(i,n,c,m){function
j(j){var
p=a(b[78][29][7],j),q=a(b[78][29][5],j),r=a(o[17][6],n),k=dc(a(b[78][29][2],j),i,r,p),l=k[1],s=k[2];function
t(n){var
p=a(b[8][9],1),j=g(ce),o=[0,l,0],r=[0,i,c,a(b[8][9],2),p,s,m],t=h===j?ce[1]:d===j?a(f[2],ce):ce,u=a(b[8][14],[0,t,r]),v=[0,a(b[8][9],1),[0,c,0]],w=a(b[8][49],v),x=[0,[0,a(b[5][1][6],i9)],w,u],y=a(b[8][12],x),z=e(b[8][5],i,b[8][7]),A=[0,[0,a(b[5][1][6],i_)],z,y],B=[0,a(b[8][12],A),o],C=a(b[8][49],B),k=dd(q,n,a(b[8][14],[0,l,[0,c]])),D=k[1];return[0,D,a(b[8][49],[0,C,[0,k[2],0]])]}return e(b[eJ][1],0,t)}return a(b[32][31][3],j)}function
cN(i,e,c){var
b=g(v),j=h===b?v[1]:d===b?a(f[2],v):v;return de(j,i,e,c)}function
d_(i,e,c){var
b=g(U),j=h===b?U[1]:d===b?a(f[2],U):U;return de(j,i,e,c)}function
a1(e,d,c){return cN(e,d,a(b[8][49],[0,c[1],c[2]]))}function
d$(e,d,c){return d_(e,d,a(b[8][49],[0,c[1],c[2]]))}function
df(d,c){function
f(f){var
i=a(b[78][29][5],d),j=e(b[78][29][10],d,c),g=e(b[8][4],f,j);if(6===g[0]){var
h=dd(i,f,g[2]),k=h[1];return[0,k,a(b[8][49],[0,c,[0,h[2],0]])]}throw[0,a8,i$]}return e(b[eJ][1],0,f)}function
q(m,l,k){function
c(c){var
n=a(b[78][29][7],c),i=g(v),p=a(o[17][6],m),q=h===i?v[1]:d===i?a(f[2],v):v,j=dc(a(b[78][29][2],c),q,p,n),r=j[2],s=j[1];function
t(d){return d8(a(b[78][29][2],c),d,r)}var
u=e(o[17][12],t,l),w=[0,k,e(o[18],u,[0,s,0])];return df(c,a(b[8][49],w))}return a(b[32][31][3],c)}function
a2(f,g){function
c(c){var
d=a(b[78][29][2],c);function
j(l,k){if(0===l)return c$(c,k);var
f=e(b[8][4],d,k);if(9===f[0]){var
g=f[2];if(2===g.length-1){var
m=f[1],n=g[2],h=e(b[8][4],d,g[1]);if(9===h[0]){var
i=h[2];if(2===i.length-1){var
o=h[1],p=i[1],q=c$(c,i[2]),r=j(l-1|0,n),s=[0,m,[0,a(b[8][14],[0,o,[0,p,q]]),r]];return a(b[8][14],s)}}throw[0,a8,jb]}}throw[0,a8,ja]}var
h=a(o[17][1],f),k=a(o[17][1],g)-h|0,l=a(b[78][29][7],c),m=a(o[17][6],f),n=cM(d,function(b,a){return j(k,a)},m,l);return e(b[i][68],n,2)}return a(b[32][31][1],c)}function
a3(i,m){var
b=m[2],c=m[1];switch(c[0]){case
0:var
n=c[2],j=c[1];if(0===b[0]){var
o=b[1],D=b[2],E=W(o),F=W(j);if(e(l[19],F,E)){var
p=a3([0,jc,i],[0,n,b]),r=g(z),G=p[1],H=[0,j,p[2]],I=h===r?z[1]:d===r?a(f[2],z):z;return[0,[0,q(i,jd,I),G],H]}var
s=a3([0,je,i],[0,c,D]),t=g(ar),J=s[1],K=[0,o,s[2]],L=h===t?ar[1]:d===t?a(f[2],ar):ar;return[0,[0,q(i,jf,L),J],K]}var
M=W(b),N=W(j);if(e(l[19],N,M)){var
u=a3([0,jg,i],[0,n,b]),v=g(z),O=u[1],P=[0,j,u[2]],Q=h===v?z[1]:d===v?a(f[2],z):z;return[0,[0,q(i,jh,Q),O],P]}var
w=g(as),R=[0,b,c],S=0,T=h===w?as[1]:d===w?a(f[2],as):as;return[0,[0,q(i,ji,T),S],R];case
4:var
af=c[1];switch(b[0]){case
0:var
k=0;break;case
4:var
ag=[4,e(A[12],af,b[1])];return[0,[0,V(i),0],ag];default:var
k=1}break;default:var
k=0}if(!k)if(0===b[0]){var
x=b[1],U=b[2],X=W(c),Y=W(x);if(e(l[19],Y,X)){var
y=a3([0,jj,i],[0,c,U]),B=g(ar),Z=y[1],_=[0,x,y[2]],$=h===B?ar[1]:d===B?a(f[2],ar):ar;return[0,[0,q(i,jk,$),Z],_]}return[0,0,[0,c,b]]}var
aa=W(b),ab=W(c);if(e(l[18],ab,aa)){var
C=g(as),ac=[0,b,c],ad=0,ae=h===C?as[1]:d===C?a(f[2],as):as;return[0,[0,q(i,jl,ae),ad],ac]}return[0,0,[0,c,b]]}function
ea(o,E,i,D,b){function
c(b,m){var
i=m[1];if(i){var
j=m[2],k=i[2],p=i[1],r=p[2],F=p[1];if(j){var
n=j[2],s=j[1],t=s[2],G=s[1];if(r===t){var
u=g(bD),H=h===u?bD[1]:d===u?a(f[2],bD):bD,v=q(b,jm,H),J=l[11],K=e(A[14],D,G),L=e(A[14],E,F),M=e(A[12],L,K);if(e(l[1],M,J)){var
w=g(S),N=h===w?S[1]:d===w?a(f[2],S):S,O=q(b,jn,N),P=[0,O,c(b,[0,k,n])];return[0,v,[0,V([0,jp,[0,jo,b]]),P]]}return[0,v,c([0,jq,b],[0,k,n])]}if(e(l[19],r,t)){var
x=g(R),Q=c([0,jr,b],[0,k,j]),T=h===x?R[1]:d===x?a(f[2],R):R;return[0,q(b,js,T),Q]}var
y=g(I),U=c([0,jt,b],[0,i,n]),W=h===y?I[1]:d===y?a(f[2],I):I;return[0,q(b,ju,W),U]}var
z=g(R),X=c([0,jv,b],[0,k,0]),Y=h===z?R[1]:d===z?a(f[2],R):R;return[0,q(b,jw,Y),X]}var
B=m[2];if(B){var
C=g(I),Z=c([0,jx,b],[0,0,B[2]]),_=h===C?I[1]:d===C?a(f[2],I):I;return[0,q(b,jy,_),Z]}return[0,a2(o,b),0]}return c(o,[0,i,b])}function
cO(o,i,E,b){function
c(b,m){var
i=m[1];if(i){var
j=m[2],k=i[2],p=i[1],r=p[2],F=p[1];if(j){var
n=j[2],s=j[1],t=s[2],G=s[1];if(r===t){var
u=g(bG),H=h===u?bG[1]:d===u?a(f[2],bG):bG,v=q(b,jz,H),J=l[11],K=e(A[14],E,G),L=e(A[12],F,K);if(e(l[1],L,J)){var
w=g(S),M=h===w?S[1]:d===w?a(f[2],S):S,N=q(b,jA,M),O=[0,N,c(b,[0,k,n])];return[0,v,[0,V([0,jC,[0,jB,b]]),O]]}return[0,v,c([0,jD,b],[0,k,n])]}if(e(l[19],r,t)){var
x=g(z),P=c([0,jE,b],[0,k,j]),Q=h===x?z[1]:d===x?a(f[2],z):z;return[0,q(b,jF,Q),P]}var
y=g(I),R=c([0,jG,b],[0,i,n]),T=h===y?I[1]:d===y?a(f[2],I):I;return[0,q(b,jH,T),R]}var
B=g(z),U=c([0,jI,b],[0,k,0]),W=h===B?z[1]:d===B?a(f[2],z):z;return[0,q(b,jJ,W),U]}var
C=m[2];if(C){var
D=g(I),X=c([0,jK,b],[0,0,C[2]]),Y=h===D?I[1]:d===D?a(f[2],I):I;return[0,q(b,jL,Y),X]}return[0,a2(o,b),0]}return c(o,[0,i,b])}function
dg(c,b){if(b){var
m=b[2];if(e(l[4],b[1][1],l[11]))var
i=g(bE),n=h===i?bE[1]:d===i?a(f[2],bE):bE,j=n;else
var
k=g(bF),p=h===k?bF[1]:d===k?a(f[2],bF):bF,j=p;var
o=q(c,jM,j);return[0,o,dg(c,m)]}return[0,V(c),0]}function
cA(i,j,c){switch(c[0]){case
0:var
v=c[2],k=cA([0,jN,i],j,c[1]),w=k[2],x=k[1],m=cA([0,jO,i],j,v),y=[0,w,m[2]],p=g(bS),z=e(o[18],x,m[1]),A=h===p?bS[1]:d===p?a(f[2],bS):bS;return[0,[0,q(i,jP,A),z],y];case
1:var
B=c[1],D=[2,B,[4,a(l[17],j)]],r=g(bT),E=[0,V([0,jQ,i]),0],F=h===r?bT[1]:d===r?a(f[2],bT):bT;return[0,[0,q(i,jR,F),E],D];case
2:var
s=c[2],G=c[1];if(4===s[0]){var
J=[2,G,[4,e(l[8],j,s[1])]],t=g(br),K=[0,V([0,jT,i]),0],L=h===t?br[1]:d===t?a(f[2],br):br;return[0,[0,q(i,jU,L),K],J]}var
I=a(ag[3],jS);return n(_[6],0,0,I);case
3:return[0,0,[2,c,[4,j]]];case
4:var
M=[4,e(l[8],j,c[1])];return[0,[0,V(i),0],M];default:var
N=c[1],u=g(H),O=[0,C(j),N],P=h===u?H[1]:d===u?a(f[2],H):H;return[0,0,[5,a(b[8][14],[0,P,O])]]}}function
cP(c){function
e(b,i){if(i){var
j=g(bH),k=e([0,jV,b],i[2]),l=h===j?bH[1]:d===j?a(f[2],bH):bH;return[0,q(b,jW,l),k]}return[0,a2(c,b),0]}return function(a){return e(c,a)}}function
eb(c){function
e(b,i){if(i){var
j=g(z),k=e([0,jX,b],i[2]),l=h===j?z[1]:d===j?a(f[2],z):z;return[0,q(b,jY,l),k]}return[0,a2(c,b),0]}return function(a){return e(c,a)}}function
cQ(c){function
e(b,i){if(i){var
j=g(R),k=e([0,jZ,b],i[2]),l=h===j?R[1]:d===j?a(f[2],R):R;return[0,q(b,j0,l),k]}return[0,a2(c,b),0]}return function(a){return e(c,a)}}function
cR(i,c){switch(c[0]){case
0:var
v=c[2],j=cR([0,j1,i],c[1]),w=j[2],x=j[1],k=cR([0,j2,i],v),z=[0,w,k[2]],m=g(bU),A=e(o[18],x,k[1]),B=h===m?bU[1]:d===m?a(f[2],bU):bU;return[0,[0,q(i,j3,B),A],z];case
1:var
p=g(bW),C=c[1],D=0,E=h===p?bW[1]:d===p?a(f[2],bW):bW;return[0,[0,q(i,j4,E),D],C];case
2:var
r=c[2],F=c[1];if(4===r[0]){var
H=[2,F,[4,a(l[17],r[1])]],s=g(bV),I=[0,V([0,j6,i]),0],J=h===s?bV[1]:d===s?a(f[2],bV):bV;return[0,[0,q(i,j7,J),I],H]}var
G=a(ag[3],j5);return n(_[6],0,0,G);case
3:var
t=g(T),K=[2,c,[4,l[14]]],L=0,M=h===t?T[1]:d===t?a(f[2],T):T;return[0,[0,q(i,j8,M),L],K];case
4:var
N=[4,a(l[17],c[1])];return[0,[0,V(i),0],N];default:var
u=g(y),O=[0,c[1]],P=h===u?y[1]:d===u?a(f[2],y):y;return[0,0,[5,a(b[8][14],[0,P,O])]]}}function
ah(k,j,p){function
s(h,e){try{var
c=dG(k,e),g=c[1],l=a(b[8][11],c[2]),m=[0,[0,cN(j,a(b[8][11],g),l),0],[3,g]];return m}catch(c){c=r(c);if(a(_[20],c)){var
d=dw(0),f=aa(0);dH(e,d,f,h);var
i=a(b[8][11],f);return[0,[0,cN(j,a(b[8][11],d),i),0],[3,d]]}throw c}}try{var
m=cz(k,p);if(typeof
m==="number")var
i=0;else
switch(m[0]){case
0:var
t=[0,0,[3,m[1]]],i=1;break;case
1:var
u=m[1];if(typeof
u==="number")if(16<=u)var
i=0;else{switch(u){case
0:var
v=m[2];if(v){var
x=v[2];if(x)if(x[2])var
i=0,c=0;else
var
af=x[1],M=ah(k,[0,j9,j],v[1]),ag=M[2],ai=M[1],N=ah(k,[0,j_,j],af),aj=N[1],O=a3(j,[0,ag,N[2]]),ak=O[2],al=e(o[18],aj,O[1]),n=[0,e(o[18],ai,al),ak],c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;case
1:var
z=m[2];if(z){var
A=z[2];if(A)if(A[2])var
i=0,c=0;else{var
am=A[1],P=ah(k,[0,j$,j],z[1]),B=P[2],Q=P[1],R=ah(k,[0,ka,j],am),D=R[2],S=R[1];if(4===D[0])var
V=cA(j,D[1],B),as=V[2],at=e(o[18],S,V[1]),E=[0,e(o[18],Q,at),as];else
if(4===B[0])var
T=g(bs),an=B[1],ao=h===T?bs[1]:d===T?a(f[2],bs):bs,ap=q(j,kb,ao),U=cA(j,an,D),aq=U[2],ar=e(o[18],S,[0,ap,U[1]]),E=[0,e(o[18],Q,ar),aq];else
var
E=s(0,p);var
n=E,c=1}else
var
i=0,c=0}else
var
i=0,c=0;break;case
2:var
F=m[2];if(F){var
G=F[2];if(G)if(G[2])var
i=0,c=0;else
var
W=g(y),au=F[1],av=[0,G[1]],aw=h===W?y[1]:d===W?a(f[2],y):y,X=g(w),ax=[0,au,a(b[8][14],[0,aw,av])],ay=h===X?w[1]:d===X?a(f[2],w):w,Y=ah(k,j,a(b[8][14],[0,ay,ax])),az=Y[2],aA=Y[1],n=[0,[0,L(d5),aA],az],c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;case
3:var
H=m[2];if(H)if(H[2])var
i=0,c=0;else
var
aB=H[1],Z=g(w),aC=[0,aB,C(l[12])],aD=h===Z?w[1]:d===Z?a(f[2],w):w,$=ah(k,j,a(b[8][14],[0,aD,aC])),aE=$[2],aF=$[1],n=[0,[0,L(d3),aF],aE],c=1;else
var
i=0,c=0;break;case
4:var
I=m[2];if(I)if(I[2])var
i=0,c=0;else
var
ab=ah(k,[0,kc,j],I[1]),aG=ab[1],ac=cR(j,ab[2]),aH=ac[2],n=[0,e(o[18],aG,ac[1]),aH],c=1;else
var
i=0,c=0;break;case
5:var
J=m[2];if(J)if(J[2])var
i=0,c=0;else
var
aI=J[1],ad=g(w),aJ=[0,aI,C(l[14])],aK=h===ad?w[1]:d===ad?a(f[2],w):w,ae=ah(k,j,a(b[8][14],[0,aK,aJ])),aL=ae[2],aM=ae[1],n=[0,[0,L(d4),aM],aL],c=1;else
var
i=0,c=0;break;case
15:var
K=m[2];if(K)if(K[2])var
i=0,c=0;else
var
n=s(1,K[1]),c=1;else
var
i=0,c=0;break;case
12:case
13:case
14:try{var
aN=[0,0,[4,d7(k,p)]],n=aN,c=1}catch(b){b=r(b);if(!a(_[20],b))throw b;var
n=s(0,p),c=1}break;default:var
i=0,c=0}if(c)var
t=n,i=1}else
var
i=0;break;default:var
i=0}if(!i)var
t=s(0,p);return t}catch(c){c=r(c);if(a(b[99][2],c))return s(0,p);throw c}}function
dh(e,c,b){switch(c[0]){case
2:var
i=c[1],t=c[2];switch(b[0]){case
2:if(3===i[0]){var
j=g(bQ),u=[2,[3,i[1]],[0,c[2],b[2]]],v=h===j?bQ[1]:d===j?a(f[2],bQ):bQ;return[0,q(e,ke,v),u]}break;case
3:var
k=g(bP),w=[2,[3,b[1]],[0,t,[4,l[12]]]],x=h===k?bP[1]:d===k?a(f[2],bP):bP;return[0,q(e,kf,x),w]}break;case
3:var
o=c[1];switch(b[0]){case
2:var
p=g(bO),y=[2,[3,o],[0,b[2],[4,l[12]]]],z=h===p?bO[1]:d===p?a(f[2],bO):bO;return[0,q(e,kg,z),y];case
3:var
r=g(bN),A=[2,[3,o],[4,l[13]]],B=h===r?bN[1]:d===r?a(f[2],bN):bN;return[0,q(e,kh,B),A]}break}aK(c);a(m[32],0);aK(b);a(m[32],0);a(m[46],m[24]);var
s=a(ag[3],kd);return n(_[6],0,0,s)}function
cB(i,b){switch(b[0]){case
2:var
j=b[1];if(3===j[0]){var
k=b[2],p=j[1];if(4===k[0])return[0,0,b];var
c=function(b){switch(b[0]){case
0:var
d=b[1],f=c(b[2]),g=c(d);return e(A[12],g,f);case
4:return b[1];default:var
h=a(ag[3],kj);return n(_[6],0,0,h)}},r=[2,[3,p],[4,c(k)]];return[0,[0,V([0,kk,i]),0],r]}break;case
3:var
m=g(bM),s=[2,[3,b[1]],[4,l[12]]],t=0,u=h===m?bM[1]:d===m?a(f[2],bM):bM;return[0,[0,q(i,kl,u),t],s]}aK(b);var
o=a(ag[3],ki);return n(_[6],0,0,o)}function
a4(b,j){switch(j[0]){case
0:var
c=j[2],i=j[1];switch(c[0]){case
0:var
k=c[1],A=c[2],B=W(k);if(W(i)===B){var
m=dh([0,km,b],i,k),n=g(bq),C=m[2],D=m[1],E=h===n?bq[1]:d===n?a(f[2],bq):bq,F=q(b,kn,E),p=a4(b,[0,C,A]);return[0,[0,F,[0,D,p[1]]],p[2]]}var
r=cB([0,ko,b],i),G=r[2],H=r[1],s=a4([0,kp,b],c),I=[0,G,s[2]];return[0,e(o[18],H,s[1]),I];case
4:var
O=c[1],x=cB([0,ks,b],i);return[0,x[1],[0,x[2],[4,O]]];default:var
J=W(c);if(W(i)===J){var
t=dh(b,i,c),K=t[1],u=a4(b,t[2]);return[0,[0,K,u[1]],u[2]]}var
v=cB([0,kq,b],i),L=v[2],M=v[1],w=a4([0,kr,b],c),N=[0,L,w[2]];return[0,e(o[18],M,w[1]),N]}case
4:return[0,0,j];default:var
y=cB(b,j),z=g(bR),P=y[1],Q=[0,y[2],[4,l[11]]],R=h===z?bR[1]:d===z?a(f[2],bR):bR,S=[0,q(b,kt,R),0];return[0,e(o[18],P,S),Q]}}function
cS(i,b){if(0===b[0]){var
c=b[1];if(2===c[0])if(3===c[1][0]){var
k=c[2];if(4===k[0]){var
o=b[2];if(e(l[1],k[1],l[11])){var
m=g(S),p=h===m?S[1]:d===m?a(f[2],S):S,r=q(i,kv,p),n=cS(i,o);return[0,[0,r,n[1]],n[2]]}}}var
j=cS([0,ku,i],b[2]);return[0,j[1],[0,c,j[2]]]}return[0,0,b]}function
di(bk){var
j=a(b[5][1][6],kw),m=a(b[5][1][6],kx),n=a(b[5][1][6],ky),y=C(l[11]);function
o(bl){var
p=bl;for(;;){if(p){var
c=p[1];switch(c[0]){case
0:var
ag=c[2],ah=c[1],bm=p[2],bn=c[4],bo=c[3],t=G(ah[1]),ai=x(K(ah)),aj=x(K(ag)),D=C(bo),R=C(bn),ak=$(cK(aj,D),R),bp=cw(ai,ak),bq=ag[3],br=a(cQ(kz),bq),bs=b[i][3],bD=N(br),bE=[0,e(b[k][28][4],bD,bs),0],bF=[0,b[i][84],[0,b[i][3],0]],bG=[0,L(aG),bF],bH=[0,a(b[k][28][26],bG),0],bM=[0,b[i][84],[0,b[i][3],0]],bN=[0,L(aG),bM],bO=[0,a(b[k][28][26],bN),0],bP=[0,o(bm),0],bQ=[0,a(b[i][83],[0,t,0]),bP],bR=[0,a(b[i][58],[0,m,[0,n,[0,t,0]]]),bQ],bT=a(b[8][11],t),bU=a(b[8][11],n),al=g(bt),bS=0,bV=[0,D,aj,R,a(b[8][11],m),bU,bT],bW=h===al?bt[1]:d===al?a(f[2],bt):bt,bX=[0,s([0,a(b[8][14],[0,bW,bV]),bS]),bR],bY=[0,a(b[i][83],[0,m,[0,n,0]]),bX],bZ=[0,a(b[k][28][26],bY),bO],b0=aH(D,y),b1=a(b[i][11],b0),b2=[0,e(b[k][28][5],b1,bZ),bH],b3=aH(D,R),b4=[0,a(b[i][11],b3),0],b5=[0,a(b[i][83],[0,t,0]),b4],b6=[0,a(b[i][58],[0,j,[0,t,0]]),b5],b8=a(b[8][11],t),am=g(bu),b7=0,b9=[0,ai,ak,a(b[8][11],j),b8],b_=h===am?bu[1]:d===am?a(f[2],bu):bu,b$=[0,s([0,a(b[8][14],[0,b_,b9]),b7]),b6],ca=[0,a(b[i][83],[0,j,0]),b$],cb=a(b[k][28][26],ca),cc=[0,e(b[k][28][5],cb,b2),bE],cd=a(b[i][11],bp);return e(b[k][28][5],cd,cc);case
1:var
E=c[2],H=c[1],an=e(l[26],H[4],E),ce=e(A[14],an,E),cf=e(A[13],H[4],ce),cg=H[3],ch=function(a){return e(l[9],a,E)},ci=e(l[43],ch,cg),aq=[0,H[1],0,ci,an],cj=x(K(aq)),ar=C(E),S=C(cf),ck=aq[3],cl=a(cQ(kA),ck),cm=[0,b[i][84],[0,b[i][3],0]],cn=[0,L(aG),cm],co=[0,a(b[k][28][26],cn),0],cp=[0,b[i][84],[0,b[i][3],0]],cq=[0,L(aG),cp],cr=[0,a(b[k][28][26],cq),0],cs=[0,b[i][34],0],ct=[0,N(cl),cs],cv=[0,a9(j),ct],cx=[0,a(b[i][83],[0,j,0]),cv],cy=[0,L(cJ),cx],cz=[0,a(b[i][58],[0,m,[0,n,0]]),cy],cB=a(b[8][11],n),as=g(bx),cA=0,cC=[0,S,ar,cj,a(b[8][11],m),cB],cD=h===as?bx[1]:d===as?a(f[2],bx):bx,cE=[0,s([0,a(b[8][14],[0,cD,cC]),cA]),cz],cF=[0,a(b[i][83],[0,n,[0,m,0]]),cE],cG=[0,a(b[k][28][26],cF),cr],cH=aH(ar,S),cI=a(b[i][11],cH),cL=[0,e(b[k][28][5],cI,cG),co],cM=aH(S,y),cN=a(b[i][11],cM);return e(b[k][28][5],cN,cL);case
3:var
at=p[2],au=c[2],I=c[1],u=G(I[1]),cR=function(a){return e(l[9],a,au)},U=e(l[44],cR,I),V=x(K(I)),W=x(K(U)),M=C(au),av=cw(V,cK(W,M));if(2===I[2]){var
cS=U[3],cT=a(cP(kB),cS),cU=b[i][3],cV=N(cT),cW=[0,e(b[k][28][4],cV,cU),0],cX=[0,o(at),0],cY=[0,a(b[i][83],[0,u,0]),cX],cZ=[0,a(b[i][58],[0,m,[0,u,0]]),cY],c1=a(b[8][11],u),aw=g(bJ),c0=0,c2=[0,V,W,M,a(b[8][11],m),c1],c3=h===aw?bJ[1]:d===aw?a(f[2],bJ):bJ,c4=[0,s([0,a(b[8][14],[0,c3,c2]),c0]),cZ],c5=[0,a(b[i][83],[0,m,0]),c4],c6=[0,a(b[k][28][26],c5),cW],c7=a(b[i][11],av);return e(b[k][28][5],c7,c6)}var
c8=U[3],c9=a(cP(kC),c8),c$=b[i][3],da=N(c9),dc=[0,e(b[k][28][4],da,c$),0],dd=[0,b[i][84],[0,b[i][3],0]],de=[0,L(aG),dd],df=[0,a(b[k][28][26],de),0],dh=[0,o(at),0],di=[0,a(b[i][83],[0,u,0]),dh],dj=[0,a(b[i][58],[0,m,[0,n,[0,u,0]]]),di],dl=a(b[8][11],u),dm=a(b[8][11],m),ax=g(bw),dk=0,dn=[0,V,W,M,a(b[8][11],n),dm,dl],dp=h===ax?bw[1]:d===ax?a(f[2],bw):bw,dq=[0,s([0,a(b[8][14],[0,dp,dn]),dk]),dj],dr=[0,a(b[i][83],[0,n,[0,m,0]]),dq],ds=[0,a(b[k][28][26],dr),df],dt=aH(M,y),du=a(b[i][11],dt),dv=[0,e(b[k][28][5],du,ds),dc],dw=a(b[i][11],av);return e(b[k][28][5],dw,dv);case
4:var
ay=p[2],az=c[3],z=az[2],O=az[1],aA=c[2],w=aA[2],X=aA[1],dx=c[1],Y=aa(0);aF(Y,dx);var
aB=G(w[1]),aC=G(z[1]),aD=x(K(w)),aE=x(K(z));if(e(l[1],X,l[12]))if(0===z[2]){switch(w[2]){case
0:var
aJ=g(by),dy=h===aJ?by[1]:d===aJ?a(f[2],by):by,Z=dy;break;case
1:var
aK=g(bz),dJ=h===aK?bz[1]:d===aK?a(f[2],bz):bz,Z=dJ;break;default:var
aL=g(bL),dK=h===aL?bL[1]:d===aL?a(f[2],bL):bL,Z=dK}var
dz=C(O),dA=2===w[2]?kD:kE,dB=cO(dA,w[3],O,z[3]),dD=[0,o(ay),0],dE=[0,a(b[i][83],[0,Y,0]),dD],dF=[0,N(dB),dE],dG=a(b[8][11],aC),dH=[0,Z,[0,aD,aE,dz,a(b[8][11],aB),dG]],dI=[0,s([0,a(b[8][14],dH),0]),dF];return a(b[k][28][26],dI)}var
aM=C(X),aN=C(O),dL=ea(kF,X,w[3],O,z[3]),dM=[0,b[i][84],[0,b[i][3],0]],dN=[0,L(aG),dM],dO=[0,a(b[k][28][26],dN),0],dP=[0,b[i][84],[0,b[i][3],0]],dQ=[0,L(aG),dP],dR=[0,a(b[k][28][26],dQ),0],dS=[0,o(ay),0],dT=[0,a(b[i][83],[0,Y,0]),dS],dU=[0,N(dL),dT],dV=[0,a(b[i][58],[0,m,[0,n,0]]),dU],dX=a(b[8][11],aC),dY=a(b[8][11],aB),dZ=a(b[8][11],n),aP=g(bA),dW=0,d0=[0,aD,aE,aM,aN,a(b[8][11],m),dZ,dY,dX],d1=h===aP?bA[1]:d===aP?a(f[2],bA):bA,d2=[0,s([0,a(b[8][14],[0,d1,d0]),dW]),dV],d3=[0,a(b[i][83],[0,n,[0,m,0]]),d2],d4=[0,a(b[k][28][26],d3),dR],d5=aH(aN,y),d6=a(b[i][11],d5),d7=[0,e(b[k][28][5],d6,d4),dO],d8=aH(aM,y),d9=a(b[i][11],d8);return e(b[k][28][5],d9,d7);case
5:var
B=c[1],aQ=B[5],aR=B[4],_=B[3],aS=B[2],d_=p[2],d$=B[1],aT=aa(0),ed=G(_[1]);aF(aT,d$[1]);var
ab=x(K(aS)),ee=x(K(_)),ac=c_(aQ),aU=g(v),ef=cw(a(b[8][9],1),ab),eg=h===aU?v[1]:d===aU?a(f[2],v):v,aW=g(v),eh=a(b[8][12],[0,[0,ac],eg,ef]),ei=h===aW?v[1]:d===aW?a(f[2],v):v,aX=g(cu),ej=[0,ei,eh],ek=h===aX?cu[1]:d===aX?a(f[2],cu):cu,el=a(b[8][14],[0,ek,ej]),em=C(aR),aY=g(T),en=cO(ec,_[3],aR,[0,[0,l[14],aQ],aS[3]]),eo=h===aY?T[1]:d===aY?a(f[2],T):T,ep=[0,q([0,kJ,[0,kI,[0,kH,ec]]],kG,eo),en],eq=b[i][3],er=dC(ab),es=[0,e(b[k][28][4],er,eq),0],et=[0,o(d_),0],eu=[0,a(b[i][83],[0,aT,0]),et],ev=[0,a(b[i][58],[0,j,0]),eu],ew=[0,N(ep),ev],ey=a(b[8][11],j),ez=a(b[8][11],ed),aZ=g(bC),ex=0,eA=[0,a(b[8][11],ac),ee,ab,em,ez,ey],eB=h===aZ?bC[1]:d===aZ?a(f[2],bC):bC,eC=[0,s([0,a(b[8][14],[0,eB,eA]),ex]),ew],eD=[0,a(b[i][83],[0,ac,[0,j,0]]),eC],eE=[0,a(b[i][58],[0,j,0]),eD],eF=[0,aO(j),eE],eG=[0,a(b[i][83],[0,j,0]),eF],eH=[0,a(b[k][28][26],eG),es],eI=a(b[i][11],el);return e(b[k][28][5],eI,eH);case
6:var
a0=p[2],eJ=c[1];try{var
eK=o(a0),eL=G(eJ[1]),eM=e(b[5][1][13][3],eL,bk),eN=e(b[k][28][4],eM,eK);return eN}catch(a){a=r(a);if(a===F){var
p=a0;continue}throw a}case
9:var
a1=c[2],ad=c[1],eO=K(ad),eP=K(a1),a2=g(ap),eQ=dg(kK,ad[3]),eR=h===a2?ap[1]:d===a2?a(f[2],ap):ap,a3=g(ap),eS=h===a3?ap[1]:d===a3?a(f[2],ap):ap,a4=g(ao),eT=h===a4?ao[1]:d===a4?a(f[2],ao):ao,a5=g(J),eU=[0,eT,eS,eR],eV=h===a5?J[1]:d===a5?a(f[2],J):J,eW=a(b[8][14],[0,eV,eU]),eX=[0,b[i][34],[0,b[i][3],0]],eY=[0,a(b[114][2],eW),0],eZ=[0,b[i][84],[0,b[i][14],eY]],e0=[0,L(db),eZ],e1=a(b[k][28][26],e0),e2=e(b[k][28][5],e1,eX),e3=G(a1[1]),e4=a(b[8][11],e3),e5=G(ad[1]),e6=a(b[8][11],e5),e7=x(eP),a6=g(bv),e8=[0,x(eO),e7,e6,e4],e9=h===a6?bv[1]:d===a6?a(f[2],bv):bv,e_=a(b[8][14],[0,e9,e8]),e$=N(eQ),fa=s([0,e_,0]),fb=e(b[k][28][4],fa,e$);return e(b[32][15],fb,e2);case
10:var
ae=c[2],af=c[1],fc=c[3],fd=K(ae),fe=K(af),ff=G(ae[1]),fg=G(af[1]),a7=fc?l[14]:l[12],fh=cO(kL,ae[3],a7,af[3]),fi=[0,b[i][3],0],fj=[0,a9(j),fi],fk=[0,a(b[i][83],[0,j,0]),fj],fl=[0,N(fh),fk],fn=a(b[8][11],fg),fo=a(b[8][11],ff),fp=C(a7),fq=x(fe),a8=g(bI),fm=0,fr=[0,x(fd),fq,fp,fo,fn],fs=h===a8?bI[1]:d===a8?a(f[2],bI):bI,ft=[0,s([0,a(b[8][14],[0,fs,fr]),fm]),fl];return a(b[k][28][26],ft);case
11:var
P=c[2],fu=p[2],fv=c[3],fw=c[1],a_=aa(0);aF(a_,fw);var
a$=G(P[1]),ba=G(fv),bb=x(K(P)),bc=x(K(a(l[45],P))),fx=P[3],bd=g(T),fy=a(cP(kM),fx),fz=h===bd?T[1]:d===bd?a(f[2],T):T,fA=[0,q(kO,kN,fz),fy],fB=b[i][3],fC=N(fA),fD=[0,e(b[k][28][4],fC,fB),0],fE=[0,o(fu),0],fF=[0,a(b[i][83],[0,a_,0]),fE],fG=[0,a(b[i][58],[0,a$,[0,ba,[0,j,0]]]),fF],fI=a(b[8][11],j),fJ=a(b[8][11],ba),be=g(bB),fH=0,fK=[0,bb,bc,a(b[8][11],a$),fJ,fI],fL=h===be?bB[1]:d===be?a(f[2],bB):bB,fM=[0,s([0,a(b[8][14],[0,fL,fK]),fH]),fG],fN=[0,a(b[i][83],[0,j,0]),fM],fO=[0,a(b[k][28][26],fN),fD],fP=cw(bb,aI(bc)),fQ=a(b[i][11],fP);return e(b[k][28][5],fQ,fO);case
12:var
fR=b[aV][21],fS=G(c[1]),fT=s([0,a(b[8][11],fS),0]);return e(b[k][28][4],fT,fR);case
13:var
fU=b[i][3],fV=a9(G(c[1]));return e(b[k][28][4],fV,fU);case
14:var
fW=c[1],fX=[0,b[i][3],0],fY=[0,a9(j),fX],fZ=[0,a(b[i][83],[0,j,0]),fY],f0=[0,L(cJ),fZ],f1=[0,b[i][84],f0],f2=[0,L(db),f1],f3=G(fW),f4=[0,s([0,a(b[8][11],f3),0]),f2];return a(b[k][28][26],f4);case
15:var
bf=c[3],bg=c[2],Q=c[1],f5=bf[2],f6=bf[1],f7=bg[2],f8=bg[1],bh=aa(0),bi=aa(0);aF(bh,f8);aF(bi,f6);var
f9=G(Q[1]),f_=Q[3],f$=a(eb(kP),f_),ga=Q[3],gb=a(cQ(kQ),ga),gc=x(K(Q)),gd=[0,o(f5),0],ge=[0,a(b[i][83],[0,bi,0]),gd],gf=[0,N(gb),ge],gg=[0,a(b[k][28][26],gf),0],gh=[0,o(f7),0],gi=[0,a(b[i][83],[0,bh,0]),gh],gj=[0,N(f$),gi],gk=[0,a(b[k][28][26],gj),gg],bj=g(bK),gl=[0,gc,[0,a(b[8][11],f9),0]],gm=h===bj?bK[1]:d===bj?a(f[2],bK):bK,gn=a(b[8][49],[0,gm,gl]),go=a(b[i][9],gn);return e(b[k][28][5],go,gk)}}return a(b[32][10],0)}}return o}function
ed(g,a,f){var
b=ah(g,a,f),h=b[1],c=a4(a,b[2]),i=c[1],d=cS(a,c[2]),j=d[2],k=e(o[18],i,d[1]);return[0,e(o[18],h,k),j]}function
aR(u,f,t,r,q,p,n,m,d){var
g=d[2],h=d[1],j=ed(u,[0,[0,q],kR],p),l=j[1],v=j[2],w=a(b[i][58],[0,f,0]),x=a(b[k][28][10],w),y=[0,r,[0,n,m,a(b[8][11],f)]],z=s([0,a(b[8][14],y),0]),A=e(b[k][28][4],z,x);if(a(o[17][47],l))return[0,h,g];var
c=aa(0),B=[0,a(d9(c,t),v),g],C=[0,a(b[i][83],[0,c,0]),0],D=[0,A,[0,N(l),C]];return[0,[0,[0,c,a(b[k][28][26],D)],h],B]}function
cT(c,a){return n(b[78][29][1],b[94][2],c,a)}function
ee(I,i,H){var
m=H[1],ad=H[2],k=a(b[78][29][2],I);if(E.caml_string_equal(a(b[cE][1],m),kS))return i;try{var
j=aQ(k,ad);if(typeof
j==="number")var
e=0;else
if(1===j[0]){var
q=j[1];if(typeof
q==="number")if(16<=q){switch(q+c2|0){case
0:var
s=j[2];if(s){var
t=s[2];if(t){var
u=t[2];if(u)if(u[2])var
e=0,c=0;else{var
K=u[1],L=t[1],p=cy(k,cT(I,s[1]));if(typeof
p==="number")var
o=0;else
if(1===p[0]){var
O=p[1];if(typeof
O==="number")if(23===O)if(p[2])var
o=0;else
var
M=1,o=1;else
var
o=0;else
var
o=0}else
var
o=0;if(!o)var
M=0;if(M)var
N=g(bX),ae=$(L,aI(K)),af=2,ag=h===N?bX[1]:d===N?a(f[2],bX):bX,n=aR(k,m,0,ag,af,ae,L,K,i),c=1;else
var
e=0,c=0}else
var
e=0,c=0}else
var
e=0,c=0}else
var
e=0,c=0;break;case
2:var
v=j[2];if(v){var
w=v[2];if(w)if(w[2])var
e=0,c=0;else
var
P=w[1],Q=v[1],R=g(bY),ah=$(Q,aI(P)),ai=1,aj=h===R?bY[1]:d===R?a(f[2],bY):bY,n=aR(k,m,2,aj,ai,ah,Q,P,i),c=1;else
var
e=0,c=0}else
var
e=0,c=0;break;case
3:var
x=j[2];if(x){var
y=x[2];if(y)if(y[2])var
e=0,c=0;else
var
S=y[1],T=x[1],U=g(b2),ak=$(S,aI(T)),al=2,am=h===U?b2[1]:d===U?a(f[2],b2):b2,n=aR(k,m,1,am,al,ak,T,S,i),c=1;else
var
e=0,c=0}else
var
e=0,c=0;break;case
4:var
z=j[2];if(z){var
A=z[2];if(A)if(A[2])var
e=0,c=0;else
var
V=A[1],W=z[1],an=aI(W),X=g(bZ),ao=$($(V,C(l[14])),an),ap=2,aq=h===X?bZ[1]:d===X?a(f[2],bZ):bZ,n=aR(k,m,1,aq,ap,ao,W,V,i),c=1;else
var
e=0,c=0}else
var
e=0,c=0;break;case
5:var
B=j[2];if(B){var
D=B[2];if(D)if(D[2])var
e=0,c=0;else
var
Y=D[1],Z=B[1],_=g(b0),ar=$(Z,aI(Y)),as=2,at=h===_?b0[1]:d===_?a(f[2],b0):b0,n=aR(k,m,1,at,as,ar,Z,Y,i),c=1;else
var
e=0,c=0}else
var
e=0,c=0;break;case
6:var
F=j[2];if(F){var
G=F[2];if(G)if(G[2])var
e=0,c=0;else
var
aa=G[1],ab=F[1],au=aI(aa),ac=g(b1),av=$($(ab,C(l[14])),au),aw=2,ax=h===ac?b1[1]:d===ac?a(f[2],b1):b1,n=aR(k,m,1,ax,aw,av,ab,aa,i),c=1;else
var
e=0,c=0}else
var
e=0,c=0;break;default:var
e=0,c=0}if(c)var
J=n,e=1}else
var
e=0;else
var
e=0}else
var
e=0;if(!e)var
J=i;return J}catch(c){c=r(c);if(a(b[99][2],c))return i;throw c}}function
aS(c){var
d=a(b[i][13],c),f=a(b[i][58],[0,c,0]),g=a(b[k][28][10],f);return e(b[k][28][4],g,d)}function
kT(j){da(0);var
v=a(b[78][29][12],j);function
w(a,b){return ee(j,a,b)}var
m=n(o[17][15],w,kU,v),p=m[1],x=m[2],y=dF(0),z=[0,a(b[32][10],0),0];function
A(n,m){var
e=m[2],o=e[2],j=e[1],p=m[1],q=n[2],r=n[1];if(e[3]){var
c=aa(0),s=bb(0);aF(c,s);var
v=l[11],w=cI(j),x=[0,[0,s,1,[0,[0,l[12],w],0],v],q],y=[0,a(b[i][83],[0,o,[0,c,0]]),[0,r,0]],z=[0,a(b[i][58],[0,c,0]),y],A=[0,aO(c),z],t=g(b4),B=[0,a(b[i][83],[0,j,[0,c,0]]),A],C=[0,p,0],D=h===t?b4[1]:d===t?a(f[2],b4):b4,E=a(b[8][49],[0,D,C]),F=[0,a(b[i][9],E),B];return[0,a(b[k][28][26],F),x]}var
u=g(b3),G=[0,a(b[i][83],[0,j,[0,o,0]]),[0,r,0]],H=[0,p,0],I=h===u?b3[1]:d===u?a(f[2],b3):b3,J=a(b[8][49],[0,I,H]),K=[0,a(b[i][9],J),G];return[0,a(b[k][28][26],K),q]}var
q=n(o[17][15],A,z,y),s=q[1],c=e(o[18],x,q[2]);if(cF[1])e(l[33],aX,c);if(a$[1])try{n(l[64],[0,bb,c7,aX],0,c);var
D=a(b[32][10],0);return D}catch(c){c=r(c);if(c===l[27]){var
B=a(l[39],0),t=n(l[65],0,0,B)[2];if(a_[1])e(l[36],aX,t);var
C=a(di(p),t);return e(b[k][28][4],s,C)}throw c}try{var
u=e(l[68],[0,bb,c7,aX],c);if(a_[1])e(l[36],aX,u);var
F=a(di(p),u),G=e(b[k][28][4],s,F);return G}catch(c){c=r(c);if(c===l[28]){var
E=a(ag[3],kV);return e(b[k][28][7],0,E)}throw c}}var
ef=a(b[32][31][1],kT);function
kW(c){function
m(a){return e(b[55][11],0,a)}var
ab=e(b[78][29][1],m,c);function
j(n,K){function
c(v){try{var
o=cz(v,K);if(typeof
o==="number")var
m=0;else
if(1===o[0]){var
w=o[1];if(typeof
w==="number")if(12<=w)var
m=0;else{switch(w){case
6:var
x=o[2];if(x){var
y=x[2];if(y)if(y[2])var
m=0,c=0;else
var
z=y[1],A=x[1],ad=[0,j([0,kX,n],z),0],M=g(bf),ae=[0,j([0,kY,n],A),ad],af=[0,A,[0,z,0]],ag=h===M?bf[1]:d===M?a(f[2],bf):bf,ah=aJ(z),ai=[0,a1(n,$(aJ(A),ah),[0,ag,af]),ae],t=a(b[k][28][26],ai),c=1;else
var
m=0,c=0}else
var
m=0,c=0;break;case
7:var
B=o[2];if(B){var
D=B[2];if(D)if(D[2])var
m=0,c=0;else
var
E=D[1],F=B[1],aj=[0,j([0,kZ,n],E),0],N=g(bg),ak=[0,j([0,k0,n],F),aj],al=[0,F,[0,E,0]],am=h===N?bg[1]:d===N?a(f[2],bg):bg,an=aJ(E),ao=[0,a1(n,cK(aJ(F),an),[0,am,al]),ak],t=a(b[k][28][26],ao),c=1;else
var
m=0,c=0}else
var
m=0,c=0;break;case
8:var
G=o[2];if(G){var
H=G[2];if(H)if(H[2])var
m=0,c=0;else
var
q=H[1],s=G[1],u=aa(0),O=g(aw),ap=0,aq=0,ar=[0,q,s],as=h===O?aw[1]:d===O?a(f[2],aw):aw,at=p([0,[0,u,a(b[8][14],[0,as,ar])],aq]),P=g(bi),au=[0,s,[0,q,[0,a(b[8][11],u),0]]],aA=h===P?bi[1]:d===P?a(f[2],bi):bi,aB=a1(n,C(l[11]),[0,aA,au]),aC=[0,e(b[k][28][4],aB,at),ap],aD=[0,j([0,k1,n],q),0],Q=g(av),aE=[0,j([0,k2,n],s),aD],aF=0,aG=[0,q,s],aH=h===Q?av[1]:d===Q?a(f[2],av):av,aI=[0,p([0,[0,u,a(b[8][14],[0,aH,aG])],aF]),aE],R=g(bh),aK=[0,s,[0,q,[0,a(b[8][11],u),0]]],aL=h===R?bh[1]:d===R?a(f[2],bh):bh,aM=aJ(q),aN=[0,a1(n,d6(aJ(s),aM),[0,aL,aK]),aI],aO=[0,a(b[k][28][26],aN),aC],S=g(cb),aP=a(b[i][83],[0,u,0]),aQ=[0,q,[0,s,0]],aR=h===S?cb[1]:d===S?a(f[2],cb):cb,aS=a(b[8][49],[0,aR,aQ]),aT=a(b[i][9],aS),aU=e(b[k][28][4],aT,aP),t=e(b[k][28][5],aU,aO),c=1;else
var
m=0,c=0}else
var
m=0,c=0;break;case
9:var
I=o[2];if(I)if(I[2])var
m=0,c=0;else
var
T=I[1],U=g(az),aV=h===U?az[1]:d===U?a(f[2],az):az,W=g(ay),aW=[0,aV],aX=h===W?ay[1]:d===W?a(f[2],ay):ay,X=g(ax),aY=[0,T,a(b[8][14],[0,aX,aW])],aZ=h===X?ax[1]:d===X?a(f[2],ax):ax,Y=a(b[8][14],[0,aZ,aY]),Z=g(ca),a0=j(n,Y),a2=[0,T,0],a3=h===Z?ca[1]:d===Z?a(f[2],ca):ca,a4=d$([0,k3,n],Y,[0,a3,a2]),t=e(b[k][28][4],a4,a0),c=1;else
var
m=0,c=0;break;case
10:var
J=o[2];if(J)if(J[2])var
m=0,c=0;else
var
a5=J[1],_=function(j){try{var
e=cz(v,j);if(typeof
e==="number")var
c=0;else
if(1===e[0]){var
f=e[1];if(typeof
f==="number"){if(10===f){var
g=e[2];if(g)if(g[2])var
c=0,d=0;else
var
i=_(g[1]),d=1;else
var
c=0,d=0}else
if(11===f)if(e[2])var
c=0,d=0;else
var
i=1,d=1;else
var
c=0,d=0;if(d)var
h=i,c=1}else
var
c=0}else
var
c=0;if(!c)var
h=0;return h}catch(c){c=r(c);if(a(b[99][2],c))return 0;throw c}},ab=function(i,m){try{var
l=cz(v,m);if(typeof
l==="number")var
c=0;else
if(1===l[0]){var
q=l[1];if(typeof
q==="number")if(10===q){var
n=l[2];if(n)if(n[2])var
c=0;else
var
o=n[1],s=g(bj),u=ab([0,k4,i],o),w=[0,o,0],x=h===s?bj[1]:d===s?a(f[2],bj):bj,t=g(ac),y=[0,x,w],z=[0,aJ(o)],A=h===t?ac[1]:d===t?a(f[2],ac):ac,B=a1(i,a(b[8][14],[0,A,z]),y),p=e(b[k][28][4],B,u),c=1;else
var
c=0}else
var
c=0;else
var
c=0}else
var
c=0;if(!c)var
p=j(i,m);return p}catch(c){c=r(c);if(a(b[99][2],c))return j(i,m);throw c}},a6=_(a5)?V(n):ab(n,K),t=a6,c=1;else
var
m=0,c=0;break;case
11:if(o[2])var
m=0,c=0;else
var
t=V(n),c=1;break;default:var
m=0,c=0}if(c)var
L=t,m=1}else
var
m=0}else
var
m=0;if(!m)var
L=a(b[32][10],0);return L}catch(c){c=r(c);if(a(b[99][2],c))return a(b[32][10],0);throw c}}return e(b[32][32][1],b[32][14],c)}function
p(c){if(c){var
m=c[2],i=c[1],l=i[1],aa=i[2],n=function(ac){try{var
n=aQ(ac,aa);if(typeof
n==="number")var
i=0;else
if(1===n[0]){var
q=n[1];if(typeof
q==="number")if(16<=q){switch(q+c2|0){case
0:var
t=n[2];if(t){var
u=t[2];if(u){var
v=u[2];if(v)if(v[2])var
i=0,c=0;else{var
H=v[1],I=u[1],J=g(U),ad=t[1],ae=h===J?U[1]:d===J?a(f[2],U):U;if(e(ab,ad,ae))var
af=[0,p(m),0],ag=[0,aS(l),af],ah=[0,j(k5,H),ag],ai=[0,j(k6,I),ah],K=g(bp),aj=0,ak=[0,I,H,a(b[8][11],l)],al=h===K?bp[1]:d===K?a(f[2],bp):bp,am=[0,s([0,a(b[8][14],[0,al,ak]),aj]),ai],L=a(b[k][28][26],am);else
var
L=p(m);var
o=L,c=1}else
var
i=0,c=0}else
var
i=0,c=0}else
var
i=0,c=0;break;case
1:var
w=n[2];if(w){var
x=w[2];if(x)if(x[2])var
i=0,c=0;else
var
M=x[1],N=w[1],an=[0,p(m),0],ao=[0,aS(l),an],ap=[0,j(k7,M),ao],aq=[0,j(k8,N),ap],O=g(bo),ar=0,as=[0,N,M,a(b[8][11],l)],at=h===O?bo[1]:d===O?a(f[2],bo):bo,au=[0,s([0,a(b[8][14],[0,at,as]),ar]),aq],o=a(b[k][28][26],au),c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;case
15:var
y=n[2];if(y){var
z=y[2];if(z)if(z[2])var
i=0,c=0;else
var
P=z[1],Q=y[1],av=[0,p(m),0],aw=[0,aS(l),av],ax=[0,j(k9,P),aw],ay=[0,j(k_,Q),ax],R=g(bk),az=0,aA=[0,Q,P,a(b[8][11],l)],aB=h===R?bk[1]:d===R?a(f[2],bk):bk,aC=[0,s([0,a(b[8][14],[0,aB,aA]),az]),ay],o=a(b[k][28][26],aC),c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;case
16:var
A=n[2];if(A){var
B=A[2];if(B)if(B[2])var
i=0,c=0;else
var
S=B[1],T=A[1],aD=[0,p(m),0],aE=[0,aS(l),aD],aF=[0,j(k$,S),aE],aG=[0,j(la,T),aF],V=g(bl),aH=0,aI=[0,T,S,a(b[8][11],l)],aJ=h===V?bl[1]:d===V?a(f[2],bl):bl,aK=[0,s([0,a(b[8][14],[0,aJ,aI]),aH]),aG],o=a(b[k][28][26],aK),c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;case
17:var
C=n[2];if(C){var
D=C[2];if(D)if(D[2])var
i=0,c=0;else
var
W=D[1],X=C[1],aL=[0,p(m),0],aM=[0,aS(l),aL],aN=[0,j(lb,W),aM],aO=[0,j(lc,X),aN],Y=g(bm),aP=0,aR=[0,X,W,a(b[8][11],l)],aT=h===Y?bm[1]:d===Y?a(f[2],bm):bm,aU=[0,s([0,a(b[8][14],[0,aT,aR]),aP]),aO],o=a(b[k][28][26],aU),c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;case
18:var
E=n[2];if(E){var
F=E[2];if(F)if(F[2])var
i=0,c=0;else
var
Z=F[1],_=E[1],aV=[0,p(m),0],aW=[0,aS(l),aV],aX=[0,j(ld,Z),aW],aY=[0,j(le,_),aX],$=g(bn),aZ=0,a0=[0,_,Z,a(b[8][11],l)],a1=h===$?bn[1]:d===$?a(f[2],bn):bn,a2=[0,s([0,a(b[8][14],[0,a1,a0]),aZ]),aY],o=a(b[k][28][26],a2),c=1;else
var
i=0,c=0}else
var
i=0,c=0;break;default:var
i=0,c=0}if(c)var
G=o,i=1}else
var
i=0;else
var
i=0}else
var
i=0;if(!i)var
G=p(m);return G}catch(c){c=r(c);if(a(b[99][2],c))return p(m);throw c}};return e(b[32][32][1],b[32][14],n)}return a(b[32][10],0)}var
n=a(b[78][29][12],c);return p(a(o[17][6],n))}var
eg=a(b[32][31][1],kW);function
eh(a){if(typeof
a==="number")if(18<=a)switch(a+dl|0){case
0:return dL;case
1:return dM;case
2:return dN;case
3:return dP;case
4:return dO;case
13:return dV;case
14:return dW;case
15:return dX;case
16:return dY}throw F}function
ei(a){if(typeof
a==="number")if(18<=a)switch(a+dl|0){case
0:return dQ;case
1:return dR;case
2:return dS;case
3:return dT;case
4:return dU;case
13:return dZ;case
14:return d0;case
15:return d1;case
16:return d2}throw F}var
a5=[aW,lf,aU(0)];function
X(i,W){var
e=aQ(a(b[78][29][2],i),W);if(typeof
e!=="number")switch(e[0]){case
1:var
k=e[1];if(typeof
k==="number")if(16<=k)switch(k+c2|0){case
0:var
m=e[2];if(m){var
n=m[2];if(n){var
o=n[2];if(o){if(!o[2]){var
A=o[1],B=n[1],Y=cT(i,m[1]),j=cy(a(b[78][29][2],i),Y);if(typeof
j!=="number"&&1===j[0]){var
p=j[1];if(typeof
p==="number")if(23===p){if(!j[2]){var
C=g(b5),Z=[0,B,A],_=h===C?b5[1]:d===C?a(f[2],b5):b5;return a(b[8][14],[0,_,Z])}}else
if(24===p)if(!j[2]){var
D=g(cc),$=[0,B,A],aa=h===D?cc[1]:d===D?a(f[2],cc):cc;return a(b[8][14],[0,aa,$])}}throw a5}var
c=1}else
var
c=0}else
var
c=1}else
var
c=1;break;case
9:var
t=e[2];if(t){var
u=t[2];if(u){if(!u[2]){var
G=u[1],H=t[1],ag=X(i,G),I=g(cg),ah=[0,H,G,X(i,H),ag],ai=h===I?cg[1]:d===I?a(f[2],cg):cg;return a(b[8][14],[0,ai,ah])}var
c=1}else
var
c=1}else
var
c=1;break;case
10:var
v=e[2];if(v){var
w=v[2];if(w){if(!w[2]){var
J=w[1],K=v[1],aj=X(i,J),L=g(cf),ak=[0,K,J,X(i,K),aj],al=h===L?cf[1]:d===L?a(f[2],cf):cf;return a(b[8][14],[0,al,ak])}var
c=1}else
var
c=1}else
var
c=1;break;case
11:if(!e[2]){var
M=g(ck);return h===M?ck[1]:d===M?a(f[2],ck):ck}var
c=0;break;case
12:if(!e[2]){var
N=g(cm);return h===N?cm[1]:d===N?a(f[2],cm):cm}var
c=0;break;case
13:var
x=e[2];if(x){if(!x[2]){var
O=x[1],P=g(cj),am=[0,O,X(i,O)],an=h===P?cj[1]:d===P?a(f[2],cj):cj;return a(b[8][14],[0,an,am])}var
c=0}else
var
c=1;break;case
14:var
y=e[2];if(y){var
z=y[2];if(z){if(!z[2]){var
Q=z[1],R=y[1],ao=X(i,Q),S=g(ci),ap=[0,R,Q,X(i,R),ao],aq=h===S?ci[1]:d===S?a(f[2],ci):ci;return a(b[8][14],[0,aq,ap])}var
c=1}else
var
c=1}else
var
c=1;break;default:var
c=0}else
var
c=0;else
var
c=0;if(!c){var
q=e[2];if(q){var
s=q[2];if(s)if(!s[2]){var
ab=s[1],ac=q[1];try{var
l=eh(k),E=g(l),ad=[0,ac,ab],ae=h===E?l[1]:d===E?a(f[2],l):l,af=a(b[8][14],[0,ae,ad]);return af}catch(a){a=r(a);if(a===F)throw a5;throw a}}}}break;case
2:var
T=e[2],U=e[1],ar=X(i,T),V=g(ch),as=[0,U,T,X(i,U),ar],at=h===V?ch[1]:d===V?a(f[2],ch):ch;return a(b[8][14],[0,at,as])}throw a5}function
cU(e,d,c){var
f=a(b[32][31][8],c);return n(b[i][15],e,d,f)}function
Y(c,f){function
d(g){var
d=cU(0,c,g),h=a(f,d),j=e(b[i][67],0,d);return e(b[k][28][4],j,h)}var
g=a(b[32][31][3],d),h=a(b[i][58],[0,c,0]),j=a(b[k][28][10],h);return e(b[k][28][4],j,g)}function
dj(c,h){function
d(d){var
f=cU(0,e(b[cE][6],c,lg),d),g=cU(0,e(b[cE][6],c,lh),d),j=[0,e(h,f,g),0],l=[0,e(b[i][67],0,g),j],m=[0,e(b[i][67],0,f),l];return a(b[k][28][26],m)}var
f=a(b[32][31][3],d),g=a(b[i][58],[0,c,0]),j=a(b[k][28][10],g);return e(b[k][28][4],j,f)}function
ej(d,g){var
f=g;for(;;){var
c=e(b[8][4],d,f);switch(c[0]){case
4:var
h=e(b[8][1][2],d,c[1]);return a(b[4][1],h);case
5:var
f=c[1];continue;default:return 0}}}function
li(c){var
a0=a(b[78][29][3],c);function
v(a){return X(c,a)}function
ar(a){return cT(c,a)}function
j(m){if(m){var
l=m[2],C=m[1],c=a(b[6][2][1][1],C),n=function(x){try{var
t=aQ(x,a(b[6][2][1][2],C));if(typeof
t==="number")var
m=0;else
switch(t[0]){case
1:var
L=t[1];if(typeof
L==="number")if(18<=L){switch(L+dl|0){case
7:var
M=t[2];if(M){var
N=M[2];if(N)if(N[2])var
m=0,n=0;else
var
a1=N[1],a2=M[1],a3=dj(c,function(b,a){return j([0,[0,b,a2],[0,[0,a,a1],l]])}),a4=aO(c),y=e(b[k][28][4],a4,a3),n=1;else
var
m=0,n=0}else
var
m=0,n=0;break;case
8:var
O=t[2];if(O){var
P=O[2];if(P)if(P[2])var
m=0,n=0;else
var
a6=P[1],a7=O[1],a8=0,a9=[0,Y(c,function(a){return j([0,[0,a,a6],l])}),a8],a_=[0,Y(c,function(a){return j([0,[0,a,a7],l])}),a9],ba=aO(c),y=e(b[k][28][5],ba,a_),n=1;else
var
m=0,n=0}else
var
m=0,n=0;break;case
9:if(t[2])var
m=0,n=0;else
var
y=aO(c),n=1;break;case
11:var
Q=t[2];if(Q)if(Q[2])var
m=0,n=0;else{var
u=aQ(x,Q[1]);if(typeof
u==="number")var
p=0;else
switch(u[0]){case
1:var
D=u[1];if(typeof
D==="number")if(16<=D){switch(D+c2|0){case
0:var
S=u[2];if(S){var
T=S[2];if(T){var
U=T[2];if(U)if(U[2])var
p=0,q=0,o=0;else{var
E=U[1],G=T[1],ax=S[1];if(a$[1]){var
V=cy(x,ar(ax));if(typeof
V==="number")var
A=0;else
if(1===V[0]){var
W=V[1];if(typeof
W==="number"){if(23===W)var
bb=0,bc=[0,Y(c,function(a){return j(l)}),bb],aB=g(b6),bd=[0,G,E,a(b[8][11],c)],be=h===aB?b6[1]:d===aB?a(f[2],b6):b6,bf=a(b[8][14],[0,be,bd]),bg=[0,a(b[i][9],bf),bc],aC=a(b[k][28][26],bg),ao=1;else
if(24===W)var
bh=0,bi=[0,Y(c,function(a){return j(l)}),bh],aD=g(cd),bj=[0,G,E,a(b[8][11],c)],bk=h===aD?cd[1]:d===aD?a(f[2],cd):cd,bl=a(b[8][14],[0,bk,bj]),bm=[0,a(b[i][9],bl),bi],aC=a(b[k][28][26],bm),ao=1;else
var
A=0,ao=0;if(ao)var
ay=aC,A=1}else
var
A=0}else
var
A=0;if(!A)var
ay=j(l);var
az=ay}else{var
X=cy(x,ar(ax));if(typeof
X==="number")var
B=0;else
if(1===X[0]){var
Z=X[1];if(typeof
Z==="number"){if(23===Z)var
aG=g(au),bn=j(l),bo=[0,G,E],bp=h===aG?au[1]:d===aG?a(f[2],au):au,bq=a(b[8][14],[0,bp,bo]),br=e(b[6][2][1][4],bq,C),bs=a(b[i][71],br),aH=e(b[k][28][4],bs,bn),ap=1;else
if(24===Z)var
aI=g(at),bt=j(l),bu=[0,G,E],bv=h===aI?at[1]:d===aI?a(f[2],at):at,bw=a(b[8][14],[0,bv,bu]),bx=e(b[6][2][1][4],bw,C),by=a(b[i][71],bx),aH=e(b[k][28][4],by,bt),ap=1;else
var
B=0,ap=0;if(ap)var
aF=aH,B=1}else
var
B=0}else
var
B=0;if(!B)var
aF=j(l);var
az=aF}var
z=az,o=1}else
var
q=1,o=0}else
var
p=0,q=0,o=0}else
var
p=0,q=0,o=0;break;case
9:var
aa=u[2];if(aa){var
ab=aa[2];if(ab)if(ab[2])var
p=0,q=0,o=0;else
var
aL=ab[1],ac=aa[1],bI=v(ac),bJ=0,bK=[0,Y(c,function(a){var
b=aE(aL);return j([0,[0,a,cL(aE(ac),b)],l])}),bJ],aM=g(co),bL=0,bM=[0,ac,aL,bI,a(b[8][11],c)],bN=h===aM?co[1]:d===aM?a(f[2],co):co,bO=[0,s([0,a(b[8][14],[0,bN,bM]),bL]),bK],z=a(b[k][28][26],bO),o=1;else
var
p=0,q=0,o=0}else
var
p=0,q=0,o=0;break;case
10:var
ad=u[2];if(ad){var
ae=ad[2];if(ae)if(ae[2])var
p=0,q=0,o=0;else
var
aN=ae[1],aP=ad[1],bP=0,bQ=[0,Y(c,function(a){var
b=aE(aN);return j([0,[0,a,cx(aE(aP),b)],l])}),bP],aR=g(cn),bR=0,bS=[0,aP,aN,a(b[8][11],c)],bT=h===aR?cn[1]:d===aR?a(f[2],cn):cn,bU=[0,s([0,a(b[8][14],[0,bT,bS]),bR]),bQ],z=a(b[k][28][26],bU),o=1;else
var
p=0,q=0,o=0}else
var
p=0,q=0,o=0;break;case
13:var
af=u[2];if(af)if(af[2])var
q=1,o=0;else
var
ag=af[1],bV=v(ag),bW=0,bX=[0,Y(c,function(a){return j([0,[0,a,ag],l])}),bW],aS=g(cr),bY=0,bZ=[0,ag,bV,a(b[8][11],c)],b0=h===aS?cr[1]:d===aS?a(f[2],cr):cr,b1=[0,s([0,a(b[8][14],[0,b0,bZ]),bY]),bX],z=a(b[k][28][26],b1),o=1;else
var
p=0,q=0,o=0;break;case
14:var
ah=u[2];if(ah){var
ai=ah[2];if(ai)if(ai[2])var
p=0,q=0,o=0;else
var
I=ai[1],J=ah[1],b2=v(J),b3=v(I),b4=0,b5=[0,Y(c,function(a){var
b=cx(aE(J),I);return j([0,[0,a,cL(cx(J,aE(I)),b)],l])}),b4],aT=g(cq),b7=0,b8=[0,J,I,b2,b3,a(b[8][11],c)],b9=h===aT?cq[1]:d===aT?a(f[2],cq):cq,b_=[0,s([0,a(b[8][14],[0,b9,b8]),b7]),b5],z=a(b[k][28][26],b_),o=1;else
var
p=0,q=0,o=0}else
var
p=0,q=0,o=0;break;default:var
q=1,o=0}if(o)var
aA=z,q=2}else
var
q=1;else
var
q=1;switch(q){case
0:var
w=0;break;case
1:var
_=u[2];if(_){var
$=_[2];if($)if($[2])var
p=0,w=0;else{var
bz=$[1],bA=_[1];try{var
H=ei(D),bB=0,bC=[0,Y(c,function(a){return j(l)}),bB],aK=g(H),bD=0,bE=[0,bA,bz,a(b[8][11],c)],bF=h===aK?H[1]:d===aK?a(f[2],H):H,bG=[0,s([0,a(b[8][14],[0,bF,bE]),bD]),bC],bH=a(b[k][28][26],bG),aJ=bH}catch(a){a=r(a);if(a!==F)throw a;var
aJ=j(l)}var
aA=aJ,w=1}else
var
p=0,w=0}else
var
p=0,w=0;break;default:var
w=1}if(w)var
R=aA,p=1;break;case
2:var
aU=u[2],aj=u[1],b$=v(aj),ca=0,cb=[0,Y(c,function(a){return j([0,[0,a,cx(aj,aE(aU))],l])}),ca],aV=g(cp),cc=0,ce=[0,aj,aU,b$,a(b[8][11],c)],cf=h===aV?cp[1]:d===aV?a(f[2],cp):cp,cg=[0,s([0,a(b[8][14],[0,cf,ce]),cc]),cb],R=a(b[k][28][26],cg),p=1;break;default:var
p=0}if(!p)var
R=j(l);var
y=R,n=1}else
var
m=0,n=0;break;case
12:var
ak=t[2];if(ak){var
al=ak[2];if(al)if(al[2])var
m=0,n=0;else
var
aW=al[1],aX=ak[1],ch=dj(c,function(c,a){var
d=[0,[0,a,e(b[8][5],aW,aX)],l];return j([0,[0,c,e(b[8][5],aX,aW)],d])}),ci=aO(c),y=e(b[k][28][4],ci,ch),n=1;else
var
m=0,n=0}else
var
m=0,n=0;break;case
0:case
1:case
2:case
3:case
4:var
as=t[2];if(as){var
av=as[2];if(av)if(av[2])var
m=0,n=0;else
var
aw=j(l),n=2;else
var
m=0,n=0}else
var
m=0,n=0;break;default:var
m=0,n=0}switch(n){case
0:var
aq=0;break;case
1:var
aw=y,aq=1;break;default:var
aq=1}if(aq)var
K=aw,m=1}else
var
m=0;else
var
m=0;break;case
2:var
am=t[2],an=t[1];if(ej(x,a(a0,am)))var
cj=v(an),ck=0,cl=[0,Y(c,function(a){return j([0,[0,a,cL(aE(an),am)],l])}),ck],aY=g(cs),cm=0,ct=[0,an,am,cj,a(b[8][11],c)],cu=h===aY?cs[1]:d===aY?a(f[2],cs):cs,cv=[0,s([0,a(b[8][14],[0,cu,ct]),cm]),cl],aZ=a(b[k][28][26],cv);else
var
aZ=j(l);var
K=aZ,m=1;break;default:var
m=0}if(!m)var
K=j(l);return K}catch(c){c=r(c);if(c===a5)return j(l);if(a(b[99][2],c))return j(l);throw c}};return e(b[32][32][1],b[32][14],n)}return e(b[k][28][4],eg,ef)}return j(a(b[32][31][2],c))}var
cV=a(b[32][31][1],li);function
lj(c){var
j=a(b[32][31][5],c);function
t(a){return X(c,a)}function
l(j){function
c(c){function
m(e){var
d=aQ(c,j);return a(b[32][10],d)}function
n(c){if(typeof
c!=="number")switch(c[0]){case
1:var
p=c[1];if(typeof
p==="number"){var
q=p-27|0;if(!(2<q>>>0))switch(q){case
0:if(!c[2])return cV;break;case
1:break;default:var
s=c[2];if(s)if(!s[2]){var
A=b[i][14],B=L(cJ),C=e(b[k][28][4],B,A);return e(b[k][28][4],C,cV)}}}break;case
2:var
D=l(c[2]);return e(b[k][28][4],b[i][14],D)}try{var
v=t(j),w=b[i][14],x=function(e){var
c=g(cl),i=[0,j,v],k=h===c?cl[1]:d===c?a(f[2],cl):cl;return df(e,a(b[8][14],[0,k,i]))},y=a(b[32][31][3],x),z=e(b[k][28][4],y,w),o=z}catch(c){c=r(c);if(c===a5)var
m=g(aC),u=h===m?aC[1]:d===m?a(f[2],aC):aC,n=a(b[i][39],u);else{if(!a(b[32][33][5],c))throw c;var
n=e(b[32][9],0,c)}var
o=n}return e(b[k][28][4],o,cV)}var
o=a(b[32][33][4],m);return e(b[32][32][1],o,n)}return e(b[32][32][1],b[32][14],c)}return l(j)}var
ek=a(b[32][31][1],lj);function
lk(c){a(b[71][3],ll);dI(0);return ek}var
lm=a(b[32][10],0),dk=[0,fM,l,aO,a9,fN,fO,cF,a_,a$,cG,fP,ba,aP,ds,aa,f7,dw,bb,c7,dA,aX,cI,c_,dB,N,dC,s,gb,L,dD,aF,gd,G,dE,dH,dG,da,dF,dI,dJ,dK,be,B,j,Z,M,al,am,an,O,P,Q,v,ao,ap,w,H,y,ab,ac,aY,aq,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,z,bq,br,ar,as,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,R,I,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,S,bR,bS,bT,bU,bV,T,bW,bX,bY,bZ,b0,b1,b2,b3,b4,b5,dL,dM,dN,dO,dP,b6,dQ,dR,dS,dT,dU,at,au,ad,ae,aZ,a0,av,b7,b8,aw,ax,b9,b_,b$,U,ay,az,ca,cb,cc,dV,dW,dX,dY,cd,dZ,d0,d1,d2,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,af,aA,aB,J,cu,aC,cv,aD,d3,d4,d5,db,aG,iM,iO,cJ,iQ,$,cK,d6,cw,iR,aH,aI,cx,cL,aE,iS,aJ,C,aQ,cy,cz,d7,cM,d8,dc,V,aK,W,x,d9,K,dd,de,cN,d_,a1,d$,df,q,a2,a3,ea,cO,dg,cA,cP,eb,cQ,cR,ah,dh,cB,a4,cS,di,ed,aR,cT,ee,aS,ef,eg,eh,ei,a5,X,cU,Y,dj,ej,cV,ek,e(b[32][32][1],lm,lk)];c0(420,dk,"Omega_plugin.Coq_omega");a(el[7][1],aL);function
cC(c){var
d=e(p[13],b[5][1][6],ln),f=a(b[5][4][2],d),g=a(b[5][5][1],c),h=e(b[5][7][2],[0,f],g),i=a(aT[6][6],h);return a(aT[12][21],i)}function
cW(c){var
d=e(o[17][96],lo[29],c);function
f(b){if(c1(b,lp)){if(c1(b,lq)){if(c1(b,lr)){if(c1(b,ls)){var
c=e(m[16],lt,b),d=a(ag[3],c);return n(_[6],0,0,d)}return cC(lu)}return cC(lv)}return cC(lw)}return cC(lx)}var
g=e(p[13],f,d),h=dk[263],i=a(b[k][28][26],g),j=a(b[k][28][9],i);return e(b[k][28][4],j,h)}function
ly(f){var
c=[28,[0,0,[31,e(em[9],0,[0,[0,[0,aL,lz],0],0])]]],d=a(b[5][1][6],lA);return cD(aT[6][4],1,0,d,c)}var
lB=[0,function(b,a){return cW(0)}];n(aT[6][9],0,[0,aL,lC],lB);e(b[76][1],ly,aL);var
lD=0,lG=[0,function(b){return b?a(m[2],lE):function(a){return cW(lF)}},lD],lI=[0,function(c){if(c)if(!c[2]){var
d=c[1],f=a(en[17],b[70][9]),g=a(en[6],f),h=e(aT[12][2][7],g,d);return function(a){return cW(e(p[13],b[5][1][8],h))}}return a(m[2],lH)},lG],lK=a(lJ[12],lI);n(aT[6][9],0,[0,aL,lL],lK);function
lM(h){var
f=[0,a(b[5][1][7],lO)],c=b[70][9],d=0;if(0===c[0]){var
g=[0,[0,lR,[0,lQ,[0,[1,e(em[9],0,[0,[0,[5,[0,c[1]]]],f])],d]]],lN];return n(aT[9][4],[0,aL,lS],0,g)}throw[0,a8,lP]}e(el[7][3],lM,aL);var
eo=[0,aL,cC,cW];c0(427,eo,"Omega_plugin.G_omega");c0(428,[0,c5,dk,eo],"Omega_plugin");return});
