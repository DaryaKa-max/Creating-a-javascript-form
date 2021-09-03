/* Выводим id формы и присоединяем обработку события к определенному объекту  */
document.getElementById('main-form').addEventListener("submit",  checkForm);

/* Выводим функцию для строк */
function checkForm(event){
    event.preventDefault(); /* отключаем стандартное поведение события  */
    var el = document.getElementById('main-form'); 
/* Назначаем переменные для строк */
    var name = el.name.value; 
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
/* Назначаем пустую строку */
    var fail = "";

    if(name == "" || pass =="" || state == "") /* Прверка строк на пустоту */
    fail = "Заполните все поля!";
    else if (name. length <= 1 || name. length > 50) /* Проверка строк на длинну символов */
    fail = "Введите корректное имя!";
    else if (pass != repass) /* Проверка паролей на совпадение */
    fail = "Пароли должны совпадать!";
    else if(pass.split("&").length > 1) 
    fail = "Неккоректный пароль!";

    if(fail != "") /* Выводим ошибку */
    document.getElementById('error').innerHTML = fail;

    else{
        alert("Все данные корректно заполнены!");
        window.location = ' '; /* Ссылка направление данных в веденных строках */
    }
    return false;  
}