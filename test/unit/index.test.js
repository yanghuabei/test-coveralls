import {assert} from 'chai';

import {indexOf} from '../../src/index';

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal(-1, indexOf([1, 2, 3]));
        });

        it('should return -1 when the array is empty', () => {
            assert.equal(-1, indexOf([], 4));
        });
    });
});
