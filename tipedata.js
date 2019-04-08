function tipedata() {
    var data = 2;

    console.log(typeof(data));
    

    // smama dengan 3 adalah kondisi yg sepsifik sesuai dengan tipe datanya
    // if (data === 2) {
    
    // sama dengan 2 penting isinya valuenya sama
    if (data == 2) {
        return 'sama ' + data;
    } else {
        return 'gagal';
    }
}



console.log(tipedata());