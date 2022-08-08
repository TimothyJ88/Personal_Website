let randomButton = document.querySelector("#randomProject");
randomButton.onclick = pickRandomProject;

function pickRandomProject() {
    let randomIndex = Math.random();
    randomIndex *= projects.length;
    randomIndex = Math.floor(randomIndex);

    let randomProjects = projects[randomIndex];

    var findlink = document.getElementById("link");
		findlink.href =  `${randomProjects.works}`;

        let nameHeading = document.querySelector("#link");
        nameHeading.innerHTML = `${randomProjects.name}`;
}
