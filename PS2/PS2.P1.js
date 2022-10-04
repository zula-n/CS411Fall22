function* fibs(){
   let [val1, val2, current] = [0, 1, 0]

    while (true)
    {
        current = val1
        val1 = val2
        val2 = current + val1
        yield current
    }

    }
myFibs = fibs()
let count = 6;


function* getNextEven() {
    while(true){
    for(let i of fibs()) {
        if (i % 2 == 0) {
            yield i
        }
    }
    }
}

nextEven = getNextEven()
while(count --> 0){
    console.log(nextEven.next().value)
}

