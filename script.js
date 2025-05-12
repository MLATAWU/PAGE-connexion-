document.getElementById('loginForm').addEventListener('submit', function(event) ) 
 {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // "Ici, vous enverriez généralement le nom d'utilisateur et le mot de passe à votre serveur pour vérification."
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Connexion réussie');
};
