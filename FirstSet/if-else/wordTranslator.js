function helloWorld(lang) {
    if (lang == 'es') {
        return 'Hola, Mundo!';
    } 
      else 
        if (lang == 'de') {
          return 'Halo Welt!';
    } 
            else {
              return 'Hello, World!';
    }
}

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));