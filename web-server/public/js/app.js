console.log('Client side javascript file is loaded!')

function searchWeather() {
    const value = document.getElementById('search').value;

    fetch('/weather?address=' + value).then((res) => {
        if (res) {
            res.json().then((data) => {
                console.log(data);
            })
        }
    })
}

