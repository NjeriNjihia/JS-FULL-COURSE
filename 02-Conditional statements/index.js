//if
let a = 11;
if(a % 2  === 0){
    console.log("even")
}else{
    console.log("odd")
}

let marks = 70;
if(marks > 0 && marks < 50){
    console.log("Fail")
}else if(marks >= 50 && marks < 60){
    console.log("Pass")
} else if(marks >= 60 && marks < 70){
    console.log("second class")
}else{
    console.log("First class")
}

let color = "pink";
if(color === "black" || color === "red"){
    console.log("favourite color")
}else if(color === "pink" || color === "purple"){
    console.log("semi favourite color")
}else{
    console.log("Not favourite")
}

//switch
let day = 10;

switch(day){
    case 1:{
        console.log("Monday");
        break;
    }
    case 2:{
        console.log("Tuesday");
        break;
    }
    case 3:{
        console.log("wednesday")
        break;
    }
    default:{
        console.log("Weekend")
    }

}