
function setColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i<alist.length){
        alist[i].style.color = color;
        i=i+1;
    }
}

function setBodyColor(color){
    var target = document.querySelector('body');
    target.style.color=color;
}

function setBackgroundColor(color){
    var target = document.querySelector('body');
    target.style.backgroundColor=color;
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value==='Day'){ 
        setBackgroundColor('black')
        setBodyColor('white');
        self.value='Night';   
        setColor('powderblue');
    } else{
        setBackgroundColor('white')
        setBodyColor('black');
        self.value='Day';            
        setColor('blue');
    }
}
