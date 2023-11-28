import {
  iosVhFix,
} from './modules/utils.js';

import {
  initAsideMenu
} from './modules/aside.js';

import {
  initContextMenus,
} from './modules/context-menu.js';

import {
  initModals,
} from './modules/modals.js';

import {
  initCheckAllFilters,
} from './modules/registry-filters.js';

import {
  initTabs,
} from './modules/tabs.js';

document.addEventListener( 'DOMContentLoaded', () => {
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  iosVhFix();
  initContextMenus();
  initModals();
  initAsideMenu();

  window.addEventListener( 'load', () => {
    // в load следует добавить скрипты, не участвующие в работе первого экрана
    initCheckAllFilters();
    initTabs();
  } );
} );
