
/*
Instruções

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em
seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo
de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as
suas características e ações.
Realize essa atividade no WORD ou no Bloco de Notas, suba esse arquivo para
algum repositório e compartilhe o link no campo ao lado para que outros
desenvolvedores possam analisá-lo

*/
/*
Instruções
Usando a linguagem Javascript, crie uma classe e insira, no mínimo, dois atributos
nela. No código, utilize o método acessor .get() e o método modificador .set().
Trabalhe esse código em seu IDE ou no Bloco de Notas, e compartilhe o link no
campo ao lado para que outros desenvolvedores possam analisá-lo.

*/

class Carro{
  constructor(marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
    
  }saudacao() {
    console.log('ola ',this.dono);
} marcaCarro() {
  console.log('ola sua marca ',this.marca);
} modeloCarro() {
  console.log('ola modelo do carro ',this.modelo);
} anoCarro() {
  console.log('ola ano do carro ',this.ano);
}
}

const carro1 = new Carro("Eagle", "Talon TSi", 1993, 'jose');
const carro2 = new Carro("Nissan", "300ZX", 1992, 'paulo');
const carro3 = new Carro("chevett", "chevett", 1983, 'ana');
const carro4 = new Carro("Nissan", "opala", 1972, 'maria');


console.log(carro1);
carro1.saudacao();
carro1.marcaCarro();
carro1.modeloCarro();
carro1.anoCarro();

console.log(carro2);
carro2.saudacao();
carro2.marcaCarro();
carro2.modeloCarro();
carro2.anoCarro();

console.log(carro3);
carro3.saudacao();
carro3.marcaCarro();
carro3.modeloCarro();
carro3.anoCarro();

console.log(carro4);
carro4.saudacao();
carro4.marcaCarro();
carro4.modeloCarro();
carro4.anoCarro();

class Pessoa{
  constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
      this.ocupacao = 'desempregado';
  }
  saudacao() {
      console.log('ola ',this.nome);
} saudacaoIdade() {
  console.log('ola sua idade',this.idade);
} saudacaoOcupacao() {
  console.log('ola sua ocupacao ',this.ocupacao);
}
get nomePessoa(){
  return this.nome;
}
set nomePessoa(x){
  this.nome = x;
}
}
let pessoa1 = new Pessoa("José",39);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.ocupacao);
pessoa1.saudacao();
pessoa1.saudacaoIdade();
pessoa1.saudacaoOcupacao();
