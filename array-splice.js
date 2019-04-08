// MANIPULASI ARRAY PUSH
function pushArray() {
    kota = ['demak','semarang','kendal','jakarta']
    console.log(kota);

    // FUNGSI SPLACE JS UNTUK MENAMBAHKAN NILAI INDEX DITENGAH YG KITA MAU DAN KKITA BISA MEREPLES ATAU MENGHAPUS YG DIBELAKANG KITA MASUKAN ;
    kota.splice(2,1,'pamulang')
    kota.splice(2,0,'pamulang')
    // console.log(kota2);
    return kota;
}


console.log(pushArray());
