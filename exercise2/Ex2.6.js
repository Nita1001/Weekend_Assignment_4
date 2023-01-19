// Ex2.6 - Years and Centuries

// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)
const centuryCheck = (year) => {
    let digit = year / 1000;
    let key = 0;

    if(digit >= 0 && digit < 1){
        //centuries range (1 - 10)
        console.log('centuries range (1 - 10)');

    } else {
        //centuries range (11 - 20)
        //centuries range (21 - 30)
            console.log('centuries range (11 - 20)');
            let dig = year / 10;
            //(year % 10 >= 1 || year % 10 <=9 ) ?   
       
    }
    console.log(key);
}
centuryCheck(1001);