// const express = require('express');
// const pool = require('../modules/pool');









// const router = express.Router();

// const cloudinaryUpload = require('../modules/cloudinary-config');
// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// router.post('/', cloudinaryUpload.single('image'), async (req, res) => {
//   // endpoint functionality
//     console.log('in temp router', req.body);
//     console.log('is authenticated?', req.isAuthenticated());
//     // console.log('path', req.file.image_url);
//     // const imageUrl = req.files.path;
//     const userId = req.user.id;

//     let queryText = `INSERT INTO "item" ( "image_url", "user_id") 
//     VALUES ($1, $2);`
//     pool.query(queryText, [req.body.image, userId])
//       .then(res => res.sendStatus(201))
//       .catch(err => res.sendStatus(500));

// });



// module.exports = router;
