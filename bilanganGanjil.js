function bilangGanjl() {
    var sarangGanjil = [];
    for (let i = 1; i <= 20; i++) {
        if (i%2 !== 0 ) {
            sarangGanjil.push(i);
        }

    }    

    return sarangGanjil;
}

console.log(bilangGanjl());

