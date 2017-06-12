import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger; Used for debugging via source map
console.log(`I would pay ${courseValue} for this awesome course!`);
