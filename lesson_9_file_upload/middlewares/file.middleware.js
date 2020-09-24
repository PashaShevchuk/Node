const { PHOTO_MIMETYPES, DOCS_MIMETYPES, MAX_DOC_SIZE, MAX_PHOTO_SIZE } = require('../configs/constants');
const {
  CustomError,
  statusCodesEnum,
  filesErrors: {
    BAD_REQUEST_NOT_VALID_PHOTO_SIZE,
    BAD_REQUEST_NOT_VALID_DOCUMENT_SIZE,
    BAD_REQUEST_NOT_VALID_DOCUMENT_TYPE,
    BAD_REQUEST_NOT_VALID_PHOTO_COUNT
  }
} = require('../errors');


module.exports = {
  checkFileValidity: (req, res, next) => {
    try {
      if (!req.files) {
        return next();
      }

      const photos = [];
      const docs = [];
      const files = Object.values(req.files);

      for (let i = 0; i < files.length; i++) {
        const { size, name, mimetype } = files[i];

        if (PHOTO_MIMETYPES.includes(mimetype)) {
          if (size > MAX_PHOTO_SIZE) {
            return next(new CustomError(
              BAD_REQUEST_NOT_VALID_PHOTO_SIZE.message,
              statusCodesEnum.BAD_REQUEST,
              BAD_REQUEST_NOT_VALID_PHOTO_SIZE.code)
            );
          }

          photos.push(files[i])

        } else if (DOCS_MIMETYPES.includes(mimetype)) {
          if (size > MAX_DOC_SIZE) {
            return next(new CustomError(
              BAD_REQUEST_NOT_VALID_DOCUMENT_SIZE.message,
              statusCodesEnum.BAD_REQUEST,
              BAD_REQUEST_NOT_VALID_DOCUMENT_SIZE.code)
            );
          }

          docs.push(files[i])

        } else {
          return next(new CustomError(
            `${BAD_REQUEST_NOT_VALID_DOCUMENT_TYPE.message} ${name}`,
            statusCodesEnum.BAD_REQUEST,
            BAD_REQUEST_NOT_VALID_DOCUMENT_TYPE.code)
          );
        }
      }

      req.photos = photos;
      req.docs = docs;

      next();

    } catch (e) {
      next(e);
    }
  },

  checkUserPhotoCount: (req, res, next) => {
    try {
      if (req.files && req.photos.length > 1) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_PHOTO_COUNT.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_PHOTO_COUNT.code)
        );
      }

      next();

    } catch (e) {
      next(e);
    }
  },
}
