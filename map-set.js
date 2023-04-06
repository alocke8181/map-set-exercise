const hasDuplicate = (args) => {
    let argSet = new Set(args);
    return (args.length !== argSet.size())
}

const vowelCount = (arg) => {
    const vowels = 'aeiou';
    let lowerCase = arg.toLowerCase();
    let vowelMap = new Map();
    for (let letter of lowerCase){
        if(vowels.includes(letter)){
            if(vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter)+1);
            }
            else{
                vowelMap.set(letter, 1);
            }
        }
    }
}