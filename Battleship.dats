(* ****** ****** *)
//
//	Battleship DATS
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

staload "./Battleship.sats"

(* ****** ****** *)

staload
"{$LIBATSCC2JS}/SATS/print.sats"

staload
_ = "{$LIBATSCC2JS}/DATS/print.dats"

(* ****** ****** *)

implement ownBoard_init () =
(
let
    val bdInit = mtrxszref_make_elt(NROW, NCOL, dN0)
in
    bdInit
end
)
//
implement attackBoard_init () =
(
let
    val bdInit = mtrxszref_make_elt(NROW, NCOL, aN0)
in
    bdInit
end
)

(* ****** ****** *)

implement player_human_init () =
(
let
    val ownBd = ownBoard_init ()
    val attBd = attackBoard_init ()
    val playerInit = $tup(ownBd, attBd, false, 0, 0)
in
    playerInit
end
)
//
implement player_cpu_init () =
(
let
    val ownBd = ownBoard_init ()
    val attBd = attackBoard_init ()
    val cpuInit = $tup(ownBd, attBd, true, 0, 0)
in
    cpuInit
end
)

(* ****** ****** *)

implement ownBoard_get (player) =
(
let
    val $tup(ownBd, _, _, _, _) = player
in
    ownBd
end
)
//
implement attackBoard_get (player) =
(
let
    val $tup(_, attBd, _, _, _) = player
in
    attBd
end
)

(* ****** ****** *)

implement ownBoard_addShips (player, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) =
(
let
    val ownBd = ownBoard_get(player)

    fun addShip (sh: ship): void =
    (
    let
        val $tup(shx, shy) = sh

        fun aux (x:int, y:int): void =
        (
            case+ ownBd[x, y] of
            | dN0 () => ownBd[x, y] := dN1(1)
            | dN1 (_) => aux (double2int(JSmath_random()*0.999999*8), double2int(JSmath_random()*0.999999*8))
        )
    in
        aux(shx, shy)
    end
    )
in
    (
    addShip(s1);
    addShip(s2);
    addShip(s3);
    addShip(s4);
    addShip(s5);
    addShip(s6);
    addShip(s7);
    addShip(s8);
    addShip(s9);
    addShip(s10)
    )
end
)

implement generate_randShip () =
(
let
    val x = double2int((JSmath_random()*0.999999)*8)
    val y = double2int((JSmath_random()*0.999999)*8)
    val ship = $tup(x, y)
in
    ship
end
)

implement genShip (x, y) = $tup(x, y)

(* ****** ****** *)

implement attack (p1, p2, x, y) =
(
let
    val $tup(p1ownBd, p1attBd, p1type, p1hits, p1hitsTaken) = p1
    val $tup(p2ownBd, p2attBd, p2type, p2hits, p2hitsTaken) = p2

    val result = bomb_node (p2ownBd, p1attBd, x, y)
in
    result
end
)
//
implement bomb_node (ownBd, attBd, x, y) =
(
    case+ ownBd[x, y] of
    | dN0 () => (attBd[x, y] := aN1(1); 0)
    | dN1 (i) => if i = 1 then (ownBd[x,y] := dN1(2); attBd[x, y] := aN1(2); 1) else 0
    (*
        case+ i of
        | 1 => (ownBd[x, y] := dN1(2); attBd[x, y] := aN1(2); 1)
        | _ => (0)
    *)
)

(* ****** ****** *)

implement defNode2string (nx) =
(
case+ nx of
| dN0 () => "O"
| dN1 (x) =>
    (
    case+ x of
    | 1 => "S"
    | 2 => "D"
    | _ => String(x)
    )
)
//
implement attNode2string (nx) =
(
case+ nx of
| aN0 () => "?"
| aN1 (x) =>
    (
    case+ x of
    | 1 => "X"
    | 2 => "D"
    | _ => String(x)
    )
)

(* ****** ****** *)

implement boards2show (player) =
(
let
    val $tup(ownBd, attBd, type, _, _) = player
    val showOwnBd = mtrxszref_make_elt(NROW, NCOL, "")
    val showAttBd = mtrxszref_make_elt(NROW, NCOL, "")
    val () = mtrxszref_foreach_cloref(ownBd, lam(i, j) =<cloref1> showOwnBd[i, j] := defNode2string(ownBd[i, j]))
    val () = mtrxszref_foreach_cloref(attBd, lam(i, j) =<cloref1> showAttBd[i, j] := attNode2string(attBd[i, j]))
in
    $tup(showOwnBd, showAttBd)
end
)

(* ****** ****** *)

implement printBoards (S1, S2) =
(
let
    val X = "+"
    val l = 8
    val w = 8

    val () = println!("Player")
    val () = println!()

    val () = print(" ")
    val () = print(X)
    val () = l.foreach()(lam(i) =<cloref1> print(X))
    val () = println!(X)

    val () = l.foreach()(lam(i) =>
                (
                    print(i);
                    print(X);
                    w.foreach()(lam (j) => print(S1[i, j]));
                    println!(X)
                )
            )

    val () = print(" ")
    val () = print(X)
    val () = l.foreach()(lam(i) =<cloref1> print(X))
    val () = println!(X)

    val () = print(" ")
    val () = l.foreach()(lam(i) =<cloref1> print(i))
    val () = println!()

    val () = println!()
    val () = println!("CPU")
    val () = println!()

    val () = print(" ")
    val () = print(X)
    val () = l.foreach()(lam(i) =<cloref1> print(X))
    val () = println!(X)

    val () = l.foreach()(lam(i) =>
                (
                    print(i);
                    print(X);
                    w.foreach()(lam (j) => print(S2[i, j]));
                    println!(X)
                )
            )

    val () = print(" ")
    val () = print(X)
    val () = l.foreach()(lam(i) =<cloref1> print(X))
    val () = println!(X)

    val () = print(" ")
    val () = l.foreach()(lam(i) =<cloref1> print(i))
in

end
)

implement printScores (s0, s1): void =
(
let
    val () = println!()
    val () = println!()
    val () = println!()
    val () = print("Your score: ")
    val () = print(s0)
    val () = println!()
    val () = print("CPU score: ")
    val () = print(s1)
in
    if s0 = 10 then alert("You won!") else if s1 = 10 then alert("You Lost!") else ()
end
)

(* ****** ****** *)

implement gameEnd_check (player) =
(
let
    val $tup(_, _, type, hits, hitsTaken) = player
in
    if hits >= 10 then
        if type = false then 1 else 2
    else if hitsTaken >= 10 then
        if type = false then 2 else 1
    else 0
end
)

(* ****** ****** *)