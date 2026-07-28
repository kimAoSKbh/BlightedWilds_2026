fetch("standings.json")
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#standings tbody");

    data.forEach(player => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${player.player}</td>
        <td>${player.faction}</td>
        <td>${player.gp}</td>
        <td>${player.battles}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Kunne ikke indlæse standings.json:", error));
