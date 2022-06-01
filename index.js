const API_TOKEN_URL =
  "https://chubbnetlogin.chubblatinamerica.com/SecurityProxy/api/v1.0/oauth2/token";

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response;
}

const aa = postData(API_TOKEN_URL, {
  client_id: "APIPROFESORES",
  client_secret: "U5QH$Q5C",
  grant_type: "client_credential",
  scope: "SEMI"
}).then((response) => {
  console.log(response);
  if (response.ok) {
    console.log(response);
  } else {
    console.log("Respuesta de red OK pero respuesta HTTP no OK");
  }
});

console.log(aa);


//mamadas del Isra//

//obtener value de cada campo//
const nombre = document.getElementById('name'.value) ;
const mail = document.getElementById('mail'.value) ;
const phone = document.getElementById('phone'.value) ;
const cp = document.getElementById('cp'.value) ;
const estado = document.getElementById('Estado'.value) ;
const municipio = ;
const car_typer = ;
const marca_auto = ;
const submarca= ;
const modelo = ;
const vehiculos = ;
const start_date = ;
const end_date = ;
const moneda = ;



