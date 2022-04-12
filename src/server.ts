const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

import { getData } from './utils/db'

//_____node mailer configs_____//

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

let mailOptions = (mail:String, string:String) => {
    const obj = {
        from: process.env.EMAIL,
        to: mail,
        subject: 'not suntoes | automated mail',
        text: `Hi!,\n\nGreetings,\n\nI'm not suntoes and this is an automated email.\n\nHere is the details of your order in my burger shop demo as promised:\n\n${string}\n\nBtw, please let me know if this was not your action and it's a spam.\n\nKind regards,\n\nnot suntoes`
    }
    return obj
}

const app = express();

const PORT = process.env.PORT || 3000;

const root = require('path').join(__dirname, '../client' ,'build');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(root));

app.get('/api/data', async(req: any, res: { json: (arg0: any) => void; }) => {
    const data = await getData();
    res.json(data);
})

app.post('/post', async(req:any, res:any) => {
    const { demomail, order } = req.body
    console.log(demomail)
    if(demomail !== '') {
        await transporter.sendMail(mailOptions(demomail, (String(req.body.order))), async(err: any, data: any) => {
            if (err) {
                console.log(err);
                res.redirect('/err');
                return
            };
            console.log('an email is sent');
            res.redirect('/done');
        })
    } else res.redirect('/done');
})

app.get("*", (req: any, res: { sendFile: (arg0: string, arg1: { root: any; }) => void; }) => {
    res.sendFile('index.html', { root });
})

app.listen(PORT, () => console.log(`diw4 server running on port ${PORT}`))