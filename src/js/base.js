import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB918TSyrzMXwywWuPDFPDcSfdmGYpgtzw",
  authDomain: "idm364finalcalluori.firebaseapp.com",
  databaseURL: "https://idm364finalcalluori.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
