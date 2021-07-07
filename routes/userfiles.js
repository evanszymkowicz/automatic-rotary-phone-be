'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Userfile = require('../models/userfile');
const Reminder = require('../models/reminder');
const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res, next) => {
  Userfile.find()
    .populate('reminders')
    .populate('posts')
    .then(userfiles => {
      res.json(userfiles);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;