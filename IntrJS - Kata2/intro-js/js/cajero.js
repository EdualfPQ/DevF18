function mostrarUsuarios() {
    let main = document.getElementById('main');

    users.forEach((element) => {
        const createSection = document.createElement('section')
        createSection.classList.add('alingSection')

        createSection.innerHTML = `
            <img src="${element.img}" alt="">
            <h3>${element.name}<h2>
        `
        main.appendChild(createSection);
    })
}
