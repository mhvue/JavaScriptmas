
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-extract-matrix-column-introduction-co9a8445aab096f48e7e5ecf5
//we have a matrix(which is arrays within array) and we want you to return the index val at column for each nested array
function extractMatrixColumn(matrix, column) {
    //  we want to grab element at column(which is the index number)
    
    const newArr = [];
    //loop through matrix to get each nexted arr 
    for(let i = 0; i < matrix.length; i++){
        const innerArr = matrix[i];
        
        //now we can get each elem at index from those inner arr
        //we push that into newArr
        newArr.push(innerArr[column])
    }
    
    return newArr;

}