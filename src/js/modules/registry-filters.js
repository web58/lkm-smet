const filtersCheckAllNode = document.querySelector( '.registry-filters__check-all button' );
const filterItems = document.querySelectorAll( '.registry-filters__item input[type="checkbox"]' );

const initCheckAllFilters = () => {
  if ( !filtersCheckAllNode ) return;
  const wrapperTarget = filtersCheckAllNode.closest( '.registry-filters__check-all' );
  const checkState = () => {
    Array.from( filterItems ).every( item => item.checked ) ?
      wrapperTarget.classList.add( 'registry-filters__check-all--checked' ) :
      wrapperTarget.classList.remove( 'registry-filters__check-all--checked' );
  };

  checkState();

  for ( const filter of filterItems ) {
    filter.addEventListener( 'change', checkState );
  }

  filtersCheckAllNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    wrapperTarget.classList.toggle( 'registry-filters__check-all--checked' );
    if ( wrapperTarget.classList.contains( 'registry-filters__check-all--checked' ) ) {
      for ( const filter of filterItems ) {
        filter.checked = true;
      }
    } else {
      for ( const filter of filterItems ) {
        filter.checked = false;
      }
    }
  } );
};

export {
  initCheckAllFilters
};
