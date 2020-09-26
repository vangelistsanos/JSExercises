function multilanguageGreetings(language) {

    if (typeof language !== 'string') {
        return 'Argument must be a string like es,de,en'
    }
    
    let lang = language.toLowerCase();
    
    let result = '';

    switch (lang) {
        case 'es' :
            result = 'Hola Mundo !!!'
            break;
        case 'de' : 
            result = 'Hallo Welt !!!'
            break;
        default :
        result = 'Hello World !!!'
    }

    return result;
}

console.log(multilanguageGreetings('sfdds'));
console.log(multilanguageGreetings('en'));
console.log(multilanguageGreetings('es'));
console.log(multilanguageGreetings('de'));