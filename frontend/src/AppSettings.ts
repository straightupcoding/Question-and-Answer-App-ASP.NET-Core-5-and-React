export const server = "https://localhost:44313";

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: "dev-4kwg2t1b.us.auth0.com",
  client_id: "At2Dt9Oh7P1DuWmb1XRJqc5kVlnI7pgo",
  redirect_uri: window.location.origin + "/signin-callback",
  scope: "openid profile QandAAPI email",
  audience: "https://qanda",
};
