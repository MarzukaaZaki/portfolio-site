import React from 'react';


const DownloadResumeButton = () => {
  const handleDownload = () => {
    fetch('/Cover Letter of Marzuka Zaki Abeeda.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the downloaded file
        const url = URL.createObjectURL(blob);

        // Create an anchor element to initiate the download
        const anchorElement = document.createElement('a');
        anchorElement.href = url;
        anchorElement.download = 'Resume of Marzuka Zaki Abeeda.pdf';

        // Trigger a click event on the anchor element to initiate the download
        anchorElement.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.log('Error downloading resume:', error);
      });
  };

  return (
    <button className='' onClick={handleDownload}>Download Resume</button>
  );
};

export default DownloadResumeButton;
