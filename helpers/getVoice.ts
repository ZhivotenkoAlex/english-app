export const getVoice = (value: string, rate = 0.1, lang = 'en') => {
  const output = new SpeechSynthesisUtterance(value)
  output.lang = lang
  output.pitch = 1
  output.rate = rate
  window.speechSynthesis.speak(output)
}
