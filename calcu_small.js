function calculator (value1,value2,sign)
{
    if (sign == "+"){
        console.log('result of + =' + (value1 + value2));
    } else if (sign == '-'){
        console.log('result of - =' + (value1 - value2));
    } else if (sign == '*'){
        console.log('result of * =' + (value1 * value2));
    } else if (sign == '/'){
        console.log('result of / =' + (value1 / value2));
    } else if (sign == '**'){
        console.log('resylt of ** =' + (Math. pow(value1, value2)));
    } else if (sign == '%'){
        console.log('result of % =' + (value1 % value2));
    } else{
        console.log('wrong sign');
    }
}
calculator(2,3,'+');
calculator(7,2,'-');
calculator(2,2,'*');
calculator(16,4,'/');
calculator(2,2,'**');
calculator(4,2,'%');