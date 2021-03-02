let carInfo = {
    manufacturer: "Chevrolet Impala",
    model: "Impala",
    year: "1967",
    speed: 150,
}

function showInfo() {
    console.log(carInfo);
}

let question = confirm("Хотите посмотреть информацию о автомобиле?");

if (question === true) {
    showInfo();
}

function calculateTime(distance, speed) {
    let time = distance / speed;
    if (time > 4) {
        let difference = time / 5;
        return time + difference;
    }
    return time;
}

let distance = parseInt(prompt("Введите расстояние (км)"));
console.log(calculateTime(distance, carInfo.speed));