const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addVideoDetailsToDB(title, description, author, url) {
  const videoData = await prisma.videoData.create({
    data: {
      title: title,
      description: description,
      author: author,
      url: url,
    },
  });
  console.log(videoData);
}

module.exports = addVideoDetailsToDB;
