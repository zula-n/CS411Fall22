const rev = str => str.split("").sort((a,b) => b.localeCompare(a,{ ignorePunctuation: true })).join("").replace(/[0-9]/g, '');
console.log(rev("supercalifragilisticexpialidocious"));
