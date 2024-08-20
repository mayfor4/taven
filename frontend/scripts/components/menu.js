function createMenu() {
    const menu = document.createElement('nav');
    menu.classList.add('menu-container');

    const ul = document.createElement('ul');

    const items = ['Inicio', 'Solicitar Cotización', 'Contacto'];

    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item;
        a.href = '#';

        // cambio 
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (item === 'Inicio') {
                loadHomePage();
            } else if (item === 'Solicitar Cotización') {
                loadCotizacionPage();
            } else if (item === 'Contacto') {
                loadContactoPage();
            }
        });

        li.appendChild(a);
        ul.appendChild(li);
    });

    menu.appendChild(ul);

    return menu;
}

export default createMenu;
