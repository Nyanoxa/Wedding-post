document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ПРИНУДИТЕЛЬНО УСТАНАВЛИВАЕМ ИМЯ
    ======================================== */

    const names = document.querySelectorAll(
        ".invitation__text h1"
    );

    names.forEach(function (name) {
        name.textContent = "Самат & Аружан";
    });


    /* ========================================
       ЭЛЕМЕНТЫ
    ======================================== */

    const envelope =
        document.querySelector(".envelope");

    const hint =
        document.querySelector(".invitation__hint");

    const pageTransition =
        document.querySelector("#pageTransition");


    /* ========================================
       ЕСЛИ ЭЛЕМЕНТОВ НЕТ — ОСТАНАВЛИВАЕМСЯ
    ======================================== */

    if (!envelope) {
        return;
    }


    /* ========================================
       КЛИК ПО КОНВЕРТУ
    ======================================== */

    envelope.addEventListener("click", function () {

        /* Защита от повторного клика */

        if (envelope.classList.contains("open")) {
            return;
        }


        /* Открываем конверт */

        envelope.classList.add("open");


        /* Убираем подсказку */

        if (hint) {
            hint.classList.add("hidden");
        }


        /* Небольшое движение конверта */

        setTimeout(function () {

            envelope.classList.add("exit");

        }, 450);


        /* Затемнение страницы */

        setTimeout(function () {

            if (pageTransition) {
                pageTransition.classList.add("active");
            }

        }, 750);


        /* Переход */

        setTimeout(function () {

            window.location.href = "welcome.html";

        }, 1200);

    });

});
