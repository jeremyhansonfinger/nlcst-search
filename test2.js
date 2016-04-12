var search = require('nlcst-search');
var toString = require('nlcst-to-string');

var tree = {
    'type': 'SentenceNode',
    'children': [
        {
            'type': 'WordNode',
            'children': [
                {'type': 'TextNode', 'value': 'Don'},
                {'type': 'PunctuationNode', 'value': '’'},
                {'type': 'TextNode', 'value': 't'}
            ]
        },
        {'type': 'WhiteSpaceNode', 'value': ' '},
        {
            'type': 'WordNode',
            'children': [
                {'type': 'TextNode', 'value': 'do'}
            ]
        },
        {'type': 'WhiteSpaceNode', 'value': ' '},
        {
            'type': 'WordNode',
            'children': [
                {'type': 'TextNode', 'value': 'block'},
                {'type': 'PunctuationNode', 'value': '-'},
                {'type': 'TextNode', 'value': 'level'}
            ]
        }
    ]
};


search(tree, ["don’t"], function (nodes) {
    console.log(toString(nodes) + ' test1');
});

// Strip out quotation marks, should return the whole node because dont === dont

search(tree, ["don’t"], function (nodes) {
    console.log(toString(nodes) + ' test2');
}, true);

// Don't strip out quotation marks. Should return whole node b/c don't === don't


search(tree, ["dont"], function (nodes) {
    console.log(toString(nodes) + ' test3');
});

// Strip out quotation marks. Should return whole node b/c dont = dont

search(tree, ["dont"], function (nodes) {
    console.log(toString(nodes) + ' test4');
}, true);

// Don't strip out quotation marks. Should not return anything because dont !=== don't.


search(tree, ["block-level"], function (nodes) {
    console.log(toString(nodes) + ' test5');
});

// Strip out dashes. Should return whole node b/c blocklevel === blocklevel

search(tree, ['block-level'], function (nodes) {
    console.log(toString(nodes) + ' test6');
}, false, true);
// Don't strip out dashes. Should return whole node b/c block-level === block-level

search(tree, ['blocklevel'], function (nodes) {
    console.log(toString(nodes) + ' test7');
});
// Strip out dashes. Should return whole node b/c blocklevel === blocklevel

search(tree, ["blocklevel"], function (nodes) {
    console.log(toString(nodes) + ' test8');
}, false, true);
// Don't strip out dashes. Should not return anything b/c blocklevel !== block-level
