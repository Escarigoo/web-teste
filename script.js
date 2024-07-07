
//  header

let nav = document.querySelector('section.nav');

window.addEventListener('scroll' , () => {
    section.nav.classList.toggle('shadow', window.scrollY > 0);
})

function clearSearch() {
    document.getElementById('search-bar').value = '';
}

//TEMA

function startTimer(display) {
    var timer = 0, hours, minutes, seconds;
    
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        timer++;
    }, 1000);
}

window.onload = function () {
    var display = document.querySelector('#timer');
    startTimer(display);
};


//MUDAR TEMA

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        let theme = 'default';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }
        localStorage.setItem('theme', theme);
    });
});


// COMENTS  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comentarios-form');
    const listaComentarios = document.getElementById('comentarios-lista');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const comentario = document.getElementById('comentario').value;

        const comentarioItem = {
            nome: nome,
            comentario: comentario,
            data: new Date().toLocaleString()
        };

        //salvar comentário no localStorage
        let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.push(comentarioItem);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));

        //adiciona comentário à lista
        adicionarComentario(comentarioItem);

        //limpar formulário
        form.reset();
    });

    //carrega comentários do localStorage
    function carregarComentarios() {
        let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.forEach(comentario => adicionarComentario(comentario));
    }

    function adicionarComentario(comentario) {
        const item = document.createElement('div');
        item.className = 'comentario-item';
        item.innerHTML = `<h4>${comentario.nome}</h4><p>${comentario.comentario}</p><small>${comentario.data}</small>`;
        listaComentarios.appendChild(item);
    }

    //carrega comentários ao iniciar
    carregarComentarios();
});





