
import express from 'express';
import service from '../service/formMail';

const router = express.Router();

router.post('/', service.formMail);

export default router;