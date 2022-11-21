'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">s3-inno documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' : 'data-target="#xs-controllers-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' :
                                            'id="xs-controllers-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' : 'data-target="#xs-injectables-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' :
                                        'id="xs-injectables-links-module-AppModule-5892a1a35dfab8ad9fe4354910e295350e445cd3a2e4cb9a0b7e4cd89d8a8c63f5d077e27a2cf26640b683a9d2463eadd52c848d5fb7432dd884db354a5d476c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceInformationModule.html" data-type="entity-link" >DeviceInformationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' : 'data-target="#xs-controllers-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' :
                                            'id="xs-controllers-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' }>
                                            <li class="link">
                                                <a href="controllers/DeviceInformationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceInformationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' : 'data-target="#xs-injectables-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' :
                                        'id="xs-injectables-links-module-DeviceInformationModule-1cca1886e5be73bbe8f5c7c50e1f820a26059604d8b8738b717e0ee57d190c8acdf86a8cdb58e68842c672bac42516575df55ba160da297a4e92349df479a3a6"' }>
                                        <li class="link">
                                            <a href="injectables/DeviceInformationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceInformationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DeviceInformationController.html" data-type="entity-link" >DeviceInformationController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/DeviceInformation.html" data-type="entity-link" >DeviceInformation</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateDeviceInformationDto.html" data-type="entity-link" >CreateDeviceInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeviceDataTypeA.html" data-type="entity-link" >DeviceDataTypeA</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeviceDataTypeB.html" data-type="entity-link" >DeviceDataTypeB</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExceptionLogger.html" data-type="entity-link" >ExceptionLogger</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceInformationService.html" data-type="entity-link" >DeviceInformationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DeviceDataTypeA.html" data-type="entity-link" >DeviceDataTypeA</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeviceDataTypeB.html" data-type="entity-link" >DeviceDataTypeB</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});