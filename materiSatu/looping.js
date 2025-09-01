const bini = ["saski", "gwen", "rona", "nadiva"];

// for loop
for (i = 0; i < bini.length; i++){
    console.log(bini[i])
}

// while loop
i = 0
while (bini[i]){        // akan bekerja jika index ada isinya atau truthy
    console.log(bini[i]);
    i++;
}

// do while loop
x = 0
do {
    console.log(bini[x]);
    x++;
} while (bini[x]);  // akan berhenti jika index tidak ada isinya atau falsey