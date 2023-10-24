function doiTien() {
    let amount=document.getElementById('amount').value;
    let from=document.getElementById('from').value;
    let to=document.getElementById(to).value;
    let result;
if (from=='VND'&&to=='USD'){ result='result:'+(amount*23000)+'$';
}
else if(from=='USD'&&to=='VND'){result='result:'+(amount/23000)+'VND';
}

document.getElementById('result').innerHTML=result
}
