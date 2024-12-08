import './style.css';
import { outPutPrefixSum, outPutSuffixSum } from './prefixSuffixSum.js';
import { equilibriumPoint } from './equilibriumIndex.js';
import { twoSUM } from './twoPointersPattern.js';
import { checkHV } from './symmetryCheck.js';
import { findMaxAverage } from './slidingWindowPattern.js';


document.querySelector('#app').innerHTML = `
      <table>
        <th>Example</th>
        <th>Output</th>
        <tr>
          <td><span id="name-of-pattern"></td>
          <td><div id="output"></div></td>
        </tr>
      </table>
`;

/* Add Input here */

//var name = 'Prefix Sum Example';
//var output = outPutPrefixSum([-7, 1, 5, 2, -4, 3, 0]);

//var name = 'Suffix Sum Example';
//var output = outPutSuffixSum([-7, 1, 5, 2, -4, 3, 0]);

//var name = 'Equilibrium Index Example';
//var output = equilibriumPoint([-7, 1, 5, 2, -4, 3, 0]);

//var name = 'Two Sum Example';
//var output = twoSUM([1, 6, 2, 4, 7], 8);

//var name = 'Vertical/Horizontal Symmetry check';
//var output = checkHV(mat, 3, 3);;

//var name = 'Vertical/Horizontal Symmetry check';
//var output = checkHV([[1, 0, 1],[0, 0, 0],[1, 0, 1]], 3, 3);


var name = 'Max sum of a fixedSize subarray';
var output = findMaxAverage([1,3,5,4,8,7], 3);

/* Finish input here*/

let nameOfPattern = document.querySelector('#name-of-pattern');
nameOfPattern.innerHTML = name;
document.querySelector('#output').innerHTML = output;
