
var body = {
    setColor:function(color){
        // var target = document.querySelector('body');
        // target.style.color=color;
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
        // var target = document.querySelector('body');
        // target.style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    }   
}


var links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i<alist.length){
        //     alist[i].style.color = color;
        //     i=i+1; 
        // }
        $('a').css('color', color);
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value==='Day'){ 
        body.setBackgroundColor('black')
        body.setColor('white');
        self.value='Night';   
        links.setColor('powderblue');
    } else{
        body.setBackgroundColor('white')
        body.setColor('black');
        self.value='Day';            
        links.setColor('blue');
    }
}
