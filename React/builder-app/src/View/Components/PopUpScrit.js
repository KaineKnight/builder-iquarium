let btns = document.querySelectorAll(".btn_edit");
let popUp = document.querySelector(".pop-up");

function createEventListener() {
    btns.forEach(btn => () => {
        btn.addEventListener('click', () => {
            popUp.classList.remove('hidden');
        })
    })
}

export default createEventListener;