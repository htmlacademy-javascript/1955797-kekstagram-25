const initUploadPreview = () => {
  const FILE_TYPES = ['png', 'jpeg', 'jpg', 'gif'];

  const uploadFile = document.querySelector('#upload-file');
  const preview = document.querySelector('.img-upload__preview img');

  uploadFile.addEventListener('change', () => {
    const file = uploadFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((fileExtension) => fileName.endsWith(fileExtension));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

export { initUploadPreview };
