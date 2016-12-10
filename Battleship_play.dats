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

    if (res != 2) {
        var xtry = ats2jspre_double2int(Math.random()*0.999999*8);
        var ytry = ats2jspre_double2int(Math.random()*0.999999*8);
        var [cpux, cpuy] = checkBefore(players[1], xtry, ytry);
        var res2 = attack(players[1], players[0], cpux, cpuy);
        ats2jspre_the_print_store_clear();
        hits = hits + res;
        hitsTaken = hitsTaken + res2;
        printResults(res, res2);
        var [s1, s2] = boards2show(players[0]);
        printBoards(s1, s2);
        printScores(hits, hitsTaken);
        document.getElementById("theBattleship_printbd").innerHTML = ats2jspre_the_print_store_join();
    }
};
});
//
%} // end of [%{$]

(* ****** ****** *)
