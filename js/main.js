var form = document.querySelector("#form-interest");
var airtable_write_endpoint = "https://api.airtable.com/v0/appDIM1XQsfCI1T23/Table%201?api_key=keyH8GeoxfQrafWvg";

form.addEventListener("submit", enviarForm(e));

function enviarForm(e) {
  e.preventDefault();
  // axios.post(airtable_write_endpoint, {
  //   "fields": {
  //     "Nome": e.target.childNodes[1].value,
  //     "Email": e.target.childNodes[3].value,
  //     "Facebook": e.target.childNodes[5].value,
  //     "Site": e.target.childNodes[7].value
  //   },
  //   "typecast": true
  //
  //   enviarMsg();
  //
  //   function enviarMsg() {
  //     bg.classList("bg show");
  //     msg.classList("msg-form show");
  //
  //     var botaoOK = $("#fechar-msg");
  //     botaoOK.onclick = fecharMsg;
  //
  //     function fecharMsg() {
  //       bg.classList("bg hide");
  //       msg.classList("msg-form hide")
  //     }
  //   }
  // });
  //
  // // MSG ENVIADA
  // var bg = $(".bg.hide");
  // var msg = $(".msg-form.hide");
}
