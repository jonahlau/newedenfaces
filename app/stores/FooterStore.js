import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
  constructor() {
    //bindActions is a magic method from the Alt library that binds actions to a store
    //all actions defined in the footeractions class will have a corresponding handler with a 'on' prefixed
    //in this case, getTopCharacterSuccess has a corresponding 'onGetTopCharacterSuccess' method handling the success case
    this.bindActions(FooterActions);
    this.characters = [];
  }

  onGetTopCharactersSuccess(data) {
    this.characters = data.slice(0, 5);
  }

  onGetTopCharactersFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(FooterStore);