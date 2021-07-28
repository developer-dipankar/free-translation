var request = require('request-promise');

var translate = async ({from = 'en', to = 'en', textArray = []}) => {
    var text = textArray.join(' \n ');
    var text_trans = encodeURI(JSON.stringify([[["MkEWBc",JSON.stringify([[text,from,to,true], [null]]),null,"generic"]]]))
    var options = {
        'method': 'POST',
        'url': 'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute',
        'headers': {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        //   'Cookie': 'NID=220=f5ubCGeLvCjP8rE-m6VMUFoToyuPmWop0u591U-Z0lV5dkeW2wQOivmcZpldZonSRIQ_Sk81glJnJMeZS454e96b_vxgNPxpQPHGwv4awjBF6E7vTVlrC7btnZltsIaQ8_25eKOxFolV5xR6385xCb37vLDnMEBRqeE6BB6iA10'
        },
        body: 'f.req='+text_trans
    };

    var result = await request(options);
    // result = JSON.parse(result.replace(")]}'", ''))
    result = JSON.parse(JSON.parse(result.slice(4))[0][2]);
    // console.log(result[1][0][0]);
    textArray = textArray.map((item, index) => result[1][0][0][5][index*2][0]);

    // console.log(textArray);
    return textArray;

}
// translate({from: 'en', to: 'bn', textArray:['how are you?', 'call me at tonight at 9pm']});
module.exports = {translate}