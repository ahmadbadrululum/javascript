function shiftArray() {
    kota = ['demak','semarang','kendal','jakarta',]
    console.log(kota);
    

    // FUNGSI SHIFT JS UNTUK MENGHAPUS INDEX PERTAMA PADA ARRAY YAITU INDEX 0;
    var kota2 = kota.shift()
    console.log(kota2);
    return kota;
}


console.log(shiftArray());
