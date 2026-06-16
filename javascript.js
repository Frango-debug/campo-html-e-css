const minefield = document.getElementById('minefield');

// Lista expandida para 100 itens, apenas com html
const items = [
    { type: 'css', name: 'display', answer: 'Define o comportamento do elemento (block, inline, flex, grid, none).' },
    { type: 'css', name: 'width/height', answer: 'Define a largura e altura.' },
    { type: 'css', name: 'max-width/max-height', answer: 'Define largura/altura máxima (essencial para responsividade).' },
    { type: 'css', name: 'padding', answer: 'e subtipos -top, -left, etc.): Espaçamento interno.' },
    { type: 'css', name: 'margin', answer: '(e subtipos -top, -left, etc.): Espaçamento externo.' },
    { type: 'css', name: 'box-sizing', answer: 'Controla como largura/altura são calculadas (border-box é o recomendado).' },
    { type: 'css', name: 'overflow', answer: ' (e -x, -y): Define o que acontece com conteúdo que transborda (auto, hidden, scroll).' },
    { type: 'css', name: 'color', answer: 'Cor do texto.' },
    { type: 'css', name: 'font-family', answer: 'Define a fonte (fonte principal).' },
    { type: 'css', name: 'font-size', answer: 'Tamanho da fonte.' },
    { type: 'css', name: 'font-weight', answer: 'Espessura da fonte (bold, normal, 400, 700).' },
    { type: 'css', name: 'text-align', answer: ' Alinhamento horizontal (center, left, right, justify).' },
    { type: 'css', name: 'line-height', answer: ' Espaçamento entre linhas (altura da linha).' },
    { type: 'css', name: 'text-decoration', answer: 'Decoração do texto (underline, none).' },
    { type: 'css', name: 'text-transform', answer: 'Capitalização (uppercase, lowercase, capitalize).' },
    { type: 'css', name: 'letter-spacing', answer: 'Espaçamento entre letras.' },
    { type: 'css', name: 'font-style', answer: 'Estilo (italic, normal).' },
    { type: 'css', name: 'white-space', answer: 'Controla quebras de linha e espaços.' },
    { type: 'css', name: 'background-color', answer: 'Cor de fundo.' },
    { type: 'css', name: 'background-image', answer: 'Imagem de fundo.' },
    { type: 'css', name: 'background-size', answer: 'Ajusta o tamanho da imagem de fundo (cover, contain).' },
    { type: 'css', name: 'background-position', answer: 'Posição da imagem de fundo.' },
    { type: 'css', name: 'border', answer: 'Campo de entrada.' },
    { type: 'css', name: 'border-radius', answer: 'Botão clicável.' },
    { type: 'css', name: 'box-shadow', answer: 'Rótulo de campo.' },
    //{ type: 'css', name: 'text-shadow', answer: 'Texto multilinhas.' },
    //{ type: 'css', name: 'opacity', answer: 'Lista de seleção.' },
    //{ type: 'css', name: 'accent-color', answer: 'Item do select.' },
    //{ type: 'css', name: 'flex', answer: 'Cria uma tabela.' },
    //{ type: 'css', name: 'justify-content', answer: 'Linha da tabela.' },
    //{ type: 'css', name: 'align-items', answer: 'Célula da tabela.' },
    //{ type: 'css', name: 'flex-direction', answer: 'Título da coluna.' },
    //{ type: 'css', name: 'flex-wrap', answer: 'Topo da tabela.' },
    //{ type: 'css', name: 'gap', answer: 'Corpo da tabela.' },
    //{ type: 'css', name: 'grid-template-columns', answer: 'Base da tabela.' },
    //{ type: 'css', name: 'grid-template-rows', answer: 'Quebra de linha.' },
    //{ type: 'css', name: 'grid-area', answer: 'Linha horizontal.' },
    //{ type: 'css', name: 'position', answer: 'Destaque importante.' },
    //{ type: 'css', name: 'top / right / bottom / left', answer: 'Ênfase em itálico.' },
    //{ type: 'css', name: 'z-index', answer: 'Citação longa.' },
    //{ type: 'css', name: 'visibility', answer: 'Trecho de código.' },
    //{ type: 'css', name: 'cursor', answer: 'Texto formatado.' },
    //{ type: 'css', name: 'transition', answer: 'Frame externo.' },
    //{ type: 'css', name: 'transform', answer: 'Raiz do documento.' },
    //{ type: 'css', name: 'animation', answer: 'Cabeça do documento.' },
    //{ type: 'css', name: '@keyframes', answer: 'Título da aba.' },
    //{ type: 'css', name: '@media', answer: 'Metadados técnicos.' },
    //{ type: 'css', name: '@container', answer: 'Link de arquivo CSS.' },
    //{ type: 'css', name: 'var()', answer: 'Estilos internos.' },
    //{ type: 'css', name: 'object-fit', answer: 'Código JavaScript.' },
    { type: 'html', name: 'html', answer: 'Define a raiz de um documento HTML (contêiner principal).' },
    { type: 'html', name: 'head', answer: 'Contém metadados, links para estilos e o título da página.' },
    { type: 'html', name: 'body', answer: 'Define o corpo do documento, onde fica o conteúdo visível.' },
    { type: 'html', name: 'header', answer: 'Representa o cabeçalho da página ou de uma seção.' },
    { type: 'html', name: 'nav', answer: 'Define um bloco de links de navegação do site.' },
    { type: 'html', name: 'main', answer: 'Define o conteúdo principal e exclusivo do documento.' },
    { type: 'html', name: 'section', answer: 'Define uma seção genérica de conteúdo no documento.' },
    { type: 'html', name: 'article', answer: 'Define um conteúdo independente e auto-contido (ex: post).' },
    { type: 'html', name: 'aside', answer: 'Define um conteúdo lateral ou relacionado secundariamente.' },
    { type: 'html', name: 'footer', answer: 'Representa o rodapé da página ou de uma seção.' },
    { type: 'html', name: 'div', answer: 'Define uma divisão ou seção genérica em bloco para estilização.' },
    { type: 'html', name: 'h1', answer: 'Define o título principal de maior importância na página.' },
    { type: 'html', name: 'p', answer: 'Define um parágrafo de texto.' },
    { type: 'html', name: 'span', answer: 'Define um contêiner em linha para estilizar partes de um texto.' },
    { type: 'html', name: 'a', answer: 'Cria um hiperlink para outras páginas ou seções.' },
    { type: 'html', name: 'img', answer: 'Insere e exibe uma imagem no documento.' },
    { type: 'html', name: 'ul', answer: 'Define uma lista não ordenada (geralmente com marcadores).' },
    { type: 'html', name: 'ol', answer: 'Define uma lista ordenada (geralmente numerada).' },
    { type: 'html', name: 'li', answer: 'Define um item individual dentro de uma lista (ul ou ol).' },
    { type: 'html', name: 'form', answer: 'Define um formulário interativo para coletar dados do usuário.' },
    { type: 'html', name: 'input', answer: 'Cria um campo de entrada de dados editável pelo usuário.' },
    { type: 'html', name: 'button', answer: 'Cria um botão clicável para executar ações.' },
    { type: 'html', name: 'label', answer: 'Define uma etiqueta de texto para um elemento de formulário.' },
    { type: 'html', name: 'textarea', answer: 'Cria uma caixa de entrada de texto com múltiplas linhas.' },
    { type: 'html', name: 'select', answer: 'Cria uma lista suspensa de opções selecionáveis (dropdown).' },


]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(items);

items.forEach((item, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = index + 1;
    cell.dataset.name = item.name;
    cell.dataset.answer = item.answer;
    cell.dataset.type = item.type;

    cell.addEventListener('click', function () {
        if (this.classList.contains('revealed')) return;

        if (this.classList.contains('named')) {
            this.classList.remove('named', 'type-html');
            this.classList.add('revealed');
            this.textContent = this.dataset.answer;
            return;
        }

        this.classList.add('named', 'type-html');
        this.textContent = this.dataset.name;
    });

    minefield.appendChild(cell);
});