var
    path = require('path'),
    lessMiddleware = require('less-middleware')
;

module.exports = function(){
    return lessMiddleware(
        path.join(__dirname, './less'), {
            dest: path.join(__dirname, '..', 'public'),
            debug: true,
            force: true,
            preprocess: {
                path: function(pathname, req) {
                    return pathname.replace(path.sep + 'styles', path.sep);
                }
            },
            compress: true, //make configurable?
            sourceMap: true

        }
    );
};
