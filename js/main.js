var btnConvert = document.getElementById('btnConvert');
var angka = document.getElementById('angka');
var isValid = (evt)=>{
  var charCode = (evt.which) ? evt.which : event.keyCode
  if ((charCode >= 48 && charCode <= 57) || (charCode >=65 && charCode <=70) || (charCode >=97 && charCode <=102))
    return true;
  return false;
}

var isExist = (angka)=>{
  if(angka.value!=''){
    btnConvert.disabled = false;
  }else{
    btnConvert.disabled = true;
  }
}

var convert = ()=>{
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;
  var hasil = biner(angka.value).from(from).to(to);
  hasil = hasil+'<sub>('+to+')</sub>'
  document.getElementById('hasil').innerHTML = hasil;
  
}