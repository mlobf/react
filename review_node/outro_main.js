class Pessoa {
  #nome; // Variável privada
  #idade; // Variável privada

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  // Getter para a propriedade 'nome'
  get nome() {
    return this.#nome;
  }

  // Setter para a propriedade 'nome'
  set nome(novoNome) {
    if (typeof novoNome === "string" && novoNome.length > 0) {
      this.#nome = novoNome;
    } else {
      console.log("Nome inválido");
    }
  }

  // Getter para a propriedade 'idade'
  get idade() {
    return this.#idade;
  }

  // Setter para a propriedade 'idade'
  set idade(novaIdade) {
    if (typeof novaIdade === "number" && novaIdade > 0) {
      this.#idade = novaIdade;
    } else {
      console.log("Idade inválida");
    }
  }

  dizerOla() {
    console.log(
      `Olá, meu nome é ${this.#nome} e eu tenho ${this.#idade} anos.`
    );
  }
}
/*
const pessoa1 = new Pessoa("João", 30);

// Usando o getter
console.log(pessoa1.nome); // Saída: João

// Usando o setter
pessoa1.nome = "Maria";
console.log(pessoa1.nome); // Saída: Maria

// Tentando definir um nome inválido
pessoa1.nome = ""; // Saída: Nome inválido

// Usando o getter para idade
console.log(pessoa1.idade); // Saída: 30

// Usando o setter para idade
pessoa1.idade = 35;
console.log(pessoa1.idade); // Saída: 35

// Tentando definir uma idade inválida
pessoa1.idade = -5; // Saída: Idade inválida
export { Pessoa };
*/
module.exports = Pessoa;
