export const tts = (input: string | number, lang: Languages) => {
  // check browser compatibility
  if (!window.speechSynthesis) {
    alert("Your browser doesn't support text to speech.\nTry Chrome 33+ :)");
  } else {
    let text = input;
    if (typeof text === 'number') {
      text = text.toString();
    }
    const u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = lang;
    speechSynthesis.speak(u);
  }
};
