var configValues = require('./config.json');

module.exports = {
    getDBConnectionString: function(){
        return "mongodb://" + configValues.dbusername + ":" + configValues.dbpassword + "@ds023624.mlab.com:23624/techcrunch";
    },
    serverLogging: function(req, res, next){
	                    console.log(req.method, req.url);
	                    next();
                    },
    sortListByHotness: function(list){
        list.sort(function(a, b){
            if (a.hotness < b.hotness){
                return -1;
            } else if (a.hotness > b.hotness) {
                return 1;
            } else {
                return 0;
            }
        });
    }
};

