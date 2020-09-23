console.log("Hej Världen!");

document.getElementById("getEmpl").addEventListener("click", getEmpl);

function getEmpl() {
  fetch("adressbok-1.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Anställda</h2>";
      //Sortera anställda efter yngst först
      data.sort(function (a, b) {
        /*if (a.age < b.age) {
          return -1;
        } else if (a.age > b.age) {
          return 1;
        } else {
          return 0;
        }*/
        return a.age - b.age;
      });
      console.log(data);
      // Tryck in anställda i output variable och skriv ut i body
      data.forEach(function (employees) {
        output += `
            <ul>
                <li>Förnamn: ${employees.firstname}</li>
                <li>Efternamn: ${employees.lastname}</li>
                <li>Email: ${employees.email}</li>
                <li>Ålder: ${employees.age}</li>
            </ul>
          `;
      });
      document.getElementById("mainBody").innerHTML = output;
    });
}
