function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
}

// Exibe a data atual na página
function displayCurrentDate() {
    const dateElement = document.getElementById('post-date');
    if (dateElement) {
        dateElement.textContent = getCurrentDate();
    }
}

// Chama a função para exibir a data atual ao carregar a página
window.addEventListener('load', function () {
    displayCurrentDate();
});
 
 
 // Função para obter o número atual de visualizações do localStorage
function getViewCount(postId) {
    const storedCounts = localStorage.getItem('viewCounts');
    if (storedCounts) {
        const counts = JSON.parse(storedCounts);
        return counts[postId] || 0;
    }
    return 0;
}

// Função para exibir o número de visualizações na página de post
function displayViewCount(postId) {
    const viewCountElement = document.getElementById('view-count');
    if (viewCountElement) {
        const viewCount = getViewCount(postId);
        viewCountElement.textContent = viewCount;
    }
}

// Função para incrementar a contagem de visualizações
function incrementViewCount(postId) {
    const storedCounts = localStorage.getItem('viewCounts');
    let counts = {};
    if (storedCounts) {
        counts = JSON.parse(storedCounts);
    }
    counts[postId] = (counts[postId] || 0) + 1;
    localStorage.setItem('viewCounts', JSON.stringify(counts));
}

// Função para atualizar as visualizações com base no tema atual
function updateViewCount() {
    // Detectar o tema do post com base no URL atual
    const theme = new URLSearchParams(window.location.search).get('theme');

    // Obter o ID do conteúdo do post com base no tema do post atual
    const themeToContentMap = {
        'Cyber': 'cyber-content',
        'Figma': 'figma-content',
        'Scrum': 'scrum-content',
        'GPS': 'gps-content',
        'LGPD': 'lgpd-content',
        'Front-end': 'frontend-content',
        'Back-end': 'backend-content',
        'Tecnologia': 'tecnologia-content',
        'Data%20Science': 'datascience-content',
        'Redes': 'redes-content',
        'Internet': 'internet-content',
        'IA': 'ia-content',
        'Mobile': 'mobile-content',
        'Trabalho': 'trabalho-content',
        'Codigo': 'codigo-content',
        'Remoto': 'remoto-content',
        'Grupo': 'grupo-content',
        'Salario': 'salario-content'
    };

    const contentId = themeToContentMap[theme];

    // Exibir e atualizar as visualizações para o post atual
    displayViewCount(contentId);
    incrementViewCount(contentId);
}

// Chame a função para atualizar as visualizações
updateViewCount();

// Função para voltar ao card
function goBack() {
    history.back();
}
// ...

const urlParams = new URLSearchParams(window.location.search);
const theme = urlParams.get('theme');

if (theme) {
    if (theme === 'Cyber') {
        document.getElementById('cyber-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Cibersegurança e TI';
    } else if (theme === 'Figma') {
        document.getElementById('figma-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Figma e Interface ';
    } else if (theme === 'Scrum') {
        document.getElementById('scrum-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Scrum Master';
    } else if (theme === 'GPS') {
        document.getElementById('gps-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'GPS';
    } else if (theme === 'LGPD') {
        document.getElementById('lgpd-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'LGPD';
    } else if (theme === 'Front-end') {
        document.getElementById('frontend-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Front-end';
    } else if (theme === 'Back-end') {
        document.getElementById('backend-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Back-end';
    } else if (theme === 'Tecnologia') {
        document.getElementById('tecnologia-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Tecnologia e Inovação';
    } else if (theme === 'DataScience') {
        document.getElementById('datascience-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Data Science';
    } else if (theme === 'Redes') {
        document.getElementById('redes-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Redes e Computadores';
    } else if (theme === 'Internet') {
        document.getElementById('internet-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Internet e Redes Sociais';
    } else if (theme === 'IA') {
        document.getElementById('ia-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'IA e ChatGPT';
    } else if (theme === 'Mobile') {
        document.getElementById('mobile-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'APP e Mobile';
    } else if (theme === 'Trabalho') {
        document.getElementById('trabalho-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Trabalho com Tecnologia';
    } else if (theme === 'Codigo') {
        document.getElementById('codigo-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Código limpo';
    } else if (theme === 'Remoto') {
        document.getElementById('remoto-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Trabalho Remoto';
    } else if (theme === 'Grupo') {
        document.getElementById('grupo-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Trabalho em Grupo com TI';
    } else if (theme === 'Salario') {
        document.getElementById('salario-content').style.display = 'block';
        document.getElementById('post-title').textContent = 'Salário de um Desenvolvedor';
    }
}

// Função para zerar os números de visualizações no localStorage
function resetViewCounts() {
  localStorage.removeItem('viewCounts');
}

// Chama a função para zerar as visualizações (pode ser chamada quando necessário)
resetViewCounts();

