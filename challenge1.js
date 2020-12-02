//challenge 1 
//n chilren have m pieces of candy. they can eat as much candy as they can but each child
//must eat exactly the same amt of candy. Determine how many pieces candy children can eat
//no splitting candy in half


function candies(children, candy) {
    // n num of children
    //m is num of candy
    
    //divide the amt of candy by children = m/n 
    const candyAvail = candy/children //this tells how much  per child will get
    let totalCanEat = 0;
    
    //round how much per child can eat to nearest interger multiply by amt of children to get answer
    totalCanEat =  Math.floor(candyAvail) * children;

   return totalCanEat;
}

