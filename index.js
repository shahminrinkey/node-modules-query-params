exports.addUrlParams = function(url, params, queryAlreadyExists=false) {
    if(typeof params != "object") throw('Type error! params should be an object.');
    if(typeof url != "string") throw('Type error! url should be a string.');

    let query_str = queryAlreadyExists === true || url.includes('?') ? '&':'?';
    let params_len = Object.keys(params).length;

    Object.keys(params).map(function(key, index) {
        if(index+1 === params_len) 
            query_str += key + '=' + params[key];
        else
            query_str += key + '=' + params[key] + '&';
    });
    
    return url+query_str;
}
