import { observable } from 'mobx';

const testStore = observable({
    // state
    test: {
        code : '문자열입니다.'
    },

    // action
    writeCode(code) {
        console.log('action call');
        this.test.code = code;
    }
});

export default testStore;