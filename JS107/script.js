'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`В дданных  сномером ${i + 1} нет ID`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    console.error(e.name);
    console.log(e.message);
    console.log(e.stack);
}

// const err = new SyntaxError(': ha odhfaof hgqwe');
// console.log(err.name, err.message, err.stack);