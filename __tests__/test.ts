import { fn } from '../lib'
import test from 'ava'

test('fn() returns foo', (t) => {
	t.is(fn(), 'foo')
})
