// Nightly Mindful Wellness App JavaScript

// Application data
const appData = {
  "quotes": [
    {
      "text": "Sleep is the best meditation. Lay your head down and let go.",
      "author": "Unknown"
    },
    {
      "text": "The night whispers a lullaby, and the stars dance to its tune.",
      "author": "Unknown" 
    },
    {
      "text": "May your dreams be sweet, your worries be few, and your sleep peaceful.",
      "author": "Unknown"
    },
    {
      "text": "As the night blankets the world, let your worries fade and your dreams take flight.",
      "author": "Unknown"
    },
    {
      "text": "In this silent night, let peace flow through your mind and lull you into gentle dreams.",
      "author": "Unknown"
    },
    {
      "text": "Send your worries to the moon and let the night's silence inspire.",
      "author": "Unknown"
    },
    {
      "text": "The stars are proof that the darkest times can produce light.",
      "author": "Unknown"
    },
    {
      "text": "Let the night take you in its arms and rock your troubled thoughts to sleep.",
      "author": "Unknown"
    },
    {
      "text": "Dreams are whispers from your soul. Listen closely.",
      "author": "Unknown"
    },
    {
      "text": "Inhale the peace, exhale the stress, and let the night guide your rest.",
      "author": "Unknown"
    },
    {
      "text": "The universe sings your lullaby tonight. Listen to its melody.",
      "author": "Unknown"
    },
    {
      "text": "Every night is a silent page for your dreams to write their stories.",
      "author": "Unknown"
    },
    {
      "text": "Sleep is nature's way of saying, 'Let's dream of all that can be.'",
      "author": "Unknown"
    },
    {
      "text": "Close your eyes to the world and open your heart to the universe.",
      "author": "Unknown"
    },
    {
      "text": "The night considers no perfection other than the peace of sleep.",
      "author": "Unknown"
    },
    {
      "text": "Rest and be thankful!",
      "author": "William Wordsworth"
    },
    {
      "text": "Sleep is the balm for hurt minds, nature's great second course.",
      "author": "William Shakespeare"
    },
    {
      "text": "Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "As important as it is to have a plan for doing work, it is perhaps more important to have a plan for rest, relaxation, self-care, and sleep.",
      "author": "Akiroq Brost"
    },
    {
      "text": "Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve from the overflow.",
      "author": "Eleanor Brownn"
    }
  ],
  "journalPrompts": [
    "What color would you paint today if it were a canvas? Write about why this color represents your day.",
    "Describe a moment today when you felt completely present. What made that moment special?",
    "If today had a soundtrack, what would be the opening song and the closing song? Why?",
    "Write about something you noticed for the first time today - a detail, feeling, or insight.",
    "What conversation from today is still echoing in your mind? What made it meaningful?",
    "If you could bottle one feeling from today to save for later, what would it be?",
    "Describe today using only sensory details - what you saw, heard, felt, smelled, or tasted.",
    "What would your future self want to remember about this ordinary Tuesday/Wednesday/etc.?",
    "Write about a moment when you surprised yourself today - big or small.",
    "What did your inner voice whisper to you today that you almost missed?",
    "If today were a chapter in your life story, what would the chapter title be?",
    "Describe a texture, sound, or scent from today that brought you comfort.",
    "What small act of kindness did you witness or experience today?",
    "Write about a moment when you felt most like yourself today.",
    "What would you tell someone who had the exact same day as you?",
    "Describe the energy you brought into your interactions today. How did it feel?",
    "What made you pause or slow down today, even for just a moment?",
    "Write about something you're curious about after today's experiences.",
    "If you could send a message to this morning's version of yourself, what would it say?",
    "What story did your day tell you about who you're becoming?",
    "Describe a moment when you felt connected to something bigger than yourself today.",
    "What did you learn about your needs, boundaries, or desires today?",
    "Write about a choice you made today that felt aligned with your values.",
    "What would you want to recreate from today? What would you do differently?",
    "Describe the most peaceful moment of your day in vivid detail."
  ],
  "wellnessFacts": [
    "Your body temperature naturally drops by 1-2 degrees before sleep, which is why a cool room (65-68°F) helps you fall asleep faster.",
    "The blue light from screens suppresses melatonin production for up to 3 hours, which is why dimming lights 1-2 hours before bed improves sleep quality.",
    "Deep breathing activates your parasympathetic nervous system, literally telling your body it's safe to rest and digest.",
    "Writing down tomorrow's tasks for just 5 minutes before bed can help you fall asleep 9 minutes faster by clearing mental clutter.",
    "Your brain clears toxins and consolidates memories during deep sleep, making quality rest essential for mental clarity.",
    "Lavender scent can reduce cortisol levels by up to 23%, which is why aromatherapy is scientifically proven to aid relaxation.",
    "Progressive muscle relaxation can lower your heart rate and blood pressure, preparing your body for restorative sleep.",
    "Consistent sleep and wake times help regulate your circadian rhythm, making it easier to fall asleep naturally.",
    "Gratitude practices before bed increase sleep quality by 25% and reduce the time it takes to fall asleep.",
    "Gentle stretching or yoga releases physical tension and increases melatonin production naturally.",
    "Reading fiction before bed reduces stress levels by up to 68% - more effective than listening to music or drinking tea.",
    "The 4-7-8 breathing technique can help you fall asleep in under 2 minutes by slowing your heart rate and calming anxiety.",
    "Journaling for 15 minutes before bed can improve sleep quality and reduce intrusive thoughts by 37%.",
    "Herbal teas like chamomile contain apigenin, which binds to brain receptors to promote sleepiness and reduce insomnia.",
    "Creating a consistent bedtime routine signals to your brain that it's time to sleep, reducing sleep onset time by up to 20 minutes."
  ],
  "mindClearingTechniques": [
    {
      "name": "4-7-8 Breathing",
      "steps": ["Exhale completely through your mouth", "Close your mouth and inhale through your nose for 4 counts", "Hold your breath for 7 counts", "Exhale through your mouth for 8 counts", "Repeat this cycle 3-4 times", "Focus only on counting and breathing"]
    },
    {
      "name": "Body Scan Meditation",
      "steps": ["Lie comfortably and close your eyes", "Start with your toes - notice any sensations", "Slowly move your attention up through your feet, legs, torso", "Notice each body part without trying to change anything", "Continue to your arms, shoulders, neck, and head", "End by feeling your whole body relaxed and heavy"]
    },
    {
      "name": "5-4-3-2-1 Grounding",
      "steps": ["Name 5 things you can see in your room", "Notice 4 things you can touch (pillow, sheets, mattress)", "Listen for 3 things you can hear", "Find 2 scents you can smell", "Notice 1 thing you can taste", "This brings you fully into the present moment"]
    },
    {
      "name": "Visualization Container",
      "steps": ["Imagine a beautiful container - a box, balloon, or cloud", "Visualize placing all of today's worries inside", "See yourself sealing the container securely", "Tell yourself these concerns will wait safely until morning", "Place the container outside your bedroom door", "Feel the lightness of releasing these thoughts"]
    },
    {
      "name": "Progressive Muscle Relaxation",
      "steps": ["Start with your toes - tense them for 5 seconds, then release", "Move to your calves, thighs, buttocks - tense and release each", "Continue with your abdomen, chest, arms, hands", "Tense your shoulders, neck, and facial muscles, then release", "Notice the difference between tension and relaxation", "Let your whole body sink deeper into relaxation"]
    },
    {
      "name": "Mindful Breathing Meditation",
      "steps": ["Place one hand on your chest, one on your belly", "Breathe naturally and notice which hand moves more", "Gradually shift to deeper belly breathing", "Count breaths: in for 4, hold for 2, out for 6", "When thoughts arise, acknowledge them and return to counting", "Continue for 5-10 minutes until you feel calm"]
    },
    {
      "name": "Thought Labeling",
      "steps": ["Notice when worrying thoughts arise", "Gently label them: 'planning thought,' 'worry thought,' 'memory'", "Don't fight or judge the thoughts", "Simply acknowledge them and let them pass", "Return your attention to your breath", "Practice this gentle observation without attachment"]
    },
    {
      "name": "Gratitude Breathing",
      "steps": ["Inhale slowly for 4 counts", "As you exhale for 6 counts, think of something you're grateful for", "Next breath: inhale peace, exhale another gratitude", "Continue this pattern for 5-10 breaths", "Let gratitude fill your heart with warmth", "Notice how appreciation shifts your mental state"]
    }
  ],
  "bedtimeRoutine": {
    "title": "Your Ideal Bedtime Routine",
    "timeframe": "60-90 minutes before sleep",
    "steps": [
      {
        "time": "90 min before",
        "activity": "Digital Sunset",
        "description": "Put devices away or use blue light filters. Dim lights throughout your home."
      },
      {
        "time": "60 min before", 
        "activity": "Prepare Your Space",
        "description": "Set room temperature to 65-68°F, prepare comfortable sleepwear, tidy your bedroom."
      },
      {
        "time": "45 min before",
        "activity": "Gentle Transition",
        "description": "Take a warm bath or shower, practice gentle stretching, or sip herbal tea."
      },
      {
        "time": "30 min before",
        "activity": "Mindful Activities", 
        "description": "Read, journal, meditate, or listen to calming music. Avoid stimulating content."
      },
      {
        "time": "15 min before",
        "activity": "Final Preparations",
        "description": "Complete your hygiene routine, use this app for tonight's reflection."
      },
      {
        "time": "Bedtime",
        "activity": "Sleep Transition",
        "description": "Practice your chosen mind-clearing technique, set intention for peaceful sleep."
      }
    ]
  }
};

