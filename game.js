//? Pcye 1-20 arasında sayi tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;
//?Skor u index.html den çekebilrdik. Ama çok kulanacağımız için bu daha tercih edilen yoldur.

let enYuksekSkor = 0;

//? Her Chech butonuna basıldığında yapılacaklar.

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //! Tahmin girmeden butona basıldıysa
  if (!tahmin) {
    mesaj.textContent = "Lütfen bir sayı giriniz";

    //! Tahmin doğruysa
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz!👏";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;

    // Top Score Kontrolü

    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      document.querySelector("top-score").textContent = enYuksekSkor;
    }

    //! Tahmin yanlışsa
  } else {
    //? SKor 1'den büyük olduğu sürece tahmin hakkın var.

    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Artır👆")
        : (mesaj.textContent = "Azalt👇");
      //Artır Azalt
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz🥹";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      //!Oyunu Kaybettinz
    }
  }
});

// Again butonuna basınca ayarlar başlangıç ayarlarına gelsin. Arka plan #2d3436 olsun.

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";

  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayi);

  skor = 10;

  document.querySelector(".score").textContent = skor;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  mesaj.textContent = "Oyun tekrar başlıyor";
};

// //! ENTER
// //Klavyeden enter buttonuna basıldığında check butonunu tetikle.
// document.addEventListener("keydown", function(e){
//     if (e.key === "Enter") {
//         //Enter tuşuna basıldığında check butonunı tıkla
//         document.querySelector(".check").click()
//     }
// } )
