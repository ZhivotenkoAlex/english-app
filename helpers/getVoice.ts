export const getVoice = (value: string, lang = 'en', rate = 0.1) => {
  const output = new SpeechSynthesisUtterance(value)
  output.lang = lang
  output.pitch = 1
  output.rate = rate
  window.speechSynthesis.speak(output)
}
