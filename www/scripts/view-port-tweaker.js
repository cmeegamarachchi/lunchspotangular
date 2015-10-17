/**
 * Created by Chintana Meegamarachchi on 11/10/2015.
 */

var viewPortTweaker = viewPortTweaker || {};

viewPortTweaker.tweakViewPort = function(device) {
    $("meta[name=viewport]").remove();
    var model = device.model.replace(/\s/g, '').toLowerCase();
    if (model === 'iphone4,1') {
        $('head').append('<meta name="viewport" ' +
        'content="user-scalable=no, ' +
        'initial-scale=1, ' +
        'maximum-scale=1, ' +
        'minimum-scale=1, ' +
        'width=device-width, ' +
        'height='+window.innerHeight +'px, ' +
        'target-densitydpi=medium-dpi">');
    }

    if (model.substring(0, 2) === 'rm') {
        $('head').append('<meta name="viewport" ' +
        'content="user-scalable=no, ' +
        'initial-scale=1, ' +
        'maximum-scale=1, ' +
        'minimum-scale=1, ' +
        'width=device-width, ' +
        'height=' + window.innerHeight + 'px, ' +
        'target-densitydpi=device-dpi">');
    }

}