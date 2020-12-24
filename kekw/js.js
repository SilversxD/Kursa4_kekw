
$('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $(this).toggleClass('menu-btn-active');
    $('.content').toggleClass('content-active');
});
$('.menu-btn').on('click', function (e) {
    $('.cont').toggleClass('content-active'); //Для того чтобы страница не обновлялась при клике
});

var b = false;
let inp2 = document.getElementById("inp2");
inp2.oninput = handleInput2;
function handleInput2(e) {
        if (e.target.value != null & e.target.value != 0 & e.target.value!= "")
        {
            b = true;
        }
                
}

btn.onclick = function(e){
    if(e.target.id == 'btn' & b == true){
       alert("Вы подписались")
    }
    else 
    {
        alert("Введите данные")
    }
}