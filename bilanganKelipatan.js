function bilanganKelipatam() {
    var sarangKelipatan = [];
    for (let i = 1; i <= 30; i++) {
        if (i%5 === 0 ) {
            sarangKelipatan.push(i);
        }

    }    

    return sarangKelipatan;
}

console.log(bilanganKelipatam());

