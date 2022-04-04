const modals = () => {

    function openModal(modalWindow) {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScroll()}px`
    }

    function closeModal(modalWindow) {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
    }

    function closeWindows() {
        document.querySelectorAll('[data-modal]').forEach(item => {
            item.style.display = 'none';
        });
    }

    function bindModal(modalWindowSelector, modalBtnSelector, closeBtnSelector, closeClickOverlay = 'true') {
        const modalWindow = document.querySelector(modalWindowSelector);
        const modalBtn = document.querySelectorAll(modalBtnSelector);
        const closeBtn = document.querySelector(closeBtnSelector);


        modalBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                closeWindows();
                openModal(modalWindow);
            });
        });

        closeBtn.addEventListener('click', () => {
            closeWindows();
            closeModal(modalWindow);
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow && closeClickOverlay) {
                closeWindows();
                closeModal(modalWindow);
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close');
    bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
}

export default modals; 