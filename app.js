const imgBox = document.querySelector('.imgBox');
const qrimg = document.querySelector('.qr__img');
const qrText = document.querySelector('.input');
const generateBtn = document.querySelector('.generate__btn');

function generateQr() {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add('show');
}

generateBtn.addEventListener('click', ()=> {
    generateQr();
})