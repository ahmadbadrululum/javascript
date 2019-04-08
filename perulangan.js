function panggilPerulangan() {
    // DATA  
    var data = ['minuman', 'makanan', 'cemilan'];


    // ==== looping data dengan FOR

    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]);
    //     console.log(i);        
    //     console.log(data);        
    // }

    // ==== looping data dengan FOREACH
    // data.forEach((value,index,array) => {
    //     console.log(value);        
    //     console.log(index);        
    //     console.log(array);          
    // })

    // == looping data dengan MAP
    // data.map((value,index,array) => {
    //     console.log(value);        
    //     console.log(index);        
    //     console.log(array);          
    // })

    // HANYA MAP YG BISA MENAMBAHKAN ARRAY BARU TANPA DI PUSH CONTOH

    var dataBaru = data.map((value, index, array) => {
        return 'Jenis : ' + value;
    });
    console.log(dataBaru);
}
// kesimpulan

// ========= KESIMPULAN 

// Perintah FOR :  DAPAT  melakukan perulangan berdasarkan jumlah yang ditentukan, sedangkan forEach dan Map Tidak bisa.
// Perintah FOR,  forEach dan Map : DAPAT perulangan berdasarkan data pajang dari sebuah array
// Perintah FOR dan forEach : TIDAK DAPAT Menghasilkan array baru
// Perintah Map: DAPAT menghasilkan array baru
// Selanjutnya ...

// Jika kita ingin melakukan perulangan berdasarkan jumlah data yang sudah ditentukan, maka gunakanlah perintah FOR
// Jika kita ingin melakukan perulangan berdasarkan panjang array dan tidak ingin mencetak array baru lagi, maka gunakanlah forEach
// Jika kita ingin melakukan perulangan dan ingin menghasilkan array baru, maka gunakanlah MAP


panggilPerulangan()