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

router.get('/:userfileId', (req, res, next) => {
	const {userfileId} = req.params;

	Userfile.findOne({_id: userfileId})
		.populate('reminders')
		.populate('posts')
		.then(userfile => {
			if(userfile){
				res.json(userfile);
			}
			else {
				next();
			}
		})
		.catch(err => {
			next(err);
		});
});

/* ========== POST AND CREATE A USERFILE ========== */
router.post('/', (req, res, next) => {
	const newUserfile = req.body;
	console.log('the new userfile is', newUserfile);
	Userfile.create(newUserfile)
		.then(userfile => {
			res.location(`http://${req.headers.host}/api/userfiles/${userfile.id}`).status(201).json(userfile);
		})
		.catch(err => {
			next(err);
		});
});

/* ========== PUT/UPDATE A SINGLE USERFILE ========== */
router.put('/:userfileId', (req, res, next) => {
	const{ userfileId }= req.params;
	const updatedUserfile = req.body;
  
	Userfile.findOneAndUpdate({_id: userfileId}, updatedUserfile, {new: true})
		.populate('reminders')
		.populate('posts')
		.then(userfile => {
			if (userfile) {
				console.log('userfile being sent back is', userfile);
				res.status(200).json(userfile);
			} else {
				next();
			}
		})
		.catch(err => {
			next(err);
		});
});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/:userfileId', (req, res, next) => {
	const {
		userfileId
	} = req.params;

	Userfile.findOneAndDelete({
		_id: userfileId
	})
		.then((userfile) => {
			if (!userfile) {
				// if trying to delete something that no longer exists
				return next();
			} else {
				res.sendStatus(204);
			}
		})
		.catch(err => {
			next(err);
		});
});

module.exports = router;