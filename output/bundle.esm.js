var version = "1.0.0";

var index = 42;

var test = function test() {
  console.log("111");
};
function main () {
  console.log('version ' + version);
}
var answerFunction = function answerFunction() {
  console.log('the answer is ' + index);
};

export { answerFunction, main as default, test };
