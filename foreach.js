function readForeach() {
    var kota = ['demak','semarang','kendal','jakarta']
    // LOOPING DATA SESUAI ISI ARRAY 
    // ada 3 parameter ITEM/VALUE, INDEX, DAN JUGA ARRAY ITU SENDIRI
    kota.forEach(function (value) {
        console.log(value);
    })

    kota.forEach(function (value, index, array) {
        console.log(value);
    })
}

readForeach();