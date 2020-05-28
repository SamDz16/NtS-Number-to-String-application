var numbers_unitees = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
var numbers_10 = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
var numbers_dizaines = ['', 'dix', 'vingt', 'trante', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vignt', 'quatre-vingt-dix'];
var numbers_centaines = ['', 'cent', 'deux-cent', 'troix-cent', 'quatre-cent', 'cinq-cent', 'six-cent', 'sept-cent', 'huit-cent', 'neuf-cent'];

var number_to_string = function(num){
    if(num >= 0 && num <= 999){

        var num_array = num.toString().split("");
        var number_string;
    
        if(num_array.length == 1){
            number_string = numbers_unitees[parseInt(num_array[0])];
        }else if(num_array.length == 2 && num >= 10 && num < 20){
            number_string = numbers_10[parseInt(num_array[1])];
        }else if (num_array.length == 2 && num >= 20 && num_array[1] != '0'){
            number_string = numbers_dizaines[parseInt(num_array[0])] + '-' + numbers_unitees[parseInt(num_array[1])];
        }else if (num_array.length == 2 && num >= 20 && num_array[1] == '0'){
            number_string = numbers_dizaines[parseInt(num_array[0])];
        }else{
            // Sur trois positions
            if (num_array[1] == '0' && num_array[2] == '0'){
                number_string = numbers_centaines[parseInt(num_array[0])];
            }else if(num_array[1] == '0' && num_array[2] != '0'){
                number_string = numbers_centaines[parseInt(num_array[0])] + '-' + numbers_unitees[parseInt(num_array[2])];
            }else if(num_array[1] == '1'){
                number_string = numbers_centaines[parseInt(num_array[0])] + '-' + numbers_10[parseInt(num_array[2])];
            }else if(num_array[1] != '0' && num_array[2] == '0'){
                number_string = numbers_centaines[parseInt(num_array[0])] + '-' + numbers_dizaines[parseInt(num_array[1])];
            }else{ // Cas general (xyz tq : y != 0 et 1, et z != 0)
                number_string = numbers_centaines[parseInt(num_array[0])] + '-' + numbers_dizaines[parseInt(num_array[1])] + '-' + numbers_unitees[parseInt(num_array[2])];
            }
        }

        return number_string;

    }else if (isNaN(num)){
        return -1;

    }else return "n'est pas compris entre 0 et 999";
};



var input = document.querySelector('#input .input-text');
var btn = document.querySelector('#input .btn');
var output = document.querySelector('#output .input-text');

// input.addEventListener('click', function(){
//     var result = number_to_string(parseInt(input.value, 10));
//     if ( result == -1){
//         output.value = input.value + " is Nan - Not a Number";
//     }else{
//         output.value = input.value + ' => ' + result;
//     }

//     document.querySelector('#input .input-text').value = "";
// })

btn.addEventListener('click', function(){

    var result = number_to_string(parseInt(input.value, 10));
    if ( result == -1){
        output.value = input.value + " : n'est pas un nombre";
    }else{
        output.value = input.value + ' : ' + result;
    }

    // document.querySelector('#input .input-text').value = "";
});