'use strict'
/*
var template = `
<li class="thumbnail">
    <a href="#!/phones/motorola-xoom-with-wi-fi" class="thumb">
    <img alt="Motorola XOOM™ with Wi-Fi" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
    </a>
    <a href="#!/phones/motorola-xoom-with-wi-fi">Motorola XOOM™ with Wi-Fi</a>
    <p>The Next, Next Generation

    Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).</p>
</li>
`;

let phone = {
    "age": 0, 
    "id": "motorola-xoom-with-wi-fi", 
    "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
    "name": "Motorola XOOM\u2122 with Wi-Fi", 
    "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
};
*/

class PhoneCatalogue {
    constructor(options){
        this._el = options.element;

        this._render(options.phones);

        this._el.addEventListener('click', event => {
            if (!event.target.closest('[data-element="phoneLink"]')){
                return;
            }

            event.preventDefault();
            //this._showPhoneDetails();

            let customEvent = new CustomEvent('phoneSelected', {
                detail: 'phoneId'
            });

            this._el.dispatchEvent(customEvent);
        });
    }

    getElement() {
        return this._el;
    }

    _render(phones){
        let html = '<ul class="phones">';
/*
        phones.forEach(function(phone)  {
            //...
        }).bind(this);

        phones.forEach(phone => {
            //...
        });
*/
        phones.forEach(phone => {
            html += `
            <li class="thumbnail">
                <a href="#!/phones/${phone.id}" class="thumb" data-element="phoneLink">
                    <img alt="${phone.name}" src="${phone.imageUrl}">
                </a>
                <a href="#!/phones/${phone.id}" data-element="phoneLink">${phone.name}</a>
                <p>${phone.snippet}</p>
            </li>
            `;
        });

        html += '</ul>';
        //this._el.innerHTML = '<ul class="phones">...</ul>';
        this._el.innerHTML = html;

    }
}  