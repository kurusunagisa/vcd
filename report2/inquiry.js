var btn = document.getElementById("sub");
btn.addEventListener('click', function () {
    let flag = false
    console.log(document.inquiry.name.value);
    Array.from(document.inquiry).forEach((input) => {
        console.log(input, input.value);
        if (input.type != "button" && input.value === '') {
            console.log(input, input.value);
            flag = true;
        }
    });
    if (!flag) {
    document.inquiry.submit();
    window.location.href = "submit.html";  
    } else {
        alert("必須記入欄が記入されていません")
    }
});