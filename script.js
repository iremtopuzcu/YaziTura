//tura ve yazı sayılarını oluştur ve başlangıçta sıfırla
let tura= 0;
let yazi= 0;

//html de bulunan coin, flip butonu ve reset butonu seç
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//flip butonuna tıklanıldığında
flipBtn.addEventListener('click', ()=>{
    let i = Math.floor(Math.random() * 2);//fllor ile yuvarladık, 0 ya da 1 sayısını seçecek
    // 0:tura  1:yazı

    //coin animasyonunu geçici olarak kapat
    coin.style.animation ="none";

    if (i === 0) {
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
    } else {
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
    }

    //istatistikleri güncelle ve butonu devre dışı bırak
    setTimeout(updateStats, 3000);
    disableButton();


});

//istatistikleri güncelleme fonksiyonu
function updateStats(){
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

 //butonu geçici olarak devre dışı bırakma
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled =false;
    }, 3000);
}

//reset butonuna tıklama
resetBtn.addEventListener('click',()=>{
    //coin animasyonunu kapat, tura ve yazı sayılarını sıfırla, istatistikleri güncelle
    coin.style.animation= "none";
    tura= 0;
    yazi= 0;
    updateStats();
});