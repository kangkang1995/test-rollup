
import { version } from '../package.json';
import answer from 'the-answer';

export const test = () => {
    console.log("111");
}

export default function () {
	console.log('version ' + version);
}

export const answerFunction = () => {
	console.log('the answer is ' + answer);
}
