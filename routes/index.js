const express = require('express');
//importing the router
const router = express.Router();
//directory for the router
const homeController= require('../controlers/homeControler');

console.log('r loaded');
//home router
router.get('/',homeController.home);
//create-contact router
router.post('/create-contact',homeController.create);
//delete-contact router
router.post('/delete-contact',homeController.delete);
//sort-by router
router.post('/find-task',homeController.find);
//exporting the routers
module.exports=router;