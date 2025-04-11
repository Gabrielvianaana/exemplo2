// declaração e variaveis

var nome ="Fiap";
console.log(nome)

let idade =19;
console.log(idade)

const sobrenome ="fiapinho"
console.log(sobrenome)

//underined

let exemplo;
console.log(exemplo)

//nula
let ex1 = "fiap";
console.log(typeof ex1)

let ex2 = 25;
console.log(typeof ex2)

let ex3 = true;
console.log (typeof ex3)

let ex4 = {}
console.log (typeof ex4)

    let ex5 = []
    console.log(typeof ex5)


//conversões 

//float => string

let numfloat =123.456;
console.log(numfloat.toString())

//string => float
let numString ="12.956"
console.log(parseFloat(numString))

//int => string

let numint = 100;
console.log(numint.toString())

//string => int

let numString1 = "120";
console.log(parseInt(numString1))

//métodos 

//metodo leigth - verifica o tamanho da string

let frase ="O mundo da tecnologia";
console.log(frase.lemgth)

//metodo indeof -RETORNA UM TRCHO DO SEU CODIGO

let texto ="programacao sustentavel ão";
console.log(texto.lastIndexOf("ão"))

//metodo slice = retorna parte de um texto passsando o incicio e o final
let info ="programacao de ponta"
console.log(info.slice(2,6))

//operadores aritimeticos

const a=10;
const b=20;


//operadores logicos

const c=20;
const d=30;
//ou=||
console.log(c > d);
console.log(c < d && c < 20);
console.log(c > d || d > c);
console.log(c == d || d <= c)

//operadores de comparacao

let e="10";
let f="30";

console.log(e ==f);
console.log( e ===f);
console.log(e !=f);

CONDICIONAL

//if

if(true){
    console.log("é verdadeiro")
}

//switch case

let time ="corinthians";

switch(time){
    case "corinthians":
        console.log("melhor time")
        break;
    case "sao paulo":
        console.log(" é tao ruim que nao consehie em casa")
}