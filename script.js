function myfunction(pos, blockcheck) {
    for (let i = 1; i <= 81; i++) {
        document.getElementById(`${i}`).classList.remove("animate")
    }
    var ctr = 0;
    var g1;
    var g2;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            ctr++;
            if (ctr == pos) {
                g1 = i;
                g2 = j;
                break;
            }
        }
    }
    var a = g1;
    var b = g2;
    //for row//
    for (var j = 0; j <= 8; j++) {
        const cellid1 = a * 9 + j + 1;
        document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
    }
    //for column//
    for (var i = 0; i <= 8; i++) {
        const cellid1 = i * 9 + b + 1;
        document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
    }
    var x = document.getElementsByClassName(blockcheck)
    for (var k = 0; k < x.length; k++) {
        x[k].classList.add("animate");
    }
}

function newGame() {
    localStorage.clear();
    location.reload();
}

function easysudoku() {
    var modify = document.getElementById("easy");
    document.getElementById("hard").removeAttribute("style");
    document.getElementById("medium").removeAttribute("style");
    modify.setAttribute("style", "background-color: #BBDEFB");
    const board = [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ]
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            const cellid = i * 9 + j + 1
            if (board[i][j] === 0) {
                document.querySelector(`#cell-${cellid} input`).value = ""
                document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                document.querySelector(`#cell-${cellid} input`).readOnly = false;
            } else {
                document.querySelector(`#cell-${cellid} input`).value = board[i][j]
                document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                document.querySelector(`#cell-${cellid} input`).readOnly = true;
            }
        }
    }
}

function mediumsudoku() {
    localStorage.clear();

    document.getElementById("hard").removeAttribute("style");
    document.getElementById("easy").removeAttribute("style");
    var modify = document.getElementById("medium");
    modify.setAttribute("style", "background-color: #BBDEFB");
    const board = [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ]
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            const cellid = i * 9 + j + 1
            if (board[i][j] === 0) {
                document.querySelector(`#cell-${cellid} input`).value = ""
                document.querySelector(`#cell-${cellid} input`).readOnly = false;
            } else {
                document.querySelector(`#cell-${cellid} input`).value = board[i][j]
                document.querySelector(`#cell-${cellid} input`).readOnly = true;
            }
        }
    }
}

function hardsudoku() {
    localStorage.clear();

    var modify = document.getElementById("hard");
    modify.setAttribute("style", "background-color: #BBDEFB;");
    document.getElementById("easy").removeAttribute("style");
    document.getElementById("medium").removeAttribute("style");
    const board = [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ]
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            const cellid = i * 9 + j + 1
            if (board[i][j] === 0) {
                document.querySelector(`#cell-${cellid} input`).value = ""
                document.querySelector(`#cell-${cellid} input`).readOnly = false;
            } else {
                document.querySelector(`#cell-${cellid} input`).value = board[i][j]
                document.querySelector(`#cell-${cellid} input`).readOnly = true;
            }
        }
    }
}

function blocks(blocknumber) {
    var Vb = [];
    var x = document.getElementsByClassName(blocknumber);
    for (var z = 0; z < x.length; z++) {
        Vb.push(x[z].value);
    }
    var flag1 = 0;
    var flag2 = 0;
    for (let i = 0; i < Vb.length; i++) {
        for (let j = i + 1; j < Vb.length; j++) {
            if (Vb[i] === Vb[j] && Vb[i] != "") {

                flag1 = 1;
            }
            if (Vb[i] == "") {
                flag2 = 1;
            }
        }
        if (flag1 == 1 || flag2 == 1) {
            return false;
        }
    }



}

function row(rownumber) {
    const Vr = [];
    const start = (rownumber - 1) * 9 + 1;
    const end = rownumber * 9;
    for (let i = start; i <= end; i++) {
        document.getElementById(i).classList.remove("errorrow")
    }
    for (let i = start; i <= end; i++) {
        Vr.push(document.getElementById(i).value);
    }
    var flag1 = 0;
    var flag2 = 0;
    for (let i = 0; i < Vr.length; i++) {
        for (let j = i + 1; j < Vr.length; j++) {
            if (Vr[i] === Vr[j] && Vr[i] != "") {
                let a = start + i;
                let b = start + j;
                document.getElementById(`${a}`).classList.add("errorrow")
                document.getElementById(`${b}`).classList.add("errorrow")
                flag1 = 1;
            }
            if (Vr[i] == "") {
                flag2 = 1;
            }
        }
    }
    if (flag1 == 1 || flag2 == 1) {
        return false;
    }
}

function column(columnnumber) {
    const Vc = [];
    const start = columnnumber;
    for (let i = start; i <= 72 + start; i += 9) {
        document.getElementById(i).classList.remove("errorcolumn")
    }
    for (let i = start; i <= 72 + start; i += 9) {
        Vc.push(document.getElementById(i).value);
    }
    var flag1 = 0;
    var flag2 = 0;
    for (let i = 0; i < Vc.length; i++) {
        for (let j = i + 1; j < Vc.length; j++) {
            if (Vc[i] === Vc[j] && Vc[i] != "") {
                let a = start + (9 * i);
                let b = start + (9 * j);
                document.getElementById(`${a}`).classList.add("errorcolumn")
                document.getElementById(`${b}`).classList.add("errorcolumn")
                flag1 = 1;
            }
            if (Vc[i] == "") {
                flag2 = 1;
            }
        }
    }
    if (flag1 == 1 || flag2 == 1) {
        return false;
    }
}

function validaterows() {
    var a = [];
    for (let i = 1; i <= 9; i++) {
        a[i] = row(i);
    }
    for (var i = 1; i < a.length; i++) {
        if (a[i] == false) {
            return false;
            break;
        }
    }
}

function validatecolumns() {
    var a = []
    for (let i = 1; i <= 9; i++) {
        a[i] = column(i);
    }
    for (var i = 1; i < a.length; i++) {
        if (a[i] == false) {
            return false;
            break;
        }
    }
}

function validateblocks() {
    var a = []
    for (let i = 0; i <= 9; i++) {
        a[i] = blocks(i);
    }
    for (var i = 1; i < a.length; i++) {
        if (a[i] == false) {
            return false;
            break;
        }
    }
}

function ValidationCheck() {
    var check1 = validaterows()
    var check2 = validatecolumns()
    var check3 = validateblocks()
    if (check1 != false && check2 != false && check3 != false) {
        var winning = document.createElement("h1");
        winning.innerText = "YOU WON!!!";
        winning.setAttribute("style", "color:red");
        var win = document.getElementById("game");
        win.appendChild(winning);
    }
}
easysudoku();
document.getElementById('Validate').addEventListener('click', ValidationCheck)
document.getElementById('easy').addEventListener('click', easysudoku)
document.getElementById('medium').addEventListener('click', mediumsudoku)
document.getElementById('hard').addEventListener('click', hardsudoku);

function myLocal(id) {
    if (localStorage.getItem("value")) {
        lval = JSON.parse(localStorage.getItem("value"))
        lid = JSON.parse(localStorage.getItem("id"));
        lval.push(document.getElementById(id).value);
        lid.push(id);

        localStorage.setItem("value", JSON.stringify(lval))
        localStorage.setItem("id", JSON.stringify(lid))
    } else {
        lval = [];
        lid = [];
        lval.push(document.getElementById(id).value);
        lid.push(id);

        localStorage.setItem("value", JSON.stringify(lval))
        localStorage.setItem("id", JSON.stringify(lid))
    }
}