const toggleMenu = () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('mobile');
}

const key = setInterval(() => {
    if(document.getElementsByClassName('eapps-link').length > 0){
        document.getElementsByClassName('eapps-link')[0].style="dispaly:none";
    }
}, 500);