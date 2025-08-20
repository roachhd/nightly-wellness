// Bedtime Wellness App JavaScript
class BedtimeWellnessApp {
  constructor() {
    this.quotes = [
      "The night is the balm that soothes my weary soul.",
      "Stars can't shine without darkness. Embrace the night and let your dreams sparkle.",
      "May your dreams be sweet, your worries be few, and your sleep peaceful.",
      "The moon whispers a lullaby, and the stars dance to its tune.",
      "As the night blankets the world, let your worries fade and your dreams take flight.",
      "In this silent night, let peace flow through your mind and lull you into gentle dreams.",
      "Send your worries to the moon and let the night's silence inspire.",
      "Sleep is the best meditation. Lay your head down and let go.",
      "Let the darkness be your cushion to rest, and let your dreams lead you to morning light.",
      "The starry sky knows the way to serenity. Follow it.",
      "Every night is a silent page for your dreams to write their stories.",
      "The night considers no perfection other than the peace of sleep.",
      "Dreams are whispers from your soul. Listen closely.",
      "Inhale the peace, exhale the stress, and let the night guide your rest.",
      "The day is done. Let thoughts of calm and rest take its place.",
      "Close your eyes to the world and open your heart to the universe.",
      "Let the night wash over you and carry you into the dreamscape.",
      "A lullaby from the stars steers you into gentle dreams.",
      "May the quiet of the night restore your spirit.",
      "Let your dreams paint the sky with possibility.",
      "Release the burdens of today and rest in the promise of tomorrow.",
      "The stars are proof that the darkest times can produce light.",
      "I release the day and welcome peaceful rest.",
      "My mind is quiet and my body is ready for sleep.",
      "I deserve this rest and renewal."
    ];

    this.journalPrompts = [
      "What was one moment today when you felt completely present? Describe it in vivid detail.",
      "If today was a color, what would it be and why?",
      "What was something that surprised you about yourself today?",
      "What's one conversation you had today that made you think differently?",
      "If you could give your morning self one piece of advice based on how today unfolded, what would it be?",
      "What's one thing you did today that you want to remember a year from now?",
      "Write about a small act of kindness you witnessed or received today.",
      "What's one fear you faced today, even in a small way?",
      "If you could replay one moment from today, what would it be and why?",
      "What did your body tell you today that you hadn't noticed before?",
      "Write about something you learned about someone else today.",
      "What's one assumption you made today that turned out to be wrong?",
      "If today had a soundtrack, what three songs would be on it?",
      "What's one way you grew today that nobody else might notice?",
      "Write about a moment today when you felt truly yourself.",
      "What's something you did today that your future self will thank you for?",
      "If you could ask the universe one question about today, what would it be?",
      "What pattern in your thoughts did you notice today?",
      "Write about a moment today when you felt connected to something bigger than yourself.",
      "What's one thing you want to carry from today into tomorrow?",
      "How did you show yourself compassion today?",
      "What was the most peaceful moment of your day?",
      "If today was a chapter in your life story, what would you title it?",
      "What's something beautiful you noticed today that others might have missed?",
      "Write about a choice you made today that felt aligned with your values."
    ];

    this.wellnessInsights = [
      "Your body temperature naturally drops 1–2 degrees before sleep--this is why a cool bedroom (18–20°C) supports better rest.",
      "Blue light exposure can suppress melatonin production for up to 3 hours, making it harder to fall asleep naturally.",
      "Deep breathing activates your parasympathetic nervous system, naturally shifting your body from 'fight or flight' to 'rest and digest' mode.",
      "Writing down tomorrow's to-do list before bed can reduce bedtime worry by 57%, according to sleep research.",
      "Your brain clears toxins during deep sleep through the glymphatic system--like taking out the trash while you rest.",
      "Lavender scent can reduce heart rate and blood pressure, creating optimal conditions for sleep.",
      "Consistent sleep and wake times help regulate your circadian rhythm, making it easier to fall asleep naturally over time.",
      "Progressive muscle relaxation can reduce the time it takes to fall asleep by up to 50%.",
      "Gratitude practices before bed increase sleep quality and reduce the time spent worrying at night.",
      "Your bedroom should ideally be used only for sleep and intimacy--this creates stronger mental associations with rest.",
      "Magnesium supports muscle relaxation and can help calm an overactive mind before sleep.",
      "The 4-7-8 breathing technique (inhale 4, hold 7, exhale 8) can trigger your body's relaxation response in minutes.",
      "Weighted blankets provide deep pressure touch that can reduce cortisol and increase serotonin and melatonin.",
      "Visualization and guided imagery can be as effective as medication for some people with sleep difficulties.",
      "Your phone's night mode isn't enough--blue light blockers or avoiding screens entirely work better for sleep preparation.",
      "Herbal teas like chamomile contain compounds that bind to brain receptors and promote sleepiness.",
      "Body scanning meditation helps release physical tension you might not even realize you're holding.",
      "Creating a 'worry window' earlier in the day can prevent anxious thoughts from disrupting your bedtime.",
      "Sleep is when your brain consolidates memories and processes emotions from the day.",
      "Gentle stretching or yoga before bed can signal to your nervous system that it's time to wind down.",
      "The Japanese practice of 'forest bathing' or visualizing nature scenes can lower stress hormones and promote sleep.",
      "Aromatherapy works because scent is directly connected to the emotional centers of your brain.",
      "Your sleep environment should engage all five senses: cool temperature, dark lighting, comfortable textures, pleasant scents, and calming sounds."
    ];

    this.mindClearingTechniques = [
      "Body Scan: Starting with your toes, slowly bring awareness to each part of your body, releasing tension as you breathe out.",
      "4-7-8 Breathing: Inhale for 4 counts, hold for 7, exhale for 8. Repeat 3–4 times to activate your relaxation response.",
      "5-4-3-2-1 Grounding: Notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste.",
      "Loving-Kindness Visualization: Picture someone you love and imagine sending them peaceful, warm feelings. Include yourself in this loving energy.",
      "Mental Snow Globe: Imagine your worrying thoughts as snowflakes in a snow globe. Watch them swirl, then slowly settle as your mind becomes calm.",
      "Peaceful Place Visualization: Picture your ideal calm location in vivid detail--feel the temperature, hear the sounds, smell the air.",
      "Progressive Muscle Relaxation: Tense each muscle group for 5 seconds, then release. Start with your feet and work up to your head.",
      "Counting Meditation: Count slowly backwards from 100. If your mind wanders, gently return to counting.",
      "Breath Awareness: Simply focus on the sensation of breathing without changing it. Notice the rise and fall of your chest.",
      "Color Breathing: Imagine breathing in a calming color (like blue or green) and breathing out tension as a different color.",
      "Mantra Repetition: Silently repeat a calming word or phrase like 'peace,' 'calm,' or 'let go' with each breath.",
      "River of Thoughts: Visualize your thoughts as leaves floating down a river. Watch them pass without engaging with them.",
      "Heart Coherence: Place your hand on your heart and breathe slowly while focusing on feelings of appreciation and calm.",
      "Three-Part Breathing: Breathe into your belly, then ribs, then chest. Exhale slowly, releasing each area in reverse order.",
      "Mindful Body Release: With each exhale, imagine sinking deeper into your mattress, releasing the weight of the day."
    ];
  }

  rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setDate() {
    const el = document.getElementById("currentDate");
    const now = new Date();
    const fmt = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    el.textContent = fmt.format(now);
  }

  updateWithFade(id, text) {
    const el = document.getElementById(id);
    el.classList.add("fade-out");
    setTimeout(() => {
      el.textContent = text;
      el.classList.remove("fade-out");
    }, 200);
  }

  generateTonight() {
    this.updateWithFade("tonightQuote", `"${this.rand(this.quotes)}"`);
    this.updateWithFade("journalPrompt", this.rand(this.journalPrompts));
    this.updateWithFade("wellnessInsight", this.rand(this.wellnessInsights));
    this.updateWithFade("mindClearing", this.rand(this.mindClearingTechniques));
  }

  bindUI() {
    const btn = document.getElementById("generateBtn");
    btn.addEventListener("click", () => this.generateTonight());

    // Expand/collapse routine panel (dropdown-like behavior)
    const toggle = document.getElementById("routineToggle");
    const panel = document.getElementById("routinePanel");
    const chevron = document.getElementById("chevron");
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
      chevron.textContent = expanded ? "▸" : "▾";
    });
  }

  init() {
    this.setDate();
    this.bindUI();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new BedtimeWellnessApp();
  app.init();
});
