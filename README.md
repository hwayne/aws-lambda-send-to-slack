## aws-lambda-send-to-slack

Email alerts are ignored, SMS alerts are weirdly intrusive, face-to-face alerts require eye contact. Since all of the cool kids are on Slack now, let's send our alerts to their Slack channels! This lambda function takes messages from an AWS SNS queue and forwards them to the channels of your choice.

* Get spam from Data Pipelines
### Setup

1. Set up an [incoming webhook](https://api.slack.com/incoming-webhooks) on your Slack team. Note the webhook url.
1. Create an SNS topic on AWS.
2. Create a new Lambda on AWS. Select "Node.js" as the runtime with a basic execution role. Copy the code from [lambda.js](lambda.js), replacing "YOUR_SLACK_PATH_HERE" with your webhook url.
3. Add your new SNS topic as an event source.

### Usage

To post to a channel, publish an SNS message with the subject being the channel name (with the # and everything) (or user (with @)) and the message being the contents of the post.
