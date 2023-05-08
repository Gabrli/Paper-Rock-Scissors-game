const playBtn = document.querySelector('.btn-hidde')
const welcomeModal = document.querySelector('.welcome-modal-container')


const ChangeScreens = () => {
    welcomeModal.classList.add('hidde-modal-welcome')
}


playBtn.addEventListener('click', ChangeScreens)