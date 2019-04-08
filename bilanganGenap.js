function bilanganGenap() {
    var sarangGenap = [];
    for (let i = 1; i <= 10; i++) {
        if (i%2 === 0 ) {
            sarangGenap.push(i);
        }else{
            sarangGenap.unshift(i);
        }
    }    

    return sarangGenap;
}
console.log(bilanganGenap());

