'use strict';

export default class appCtrl {
    constructor(dialogs) {
        this.dialogs = dialogs;
        this.dialogs.error('modda', 'modda again', [,'lg']);
        console.log(this.dialogs);
    }

    $onInit() {
        console.log('App is initializedpopoppopo');
    }
}

appCtrl.$inject = ['dialogs'];
