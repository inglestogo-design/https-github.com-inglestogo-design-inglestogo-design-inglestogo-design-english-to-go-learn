// Utility for better text-to-speech using Web Speech API

interface SpeechOptions {
  gender?: 'male' | 'female';
  rate?: number;
  pitch?: number;
  volume?: number;
}

let voiceIndex = 0; // Track which voice to use next

export const getAvailableVoices = (): SpeechSynthesisVoice[] => {
  // Prioritize en-US voices, fallback to any English
  const allVoices = speechSynthesis.getVoices();
  const usVoices = allVoices.filter(voice => voice.lang === 'en-US' || voice.lang === 'en_US');
  return usVoices.length > 0 ? usVoices : allVoices.filter(voice => voice.lang.startsWith('en'));
};

export const getMaleVoice = (): SpeechSynthesisVoice | null => {
  const voices = getAvailableVoices();
  // Try to find male voices by name patterns
  const maleVoice = voices.find(v => 
    v.name.toLowerCase().includes('male') ||
    v.name.toLowerCase().includes('david') ||
    v.name.toLowerCase().includes('james') ||
    v.name.toLowerCase().includes('daniel') ||
    v.name.toLowerCase().includes('aaron')
  );
  return maleVoice || voices[0] || null;
};

export const getFemaleVoice = (): SpeechSynthesisVoice | null => {
  const voices = getAvailableVoices();
  
  // Priority list: Common American female voice names
  const preferredNames = [
    'samantha', 'victoria', 'karen', 'susan', 'alloy', 'nova',
    'joanna', 'kendra', 'kimberly', 'salli', 'female'
  ];
  
  // First try: Find by preferred names
  for (const name of preferredNames) {
    const voice = voices.find(v => v.name.toLowerCase().includes(name));
    if (voice) return voice;
  }
  
  // Fallback: Any female-sounding voice
  const femaleVoice = voices.find(v => v.name.toLowerCase().includes('female'));
  return femaleVoice || voices[1] || voices[0] || null;
};

export const speakText = (
  text: string, 
  options: SpeechOptions = {}
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice based on gender or alternate
    if (options.gender === 'male') {
      const voice = getMaleVoice();
      if (voice) utterance.voice = voice;
    } else if (options.gender === 'female') {
      const voice = getFemaleVoice();
      if (voice) utterance.voice = voice;
    } else {
      // Alternate between male and female
      const voice = voiceIndex % 2 === 0 ? getMaleVoice() : getFemaleVoice();
      if (voice) utterance.voice = voice;
      voiceIndex++;
    }

    // More natural speech parameters
    utterance.rate = options.rate ?? 0.85; // Slightly slower for clarity
    utterance.pitch = options.pitch ?? 0.95; // Slightly lower pitch for natural female voice
    utterance.volume = options.volume ?? 1.0; // Full volume
    utterance.lang = 'en-US';

    utterance.onend = () => resolve();
    utterance.onerror = (error) => {
      console.error('Speech error:', error);
      reject(error);
    };

    // Small delay to ensure voices are loaded
    setTimeout(() => {
      speechSynthesis.speak(utterance);
    }, 100);
  });
};

export const speakWithAlternatingVoices = async (
  texts: string[],
  startWithMale: boolean = true
): Promise<void> => {
  for (let i = 0; i < texts.length; i++) {
    const gender = (startWithMale ? i % 2 === 0 : i % 2 !== 0) ? 'male' : 'female';
    await speakText(texts[i], { gender });
    // Small pause between speakers
    await new Promise(resolve => setTimeout(resolve, 300));
  }
};

// Ensure voices are loaded
if (typeof window !== 'undefined') {
  speechSynthesis.addEventListener('voiceschanged', () => {
    console.log('Available voices:', getAvailableVoices().map(v => v.name));
  });
}
