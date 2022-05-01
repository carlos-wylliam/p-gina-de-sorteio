// 1º forma de fazer um "sistema" de sorteio por números
// function sortear(){
//     // Váriavel que vai haver o numero de pessoas que será sorteada
//     let numero_de_pessoas = 100;

//     // Váriavel responsavel por gerar um número aleatorio para o sorteio
//     // O Math.round serve pra arredondar o número aleatorio que vai ser gerado atraves do Math.random que
//     // vai ser multiplicado pelo o número de pessoas que irão ser sorteadas.
//     let numero_sorteado = Math.round(Math.random() * numero_de_pessoas);

//     // O document.getElementById() serve pra "pescar" alguma coisa "identado" no html
//     // O innerHTML serve pra alterar alguma coisa no html atraves do javascript
//     document.getElementById("winner").innerHTML= numero_sorteado;
// }

function clearStorage() {
    console.log('carregou');
    localStorage.removeItem('pessoas');
}

var pessoas = new Array()

function add_name() {
    let input = document.getElementById("inputName");
    let nome = input.value
    addPessoas(nome);
    function addPessoas(i) {
        pessoas.push({ nome: i });
    }
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    input.value = ""
}

// 2º forma de fazer um "sistema" de sorteio só que dessa vez com nomes de Pessoas.
function sortear() {
    let nomes = JSON.parse(localStorage.getItem("pessoas"));
    // Primeiro foi criado uma variavel que vai haver nela um array com os nomes das pessoas que irão
    // participar do sorteio
    // let pessoas = ["Ecio", "Carlos", "Gabriel", "Ismael", "Helder", "Iruam", "Ruan", "Antonio"];

    // Já que foi criado a let pessoas então eu posso substituir o número de pessoas por pessoas.lenght
    // porque não é mais o número de pessoas (100) e sim nomes de pessoas que tá dentro da array e na variavel
    // pessoas.
    let numero_de_pessoas = nomes.length;

    // Aqui continua a mesma coisa uma let responsavel por gerar aleatoriamente um dos nomes arquivados no array antes era gerar um número
    // aleatorio agora é o nome das pessoas, porém foi alterado o Math.round que era responsavel por arredondar o número para o Math.floor
    // que agora é responsavel por retornar o menor número inteiro dentre o número X
    let pessoas_sorteada = Math.floor(Math.random() * numero_de_pessoas);

    // Aqui mudou pouca coisa também, mudou que no final eu adiciono pessoas que é a let com o array e abro conchetes com a outra let que é
    // a que está gerando os nomes aleatoriamente.    
    document.getElementById("winner").innerHTML = nomes[pessoas_sorteada].nome;
    setTimeout(() => {



        // fiz esse setTimeout para ser executado um alert em 500ms, 0.5 segundos
        alert(`Parabéns ${nomes[pessoas_sorteada].nome}`)
    }, 500)
}

