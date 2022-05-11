console.log("Running...")

//1st Function
function countDown() {
    for(let i = 5; i>0; i--){
        console.log(i)
    }
}  

//2nd Function

function countUp(start, end) {
    console.log(start)        
    for (let i = start; i <= end; i++) {
        console.log(i)        
    }
}



//3rd Function

function isLong(word) {
    console.log( word.length)
}


//4rth Function

function whatWaterState(temperature) {
    if (temperature <= 32) {
        console.log('solid')
    }
    if (temperature > 32 && temperature < 212) {
        console.log('liquid')
    }
    if(temperature >= 212){
        console.log('gas')
    }
}


// 5th function

let sandwitch = [
    {
        'type':"Italian",
        'calories':1000 ,
        'cost':7.69 , 
        'isVageterian':false
    },
    {
        'type':"Veggie",
        'calories':500 ,
        'cost':5.50 , 
        'isVageterian':true
    },
    {
        'type':"Meatball",
        'calories':900 ,
        'cost':8.25 , 
        'isVageterian':false
    },
    {
        'type':"Jackfruit",
        'calories':650,
        'cost':8.50 , 
        'isVageterian':true
    },
]



// 6th function

function makeSandwitch(
    sandwitchArray,
    type,
    calories,
    cost,
    isVageterian) {
        let details = {type,calories,cost,isVageterian}
        sandwitchArray.push(details)
        console.log(sandwitchArray)
}


// 7th function

function findVegeterinSandwitch(sanddwitchArray) {

    const index = sanddwitchArray.findIndex((item,index)=> {
        return item.isVageterian === true
    })

    console.log(sandwitch[index])

}



// 8th function

function findCheapestSandwitch(sandwitch) {

    const lowest = sandwitch.reduce(
        (prev, curr) =>
        prev.cost < curr.cost ?
        prev :
        curr
      )
      
      console.log(lowest.cost);
}



// countDown()                      //1st Function
// countUp(5,10)                    //1st Function
// isLong("JavaScript")             //1st Function

//1st Function
// whatWaterState(30)     // solid
// whatWaterState(40)     // liquid
// whatWaterState(200)    //liquid
// whatWaterState(220)    //gas

// console.log(sandwitch)           //1st Function
// makeSandwitch(sandwitch,'vegeterian',300,344,false)     //1st Function
// findVegeterinSandwitch(sandwitch)     //1st Function
// findCheapestSandwitch(sandwitch)      //1st Function

