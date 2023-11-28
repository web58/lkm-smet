import {
  getTabs,
} from './utils.js';

export const initTabs = () => {
  getTabs( 'notifications' );
  getTabs( 'history' );
  getTabs( 'create-programm' );
  getTabs( 'edit-programm' );
  getTabs( 'create-contract' );
  getTabs( 'edit-contract' );
  getTabs( 'edit-organization-tabs' );
};
