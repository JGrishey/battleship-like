(* ****** ****** *)
//
//	Battleship Play DATS
//	Jacob Grishey (jgrishey@gmail.com)
//	CAS CS 520
//	Fall 2016
//	Hongwei Xi
//
//  For playing the Battleship game
//
(* ****** ****** *)

#include "./Battleship.dats"

(* ****** ****** *)

#include
"share/atspre_define.hats"

staload
UN = "prelude/SATS/unsafe.sats"

(* ****** ****** *)

#define
ATS_MAINATSFLAG 1

#define
ATS_DYNLOADNAME
"Battleship__dynload"

#define
ATS_STATIC_PREFIX "Battleship__"

(* ****** ****** *)

#include
"{$LIBATSCC2JS}/staloadall.hats"

(* ****** ****** *)

staload
"{$LIBATSCC2JS}/SATS/print.sats"

staload
_ = "{$LIBATSCC2JS}/DATS/print.dats"

(* ****** ****** *)

(*
%{$
function add(human){
  var s1x = document.getElementById("ship1x").value;
  var s1y = document.getElementById("ship1y").value;
  var s2x = document.getElementById("ship2x").value;
  var s2y = document.getElementById("ship2y").value;
  var s3x = document.getElementById("ship3x").value;
  var s3y = document.getElementById("ship3y").value;
  var s4x = document.getElementById("ship4x").value;
  var s4y = document.getElementById("ship4y").value;
  var s5x = document.getElementById("ship5x").value;
  var s5y = document.getElementById("ship5y").value;
  var s6x = document.getElementById("ship6x").value;
  var s6y = document.getElementById("ship6y").value;
  var s7x = document.getElementById("ship7x").value;
  var s7y = document.getElementById("ship7y").value;
  var s8x = document.getElementById("ship8x").value;
  var s8y = document.getElementById("ship8y").value;
  var s9x = document.getElementById("ship9x").value;
  var s9y = document.getElementById("ship9y").value;
  var s10x = document.getElementById("ship10x").value;
  var s10y = document.getElementById("ship10y").value;
  var s1 = genShip(s1x, s1y);
  var s2 = genShip(s2x, s2y);
  var s3 = genShip(s3x, s3y);
  var s4 = genShip(s4x, s4y);
  var s5 = genShip(s5x, s5y);
  var s6 = genShip(s6x, s6y);
  var s7 = genShip(s7x, s7y);
  var s8 = genShip(s8x, s8y);
  var s9 = genShip(s9x, s9y);
  var s10 = genShip(s10x, s10y);
  ownBoard_addShips(human, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);
  return;
};
%}
*)

%{$
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
%} // end of [%{$]

(* ****** ****** *)

%{$
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
%}

(* ****** ****** *)

%{$
var hits = 0;
var hitsTaken = 0;
%}

%{$
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
    var res2 = attack(players[1], players[0], ats2jspre_double2int((Math.random()*0.999999*8)), ats2jspre_double2int(Math.random()*0.999999*8));
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
%} // end of [%{$]

(* ****** ****** *)
