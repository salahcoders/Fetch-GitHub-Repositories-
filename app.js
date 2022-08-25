let username = document.querySelector(".username");
let btn = document.querySelector(".btnFetch");
let repos = document.querySelector(".repos");

// API => https://api.github.com/users/${username}/repos

btn.onclick = (e) => {
    e.preventDefault();
    if (username.textContent = "") {
        alert("Sorry you can't take input empty");
    } else {
        fetch(`https://api.github.com/users/${username.value}/repos`)
            .then((repostries) => repostries.json())
            .then((repo) => {
                if (document.querySelector(".repos .repo")) {
                    document.querySelectorAll(".repo").forEach((el) => el.remove());
                } else {
                    for (let i = 0; i < repo.length; i++) {
                        let div = document.createElement("div");
                        div.className = "repo";
                        let name_repo = document.createElement("h5");
                        name_repo.className = "name_repo";
                        name_repo.appendChild(document.createTextNode(repo[i].name))
                        div.appendChild(name_repo);
                        let info = document.createElement("div");
                        info.className = "info";
                        let stars_repo = document.createElement("span");
                        stars_repo.className = "stars_repo";
                        stars_repo.appendChild(document.createTextNode(`Stars: ${repo[i].stargazers_count}`));
                        info.appendChild(stars_repo);
                        let vist = document.createElement("a");
                        vist.className = "vist";
                        vist.target = "_blank";
                        vist.textContent = "Visit";
                        vist.href = `${repo[i].html_url}`;
                        info.appendChild(vist);
                        div.appendChild(info);
                        repos.appendChild(div);
                    }
                }
            })
    }
}