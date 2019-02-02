import firebase from '../Firebase';

class Global {
    constructor() {

      this.boardCollection = firebase.firestore().collection('boards');
      this.authentication = firebase.auth();
    }
  }
  
  export default (new Global());