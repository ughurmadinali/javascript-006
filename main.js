1)
//превратите строку в строку в верхнем регистре 'abc' -> 'ABC'
let text1 = 'My name is Alexander';
"My name is Alexander".toUpperCase()

2)
//превратите строку в строку в нижнем регистре 'ABC' -> 'abc'
let text2 = 'MY NAME IS ALEXANDER';
"MY NAME IS ALEXANDER".toLowerCase()

3)
//обьедините две строки 
let a = 'Hello';
let b = ', my friend';
a.concat(b)

4)
//превратите строку в массив и сделайте так чтобы вся строка стала одним элементом внутри массива
let text4 = 'My name is Alexander';
let arr1 =text4.split('')

5)
//превратите строку в массив и сделайте так чтобы все буквы и знаки стали отдельными элементами внутри массива
let text5 = 'My name is Alexander';
let arr2 =text5.split('')

6)
//превратите строку в массив и сделайте так чтобы все слова отделенные пробелом стали отдельными элементами внутри массива
let text6 = 'My,name,is,Alexander';
let arr3 =text5.split(',')

7)
//превратите строку в массив и сделайте так чтобы в массив попало только первое слово 'My'
let text7 = 'My name is Alexander';
"My name is Alexander".split(" ",1)

8)
//сделайте так чтобы строка ниже выдала в консоли 'OreoOreoOreo'
let pancake = 'Oreo';
"Oreo".repeat(3)

9)
//выведите в консоли первую букву из строки
let text9 = 'My name is Alexander';
"My name is Alexander".charAt([0])

10)
//проверьте наxодится ли строка 'name' в строке ниже
let text10 = 'My name is Alexander';
"My name is Alexander".includes("name")

11)
//проверьте находится ли строка 'name' в строке после 10 индекса
let text11 = 'My name is Alexander';
text11.includes('name',10)

12)
//определите индекс первой буквы 'a' в строке
let text12 = 'My name is Alexander';
text12.indexOf('a')

13)
//определите индекс последней буквы 'a' в строке
let text13 = 'My name is Alexander';
text13.lastIndexOf('a')

14)
//определите заканчивается ли строка на 'der'
let text14 = 'My name is Alexander';
text14.endsWith('der')

15)
//определите начинается ли строка на 'na'
let text15 = 'My name is Alexander';
text15.startsWith('na')

16) 
//выведите в консоли 'is' из строки ниже с помощью slice()
let text16 = 'My name is Alexander';
text16.slice(0,18)

17)
//вырезать и вывести в консоли 'name is' из строки ниже
let text17 = 'My name is Alexander';
text17.slice(4,7)

18)
//вырезать и вывести в консоли 'name is' из строки ниже с помощью отрицательных индексов
let text18 = 'My name is Alexander';
text18.slice(-17,-12)

19)
//из строки ниже вырежте и выведите в консоли 'is' с помощью substring()
let text19 = 'My name is Alexander';
text19.substring(8,10)

20)
//вырежте и выведите в консоли 5 символов после первой буквы 'n' из строки ниже
let text20 = 'My name is Alexander';


21) 
//замените 'name' в строке на 'lastname'
let text21 = 'My name is Alexander';
if?(text21.includes('name')){
    text21.replace('name','lastname')
}

22)
//замените все буквы 'n' в строке на 'S'
let text22 = 'My name is Alexander';
"My name is Alexander".replaceAll("n","S")

23)
//используя padEnd() добавьте в конец строки str столько '*' чтобы количество символов в строке стало равно 10
let str1 = 'name';
"name".padEnd(10,"*")

24)
//используя padStart() добавьте в начало строки str столько '*' чтобы количество символов в строке стало равно 10
let str2 = 'name';
"name".padStart(10,"*")
25)
//удалите пробелы с начала у строки ниже
let str3 = '     name';
"     name".trimStart()

26)
//удалите пробелы с конца у строки ниже
let str4 = 'name     ';
"name     ".trimEnd()

27)
//удалите пробелы с начала и конца у строки ниже
let str5 = '     name     ';
"     name     ".trim()

28)
//выведите в консоли длину строки
let text28 = 'My name is Alexander';
console.log(length);

29) 
//выведите в консоли только целые числа из строки
let numStr1 = '23.5rem';
console.log(parsenInt(numStt));

30)
//выведите в консоли число с плавающей точкой (23.5) из строки
let numStr2 = '23.5rem';
console.log(parsenFloat(numStt));