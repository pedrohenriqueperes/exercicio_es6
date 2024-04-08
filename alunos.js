class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aluno1 = new Aluno('Ana', 4);
const aluno2 = new Aluno('João', 5);
const aluno3 = new Aluno('Maria', 9);
const aluno4 = new Aluno('Caroline', 10);


const alunos = [aluno1,aluno2,aluno3,aluno4];

const aprovados = alunosAprovados(alunos);

console.log(aprovados)