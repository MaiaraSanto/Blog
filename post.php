<?php
// Verifique se o parâmetro "id" foi passado na URL
if (isset($_GET['id'])) {
    $postId = $_GET['id'];

    // Aqui você pode implementar a lógica para incrementar o número de visualizações no servidor
    // Por exemplo, você pode armazenar a contagem em um banco de dados
    // e atualizá-la sempre que um usuário acessar a página de visualização completa

    // Supondo que você tenha uma função chamada incrementViewCount() que atualiza a contagem
    incrementViewCount($postId);
} else {
    // Se o parâmetro "id" não foi passado, redirecione para a página inicial ou trate o erro de outra forma
    header('Location: index.html');
    exit;
}

// Recupere a contagem atualizada (você deve buscar isso do banco de dados)
$viewCount = getViewCount($postId);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Seus meta tags, estilos e scripts aqui -->
</head>
<body>
    <section class="post">
        <div class="container">
            <!-- Título do post -->
            <h1 class="post-title" id="post-title">Título do Post</h1>
            
            <!-- Conteúdo do post -->
            <p class="post-content" id="post-content">Conteúdo do post aqui...</p>
            
            <!-- Exibe o número de visualizações atualizado -->
            <p class="post-views">Visualizações: <span id="view-count"><?php echo $viewCount; ?></span></p>
            
            <!-- Botão "Voltar para a Lista" -->
            <a href="index.html">Voltar para a Lista</a>
        </div>
    </section>
</body>
</html>
