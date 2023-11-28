document.addEventListener("DOMContentLoaded", function() {
    checkAuthentication();


});

function login() {

    const enteredPassword = document.getElementById('password').value;
    const hashedPassword = CryptoJS.MD5(enteredPassword).toString();
    

    const defaultPassword = 'SENHA';


        // Salva o hash da senha padrão localmente
        localStorage.setItem('passwordHash', CryptoJS.MD5(defaultPassword).toString());

   // Compara o hash inserido com o armazenado localmente
   if (hashedPassword === localStorage.getItem('passwordHash')) {
    // Senha correta, permitir acesso ao conteúdo principal
    localStorage.setItem('authenticated', 'true');
    window.location.href = 'index.html';
    } else {
        alert('Senha incorreta');

    }
}

function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('authenticated');
    const currentPage = window.location.pathname;

    if (!isAuthenticated && currentPage !== '/login.html') {
        // Se não estiver autenticado e não estiver na página de login, redirecionar para a página de login
        window.location.href = 'login.html';
    }
}

window.addEventListener('beforeunload', function (e) {
    const isAuthenticated = localStorage.getItem('authenticated');
    const currentPage = window.location.pathname;

    if (!isAuthenticated && currentPage !== 'login.html') {
        // Se não estiver autenticado e não estiver na página de login, exibe uma mensagem personalizada
        const message = 'Você não está autenticado. As alterações não serão salvas.';
        e.returnValue = message;
        return message;
    }
});

function logout() {
    // Lógica de logout (pode ser mais elaborada dependendo da autenticação)
    localStorage.setItem('authenticated', 'false');
    alert('Logout realizado com sucesso');
    window.location.href = 'login.html';  // Redireciona para a página inicial após o logout
}