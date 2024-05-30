class Mamal {
  constructor(animal) {
    this.animal = animal;
  }
}

class Pessoa extends Mamal {
  #nome;
  #idade;

  constructor(animal, nome, idade) {
    super(animal);
    this.#nome = nome;
    this.#idade = idade;
  }
  //static method
  static async soma(x, y) {
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

export default Pessoa;
