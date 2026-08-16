export type Recording = {
  videoId: string;
  title: string;
  channel: string;
  kind: "String quartet" | "String trio" | "String duo" | "String ensemble" | "String arrangement" | "Original rendition";
};

export const recordingKey = (title: string, composer: string) => `${title}\0${composer}`;

export const recordings: Record<string, Recording> = {
  "Adagio from Suite for Organ\u0000Tomaso Albinoni": {
    "videoId": "qvrjR8vSQtI",
    "title": "Albinoni Adagio (Arranged for String Quartet and Classical Accordion)",
    "channel": "Jon Persson",
    "kind": "String quartet"
  },
  "Adagio from Moonlight Sonata\u0000Ludwig van Beethoven": {
    "videoId": "9EGdL_P2iXE",
    "title": "Beethoven: Piano Sonata No. 14, ‘Moonlight’",
    "channel": "Sony Classical",
    "kind": "Original rendition"
  },
  "Air on the G String\u0000J. S. Bach": {
    "videoId": "4L5cvtjA5-I",
    "title": "Air on the G String (J.S. Bach) - string trio ( violin / violin / cello)",
    "channel": "Deans' Duets",
    "kind": "String trio"
  },
  "Air from Water Music\u0000George Frideric Handel": {
    "videoId": "amZAk5nOXR4",
    "title": "Air from Water Music (Handel) String Trio Wedding Music",
    "channel": "Giardino Strings",
    "kind": "String trio"
  },
  "Allegro\u0000Joseph-Hector Fiocco": {
    "videoId": "xvP18ynsgDc",
    "title": "Allegro (cello quartet)",
    "channel": "Mladen Spasinovici Music Library",
    "kind": "String quartet"
  },
  "Allegro from Eine kleine Nachtmusik\u0000W. A. Mozart": {
    "videoId": "jVOtj1S9g7Y",
    "title": "Allegro from Mozart's String Quartet in G Major (Eine Kleine Nachtmusik)",
    "channel": "Andante Strings",
    "kind": "String quartet"
  },
  "Allelujah\u0000W. A. Mozart": {
    "videoId": "qsNdChQy2qQ",
    "title": "Mozart ‘Alleluia’ for string quartet",
    "channel": "Heather Austin-Stone",
    "kind": "String quartet"
  },
  "Amoroso\u0000Thomas Arne": {
    "videoId": "ACW8NSPjPZc",
    "title": "Trio Sonata No. 5: Largo ed amoroso",
    "channel": "Le Nouveau Quatuor",
    "kind": "Original rendition"
  },
  "Andante Festivo\u0000Jean Sibelius": {
    "videoId": "I_9jde81yxE",
    "title": "Andante Festivo - J.Sibelius - streichbar String Quartet",
    "channel": "Streichquartett streichbar",
    "kind": "String quartet"
  },
  "Andante from Berenice\u0000George Frideric Handel": {
    "videoId": "x8HoCioY_Ss",
    "title": "Berenice, HWV 38: Andante – Larghetto",
    "channel": "Academy of St Martin in the Fields",
    "kind": "Original rendition"
  },
  "Andante from Piano Concerto No. 2\u0000Dmitri Shostakovich": {
    "videoId": "1DFqVqApms8",
    "title": "Piano Concerto No. 2: II. Andante",
    "channel": "Mariinsky Theatre Orchestra",
    "kind": "Original rendition"
  },
  "Andante from Water Music\u0000George Frideric Handel": {
    "videoId": "Lz9riaWOqfY",
    "title": "G.F.Handel Andante from The Water Music - Charleston String Trio The Charleston Virtuosi",
    "channel": "Charleston Virtuosi",
    "kind": "String trio"
  },
  "Andante No. 7\u0000Joseph Haydn": {
    "videoId": "2RppEc6DNPA",
    "title": "Juilliard String Quartet - Haydn String Quartet in F Major, Op.77 No.2, III Andante",
    "channel": "Juilliard String Quartet",
    "kind": "String quartet"
  },
  "Aria from Griselda\u0000Antonio Vivaldi": {
    "videoId": "VHq26vZPsF4",
    "title": "Griselda, RV 718: Act III: Aria: Son infelice tanto (Griselda)",
    "channel": "Giles Tomkins - Topic",
    "kind": "Original rendition"
  },
  "Arioso\u0000J. S. Bach": {
    "videoId": "jaOvPFIHRoY",
    "title": "Arioso (Johann Sebastian Bach) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Ashokan Farewell\u0000Jay Ungar": {
    "videoId": "EE2aGi_nZOk",
    "title": "Ashokan Farewell (Ungar) for Quartet (Trumpet, Violin, Viola, Cello)",
    "channel": "Occasional Brass & Strings",
    "kind": "String ensemble"
  },
  "Ave Maria\u0000Bach / Gounod": {
    "videoId": "x3i3Y8RkfRo",
    "title": "Ave Maria (Bach/Gounod) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Ave Maria\u0000Franz Schubert": {
    "videoId": "PwpPggzZGdw",
    "title": "Ave Maria (Franz Schubert) Wedding String Trio",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Ave Verum Corpus\u0000W. A. Mozart": {
    "videoId": "KnKbbloWNpA",
    "title": "Ave Verum Corpus K. 618 - Mozart - Violin and Cello Duet",
    "channel": "Chicago Street Strings",
    "kind": "String duo"
  },
  "Badinerie\u0000J. S. Bach": {
    "videoId": "N7Oa_k78AY8",
    "title": "Badinerie by Bach",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Bist du bei mir\u0000J. S. Bach": {
    "videoId": "Rq7041T0WpU",
    "title": "Bist du bei mir",
    "channel": "Nature String Quartet",
    "kind": "String quartet"
  },
  "Bourrée\u0000George Frideric Handel": {
    "videoId": "sC3h4SpXU-0",
    "title": "Handel - Bourree - 12th Night Music, String Quartet",
    "channel": "12th Night Music",
    "kind": "String quartet"
  },
  "Brandenburg Concerto No. 1 — Selections\u0000J. S. Bach": {
    "videoId": "NWEHKTyaVc0",
    "title": "Bach: Brandenburg Concerto No. 1",
    "channel": "DW Classical Music",
    "kind": "Original rendition"
  },
  "Brandenburg Concerto No. 2 — Selections\u0000J. S. Bach": {
    "videoId": "VC24gV1o7XQ",
    "title": "Bach: Brandenburg Concerto No. 2",
    "channel": "DW Classical Music",
    "kind": "Original rendition"
  },
  "Brandenburg Concerto No. 3 — Selections\u0000J. S. Bach": {
    "videoId": "IOl7ldijF8Q",
    "title": "Brandenburg Concerto No. 3 - Allegro Moderato (Johann Sebastian Bach) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Brandenburg Concerto No. 4 — Selections\u0000J. S. Bach": {
    "videoId": "MAFJXPWjKJ0",
    "title": "Bach: Brandenburg Concerto No. 4",
    "channel": "Hochrhein Musikfestival Productions",
    "kind": "Original rendition"
  },
  "Brandenburg Concerto No. 5 — Selections\u0000J. S. Bach": {
    "videoId": "FjyunQTt-VI",
    "title": "Brandenburg Concerto No. 5: I. Allegro",
    "channel": "Johann Sebastian Bach – Topic",
    "kind": "Original rendition"
  },
  "Bridal Chorus from Lohengrin\u0000Richard Wagner": {
    "videoId": "O_mUoajFYeg",
    "title": "Bridal Chorus from Lohengrin (Wagner) for String Duo (Violin, Cello)",
    "channel": "Occasional Brass & Strings",
    "kind": "String duo"
  },
  "Canon in D\u0000Johann Pachelbel": {
    "videoId": "es_3F3TLJS0",
    "title": "Wedding String Quartet - Canon in D (Best Version) (Johann Pachelbel)",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Choral\u0000Robert Schumann": {
    "videoId": "hYEokljsKvY",
    "title": "Schumann Choral for string quartet",
    "channel": "theupperstaff",
    "kind": "String quartet"
  },
  "Courante\u0000George Frideric Handel": {
    "videoId": "AW2Xw7yw_oc",
    "title": "Violin and Cello Handel Courante",
    "channel": "Jim Paradies",
    "kind": "String ensemble"
  },
  "Entrance of the Queen of Sheba\u0000George Frideric Handel": {
    "videoId": "Y1c7no_FNGQ",
    "title": "Entrance of The Queen of Sheba for String Duet",
    "channel": "Dolce Ensemble",
    "kind": "String ensemble"
  },
  "Festival March\u0000Felix Mendelssohn": {
    "videoId": "b7syb_rplLY",
    "title": "Cornelius Festival March",
    "channel": "HGHS Chamber Orchestra",
    "kind": "String ensemble"
  },
  "Finlandia Hymn\u0000Jean Sibelius": {
    "videoId": "hh5Ey-B1JhA",
    "title": "Avara-kvartetti: Finlandia-hymni",
    "channel": "Avara-kvartetti",
    "kind": "Original rendition"
  },
  "For All the Saints (Sine Nomine)\u0000Ralph Vaughan Williams": {
    "videoId": "z5B0rHabo-E",
    "title": "For All the Saints for piano and strings",
    "channel": "Kevin Pollock Music",
    "kind": "String ensemble"
  },
  "Gavotte\u0000William Boyce": {
    "videoId": "Oe4Uc2XZJEY",
    "title": "Gavotte by William Boyce",
    "channel": "Community Music School String Ensemble",
    "kind": "String ensemble"
  },
  "Gavotte\u0000François-Joseph Gossec": {
    "videoId": "MneUwk-NTgc",
    "title": "Gavotte - Fine Music Duo",
    "channel": "Fine Music",
    "kind": "String duo"
  },
  "Gavotte\u0000Sergei Prokofiev": {
    "videoId": "AN8v1H2ePfw",
    "title": "Gavotte from Classical Symphony Op. 25 - Sergei Prokofiev",
    "channel": "Event Performances",
    "kind": "String ensemble"
  },
  "Gavotte from Il pastor fido\u0000George Frideric Handel": {
    "videoId": "98LLLT-4Vg4",
    "title": "Il pastor fido, HWV 8c: Gavotte",
    "channel": "English Baroque Soloists",
    "kind": "Original rendition"
  },
  "Gavotte from Orestes\u0000George Frideric Handel": {
    "videoId": "iBElCR0-6fg",
    "title": "Gavotte in A from Oreste",
    "channel": "GeorgiaOnUrMind89",
    "kind": "Original rendition"
  },
  "Gigue from Partenope\u0000George Frideric Handel": {
    "videoId": "bt35sBk2IME",
    "title": "Gigue from Partenope for string quartet",
    "channel": "Mike Magatagan",
    "kind": "String quartet"
  },
  "Gigue from Suite No. 3 in D Major\u0000J. S. Bach": {
    "videoId": "MvkJvZSOmjY",
    "title": "Gigue from Cello Suite No.3 (Johann Sebastian Bach) Wedding Solo Cellist",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Greensleeves\u0000Traditional English": {
    "videoId": "70OAWky5aLo",
    "title": "Greensleeves (Traditional) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Gymnopédies Nos. 1, 2 & 3\u0000Erik Satie": {
    "videoId": "tFj1DLp-1bU",
    "title": "Erik Satie: Gymnopédies",
    "channel": "Cellist Park So-hyun",
    "kind": "String arrangement"
  },
  "String Quartet Selections\u0000Joseph Haydn": {
    "videoId": "6Kg46iY0B9U",
    "title": "String Quartet in C Major, Op. 74 No. 1, Hob. III:72: IV. Finale (Vivace)",
    "channel": "Festetics Quartet - Topic",
    "kind": "String quartet"
  },
  "The Heavens Declare the Glory of God\u0000Benedetto Marcello": {
    "videoId": "4D1bA1sNzk0",
    "title": "Joyous Wedding: the Heavens Declare the Glory of God (Psalm Xix)",
    "channel": "Sue Mitchell-wallace and John Head - Topic",
    "kind": "Original rendition"
  },
  "Hornpipe\u0000George Frideric Handel": {
    "videoId": "XFrWiXiG7-M",
    "title": "Water Music - Hornpipe (Handel) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "If With All Your Hearts\u0000Felix Mendelssohn": {
    "videoId": "nlsvHZcVSGA",
    "title": "Elijah: If With All Your Hearts",
    "channel": "John Mark Ainsley – Topic",
    "kind": "Original rendition"
  },
  "Intermezzo\u0000Pietro Mascagni": {
    "videoId": "dGUDk_jc-HE",
    "title": "Intermezzo Sinfonico from Cavalleria Rusticana (Pietro Mascagni) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Jesu, Joy of Man's Desiring\u0000J. S. Bach": {
    "videoId": "JrxGv3ADcv8",
    "title": "Jesu, Joy Of Man's Desiring (Johann Sebastian Bach) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Jig from Oreste\u0000George Frideric Handel": {
    "videoId": "5DckMFARB2M",
    "title": "Jigg uit Oreste van G.F. Handel door strijktrio, string trio.",
    "channel": "Het Strijkkwartet",
    "kind": "String trio"
  },
  "Joyful, Joyful, We Adore Thee\u0000Ludwig van Beethoven": {
    "videoId": "9hWz-SchH20",
    "title": "Joyful, Joyful, We Adore Thee I GME String Trio I Grace Music Events LLC I Christmas Song",
    "channel": "Grace Music Events LLC",
    "kind": "String trio"
  },
  "La Réjouissance\u0000George Frideric Handel": {
    "videoId": "5DEOQl0zQQo",
    "title": "Firework Music - La Rejouissance (Handel) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Larghetto from Theodora\u0000George Frideric Handel": {
    "videoId": "XcguvB_u6VU",
    "title": "Theodora, HWV 68, Act 1: Trio (Larghetto e piano)",
    "channel": "William Christie - Topic",
    "kind": "String ensemble"
  },
  "Largo from Xerxes\u0000George Frideric Handel": {
    "videoId": "pdi7alOal9w",
    "title": "String Brothers Trio-Largo from Xerxes",
    "channel": "spadefalcon",
    "kind": "String ensemble"
  },
  "March\u0000George Frideric Handel": {
    "videoId": "8Sz36Wmq2zk",
    "title": "March - Handel - String Trio",
    "channel": "Musika Publishing",
    "kind": "String trio"
  },
  "March from The Marriage of Figaro\u0000W. A. Mozart": {
    "videoId": "m7nXxCxHiZ0",
    "title": "Vox String Quartet - March from the Marriage of Figaro by Mozart",
    "channel": "Vox String Quartet",
    "kind": "String quartet"
  },
  "March from Rinaldo\u0000George Frideric Handel": {
    "videoId": "v5FjEn_zqAM",
    "title": "Rinaldo, Act III: March",
    "channel": "Academy of Ancient Music",
    "kind": "Original rendition"
  },
  "March in D from Tigrane\u0000Alessandro Scarlatti": {
    "videoId": "aEKMxCFPIRY",
    "title": "March in D from Tigrane",
    "channel": "hayahohagen1",
    "kind": "Original rendition"
  },
  "March in D\u0000George Frideric Handel": {
    "videoId": "Sqr-nfIEaKg",
    "title": "March from An Occasional Oratorio (Handel) - String Duo Dallas",
    "channel": "String Duo Dallas",
    "kind": "String duo"
  },
  "March in D Major\u0000J. S. Bach": {
    "videoId": "Zjn410EC1VU",
    "title": "March in D Major by Bach",
    "channel": "Duets by Jesse and Jack",
    "kind": "String duo"
  },
  "Méditation from Thaïs\u0000Jules Massenet": {
    "videoId": "SjlP8PHf1Qo",
    "title": "Meditation From Thais (Jules Massenet) Wedding String Trio",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Menuet from Arminio\u0000George Frideric Handel": {
    "videoId": "hnSKqMUDrBE",
    "title": "Arminio, HWV 36: Menuet",
    "channel": "Armonia Atenea",
    "kind": "Original rendition"
  },
  "Menuet from Eine kleine Nachtmusik\u0000W. A. Mozart": {
    "videoId": "qSK3Fr-eFn0",
    "title": "Eine Kleine Nachtmusik (Menuetto) - by Mozart - violin + cello duet",
    "channel": "Deans' Duets",
    "kind": "String duo"
  },
  "Menuet from Il pastor fido\u0000George Frideric Handel": {
    "videoId": "oXdLz_E8Rdg",
    "title": "Handel: Il pastor fido, HWV 8c: Menuet (Arr. Beecham)",
    "channel": "London Symphony Orchestra",
    "kind": "Original rendition"
  },
  "Menuet from Imeneo\u0000George Frideric Handel": {
    "videoId": "VSyD5onJ78Q",
    "title": "Imeneo, HWV 41: Menuet",
    "channel": "Europa Galante",
    "kind": "Original rendition"
  },
  "Menuet from Orfeo ed Euridice\u0000Christoph Willibald Gluck": {
    "videoId": "_tGPXeTYghE",
    "title": "Christoph Willibald GLUCK Menuet & Melodie from ORFEO ed EURIDICE",
    "channel": "Oleg Larionov",
    "kind": "String ensemble"
  },
  "Menuet in G\u0000Ludwig van Beethoven": {
    "videoId": "EN49rtcQmxY",
    "title": "Beethoven Minuet in G duo",
    "channel": "eilishdevine",
    "kind": "String duo"
  },
  "Minuetto from String Quintet in E Major\u0000Luigi Boccherini": {
    "videoId": "wjtgNC7QUFA",
    "title": "Minuet by Luigi Boccherini",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "My Heart Ever Faithful\u0000J. S. Bach": {
    "videoId": "Xnh3OO1SKxc",
    "title": "Austin Wedding Music - My Heart Ever Faithful Aria by Johann Sebastian Bach for String Quartet",
    "channel": "Will Taylor",
    "kind": "String quartet"
  },
  "O Perfect Love\u0000Joseph Barnby": {
    "videoId": "JoYrw6Ri9o0",
    "title": "O Perfect Love  - Trio for three violins",
    "channel": "Yongseok Kwon",
    "kind": "String ensemble"
  },
  "Panis Angelicus\u0000César Franck": {
    "videoId": "PafzhrgIrsE",
    "title": "Panis Angelicus by Cesar Franck - for String Quartet",
    "channel": "Manor House Music",
    "kind": "String quartet"
  },
  "Pavane\u0000Maurice Ravel": {
    "videoId": "WzEnBlSiiwo",
    "title": "Ravel  Pavane for a Dead Princess, for string quartet, CR301",
    "channel": "fcmusic",
    "kind": "String quartet"
  },
  "Prelude to Te Deum\u0000Marc-Antoine Charpentier": {
    "videoId": "STa3GFpUZvM",
    "title": "Prelude To Te Deum (Charpentier) by Amicus Strings",
    "channel": "Amicus Strings",
    "kind": "String ensemble"
  },
  "Presto from Sonatina in F\u0000Georg Philipp Telemann": {
    "videoId": "f4PUmOOdbbI",
    "title": "Presto from Sonatina in F Major",
    "channel": "The Parkchestra",
    "kind": "String ensemble"
  },
  "Rigaudon\u0000André Campra": {
    "videoId": "NvPSz7gEtkA",
    "title": "Rigaudon Campra - quartet (violin/violin/cello/keyboard)",
    "channel": "Deans' Duets",
    "kind": "String duo"
  },
  "Rigaudon from Suite No. 5\u0000Henry Purcell": {
    "videoId": "7x5ShdDNN0w",
    "title": "Rigaudon by Henry Purcell",
    "channel": "UWM String Academy",
    "kind": "String ensemble"
  },
  "Romanza from Eine kleine Nachtmusik\u0000W. A. Mozart": {
    "videoId": "_LFf9hGP46s",
    "title": "Eine kleine Nachtmusik: Romance",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Rondeau\u0000J. S. Bach": {
    "videoId": "g_axyPqWQPE",
    "title": "Bach Orchestral Suite No. 2: Rondeau",
    "channel": "the DoPa",
    "kind": "Original rendition"
  },
  "Rondeau\u0000Jean-Joseph Mouret": {
    "videoId": "yNCuvKrxYKc",
    "title": "Rondeau (Mouret) | String Quartet Los Angeles Music [Ocdamia Music Group]",
    "channel": "Ocdamia Music Group, LLC",
    "kind": "String quartet"
  },
  "Rondeau from Ariodante\u0000George Frideric Handel": {
    "videoId": "9WLJZ3I98Dc",
    "title": "Handel: Ariodante HWV 33 / Act 3: Rondeau",
    "channel": "English Chamber Orchestra - Topic",
    "kind": "Original rendition"
  },
  "Rondeau from Symphonies de Fanfares\u0000Jean-Joseph Mouret": {
    "videoId": "yNCuvKrxYKc",
    "title": "Rondeau (Mouret) | String Quartet Los Angeles Music [Ocdamia Music Group]",
    "channel": "Ocdamia Music Group, LLC",
    "kind": "String quartet"
  },
  "Rondo Alla Turca\u0000W. A. Mozart": {
    "videoId": "7RrPRsmaUGw",
    "title": "W.A. Mozart, arr D. Loschen:  ‘Rondo alla turca’",
    "channel": "The Rivers School Conservatory",
    "kind": "String ensemble"
  },
  "Rondo from Incidental Music\u0000Henry Purcell": {
    "videoId": "69BMK7F92O0",
    "title": "\"Rondo\" from the Incidental Music Abdelazer by Henry Purcell",
    "channel": "Kageki Nagao",
    "kind": "Original rendition"
  },
  "Salut d'Amour\u0000Edward Elgar": {
    "videoId": "mSk2mHk3cPQ",
    "title": "Salut d'Amour - String Quartet",
    "channel": "VettaQuartet",
    "kind": "String quartet"
  },
  "Scheherazade Theme\u0000Nikolai Rimsky-Korsakov": {
    "videoId": "3jaihSY8h9w",
    "title": "N. RIMSKY-KORSAKOV - \"SCHEHERAZADE THEME\", Szlubowska-Bateman Duo ( Violin/Cello).",
    "channel": "Musical Moments With Marta",
    "kind": "String duo"
  },
  "Music for the Royal Fireworks — Selections\u0000George Frideric Handel": {
    "videoId": "9ft_neezrdY",
    "title": "La réjouissance from Music for the Royal Fireworks",
    "channel": "Andrew Simpson",
    "kind": "String ensemble"
  },
  "Water Music — Selections\u0000George Frideric Handel": {
    "videoId": "NsEXLQhh3jY",
    "title": "Water Music - Air (Handel) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Serenade — Andante Cantabile\u0000Joseph Haydn": {
    "videoId": "-HOHl15bO1g",
    "title": "Joseph Haydn, Serenade, Andante cantabile",
    "channel": "dan radu",
    "kind": "Original rendition"
  },
  "Sheep May Safely Graze\u0000J. S. Bach": {
    "videoId": "pKQPUE2zrrA",
    "title": "Sheep May Safely Graze (Johann Sebastian Bach) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Sicilienne from Variations on a Theme by Haydn\u0000Johannes Brahms": {
    "videoId": "FO0d_OWEOsM",
    "title": "Variations on a Theme of Haydn: Sicilienne",
    "channel": "Jenni Olson – Topic",
    "kind": "Original rendition"
  },
  "Simple Gifts\u0000Shaker Melody": {
    "videoId": "IHiGy3GzW0M",
    "title": "String Brothers Trio - Simple Gifts",
    "channel": "spadefalcon",
    "kind": "String ensemble"
  },
  "Sinfonia from Giustino\u0000George Frideric Handel": {
    "videoId": "Ftiko24SCsI",
    "title": "Giustino: Act I Sinfonia",
    "channel": "Nicholas McGegan – Topic",
    "kind": "Original rendition"
  },
  "Sinfonia from Scipione\u0000George Frideric Handel": {
    "videoId": "vdIy6nmZ-A4",
    "title": "Sinfonia II from Scipione",
    "channel": "Mike Magatagan",
    "kind": "Original rendition"
  },
  "Sinfonia from Xerxes\u0000George Frideric Handel": {
    "videoId": "QLGKeO9dkAs",
    "title": "Sinfonia uit Xerxes, G.F.  Handel door strijktrio, string trio",
    "channel": "Het Strijkkwartet",
    "kind": "String trio"
  },
  "Sleeping Beauty Waltz\u0000Pyotr Ilyich Tchaikovsky": {
    "videoId": "bsMS3tKv_hY",
    "title": "Sleeping Beauty Waltz (Tchaikovsky) String Quartet Wedding Music",
    "channel": "Giardino Strings",
    "kind": "String quartet"
  },
  "Sonata in F\u0000George Frideric Handel": {
    "videoId": "w_xS6BQn8QY",
    "title": "G.F. Händel: Sonata in F major for violin and cello",
    "channel": "Robert Žburin",
    "kind": "String ensemble"
  },
  "Song Without Words\u0000Felix Mendelssohn": {
    "videoId": "LRPaXTzGPuA",
    "title": "Song Without Words No. 35",
    "channel": "ECLECTA STRINGS",
    "kind": "String quartet"
  },
  "Spring — Largo\u0000Antonio Vivaldi": {
    "videoId": "pg_qBNRslg4",
    "title": "The Four Seasons - Spring - Largo - by Antonio Vivaldi",
    "channel": "The Wolf Catchers - Cello Quartet",
    "kind": "String quartet"
  },
  "St. Anthony Chorale\u0000Johannes Brahms": {
    "videoId": "X6Juwh450M4",
    "title": "St. Anthony Chorale (Brahms) - Luminous Sounds, Inc.",
    "channel": "Luminous Sounds, Inc.",
    "kind": "String ensemble"
  },
  "Suite from The Fairy Queen\u0000Henry Purcell": {
    "videoId": "K7AbzbN-MqA",
    "title": "Purcell: The Fairy Queen, Z. 629",
    "channel": "Bremer Barockorchester",
    "kind": "Original rendition"
  },
  "Suite in D Major\u0000J. S. Bach": {
    "videoId": "3ZPuY0xkw94",
    "title": "Millenius String Trio - Air - From Suite in D Major - by J.S. Bach",
    "channel": "virgills",
    "kind": "String trio"
  },
  "Tambourin\u0000François-Joseph Gossec": {
    "videoId": "U0Kb4UpQI3Q",
    "title": "Tambourin Gossec  duo millepied  rocchietti",
    "channel": "sylvain millepied",
    "kind": "String duo"
  },
  "The Four Seasons — Excerpts\u0000Antonio Vivaldi": {
    "videoId": "e_k2Nk-C5Ag",
    "title": "iconiQ String Quartet - Largo from \"Winter\" (\"The Four Seasons\"), Vivaldi (exc.)",
    "channel": "iconiQ Strings",
    "kind": "String quartet"
  },
  "The Lord's Prayer\u0000Albert Hay Malotte": {
    "videoId": "beQwgq8Xjw4",
    "title": "The Lord's Prayer by Malotte tenor and quartet Musical Discovery Chamber Players",
    "channel": "chamberplayers",
    "kind": "String ensemble"
  },
  "Theme from The Magic Flute\u0000W. A. Mozart": {
    "videoId": "vgBdH8MJ72U",
    "title": "Mozart The Magic Flute Overture | String Quartet Sheet Music",
    "channel": "String Sheet Music",
    "kind": "String quartet"
  },
  "Theme from Symphony No. 4\u0000Franz Schubert": {
    "videoId": "duf_3WM2neU",
    "title": "Schubert: Symphony No. 4",
    "channel": "Frankfurt Radio Symphony",
    "kind": "Original rendition"
  },
  "Theme from Gloria\u0000Antonio Vivaldi": {
    "videoId": "GaFohPpXupE",
    "title": "Trio En Clave de Sol.Gloria in Excelsis Deo   Vivaldi",
    "channel": "pili646",
    "kind": "String ensemble"
  },
  "Three Slavonic Dances\u0000Antonín Dvořák": {
    "videoId": "o2dR6y5YSVw",
    "title": "[OCU Chamber Music Festival 2025] Jacob Shin et al. – Three Slavonic Dances (Dvorak)",
    "channel": "Song Piano Studio",
    "kind": "Original rendition"
  },
  "Träumerei\u0000Robert Schumann": {
    "videoId": "QeZ_KCYSnWc",
    "title": "Schumann: Träumerei (arranged for cello quartet)",
    "channel": "Davis You",
    "kind": "String quartet"
  },
  "Trumpet Tune\u0000Henry Purcell": {
    "videoId": "WEN7ajY47is",
    "title": "Trumpet Tune (Purcell)) String Trio Wedding Music",
    "channel": "Giardino Strings",
    "kind": "String trio"
  },
  "Trumpet Voluntary\u0000Jeremiah Clarke": {
    "videoId": "gDidHEBY8Nw",
    "title": "Trumpet Voluntary composed by Jeremiah Clarke - Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Prince of Denmark's March\u0000Jeremiah Clarke": {
    "videoId": "fEgl1TEdvCQ",
    "title": "Prince of Denmark's March (Jeremiah Clarke) Wedding String Trio",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Two Sonatas for Two Violins and Cello\u0000Giuseppe Tartini": {
    "videoId": "tmabQwWhcgE",
    "title": "Tartini Sonata for Two Violins and Cello in G",
    "channel": "Yuting Wu",
    "kind": "String ensemble"
  },
  "Vivace from Sonata in F Major\u0000Georg Philipp Telemann": {
    "videoId": "ll6naT-PBOs",
    "title": "Vivace from Sonata in F Major by Telemann",
    "channel": "Manchester Community Music School",
    "kind": "Original rendition"
  },
  "Wachet auf\u0000J. S. Bach": {
    "videoId": "qVn7rd4pFys",
    "title": "Wachet Auf (Johann Sebastian Bach) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Water Music Suite\u0000George Frideric Handel": {
    "videoId": "zgEQ7r9vzV8",
    "title": "Hornpipe from Water Music Suite in D (Handel)",
    "channel": "The Corwin Trio",
    "kind": "String trio"
  },
  "Wedding March\u0000Felix Mendelssohn": {
    "videoId": "Lc2nsVz13Bc",
    "title": "Wedding March composed by Felix Mendelssohn - Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "When I Am Laid in Earth\u0000Henry Purcell": {
    "videoId": "u5_VIhoZj48",
    "title": "Purcell - When I am Laid in Earth",
    "channel": "Charlie Barber",
    "kind": "Original rendition"
  },
  "Winter\u0000Antonio Vivaldi": {
    "videoId": "YzRfg80FoQs",
    "title": "Winter - The Four Seasons (Vivaldi) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "A Thousand Years\u0000Christina Perri": {
    "videoId": "FhCH7tLk2Zo",
    "title": "A Thousand Years by Christina Perri - Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "A Time for Us\u0000Nino Rota": {
    "videoId": "YK1kX2k40Vo",
    "title": "A Time for Us from Romeo and Juliet",
    "channel": "XinOu Wei Strings",
    "kind": "String quartet"
  },
  "All I Ask of You\u0000Andrew Lloyd Webber": {
    "videoId": "sexUyEIAjdw",
    "title": "All I Ask of You (Andrew Lloyd Webber)",
    "channel": "The Corwin Trio",
    "kind": "String trio"
  },
  "All You Need Is Love\u0000The Beatles": {
    "videoId": "56MYZHnLNXk",
    "title": "All You Need Is Love (The Beatles) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Any Way You Want It\u0000Journey": {
    "videoId": "ENtBDKXoXIM",
    "title": "Any Way You Want It by Journey",
    "channel": "Project String Quartet",
    "kind": "String quartet"
  },
  "At Last\u0000Etta James": {
    "videoId": "ElUiEgki7_I",
    "title": "At Last by Etta James",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Beautiful Day\u0000U2": {
    "videoId": "N3lz4xxE9ZM",
    "title": "Beautiful Day (U2) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Bitter Sweet Symphony\u0000The Verve": {
    "videoId": "aiFxTIDhShE",
    "title": "Bitter Sweet Symphony (  The Verve  ) - GTA Strings: Royal String Orchestra",
    "channel": "Gta Strings",
    "kind": "String ensemble"
  },
  "Can't Help Falling in Love\u0000Elvis Presley": {
    "videoId": "J7S5viqJT9o",
    "title": "Can't Help Falling In Love - Elvis Presley - Stringspace String Quartet",
    "channel": "StringspaceLive",
    "kind": "String quartet"
  },
  "Chasing Cars\u0000Snow Patrol": {
    "videoId": "NOT_GOi3OJY",
    "title": "Chasing Cars (Snow Patrol) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Don't Stop Believin'\u0000Journey": {
    "videoId": "N9mCun23L3U",
    "title": "Don't Stop Believin' | Journey | String Quartet Cover",
    "channel": "Dolce Ensembles",
    "kind": "String quartet"
  },
  "Every Little Thing She Does Is Magic\u0000The Police": {
    "videoId": "9koS5AQFuvw",
    "title": "Every Little Thing She Does Is Magic",
    "channel": "DIVISI strings",
    "kind": "String quartet"
  },
  "Fields of Gold\u0000Sting": {
    "videoId": "tq12H5WkiO0",
    "title": "Fields of Gold - Sting - Stringspace String Quartet",
    "channel": "StringspaceLive",
    "kind": "String quartet"
  },
  "Firework\u0000Katy Perry": {
    "videoId": "KTSB3RsCLM8",
    "title": "Firework | Katy Perry | String Quartet Cover",
    "channel": "Dolce Ensembles",
    "kind": "String quartet"
  },
  "A Groovy Kind of Love\u0000Phil Collins": {
    "videoId": "tkvgSX2uOSk",
    "title": "A Groovy Kind of Love",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Grow Old with Me\u0000John Lennon": {
    "videoId": "8G2bcQh2NL4",
    "title": "Grow Old With Me (Ultimate Mix)",
    "channel": "John Lennon",
    "kind": "Original rendition"
  },
  "Hallelujah\u0000Leonard Cohen": {
    "videoId": "hfKmxhxBVsc",
    "title": "Hallelujah (Leonard Cohen)",
    "channel": "The Corwin Trio",
    "kind": "String trio"
  },
  "Happy Together\u0000The Turtles": {
    "videoId": "Ypk8gih331E",
    "title": "Happy Together - The Turtles - String Quartet",
    "channel": "Hampshire Wedding String Quartet - 4Strings Quartet",
    "kind": "String quartet"
  },
  "Here Comes the Sun\u0000The Beatles": {
    "videoId": "htgAU24srwY",
    "title": "Here Comes The Sun (The Beatles) Wedding String Trio",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Hey, Soul Sister\u0000Train": {
    "videoId": "k58EIlSlI0s",
    "title": "Hey Soul Sister (Train) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "How Beautiful\u0000Twila Paris": {
    "videoId": "5Ww3vCzBMkc",
    "title": "How Beautiful (Twila Paris)",
    "channel": "The Corwin Trio",
    "kind": "String trio"
  },
  "How Sweet It Is\u0000James Taylor": {
    "videoId": "n2Z3WXDODLI",
    "title": "String Pop - How Sweet It Is (James Taylor) - Wedding String Quartet",
    "channel": "Sarlas Music",
    "kind": "String quartet"
  },
  "I Will Be Here\u0000Steven Curtis Chapman": {
    "videoId": "_OcAA-pQsgE",
    "title": "\"I Will Be Here\" for Piano Trio",
    "channel": "Derek Volkmann Music",
    "kind": "String ensemble"
  },
  "I'm Yours\u0000Jason Mraz": {
    "videoId": "wh9ymGxaswM",
    "title": "I'm Yours (Jason Mraz) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "In My Life\u0000The Beatles": {
    "videoId": "M3V562Cbo3Y",
    "title": "In My Life (The Beatles) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Just the Way You Are\u0000Bruno Mars": {
    "videoId": "IKE7Kvxb2-E",
    "title": "Just The Way You Are (Bruno Mars) String Quartet Wedding Music",
    "channel": "Giardino Strings",
    "kind": "String quartet"
  },
  "Love Story\u0000Taylor Swift": {
    "videoId": "KdYeY2GuQy0",
    "title": "Love Story (Taylor Swift) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Marching Bands of Manhattan\u0000Death Cab for Cutie": {
    "videoId": "kgysPwr6HJU",
    "title": "Marching Bands of Manhattan",
    "channel": "Vitamin String Quartet",
    "kind": "String quartet"
  },
  "The Marriage of Figaro\u0000W. A. Mozart": {
    "videoId": "m7nXxCxHiZ0",
    "title": "Vox String Quartet - March from the Marriage of Figaro by Mozart",
    "channel": "Vox String Quartet",
    "kind": "String quartet"
  },
  "Marry Me\u0000Train": {
    "videoId": "48PrRoIUWCk",
    "title": "Marry Me - Train (String Quartet)",
    "channel": "DIVISI strings",
    "kind": "String quartet"
  },
  "Marry You\u0000Bruno Mars": {
    "videoId": "04_mezFERdE",
    "title": "Marry You (Bruno Mars) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Memory from Cats\u0000Andrew Lloyd Webber": {
    "videoId": "BRu4ewDqIFk",
    "title": "Memory from CATS Violin Duo",
    "channel": "Hidemi Gojo",
    "kind": "String duo"
  },
  "Moon River\u0000Henry Mancini": {
    "videoId": "p2k831tfPAg",
    "title": "Moon River (from Breakfast at Tiffany's) - Henry Mancini - Stringspace String Quartet",
    "channel": "StringspaceLive",
    "kind": "String quartet"
  },
  "Oh, Pretty Woman\u0000Roy Orbison": {
    "videoId": "96jic3GZLJ0",
    "title": "Pretty Woman by Roy Orbison - Cello Quartet Cover",
    "channel": "Natasha Jaffe",
    "kind": "String quartet"
  },
  "One Hand, One Heart\u0000Leonard Bernstein": {
    "videoId": "piS8Hq-cgKU",
    "title": "One Hand One Heart from West Side Story - Leonard Bernstein - String Quartet",
    "channel": "Musical Discovery Chamber Players",
    "kind": "String quartet"
  },
  "Only Time\u0000Enya": {
    "videoId": "_iKCDFlN69U",
    "title": "Only time, Enya - String quartet cover - Quartetto Arkimia",
    "channel": "Quartetto Arkiris",
    "kind": "String quartet"
  },
  "Paradise\u0000Coldplay": {
    "videoId": "mp1gU9dlURM",
    "title": "Paradise (Coldplay) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Parent's Prayer\u0000Steven Curtis Chapman": {
    "videoId": "Y6TvOpMP_8g",
    "title": "A Parent's Prayer",
    "channel": "Steven Curtis Chapman",
    "kind": "Original rendition"
  },
  "Purple Haze\u0000Jimi Hendrix": {
    "videoId": "ehOo3uqXykA",
    "title": "Hendrix: PURPLE HAZE - Jim Hall Quartet & Zapolski Quartet",
    "channel": "Alexander Zapolski",
    "kind": "String ensemble"
  },
  "Somewhere Out There\u0000James Horner": {
    "videoId": "pknH-nwknqc",
    "title": "Somewhere Out There by James Horner String Quartet by Musical Discovery Chamber Players",
    "channel": "chamberplayers",
    "kind": "String quartet"
  },
  "Stay with Me\u0000Sam Smith": {
    "videoId": "YCB7jNE30vc",
    "title": "Stay With Me (Sam Smith) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Summertime from Porgy and Bess\u0000George Gershwin": {
    "videoId": "ft2OiGCuQds",
    "title": "Gershwin's \"Summertime\" from \"Porgy and Bess\"- for 3 Violins  #EvergreenViolinTrio #JazzStandard",
    "channel": "Sara D'Sa",
    "kind": "String ensemble"
  },
  "Surely the Presence\u0000Lanny Wolfe": {
    "videoId": "h67MR0b33qA",
    "title": "Surely the Presence",
    "channel": "Lanny Wolfe Music",
    "kind": "Original rendition"
  },
  "Sweet Child o' Mine\u0000Guns N' Roses": {
    "videoId": "GGsqxeZTGb8",
    "title": "Sweet Child O' Mine (Guns N' Roses) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Take My Breath Away\u0000Berlin": {
    "videoId": "0AqWtXG2XUQ",
    "title": "Top Gun - Take My Breath Away (Berlin) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "The Ludlows from Legends of the Fall\u0000James Horner": {
    "videoId": "_NKYVW5eQrQ",
    "title": "The Ludlows (from Legends of the Fall) - Horner",
    "channel": "Pecatonica Music",
    "kind": "String ensemble"
  },
  "The Rose\u0000Amanda McBroom": {
    "videoId": "WEXJL50cucA",
    "title": "The Rose - Bette Midler, String Quartet Jinhee Park(21)",
    "channel": "elecviolin27",
    "kind": "String quartet"
  },
  "Unchained Melody\u0000The Righteous Brothers": {
    "videoId": "9gOapYSgIOU",
    "title": "Unchained Melody | String Quartet Cover | Dolce Ensembles",
    "channel": "Dolce Ensembles",
    "kind": "String quartet"
  },
  "Viva la Vida\u0000Coldplay": {
    "videoId": "qdg1MuoJl-8",
    "title": "Viva la Vida | Coldplay | Astoria String Quartet Cover",
    "channel": "Astoria String Quartet",
    "kind": "String quartet"
  },
  "Wedding Song (There Is Love)\u0000Paul Stookey": {
    "videoId": "dq-FwexXlAU",
    "title": "Wedding Song (There Is Love)",
    "channel": "Libra String Quartet",
    "kind": "String quartet"
  },
  "When a Man Loves a Woman\u0000Percy Sledge": {
    "videoId": "KwPxhWU1koE",
    "title": "When a Man Loves a Woman",
    "channel": "Percy Sledge – Topic",
    "kind": "Original rendition"
  },
  "When You Say Nothing at All\u0000Alison Krauss": {
    "videoId": "Paqy0QugRHE",
    "title": "When You Say Nothing At All (from \"Notting Hill\") - Ronan Keating - Stringspace String Quartet",
    "channel": "StringspaceLive",
    "kind": "String quartet"
  },
  "Wonderwall\u0000Oasis": {
    "videoId": "cvLwKpszb04",
    "title": "Wonderwall - Oasis - Stringspace String Quartet",
    "channel": "StringspaceLive",
    "kind": "String quartet"
  },
  "Wouldn't It Be Nice\u0000The Beach Boys": {
    "videoId": "sxQMxxtxfCo",
    "title": "Wouldn't It Be Nice - The Beach Boys - Stringspace String Quartet",
    "channel": "StringspaceLive",
    "kind": "String quartet"
  },
  "Yellow\u0000Coldplay": {
    "videoId": "eviy0zZ7_tA",
    "title": "Yellow - Coldplay (Bridgerton Season 3) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "You and Me\u0000Lifehouse": {
    "videoId": "eDeSi119GSI",
    "title": "You and Me - Lifehouse String Quartet COVER",
    "channel": "Gta Strings",
    "kind": "String quartet"
  },
  "You Raise Me Up\u0000Josh Groban": {
    "videoId": "Ua8dFRJ3qDM",
    "title": "Josh Groban - You Raise Me Up  - String Quartet COVER GTA Strings",
    "channel": "Gta Strings",
    "kind": "String quartet"
  },
  "Your Song\u0000Elton John": {
    "videoId": "dMuVOEUJx1c",
    "title": "Your Song (Elton John) Wedding String Quartet",
    "channel": "The String Quartet Channel",
    "kind": "String quartet"
  },
  "Bridal Chorus (Here Comes the Bride)\u0000Richard Wagner": {
    "videoId": "NsftOxx3PQk",
    "title": "Ceremonious Strings- DUO- Bridal Chorus- Wagner- Here Comes the Bride",
    "channel": "Ceremonious Strings ",
    "kind": "String duo"
  },
  "Ode to Joy\u0000Ludwig van Beethoven": {
    "videoId": "rpFcann-kok",
    "title": "Beethoven \"Ode to Joy\" by June Trio",
    "channel": "J Lim",
    "kind": "String ensemble"
  },
  "Hornpipe in D\u0000George Frideric Handel": {
    "videoId": "sLvUcBj3eS4",
    "title": "Hornpipe in D (Handel) for String Trio (Violin, Viola, Cello)",
    "channel": "Occasional Brass & Strings",
    "kind": "String trio"
  }
};
