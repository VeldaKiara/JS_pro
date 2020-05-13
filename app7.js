const cookBeanSouffle = require('./lib7.js');
async function hostDinnerParty() {
    try {
      let dinner = await cookBeanSouffle();
      console.log(`${dinner} is served!`);
    }
    catch(error){
      console.log(error);
      console.log('Ordering a pizza!');
    }
   }
   
   hostDinnerParty();
   
   
   
   
