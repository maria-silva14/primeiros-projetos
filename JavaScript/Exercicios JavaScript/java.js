// 1) Faça um Programa que peça dois números e imprima o maior deles. 

let num1 = prompt ('Insira aqui um número:')
let num2 = prompt ('Insira aqui outro número diferente do anterior:')

num1 = parseInt (num1)
num2 = parseInt (num2)

if (num1 > num2) 

{alert('O número maior é: ' + num1);}
 
else (num2 > num1) 
{alert('O número maior é: ' + num2);}



// 2) Faça um Programa que peça um valor e mostre na tela se o valor e positivo ou negativo.

let valor = prompt ('Insira aqui um número:')
valor = parseInt (valor)

if (valor <= 0) 
{alert('Seu número é negativo.');} 

else (valor >= 0) 
{alert('Seu número é positivo.');}



// 3) Faça um programa que verifique se uma letra digitada é F ou M, Conforme a letra escrever F - Feminino, M Masculino, Sexo invalido.

let sexo = prompt('Insira aqui F para Feminino ou M para Masculino:')

if (sexo == 'F') 
{alert('Seu sexo é Feminino.');} 

else if (sexo == 'M') 
{alert('Seu sexo é Masculino.');}

else ( sexo !== 'F' || 'M') 
{alert('Resposta inválida, por favor insira F ou M.');}


// 4) Faça um programa para a leitura de duas notas parciais de um aluno. 
// O programa deve calcular a média alcançada por aluno e apresentara mensagem “Aprovado”, 
// se a media alcançada for maior ou igual a sete, a mensagem “Reprovado” se a média for menor 
// do que sete; a mensagem “Aprovado” com distinção, se a média for igual a dez


let nota1 = prompt('Insira aqui a primeira nota:')
let nota2 = prompt('Insira aqui a segunda nota:')

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)

if ((nota1 + nota2 / 2) >= 7) 
{alert('Aprovado.');}

else if ((nota1 + nota2 / 2) < 7) 
{alert('Reprovado.');}

else ((nota1 + nota2 / 2) == 10) 
{alert('Aprovado. Parabéns! Você tirou a nota máxima.');}



// 5) Faça um programa que leia três números e mostre o maior deles. 

let num1 = prompt('Insira aqui um número:')
let num2 = prompt('Insira aqui um segundo número:')
let num3 = prompt('Insira aqui um terceiro número:')

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if (num1 > num2 && num1 > num3) 
{alert('O número maior é: ' + num1);} 

else if (num2 > num1 && num2 > num3) 
{alert('O número maior é: ' + num2);}

else (num3 > num1 && num3 > num2) 
{alert('O número maior é: ' + num3);}



// 6) Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar,  sabendo que a decisão é sempre pelo preço mais barato.

let maçã = prompt ('Insira aqui o preço da maçã:')
let banana = prompt ('Insira aqui o preço da banana:')
let uva = prompt ('Insira aqui o preço da uva:')

maçã = parseInt(maçã)
banana = parseInt(banana)
uva = parseInt(uva)

if (maçã < banana && maçã < uva) 
{alert('Você deve comprar a maçã.');} 

else if (banana < maçã && banana < uva) 
{alert('Você deve comprar a banana.');}

else (uva < maçã && uva < banana) 
{alert('Você deve comprar a uva.');}

