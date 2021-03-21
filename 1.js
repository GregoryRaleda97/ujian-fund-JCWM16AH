// // no.1 
// //let bangunan = ["Persegi", "Segitiga Siku2 Rata Kiri", "Segitiga Siku2 Rata Kanan"]
// let ukuran = 5;
// let result = ""


let ukuran = 5;
let result = ""

for (let b = 0; b <= ukuran; b++) {
    result += " ";
    for (let c = 0; c <= ukuran; c++) {
        result += "*";
    }
    result += "\n";
}

// segitiga siku kiri
for (let i = 0; i < ukuran; i++) {
    for (let j = 0; j < i; j++) {
        result += "*"
    }
    result += "\n"
}

//segitiga siku kanan
for (let k = 0; k < ukuran; k++) {
    for (let l = ukuran - k - 1; l > 0; l--) {
        result += " ";
    }
    for (let a = 0; a < k; a++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)