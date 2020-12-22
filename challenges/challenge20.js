function domainType(domains) {
    
    //.com = commerical
    //.org = organization
    //.net = network
    //.info = information
    const newArr = [];
    //can check if arr contains the string domainInfo
    
    //loop through domains arry
    for(let i  = 0; i < domains.length; i++){
        const eachDomain = domains[i];
        //console.log(eachDomain)
        
        //break up each domain by the period
        const split = eachDomain.split(".")
      // console.log(split.length)
        
       const domainOnly = split[split.length-1] //get only the last val at that last index 
      
    
        if(domainOnly === "org"){
            newArr.push("organization")
        }
        else if(domainOnly === "net"){
            newArr.push("network")
        }
        else if(domainOnly === "com"){
            newArr.push("commercial")
        }
        else{
            newArr.push("information")
                    }
    }
   
    return newArr;
}


//refactor after waching solution 12/21/20