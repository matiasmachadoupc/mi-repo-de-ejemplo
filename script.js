$(document).ready(function() {
    $("#github-form").submit(function(event) {
        event.preventDefault();
        const username = $("#github-username").val();

        if (username) {
            // Llamada a la API de GitHub
            $.get(`https://api.github.com/users/${username}/repos`, function(repos) {
                const repoTable = $("#repo-table tbody");
                repoTable.empty(); // Limpiar la tabla antes de agregar nuevos datos

                // Mostrar los repositorios
                repos.forEach(repo => {
                    repoTable.append(`
                        <tr>
                           <td>${repo.name}</td>
                            <td>${repo.description || 'Sin descripcion'}</td>
                            <td>${repo.stargazers_count}</td>
                        </tr>
                    `);
                });
            }).fail(function() {
                alert("Nombre de usuario no encontrado!");
            });
        }
    });
});
