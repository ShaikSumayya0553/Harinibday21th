/**
 * Centralized Birthday Surprise Data for Harini
 * Aesthetic Vintage Letters • 21st Birthday Edition
 */

export const BIRTHDAY_INFO = {
  recipient: "Harini",
  age: "21",
  title: "Happy 21st Birthday, Harini ✨",
  subtitle: "5 heartfelt letters carrying secret memories and endless love for our favorite human.",
  introHint: "Tap each letter below to read their message",
  finalTransitionDelayMs: 1200,
  musicTrack: "/music/love-story.mp3",
};

export const PENGUINS = [
  {
    id: 1,
    name: "Letter 1",
    description: "A person who wishes only the best and prays for only good deeds to happen ",
    role: "Letter 1",
    avatar: "/royal/stamp1_heart.png",
    letterBg: "/royal/letter_parchment_bg.png",
    colorTheme: {
      name: "Vintage Burgundy & Gold",
      primary: "#8E1C34",
      primaryLight: "#F8D0D6",
      secondary: "#D4A843",
      paperBg: "#FAF5EE",
      accent: "#5F0F21",
      washi: "bg-gradient-to-r from-red-950 via-amber-700 to-red-950 border-dashed border-amber-400",
      washiPattern: "royal-damask",
      tapeColor: "#7A1629",
      stampText: "NO. 01 • FOR HARINI",
      badgeColor: "bg-[#2D060E] text-[#F3E1B0] border-[#916B25]",
      accentGlow: "rgba(212, 168, 67, 0.4)",
    },
    font: {
      name: "Caveat",
      className: "font-caveat font-bold text-base sm:text-lg md:text-xl leading-relaxed",
      headingClass: "font-caveat font-bold text-lg sm:text-xl md:text-2xl tracking-wide",
      salutationClass: "font-caveat font-bold italic text-base sm:text-lg md:text-xl",
      closingClass: "font-caveat font-bold italic text-base sm:text-lg md:text-xl",
      signatureClass: "font-caveat font-bold text-lg sm:text-xl md:text-2xl",
    },
    animationType: "envelopeOpen",
    letter: {
      title: "Happy Birthday To You! 🤌😚",
      salutation: "My dear lovely palakovaa,",
      paragraphs: [
        "Ni presence entho value add chesindhi and the support 🫂 you're giving is ultimate.",
        "Chala mandhini ni chusee kani nuvu mathram chala different 🫴",
        "You are my fav person💗"
      ],
      closing: "Yours Lovingly,",
      signature: "Saiiiii 💗"
    },
    photo: {
      src: "/images/photo1.jpg",
      fallbackSrc: "/images/photo1.svg",
      caption: "Thumbs up to our sweetest memories and endless smiles! 👍✨",
      date: "Unstoppable Smiles",
      rotation: "-2deg",
      tapeRotation: "3deg",
    },
    stickers: ["🥀", "✨", "🤍", "🕯️"]
  },
  {
    id: 2,
    name: "Letter 2",
    description: "A person with whom  you can rely on without much boundaries and has a genuine beautiful bond ",
    role: "Letter 2",
    avatar: "/royal/stamp2_rose.png",
    letterBg: "/royal/letter_parchment_bg.png",
    colorTheme: {
      name: "Antique Wine & Brass",
      primary: "#7B1A2C",
      primaryLight: "#F5EFEB",
      secondary: "#C5A059",
      paperBg: "#FBF6F0",
      accent: "#4E0815",
      washi: "bg-gradient-to-r from-rose-950 via-amber-800 to-red-950 border-dashed border-amber-400",
      washiPattern: "wine-velvet",
      tapeColor: "#6B1D2F",
      stampText: "NO. 02 • FOR HARINI",
      badgeColor: "bg-[#2A050D] text-[#ECD594] border-[#916B25]",
      accentGlow: "rgba(212, 168, 67, 0.4)",
    },
    font: {
      name: "Cormorant Garamond",
      className: "font-cormorant font-semibold italic text-sm sm:text-base md:text-lg leading-relaxed",
      headingClass: "font-cormorant font-bold text-base sm:text-lg md:text-xl tracking-wide",
      salutationClass: "font-cormorant font-bold italic text-sm sm:text-base md:text-lg",
      closingClass: "font-cormorant font-bold italic text-sm sm:text-base md:text-lg",
      signatureClass: "font-cormorant font-bold text-base sm:text-lg md:text-xl",
    },
    animationType: "slideUp",
    letter: {
      title: "My Dear Sathyabhama 🤍✨",
      salutation: "Harini !",
      paragraphs: [
        "1 Year Mundhu Varaku Nuvvu Not Even Classmet Kuda Kaadhu Collagemet Matramey Anukune Nenu Cut Chesthe Iroju Nen Lechina Kanunchi Padukune Varaku 100 Vishyalu Alochisthe Andhulo 60 Alochanalu Nive..",
        "Harini Ni Ela Surprise Cheyyali Harini Em Chesthe Happy Ga Untundi Hariniki Tvaraga Manchirojulu Ravali Nen Korukune Sathyabhama Jeevitham Thanu Jeevinchali Ila Enno Alochanalu Korikalu..",
        "Navarakuu Eppudu Cheppedhe Nilaa Brathakatam Kastam Nitho Brathakatam Istam And Yeah Nuvvu Korikune Jeevitham Niku Ravali Nuvvu Thirigi Niku Nachale Brathakali Ani Korukunevallalo Katchithanga Nenu Untanu",
        "A Wish Youu Very Very Happiest Birthday My Dear Sathyabhama"
      ],
      closing: "Navvuthu Undu Nitho Nuvvu Undu 🤍🫂✨",
      signature: "ittlu ni gopi"
    },
    photo: {
      src: "/images/photo2.jpg",
      fallbackSrc: "/images/photo2.svg",
      caption: "Watching your grace and artistry shine so brightly! 🎭✨",
      date: "Pure Dedication & Grace",
      rotation: "2deg",
      tapeRotation: "-2deg",
    },
    stickers: ["🕯️", "🌹", "🤍", "✨"]
  },
  {
    id: 3,
    name: "Letter 3",
    description: "A person with whom u can be with no hesitation ,zero filters and no boundaries",
    role: "Letter 3",
    avatar: "/royal/stamp3_butterfly.png",
    letterBg: "/royal/vintage_rose_letter_bg.jpg",
    colorTheme: {
      name: "Starlight & Crimson",
      primary: "#6F1525",
      primaryLight: "#F8EFEA",
      secondary: "#E5C16C",
      paperBg: "#FAF4EC",
      accent: "#460712",
      washi: "bg-gradient-to-r from-red-950 via-amber-700 to-purple-950 border-dashed border-amber-400",
      washiPattern: "starlight-gold",
      tapeColor: "#5F1020",
      stampText: "NO. 03 • FOR HARINI",
      badgeColor: "bg-[#25040B] text-[#F4E7BD] border-[#916B25]",
      accentGlow: "rgba(229, 193, 108, 0.4)",
    },
    font: {
      name: "Patrick Hand",
      className: "font-patrick font-bold text-sm sm:text-base md:text-lg leading-relaxed",
      headingClass: "font-patrick font-bold text-base sm:text-lg md:text-xl tracking-wide",
      salutationClass: "font-patrick font-bold italic text-sm sm:text-base md:text-lg",
      closingClass: "font-patrick font-bold italic text-sm sm:text-base md:text-lg",
      signatureClass: "font-patrick font-bold text-base sm:text-lg md:text-xl",
    },
    animationType: "rotateIn",
    letter: {
      title: "Happy Birthday Raa Mukkuuuuu 😚😚😚",
      salutation: "Hey Mukkuuu,",
      paragraphs: [
        "Asalu nee gurinchi cheppali ante pages saripovu emo...... School lo yeppudu yla connect iyyamo kani appati nuchi peak ra.",
        "Asalu class lo naa venaka kurchoni classes madyalo jokes vesukovadam nuchi late night study hours lo pakkana kurchoni chadukuntunnam ani sollu cheppkovadam ...eka corona iete highlight..thank God u too me in bts and eka my non stop sollu eka no full-stop 😅....",
        "Bore kodutundi ani kuda 1 hr matladadam ...buggalu noppi vachedaka navvukovadam....u the best raa..nee chuttu unnav vallu antha alane navvustu yeppudu full on entertaining untav ...never loose that spark ...",
        "I love you ra mukku 😘😘 no matter where this life takes us .. I'm i mean we (your frnds) will always be there and especially me...I'll definitely be there till I see your mini versions and more in life ....",
        "Pakka oka concert ki veldam....manaki cheyyadaniki inka chalane unnayi kada.... Eka cheppukuntu pote mana list asalu aagdu ....",
        "Have a wonderful birthday 😘😘 and a wonderful year .. enjoy it to the best ...I lub u my rival,love, partner in crime and more...."
      ],
      closing: "-- with love,",
      signature: "your Goli 🌸"
    },
    photo: {
      src: "/images/photo3.jpg",
      fallbackSrc: "/images/photo3.svg",
      caption: "Our unforgetable memories and endless crazy laughs that will stay in my heart forever! 💚✨",
      date: "ur wellwisher",
      rotation: "-2deg",
      tapeRotation: "3deg",
    },
    stickers: ["🌙", "⭐", "✨", "🦋"]
  },
  {
    id: 4,
    name: "Letter 4",
    description: "A person who she never knew she would get this close to but will definetely stay by her side for a lifetime",
    role: "Letter 4",
    avatar: "/royal/stamp4_moon.png",
    letterBg: "/royal/vintage_rose_letter_bg.jpg",
    colorTheme: {
      name: "Vintage Rose & Velvet",
      primary: "#801C2F",
      primaryLight: "#FCE7EA",
      secondary: "#D4A843",
      paperBg: "#FBF5EF",
      accent: "#520A17",
      washi: "bg-gradient-to-r from-red-900 via-amber-800 to-red-950 border-dashed border-amber-400",
      washiPattern: "rose-filigree",
      tapeColor: "#781427",
      stampText: "NO. 04 • FOR HARINI",
      badgeColor: "bg-[#2F060F] text-[#F3E1B0] border-[#916B25]",
      accentGlow: "rgba(212, 168, 67, 0.4)",
    },
    font: {
      name: "Kalam",
      className: "font-kalam font-bold text-[13px] sm:text-sm md:text-base leading-relaxed",
      headingClass: "font-kalam font-bold text-base sm:text-lg md:text-xl tracking-wide",
      salutationClass: "font-kalam font-bold italic text-sm sm:text-base md:text-lg",
      closingClass: "font-kalam font-bold italic text-sm sm:text-base md:text-lg",
      signatureClass: "font-kalam font-bold text-base sm:text-lg md:text-xl",
    },
    animationType: "zoomBounce",
    letter: {
      title: "Happyyy Happyyy Birthdayy Naniii 😙❤️",
      salutation: "Naniiluuu...",
      paragraphs: [
        "I've said this thousand times and i'll say this infinite times more: You are the bestttt thing that has ever happened to me Nani",
        "Since childhood i've be lonely many times but nuv parichayam ayyi nappatinunchi naak aa lotu ni permanent ga teesesav nani....I feel the luckiest on earth because i have you in my life as my dearestt one 🩷",
        "Life has taught us soo many things but through everyy phase , through my every laugh, my every bitter days, on days i felt lonely, you were always there for me nani...you've been my ultimate shoulder on which i can rely on anytime",
        "Nen badhalo unnappudu thodu ga unnav ,nannu navvinchav, em cheyalo teliyani confusion lo unnappudu naa daari nuvve chupinchav...Nuv lekapothe nen unde daanni kaade nanii nuvve naa pranam nijangaa...nen eeroju intha santhoshanga unnanu ante daaniki nuvvee reason",
        "Amma laa chuskunnav, cheyi pettanikunda tinipinchav, Nanna la nannu nadipinchav, tappu chesthe tiiti ayina correct chesav, Akka laa salahalu ichav , edi manchi edi chedu ani cheppi nannu correct way lo ki teeskuvellav, Chelli laa naatho chillara chillara godavalu paddav, Oka bestt friend laa naa thodu ayi unnav,annii opika tho vinnav, annii emotions chusav",
        "Annii chusavee nanii nuvvu, naakosam ennennoo chesav kaani neekosam nen enni cheyagaligano telidu... Nee kastaallo nee badhallo undelekapoyanemo chaala saarlu anipisthundi...nuvvu emo nen badha padthanu anesi jariginappudu cheppavuu",
        "Naa kosam nuv unnattu nee kosam nen undaali kada idee gaa nyayam 😒",
        "Ennennoo cheppali anipisthundi nani kaani cheppe time motham edupu roopam lo ochesthundi adentoo mari 🥲",
        "Nuv oka Varam nanii...nuv naa life lo undadam oka adrustam...Mothaniki nuv naa pranam",
        "Inthaku minchi neeku maatallo ela cheppalo teliyatledu",
        "I Love you more than anyy words could ever describe Naniii bangaramm❤️",
        "Inkaa neethoo prathii bdayy kalisi jarupukundam",
        "Life lo ey phase lo unna, ey emotions ni deal chesthunnaa nen matram neeku one call or one messg away nen unnanu ani gurthu pettuko...Nee kanna naaku life lo edii important kaaduu nanii...You'll always be my Number 1 ❤️",
        "Love Youu for Everythinggg you've ever done",
        "I wish you everyy besttt thing alwayss",
        "Nee life lo unna worries annii poyi nuv ela life enjoy cheyali anukuntunnavoo alaa avvali ani Devudini ni eppudu korukuntaa",
        "Manchiga jobs techukoni settle ayyaka nannu thailand teeskupo ninnu nen korea teeskupothe ide mana deal 😎",
        "Once again Happyyyyy Birthdayyyy my favorite Haniiii",
        "Welcome to 21 club 😎😂"
      ],
      closing: "With Love,",
      signature: "Your One and Only Rohi 🫶🏻🫂"
    },
    photo: {
      src: "/images/photo4.jpg",
      fallbackSrc: "/images/photo4.svg",
      caption: "Laughs, cries, went through everything together—my safe place, my family, and my forever Number 1 ❤️🫂",
      date: "Through Every Laugh & Cry 🫶🏻",
      rotation: "2deg",
      tapeRotation: "-3deg",
    },
    stickers: ["🥀", "🕯️", "🤍", "✨"]
  },
  {
    id: 5,
    name: "Letter 5",
    description: "A person who would love you even if u r an ant  or a molecule",
    role: "Letter 5",
    avatar: "/royal/stamp5_bow.png",
    letterBg: "/royal/vintage_rose_letter_bg.jpg",
    colorTheme: {
      name: "Bordeaux & Antique Gold",
      primary: "#8B1A32",
      primaryLight: "#FDF2F4",
      secondary: "#E2BE64",
      paperBg: "#FAF4EE",
      accent: "#550818",
      washi: "bg-gradient-to-r from-rose-950 via-amber-700 to-rose-950 border-dashed border-amber-400",
      washiPattern: "imperial-velvet",
      tapeColor: "#80152B",
      stampText: "NO. 05 • FOR HARINI",
      badgeColor: "bg-[#2E050D] text-[#ECD594] border-[#916B25]",
      accentGlow: "rgba(226, 190, 100, 0.4)",
    },
    font: {
      name: "Playfair Display",
      className: "font-playfair font-semibold italic text-[13px] sm:text-sm md:text-[15px] leading-relaxed",
      headingClass: "font-playfair font-bold text-base sm:text-lg md:text-xl tracking-wide",
      salutationClass: "font-playfair font-bold italic text-sm sm:text-base md:text-lg",
      closingClass: "font-playfair font-bold italic text-sm sm:text-base md:text-lg",
      signatureClass: "font-playfair font-bold text-base sm:text-lg md:text-xl",
    },
    animationType: "flip",
    letter: {
      title: "Many More Happy Returns of the Day Harinigaaa 🌸",
      salutation: "Dear hariniga,",
      paragraphs: [
        "First of all many more happy returns of the day.I am very grateful to have u .we r soo close for everything we wished for just one step ahead .I am always here for u .Even if smth didn't go well I will be there for u .I know u don't express much when u r sad but I can understand even ur silence.You are the strongest person I have seen.You r the person who deserve best more than anyone.If possible i would ask God to take share of my happiness and fill into you .U r the type of person who would be most happiest even in ur saddest time the pain behind ur smile I can feel wish i would hug .sorry that I am not able to be there when u r struggling i would ask God to share ur pain with me .I don't only want to in ur  bright side i want to be in ur all phases literally all even if I could make u little bit better i would be happier..don't know y i am crying like a fool ... My heart feels so heavy whenever I think of u being sad ...I am really really grateful to have u .Thank you for existing..U made many people life better.. without u may be i won't even be here ...u deserve the best ..I am cursing u to have a best life ..A life where you be relaxed and not worry about tomorrow..A life where u would buy everything u want .. Mainly A life where u will be happiest whole heartedly..A life where u don't need to fake smile...who told soulmate should be partner it's a big lie ...real soulmate is the one where u no need to speak a word and still they could understand everything,the one who wishes for the best whole heartedly for u ...u r my soulmate... Ofc I am urs..Loveee sooooooo muchhhhhhh..Once again many more happy of the day harinigaaa.."
      ],
      closing: "yours lovingly,",
      signature: "summii 💖"
    },
    photo: {
      src: "/images/photo5.jpg",
      fallbackSrc: "/images/photo5.svg",
      caption: "No words needed to feel each other's hearts—my truest soulmate in every lifetime 💖🐮✨",
      date: "My True Soulmate Forever 💜",
      rotation: "-2deg",
      tapeRotation: "2deg",
    },
    stickers: ["🎀", "🥀", "🕯️", "✨"]
  }
];

export const FINAL_SCREEN_DATA = {
  hugHeader: "A Tight Hug For You 🫂",
  missYouText: "I MISS YOU ❤️",
  celebrationTitle: "Happy 21st Birthday, Harini! ✨",
  emotionalMessage: [
    "Even if whole world is against u I would be ur side the more years passes by the more love for u increases .. Thank you soo much for being here till now .. Thank you soo much for existing...thank you soo much for just being urself...it wouldn't be enough  to thank u for everything..tbh thank you is just a small word ..I need to find another word to describe my gratefulness,love for u..."
  ],
  quote: "once again happyyy birthdayyyyyyy lots of love from everyone ...",
  replayButtonText: "✨ Replay Memories ✨",
  revisitHint: "You can tap any letter again to reread anytime!",
};
