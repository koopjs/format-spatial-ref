var test = require('tape')
var formatSpatialRef = require('../')

test('returns correct wkid from json', function (t) {
  var sr = formatSpatialRef({wkid: 4326})
  t.equal(sr.wkid, 4326)
  t.end()
})

test('returns correct wkid from stringified json', function (t) {
  var sr = formatSpatialRef('{"wkid": 4326}')
  t.equal(sr.wkid, 4326)
  t.end()
})

test('returns correct wkid from numeric value', function (t) {
  var sr = formatSpatialRef(4326)
  t.equal(sr.wkid, 4326)
  t.end()
})

test('returns correct wkid from numeric string', function (t) {
  var sr = formatSpatialRef('4326')
  t.equal(sr.wkid, 4326)
  t.end()
})

test('returns input if input is not object string or numeric string', function (t) {
  var result = formatSpatialRef('test')
  t.equal(result, 'test')
  t.end()
})
