function demo(a = 5, b ='test') {
    console.log(`a = ${a}; b = ${b}`);
}

demo(undefined, 'arg1');
demo(null, 'arg1');
demo(10, 'arg1');
demo(10, undefined)


//! There is no named params. This will add b, a to to global
demo(b='arg', a=10);