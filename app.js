// const init = require('./db.init.js')
const server = require('./server.js')

var SibApiV3Sdk = require('sib-api-v3-sdk');


var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "From Bray", "email":"mahefaran331@gmail.com"};
emailCampaigns.type = "classic";
data = {
    htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',
    recipients: {"email":"mahefaran48@gmail.com"},
    scheduledAt: '2018-01-01 00:00:01'
}
apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
console.log('API called successfully. Returned data: ' + data);
}, function(error) {
// console.error(error);
});