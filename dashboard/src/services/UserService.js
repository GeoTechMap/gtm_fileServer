import Keycloak from "keycloak-js";


const keycloakConfig = {
  url: `${process.env.REACT_APP_AUTH_SERVER_URL}/auth/`, 
  realm: 'GTM', 
  clientId: 'gtm_app',
  sslRequired: "none",
  credentials: {
  "secret": "87ebd86a-cce7-41bb-a902-1e1fc63046be"
  }
}

// "realm": "GTM",
// "auth-server-url": "http://ec2-3-136-108-222.us-east-2.compute.amazonaws.com:8080/auth/",
// "ssl-required": "none",
// "resource": "gtm_app",
// "public-client": true,
// "verify-token-audience": true,
// "use-resource-role-mappings": true,
// "confidential-port": 0,
// "credentials": {
//   "secret": "87ebd86a-cce7-41bb-a902-1e1fc63046be"
// }
// const _kc = new Keycloak('/keycloak.json');
const _kc = new Keycloak(keycloakConfig);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: 'login-required',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then((authenticated) => {
      // if (authenticated) {
      onAuthenticatedCallback();
      // } else {
      //   doLogin();
      // }
    })
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const getConnectedUser = () =>fetch(`${process.env.REACT_APP_API_URL}/api/utilisateurs/search?username=${getUsername()}`)
  .then((response) => response.json())
  .catch((err) => console.log(err))
  // .then((json)=> user=json)


const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  getConnectedUser,
};

export default UserService;
