switch(new Date().getDay()){
    // karena getDay kembaliannya berupa angka maka case dinamai menggunakan angka 0-6
    case 0:
        day = "Minggu";
        break;
    case 1:
        day = "Senin";
        break;
    case 2:
        day = "Selasa";
        break;
    case 3:
        day = "Rabu";
        break;
    case 4:
        day = "Kamis";
        break;
    case 5:
        day = "Jumat";
        break;
    case 6:
        day = "Sabtu";
        break;
}

document.getElementById("day").innerHTML = day