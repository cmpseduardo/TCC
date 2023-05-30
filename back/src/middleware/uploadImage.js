 const multer = require('multer');
 const fs = require('fs');
 
  module.exports = multer({
      storage: multer.diskStorage({
          destination: (req, file, cb) => {
              const folder = './public/upload/users/camp';
              fs.mkdirSync(folder, { recursive: true });
              cb(null, folder);
          },
          filename: (req, file, cb) => {
              cb(null, Date.now().toString() + "_" + file.originalname)
          }
      }),
      fileFilter: (req, file, cb) => {
          const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find
          (formatoAceito => formatoAceito == file.mimetype);
          if(extensaoImg){
              return cb(null, true);
          }
          return cb(null, false);
      }
  });