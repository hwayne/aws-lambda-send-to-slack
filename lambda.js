var url = require('url');
var https = require('https');
var util = require('util');

var POST_OPTIONS = {
    hostname: 'hooks.slack.com',
    path: 'YOUR_SLACK_PATH_HERE',
    method: 'POST',
  };

exports.handler = (event, context, callback) => {
    const message = {
        channel: event.Records[0].Sns.Subject || 'YOUR_DEFAULT_CHANNEL_HERE',
        text: event.Records[0].Sns.Message
    };
    console.log('From SNS:', message);
    var r = https.request(POST_OPTIONS, function(res) {
                        res.setEncoding('utf8');
                        res.on('data', function (data) {
                            context.succeed("Message Sent: " + data);
                     });
    }).on("error", function(e) {context.fail("Failed: " + e);} );
    r.write(util.format("%j", message));
    r.end();
};
