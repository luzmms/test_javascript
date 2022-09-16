const array_number = new Array(9);
const arrayToCheck = new Array(9);
var array_column;

function toVerify() {
    array_number[0] = "4 2 7 3 5 1 9 8 6";
    array_number[1] = "9 8 3 7 6 2 5 1 4";
    array_number[2] = "1 5 6 8 9 4 7 2 3";
    array_number[3] = "2 3 9 1 8 5 4 6 7";
    array_number[4] = "7 4 1 6 3 9 2 5 8";
    array_number[5] = "5 6 8 2 4 7 1 3 9";
    array_number[6] = "8 7 2 9 1 3 6 4 5";
    array_number[7] = "3 9 5 4 2 6 8 7 1";
    array_number[8] = "6 1 4 5 7 8 3 9 6";
}

function fillSudoku() {

    toVerify();

    for (let row = 0; row <= array_number.length - 1; row++) {
        arrayToCheck[row] = new Array(9);
        array_column = array_number[row].split(' ');

        for (let column = 0; column <= array_column.length - 1; column++) {
            arrayToCheck[row][column] = array_column[column];
        }
    }
}

function printSudoku() {

    let sudoku = createGrid();
    document.write(sudoku);

}

function createGrid() {

    let grid = '<table>';

    for (let row = 0; row <= arrayToCheck.length - 1; row++) {
        grid += '<tr>';
        grid += createColumn(row);
        grid += '</tr>';
    }

    grid += '</table>';
    return grid;
}

function createColumn(pRow) {

    let columns = "";

    for (let column = 0; column <= arrayToCheck[pRow].length - 1; column++) {
        columns += createOneBox(pRow, column);
    }

    return columns;
}

function createOneBox(pRow, pColumn) {

    let oneBox = "";

    oneBox += `<td>${arrayToCheck[pRow][pColumn]}</td>`;

    return oneBox;
}