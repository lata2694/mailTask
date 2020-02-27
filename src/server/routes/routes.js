
import express from 'express';
import formController from '../controller/formMail.js';

const router = express.Router();

router.use('/form_emails', formController);

export default router;