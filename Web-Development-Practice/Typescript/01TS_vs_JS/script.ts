const button1 = document.querySelector("button");

button1?.addEventListener("click", clickHandler1);

function clickHandler1(e: MouseEvent) {
  console.log(e.target);
}

/* 

npm i --save-dev typescript  => To install typescript
npx tsc --init => To create tsconfig.json file
npx tsc => To compile the typescript file
npx tsc -w => To compile the typescript file in watch mode
npx tsc -noEmitOnError => To compile the typescript file without generating the js file if there is any error
*/
