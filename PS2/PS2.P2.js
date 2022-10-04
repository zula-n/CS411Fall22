function* oneWord(){
    let sentence = "All I know is something like a bird within her sang";
    const array = sentence.split(" ")
    for(let word of array){
        yield word
    }

}
oneAtaTime = oneWord()
for(let one of oneAtaTime) {
    console.log(one)
}
