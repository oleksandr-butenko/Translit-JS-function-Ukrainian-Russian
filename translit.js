
// https://github.com/olaksandr/Translit-JS-function-Ukrainian-Russian

function makeTranslit(str){
    var arr = new Array();
    arr[0] = ['а', 'a'];
    arr[1] = ['б', 'b'];
    arr[2] = ['в', 'v'];
    arr[3] = ['г', 'h'];
    arr[4] = ['ґ', 'g'];
    arr[5] = ['д', 'd'];
    arr[6] = ['е', 'e'];
    arr[7] = ['є', 'ye'];
    arr[8] = ['ж', 'zh'];
    arr[9] = ['з', 'z'];
    arr[10] = ['и', 'y'];
    arr[11] = ['і', 'i'];
    arr[12] = ['ї', 'yi'];
    arr[13] = ['й', 'y'];
    arr[14] = ['к', 'k'];
    arr[15] = ['л', 'l'];
    arr[16] = ['м', 'm'];
    arr[17] = ['н', 'n'];
    arr[18] = ['о', 'o'];
    arr[19] = ['п', 'p'];
    arr[20] = ['р', 'r'];
    arr[21] = ['с', 's'];
    arr[22] = ['т', 't'];
    arr[23] = ['у', 'u'];
    arr[24] = ['ф', 'f'];
    arr[25] = ['х', 'kh'];
    arr[26] = ['ц', 'ts'];
    arr[27] = ['ч', 'ch'];
    arr[28] = ['ш', 'sh'];
    arr[29] = ['щ', 'shch'];
    arr[30] = ['ь', ''];
    arr[31] = ['ю', 'yu'];
    arr[32] = ['я', 'ya'];
    arr[33] = ['ы', 'y'];
    arr[34] = ['ё', 'yo'];
    arr[35] = ['э', 'е'];
    arr[36] = ['ъ', ''];

    // lower letter
    for(i = 0; i < arr.length; i++){
        str = str.replace( new RegExp(arr[i][0], 'g') ,arr[i][1]);
    }

    // capital letter
    for(i = 0; i < arr.length; i++){
        str = str.replace( new RegExp(arr[i][0].toUpperCase(), 'g'), arr[i][1].charAt(0).toUpperCase() + arr[i][1].substring(1));
    }
    return str;

}

function translitDiv(id){
    str = document.getElementById(id).innerText;
    document.getElementById(id).innerText = makeTranslit(str);
}
function translitInput(id){
    str = document.getElementById(id).value;
    document.getElementById(id).value = makeTranslit(str);
}

