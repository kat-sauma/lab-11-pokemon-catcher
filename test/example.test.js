import { makeSeenArray, makeLabelsArray, makeCaughtArray } from '../results/mungeUtils.js';

const test = QUnit.test;

const pokeBall = [
    { 'name': 'charmeleon', '_id': '5cef3501ef6005a77cd4fd1b', 'seen': 2, 'caught': 1 },
    { 'name': 'metapod', '_id': '5cef3501ef6005a77cd4fd24', 'seen': 2, 'caught': 1 },
    { 'name': 'beedrill', '_id': '5cef3501ef6005a77cd4fd25', 'seen': 1, 'caught': 0 },
    { 'name': 'bulbasaur', '_id': '5cef3501ef6005a77cd4fd17', 'seen': 4, 'caught': 2 },
    { 'name': 'weedle', '_id': '5cef3501ef6005a77cd4fd26', 'seen': 1, 'caught': 0 },
    { 'name': 'wartortle', '_id': '5cef3501ef6005a77cd4fd20', 'seen': 1, 'caught': 1 },
    { 'name': 'ivysaur', '_id': '5cef3501ef6005a77cd4fd19', 'seen': 2, 'caught': 0 },
    { 'name': 'charmander', '_id': '5cef3501ef6005a77cd4fd1a', 'seen': 1, 'caught': 0 },
    { 'name': 'blastoise', '_id': '5cef3501ef6005a77cd4fd21', 'seen': 1, 'caught': 0 }
];

test('makeLabelsArray should take in pokeBall and return an array of strings', (expect) => {

    const expected = ['charmeleon', 'metapod', 'beedrill', 'bulbasaur', 'weedle', 'wartortle', 'ivysaur', 'charmander', 'blastoise'];

    const actual = makeLabelsArray(pokeBall);

    expect.deepEqual(actual, expected);
});

test('makeSeenArray should take in pokeBall and return an array of numbers', (expect) => {

    const expected = [2, 2, 1, 4, 1, 1, 2, 1, 1];

    const actual = makeSeenArray(pokeBall);

    expect.deepEqual(actual, expected);
});

test('makeCaughtArray should take in pokeBall and return an array of numbers', (expect) => {

    const expected = [1, 1, 0, 2, 0, 1, 0, 0, 0];

    const actual = makeCaughtArray(pokeBall);

    expect.deepEqual(actual, expected);
});
