var def = "WELCOME TO CALCULATOR"
var t = "";
var c = false ;
var o = "";
var p = "";

function num(v){
    t = t+v ;
    document.getElementById('screen').innerHTML = t;
}

function opera(v){
    if(t == ""){
        if(v == "-"){
            t = t+v;
            document.getElementById('screen').innerHTML = t;
        }else{
            document.getElementById('screen').innerHTML = "Can't Select this operator at first ";
            setTimeout(function(){document.getElementById('screen').innerHTML = t;} , 2000)
        }
    }else if( c == true){
        document.getElementById('screen').innerHTML = "You've selected your operator!";
        setTimeout(function(){document.getElementById('screen').innerHTML = t;} , 2000)
    }else{
        if( t == '-'){
            document.getElementById('screen').innerHTML = "Can't select 2 operator next to eachother";
            setTimeout(function(){document.getElementById('screen').innerHTML = t;} , 2000)
        }else{
            c = true ;
            t = t + v ;
            o = v;
            document.getElementById('screen').innerHTML = t;
        }
    }
}

function equal(v){
    if ( c !== true || t == ""){
        document.getElementById('screen').innerHTML = "Please select your operator and operands";
        setTimeout(function(){document.getElementById('screen').innerHTML = t;} , 2000)
    }else{
        p  = t.indexOf(o);
        var left = parseFloat(t.slice(0));
        var right = parseFloat(t.slice(p+1));
        var a = parseFloat(t.slice(0)).toString();
        if(a.startsWith('-')){
            var rep = t.replace ('-' , 'x')
            p = rep.indexOf(o);
            right = parseFloat(rep.slice(p+1));
            if( o == '+'){t = left + right}
            else if( o == '-'){t = left - right}
            else if( o == '*'){t = left * right}
            else if( o == '/'){t = left / right}
        }else{
            if( o == '+'){t = left + right}
            else if( o == '-'){t = left - right}
            else if( o == '*'){t = left * right}
            else if( o == '/'){t = left / right}
        }
        document.getElementById('screen').innerHTML = t;
        c = false;
    }
}

function cleared(v){
    t = "";
    c = false;
    document.getElementById('screen').innerHTML = "Cleared!";
    setTimeout(function(){document.getElementById('screen').innerHTML = t;} , 2000)
}