const func = (decorator, string) => {
    return decorator(string)
}

const cb = (string) => {
    const c_split = string.split('c')
    const concat_c = ' c'
    let new_string = ''
    for (let char in c_split) {
        new_string += c_split[char]
        new_string += concat_c
    }
    let fragments = new_string.split(' ').slice(0,-1)
    return fragments
}

const cb1 = (string) => {

    let copy = ""
    let count = 0
    let len = 0
    for (let char in string) {
        if (string[char] == 'a') {
            copy +=  string[char].replace('a','A')
            count += 1
        }
        else{
            copy += string[char]
        }
        len += 1
    }

    const table = {
        originalString: string,
        modifiedString: copy,
        numberReplaced: count,
        length:		 	 len,
    }
    return table
}

let expression1 = func(cb, 'supercalifragilisticexpialidocious')
console.log(expression1)
let expression2 = func(cb1, 'supercalifragilisticexpialidocious')
console.table(expression2)