const baseURL = `http://localhost:8080`;
module.exports = {
  // The secret for the encryption of the jsonwebtoken
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: port,
  // The credentials and information for OAuth2
  oauth2Credentials: {
    client_id: "190215113761-6iseehf8d3rps674ginh35nprb5cq0b6.apps.googleusercontent.com",
    project_id: "tindart-324103", // The name of your project
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "x2fbnsWpiHEgs92NAHC8DKGx",
    redirect_uris: [
      "http://localhost:8080/auth"
    ],
    scopes: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'openid'
    ]
  }
};