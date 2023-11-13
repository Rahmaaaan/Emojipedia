const emojipedia = [
  {
    id: "1",
    emoji: "😀",
    name: "Grinning Face",
    meaning: "Genuine happiness, positivity, delight."
  },
  {
    id: "2",
    emoji: "😃",
    name: "Grinning Face With Big Eyes",
    meaning: "Happiness, delight, laughter."
  },
  {
    id: "3",
    emoji: "😄",
    name: "Grinning Face With Smiling Eyes",
    meaning: "When something is so funny you are literally laughing."
  },
  {
    id: "4",
    emoji: "😁",
    name: "Beaming Face With Smiling Eyes",
    meaning: "Seriously hilarious."
  },
  {
    id: "5",
    emoji: "😆",
    name: "Grinning Squinting Face",
    meaning: "Too funny! Stop before I pee myself."
  },
  {
    id: "6",
    emoji: "😅",
    name: "Grinning Face With Sweat",
    meaning:
      "Laughing but relieved, like when you’ve escaped a close call or resolved a stressful situation."
  },
  {
    id: "7",
    emoji: "🤣",
    name: "Rolling On The Floor Laughing",
    meaning: "Hysterical laughter."
  },
  {
    id: "8",
    emoji: "😂",
    name: "Face With Tears Of Joy",
    meaning:
      "I’m laughing but I’m also crying! Unsurprisingly, this was the most popular emoji of 2021."
  },
  {
    id: "9",
    emoji: "🙂",
    name: "Slightly Smiling Face",
    meaning:
      "The equivalent of someone saying “oh, that’s so funny” with a completely straight face. Brutal."
  },
  {
    id: "10",
    emoji: "🙃",
    name: "Upside-Down Face",
    meaning:
      "Irony, sarcasm, facetiousness, laughing in the face of despair. (“Great news, my rent just went up 🙃”). Best used with friends."
  },
  {
    id: "11",
    emoji: "😉",
    name: "Winking Face",
    meaning: "Flirtatious or “just kidding!”, depending on the context."
  },
  {
    id: "12",
    emoji: "😊",
    name: "Smiling Face With Smiling Eyes",
    meaning: "Smiling, but with humility or warmth."
  },
  {
    id: "13",
    emoji: "😇",
    name: "Smiling Face With Halo",
    meaning:
      "Angelic, innocent, sweet. When used in a joking manner, it can mean, “Who, me? I’d never do that!”"
  },
  {
    id: "14",
    emoji: "🥰",
    name: "Smiling Face With Hearts",
    meaning:
      "“Wow, I love it/this/you!” Love, friendship, adoration. One of the most popular emoji of last year."
  },
  {
    id: "15",
    emoji: "😍",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "When you see something that makes you go “awww!” Also one of the top-10 emoji of 2021, according to Emojipedia."
  },
  {
    id: "16",
    emoji: "🤩",
    name: "Star-Struck",
    meaning: "“Wow, that dress makes you look like J Lo at the 2000 Grammys!”"
  },
  {
    id: "17",
    emoji: "😘",
    name: "Face Blowing A Kiss",
    meaning: "Can be used as an affectionate greeting or sign-off."
  },
  {
    id: "18",
    emoji: "😗",
    name: "Kissing Face",
    meaning:
      "A restrained smooch or whistling. Not sure who is using this one, TBH!"
  },
  {
    id: "19",
    emoji: "😚",
    name: "Kissing Face With Closed Eyes",
    meaning:
      "The flushed cheeks indicate romance or friendship. A more genuine kiss."
  },
  {
    id: "20",
    emoji: "😙",
    name: "Kissing Face With Smiling Eyes",
    meaning: "A polite or friendly kiss."
  },
  {
    id: "21",
    emoji: "😋",
    name: "Face Savoring Food",
    meaning: "“Yum, that looks so good!”"
  },
  {
    id: "22",
    emoji: "😛",
    name: "Face With Tongue",
    meaning: "“Wow, you look so good!”"
  },
  {
    id: "23",
    emoji: "😜",
    name: "Winking Face With Tongue",
    meaning: "Goofiness, silliness, joking around."
  },
  {
    id: "24",
    emoji: "🤪",
    name: "Zany Face",
    meaning: "Even goofier than the above, a real “I’m losing it!” vibe."
  },
  {
    id: "25",
    emoji: "😝",
    name: "Squinting Face With Tongue",
    meaning:
      "Hilarity, excitement. Or maybe you just bit into something really sour."
  },
  {
    id: "26",
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "“Show me the money!” Success, prestige, status, or when you splurge and buy the $9 juice at Whole Foods."
  },
  {
    id: "27",
    emoji: "🤗",
    name: "Smiling Face With Open Hands",
    meaning: "A warm embrace."
  },
  {
    id: "28",
    emoji: "🤭",
    name: "Face With Hand Over Mouth",
    meaning: "Shock and disbelief. “OMG”"
  },
  {
    id: "29",
    emoji: "🤫",
    name: "Shushing Face",
    meaning: "“Be quiet!” Or “This is a secret, don’t tell anyone.”"
  },
  {
    id: "30",
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "Skeptical, questioning. “Huh, is that so?” Can be used sarcastically when someone says something that doesn’t make sense."
  },
  {
    id: "31",
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning: "“I won’t say a word.”"
  },
  {
    id: "32",
    emoji: "🤨",
    name: "Face With Raised Eyebrow",
    meaning: "“Excuse me, what?”"
  },
  {
    id: "33",
    emoji: "😐",
    name: "Neutral Face",
    meaning:
      "Picture Homer trying to dissolve into the bushes. Trying not to give away any reaction."
  },
  {
    id: "34",
    emoji: "😑",
    name: "Expressionless Face",
    meaning: "“Nope, I’m not engaging with that.”"
  },
  {
    id: "35",
    emoji: "😶",
    name: "Face Without Mouth",
    meaning:
      "At a literal loss for words. Shock, surprise, bafflement, confusion."
  },
  {
    id: "36",
    emoji: "😶‍🌫️",
    name: "Face In Clouds",
    meaning: "A person in a steam room, or maybe hotboxing."
  },
  {
    id: "37",
    emoji: "😏",
    name: "Smirking Face",
    meaning:
      "Sarcasm, joking around, or expressing “Get a load of this guy!” On Snapchat, it means you are one of their best friends, but they’re not one of yours."
  },
  {
    id: "38",
    emoji: "😒",
    name: "Unamused Face",
    meaning: "“Not funny.”"
  },
  {
    id: "39",
    emoji: "🙄",
    name: "Face With Rolling Eyes",
    meaning: "“Not funny and also cringe.”"
  },
  {
    id: "40",
    emoji: "😬",
    name: "Grimacing Face",
    meaning:
      "“Yikes!” On Snapchat, this means your best friend is their best friend too."
  },
  {
    id: "41",
    emoji: "😮‍💨",
    name: "Face Exhaling",
    meaning: "Sighing, expressing relief, or letting out a puff of smoke."
  },
  {
    id: "42",
    emoji: "🤥",
    name: "Lying Face",
    meaning: "Like Pinocchio, this means you told a lie."
  },
  {
    id: "43",
    emoji: "😌",
    name: "Relieved Face",
    meaning: "Serene, unbothered, blissful."
  },
  {
    id: "44",
    emoji: "😔",
    name: "Pensive Face",
    meaning: "Thoughtful, or sad, depressed, downcast."
  },
  {
    id: "45",
    emoji: "😪",
    name: "Sleepy Face",
    meaning: "Tired or sleeping. Yes, that’s a snot bubble."
  },
  {
    id: "46",
    emoji: "🤤",
    name: "Drooling Face",
    meaning: "“That [person or cheeseburger] looks sooooo good.”"
  },
  {
    id: "47",
    emoji: "😴",
    name: "Sleeping Face",
    meaning: "So tired right now."
  },
  {
    id: "48",
    emoji: "😷",
    name: "Face With Medical Mask",
    meaning: "Sick, or taking precautions to avoid getting sick."
  },
  {
    id: "49",
    emoji: "🤒",
    name: "Face With Thermometer",
    meaning: "Definitely sick."
  },
  {
    id: "50",
    emoji: "🤕",
    name: "Face With Head-Bandage",
    meaning: "Sick, with a headache, or hungover."
  },
  {
    id: "51",
    emoji: "🤢",
    name: "Nauseated Face",
    meaning: "“That’s disgusting”"
  },
  {
    id: "52",
    emoji: "🤮",
    name: "Face Vomiting",
    meaning: "“So gross I could puke”"
  },
  {
    id: "53",
    emoji: "🤧",
    name: "Sneezing Face",
    meaning: "Sick, suffering from allergies, or crying into a tissue."
  },
  {
    id: "54",
    emoji: "🥵",
    name: "Hot Face",
    meaning:
      "Sweating— from heat, spicy food, or because you saw something (or someone) you’re really into."
  },
  {
    id: "55",
    emoji: "🥶",
    name: "Cold Face",
    meaning:
      "In addition to the obvious meaning (“I’m freezing!”), this emoji is also used to refer to frosty behavior: “Damn, that’s cold!”"
  },
  {
    id: "56",
    emoji: "🥴",
    name: "Woozy Face",
    meaning:
      "Perfect for any state of confusion or disorientation: drunkenness, bafflement, or exhaustion."
  },
  {
    id: "57",
    emoji: "😵",
    name: "Face With Crossed-Out Eyes",
    meaning: "Shock, surprise, or horror."
  },
  {
    id: "58",
    emoji: "😵‍💫",
    name: "Face With Spiral Eyes",
    meaning:
      "Can be used like the woozy face for confusing situations, as well as dizziness or staring at a Magic Eye puzzle too long."
  },
  {
    id: "59",
    emoji: "🤯",
    name: "Exploding Head",
    meaning: "Mind blowing, awe-inspiring, unbelievable"
  },
  {
    id: "60",
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning:
      "Ready for anything? This emoji signals that you’re down for an adventure. Giddy-up!"
  },
  {
    id: "61",
    emoji: "🥳",
    name: "Partying Face",
    meaning: "For good news, celebrations, happy announcements, and birthdays."
  },
  {
    id: "62",
    emoji: "😎",
    name: "Smiling Face With Sunglasses",
    meaning:
      "When you’re feeling chill, carefree, slick, and under control. On Snapchat, this means ​​one of your best friends is one of their best friends."
  },
  {
    id: "63",
    emoji: "🤓",
    name: "Nerd Face",
    meaning: "When you’re too excited about the upcoming Star Wars movie."
  },
  {
    id: "64",
    emoji: "🧐",
    name: "Face With Monocle",
    meaning:
      "When you’re pondering, looking closely, or thinking deeply about something."
  },
  {
    id: "65",
    emoji: "😕",
    name: "Confused Face",
    meaning:
      "Perfect for strange situations or texts you don’t quite know how to interpret."
  },
  {
    id: "66",
    emoji: "😟",
    name: "Worried Face",
    meaning: "When your friend texts, “Great news! I picked up day-old sushi!”"
  },
  {
    id: "67",
    emoji: "🙁",
    name: "Slightly Frowning Face",
    meaning: "When you’re just a little worried."
  },
  {
    id: "68",
    emoji: "😮",
    name: "Face With Open Mouth",
    meaning: "“Oh wow!” Can be positive or negative."
  },
  {
    id: "69",
    emoji: "😯",
    name: "Hushed Face",
    meaning: "A more muted “uh, wow!” reaction."
  },
  {
    id: "70",
    emoji: "😲",
    name: "Astonished Face",
    meaning: "A “WTF!” emoji for all-purpose bafflement."
  },
  {
    id: "71",
    emoji: "😳",
    name: "Flushed Face",
    meaning: "Embarrassment or shock."
  },
  {
    id: "72",
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "With its big Bambi eyes, this face can be used when asking for a special favor, or when something strikes you as incredibly adorable."
  },
  {
    id: "73",
    emoji: "😦",
    name: "Frowning Face With Open Mouth",
    meaning: "Used for unpleasant surprises or unfortunate events."
  },
  {
    id: "74",
    emoji: "😧",
    name: "Anguished Face",
    meaning:
      "Like the frowning face above, but the raised eyebrows add even more emphasis to your unhappy emotions."
  },
  {
    id: "75",
    emoji: "😨",
    name: "Fearful Face",
    meaning: "When things are not looking good, but you’re not panicking."
  },
  {
    id: "76",
    emoji: "😰",
    name: "Anxious Face With Sweat",
    meaning: "Okay, now you’re panicking."
  },
  {
    id: "77",
    emoji: "😥",
    name: "Sad But Relieved Face",
    meaning:
      "The worst is over— you’re not happy, but it didn’t turn out that bad after all."
  },
  {
    id: "78",
    emoji: "😢",
    name: "Crying Face",
    meaning: "Sad but trying to keep it in check."
  },
  {
    id: "79",
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "One of the most popular emojis, this is used for intense emotions ranging from sadness to relief, happiness, and love."
  },
  {
    id: "80",
    emoji: "😱",
    name: "Face Screaming In Fear",
    meaning: "Horror, terror, just saw the biggest spider in the shower."
  },
  {
    id: "81",
    emoji: "😖",
    name: "Confounded Face",
    meaning: "Frustrated, grumpy, upset."
  },
  {
    id: "82",
    emoji: "😣",
    name: "Persevering Face",
    meaning: "Focused, or maybe you just took a bite of something really sour."
  },
  {
    id: "83",
    emoji: "😞",
    name: "Disappointed Face",
    meaning: "Bummed out, or just plain tired."
  },
  {
    id: "84",
    emoji: "😓",
    name: "Downcast Face With Sweat",
    meaning: "Under a lot of pressure, worried."
  },
  {
    id: "85",
    emoji: "😩",
    name: "Weary Face",
    meaning: "Tired, stressed out, anxious, or worried."
  },
  {
    id: "86",
    emoji: "😫",
    name: "Tired Face",
    meaning: "Even more exhausted and ready to quit."
  },
  {
    id: "87",
    emoji: "🥱",
    name: "Yawning Face",
    meaning: "Definitely ready for bed."
  },
  {
    id: "88",
    emoji: "😤",
    name: "Face With Steam From Nose",
    meaning: "Irritated, annoyed, in a huff."
  },
  {
    id: "89",
    emoji: "😡",
    name: "Pouting Face",
    meaning: "Stronger negative emotions— you’re upset or angry."
  },
  {
    id: "90",
    emoji: "😠",
    name: "Angry Face",
    meaning:
      "When you come home and find someone has eaten the last piece of pizza."
  },
  {
    id: "91",
    emoji: "🤬",
    name: "Face With Symbols On Mouth",
    meaning: "Furious, outraged, just received a parking ticket."
  },
  {
    id: "92",
    emoji: "😈",
    name: "Smiling Face With Horns",
    meaning:
      "Often used in flirtatious ways, this little devil indicates cheekiness."
  },
  {
    id: "93",
    emoji: "👿",
    name: "Angry Face With Horns",
    meaning: "You’re ready to wreak some havoc."
  },
  {
    id: "94",
    emoji: "💀",
    name: "Skull",
    meaning:
      "Death, dying, also used by Gen Z when something is so hilarious you could die."
  },
  {
    id: "95",
    emoji: "☠️",
    name: "Skull And Crossbones",
    meaning:
      "Like the skull above, this can mean “death” or “death from laughter.”"
  },
  {
    id: "96",
    emoji: "💩",
    name: "Pile Of Poo",
    meaning: "When something is awful, but you have a sense of humour about it."
  },
  {
    id: "97",
    emoji: "🤡",
    name: "Clown Face",
    meaning: "When someone is making a fool of themselves."
  },
  {
    id: "98",
    emoji: "👻",
    name: "Ghost",
    meaning: "“Boo!” Can be used for surprising someone, or being silly."
  },
  {
    id: "99",
    emoji: "👽",
    name: "Alien",
    meaning: "Weirdness, eeriness, spooky vibes."
  },
  {
    id: "100",
    emoji: "👾",
    name: "Alien Monster",
    meaning:
      "A friendly little space creature that looks straight from an old arcade game. For that reason, it’s popular with vintage computer and gaming folks."
  },
  {
    id: "101",
    emoji: "🤖",
    name: "Robot",
    meaning: "A charming little robot for weird, nerdy, or technical occasions."
  },
  {
    id: "102",
    emoji: "😺",
    name: "Grinning Cat",
    meaning: "Pleasure, happiness."
  },
  {
    id: "103",
    emoji: "😸",
    name: "Grinning Cat With Smiling Eyes",
    meaning: "Absolutely thrilled."
  },
  {
    id: "104",
    emoji: "😹",
    name: "Cat With Tears Of Joy",
    meaning: "When something is genuinely hilarious or funny."
  },
  {
    id: "105",
    emoji: "😻",
    name: "Smiling Cat With Heart-Eyes",
    meaning: "Love, delight, admiration."
  },
  {
    id: "106",
    emoji: "😼",
    name: "Cat With Wry Smile",
    meaning: "Sarcasm, cheekiness, mischief."
  },
  {
    id: "107",
    emoji: "😽",
    name: "Kissing Cat",
    meaning: "Affection, love, friendship."
  },
  {
    id: "108",
    emoji: "🙀",
    name: "Weary Cat",
    meaning: "Alarm, fear, horror."
  },
  {
    id: "109",
    emoji: "😿",
    name: "Crying Cat",
    meaning: "Sad, heartbroken, disappointed."
  },
  {
    id: "110",
    emoji: "😾",
    name: "Pouting Cat",
    meaning: "Angry, annoyed, upset."
  },
  {
    id: "111",
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    meaning:
      "“OMG! I don’t want to see that!” Cringing, embarrassed, or surprised."
  },
  {
    id: "112",
    emoji: "🙉",
    name: "Hear-No-Evil Monkey",
    meaning: "“Stop! I don’t want to hear that!” Shocked, surprised, bashful."
  },
  {
    id: "113",
    emoji: "🙊",
    name: "Speak-No-Evil Monkey",
    meaning: "“I can’t believe it!” or “Oops! I shouldn’t have said that.”"
  }
];

export default emojipedia;
