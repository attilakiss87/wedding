(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n  \n  </h1>\n </div>\n\n <app-mainpage></app-mainpage>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        // constructor(private http: HttpClient) { }
        // onclick = function () {
        //   // this.http.post('/wedding/php/save_record.php', {title : 'Esküvő', artist : 'Üllői úti fuck'})
        //   this.http.post('/wedding/php/save_record.php', {title : 'Esküvő', artist : 'Üllői úti fuck', link : encodeURI(`https://www.youtube.com/watch?v=Lq2bkP4DIW0`)})
        //     .subscribe(
        //       data => 
        //       console.log(data), 
        //       error => console.log(error)
        //     );
        // }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__["MainpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.song.model.ts":
/*!***********************************!*\
  !*** ./src/app/app.song.model.ts ***!
  \***********************************/
/*! exports provided: SongModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongModel", function() { return SongModel; });
var SongModel = /** @class */ (function () {
    function SongModel(json) {
        if (json) {
            if (json.id) {
                this._id = json.id;
            }
            if (json.title) {
                this._title = json.title;
            }
            if (json.artist) {
                this._artist = json.artist;
            }
            if (json.link) {
                this._link = json.link;
            }
        }
    }
    Object.defineProperty(SongModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SongModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SongModel.prototype, "artist", {
        get: function () {
            return this._artist;
        },
        set: function (artist) {
            this._artist = artist;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SongModel.prototype, "link", {
        get: function () {
            return this._link;
        },
        set: function (link) {
            this._link = link;
        },
        enumerable: true,
        configurable: true
    });
    SongModel.prototype.toJSON = function () {
        return { id: this.id, title: this.title, artist: this.artist, link: this.link };
    };
    return SongModel;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.nav-item {\r\n    cursor: pointer;\r\n    color : #afafaf;\r\n}\r\n\r\n.content {\r\n    margin-top: 100px;\r\n}\r\n\r\n.row {\r\n    max-width: 100%;\r\n}\r\n\r\n.textcontent {\r\n    font-family: sans, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana';\r\n    \r\n}\r\n\r\n.textcontent p {\r\n    color: #afafaf;\r\n}\r\n\r\n@-webkit-keyframes pulse_animation {\r\n    0% { -webkit-transform: scale(1); transform: scale(1); }\r\n    40% { -webkit-transform: scale(1.3); transform: scale(1.3); }\r\n    60% { -webkit-transform: scale(1); transform: scale(1); }\r\n    100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n@keyframes pulse_animation {\r\n    0% { -webkit-transform: scale(1); transform: scale(1); }\r\n    40% { -webkit-transform: scale(1.3); transform: scale(1.3); }\r\n    60% { -webkit-transform: scale(1); transform: scale(1); }\r\n    100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n.heart-pulse {\r\n    -webkit-animation-name: pulse_animation;\r\n            animation-name: pulse_animation;\r\n    -webkit-animation-duration: 1500ms;\r\n            animation-duration: 1500ms;\r\n    -webkit-transform-origin:70% 70%;\r\n            transform-origin:70% 70%;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark  justify-content-center\">\n  <ul class=\"nav  nav-pills nav-fill \">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active \" id=\"home\" role=\"button\" (click)=\"onMenuClick($event)\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" id=\"playlist\" role=\"button\" (click)=\"onMenuClick($event)\">Lejátszási lista</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link \" id=\"contact\" role=\"button\" (click)=\"onMenuClick($event)\">Kapcsolat</a>\n      </li>\n  </ul>\n</nav>\n\n<div class=\"content\">\n  <div class=\"row\" *ngIf=\"menuId == 'home'\">\n\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 textcontent\">\n      <h3>Kedves mindenki!</h3>\n      <p class=\"w-75 text-justify p-2\">\n        Itt próbáltuk összegyűjteni a legfontosabb információkat a Nagy Nappal kapcsolatosan. Igyekszünk minden esetlegesen felmerülő\n        kérdésre válaszolni, azonban ha mégsem sikerül, akkor a kapcsolat menüben található űrlappal tudtok üzenetet küldeni nekünk.\n        Nem gyorsabb mint messengeren vagy telefonon, de elegánsabb.\n        <i class=\"fa fa-smile-o fa-spin\"></i>\n        <br>\n\n      </p>\n      <br>\n      <h4 class=\"pt-3\">Szállások</h4>\n      <p class=\"w-75 text-justify p-2\">\n        A pontos szobaelosztás még nem ismert, ez valószínűleg az\n        <i class=\"fa fa-heart text-danger heart-pulse\"></i>ESEMÉNY<i class=\"fa fa-heart text-danger heart-pulse\"></i> előtti pár hétben fog realizálódni.\n        <br> Ennek megfelelően ide is fel fog kerülni, de a helyszínen is megtaláljátok majd egy szép átlátható táblázatba rendezve.\n        Továbbá a bejáratnál a portán is.\n        <br> Ami biztos, hogy a szobákat 14 órától lehet elfoglalni.\n      </p>\n      <br>\n      <h4 class=\"pt-3\">Helyszín</h4>\n      <p class=\"w-75 text-justify p-2\">\n        A meghívón is rajta van, de\n        <a href=\"https://www.google.hu/maps/@46.1210388,17.9930169,185m/data=!3m1!1e3\" target=\"_blank\">itt</a> egy link is a Google Maps-hez.\n        <br>\n        Meg <a href=\"http://okobukkosd.hu/index.php/hu/\" target=\"_blank\">itt</a> van még egy, a helyszín honlapjával, szép képekkel stb.\n      </p>\n      <br>\n      <h4 class=\"pt-3\">Egyebek</h4>\n      <p class=\"w-75 text-justify p-1\">\n        Amit már az elején tisztázni szeretnénk:\n        <br> Nem várunk el semmilyen ajándékot, nem azért lett meghívva senki, hogy vagyonokat költsön ránk. Gyertek el, egyetek\n        igyatok, táncoljatok egy jót. Aki azonban mégis úgy érzi, hogy muszáj ajándékot adnia, mert a nélkül nem élet az\n        élet és egyébként se tudná már másra elkölteni azt a pénzt, annak jelezni szeretnénk, hogy az albérletünk teljesen\n        felszerelt és semmilyen konyhai, fürdőszobai, hálószobai eszköz nem fér már el a lakásban.\n        <br> Az előző mondatban viszont az 'albérlet' szót jó lenne 'saját lakás'-ra cserélni, ezért aki tűzön-vízen át ajándékozni\n        szeretne, ha meg nem sértjük ezzel, inkább tegye az ajándékra szánt összeget egy borítékba.\n        <br>\n\n      </p>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"menuId == 'playlist'\">\n\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 textcontent\">\n      <h3 class=\"pt-3\">Az ötlet:</h3>\n      <p class=\"w-75 p-2 text-justify\">\n        <br> Mindenki megadhatja, milyen számot szeretne a buli közben hallani. Ezt a listát továbbítjuk a DJ-nek, és ő próbálja\n        majd úgy összeállítani a zenei palettát, hogy ami csak lehet ebből a listából bele kerüljön.\n        <br> Természetesen nem ígérek semmit, de ha van olyan zene amit szívesen hallanátok az esküvőn, akkor hajrá.\n        <br> Ebben a listában láthatjátok a már eddig hozzáadott dalokat, és adhattok hozzá ti is újakat, kedvetek szerint.\n        <br> Link nem kötelező, azonban az előadó és a szám címe eléggé fontos, szóval azokat légyszi mindenképp adjátok meg.\n      </p>\n      <div style=\"padding-bottom: 10px;\">\n        <button class=\"btn btn-primary\" *ngIf=\"showForm == false\" (click)=\"onNewSongClick()\">{{buttonText}}</button>\n        <button class=\"btn btn-primary\" *ngIf=\"showForm == true\" (click)=\"onCancelClick()\">{{buttonText}}</button>\n      </div>\n      <form #f=\"ngForm\" *ngIf=\"showForm == true\" (ngSubmit)=\"onSaveClick()\">\n        <div class=\"form-group\">\n          <label for=\"title\">Szám címe</label>\n          <input type=\"text\" [(ngModel)]=\"song.title\" name=\"title\" class=\"form-control\" placeholder=\"Szám címe\" required [disabled]=\"linkAdd\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"artist\">Előadó</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"song.artist\" name=\"artist\" placeholder=\"Előadó\" required [disabled]=\"linkAdd\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"link\">Link</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"song.link\" name=\"link\" placeholder=\"YouTube link\" [required]=\"linkAdd\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Ez is szóljon, beküldöm!</button>\n        </div>\n      </form>\n      <!-- <table *ngIf=\"songs.length > 0\" class=\"table table-hover\"> -->\n      <div class=\"col-md-8 textcontent\" *ngIf=\"songs.length == 0\">\n        <p>Még nincs egyetlen szám sem a listában.\n          <i class=\"fa fa-frown-o fa-spin\"></i>\n          <br> Nosza addj hozzá egy szép dalt!</p>\n      </div>\n      <table class=\"table table-hover\" *ngIf=\"songs.length > 0\">\n        <thead>\n          <tr>\n            <th>Előadó</th>\n            <th>Cím</th>\n            <th>YouTube link</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let song of songs\">\n            <td>{{song.artist}}</td>\n            <td>{{song.title}}</td>\n            <td *ngIf=\"song.link != null\">\n              <a target=\"_blank\" href='{{song.link}}'>Katt ide</a>\n            </td>\n            <td *ngIf=\"song.link == null\">Nincs link\n              <i class=\"fa fa-frown-o\"></i>\n            </td>\n            <td *ngIf=\"song.link == null\">\n              <button type=\"button\" class=\"btn btn-primary btn-rounded btn-sm my-0\" (click)=\"onAddLinkClick(song)\">Link hozzáadása</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row textcontent\" *ngIf=\"menuId == 'contact'\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 message-form\">\n      <p class=\"w-75\">\n        Elérhetőségeink:\n      </p>\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"card w-100\" >\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Andi</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Telefon</h6>\n              <p class=\"card-text\">+36703958718</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">E-mail</h6>\n              <p class=\"card-text\">wagenhofferandrea@gmail.com</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"card w-100\" >\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Attila</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Telefon</h6>\n              <p class=\"card-text\">+36703402113</p>\n              <h6 class=\"card-subtitle mb-2 text-muted\">E-mail</h6>\n              <p class=\"card-text\">kiss.attila1001@gmail.com</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h4 class=\"pt-3\" >Vagy küldj üzit közvetlen</h4>\n      <p class=\"w-75 p-1\">Természetesen akárhogy üzenhettek, de amit itt elküldtök, azt mind a ketten egyszerre megkapjuk és nagyobb eséllyel kaptok rá\n        választ.</p>\n      <form #f=\"ngForm\" (ngSubmit)=\"onSendMessage()\">\n        <div class=\"form-group\">\n          <label for=\"messageFrom\">Neved</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"messageFrom\" name=\"messageFrom\" placeholder=\"\" [required]=\"true\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"message\">Üzenet</label>\n          <textarea class=\"form-control\" name=\"message\" [(ngModel)]=\"message\" required></textarea>\n        </div>\n        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Kérdeznék, elküldöm!</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _songservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../songservice.service */ "./src/app/songservice.service.ts");
/* harmony import */ var _app_song_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.song.model */ "./src/app/app.song.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(songService) {
        this.songService = songService;
        this.songs = [];
        this.song = new _app_song_model__WEBPACK_IMPORTED_MODULE_2__["SongModel"]();
        this.showForm = false;
        this.linkAdd = false;
        this.buttonText = "Új dal hozzáadása";
    }
    MainpageComponent.prototype.ngOnInit = function () {
        this.menuId = 'home';
        this.songs = [];
    };
    MainpageComponent.prototype.onMenuClick = function (event) {
        var _this = this;
        this.menuId = event.target.id;
        var menus = document.querySelectorAll('li.nav-item a');
        for (var i = 0; i < menus.length; i++) {
            if (menus[i] != event.target) {
                menus[i].classList.remove('active');
            }
            else {
                menus[i].classList.add('active');
            }
        }
        if (this.menuId == 'playlist') {
            this.songService.getAllSongs().subscribe(function (result) { return _this.handleResult(result); }, function (error) { return _this.handleError(error); });
        }
    };
    MainpageComponent.prototype.onNewSongClick = function () {
        this.song = new _app_song_model__WEBPACK_IMPORTED_MODULE_2__["SongModel"]();
        this.showForm = true;
        this.setButtonText();
    };
    MainpageComponent.prototype.onCancelClick = function () {
        this.showForm = false;
        this.linkAdd = false;
        this.setButtonText();
    };
    MainpageComponent.prototype.setButtonText = function () {
        this.buttonText = this.showForm ? "Mégsem" : "Új dal hozzáadása";
    };
    MainpageComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.songService.saveSong(this.song).subscribe(function (result) { return _this.handleResult(result); }, function (error) { return _this.handleError(error); });
        this.showForm = false;
        this.linkAdd = false;
        this.setButtonText();
    };
    MainpageComponent.prototype.onAddLinkClick = function (song) {
        if (!this.showForm) {
            this.onNewSongClick();
        }
        this.song = new _app_song_model__WEBPACK_IMPORTED_MODULE_2__["SongModel"](song.toJSON());
        this.linkAdd = true;
    };
    MainpageComponent.prototype.handleResult = function (result) {
        if (result.existed == true) {
            alert('Ez a melódia már benne van a listában, nézd meg jobban kérlek.');
        }
        else {
            this.songs = [];
            if (result.items && result.items.length > 0) {
                for (var i = 0; i < result.items.length; i++) {
                    this.songs.push(new _app_song_model__WEBPACK_IMPORTED_MODULE_2__["SongModel"](result.items[i]));
                }
            }
        }
        this.song = new _app_song_model__WEBPACK_IMPORTED_MODULE_2__["SongModel"]();
    };
    MainpageComponent.prototype.handleError = function (error) {
        if (error) {
            if (error.error && error.error.text) {
                console.log(error.error.text);
            }
            else {
                console.log(error);
            }
        }
    };
    MainpageComponent.prototype.onSendMessage = function () {
        var _this = this;
        this.songService.sendMail(this.message, this.messageFrom).subscribe(function (res) {
            if (res.success == true) {
                alert('Az üzenet sikeresen elküldve');
                _this.message = '';
                _this.messageFrom = '';
            }
            else {
                alert('Hiba történt');
            }
        }, function (err) { return console.log(err); });
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css"), __webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css"), __webpack_require__(/*! ../../../node_modules/font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_songservice_service__WEBPACK_IMPORTED_MODULE_1__["SongserviceService"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/songservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/songservice.service.ts ***!
  \****************************************/
/*! exports provided: SongserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongserviceService", function() { return SongserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongserviceService = /** @class */ (function () {
    function SongserviceService(http) {
        this.http = http;
    }
    SongserviceService.prototype.saveSong = function (song) {
        return this.http.post('/wedding/php/save_record.php', song.toJSON());
    };
    SongserviceService.prototype.getAllSongs = function () {
        return this.http.post('/wedding/php/get_all_items.php', {});
    };
    SongserviceService.prototype.sendMail = function (message, from) {
        return this.http.post('/wedding/php/send_email.php', { body: message, from: from });
    };
    SongserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SongserviceService);
    return SongserviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wedding\wedding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map