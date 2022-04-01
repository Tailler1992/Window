const modals = () => {

    function openModal(modalWindow) {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalWindow) {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }

    function bindModal(modalWindowSelector, modalBtnSelector, closeBtnSelector) {
        const modalWindow = document.querySelector(modalWindowSelector);
        const modalBtn = document.querySelectorAll(modalBtnSelector);
        const closeBtn = document.querySelector(closeBtnSelector);

        modalBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                openModal(modalWindow);
            });
        });

        closeBtn.addEventListener('click', () => {
            closeModal(modalWindow);
        });

        modalWindow.addEventListener('click', (e)=>{
            if (e.target === modalWindow){
                closeModal(modalWindow); 
            }
        });
    }

    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close');
}

export default modals;