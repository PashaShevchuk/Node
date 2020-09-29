module.exports = {
  AUTHORIZATION: 'Authorization',

  MAX_PHOTO_SIZE: 2097152, // 2 mb
  MAX_DOC_SIZE: 10485760,  // 10 mb

  PHOTO_MIMETYPES: [
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/tiff',
    'image/webp',
  ],
  DOCS_MIMETYPES: [
    'application/msword',                                                      // DOC
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
    'application/vnd.ms-excel',                                                // XLS
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',       // XLSX
    'application/pdf',                                                         // PDF
    'application/rtf',                                                         // RTF
    'text/plain',                                                              // TXT
    'application/vnd.oasis.opendocument.text',                                 // ODT
  ],
}
