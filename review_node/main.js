class Pessoa {
  #nome;
  #idade;

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }
  //static method
  static soma(x, y) {
    return console.log(x + y);
  }
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    return (this.#nome = nome);
  }

  get idade() {
    return this.#idade;
  }

  set idade(idade) {
    return (this.#idade = idade);
  }

  // class method
  dizerOla() {
    console.log(`oi o meu nome é ${this.nome}`);
  }
}

const marcos = new Pessoa("Marcos", "42");

//console.log(marcos.idade);
console.log(marcos.nome);
//console.log(marcos.idade);

marcos.dizerOla();
//marcos.soma(4, 4);

//Pessoa.soma(5, 5);
marcos.idade = 10;
console.log(marcos.idade);