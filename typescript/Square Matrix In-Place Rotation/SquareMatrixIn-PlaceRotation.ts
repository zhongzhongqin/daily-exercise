/**
 * @param {*[][]} originalMatrix 源矩阵
 * @Source https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/square-matrix-rotation/squareMatrixRotation.js
 * @return {*[][]}
 */
function squareMatrixRotation(originalMatrix) {
    const matrix = originalMatrix.slice();

    // Do top-right/bottom-left diagonal reflection of the matrix.
    // 沿着对角线对矩阵右上/左下的元素进行交换（）
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
        for (let columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {
            // Swap elements.
            // 交换元素
            [
                matrix[columnIndex][rowIndex],
                matrix[rowIndex][columnIndex],
            ] = [
                matrix[rowIndex][columnIndex],
                matrix[columnIndex][rowIndex],
            ];
        }
    }

    // Do horizontal reflection of the matrix.
    // 将矩阵元素进行横向交换
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex < matrix.length / 2; columnIndex += 1) {
            // Swap elements.
            // 交换元素
            [
                matrix[rowIndex][matrix.length - columnIndex - 1],
                matrix[rowIndex][columnIndex],
            ] = [
                matrix[rowIndex][columnIndex],
                matrix[rowIndex][matrix.length - columnIndex - 1],
            ];
        }
    }

    return matrix;
}