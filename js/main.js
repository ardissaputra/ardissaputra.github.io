const scriptURL = 'https://script.google.com/macros/s/AKfycbyCKBCtJdNro_Q4OtH3K__iNsh0z9dopK_FQG_TB9CLtSj1HVPll0jc-gXYJ8yA6wCr/exec'
const form = document.forms['Arscreative-contact']
const inputNama = document.getElementById('nama');
const inputTelp = document.getElementById('telp');
const inputPesan = document.getElementById('pesan');
const alertt = document.getElementById('alert');

// const nama = inputNama.value.trim();
// const telp = inputTelp.value.trim();
// const pesan = inputPesan.value.trim();

const pesanPattern = /^[A-Za-z0-9 ,."()\-+&@\/%]*$/;
const telpPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const namaPattern = /^[a-zA-Z' -]+$/;

form.addEventListener('submit', e => {
  e.preventDefault()
  if(!namaPattern.test(inputNama.value.trim())){
    alertt.innerHTML = 'Format Nama Yang Anda Masukan Tidak Sesuai'
  } else if (!pesanPattern.test(inputPesan.value.trim())){
    alertt.innerHTML = 'Terlalu Banyak Karakter Yang Tidak Dikenali Di Pesan Anda'
  } else{
    document.getElementById('send').innerHTML = `LOADING...`
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        inputNama.value = '';
        inputTelp.value = '';
        inputPesan.value = '';
        document.getElementById('send').innerHTML = `SUCCES`
        setTimeout(() => {
            document.getElementById('send').innerHTML = 'SEND'
        }, 2000);
        console.log('Success!', response);
        })
    .catch(error => console.error('Error!', error.message))
   }
})