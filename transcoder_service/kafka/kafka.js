const { Kafka } = require("kafkajs");
const fs = require("fs");
const path = require("path");

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: "youtube uploader",
      brokers: ["kafka-31b2b67f-vitbhopal-45a1.c.aivencloud.com:19383"],
      ssl: {
        ca: [
          fs.readFileSync(
            path.resolve("C:/youtube-hhld/transcoder_service/ca.pem"),
            "utf-8"
          ),
        ],
      },
      sasl: {
        username: "avnadmin",
        password: "AVNS_lJLx7X1WNN5aMz6UG5T",
        mechanism: "plain",
      },
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: "youtube-uploader" });
  }

  async produce(topic, messages) {
    try {
      const result = await this.producer.connect();
      console.log("kafka connected... : ", result);
      await this.producer.send({
        topic: topic,
        messages: messages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.producer.disconnect();
    }
  }

  async consume(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic: topic, fromBeginning: true });
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const value = message.value.toString();
          callback(value);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = KafkaConfig;
