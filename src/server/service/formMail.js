import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import utils from '../utils/utils';

let service = {};

const formMail = (req, res) => {

    const templatePath = fs.readFileSync(path.join(global.appRoot, 'src/server/template/formMail.ejs'), 'utf8');
    const html = ejs.render(templatePath, {passwordResetUrl: 'https://ejs.co/'});
    console.log('formMail',html);
    // res.send(html);
    utils.sendingMail({html: req.body.email, to: 'lata@msd-my.com'});
    res.status(200).send('Mail sent');
}

export default service= {
    formMail,
};