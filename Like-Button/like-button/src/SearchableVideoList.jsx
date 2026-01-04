import React from 'react';
// Importing your existing component
import LikeButton from './LikeButton'; 

const VideoList = () => {
  // Data simulating the content in your screenshot
  const videos = [
    {
      id: 1,
      title: "React: The Documentary",
      subtitle: "The origin story of React",
      thumbnail: "https://i3.ytimg.com/vi/8pDqJVdNa44/maxresdefault.jpg", // Placeholder for actual image
    },
    {
      id: 2,
      title: "Rethinking Best Practices",
      subtitle: "Pete Hunt (2013)",
      thumbnail: "https://i3.ytimg.com/vi/x7cQ3mrcKaY/maxresdefault.jpg", // Placeholder for actual image
    },
    {
      id: 3,
      title: "learn Javascript by Apna Collage",
      subtitle: "By Shradha khapara",
      thumbnail: "https://i.ytimg.com/vi/ajdRvxDWH4w/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLAeOhQXpCPK8lTE7tX5mqrBwBrN1Q", // Placeholder for actual image
    }
  ];

  return (
    <div className="video-list-container">
      {/* Header */}
      <h2 className="header-title">{videos.length} Videos</h2>

      {/* List */}
      <div className="list-wrapper">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            
            {/* 1. Thumbnail Image */}
            <div className="thumbnail-wrapper">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="thumbnail-img" 
              />
            </div>

            {/* 2. Text Content */}
            <div className="text-content">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-subtitle">{video.subtitle}</p>
            </div>

            {/* 3. Your Existing Component */}
            <div className="action-area">
              <LikeButton />
            </div>

          </div>
        ))}
      </div>

      {/* Below is the CSS (You can put this in a separate .css file 
         or use Tailwind/StyledComponents depending on your setup) 
      */}
      <style>{`
        .video-list-container {
        background-color: #a86e6eff;
          width: 1000px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .header-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 24px;
           justify-content: left;
           text-align: left;
        }

        .list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px; /* Space between rows */
        }

        .video-item {
          display: flex;
          align-items: flex-start; /* Aligns items to top */
          gap: 16px;
        }

        .thumbnail-wrapper {
          width: 160px; /* Fixed width for consistency */
          height: 90px;
          flex-shrink: 0;
        }

        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px; /* Rounded corners like screenshot */
        }

        .text-content {
          flex: 1; /* Takes up remaining space */
          display: flex;
          flex-direction: column;
          justify-content: left;
          text-align: left;
          padding-top: 4px; /* Slight optical adjustment */
          color:black;
        }

        .video-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .video-subtitle {
          font-size: 16px;
          color: black; /* Grey color */
          margin: 0;
        }

        .action-area {
          margin-top: 10px; /* Aligns heart slightly lower */
        }
      `}</style>
    </div>
  );
};

export default VideoList;
