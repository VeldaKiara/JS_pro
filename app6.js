const {shopForBeans, soakTheBeans, cookTheBeans} = require('./lib6.js');

async function makeBeans(){
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
  }