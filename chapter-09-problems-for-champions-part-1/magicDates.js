function magicDates([arg1, arg2, arg3]) {
    let beginYear = parseInt(arg1);
    let endYear = parseInt(arg2);
    let weight = parseInt(arg3);
    // set begin date
    let begin = new Date();
    begin = Date.parse(beginYear);  // begin date in milliseconds

    // set end date it is endYear with 31-12
    let end = new Date();
    end.setFullYear(endYear);
    end.setDate(31);
    end.setMonth(11); // dec

    end = Date.parse(end);  // end date in milliseconds

    // let currentDate = new Date();

    // let milli = begin + 86400000;
    // currentDate = Date.parse(milli);
    // console.log(currentDate);
    // let milliDate = new Date(milli);
    // console.log(milli);

    // let d = milliDate.getDate();
    // let m = milliDate.getMonth();
    // let y = milliDate.getFullYear();

    // console.log(d);
    // console.log(m);
    // console.log(y);

    // 86 400 000 is milliseconds for exactly one day
    let isMagic = false;
    for (let ms = begin; ms <= end; ms+= 86400000) {
        let str = msToDateStr(ms);
        let dateWeight = calcDateWeight(str);

        if (dateWeight === weight) {
            console.log(msToDate(ms));
            isMagic = true;
        }
    }

    if (isMagic === false) {
        console.log("No");
    }

    function msToDate(ms) {
        let milliDate = new Date(ms);
        let d = milliDate.getDate();
        let m = milliDate.getMonth();
        let y = milliDate.getFullYear();
        let dayOfMonth = d + "";
        if (d < 10) {
            dayOfMonth = `0${d}`;
        }
        let month = m + 1;
        m++;
        if (m < 10) {
            month = `0${m}`;
        }
        let year = y;
        return `${dayOfMonth}-${month}-${year}`;
        }

    function calcDateWeight(str) {
        str = str + "";
        let weight = 0;

        for (let i = 0; i < str.length - 1; i++) {
            for (let j = i + 1; j < str.length; j++) {
                let num1 = parseInt(str[i]);
                let num2 = parseInt(str[j]);
                weight += num1 * num2;
            }
        }

        return weight;
    }

    function msToDateStr(ms) {
        
        let milliDate = new Date(ms);
        
        let d = milliDate.getDate();
        let m = milliDate.getMonth();
        let y = milliDate.getFullYear();
        
        let dayOfMonth = d + "";
        if (d < 10) {
            dayOfMonth = `0${d}`;
        }
        
        let month = m + 1;
        m++;
        if (m < 10) {
            month = `0${m}`;
        }
        
        let year = y;
        return `${dayOfMonth}${month}${year}`;
    }
}