// Global variables for tracking used content to ensure variety
let usedQuoteIndices = [];
let usedPromptIndices = [];
let usedWellnessIndices = [];
let usedTechniqueIndices = [];

// Utility function to get random unused index
function getRandomUnusedIndex(arrayLength, usedIndices) {
    // If all items have been used, reset the used array
    if (usedIndices.length >= arrayLength) {
        usedIndices.length = 0;
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayLength);
    } while (usedIndices.includes(randomIndex));
    
    usedIndices.push(randomIndex);
    return randomIndex;
}

// Function to format current date
function formatCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
}

// Function to load random quote
function loadQuote() {
    const quoteIndex = getRandomUnusedIndex(appData.quotes.length, usedQuoteIndices);
    const quote = appData.quotes[quoteIndex];
    
    document.getElementById('quoteText').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = quote.author;
}

// Function to load random journal prompt
function loadJournalPrompt() {
    const promptIndex = getRandomUnusedIndex(appData.journalPrompts.length, usedPromptIndices);
    const prompt = appData.journalPrompts[promptIndex];
    
    document.getElementById('promptText').textContent = prompt;
}

// Function to load random wellness fact
function loadWellnessFact() {
    const wellnessIndex = getRandomUnusedIndex(appData.wellnessFacts.length, usedWellnessIndices);
    const fact = appData.wellnessFacts[wellnessIndex];
    
    document.getElementById('wellnessText').textContent = fact;
}

