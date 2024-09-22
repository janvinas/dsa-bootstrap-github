$(document).ready(() => {
    $("#username-button").on("click", () => {
        $("#alert-box").hide()
        $("#repo-table").hide()

        const query = `https://api.github.com/users/${$("#username").val()}/repos`;
        $.getJSON(query, (data) => {
            $("#table-body").empty()

            for(index in data){
                const row = $("<tr></tr>");
                ["name", "description", "stargazers_count", "forks_count"].forEach(p => {
                    const col = document.createElement("td");
                    col.textContent = data[index][p]
                    col.style.cursor = "pointer"
                    row.append(col);
                })
                const url = data[index].html_url
                row.click(function(){
                    window.open(url)
                })
                $("#table-body").append(row);
            }

            $("#repo-table").show()
        })
    })

    $(document).ajaxError(() => {
        $("#alert-box").show()
    })
})

