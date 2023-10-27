function doiTien() {
    let amount=document.getElementById('amount').value;
    let from=document.getElementById('from').value;
    let to=document.getElementById(to).value;
    let result;
    document.write(
    if (from=='VND'&&to=='USD'){ result='result:'+(amount*23000)+'$';
    }
    else if(from=='USD'&&to=='VND'){result='result:'+(amount/23000)+'VND';
    }
    else if(from=='VND'&& to=='VND'){result='result'+amount+'VND'};
else if(from=='USD'&& to=='USD'){result='result'+amount+'USD'}
    document.getElementById('result').innerHTML=result
}
)
