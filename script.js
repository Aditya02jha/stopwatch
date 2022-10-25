let hr = 0
let min =0
let sec =0
let count = 0

var timer = false;

function start(){
    timer = true;
    stopwatch();
    document.querySelector('.btn').addEventListener('click', ()=> {
        document.querySelector()
    })
}

function Stop(){
    timer = false;
    stopwatch();
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("per-sec").innerHTML = "00";
}

function stopwatch(){

    if(timer == true)
    {
        count++;

        if(count == 100){
            count = 0;
            sec = sec+1;
            
        }

        if(sec == 60){
            count = 0;
            sec = 0;
            min++;
        }

        if( min == 60){
            count = 0;
            sec = 0;
            min = 0;
            hr ++;
            
        }

        let strcount = count;
        let strhr = hr;
        let strmin = min;
        let strsec = sec;

        if(count < 10){
            strcount = "0"+strcount;
        }
        if(sec < 10){
            strsec = "0"+strsec;
        }
    
        if(min < 10){
            strmin = "0"+strmin;
        }
    
        if(hr < 10){
            strhr = "0"+ strhr;
        }


        document.getElementById("hour").innerHTML = strhr;
        document.getElementById("min").innerHTML = strmin;
        document.getElementById("sec").innerHTML = strsec;
        document.getElementById("per-sec").innerHTML = strcount;

        setTimeout("stopwatch()", 10);
    }
}


