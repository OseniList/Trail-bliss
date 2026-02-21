// accordion import
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

function initAccordion() {
    const faqAccordionEl = document.querySelector('#accordion-faq');
    if( !faqAccordionEl === undefined ) return;

    // Параметры пользователя 
    new Accordion(faqAccordionEl, {
        duration: 400,
        showMultiple: false,
        onOpen: function (currentElement) {
            // others options 
        }
    });
}

export default initAccordion;