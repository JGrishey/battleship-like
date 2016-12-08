/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2016-12-8: 13h:33m
**
*/

function
Battleship__patsfun_16__closurerize(env0, env1)
{
  return [function(cenv, arg0, arg1) { return Battleship__patsfun_16(cenv[1], cenv[2], arg0, arg1); }, env0, env1];
}


function
Battleship__patsfun_17__closurerize(env0, env1)
{
  return [function(cenv, arg0, arg1) { return Battleship__patsfun_17(cenv[1], cenv[2], arg0, arg1); }, env0, env1];
}


function
Battleship__patsfun_19__closurerize(env0)
{
  return [function(cenv, arg0) { return Battleship__patsfun_19(cenv[1], arg0); }, env0];
}


function
Battleship__patsfun_20__closurerize(env0, env1, env2)
{
  return [function(cenv, arg0) { return Battleship__patsfun_20(cenv[1], cenv[2], cenv[3], arg0); }, env0, env1, env2];
}


function
Battleship__patsfun_21__closurerize(env0, env1)
{
  return [function(cenv, arg0) { return Battleship__patsfun_21(cenv[1], cenv[2], arg0); }, env0, env1];
}


function
Battleship__patsfun_22__closurerize(env0)
{
  return [function(cenv, arg0) { return Battleship__patsfun_22(cenv[1], arg0); }, env0];
}


function
Battleship__patsfun_23__closurerize()
{
  return [function(cenv, arg0) { return Battleship__patsfun_23(arg0); }];
}


function
Battleship__patsfun_24__closurerize(env0)
{
  return [function(cenv, arg0) { return Battleship__patsfun_24(cenv[1], arg0); }, env0];
}


function
Battleship__patsfun_25__closurerize(env0, env1, env2)
{
  return [function(cenv, arg0) { return Battleship__patsfun_25(cenv[1], cenv[2], cenv[3], arg0); }, env0, env1, env2];
}


function
Battleship__patsfun_26__closurerize(env0, env1)
{
  return [function(cenv, arg0) { return Battleship__patsfun_26(cenv[1], cenv[2], arg0); }, env0, env1];
}


function
Battleship__patsfun_27__closurerize(env0)
{
  return [function(cenv, arg0) { return Battleship__patsfun_27(cenv[1], arg0); }, env0];
}


function
Battleship__patsfun_28__closurerize()
{
  return [function(cenv, arg0) { return Battleship__patsfun_28(arg0); }];
}


function
ownBoard_init()
{
//
// knd = 0
  var tmpret0
  var tmp1
  var tmplab, tmplab_js
//
  // __patsflab_ownBoard_init
  tmp1 = null;
  tmpret0 = ats2jspre_mtrxszref_make_elt(8, 8, tmp1);
  return tmpret0;
} // end-of-function


function
attackBoard_init()
{
//
// knd = 0
  var tmpret2
  var tmp3
  var tmplab, tmplab_js
//
  // __patsflab_attackBoard_init
  tmp3 = null;
  tmpret2 = ats2jspre_mtrxszref_make_elt(8, 8, tmp3);
  return tmpret2;
} // end-of-function


function
player_human_init()
{
//
// knd = 0
  var tmpret4
  var tmp5
  var tmp6
  var tmplab, tmplab_js
//
  // __patsflab_player_human_init
  tmp5 = ownBoard_init();
  tmp6 = attackBoard_init();
  tmpret4 = [tmp5, tmp6, false, 0, 0];
  return tmpret4;
} // end-of-function


function
player_cpu_init()
{
//
// knd = 0
  var tmpret7
  var tmp8
  var tmp9
  var tmplab, tmplab_js
//
  // __patsflab_player_cpu_init
  tmp8 = ownBoard_init();
  tmp9 = attackBoard_init();
  tmpret7 = [tmp8, tmp9, true, 0, 0];
  return tmpret7;
} // end-of-function


function
ownBoard_get(arg0)
{
//
// knd = 0
  var tmpret10
  var tmp11
  var tmplab, tmplab_js
//
  // __patsflab_ownBoard_get
  tmp11 = arg0[0];
  tmpret10 = tmp11;
  return tmpret10;
} // end-of-function


