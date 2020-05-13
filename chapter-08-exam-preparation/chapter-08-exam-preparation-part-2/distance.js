function distance([speed, time1, time2, time3]) {
    speed = parseInt(speed);    // km
    time1 = parseInt(time1);    // mins
    time2 = parseInt(time2);
    time3 = parseInt(time3);

    let kilometers = speed * (time1 / 60);
    speed += (speed * 0.10);

    kilometers += speed * (time2 / 60);
    speed -= (speed * 0.05);

    kilometers += speed * (time3 / 60);

    console.log(kilometers.toFixed(2));
}

distance(["90", "60", "70", "80"]);
distance(["140", "112", "75", "190"]);