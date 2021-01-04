let Numb1 = +prompt('Введите число')
Numb1 = !isNaN(Numb1) && Numb1 > 0 ? Numb1 : alert('Вы ввели 0 или не число, попробуйте еще раз и введите число больше 0')
let Numb2 = +prompt('Введите степень')
Numb2 = !isNaN(Numb2) && Numb2 > 0 ? Numb2 : alert('2')
 let answer = Numb1

for(  i=1; i<Numb2; i++    ){
   
 answer = answer * Numb1
}
console.info(answer)
alert(answer)



