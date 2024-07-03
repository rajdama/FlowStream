const dotenv = require("dotenv");
const KafkaConfig = require("./kafka/kafka.js");
const s3ToS3 = require("./hls/s3Tos3.js");

dotenv.config();

const kafkaconfig = new KafkaConfig();
kafkaconfig.consume("transcode", (key) => {
  console.log(key);
  s3ToS3(key);
});
