'use strict';

const express = require('express');
const mongoose = require('mongoose');

const Userfile = require('../models/userfile');
const Reminder = require('../models/reminder');
const Post = require('../models/post');
const User = require('../models/user');

const router = express.Router();

/* ========== POST AND CREATE A USERFILE ========== */
router.get('/seed-me-papi', async (req, res, next) => {
  try {
    const uu1 = new User({
      firstName: 'Super',
      lastName: 'Man',
      username: 'superman',
      password: 'supersecret'
    });
    await uu1.save();
    const u1 = new Userfile({
      _id: '111111111111111111111101',
      name: 'Jane Doe',
      role: 'Data scientist',
      bio: 'ready to get started',
      img: 'https://i.imgur.com/RUzlFm9.png',
      userId: uu1.id
      // reminders: ['3333333333301', '3333333333302'],
      // posts: ['2222222222201', '2222222222202'],
    });
    await u1.save();
    // const r1 = new Reminder({

    // });

    res.status(200).json({ message: 'oooh papi thank you UwU' });
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;