// Функция отказ
function End(){
    alert('Хорошего вам дня, до свидания');
}


var year1;
var year;


// Функция рассчета года зодиака
function cYear() {
    year1 = document.querySelector('.year').value;
    year = year1 % 12; 
        if ( year == 1 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Обезьяны вы очень энергичны и стремительны " + '<br>' + "<img src='img/monkey.jpg' width='450' height='450'>";
        } else if ( year == 2 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 3 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 4 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 5 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 6 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 7 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 8 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 9 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 10 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 11 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else if ( year == 12 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год " ;
        } else {
            document.getElementById('god-content').innerHTML = "Error";
        }
}
function Open() {
    document.getElementById('vtrBlokId').innerHTML = '<h1>По году или по знаку задиака?</h1>' + '<button class="button button3" onclick="openYear()"></button>' + 'По году' + '<button class="button button4" onclick="openZod()"></button>' + 'По знаку Зодиака';
}
function openYear() {
    document.getElementById('trtBlokId').innerHTML = '<div class="godina">' + '<p>Введите год рождения</p>' + '<input type="number" min="1900" max="2099" step="1" value="" id="year" /><button class="button button12" onclick="cYear()" >Подтвердить</button>' + '<p id="god-content"></p>' + '<img id="avatarka"></div>';
    document.getElementById('refreshId').innerHTML = '<p>Хотите новую дату?</p>' +'<button class="button button2" onclick="Clear()"></button>Да' + '<button class="button button1" onclick="End()"></button>Нет';
}
function openZod() {
    document.getElementById('trtBlokId').innerHTML = '<div class="zodiak">' + '<p>Введите дату рождения</p>' + '<input type="date" name="" id="month"><button class="button button21" onclick="cZod()" >Подтвердить</button>' + '<p id="zodiak-content"></p></div>';
    document.getElementById('refreshId').innerHTML = '<p>Хотите новую дату?</p>' +'<button class="button button2" onclick="Clear()"></button>Да' + '<button class="button button1" onclick="End()"></button>Нет';
}
function Clear() {
    document.getElementById('clearId').innerHTML = '<div class="prvblok"><h1>Хотите знать о себе?</h1>' + '<button class="button button1" onclick="Open()" ></button>Да   ' + '<button class="button button2" onclick="End()" ></button>Нет</div>' + '<div class="vtrblok" id="vtrBlokId"></div>' + '<div class="trtblok" id="trtBlokId"></div>' + '<div class="refresh" id="refreshId"></div>';
}
