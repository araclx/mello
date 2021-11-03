import test from 'ava';
import {fn} from '../lib';

test('fn() returns foo', t => {
	t.is(fn(), 'foo');
});
