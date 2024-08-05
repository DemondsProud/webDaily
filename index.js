/**
 * @author : AryanRanjane(ranjanearyan14@gmail.com)
 * @Co-author : VedhNaik(itzvedhnaik@gmail.com)
 * @data    :  4/8/24 
 */

/** 
 * Creating a fully fledged registration system 
 */

const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render("index");
})

app.listen(3000, () => {
    console.log("User Logged in");
})

function data() {
    const emailData = document.getElementById('eemail');
    const passData = document.getElementById('ppass');
    const buttonClick = document.getElementById('sbbtn');

    const data_one = emailData.value;
    const data_two = passData.value;

    buttonClick.addEventListener('click', () => {
        alert(data_one);
    })
}

data();
s