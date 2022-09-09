// FUNÇÃO PARA LIMPAR FORMULÁRIO
export function resetForm(form) {
    document.getElementById(form).reset();
}

// MODELO DA MENSAGEM AUTOMÁTICA DE COMPARTILHAMENTO
const str1 = "Olá. Você pode rastrear o seu pedido de código";
const str2 = `clicando no link ${process.env.URL_PACOTES}`;

// MENSAGEM WHATSAPP
export function returnMsgWhats(code) {
    const url_whats = "https://wa.me/?text=";

    let result = url_whats + encodeURI(str1) + " " + code + " " + encodeURI(str2) + code;
    return result;
}

// MENSAGEM E-MAIL
export function returnMsgEmail(code) {
    const url_email = "mailto:?subject=";
    const subject = "Localize seu pacote - LocPed";

    let result = url_email + subject + "&body=" + str1 + " " + code + " " + str2 + code;
    return result;
}