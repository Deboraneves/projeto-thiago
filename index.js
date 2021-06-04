var parar = 0;
while(parar == 0){

  console.log("Bem vindo a tecshop")
  console.log("")
console.log("Xiaomi")
console.log("")
console.log("Apple")
var frete = 100;
console.log("")
console.log("LG")
console.log("")
var expr = prompt("Escolha uma marca:")

if(expr == 'Xiaomi'){

console.log("Escolha um modelo")
console.log("")
console.log("Poco M3")
var pm = 850;
console.log("")
console.log("Poco X3")
var px = 980;
console.log("")

console.log("Mi 10")
var mi = 1000;
console.log("")
var expt = prompt("")

switch(expt){

case 'Poco M3' :
console.log("")
console.log("o valor é")
console.log("R$" + pm + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+pm) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

case 'Poco X3' :
console.log("")
console.log("o valor é")
console.log("R$" + px + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+px) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

case 'Mi 10' :
console.log("")
console.log("o valor é")
console.log("R$" + mi + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+mi) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break}

}

else if (expr == 'Apple'){
console.log("Escolha um modelo")
console.log("")
console.log("Iphone 8")
var pm = 850;
console.log("")
console.log("Iphone X")
var px = 980;
console.log("")
console.log("Iphone XS")
var mi = 1000;
  console.log("")
var expt = prompt(" ")
  switch(expt){

case 'Iphone 8' :

console.log("")
console.log("o valor é")
console.log("R$" + pm + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+pm) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

case 'Iphone X' :
console.log("")
console.log("o valor é")
console.log("R$" + px + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+px) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

case 'Iphone XS' :
console.log("")
console.log("o valor é")
console.log("R$" + mi + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+mi) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

}

break}


else if (expr == 'LG'){
  
console.log("Escolha um modelo")
console.log("")
console.log("K10")
var pm = 850;
console.log("")
console.log("K52")
var px = 980;
console.log("")
console.log("K72")
var mi = 1000;
var expt = prompt(" ")
switch(expt){

case 'K10' :
console.log("")
console.log("o valor é")
console.log("R$" + pm + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+pm) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

case 'K52' :
console.log("")
console.log("o valor é")
console.log("R$" + px + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+px) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

case 'K72' :
console.log("")
console.log("o valor é")
console.log("R$" + mi + ",00")
console.log("")

for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("com o valor do frete fica R$" + (frete+mi) + ",00")
console.log("")
console.log("codigo de confirmação: 549")
var expz = prompt("confirmação:")

     do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu aparelho esta a caminho")
} while(expz === 549)


break

}


  break}


else if (expr != 'Xiaomi' && expr != 'Apple' && expr != 'LG'){
console.log("")
console.log("tente outra vez!")
console.log("")}

}