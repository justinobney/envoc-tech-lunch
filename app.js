console.log('hello');

function tick(){
    var exports = {};
    var idx = 0;

    var id = setInterval(function(){
        console.log(idx++);
        console.log('3 seconds');
    }, 3000);

    exports.stopTick = function(){
        clearInterval(id);
    };

    return exports;
}

var ticker = tick();
