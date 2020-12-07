//sort element in array by length, if same length, return those items it the order of the array in your answer
//https://scrimba.com/learn/adventcalendar/cyw87yuK?utm_source=newsletter&utm_medium=email&utm_campaign=javascriptmas_day6&purge=true

function sortByLength(strs) {
    //  sort by increasing lengths
    // if same length, must be same order as original array

    //sort method ascending
   let sorted = strs.sort(function(a,b){
        return a.length - b.length;
    });

    //console.log(sorted)
return sorted;
}

sortByLength(["aba","aac","a", ""])
