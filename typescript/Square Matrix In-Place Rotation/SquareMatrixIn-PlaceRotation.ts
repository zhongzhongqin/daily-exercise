/**
 * @param {*[][]} originalMatrix 源矩阵
 * @Source https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/square-matrix-rotation/squareMatrixRotation.js
 * @return {*[][]}
 */
function squareMatrixRotation(originalMatrix) {
    const matrix = originalMatrix.slice();

    // Do top-right/bottom-left diagonal reflection of the matrix.
    // 沿着对角线对矩阵右上/左下的元素进行交换（）

    // example:
    // [1,2,3]     [1,4,7]
    // [4,5,6] ===>[2,5,8]
    // [7,8,9]     [3,6,9]

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
    // 将矩阵元素进行水平交换

    // [1,2,3]     [1,4,7]     [7,4,1]
    // [4,5,6] ===>[2,5,8] ===>[8,5,2] it's looks like rotated 90 degree.
    // [7,8,9]     [3,6,9]     [9,6,3]
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

