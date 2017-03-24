webpackJsonp([3,5],{

/***/ 296:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 296;


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(413);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(el) {
        this.el = el;
        this.pdfSrc = "assets/pdfs/3ndprojectplan.pdf";
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        $('.carousel').css("height", "100vh");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        $('.scrollspy').scrollSpy({ scrollOffset: 0 });
        $('#portfolio-tabs').tabs({ swipeable: true });
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '10%',
            ready: function (modal, trigger) {
            },
            complete: function () {
            } // Callback for Modal close
        });
        var options = [
            {
                selector: '#skills', offset: 100, callback: function (el) {
                    $("#circleHTML").circliful({
                        text: "HTML/CSS",
                        animationStep: 5,
                        foregroundBorderWidth: 5,
                        backgroundBorderWidth: 15,
                        percent: 75
                    });
                }
            },
            {
                selector: '#skills', offset: 110, callback: function (el) {
                    $("#circleJS").circliful({
                        text: "JavaScript",
                        animationStep: 5,
                        foregroundBorderWidth: 5,
                        backgroundBorderWidth: 15,
                        percent: 70
                    });
                }
            },
            {
                selector: '#skills', offset: 120, callback: function (el) {
                    $("#circleTS").circliful({
                        text: "TypeScript",
                        animationStep: 5,
                        foregroundBorderWidth: 5,
                        backgroundBorderWidth: 15,
                        percent: 65
                    });
                }
            },
            {
                selector: '#skills', offset: 130, callback: function (el) {
                    $("#circleJAVA").circliful({
                        text: "JAVA",
                        animationStep: 5,
                        foregroundBorderWidth: 5,
                        backgroundBorderWidth: 15,
                        percent: 65
                    });
                }
            },
            {
                selector: '#skills', offset: 140, callback: function (el) {
                    $("#circleHTTP").circliful({
                        text: "SQL",
                        animationStep: 5,
                        foregroundBorderWidth: 5,
                        backgroundBorderWidth: 15,
                        percent: 50,
                        targetTextSize: 17,
                        // animateInView: true
                        title: "test"
                    });
                }
            },
        ];
        Materialize.scrollFire(options);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(478),
            styles: [__webpack_require__(470)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "  \n/*        \n\n  .pin-top {\n    position: relative;\n  }\n\n  .pin-bottom {\n    position: relative;\n  }\n\n  .pinned {\n    position: fixed !important;\n  }*/\n\n  nav li{\n      width: 20%\n  }\n  /*nav{\n      height: 7vh;\n  }*/\n  .section{\n      background: white;\n      \n  }\n\n  ul>.tab:hover{\n      background: darkgray\n  }\n\n  nav a{\n    font-size: 1.3em;\n  }\n  .modal{\n    width: 60%;\n  }\n  .modal li{\n    width: 13%;\n  }\n\n  h3,h4{\n   text-shadow: 2px 3px 2px grey;\n    \n  }\n\n  #portfolio td{\n    font-size: 1.1em\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n</div>\n<div id=\"index\" class=\" row transparent scrollspy\">\n  <div class=\"col s0 m1 l2\"></div>\n  <div class=\" col s12 m11 l10\">\n    <h3 class=\"grey-text text-lighten-1 \">IMPROVE </h3>\n    <h3 class=\"grey-text text-lighten-1 \">THE WORLD</h3>\n    <h3 class=\"grey-text text-lighten-1 \">FROM </h3>\n    <h3 class=\"grey-text text-lighten-1 \">MYSELF</h3>\n  </div>\n  <div class=\"row\" style=\"height: 80%\"></div>\n  <div class=\"row\">\n    <div class=\"col s0 m2 l7\"></div>\n    <div class=\"col s12 m10 l5\">\n      <h4 class=\"grey-text text-lighten-1 \">\n        <pre> YoungTae Kim</pre>\n      </h4>\n    </div>\n  </div>\n\n</div>\n\n<div class=\" navbar-fixed\">\n  <nav class=\"col s12 m12 l12\">\n    <div class=\"nav-wrapper teal accent-3\">\n      <div class=\"container center-align\">\n        <ul id=\"nav-mobile\" class=\"center \">\n          <li><a style=\"text-shadow: 1px 1px 1px gray;\" class=\"blue-grey-text text-darken-3\" href=\"#about\">About</a></li>\n          <li><a style=\"text-shadow: 1px 1px 1px gray;\" class=\"blue-grey-text text-darken-3\" href=\"#skills\">Skills</a></li>\n          <li><a style=\"text-shadow: 1px 1px 1px gray;\" class=\"blue-grey-text text-darken-3\" href=\"#portfolio\">PortFolio</a></li>\n          <li><a style=\"text-shadow: 1px 1px 1px gray;\" class=\"blue-grey-text text-darken-3\" href=\"#vision\">Vision</a></li>\n          <li><a style=\"text-shadow: 1px 1px 1px gray;\" class=\"blue-grey-text text-darken-3\" href=\"#contact\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<div id=\"about\" class=\"block z-depth-4  black-text scrollspy \">\n\n  <div class=\"row\">\n\n    <h3 class=\"center blue-grey-text text-lighten-1\">About </h3>\n    <div class=\" col s12 m4 l4 \">\n\n      <img class=\"z-depth-4 responsive-img\" width=\"100%\" src=\"assets/images/aurora.jpg\" />\n    </div>\n\n    <div class=\"col s12 m8 l8 \">\n      <div class=\"\">\n        <br> <b>소개</b>\n        <br> 반갑습니다. 김영태입니다.\n        <br> 저는 IT 기술을 통해 재밌고 멋진 일을 하고 싶어요!\n        <br> 세상 사람들에게 유익한 일을 하는 것은 멋지다고 생각합니다.\n        <br> 열정이 있는 분이라면 언제든지 환영합니다. <br>\n        <br>\n        <hr>\n        <br><b>관심사</b>\n        <br> 스타트업 / 창업에 관심이 많습니다.\n        <br> 하우스 음악을 즐겨들어요~\n        <br> 인문학이나 자연에 대한 책을 읽거나 다큐멘터리를 봅니다.\n        <br> 농구를 좋아하고, 운동을 즐깁니다.\n        <br> 코딩하다보면 시간 가는줄을 모릅니다.\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\" col s12 m6 l6\" style=\"height: 80vh\">\n      <div class=\"center-align\">\n        <b class=\"\" style=\"font-size: 2em;text-shadow: 1px 1px 2px gray;\">history</b>\n        <br>\n      </div>\n      <table>\n        <thead>\n          <tr>\n            <th><br></th>\n            <th><br></th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td>2007.03 - 2010.02</td>\n            <td>청주 운호고등학교 졸</td>\n\n          </tr>\n          <tr>\n            <td>2010.03 - 2014.02</td>\n            <td>고려대학교 환경생태공학 학사</td>\n\n          </tr>\n          <tr>\n            <td>2014.03 - 2016.06</td>\n            <td>[정보통신병과] 육군 중위 전역</td>\n          </tr>\n\n          <tr>\n            <td>2016.08 - 2017.02</td>\n            <td>[고용노동부] 자바기반 모바일 & 웹 개발자 양성</td>\n\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n    <div class=\"col s12 m6 l6\">\n      <div class=\"center-align\">\n        <b class=\"\" style=\"font-size: 2em;text-shadow: 1px 1px 2px gray;\">activity</b>\n        <br><br><br>\n      </div>\n      <ul class=\"collapsible \" data-collapsible=\"accordion\">\n        <li style=\"width: 100%\">\n          <div class=\"collapsible-header active\">고등학교 기숙사 생활/ 학생회 부회장</div>\n          <div class=\"collapsible-body\"><span>학업으로 힘들기도 했었지만 가장 많이 웃고, 행복하게 지냈던 때가 아닌가 싶습니다. 아, 물론 대학가서 연애를 해보기 전까지요. </span></div>\n        </li>\n        <li style=\"width: 100%\">\n          <div class=\"collapsible-header\">과 신입생대표/학생회 부회장</div>\n          <div class=\"collapsible-body\"><span>어떤 조직의 대표로 활동하는 것이 굉장한 책임과 어려움이 따른다는 것을 알게 해주었습니다. 하지만 각종 학교 행사를 준비하고 진행하면서 얻었던 보람은 지금도 잊을 수가 없네요. </span></div>\n        </li>\n        <li style=\"width: 100%\">\n          <div class=\"collapsible-header\">102 학군단 52기</div>\n          <div class=\"collapsible-body\"><span>학군단 출신이신 아버지의 권유로 시작하게 되었습니다. 여름, 겨울마다 진행했던 훈련은 지금생각하면 추억입니다.  </span></div>\n        </li>\n        <li style=\"width: 100%\">\n          <div class=\"collapsible-header\">농구 동아리 / 파티 기획 동아리</div>\n          <div class=\"collapsible-body\"><span>중학생때부터 농구를 즐겨했습니다. 중고등학생일땐 도대회, 시대회도 나가서 3등의 입상 경력도 있구요. 대학교가서도 농구를 즐겨하곤 했습니다.<br> 한때 클럽을 좋아해서 아예 파티 기획동아리에 들어가\n              음악을 들으며 춤췄던 적도 있습니다. 학교나 외부에서 클럽파티를 연적도 있습니다.  </span></div>\n        </li>\n      </ul>\n\n    </div>\n\n\n  </div>\n\n\n</div>\n\n<!--////////////////////////////////////-->\n\n<div id=\"skills\" class=\" block black-text scrollspy white\">\n  <div class=\"row\">\n    <h3 class=\"center blue-grey-text text-lighten-1\">Skills </h3>\n  </div>\n  <div class=\"row center-align\">\n    <div class=\"col s12 grey-text\" style=\"font-size: 1.5em\">\n      <i>\"굉장히 빠르고 재미있게 공부를 하고 있습니다!  보다 깊은 이해를 하기 위해 노력합니다.\"</i>\n    </div>\n  </div>\n  <div class=\"row\" style=\"font-size: 100%\">\n    <div class=\"col s0 m1\"></div>\n    <div class=\"col s4 m2\">\n      <div id=\"circleHTML\"></div>Element를 선택해서 다양한 효과를 주거나 컨트롤 할 수 있습니다.</div>\n    <div class=\"col s4 m2\">\n      <div id=\"circleJS\"></div>가장 관심이 많은 언어입니다. 최근에는 ES6 스펙을 탐독하고 있습니다. </div>\n    <div class=\"col s4 m2\">\n      <div id=\"circleTS\"></div>친숙하며, 가장 많이 활용하고 있는 언어입니다. </div>\n    <div class=\"col s4 m2\">\n      <div id=\"circleJAVA\"></div>객체지향의 특성을 이해하고 있으며, 네트워크와 Thread에 대해서도 이해하고 있습니다. </div>\n    <div class=\"col s4 m2\">\n      <div id=\"circleHTTP\"></div>MYSQL, ORACLE을 사용해본적이 있고, 기본적인 CRUD을 사용할 수 있습니다.\n    </div>\n    <div class=\"col s0 m1\"></div>\n  </div>\n  <br>\n  <div class=\"row center-align\">\n    <div class=\"col s12 grey-text\" style=\"font-size: 1.5em\">\n      <i>\"지식에 대한 갈증을 해소하는 것만큼 짜릿한 일이 있을까요.\"</i>\n    </div>\n  </div>\n\n\n  <div class=\"row center-align\" style=\"font-size: 100%\">\n    <div class=\"col s0 m1\"></div>\n    <div class=\"col s4 m2\">\n      <img src=\"assets/images/http.svg\" width=\"100%\" />\n      <br>Header 설정부터 시작해서 HTTP 메세지를 읽고 보낼 수 있습니다. RESTful 형식의 url을 설정할 수 있습니다.\n    </div>\n    <div class=\"col s4 m2\">\n      <img src=\"assets/images/angular.jpeg\" width=\"100%\" /> 유지보수하는데 명료하도록 개발 할 수 있습니다. Angular2는 정말 훌륭한 프레임워크입니다!!!\n    </div>\n    <div class=\"col s4 m2\">\n      <img src=\"assets/images/spring.png\" width=\"55%\" />\n      <br> JSP / Spring 많이 다뤄보지는 않았지만 이를 통해 MVC 패턴을 이해하고 , 웹에 대한 전반적인 지식을 키울 수 있었습니다.\n    </div>\n    <div class=\"col s4 m2\">\n      <img src=\"assets/images/git_logo.png\" width=\"55%\" />\n      <br> GIT을 통해 버전관리를 할 수 있습니다. <br>\n    </div>\n    <div class=\"col s4 m2\">\n      <img src=\"assets/images/Express-2.jpg\" width=\"100%\" />\n      <br> MEAN 스택을 갖추기 위해 공부중에 있습니다 <br>\n    </div>\n    <div class=\"col s0 m1\"></div>\n  </div>\n  <br>\n</div>\n\n\n\n<div id=\"portfolio\" class=\"block z-depth-4  black-text scrollspy \">\n\n\n  <div class=\"row\">\n    <h3 class=\"center blue-grey-text text-lighten-1\">PortFolio </h3>\n    <br>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul id=\"portfolio-tabs\" class=\"tabs tabs-fixed-width z-depth-4 blue-grey lighten-5  \">\n          <li class=\" tab col s3\"><a style=\"font-size: 1.1em\" class=\"active black-text\" href=\"#test-swipe-3\">3ndEditor(웹서칭 도구)</a></li>\n          <li class=\" tab col s3\"><a style=\"font-size: 1.1em\" class=\"black-text\" href=\"#test-swipe-1\">JAVA 학습 프로젝트</a></li>\n          <li class=\" tab col s3\"><a style=\"font-size: 1.1em\" class=\"black-text\" href=\"#test-swipe-2\">JSP/Servlet 학습 프로젝트 </a></li>\n        </ul>\n\n\n\n\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div id=\"test-swipe-3\" style=\"height: 150%\" class=\"col s12\">\n        <br>\n\n        <div class=\"center-align col s4 m3 l4\">\n          <img class=\"z-depth-4 materialboxed\" src=\"assets/images/3ndeditor.png\" />\n\n        </div>\n\n        <div class=\"col s12 m9 l8\">\n          <table class=\"\">\n            <tbody>\n              <tr>\n                <td>주제 선정 </td>\n                <td>\n                  웹 브라우저에서 동작하는 간편하고 편리한 에디터\n                </td>\n              </tr>\n              <tr>\n                <td>개발 목적</td>\n                <td>\n                  보다 쉽고 빠르게 정보를 수집하고 작성하고 공유하기 위해서 개발시작\n                </td>\n              </tr>\n              <tr>\n                <td>개발 내용</td>\n                <td>Angular2 / Spring boot로 개발, chorme extension 배포 </td>\n              </tr>\n              <tr>\n                <td>개발 기간</td>\n                <td>2017.1 - 진행중\n                </td>\n              </tr>\n              <tr>\n                <td>GitHub</td>\n                <td><a target=\"_blank\" href=\"https://github.com/3ndEditor/chrome_extension\">github 방문</a></td>\n              </tr>\n              <tr>\n                <td>Chrome AppStore</td>\n                <td><a target=\"_blank\" href=\"https://chrome.google.com/webstore/detail/3ndeditorextension/npdpkokgkmpdipdlonnnhncejdgbchld/related?hl=ko\">웹스토어 방문하기</a></td>\n              </tr>\n\n              <tr>\n                <td>맡은 역할</td>\n                <td>주제선정 및 기획, 에디터 디자인, 화면분할, 에디터 기능 구현, Google API</td>\n              </tr>\n              <tr>\n                <td></td>\n                <td>\n                  <a class=\"grey darken-4 waves-effect waves-light btn\" href=\"#modal3nd\">자세히</a>\n\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n\n\n      <div id=\"test-swipe-1\" style=\"height: 150%\" class=\"col s12\">\n        <br>\n        <div class=\"row\">\n          <div class=\"col s4 m3 l4\">\n            <img class=\"z-depth-4 materialboxed\" src=\"assets/images/mulcamtok.png\" />\n          </div>\n          <div class=\"col s12 m9 l8 \">\n            <table>\n              <tbody>\n                <tr>\n                  <td>주제 선정 </td>\n                  <td>카카오톡을 참고로하여 JAVA,SQL 기본 학습\n                  </td>\n                </tr>\n                <tr>\n                  <td>개발 내용</td>\n                  <td> JAVA SWING으로 UI 구현, 스레드, Socket을 이용해 1:1 / 1:N 채팅 기능 구현 </td>\n                </tr>\n                <tr>\n                  <td>개발 기간</td>\n                  <td>2016. 09 - 2016. 10\n                  </td>\n                </tr>\n                <tr>\n                  <td>GitHub</td>\n                  <td><a target=\"_blank\" href=\"https://github.com/cicada0014/MulCamTalk_New\">github 방문</a></td>\n                </tr>\n                <tr>\n                  <td>맡은 역할</td>\n                  <td>주제선정 & 회원 가입 및 로그인 , 메세지 확인 여부에 따른 알림기능, 서버 브로드캐스트 </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <a class=\"grey darken-4 waves-effect waves-light btn\" href=\"#modal1\">자세히</a>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n      </div>\n      <div id=\"test-swipe-2\" class=\"col s12\" style=\"height: 150%\">\n        <br>\n        <div class=\"center col s4 m3 l4 \">\n          <img class=\"z-depth-4\" src=\"assets/images/mulcam2.png\" />\n        </div>\n        <div class=\"col s12 m9 l8\">\n          <table>\n            <tbody>\n              <tr>\n                <td>주제 선정 </td>\n                <td>배달의 민족 웹사이트를 참고한 JSP&Servlet 기본학습\n                </td>\n              </tr>\n              <tr>\n                <td>개발 목적</td>\n                <td>Web Front 기술 습득 / AJAX 통신 경험 / Spring MVC 구조 이해\n                </td>\n              </tr>\n              <tr>\n                <td>개발 내용</td>\n                <td>네이버 지도 API를 이용하여 위치기반 맛집 검색 서비스</td>\n              </tr>\n              <tr>\n                <td>개발 기간</td>\n                <td>2016. 10 - 2016. 11\n                </td>\n              </tr>\n              <tr>\n                <td>GitHub</td>\n                <td><a target=\"_blank\" href=\"https://github.com/mulcamdelivery/delivery_2ndproject\">https://github.com/mulcamdelivery/delivery_2ndproject</a></td>\n              </tr>\n              <tr>\n                <td>맡은 역할</td>\n                <td>주제선정 및 기획 & 지도연동, category 및 식당 리스트 DB 담당 </td>\n              </tr>\n              <tr>\n                <td></td>\n                <td>\n                  <a class=\"grey darken-4 waves-effect waves-light btn\" href=\"#modal2\">자세히</a>\n\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n<div id=\"vision\" class=\"block  black-text scrollspy \">\n  <div class=\"row\">\n    <h3 class=\"center blue-grey-text text-lighten-1\">Vision </h3>\n    <br>\n    <div class=\"row\">\n      <div class=\"col s12 m6\">\n        <div class=\"row\">\n          <div class=\"col s12 \">\n            <div class=\"card-panel teal\">\n              <span class=\"white-text\">\n                <h5>어떻게 살아가고 싶은가</h5>\n                이 고민은 시작한지 그리 오래되지 않았습니다. 그만큼 주위 사람들에게 사랑을 받으며 걱정없이 살아왔습니다. <br>\n                사람을 만나고, 헤어지고, 일을 해서 돈도 벌어보는 등 작지만 소중한 사회 경험들을 하면서 <br>\n                행복에 대한 의문을 가졌습니다. 나는 어떤 때 행복한가.<br>\n                행복에 대한 답을 완벽히 찾지는 못했지만 어떻게 살아야 할지는 알겠더군요.<br>\n                하고싶은거 하면서 어제보다 나은 '나'로 성장하고, 내가 여유가 되었을때 주위 사람들에게 나누면서 살고 싶습니다.\n          </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s12 \">\n            <div class=\"card-panel teal\">\n              <span class=\"white-text\">\n                <h5>어떻게 공부를 할 것인지</h5>\n                <p>\n                      웹과 Javascript의 미래가 밝다고 생각해서, 지금은 Javascript 위주로 공부를 하고 있습니다. <br>\n                      Node.js Express.js 을 연마해서 MEAN 스택을 먼저 만들어 놓고 싶습니다.<br>\n                      요즘 관심이 가는 electron, webassembly 라는 기술도 흥미가 있습니다. <br>\n                      PWA,AMP 도 아직 제대로 구현해보진 않았지만 제가 하고 있는 프로젝트에도 적용해볼 생각입니다.<br>\n                      <br><br>\n                      제가 프로그래밍을 배우면서 가장 기쁘게 생각하는건 배울게 너무 많은 것입니다. <br>\n                      웹 기술뿐만 아니라, 머신러닝, 빅데이터같은 굵직한 기술들도 궁금하고 아두이노 같이 직접 기기도 조작해보고 싶습니다. <br>\n                      하지만 너무 많기 때문에, 제가 가지지 못한 부분을 채울 수 있는 여러 사람들을 만나고 싶습니다.<br>\n                      함께 알아나갈 때 가장 많이 배운다고 믿습니다.<br>\n                      <br><br>\n                      기본적으로 관련 전공을 하지 않았기 때문에, 기초가 부족하다고 매번 느끼고 있습니다.<br>\n                      감사하게도 요즘에는 인터넷으로 배울 수 있는 강의들이 많다는 것을 알게되었습니다. <br>\n                      알고리즘이나 자료구조, OS같은 내용들이 책이나 블로그를 통해 필요한 정보를 얻으려 하고 있고,<br>\n                      그외 부족한 부분은 Youtube 나 MOOC 강의를 통해 배우고 있습니다.<br>\n                      <br><br>\n                      대다수의 자료나 강의가 영어 위주로 되어있기 때문에 영어 공부도 다시 시작하고 있습니다.<br>\n                      살면서 이렇게 영어 실력에 대한 갈망이 없었는데, 개발공부를 하게되면서 그 필요성을 절실히 느끼게 되었고 <br>\n                      필요성이 있다보니 공부또한 재미가 있습니다. <br>\n                      영어 강의를 알아듣기 위해서 리스닝과 회화 위주로 팟캐스트를 들으며 공부를 하고 있습니다. <br>\n                </p>\n          </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col s12 m6\">\n        <div class=\"row\">\n          <div class=\"col s12 \">\n            <div class=\"card-panel teal\">\n              <span class=\"white-text\">\n                <h5>공백</h5>\n                <p></p>\n          </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s12 \">\n            <div class=\"card-panel teal\">\n              <span class=\"white-text\">\n                <h5>공백</h5>\n                <p></p>\n          </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n</div>\n\n<div id=\"contact\" class=\"block blue-grey darken-4 black-text  scrollspy \">\n  <div class=\"row\">\n    <h3 class=\"center white-text \">Contact </h3>\n    <br>\n    <div class=\"row center\">\n      <div class=\"col s2\"></div>\n      <div class=\"col s8\">\n        <div class=\"card white  z-depth-5\">\n          <div class=\"card-content black-text\">\n            <span class=\"card-title\"><h5>편하게 연락하세요!</h5></span>\n            <p>\n              E-mail : cicada0014@gmail.com<br>\n              <br>\n              <br>\n              <br>\n              <br> 이야기를 해도 좋습니다. 성장과 가치가 있는 일을 함께 이뤄나가고 싶습니다.\n\n\n\n            </p>\n            <br><br><br><br><br><br>\n            <a target=\"_blank\" href=\"https://github.com/cicada0014\" class=\"black-text\"> <i class=\"fa fa-github large\" aria-hidden=\"true\"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n            <a target=\"_blank\" href=\"https://www.facebook.com/cicada0014\" class=\"black-text\"> <i class=\"fa fa-facebook-square large\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a>\n            <a target=\"_blank\" href=\"https://studystorage.blogspot.kr/\" style=\"font-size: 4em\" class=\"black-text\"> Blog  </a>\n          </div>\n          <div class=\"card-action\">\n            <a href=\"#index\">맨 위로</a>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col s2\"></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <br><br><br><br><br><br>\n  </div>\n</div>\n\n\n\n\n\n<!--modal content-->\n<div id=\"modal3nd\" class=\"modal \">\n  <div class=\"modal-content\">\n    <ul id=\"tabs-swipe-modal\" class=\"tabs\">\n      <li class=\"tab col s3\"><a href=\"#modal1-content1\">#1</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content2\">#2</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content3\">#3</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content4\">#4</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content5\">#5</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content6\">#6</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content7\">#7</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal1-content8\">#8</a></li>\n    </ul>\n    <div id=\"modal1-content1\" class=\"col s12\">\n      <br>\n      <h5>어떻게 기획하였나요?</h5>\n      <p>\n        최순실 게이트 청문회에서 네티즌들이 활약하는 것을 보았습니다.\n        <br> 거기서 아이디어를 얻어 처음에는 네티즌 특별수사대(가제)라는 웹 사이트를 만들어 보는 것으로 시작을 했습니다. <br> 하지만 정치적인 이슈이고, 현재 지식으로는 구현이 어렵다고 판단되어 <br>        네티즌들이 웹에서 정보를 더 쉽고 빠르게 수집, 가공할 수 있도록 하면 어떨까라는 생각으로 다시 기획을 했습니다.\n        <br><br> 설계 및 협업 툴 : draw.io / slack / trello / teamgantt / beecanvas<br>\n      </p>\n      링크를 클릭하시면 설계 작업 내용을 보실수 있어요! <br> 링크로 들어가시면 하단에서 페이지를 넘길 수 있습니다. <br>\n      <br>\n      <a target=\"_blank\" href=\"https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=3ndEditor_UI.html#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D0B7-YfjO_Kl6OQXJjdl8zTURVbUU%26export%3Ddownload\">\n      초기 UI 및 기능 설계도 </a> <br><br>\n      <a target=\"_blank\" href=\"https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=3ndEditor_SW_Structure.html#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D0B7-YfjO_Kl6OYzNMQWc0cVpSVFk%26export%3Ddownload\">\n      Data flow & Structure </a> <br><br>\n      <a target=\"_blank\" href=\"https://beecanvas.com/s/9e8ef7\">\n      경쟁 상품 분석  </a> <br><br>\n\n\n\n    </div>\n    <div id=\"modal1-content2\" class=\"col s12 \">\n      <div class=\"row\">\n        <img class=\"materialboxed col s12 m9\" src=\"assets/images/chromeopen.gif\">\n        <p class=\"col s12 m3\">\n          크롬 확장도구로 설치해서 이용할 수 있습니다.\n        </p>\n      </div>\n    </div>\n    <div id=\"modal1-content3\" class=\"col s12  \">\n      <div class=\"row\">\n        <img class=\"materialboxed col s12 m9\" src=\"assets/images/inputbrowser.gif\">\n        <p class=\"col s12 m3\">\n          다른 사이트를 볼 수 있는 화면을 넣을 수 있습니다.\n        </p>\n      </div>\n    </div>\n    <div id=\"modal1-content4\" class=\"col s12 \">\n      <div class=\"row\">\n        <img class=\"materialboxed col s12 m9\" src=\"assets/images/editing.gif\">\n        <p class=\"col s12 m3\">\n          Medium editor 형식의 에디터를 이용해 편집을 할수 있습니다.\n        </p>\n      </div>\n    </div>\n    <div id=\"modal1-content5\" class=\"col s12  \">\n      <div class=\"row\">\n        <img class=\"materialboxed col s12 m9\" src=\"assets/images/option.gif\">\n        <p class=\"col s12 m3\">\n          로그인 / 풀스크린 / 상단바 올림 등 다양한 편의기능을 추가했습니다.\n        </p>\n      </div>\n    </div>\n    <div id=\"modal1-content6\" class=\"col s12 \">\n      <div class=\"row\">\n        <img class=\"materialboxed col s12 m9\" src=\"assets/images/driveuse.gif\">\n        <p class=\"col s12 m3\">\n          구글 드라이브와 연동이 되어 파일을 생성/ 저장 / 불러오기 를 할 수 있습니다.\n        </p>\n      </div>\n    </div>\n    <div id=\"modal1-content7\" class=\"col s12 \">\n      <div class=\"row\">\n        <img class=\"materialboxed col s12 m9\" src=\"assets/images/setting.gif\">\n        <p class=\"col s12 m3\">\n          단축키를 변경할 수 있는 등 개인화 할 수 있는 설정 페이지가 있습니다.\n        </p>\n      </div>\n    </div>\n    <div id=\"modal1-content8\" class=\"col s12 \">\n      <div class=\"row\">\n        <!--<img class=\" col s9\"  src=\"assets/images/setting.gif\">-->\n        <p class=\"col s12\">\n          아직 구현해야할 기능도 많지만 꾸준히 작업해서 많은 사람들이 이용할 수 있게끔 하고 싶습니다 <br> 나아가 크롬말고도 다른 브라우저의 확장프로그램으로 작성해나가고 싶습니다.<br> 글을 작성하기 위해선\n          개요를 짜고, 글 소재를 모아야하는데 그것을 더 쉽게 만들고 싶습니다.\n        </p>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Close</a>\n  </div>\n</div>\n<!---->\n\n\n\n\n\n<!--modal content-->\n<div id=\"modal2\" class=\"modal\">\n  <div class=\"modal-content\">\n    <ul id=\"tabs-swipe-modal\" class=\"tabs\">\n      <li class=\"tab col s3\"><a href=\"#modal2-content1\">#1</a></li>\n      <li class=\"tab col s3\"><a class=\"active\" href=\"#modal2-content2\"> #2</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal2-content3\">#3</a></li>\n    </ul>\n    <div id=\"modal2-content1\" class=\"col s12 blue\">#1</div>\n    <div id=\"modal2-content2\" class=\"col s12 red\">#2</div>\n    <div id=\"modal2-content3\" class=\"col s12 green\">#3</div>\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>\n  </div>\n</div>\n<!---->\n<!--modal content-->\n<div id=\"modal3\" class=\"modal\">\n  <div class=\"modal-content\">\n    <ul id=\"tabs-swipe-modal\" class=\"tabs\">\n      <li class=\"tab col s3\"><a href=\"#modal3-content1\">#1</a></li>\n      <li class=\"tab col s3\"><a class=\"active\" href=\"#modal3-content2\"> #2</a></li>\n      <li class=\"tab col s3\"><a href=\"#modal3-content3\">#3</a></li>\n    </ul>\n    <div id=\"modal3-content1\" class=\"col s12 blue\">#1</div>\n    <div id=\"modal3-content2\" class=\"col s12 red\">#2</div>\n    <div id=\"modal3-content3\" class=\"col s12 green\">#3</div>\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>\n  </div>\n</div>\n<!---->"

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(297);


/***/ })

},[508]);
//# sourceMappingURL=main.bundle.js.map