/* BUat sebuah fungsi yang melakukan looping dari 1 sampai x dengan peraturan khusus:
* 1. Untuk setiap angka yang bisa dibagi dengan 3, jangan print angkanya, tapi print "Tiga"
* 2. Kalau bisa dibagi dengan 5, print "Lima"
* 3. Kalau bisa dibagi oleh 3 dan 5, print "TimaLima"
* 4. Jika tidak bisa dibagi dengan 3 atau 5, maka print angka tersebut
* */

function printSpecialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('TimaLima');
    } else if (i % 3 === 0) {
      console.log('Tiga');
    } else if (i % 5 === 0) {
      console.log('Lima');
    } else {
      console.log(i);
    }
  }
}

printSpecialNumbers(50);