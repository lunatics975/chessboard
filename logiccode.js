let position = [
    'rook_b', 'knight_b', 'bishop_b', 'queen_b', 'king_b', 'bishop_b', 'knight_b', 'rook_b',
    'pawn_b', 'pawn_b', 'pawn_b', 'pawn_b', 'pawn_b', 'pawn_b', 'pawn_b', 'pawn_b',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'pawn_w', 'pawn_w', 'pawn_w', 'pawn_w', 'pawn_w', 'pawn_w', 'pawn_w', 'pawn_w',
    'rook_w', 'knight_w', 'bishop_w', 'queen_w', 'king_w', 'bishop_w', 'knight_w', 'rook_w'
];
let movehistory = [];

function performmove(movelist, colorstr) {
    movelist[0] = startfeld;
    movelist[1] = endfeld;
    const startfigur = position[startfeld].split("_");
    const endfigur = position[endfeld].split("_"); // corrected endfeld
    const piecestart = startfigur[0];
    const colorstart = startfigur[1];

    if (color !== colorstr) {
        return [false];
    }
    if (endfigur[0] === empty || endfigur[1] === colorstr) {
        return [false]
    }

    switch (piece) {
        case "rook":
            if (Math.floor(startfeld / 8) === Math.floorendfeld / 8) {
                if (startfeld > endfeld) {
                    upper = startfeld
                    lower = endfeld
                } else {
                    upper = endfeld
                    lower = startfeld
                }
                for 
            }
                    break;
        case "knight":
            if (![startfeld - 17, startfeld - 15, startfeld - 10, startfeld - 6, startfeld + 17, startfeld + 15, startfeld + 10, startfeld + 6].includes(endfeld)) return false;
            break;
        case "bishop":
            // code to execute for Bishop
            break;
        case "queen":
            // code to execute for Queen
            break;
        case "king":
            // code to execute for King
            break;
        case "pawn":
            // code to execute for Pawn
            break;
        default:
            return [false]; // invalid piece
    }

    // common logic for all pieces (e.g., updating position, checking for captures, etc.)
    //...

    return [feedbackstr];
}

function checktest(field, pos, colorstr) {
}

function manipulateboard(movelist, pos) {
    movelist[0] = startfeld;
    movelist[1] = endfeld;
    pos[endfeld] = pos[startfeld]