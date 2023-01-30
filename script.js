//! Clarusway

// JS-CC-007 : Camelizes the Sentences
// The purpose of this coding challenge is to create a function that will take text in kebab case format or with spaces and output it in camel case format.

// Expected Outcome
// For Example:

// Input : JavaScript coding ChAlLenge

// Output : javaScriptCodingChallenge

// Input : JavaScript-coding-challenge

// Output : JavaScriptCodingChallenge

// Input : javaScriptCodingChallenge

// Output : javaScriptCodingChallenge

//!! here is the solution

let string = "JavaScript coding ChAlLenge";

function convertToCamelCase(string) {
  string = string.toLocaleLowerCase();
  string = string.replace(/[\s-]/g, "_");
  console.log(string);
  let words = string.split("_");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let CamelCase = words.join("");
  return CamelCase;
}

console.log(convertToCamelCase(string));

// \s = whitespace

// What I did at first

let a = "JavaScript coding ChAlLenge";

console.log(a.length);

function convert(a) {
  let str = "";
  let b = a.toLowerCase();
  for (let i = 0; i < a.length; i++) {
    if (b[i] == " ") {
      str += b[i + 1].toUpperCase();
      i++;
    } else {
      str += b[i];
    }
  }
  return str;
}

console.log(convert(a));


//but it didn't work for all inputs especially which includes non-letters
