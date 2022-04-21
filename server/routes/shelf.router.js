const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const cloudinaryUpload = require('../modules/cloudinary-config');
const multer = require('multer');
const upload = multer ({dest: 'uploads/'})
const { uploadFile, getFileStream } = require('../modules/cloudinary-config')
const fs = require('fs')
const util = require('fs')
// const unlinkFile = util.promisixfy(fs.link)



router.get('/', (req, res) => {
 
    console.log('/shelf GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = `SELECT * FROM "item" WHERE user_id = ${req.user.id}`;
    pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); 

router.get('/testbucketstn/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key 
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

router.post('/', upload.single("image"), async (req, res) => {
  const file = req.file
  console.log('file is', file);
  // console.log('req file is ', req);
  const result = await uploadFile(file)
  console.log('result location is', result.location);
  const description = req.body.description; 
  res.send({imagePath: `/testbucketstn/${result.Key}`})
  const imageUrl = 'https://testbucketstn.s3.us-east-2.amazonaws.com/' + req.file.filename; 
  console.log('imageurl is', imageUrl);


  // endpoint functionality
  if (req.isAuthenticated()) {
    console.log('niceeee req.file:', req.file.path)
    console.log('server post description', req.body.description);
    // console.log('location is', req.result.location);
    console.log('username', req.user.id);


    let queryText = `INSERT INTO "item" ( "description", "image_url", "user_id") 
    VALUES ($1, $2, $3);`;
    pool.query(queryText,  [ req.body.description, imageUrl, req.user.id])
      .then()
      .catch(err => { 
        console.log('erroris', err);
        // res.sendStatus(500);
      })

  } 
  // else {
  //   res.sendStatus(403);
  // }
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  let reqId = req.params.id;
  if (req.isAuthenticated()) {
    console.log('/shelf DELETE route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = 'DELETE FROM item where id = $1;';
    pool.query(queryText, [reqId])
    .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
  if (req.isAuthenticated()) {
    console.log('/shelf/:id GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = `SELECT * FROM "item" WHERE user_id = ${req.user.id} AND id = ${req.params.id}`;
    pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }

});

module.exports = router;
