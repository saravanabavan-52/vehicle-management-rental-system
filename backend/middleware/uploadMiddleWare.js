const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function (req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) =>  {
    const allowedTypes=/jpeg|jpg|png|webp/;
    const extname=allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype=allowedTypes.test(file.mimetype);

    if(extname && mimetype){
        cb(null,true);
    }
    else{
        cb(new Error('only image files are allowed'));
    }
};

    module.exports=multer({
        storage,
        limits:{filesize: 1024*1024* 2},
        fileFilter
    });


