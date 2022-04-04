import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import images from './modules/images'
import timer from './modules/timer'

window.addEventListener('DOMContentLoaded', function () {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    images();
    timer('.container1', '2022-06-01');
});