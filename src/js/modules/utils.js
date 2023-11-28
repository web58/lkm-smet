const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const getTabs = ( name, options = null ) => {
  if ( !name || !document.querySelector( `[data-tabs="${name}"]` ) ) return;
  return new JustTabs( name, options );
};

const getUID = () => `id${Math.random().toString(16).slice(2)}`;

export {
  iosVhFix,
  isEscKey,
  getTabs,
  getUID
};
