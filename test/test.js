module('Dude tests');

test('Dude testing', function() {
    var dude = new Dude(function (resolve, reject) {});

    equal(dude instanceof Dude, true, 'dude should be an instanceof Dude');
    equal(typeof dude.annddtheenn, 'function', 'dude should have an annddtheenn method');
    equal(typeof dude.noandthen, 'function', 'dude should have a noandthen method');
});
