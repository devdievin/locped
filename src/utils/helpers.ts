// FUNÇÃO PARA LIMPAR FORMULÁRIO
export function resetForm(form) {
  document.getElementById(form).reset();
}

// MODELO DA MENSAGEM AUTOMÁTICA DE COMPARTILHAMENTO
const str1 = "Olá. Você pode rastrear o seu pedido de código";
const str2 = `clicando no link ${process.env.URL_PACOTES}`;

// Retorna mensagem de whatsapp
export function returnMsgWhats(code) {
  const url_whats = "https://wa.me/?text=";

  let result =
    url_whats + encodeURI(str1) + " " + code + " " + encodeURI(str2) + code;
  return result;
}

// Retorna mensagem de e-mail
export function returnMsgEmail(code) {
  const url_email = "mailto:?subject=";
  const subject = "Localize seu pacote - LocPed";

  let result =
    url_email + subject + "&body=" + str1 + " " + code + " " + str2 + code;
  return result;
}

// Formata a data para o formato brasileiro
export function formatDate(date) {
  let aux = "",
    result = [];
  aux = date.split("T");

  let new_date = new Date(aux[0]);
  result.push(new_date.toLocaleDateString("pt-BR", { timeZone: "UTC" }));
  result.push(aux[1]);

  return result;
}

// Retorna ícones de acordo com o status da entrega
export function getImageSrc(status) {
  const path_img = "/images";
  let img_src = "";

  switch (status) {
    case "Objeto postado":
      img_src = `${path_img}/icon-loc1.svg`;
      break;
    case "Objeto em trânsito - por favor aguarde":
      img_src = `${path_img}/icon-truck-transit.svg`;
      break;
    case "Objeto recebido pelos Correios do Brasil":
      img_src = `${path_img}/icon-truck-ok.svg`;
      break;
    case "Fiscalização aduaneira finalizada":
      img_src = `${path_img}/icon-box-search.svg`;
      break;
    case "Objeto saiu para entrega ao destinatário":
      img_src = `${path_img}/icon-hand-box.svg`;
      break;
    case "Objeto não entregue - carteiro não atendido":
      img_src = `${path_img}/icon-box-error.svg`;
      break;
    case "Objeto entregue ao destinatário":
      img_src = `${path_img}/icon-box-ok.svg`;
      break;
    default:
      img_src = `${path_img}/icon-default.svg`;
      break;
  }

  return img_src;
}
