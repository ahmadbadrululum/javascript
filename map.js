function readMap() {
    var data = ['minuman', 'makanan', 'cemilan'];
    var no = 1;
    // hampir sama dengan foreach melooping data sesuai isi array
    data.map( (value, index, array)=>{
        console.log(no + '. ' + value);
        no++;
    })

}

readMap();