// Function to load random mind-clearing technique
function loadTechnique() {
    const techniqueIndex = getRandomUnusedIndex(appData.mindClearingTechniques.length, usedTechniqueIndices);
    const technique = appData.mindClearingTechniques[techniqueIndex];
    
    document.getElementById('techniqueName').textContent = technique.name;
    
    const stepsList = document.getElementById('techniqueSteps');
    stepsList.innerHTML = '';
    
    technique.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
}

// Function to load bedtime routine
function loadBedtimeRoutine() {
    const routine = appData.bedtimeRoutine;
    
    document.getElementById('routineTimeframe').textContent = routine.timeframe;
    
    const stepsContainer = document.getElementById('routineSteps');
    stepsContainer.innerHTML = '';
    
    routine.steps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'routine-step';
        
        stepDiv.innerHTML = `
            <div class="routine-step-time">${step.time}</div>
            <div class="routine-step-content">
                <div class="routine-step-activity">${step.activity}</div>
                <div class="routine-step-description">${step.description}</div>
            </div>
        `;
        
        stepsContainer.appendChild(stepDiv);
    });
}

// Function to refresh all content with smooth animation
function refreshContent() {
    console.log('Refreshing content...');
    
    const refreshBtn = document.getElementById('refreshBtn');
    const sections = document.querySelectorAll('.quote-section, .journal-section, .wellness-section, .technique-section');
    
    // Disable button temporarily
    refreshBtn.disabled = true;
    refreshBtn.textContent = '✨ Refreshing...';
    
    // Add fade-out effect
    sections.forEach(section => {
        section.style.opacity = '0.5';
        section.style.transform = 'translateY(10px)';
    });
    
    setTimeout(() => {
        // Load new content
        loadQuote();
        loadJournalPrompt();
        loadWellnessFact();
        loadTechnique();
        
        // Clear journal input
        const journalInput = document.getElementById('journalInput');
        if (journalInput) {
            journalInput.value = '';
        }
        
        // Restore sections with fade-in
        setTimeout(() => {
            sections.forEach(section => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            });
            
            // Re-enable button
            refreshBtn.disabled = false;
            refreshBtn.innerHTML = '<span>✨</span> Refresh Tonight\'s Content';
            
            console.log('Content refreshed successfully!');
            
            // Smooth scroll to top
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        }, 100);
    }, 300);
}

// Function to initialize the app
function initializeApp() {
    console.log('Initializing Nightly Mindful Wellness App...');
    
    // Set current date
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = formatCurrentDate();
    }
    
    // Load initial content
    loadQuote();
    loadJournalPrompt();
    loadWellnessFact();
    loadTechnique();
    loadBedtimeRoutine();
    
    // Set up refresh button with proper event handling
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        // Remove any existing event listeners
        refreshBtn.replaceWith(refreshBtn.cloneNode(true));
        const newRefreshBtn = document.getElementById('refreshBtn');
        
        newRefreshBtn.addEventListener('click', function(e) {
            e.preventDefault();
            refreshContent();
        });
        
        console.log('Refresh button event listener attached');
    }
    
    // Auto-focus journal textarea when user clicks in that section
    const journalSection = document.querySelector('.journal-section');
    const journalTextarea = document.getElementById('journalInput');
    
    if (journalSection && journalTextarea) {
        journalSection.addEventListener('click', (e) => {
            if (e.target !== journalTextarea && !journalTextarea.contains(e.target)) {
                setTimeout(() => journalTextarea.focus(), 100);
            }
        });
    }
    
    // Add smooth transitions
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    console.log('Nightly Mindful Wellness App initialized successfully! 🌙✨');
}

// Add button click animation
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn, button')) {
        const btn = e.target;
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    }
});

// Prevent accidental refresh with Ctrl+R
window.addEventListener('beforeunload', (e) => {
    const journalContent = document.getElementById('journalInput')?.value.trim();
    if (journalContent && journalContent.length > 10) {
        e.preventDefault();
        e.returnValue = 'Your journal entry will be lost. Use the refresh button to generate new content.';
        return e.returnValue;
    }
});

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Export functions for potential external use
window.WellnessApp = {
    refreshContent,
    loadQuote,
    loadJournalPrompt,
    loadWellnessFact,
    loadTechnique
};