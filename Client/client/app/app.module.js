import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import videogular from 'videogular';
import {videogular} from 'videogular/dist/videogular/videogular';
import {videogularControl} from 'videogular-controls/vg-controls';
import {videogularOverlayPlay} from 'videogular-overlay-play/vg-overlay-play';
import {videogularPoster} from 'videogular-poster/vg-poster';
import ngSanitize from 'angular-sanitize';
import {_} from 'lodash';
import angularFileUpload from 'ng-file-upload/dist/ng-file-upload';



import angularBootstrap from 'angular-ui-bootstrap/dist/ui-bootstrap';
import angularBootstrapTpls from 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';
import angularDialogService from 'angular-dialog-service/src/dialogs-main';
import angularDialogService1 from 'angular-dialog-service/dist/dialogs';
// import 'angular-dialog-service';



import appComponent from './app.component';
import loginComponent from './Login/Login.component';
import userComponent from './user/user.component';
import videoComponent from './videoPlayer/video.component';
import enterpriseComponent from './enterprise/enterprise.component';
import searchComponent from './search/search.component';
import loginService from './Login/login.service';
import sessionService from './services/sessionService';
import enterpriseService from './enterprise/enterprise.service';
import ComponentsModule from './components/components';
import videoService from './videoPlayer/video.service';
import userService from './user/user.service';

angular.module('app', [ComponentsModule.name, 'ui.router', 'ngSanitize', 'ngFileUpload', 'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster', 'ui.bootstrap', 'dialogs.main'])
    .service('loginService', loginService)
    .service('enterpriseService', enterpriseService)
    .service('videoService', videoService)
    .service('userService', userService)
    .service('sessionService', sessionService)
    .component('app', appComponent)
    .component('searchComponent', searchComponent)
    .component('loginComponent', loginComponent)
    .component('userComponent', userComponent)
    .component('enterpriseComponent', enterpriseComponent)
    .component('videoComponent', videoComponent)
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        console.log('how');
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            template: '<app></app>'
        })
        .state('user', {
            url: '/user/:id',
            template: '<user-component></user-component>',
            params: {id: '', uDetails: {}},
        }).state('enterprise', {
            url: '/enterprise/:id',
            template: '<enterprise-component></enterprise-component>',
            params: {id: '', eDetails: {}},
        });
}]);
