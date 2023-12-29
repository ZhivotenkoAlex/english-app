export const getVoice = (value: string) => {
  const output = new SpeechSynthesisUtterance(value)
  output.lang = 'uk'
  output.pitch = 0.5
  output.rate = 1.05
  window.speechSynthesis.speak(output)
}
