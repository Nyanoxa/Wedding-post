const form = document.getElementById("registrationForm");
const success = document.getElementById("registrationSuccess");

const successTitle = document.getElementById("successTitle");
const successText = document.getElementById("successText");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullname = document
        .getElementById("fullname")
        .value
        .trim();

    const attendance = document.querySelector(
        'input[name="attendance"]:checked'
    );

    if (!fullname || !attendance) {
        return;
    }

    const response = {
        fullname: fullname,
        attendance: attendance.value,
        date: new Date().toISOString()
    };

    localStorage.setItem(
        "weddingGuestResponse",
        JSON.stringify(response)
    );

    form.classList.add("hidden");

    success.classList.add("active");

    if (attendance.value === "yes") {

        successTitle.textContent = "Будем рады вас видеть!";

        successText.textContent =
            `${fullname}, ваше присутствие подтверждено. ` +
            "До встречи на нашем празднике!";

    } else {

        successTitle.textContent = "Спасибо, что сообщили";

        successText.textContent =
            `${fullname}, мы сохранили ваш ответ. ` +
            "Нам будет вас не хватать!";

    }

});