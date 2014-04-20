function settoken() {
  var token = (location.href.match(/^.+key=(.+)$/)||[])[1];
  if (token) {
    document.getElementById("token").value = "token: " + token;
  }
}
