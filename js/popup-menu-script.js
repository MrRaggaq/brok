const popup_menu_script = () => {
    const popup_menu = document.querySelector('.popup-stalking-wrapper');
    const cards_screen = document.querySelector('.cards-menu-screen');
    const map_screen = document.querySelector('.map-menu-screen');
    const cards_button = document.querySelector('.header__cards-button_map');
    const map_button = document.querySelector('.header__map-button_cards');
    const stake_button = document.querySelector('.stake-button');
    stake_button.onclick = () => {
        popup_menu.classList.add('visible_popup_menu');
        cards_screen.classList.add('visible_popup_menu');
    }
    cards_button.onclick = () => {
        cards_screen.classList.add('visible_popup_menu');
        map_screen.classList.remove('visible_popup_menu');
    }
    map_button.onclick = () => {
        cards_screen.classList.remove('visible_popup_menu');
        map_screen.classList.add('visible_popup_menu');
    }
    popup_menu.onclick = event => {
        if (event.target.classList.contains("visible_popup_menu")) {
            popup_menu.classList.remove("visible_popup_menu");
            cards_screen.classList.remove('visible_popup_menu');
            map_screen.classList.remove('visible_popup_menu');
          }
    }
}

popup_menu_script();