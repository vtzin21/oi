window.onload = () => {
    if (!window.sessionStorage.getItem("token")) {
      window.location = 'index.html'
    }
  };
  
  
function logout() {
  window.sessionStorage.removeItem('token')
  window.location.href = 'index.html'
}