function
attackBoard_get(arg0)
{
//
// knd = 0
  var tmpret12
  var tmp13
  var tmplab, tmplab_js
//
  // __patsflab_attackBoard_get
  tmp13 = arg0[1];
  tmpret12 = tmp13;
  return tmpret12;
} // end-of-function


function
ownBoard_addShips(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10)
{
//
// knd = 0
  var tmp15
  var tmplab, tmplab_js
//
  // __patsflab_ownBoard_addShips
  tmp15 = ownBoard_get(arg0);
  Battleship__addShip_7(tmp15, arg1);
  Battleship__addShip_7(tmp15, arg2);
  Battleship__addShip_7(tmp15, arg3);
  Battleship__addShip_7(tmp15, arg4);
  Battleship__addShip_7(tmp15, arg5);
  Battleship__addShip_7(tmp15, arg6);
  Battleship__addShip_7(tmp15, arg7);
  Battleship__addShip_7(tmp15, arg8);
  Battleship__addShip_7(tmp15, arg9);
  Battleship__addShip_7(tmp15, arg10);
  return/*_void*/;
} // end-of-function


function
Battleship__addShip_7(env0, arg0)
{
//
// knd = 0
  var tmp17
  var tmp18
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__addShip_7
  tmp17 = arg0[0];
  tmp18 = arg0[1];
  Battleship__aux_8(env0, tmp17, tmp18);
  return/*_void*/;
} // end-of-function


