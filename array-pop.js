// MANIPULASI ARRAY POP


function poArray() {
    kota = ['demak','semarang','kendal','jakarta',]
    console.log(kota);
    
    // FUNGSI SHIFT JS UNTUK MENGHAPUS INDEX PALING BELAKANG;
    var kota2 = kota.pop()
    console.log(kota2);
    return kota;
}


console.log(poArray());
