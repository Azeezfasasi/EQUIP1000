document.addEventListener("DOMContentLoaded", function() {
    const certificates = document.querySelectorAll('.certificates-container .box');
    const previewPaneTitle = document.querySelector('.preview-title');
    const previewImage = document.querySelector('.preview-pane img');
    const previewDownloadLink = document.querySelector('.preview-pane .cert-download-wrapper a');

    certificates.forEach((certificate, index) => {
        const downloadButton = certificate.querySelector('a');

        downloadButton.addEventListener('click', function(event) {
            // Prevent the default action of the download link
            event.preventDefault();

            // Get the certificate image source and set it in the preview pane
            const certificateImageSrc = certificate.querySelector('img').src;
            previewImage.src = certificateImageSrc;

            // Update the preview pane title
            previewPaneTitle.textContent = `Certificate ${index + 1} Preview`;

            // Update the download link in the preview pane
            previewDownloadLink.href = downloadButton.href;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const previewImage = document.querySelector('.preview-pane img');
    const previewDownloadLink = document.querySelector('.preview-pane .cert-download-wrapper a');

    // Add event listener for the download button in the preview pane
    previewDownloadLink.addEventListener('click', function(event) {
        // Prevent the default action of the anchor tag
        event.preventDefault();
        
        // Trigger the download of the preview image
        previewDownloadLink.download = 'preview_certificate.png';
        previewImage.click(); // Triggering click on the image to initiate the download
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const certificates = document.querySelectorAll('.certificates-container .box');
    const previewPaneTitle = document.querySelector('.preview-title');
    const previewImage = document.querySelector('.preview-pane img');
    const previewDownloadButton = document.querySelector('.preview-pane .cert-download-wrapper a');

    certificates.forEach((certificate, index) => {
        const downloadButton = certificate.querySelector('a');

        downloadButton.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the certificate image source and set it in the preview pane
            const certificateImageSrc = certificate.querySelector('img').src;
            previewImage.src = certificateImageSrc;

            // Update the preview pane title
            previewPaneTitle.textContent = `Certificate ${index + 1} Preview`;

            // Update the download link in the preview pane
            previewDownloadButton.href = certificateImageSrc;
            previewDownloadButton.download = `certificate_${index + 1}.png`;

            // Trigger the download
            previewDownloadButton.click();
        });
    });
});


 // Get the download link and image source
 const downloadLink = document.getElementById('downloadLink');
 const imageSource = '../img/img-preview-cert.png';

 // Function to handle the download
 function downloadImage() {
     const link = document.createElement('a');
     link.href = imageSource;
     link.download = 'certificate.png';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
 }

 // Attach the download function to the click event of the download link
 downloadLink.addEventListener('click', downloadImage);