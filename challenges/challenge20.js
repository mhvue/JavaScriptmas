function domainType(domains) {
    
    //.com = commerical
    //.org = organization
    //.net = network
    //.info = information
    const domainInfo = ["com", "org", "net", "info"];
    const newArr = [];
    //can check if arr contains the string domainInfo
    
    //loop through domains arry
    for(let i  = 0; i < domains.length; i++){
        const eachDomain = domains[i];
        //console.log(eachDomain)
        
        //break up each domain by the period
        const split = eachDomain.split(".")
       // console.log(split)
        
        //loop through those split up
        for (let j = 0; j < split.length; j++){
            //console.log(split[j])
            
            //check to see if each match the domainInfo array
            for(let k = 0; k < domainInfo.length; k++){
                
                //write out what each domainInfo stands for and push that to newArr
                if(split[j] === domainInfo[k]){
                    if(domainInfo[k] === "org"){
                        newArr.push("organization")
                    }
                    else if(domainInfo[k] === "net"){
                        newArr.push("network")
                    }
                    else if(domainInfo[k] === "com"){
                        newArr.push("commercial")
                    }
                    else{
                        newArr.push("information")
                    }
                }
        
            }
        }
    }
   
    return newArr;
}


//i do not like my soluation above as it contains 3 nested loops. need to refractor 