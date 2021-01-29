
let input = document.querySelector('.input');
let button = document.querySelector('.button');
let result = document.querySelector('.result-check');
let ValidVariable = [];
let open = ['{', '(', '['];
let close = ['}', ')', ']'];

button.onclick = function(){
    ValidVariable = [];
    if (input.value == ''){
        result.innerHTML = 'Введите строку'
    }else{
        if(bracketValidate() == false){
            result.innerHTML = 'False';
        }else{
            result.innerHTML = 'True';
        }
    }
}

function bracketValidate(){
    let string = input.value;

    for (let i = 0; i < string.length; i++){
        for (let j = 0; j < open.length; j++){
            if (string[i].indexOf(open[j]) !== -1){
                ValidVariable.push(string[i]);
                break;
            }
        }

        for (let j = 0; j < close.length; j++){
            if (string[i].indexOf(close[j]) !== -1){
                let openBracket = ValidVariable[ValidVariable.length - 1];
                let closeBracket = string[i];
                if(close.indexOf(closeBracket) !== open.indexOf(openBracket)){
                    return(false)
                }else{
                    ValidVariable.pop();
                }       
            }
        }        
    }

    if(ValidVariable.length !== 0){
        return (false);
    }
    return (true);
}