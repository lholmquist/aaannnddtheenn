module('AndThen tests');

test('AndThen testing', function() {
    var andThen = new AndThen(function (resolve, reject) {});

    equal(andThen instanceof AndThen, true, 'andThen should be an instanceof AndThen');
    equal(typeof andThen.annddtheenn, 'function', 'andThen should have an annddtheenn method');
    equal(typeof andThen.noandthen, 'function', 'andThen should have a noandthen method');
});
