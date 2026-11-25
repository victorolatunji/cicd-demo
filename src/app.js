// Simple app for the CodeBuild demo
function add(a, b) { return a + b; }
function greet(name) { return `Hello, ${name}! Built automatically by AWS Codebuild.`; }
module.exports = { add, greet };

if (require.main === module) {
  console.log(greet("INFT 3104"));
}
