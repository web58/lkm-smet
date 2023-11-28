import {
  isEscKey,
  getUID
} from './utils.js';

const initContextMenus = () => {
  const menuNodes = document.querySelectorAll( '[data-context-menu' );
  const initMenu = ( menuNode ) => {
    const NAME_MENU = menuNode.dataset.contextMenu ? menuNode.dataset.contextMenu : menuNode.dataset.contextMenu = getUID();

    const menuTriggerNode = menuNode.querySelector( '[data-trigger]' );
    const menuListNode = menuNode.querySelector( '[data-list]' );

    const onDocumentClick = ( evt ) => {
      if ( !evt.target.closest( `[data-context-menu="${NAME_MENU}"]` ) && menuNode.classList.contains( 'is-expand' ) ) {
        closeMenu();
      }
    };

    const onEscKeydown = ( evt ) => {
      if ( isEscKey( evt ) && menuNode.classList.contains( 'is-expand' ) ) {
        closeMenu();
      }
    };

    function openMenu() {
      menuNode.classList.add( 'is-expand' );
      document.addEventListener( 'click', onDocumentClick );
      document.addEventListener( 'keydown', onEscKeydown );
    }

    function closeMenu() {
      menuNode.classList.remove( 'is-expand' );
      document.removeEventListener( 'click', onDocumentClick );
      document.removeEventListener( 'keydown', onEscKeydown );
    }

    if ( !menuTriggerNode || !menuListNode ) return;

    menuTriggerNode.addEventListener( 'click', ( evt ) => {
      evt.preventDefault();
      !menuNode.classList.contains( 'is-expand' ) ? openMenu() : closeMenu();
    } );
  };

  menuNodes.forEach( initMenu );
};

export {
  initContextMenus
};
