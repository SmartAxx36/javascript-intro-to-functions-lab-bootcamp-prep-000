function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
  if (string === "hello") {
    console.log("I can't hear you!")
  } else if (string === "HELLO") {
    console.log("YES INDEED!")
  } else {
    return ("I love you, Grandma.")}
}