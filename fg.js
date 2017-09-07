https://www.facebook.com/v2.9/dialog/oauth?
  client_id={app-id}
  &redirect_uri={redirect-uri}
  <script>
  var requestUri = new Windows.Foundation.Uri(
  "https://www.facebook.com/v2.9/dialog/oauth?
    client_id={app-id}
    &display=popup
    &response_type=token
    &redirect_uri=ms-app://{package-security-identifier}");

Windows.Security.Authentication.Web.WebAuthenticationBroker.authenticateAsync(
  options,
  requestUri)
  .done(function (result) {
    // Handle the response from the Login Dialog
  }
);
  </script>
  YOUR_REDIRECT_URI?
 error_reason=user_denied
 &error=access_denied
 &error_description=The+user+denied+your+request.
 GET https://graph.facebook.com/v2.9/oauth/access_token?
   client_id={app-id}
   &redirect_uri={redirect-uri}
   &client_secret={app-secret}
   &code={code-parameter}
   {
  "access_token": {access-token}, 
  "token_type": {type},
  "expires_in":  {seconds-til-expiration}
}
GET graph.facebook.com/debug_token?
     input_token={token-to-inspect}
     &access_token={app-token-or-admin-token}