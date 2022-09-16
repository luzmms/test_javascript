function verifyRow(pArray) {

    let arrayGood;

    for (let column = 0; column <= pArray.length; column++) {

        if (!isNaN(pArray[column]) && pArray[column] > 0 && pArray[column] < 10) {
            arrayGood = console.log("Sudoku it's good.");
        } else {
            arrayGood = console.log("Sudoku it's wrong.");
            break;
        }
    }

    return arrayGood;
}