// O valor "0" é para resposta "NÃO" e 1 para "SIM"
let characters = [
    {id: 1, nome: "Mônica", chapeu: 0, pelucia: 1, imagem: "imagens/monica.jpg", SeHomemMulherOuAnimal_mulher: 0, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_vermelho: 1, corDaPeleOuPelo_branca: 1},
    {id: 2, nome: "Cebolinha", chapeu: 0, pelucia: 0, imagem: "imagens/cebolinha.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 0, corDaBlusaOuVestido_verde: 1, corDaPeleOuPelo_branca: 1},
    {id: 3, nome: "Cascão", chapeu: 0, pelucia: 0, imagem: "imagens/cascao.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 0, banho: 1, boaDiccao: 1, corDaBlusaOuVestido_amarelo: 1, corDaPeleOuPelo_branca: 1},
    {id: 4, nome: "Anjinho", chapeu: 0, pelucia: 0, imagem: "imagens/anjinho.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_azul: 1, corDaPeleOuPelo_branca: 1},
    {id: 5, nome: "Chico Bento", chapeu: 1, pelucia: 0, imagem: "imagens/chico_bento.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_amarelo: 1, corDaPeleOuPelo_branca: 1},
    {id: 6, nome: "Floquinho", chapeu: 0, pelucia: 0, imagem: "imagens/floquinho.jpg", SeHomemMulherOuAnimal_animal: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaPeleOuPelo_verde: 1},
    {id: 7, nome: "Bidu", chapeu: 0, pelucia: 0, imagem: "imagens/bidu.jpg", SeHomemMulherOuAnimal_animal: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaPeleOuPelo_azul: 1},
    {id: 8, nome: "Rosinha", chapeu: 1, pelucia: 0, imagem: "imagens/rosinha.jpg", SeHomemMulherOuAnimal_mulher: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_vermelho: 1, corDaPeleOuPelo_branca: 1},
    {id: 9, nome: "Louco", chapeu: 0, pelucia: 0, imagem: "imagens/louco.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 1, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_vermelho: 1, corDaPeleOuPelo_branca: 1},
    {id: 10, nome: "Zé Lelé", chapeu: 1, pelucia: 0, imagem: "imagens/ze_lele.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 1, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_rosa: 1, corDaPeleOuPelo_branca: 1},
    {id: 11, nome: "Magali", chapeu: 0, pelucia: 0, imagem: "imagens/magali.jpg", SeHomemMulherOuAnimal_mulher: 1, comer: 1, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_amarelo: 1, corDaPeleOuPelo_branca: 1},
    {id: 12, nome: "Franjinha", chapeu: 0, pelucia: 0, imagem: "imagens/franjinha.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_vermelho: 1, corDaPeleOuPelo_branca: 1},
    {id: 13, nome: "Jeremias", chapeu: 1, pelucia: 0, imagem: "imagens/jeremias.jpg", SeHomemMulherOuAnimal_homem: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_cinza: 1, corDaBlusaOuVestido_cinza: 1, corDaPeleOuPelo_preta: 1},
    {id: 14, nome: "Carminha Frufru ", chapeu: 0, pelucia: 0, imagem: "imagens/carminha_frufru.jpg", SeHomemMulherOuAnimal_mulher: 1, comer: 0, loucura: 0, banho: 0, boaDiccao: 1, corDaBlusaOuVestido_azul: 1, corDaPeleOuPelo_branca: 1},
]

let perguntasEAtributos = [
    {pergunta: "O personagem representa um ser humano do sexo masculino?", atributo: "SeHomemMulherOuAnimal_homem"},
    {pergunta: "O personagem representa um ser humano do sexo feminino?", atributo: "SeHomemMulherOuAnimal_mulher"},
    {pergunta: "O personagem representa um animal?", atributo: "SeHomemMulherOuAnimal_animal"},
    {pergunta: "O personagem come compulsivamente?", atributo: "comer"},
    {pergunta: "O personagem, pelo nome, aparenta ter insanidade mental?", atributo: "loucura"},
    {pergunta: "Odeia tomar banho?", atributo: "banho"},
    {pergunta: "É um ser humano de boa dicção?", atributo: "boaDiccao"},
    {pergunta: "Possui um boneco de pelúcia?", atributo: "pelucia"},
    {pergunta: "Usa chapéu?", atributo: "chapeu"},
    {pergunta: "A cor do pelo é verde?", atributo: "corDaPeleOuPelo_verde"},
    {pergunta: "A cor do pelo é azul?", atributo: "corDaPeleOuPelo_azul"},
    {pergunta: "A cor da pele é branca?", atributo: "corDaPeleOuPelo_branca"},
    {pergunta: "A cor da pele é preta?", atributo: "corDaPeleOuPelo_preta"},
    {pergunta: "Usa blusa ou vestido vermelho?", atributo: "corDaBlusaOuVestido_vermelho"},
    {pergunta: "Usa blusa ou vestido azul?", atributo: "corDaBlusaOuVestido_azul"},
    {pergunta: "Usa blusa ou vestido amarelo?", atributo: "corDaBlusaOuVestido_amarelo"},
    {pergunta: "Usa blusa ou vestido rosa?", atributo: "corDaBlusaOuVestido_rosa"},
    {pergunta: "Usa blusa ou vestido cinza?", atributo: "corDaBlusaOuVestido_cinza"},




]
