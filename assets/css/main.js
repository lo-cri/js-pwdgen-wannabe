/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

const nome = prompt("Come ti chiami?");
const cognome = prompt("Qual è il tuo cognome?");
const colorepreferito = prompt("Qual è il tuo colore preferito?");

let password = nome + cognome + colorepreferito;

console.log(password);

document.writeln(`<p>La tua passoword è ${password}21</p>`);