
//Chain
function breakChain () {
    let chain = document.getElementById('chain');
    //use &#x then use the icons unicode
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function(){
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

breakChain();

setInterval(breakChain, 2000);

//Battery
function chargeBattery () {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";
    setTimeout(function(){
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function(){
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function(){
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function(){
        battery.innerHTML = "&#xf240;";
    }, 4000);
};

chargeBattery();

setInterval(chargeBattery, 5000);

//hourglass
function hourglassTip () {
    let hourglass = document.getElementById('hourglass');
    //use &#x then use the icons unicode
    hourglass.innerHTML = "&#xf251;";

    setTimeout(function(){
        hourglass.innerHTML = "&#xf252;";
    }, 1000);

    setTimeout(function(){
        hourglass.innerHTML = "&#xf253;";
    }, 2000);
}

hourglassTip();

setInterval(hourglassTip, 3000);
