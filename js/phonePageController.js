'use strict';

class PhonePageController {
    constructor(options){
        this._el = options.element;

        this._filter = new Filter({
            element: this._el.querySelector('[data-component="filter"]')
        });

        this._sorter = new Sorter({
            element: this._el.querySelector('[data-component="sorter"]')
        });

        this._phoneCatalogue = new PhoneCatalogue({
            element: this._el.querySelector('[data-component="phoneCatalogue"]')
        })
    }
}  