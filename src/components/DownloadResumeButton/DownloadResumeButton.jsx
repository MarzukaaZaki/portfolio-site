import React from 'react';
import ActionButton from '../ActionButton/ActionButton';



const DownloadResumeButton = () => {
  const handleDownload = () => {
    fetch('/CV_of_Marzuka_Zaki_Abeeda.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the downloaded file
        const url = URL.createObjectURL(blob);

        // Create an anchor element to initiate the download
        const anchorElement = document.createElement('a');
        anchorElement.href = url;
        anchorElement.download = 'CV_of_Marzuka_Zaki_Abeeda.pdf';

        // Trigger a click event on the anchor element to initiate the download
        anchorElement.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.log('Error downloading CV:', error);
      });
  };

  return (
    <ActionButton onClick={handleDownload}>Download CV</ActionButton>
    
  );
};

export default DownloadResumeButton;
