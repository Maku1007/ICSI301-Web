var calendar2021 = {
  jan: { 1: "Сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай" },
  dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};

// console.log(calendar2021);
// var s = JSON.stringify(calendar2021);
// console.log(s);

document.getElementById("jan-1").innerHTML = calendar2021.jan[1];
document.getElementById("jun-6").innerHTML = calendar2021.jun[6];
document.getElementById("feb-1").innerHTML = calendar2021.feb[1];
document.getElementById("feb-3").innerHTML = calendar2021.feb[3];
document.getElementById("feb-17").innerHTML = calendar2021.feb[17];
document.getElementById("mar-2").innerHTML = calendar2021.mar[2];
document.getElementById("mar-6").innerHTML = calendar2021.mar[6];
document.getElementById("mar-8").innerHTML = calendar2021.mar[8];
document.getElementById("apr-1").innerHTML = calendar2021.apr[1];
document.getElementById("may-10").innerHTML = calendar2021.may[10];
document.getElementById("jun-6").innerHTML = calendar2021.jun[6];
document.getElementById("jul-4").innerHTML = calendar2021.jul[4];
document.getElementById("aug-1").innerHTML = calendar2021.aug[1];
document.getElementById("aug-25").innerHTML = calendar2021.aug[25];
document.getElementById("sep-1").innerHTML = calendar2021.sep[1];
document.getElementById("oct-13").innerHTML = calendar2021.oct[13];
document.getElementById("nov-2").innerHTML = calendar2021.nov[2];
document.getElementById("dec-20").innerHTML = calendar2021.dec[20];
document.getElementById("dec-30").innerHTML = calendar2021.dec[30];
