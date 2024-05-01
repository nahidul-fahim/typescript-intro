"use strict";
{
    // nullable type
    function valueSearch(value) {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('nothing to search');
        }
    }
    valueSearch(null);
    /* ============================== */
    // unknown type  ----------- typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if (typeof value === 'string') {
            const [speed, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else {
            console.log('Wrong input');
        }
    };
    getSpeedInMeterPerSecond(`1000 km/h`);
}