function
Battleship__aux_8(env0, arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmp20
  var tmp21
  var tmp22
  var tmp23
  var tmp24
  var tmp25
  var tmp26
  var tmp27
  var tmp28
  var tmp29
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_Battleship__aux_8
    tmp20 = ats2jspre_mtrxszref_get_at(env0, arg0, arg1);
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab0
        if(ATSCKptriscons(tmp20)) { tmplab_js = 4; break; }
        case 2: // __atstmplab1
        tmp21 = [1];
        ats2jspre_mtrxszref_set_at(env0, arg0, arg1, tmp21);
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab2
        case 4: // __atstmplab3
        tmp25 = ats2jspre_JSmath_random();
        tmp24 = ats2jspre_mul_double_double(tmp25, 0.999999);
        tmp23 = ats2jspre_mul_double_int(tmp24, 8);
        tmp22 = ats2jspre_double2int(tmp23);
        tmp29 = ats2jspre_JSmath_random();
        tmp28 = ats2jspre_mul_double_double(tmp29, 0.999999);
        tmp27 = ats2jspre_mul_double_int(tmp28, 8);
        tmp26 = ats2jspre_double2int(tmp27);
        // ATStailcalseq_beg
        apy0 = tmp22;
        apy1 = tmp26;
        arg0 = apy0;
        arg1 = apy1;
        funlab_js = 1; // __patsflab_Battleship__aux_8
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
generate_randShip()
{
//
// knd = 0
  var tmpret39
  var tmp40
  var tmp41
  var tmp42
  var tmp43
  var tmp44
  var tmp45
  var tmp46
  var tmp47
  var tmplab, tmplab_js
//
  // __patsflab_generate_randShip
  tmp43 = ats2jspre_JSmath_random();
  tmp42 = ats2jspre_mul_double_double(tmp43, 0.999999);
  tmp41 = ats2jspre_mul_double_int(tmp42, 8);
  tmp40 = ats2jspre_double2int(tmp41);
  tmp47 = ats2jspre_JSmath_random();
  tmp46 = ats2jspre_mul_double_double(tmp47, 0.999999);
  tmp45 = ats2jspre_mul_double_int(tmp46, 8);
  tmp44 = ats2jspre_double2int(tmp45);
  tmpret39 = [tmp40, tmp44];
  return tmpret39;
} // end-of-function


function
genShip(arg0, arg1)
{
//
// knd = 0
  var tmpret48
  var tmplab, tmplab_js
//
  // __patsflab_genShip
  tmpret48 = [arg0, arg1];
  return tmpret48;
} // end-of-function


function
attack(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmpret49
  var tmp50
  var tmp51
  var tmplab, tmplab_js
//
  // __patsflab_attack
  tmp50 = arg0[1];
  tmp51 = arg1[0];
  tmpret49 = bomb_node(tmp51, tmp50, arg2, arg3);
  return tmpret49;
} // end-of-function


function
bomb_node(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmpret52
  var tmp53
  var tmp54
  var tmp56
  var tmp58
  var tmp59
  var tmp61
  var tmp63
  var tmplab, tmplab_js
//
  // __patsflab_bomb_node
  tmp53 = ats2jspre_mtrxszref_get_at(arg0, arg2, arg3);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab4
      if(ATSCKptriscons(tmp53)) { tmplab_js = 4; break; }
      case 2: // __atstmplab5
      tmp56 = [1];
      ats2jspre_mtrxszref_set_at(arg1, arg2, arg3, tmp56);
      tmp58 = [3];
      ats2jspre_mtrxszref_set_at(arg0, arg2, arg3, tmp58);
      tmpret52 = 0;
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab6
      case 4: // __atstmplab7
      tmp54 = tmp53[0];
      tmp59 = ats2jspre_eq_int0_int0(tmp54, 1);
      if(tmp59) {
        tmp61 = [2];
        ats2jspre_mtrxszref_set_at(arg0, arg2, arg3, tmp61);
        tmp63 = [2];
        ats2jspre_mtrxszref_set_at(arg1, arg2, arg3, tmp63);
        tmpret52 = 1;
      } else {
        tmpret52 = 0;
      } // endif
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret52;
} // end-of-function


function
defNode2string(arg0)
{
//
// knd = 0
  var tmpret64
  var tmp65
  var tmplab, tmplab_js
//
  // __patsflab_defNode2string
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab8
      if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
      case 2: // __atstmplab9
      tmpret64 = "O";
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab10
      case 4: // __atstmplab11
      tmp65 = arg0[0];
      // ATScaseofseq_beg
      tmplab_js = 1;
      while(true) {
        tmplab = tmplab_js; tmplab_js = 0;
        switch(tmplab) {
          // ATSbranchseq_beg
          case 1: // __atstmplab12
          if(!ATSCKpat_int(tmp65, 1)) { tmplab_js = 3; break; }
          case 2: // __atstmplab13
          tmpret64 = "S";
          break;
          // ATSbranchseq_end
          // ATSbranchseq_beg
          case 3: // __atstmplab14
          if(!ATSCKpat_int(tmp65, 2)) { tmplab_js = 5; break; }
          case 4: // __atstmplab15
          tmpret64 = "D";
          break;
          // ATSbranchseq_end
          // ATSbranchseq_beg
          case 5: // __atstmplab16
          if(!ATSCKpat_int(tmp65, 3)) { tmplab_js = 7; break; }
          case 6: // __atstmplab17
          tmpret64 = "-";
          break;
          // ATSbranchseq_end
          // ATSbranchseq_beg
          case 7: // __atstmplab18
          tmpret64 = ats2jspre_String(tmp65);
          break;
          // ATSbranchseq_end
        } // end-of-switch
        if (tmplab_js === 0) break;
      } // endwhile
      // ATScaseofseq_end
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret64;
} // end-of-function


function
attNode2string(arg0)
{
//
// knd = 0
  var tmpret66
  var tmp67
  var tmplab, tmplab_js
//
  // __patsflab_attNode2string
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab19
      if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
      case 2: // __atstmplab20
      tmpret66 = "?";
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab21
      case 4: // __atstmplab22
      tmp67 = arg0[0];
      // ATScaseofseq_beg
      tmplab_js = 1;
      while(true) {
        tmplab = tmplab_js; tmplab_js = 0;
        switch(tmplab) {
          // ATSbranchseq_beg
          case 1: // __atstmplab23
          if(!ATSCKpat_int(tmp67, 1)) { tmplab_js = 3; break; }
          case 2: // __atstmplab24
          tmpret66 = "X";
          break;
          // ATSbranchseq_end
          // ATSbranchseq_beg
          case 3: // __atstmplab25
          if(!ATSCKpat_int(tmp67, 2)) { tmplab_js = 5; break; }
          case 4: // __atstmplab26
          tmpret66 = "D";
          break;
          // ATSbranchseq_end
          // ATSbranchseq_beg
          case 5: // __atstmplab27
          tmpret66 = ats2jspre_String(tmp67);
          break;
          // ATSbranchseq_end
        } // end-of-switch
        if (tmplab_js === 0) break;
      } // endwhile
      // ATScaseofseq_end
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return tmpret66;
} // end-of-function


function
boards2show(arg0)
{
//
// knd = 0
  var tmpret68
  var tmp69
  var tmp70
  var tmp71
  var tmp72
  var tmplab, tmplab_js
//
  // __patsflab_boards2show
  tmp69 = arg0[0];
  tmp70 = arg0[1];
  tmp71 = ats2jspre_mtrxszref_make_elt(8, 8, "");
  tmp72 = ats2jspre_mtrxszref_make_elt(8, 8, "");
  ats2jspre_mtrxszref_foreach_cloref(tmp69, Battleship__patsfun_16__closurerize(tmp69, tmp71));
  ats2jspre_mtrxszref_foreach_cloref(tmp70, Battleship__patsfun_17__closurerize(tmp70, tmp72));
  tmpret68 = [tmp71, tmp72];
  return tmpret68;
} // end-of-function


function
Battleship__patsfun_16(env0, env1, arg0, arg1)
{
//
// knd = 0
  var tmp75
  var tmp76
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_16
  tmp76 = ats2jspre_mtrxszref_get_at(env0, arg0, arg1);
  tmp75 = defNode2string(tmp76);
  ats2jspre_mtrxszref_set_at(env1, arg0, arg1, tmp75);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_17(env0, env1, arg0, arg1)
{
//
// knd = 0
  var tmp79
  var tmp80
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_17
  tmp80 = ats2jspre_mtrxszref_get_at(env0, arg0, arg1);
  tmp79 = attNode2string(tmp80);
  ats2jspre_mtrxszref_set_at(env1, arg0, arg1, tmp79);
  return/*_void*/;
} // end-of-function


function
printBoards(arg0, arg1)
{
//
// knd = 0
  var tmp88
  var tmp93
  var tmp105
  var tmp111
  var tmp121
  var tmp126
  var tmp138
  var tmp143
  var tmplab, tmplab_js
//
  // __patsflab_printBoards
  ats2jspre_print_string("Player");
  ats2jspre_print_newline();
  ats2jspre_print_newline();
  ats2jspre_print_string(" ");
  ats2jspre_print_string("+");
  tmp88 = ats2jspre_int_foreach_method(8);
  tmp88[0](tmp88, Battleship__patsfun_19__closurerize("+"));
  ats2jspre_print_string("+");
  ats2jspre_print_newline();
  tmp93 = ats2jspre_int_foreach_method(8);
  tmp93[0](tmp93, Battleship__patsfun_20__closurerize(arg0, "+", 8));
  ats2jspre_print_string(" ");
  ats2jspre_print_string("+");
  tmp105 = ats2jspre_int_foreach_method(8);
  tmp105[0](tmp105, Battleship__patsfun_22__closurerize("+"));
  ats2jspre_print_string("+");
  ats2jspre_print_newline();
  ats2jspre_print_string(" ");
  tmp111 = ats2jspre_int_foreach_method(8);
  tmp111[0](tmp111, Battleship__patsfun_23__closurerize());
  ats2jspre_print_newline();
  ats2jspre_print_newline();
  ats2jspre_print_string("CPU");
  ats2jspre_print_newline();
  ats2jspre_print_newline();
  ats2jspre_print_string(" ");
  ats2jspre_print_string("+");
  tmp121 = ats2jspre_int_foreach_method(8);
  tmp121[0](tmp121, Battleship__patsfun_24__closurerize("+"));
  ats2jspre_print_string("+");
  ats2jspre_print_newline();
  tmp126 = ats2jspre_int_foreach_method(8);
  tmp126[0](tmp126, Battleship__patsfun_25__closurerize(arg1, "+", 8));
  ats2jspre_print_string(" ");
  ats2jspre_print_string("+");
  tmp138 = ats2jspre_int_foreach_method(8);
  tmp138[0](tmp138, Battleship__patsfun_27__closurerize("+"));
  ats2jspre_print_string("+");
  ats2jspre_print_newline();
  ats2jspre_print_string(" ");
  tmp143 = ats2jspre_int_foreach_method(8);
  tmp143[0](tmp143, Battleship__patsfun_28__closurerize());
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_19(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_19
  ats2jspre_print_string(env0);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_20(env0, env1, env2, arg0)
{
//
// knd = 0
  var tmp98
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_20
  ats2jspre_print_int(arg0);
  ats2jspre_print_string(env1);
  tmp98 = ats2jspre_int_foreach_method(env2);
  tmp98[0](tmp98, Battleship__patsfun_21__closurerize(env0, arg0));
  ats2jspre_print_string(env1);
  ats2jspre_print_newline();
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_21(env0, env1, arg0)
{
//
// knd = 0
  var tmp100
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_21
  tmp100 = ats2jspre_mtrxszref_get_at(env0, env1, arg0);
  ats2jspre_print_string(tmp100);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_22(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_22
  ats2jspre_print_string(env0);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_23(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_23
  ats2jspre_print_int(arg0);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_24(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_24
  ats2jspre_print_string(env0);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_25(env0, env1, env2, arg0)
{
//
// knd = 0
  var tmp131
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_25
  ats2jspre_print_int(arg0);
  ats2jspre_print_string(env1);
  tmp131 = ats2jspre_int_foreach_method(env2);
  tmp131[0](tmp131, Battleship__patsfun_26__closurerize(env0, arg0));
  ats2jspre_print_string(env1);
  ats2jspre_print_newline();
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_26(env0, env1, arg0)
{
//
// knd = 0
  var tmp133
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_26
  tmp133 = ats2jspre_mtrxszref_get_at(env0, env1, arg0);
  ats2jspre_print_string(tmp133);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_27(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_27
  ats2jspre_print_string(env0);
  return/*_void*/;
} // end-of-function


function
Battleship__patsfun_28(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_Battleship__patsfun_28
  ats2jspre_print_int(arg0);
  return/*_void*/;
} // end-of-function


function
printScores(arg0, arg1)
{
//
// knd = 0
  var tmp154
  var tmp155
  var tmplab, tmplab_js
//
  // __patsflab_printScores
  ats2jspre_print_newline();
  ats2jspre_print_newline();
  ats2jspre_print_newline();
  ats2jspre_print_string("Your score: ");
  ats2jspre_print_int(arg0);
  ats2jspre_print_newline();
  ats2jspre_print_string("CPU score: ");
  ats2jspre_print_int(arg1);
  tmp154 = ats2jspre_eq_int0_int0(arg0, 10);
  if(tmp154) {
    ats2jspre_alert("You won!");
  } else {
    tmp155 = ats2jspre_eq_int0_int0(arg1, 10);
    if(tmp155) {
      ats2jspre_alert("You Lost!");
    } else {
      // ATSINSmove_void
    } // endif
  } // endif
  return/*_void*/;
} // end-of-function


function
checkBefore(arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmpret156
  var tmp157
  var tmp158
  var tmp159
  var tmp160
  var tmp161
  var tmp162
  var tmp163
  var tmp164
  var tmp165
  var tmp166
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_checkBefore
    tmp157 = arg0[1];
    tmp158 = ats2jspre_mtrxszref_get_at(tmp157, arg1, arg2);
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab28
        if(ATSCKptriscons(tmp158)) { tmplab_js = 4; break; }
        case 2: // __atstmplab29
        tmpret156 = [arg1, arg2];
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab30
        case 4: // __atstmplab31
        tmp162 = ats2jspre_JSmath_random();
        tmp161 = ats2jspre_mul_double_double(tmp162, 0.999999);
        tmp160 = ats2jspre_mul_double_int(tmp161, 8);
        tmp159 = ats2jspre_double2int(tmp160);
        tmp166 = ats2jspre_JSmath_random();
        tmp165 = ats2jspre_mul_double_double(tmp166, 0.999999);
        tmp164 = ats2jspre_mul_double_int(tmp165, 8);
        tmp163 = ats2jspre_double2int(tmp164);
        // ATStailcalseq_beg
        apy0 = arg0;
        apy1 = tmp159;
        apy2 = tmp163;
        arg0 = apy0;
        arg1 = apy1;
        arg2 = apy2;
        funlab_js = 1; // __patsflab_checkBefore
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return tmpret156;
  } // endwhile-fun
} // end-of-function


function
gameEnd_check(arg0)
{
//
// knd = 0
  var tmpret167
  var tmp168
  var tmp169
  var tmp170
  var tmp171
  var tmp172
  var tmp173
  var tmp174
  var tmplab, tmplab_js
//
  // __patsflab_gameEnd_check
  tmp168 = arg0[2];
  tmp169 = arg0[3];
  tmp170 = arg0[4];
  tmp171 = ats2jspre_gte_int0_int0(tmp169, 10);
  if(tmp171) {
    tmp172 = ats2jspre_eq_bool0_bool0(tmp168, false);
    if(tmp172) {
      tmpret167 = 1;
    } else {
      tmpret167 = 2;
    } // endif
  } else {
    tmp173 = ats2jspre_gte_int0_int0(tmp170, 10);
    if(tmp173) {
      tmp174 = ats2jspre_eq_bool0_bool0(tmp168, false);
      if(tmp174) {
        tmpret167 = 2;
      } else {
        tmpret167 = 1;
      } // endif
    } else {
      tmpret167 = 0;
    } // endif
  } // endif
  return tmpret167;
} // end-of-function

// dynloadflag_minit
var _057_Users_057_jgrishey_057_Workspace_057_cs520_055_2016_055_fall_055_jgrishey_057_Project_057_Battleship_play_056_dats__dynloadflag = 0;

function
_057_Users_057_jgrishey_057_Workspace_057_cs520_055_2016_055_fall_055_jgrishey_057_Project_057_Battleship_play_056_dats__dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_Users_057_jgrishey_057_Workspace_057_cs520_055_2016_055_fall_055_jgrishey_057_Project_057_Battleship_play_056_dats__dynloadflag(333))
  if(ATSCKiseqz(_057_Users_057_jgrishey_057_Workspace_057_cs520_055_2016_055_fall_055_jgrishey_057_Project_057_Battleship_play_056_dats__dynloadflag)) {
    _057_Users_057_jgrishey_057_Workspace_057_cs520_055_2016_055_fall_055_jgrishey_057_Project_057_Battleship_play_056_dats__dynloadflag = 1 ; // flag is set
  } // endif
  return/*_void*/;
} // end-of-function


function
Battleship__dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  _057_Users_057_jgrishey_057_Workspace_057_cs520_055_2016_055_fall_055_jgrishey_057_Project_057_Battleship_play_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
//
function
thePrintbd_display()
{
//
var human = player_human_init();
var cpu = player_cpu_init();
//
ownBoard_addShips(human, generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip())
ownBoard_addShips(cpu, generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip(), generate_randShip())
//
var [s1, s2] = boards2show(human);
//
ats2jspre_the_print_store_clear();
//
printBoards(s1, s2);
//
document.getElementById("theBattleship_printbd").innerHTML = ats2jspre_the_print_store_join();
//
return [human, cpu];
//
} /* end of [thePrintbd_display] */
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
Battleship_initize()
{
//
var ret = thePrintbd_display();
//
return [ret[0], ret[1]]; // from [Battleship_initize]
//
} // end of [Battleship_initize]
/* ATSextcode_end() */

/* ATSextcode_beg() */
var hits = 0;
var hitsTaken = 0;
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
jQuery(document).ready(function(){
Battleship__dynload();
var players = Battleship_initize();
document.getElementById("attack_btn").onclick = function () {
    var x = parseInt(document.getElementById("attackx").value);
    var y = parseInt(document.getElementById("attacky").value);
    var res = attack(players[0], players[1], x, y);
    if (res == 1) {
        hits = hits + 1;
        alert("Success! You sunk one of his ships!");
    } else {
        alert("You missed!");
    }
    var xtry = ats2jspre_double2int(Math.random()*0.999999*8);
    var ytry = ats2jspre_double2int(Math.random()*0.999999*8);
    var [cpux, cpuy] = checkBefore(players[1], xtry, ytry);
    var res2 = attack(players[1], players[0], cpux, cpuy);
    if (res2 == 1) {
        hitsTaken = hitsTaken + 1;
        alert("He sunk one of your ships!");
    } else {
        alert("He missed!");
    }

    if (hits == 10) {
        alert("You won!");
    }
    if (hitsTaken == 10) {
        alert("You lost!");
    }

    ats2jspre_the_print_store_clear();
    var [s1, s2] = boards2show(players[0]);
    printBoards(s1, s2);
    printScores(hits, hitsTaken);
    document.getElementById("theBattleship_printbd").innerHTML = ats2jspre_the_print_store_join();
};
});
//
/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */
