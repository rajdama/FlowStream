const { PrismaClient } = require("@prisma/client");

const getAllVideos = async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const allData = await prisma.$queryRaw`SELECT * FROM "VideoData"`;
    return res.status(200).send(allData);
  } catch (error) {
    console.log("Error fetching data:", error);
    return res.status(400).send();
  }
};

module.exports = getAllVideos;
