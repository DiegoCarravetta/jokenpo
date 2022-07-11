console.clear();
const prompt = require('prompt-sync')();

console.log("JO-KEN-PÔ!");
console.log();

let jogar1 = 0

while (jogar1 != 2) {

  // 1) Permitir que eu decida quantas rodadas iremos fazer;
  console.log("Prepare-se, você está preste a me enfrentar no famoso jogo japonês JO-KEN-PÔ?");
  let rodadas1 = prompt("Me diga humano, quantas vezes iremos duelar? ");
  console.log();

  let opcoes1 = ["Pedra", "Papel", "Tesoura"];

  let contador1 = 0;

  let vitoria1 = 0, vitoria2 = 0, derrota1 = 0, derrota2 = 0;

  while (contador1 < rodadas1) {
  
    // 2) Ler a minha escolha (pedra, papel ou tesoura);
    console.log("[1] Pedra");
    console.log("[2] Papel");
    console.log("[3] Tesoura");
    console.log();
    let escolha1 = prompt ("Das opções acima (1, 2 ou 3), escolha sua opção e me enfrente: ");
    escolha1 = escolha1 - 1;
    console.log();

    // 3) Decidir de forma aleatória a decisão do computador;
    let computador1 = Math.floor (Math.random () * 3);
    
    console.log (`Humano, você escolheu ${opcoes1 [escolha1]} e eu escolhi ${opcoes1 [computador1]}`);
    console.log();

    let resultado1 = escolha1 - computador1;

    if (resultado1 == -1 || resultado1 == 2) {
      console.log ("Humano, você perdeu");
      console.log();
      derrota1 = derrota1 + 1;
      vitoria2 = vitoria2 + 1;
      
      // 4) Mostrar quantas rodadas cada jogador ganhou;
      console.log (`Até o momento você perdeu ${derrota1} vez(es) e eu ganhei ${vitoria2} vez(es)`);
      console.log();
    }
  
    else if (resultado1 == -2 || resultado1 == 1) {
      console.log ("Humano, você venceu");
      vitoria1 = vitoria1 + 1;
      derrota2 = derrota2 + 1;
      console.log();
      
      // 4) Mostrar quantas rodadas cada jogador ganhou;
      console.log (`Até o momento você venceu ${vitoria1} vez(es) e eu perdi ${derrota2} vez(es)`);
      console.log();
    }

    else {
      console.log ("Empatamos!");
      console.log();
    }  
  
    contador1 = contador1 + 1;
  }

  // 5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  if (vitoria1 > vitoria2) {
    console.log ("Humano, você foi o grande vencedor");
    console.log();
  }

  // 5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  else if (vitoria1 < vitoria2) {
    console.log ("Eu fui o grande vencedor");
    console.log();
  }

  // 5) Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  else {
    console.log ("Não houveram vencedores");
    console.log();
  }

  // 6) Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa;
  console.log("[1] Jogar novamente");
  console.log("[2] Não quero mais jogar");
  console.log();
  jogar1 = prompt ("Das opções acima (1 ou 2) escolha sua opção e me enfrente: ");
  console.log();
}
 console.log ("Até a próxima!")