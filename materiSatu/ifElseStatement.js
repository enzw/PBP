nilai = 85;

// if (nilai >= 80){
//     document.getElementById("result").innerHTML = "Lulus"
// }else {
//     document.getElementById("result").innerHTML = "Gagal"
// }

if(nilai >= 80){
    document.getElementById("result").innerHTML = "Keren!"
}else if(nilai >= 70 && nilai < 80) {
    document.getElementById("result").innerHTML = "Bagus"
}else {
    document.getElementById("result").innerHTML = "Coba lagi"
}