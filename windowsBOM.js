function myWindowMethod(){
window.alert("Hello");
var myWin = window.open("http://www.google.com", 'newWindow', "heigh=300, windth=300");
myWin.moveTo(150, 200);
myWin.innerHeight = 200;
myWin.innerWidth = 300;
myWin.outerHeight = 250;
myWin.outerWidth = 350; 

myWin.screen.height = 300;
myWin.screen.width = 350;
}

////myWindowMethod();
function myNavigatorProp(){
    document.write("<br> appCodeName : " +navigator.appCodeName );
    document.write("<br> appName : " +navigator.appName);
    document.write("<br> platform : " +navigator.platform);
    document.write("<br> Cookie is enabled: " +navigator.cookieEnabled);
    document.write("<br> product : " +navigator.product);
}

function locationProp()
{
    console.log("href is : " + location.href);
}

locationProp();

myNavigatorProp();