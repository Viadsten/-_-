
let input = document.querySelector('.input');
let button = document.querySelector('.button');
let result = document.querySelector('.result-check');
let ValidVariable = [];
let bracketCounter = 0;
let open = ['{', '(', '['];
let close = ['}', ')', ']'];

button.onclick = function(){
    ValidVariable = [];

    if (input.value == ''){
        result.innerHTML = 'Введите строку'
    }
    else{
        if(bracketValidate() == false){
            result.innerHTML = 'False';
        }
        else if(bracketCounter == 0)
        {
            result.innerHTML = 'Строка не содержит скобок';
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
                bracketCounter++;
                break;
            }
        }

        for (let j = 0; j < close.length; j++){
            if (string[i].indexOf(close[j]) !== -1){
                let openBracket = ValidVariable[ValidVariable.length - 1];
                let closeBracket = string[i];
                bracketCounter++;
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