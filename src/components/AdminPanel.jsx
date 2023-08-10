import React, { useState } from 'react';

export const AdminPanel = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [currentVideoInfo, setCurrentVideoInfo] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleVideoUpload = async event => {
    event.preventDefault();
    const videoInput = document.getElementById('fileid');
    const videoFiles = videoInput.files;

    if (videoFiles && videoFiles.length > 0) {
      try {
        const formData = new FormData();
        for (let i = 0; i < videoFiles.length; i++) {
          formData.append('video', videoFiles[i]);
        }

        const temporaryVideos = Array.from(videoFiles).map(videoFile => ({
          url: URL.createObjectURL(videoFile),
          ...currentVideoInfo,
        }));

        setUploadedVideos(prevVideos => [...prevVideos, ...temporaryVideos]);
        setCurrentVideoInfo({
          title: '',
          description: '',
          category: '',
        });
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    }
  };

  const handleVideoInfoChange = (field, value) => {
    setCurrentVideoInfo(prevInfo => ({ ...prevInfo, [field]: value }));
  };

  return (
    <section>
      <div className="container">
        <h1>Admin Panel</h1>
        <p>Загрузить видео</p>
        <form onSubmit={handleVideoUpload}>
          <input
            className="admin-btn"
            id="fileid"
            type="file"
            name="filename"
            accept="video/*"
            multiple
          />
          <input type="submit" value="Submit" className="admin-btn" />
          <div className="admin-wrapper">
            <input
              type="text"
              placeholder="Заголовок"
              value={currentVideoInfo.title}
              onChange={e => handleVideoInfoChange('title', e.target.value)}
              className="admin-item"
            />
            <textarea
              placeholder="Описание"
              value={currentVideoInfo.description}
              onChange={e =>
                handleVideoInfoChange('description', e.target.value)
              }
              className="admin-item"
            />
            <select
              value={currentVideoInfo.category}
              onChange={e => handleVideoInfoChange('category', e.target.value)}
              className="admin-item"
            >
              <option value="">Выберите категорию</option>
              <option value="Категория 1">Категория 1</option>
              <option value="Категория 2">Категория 2</option>
              <option value="Категория 3">Категория 3</option>
            </select>
          </div>
        </form>

        {uploadedVideos.length > 0 && (
          <div>
            <h2>Uploaded Videos</h2>
            <div className="admin-list">
              {uploadedVideos.map((video, index) => (
                <div key={index}>
                  <video controls src={video.url} width="400" />
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <p>Категория: {video.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
