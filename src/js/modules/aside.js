const HIDDEN_MENU_TEXT = 'Показать меню';
const SHOW_MENU_TEXT = 'Скрыть меню';
const ACTIVE_CLASS = 'is-collapsed';
const asideNode = document.querySelector( '.site-aside' );
const asideToggler = document.querySelector( '.site-aside__toggler' );

const hideAsidePanel = () => {
  asideNode.classList.add( ACTIVE_CLASS );
  asideToggler.setAttribute( 'title', HIDDEN_MENU_TEXT );
  asideToggler.setAttribute( 'aria-label', HIDDEN_MENU_TEXT );
};

const showAsidePanel = () => {
  asideNode.classList.remove( ACTIVE_CLASS );
  asideToggler.setAttribute( 'title', SHOW_MENU_TEXT );
  asideToggler.setAttribute( 'aria-label', SHOW_MENU_TEXT );
};

const togglePanel = () => {
  !asideNode.classList.contains( ACTIVE_CLASS ) ? hideAsidePanel() : showAsidePanel();
};

const initAsideMenu = () => {
  if ( !asideNode || !asideToggler ) return;

  asideToggler.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    togglePanel();
  } );
};

export {
  initAsideMenu
};
