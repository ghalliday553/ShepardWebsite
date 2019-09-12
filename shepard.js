let scrollFlag = false;
let width = window.screen.width;

let state1 = 1;
let state2 = 645;
let state3 = 1145;
let state4 = 1645;
let state5 = 1851;

let toggle1 = 350;
let toggle2 = 850;
let toggle3 = 1350;
let toggle4 = 1850;

if (width < 600) {
    state2 = 445;
    state3 = 945;
    state4 = 1600;
    state5 = 2180;
    toggle1 = 150;
    toggle2 = 700;
    toggle3 = 1320;
    toggle4 = 2050;
}

let remove = () => {
    $("[id=home]").removeClass('active');
    $("[id=music]").removeClass('active');
    $("[id=shows]").removeClass('active');
    $("[id=about]").removeClass('active');
    $("[id=contact]").removeClass('active');
}

let scroll = (state) => {
    scrollFlag = state;
    window.scroll({
        top: state,
        left: 0,
        behavior: 'smooth'
    });
    remove();
    switch (state) {
        case state1:
            $("[id=home]").addClass('active');
            break;
        case state2:
            $("[id=music]").addClass('active');
            break;
        case state3:
            $("[id=shows]").addClass('active');
            break;
        case state4:
            $("[id=about]").addClass('active');
            break;
        case state5:
            $("[id=contact]").addClass('active');
            break;
    }
}

let home = document.getElementById('home');
home.onclick = function() {
    scroll(state1);
}

let music = document.getElementById('music');
music.onclick = function() {
    scroll(state2);
}

let upcoming = document.getElementById('shows');
upcoming.onclick = function() {
    scroll(state3);
}

let about = document.getElementById('about');
about.onclick = function() {
    scroll(state4);
}

let contact = document.getElementById('contact');
contact.onclick = function() {
    scroll(state5);
}

$(window).scroll(() => {
    let x = $(window).scrollTop();
    if (!scrollFlag || x === scrollFlag) {
        switch (true) {
            case (x>toggle4):
                remove()
                $("[id=contact]").addClass('active');
                break;
            case (x>toggle3):
                remove()
                $("[id=about]").addClass('active');
                break;
            case (x>toggle2):
                remove()
                $("[id=shows]").addClass('active');
                break;
            case (x>toggle1):
                remove()
                $("[id=music]").addClass('active');
                break;
            case (x<toggle1):
                remove()
                $("[id=home]").addClass('active');
                break;
        }
        scrollFlag = false;
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}