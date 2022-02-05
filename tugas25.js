function sort(){
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya :")
  console. log(angka);
  var angka2 = angka.sort();
  console.log("Ascending :")
  console.log(angka);

  const angka3 = angka.reverse();
  console.log("Descending :")
  console.log(angka);

  console.log("Filter>10 :")
  let filterr = angka.filter(angka => {
    return angka> 10;
  });
  console.log(filterr);
}

console.log(sort());
