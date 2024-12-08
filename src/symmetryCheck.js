
export function checkHV(arr, N, M) {
    // Initializing as both horizontal 
    // and vertical symmetric. 
    let horizontal = true;
    let vertical = true;

    // Checking for Horizontal Symmetry. 
    // We compare first row with last 
    // row, second row with second 
    // last row and so on. 
    for (let i = 0, k = N - 1;
        i < parseInt(N / 2, 10); i++, k--) {

        // Checking each cell of a column. 
        for (let j = 0; j < M; j++) {
            // check if every cell is identical 
            if (arr[i][j] != arr[k][j]) {
                horizontal = false;
                break;
            }
        }
    }

    // Checking for Vertical Symmetry. We compare 
    // first column with last column, second column 
    // with second last column and so on. 
    for (let j = 0, k = M - 1;
        j < parseInt(M / 2, 10); j++, k--) {

        // Checking each cell of a row. 
        for (let i = 0; i < N; i++) {
            // check if every cell is identical 
            if (arr[i][j] != arr[i][k]) {
                vertical = false;
                break;
            }
        }
    }

    if (!horizontal && !vertical)
        return "NO SYMMETRY";
    else if (horizontal && !vertical)
        return "HORIZONTAL SYMMETRY";
    else if (vertical && !horizontal)
        return "VERTICAL SYMMETRY";
    else
        return "BOTH";
}