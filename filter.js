function panggilFilter() {
    var array = [
        { negara : 'Indonesia', benua: 'Asia' },
        { negara : 'Jepang',    benua: 'Asia' },
        { negara : 'Amerika',   benua: 'Eropa' },
        { negara : 'Mexico',    benua: 'Eropa' },
    ];

    var benuaAsia = array.filter(function (value) {
        return value.negara === 'Indonesia';
    });
    console.log(benuaAsia);    
}
function panggilAngka() {
    var angka = [1, 2, 3, 4, 6];
    var cariAngka = angka.filter(function (value) {
        return value % 2 === 0 
    });
    console.log(cariAngka);    

}


panggilFilter()
panggilAngka()



