/*
    función para dar formato a fecha
*/

function date_format () {
    const today = new Date();

    const date_formartter = new Intl.DateTimeFormat("en-us", {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });

    return date_formartter.format(today);
}

let response = date_format();
console.log("🚀 ~ file: script.js:18 ~ response:", response)


