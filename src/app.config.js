const clientId = '0oa1oho8fhI0qyMRJ357';
const orgURL = 'https://dev-345588.okta.com';

export default {
  url: orgURL,
  issuer: orgURL + '/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: clientId
};