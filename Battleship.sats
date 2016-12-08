(* ****** ****** *)
//
//	Battleship SATS
//	Jacob Grishey (jgrishey@gmail.com)
//	CAS CS 520
//	Fall 2016
//	Hongwei Xi
//
(* ****** ****** *)

#include "share/atspre_define.hats"
//
#include "{$LIBATSCC2JS}/staloadall.hats"

(* ****** ****** *)

#define NROW 8
#define NCOL 8

(* ****** ****** *)

datatype defNode =
	| dN0 of ()
	| dN1 of (int)

datatype attNode =
	| aN0 of ()
	| aN1 of (int)

typedef ship = $tup(int (* x *), int (* y *))

(* ****** ****** *)

typedef ownBoard = mtrxszref(defNode)

typedef attackBoard = mtrxszref(attNode)

typedef showBoard = mtrxszref(string)

(* ****** ****** *)

typedef player = $tup(ownBoard, attackBoard, bool(* 0 for human, 1 for cpu*), int (* hits *), int (* hits taken *))

(* ****** ****** *)

typedef turn = bool (* 0 for human turn, 1 for cpu turn *)

(* ****** ****** *)

(* Game Mechanics *)

fun player_human_init(): player = "mac#"

fun player_cpu_init(): player = "mac#"

fun ownBoard_init(): ownBoard = "mac#"

fun ownBoard_addShips (player, ship, ship, ship, ship, ship, ship, ship, ship, ship, ship): void = "mac#"

fun generate_randShip (): ship = "mac#"

fun genShip (int, int): ship = "mac#"

fun attackBoard_init(): attackBoard = "mac#"

fun ownBoard_get(player): ownBoard = "mac#"

fun attackBoard_get(player): attackBoard = "mac#"

fun boards2show (player): $tup(showBoard, showBoard) = "mac#"

fun printBoards (showBoard, showBoard): void = "mac#"

fun printScores (int, int): void = "mac#"

fun gameEnd_check (player): int (* 0 for no result, 1 for human win, 2 for cpu win *) = "mac#"

(* ****** ****** *)

(* Node Operations *)

fun defNode2string (defNode): string = "mac#"

fun attNode2string (attNode): string = "mac#"

(* ****** ****** *)

(* Attacking Nodes *)

fun attack {n,m:nat}(player, player, int(n), int(m)): int = "mac#"

fun bomb_node {n,m:nat}(ownBoard, attackBoard, int(n), int(m)): int(* 0 if no hit, 1 if hit, 2 if sink *) = "mac#"

(* ****** ****** *)

(* end of [Battleship.sats] *)
