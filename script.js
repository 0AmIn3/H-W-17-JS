let age = +prompt("Сколько вам лет?")


function CheckAge(age) {
    if (age >= 18) {
        alert(`Добро пожаловать`)
    } else if (age > 0 && age <= 18) {
        alert("Подрости")
    } else if (age <= 0) {
        alert("Дэбил")
    }
}

CheckAge(age)



//////////////////////////////////////////////////////////////////////////////////



let a = prompt('Число 1')
let b = prompt('Число 2')

function Cankulyator(num_1, num_2) {

    let plus = Number(num_1) + Number(num_2)
    let minus = num_1 - num_2
    let dilenie = num_1 / num_2
    let umnijenie = num_1 * num_2
    let stepen = num_1 ** num_2
    let ostatok = num_1 % num_2


    alert(`
        Плюс - ${plus}
        Минус - ${minus}
        Деление - ${dilenie}
        Умножение - ${umnijenie}
        Степень - ${stepen}
        Остаток - ${ostatok}
        `);
}


Cankulyator(a , b)



//////////////////////////////////////////////////////////////////////////////////



function MaxName(name_1, name_2, name_3) {
    let names = [name_1, name_2, name_3]
    names.sort((a, b) => a.length - b.length)
    console.log(names[names.length - 1]);
}
MaxName('Alex', 'Michael', 'George')



//////////////////////////////////////////////////////////////////////////////////



function Min(a, ...b) {
    if (typeof (a) === 'number') {
        console.log(Math.min(a, ...b));
    } else if (typeof (a) === 'object') {
        let val = Object.values(a)
        if (b.length > 0) {
            for (let i = 0; i < b.length; i++) {
                val = val.concat(Object.values(b[i]))
            }
        }
        console.log(Math.min(...val));
    }
}

Min(1, -2)
Min([1, -2])
Min({ a: 1, b: -2 })
Min({ a: 111, b: 112 }, { a: 11, b: -12 })



//////////////////////////////////////////////////////////////////////////////////



let otpravili = +prompt('Отправили')
let bracovanie = +prompt('Бракованных')

function prosent(num_1, num_2) {
    otv = num_2 / num_1 * 100
    alert(`
        Отправили:${num_1}
        Бракованных:${num_2}
        Процент от бракованных:${Math.round(otv)}%    
    `)
}

prosent(otpravili , bracovanie)



//////////////////////////////////////////////////////////////////////////////////



let arr1 = [1,2323,2,54,5,4,12,4,-3 , 55,7,74,55,43,7,90,8,354,3223,9 ,1000,898,5657,10]


function bubbleSort(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI;( i++)) {
        for (let k = 0, endJ = endI - i; k < endJ; k++) {
            if (arr[k] > arr[k + 1]) {
                let bubbl = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = bubbl;
            }
        }
    }
}
bubbleSort(arr1)
console.log(arr1);
