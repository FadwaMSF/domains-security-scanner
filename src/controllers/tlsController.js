const isPortReachable = require('is-port-reachable');
import db from "../config/database";

exports.tls = async (req,res) => { 
    const {rows} = await db.query("SELECT * from t_domain");
    rows.forEach(async row => {
    let port80 = await isPortReachable(80, {host: row.domain});
    let port443 = await isPortReachable(443, {host: row.domain});
    let result = 'NOK'
    
    if (port80&&port443) {
        result = 'OK'
    }  
    //const testing_Date = Date.now;
    await db.query("UPDATE t_test_result as t SET  test_data = c.test_data, test_result = c.test_result  from (values ('testing_data', 'result', 8)) as c(test_data,test_result, id_test)  WHERE c.id_test= t.id_test" );

    console.log (' id = '+ row.id + ' domain = '+ row.domain + ' Port 80 = '+ port80 + ' Port443 = '+port443 +' RESULT =  '+ result );

    /* res.send( {
    body:  row.domain, port80, port443,
});  */
        
    });
    
};