import {
  isEscKey
} from './utils.js';

export const initModals = () => {
  const modalSelector = '.modal';
  const innerModalSelector = `${modalSelector}__inner`;
  const modalNodes = document.querySelectorAll( modalSelector );

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && Array.from( modalNodes ).some( ( node ) => node.getAttribute( 'aria-hidden', 'false' ) ) ) {
      closeAll( modalNodes );
      return;
    }
  };

  function closeAll( nodes ) {
    document.documentElement.classList.remove( 'is-block-scroll' );
    for ( const node of nodes ) {
      node.setAttribute( 'aria-hidden', 'true' );
    }

    document.removeEventListener( 'keydown', onEscKeydown );
  }

  if ( modalNodes.length ) {
    document.addEventListener( 'click', ( evt ) => {
      if ( evt.target.closest( '[data-modal]' ) ) {
        const currentTriggerNode = evt.target.closest( '[data-modal]' );
        const currentModalSelector = currentTriggerNode.dataset.modal;
        const currentModalNode = document.querySelector( currentModalSelector );

        if ( !currentModalNode ) return;

        closeAll( modalNodes );
        document.documentElement.classList.add( 'is-block-scroll' );
        currentModalNode.setAttribute( 'aria-hidden', 'false' );

        document.addEventListener( 'keydown', onEscKeydown );
        return;
      }

      if ( evt.target.closest( modalSelector ) && !evt.target.closest( innerModalSelector ) ) {
        closeAll( modalNodes );
        return;
      }

      if ( evt.target.closest( '[data-close-modal]' ) ) {
        closeAll( modalNodes );
        return;
      }
    } );
  }
};
