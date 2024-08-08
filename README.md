
## Overview
This project is aimed at designing a high-level architecture for a YouTube-like platform, focusing on the critical backend services required for video upload, transcoding, metadata storage, and adaptive video streaming.
## Key Responsibilities
## 1. Video Upload and Transcoding Workflow

- AWS S3 for Storage: Implemented a multipart upload process for large video files, ensuring efficient data handling and integrity during uploads.

- Kafka for Communication: Utilized Kafka to facilitate communication between the upload service and the transcoder service, ensuring smooth data flow and asynchronous processing.

- FFmpeg for Transcoding: Integrated FFmpeg for transcoding videos into multiple resolutions (320x180, 854x480, 1280x720) to enable adaptive streaming.


## 2. Metadata Management
- Prisma ORM with PostgreSQL: Used Prisma ORM to interact with a PostgreSQL database for storing video metadata, including details like author, description, and title.
- Efficient Data Handling: Implemented recursive logic for storing and managing metadata, ensuring optimal data retrieval for the watch service.
## 3. Adaptive Bitrate Streaming

- HLS Integration: Developed adaptive bitrate streaming by generating a master playlist file that holds URLs for all video resolutions. This enables smooth video playback by adjusting the video quality based on the user's network conditions.
## Project Highlights

- End-to-End Workflow: From video upload to transcoding and final streaming, the project covers the entire flow required for a YouTube-like platform.
- Efficient Storage and Retrieval: Leveraged AWS S3 and PostgreSQL to ensure efficient storage and retrieval of both video files and metadata.
- Scalable Design: The architecture is designed to be scalable, allowing the system to handle a large number of users and video uploads simultaneously.
## Future Work

- Enhance Metadata Management: Improve the way metadata is indexed and retrieved to support advanced search and filtering capabilities.
- Implement Caching: Add caching mechanisms to improve performance for frequently accessed videos.
