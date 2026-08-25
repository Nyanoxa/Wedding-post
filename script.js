const envelope = document.querySelector(".envelope");
const hint = document.querySelector(".invitation__hint");
const pageTransition = document.querySelector("#pageTransition");

envelope.addEventListener("click", function () {

    // Защита от повторного клика
    if (envelope.classList.contains("open")) {
        return;
    }

    // Открываем конверт
    envelope.classList.add("open");

    // Убираем подсказку
    hint.style.opacity = "0";


    // Даём анимации конверта немного проиграться
    setTimeout(function () {

        // Немного отдаляем конверт
        envelope.style.transform = "scale(0.96) translateY(-10px)";

    }, 450);


    // Начинаем переход
    setTimeout(function () {

        pageTransition.classList.add("active");

    }, 800);


    // Открываем вторую страницу
    setTimeout(function () {

        window.location.href = "welcome.html";

    }, 1600);

});