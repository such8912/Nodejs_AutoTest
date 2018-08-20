const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');



Given(/^进入阿里云注册界面"([^"]*)"$/, async function (arg1) {

    await driver.get(arg1);
});

Then(/^拖动验证注册滑块$/, async function () {

    await driver.switchTo().frame("alibaba-register-box");
    let div = await driver.findElement({id:"nc_1_n1z"});
    console.log("div",await div.getLocation())
    let div_location = await div.getLocation();
    let offset_x =div_location.x+320;
    await driver.actions().dragAndDrop(div,{x:offset_x,y:div_location.y}).perform();
});