function settoken() {
  var token = (location.href.match(/^.+authorization_code=(.+)$/)||[])[1];
  if (token) {
    document.getElementById("token").value = "token: " + token;
  }
}
