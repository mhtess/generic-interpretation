var stim_properties = [
  { property: "have four legs", type: "physical", observable_property: "has four legs", observable: true},
  { property: "have spots", type: "physical", observable_property: "has spots", observable: true},
  { property: "have brown fur", type: "physical" , observable_property: "has brown fur", observable: true},
  { property: "have very long wings", type: "physical" , observable_property: "has very long wings", observable: true},
  { property: "have an exquisite sense of smell", type: "physical", observable_property: "has an exquisite sense of smell", observable: false},
  { property: "have intensely beautiful feathers", type: "physical", observable_property: "has intensely beautiful feathers", observable: true},
  { property: "live to be twenty years old", type: "physical", observable_property: "is twenty years old"},
  // { property: "live to be a hundred years old", type: "physical", observable_property: "is a hundred years old"},
  { property: "live to be five hundred years old", type: "physical", observable_property: "is five hundred years old"},

  { property: "are afraid of loud noises", type: "psychological", observable_property: "is afraid of loud noises"},
  { property: "are afraid of dogs", type: "psychological", observable_property: "is afraid of dogs"},
  { property: "are intelligent", type: "psychological", observable_property: "is intelligent"},
  { property: "experience empathy", type: "psychological", observable_property: "experiences empathy"},
  { property: "experience emotions", type: "psychological", observable_property: "experiences emotions"},
  { property: "have personalities", type: "psychological", observable_property: "has a personality"},
  // { property: "mourn their dead", type: "psychological", observable_property: "mourns its dead"},
  { property: "develop phobias", type: "psychological", observable_property: "develops phobias"},
  { property: "know when earthquakes are about to happen", type: "psychological",  observable_property: "knows when earthquakes are about to happen"},
  { property: "know how to open doors", type: "psychological", observable_property: "knows how to open doors"},
  { property: "know how to ride bicycles", type: "psychological", observable_property: "know how to ride a bicycle"},

  { property: "use tools", type: "behavior", observable_property: "uses tools"},
  { property: "sleep during the day", type: "behavior", observable_property: "sleeps during the day"},
  { property: "sing beautiful songs", type: "behavior", observable_property: "sings beautiful songs"},
  { property: "swim in shallow pools", type: "behavior", observable_property: "swims in shallow pools"},
  // { property: "fly into building windows", type: "behavior", observable_property: "flies into building windows"},
  { property: "do handstands to scare off predators", type: "behavior", observable_property: "does handstands to scare off predators"},
  // { property: "perform in the circus", type: "behavior", observable_property: "performs in the circus"},
  // { property: "ride the subway", type: "behavior", observable_property: "rides the subway"},
  { property: "play with bottlecaps", type: "behavior", observable_property: "plays with bottlecaps"},
  { property: "chase their tails", type: "behavior", observable_property: "chases its tail"},
  { property: "like to cuddle", type: "behavior", observable_property: "likes to cuddle"},

  // { property: "capture other animals' territory", type: "behavior_aggressive", observable_property: "captures other animals' territory"},
  // { property: "hunt other animals", type: "behavior_aggressive", observable_property: "hunts other animals"},
  // { property: "steal farmers' crops", type: "behavior_aggressive", observable_property: "steals farmers' crops"},
  // { property: "get in fights with other animals", type: "behavior_aggressive", observable_property: "gets in fights with other animals"},
  { property: "pound their chests to display dominance", type: "behavior_aggressive", observable_property: "pounds its chest to display dominance"},
  // { property: "torture other animals", type: "behavior_aggressive", observable_property: "tortures other animals"},
  // { property: "attack hikers", type: "behavior_aggressive", observable_property: "attacks hikers"},
  // { property: "carry out premeditated murder", type: "behavior_aggressive", observable_property: "carries out premeditated murder"},

  { property: "eat garbage", type: "diet", observable_property: "eats garbage"},
  { property: "eat human food", type: "diet" , observable_property: "eats human food"},
  { property: "eat grass", type: "diet", observable_property: "eats grass" },
  // { property: "feed on the carcasses of dead animals", type: "diet", observable_property: "feeds on the carcasses of dead animals"},
  { property: "eat insects", type: "diet", observable_property: "eats insects"},
  { property: "eat candy wrappers", type: "diet", observable_property: "eats candy wrappers"},
  // { property: "eat people", type: "diet", observable_property: "eats people"},
  // { property: "cannibalize each other", type: "diet", observable_property: "cannibalizes others of the same species"},
  { property: "drink soda", type: "diet", observable_property: "drinks soda"},
  // { property: "drink alcohol left behind by tourists", type: "diet", observable_property: "drinks alcohol left behind by tourists"},
  { property: "eat cannabis", type: "diet", observable_property: "eats cannabis"},
  // { property: "fish in the Hudson River", type: "diet", observable_property: "fishes in the Hudson River"},

  // { property: "live in trees", type: "habitat", observable_property: "lives in trees"},
  // { property: "live in zoos", type: "habitat", observable_property: "lives in a zoo"},
  // { property: "live in the hulls of sea vessels", type: "habitat", observable_property: "lives in the hulls of a sea vessel"},
  // { property: "live in urban areas", type: "habitat", observable_property: "lives in urban areas"},
  // { property: "live in high-rise buildings", type: "habitat", observable_property: "lives in a high-rise building"},

  { property: "carry Lyme disease", type: "disease_other", observable_property: "carries Lyme disease"},
  { property: "carry malaria", type: "disease_other", observable_property: "carries malaria"},
  { property: "transmit HIV", type: "disease_other", observable_property: "transmits HIV"},
  { property: "transmit rabies", type: "disease_other", observable_property: "transmits rabies"},

  { property: "get addicted to nicotine", type: "disease_self", observable_property: "is addicted to nicotine"},
  { property: "develop back problems", type: "disease_self", observable_property: "has back problems"},
  { property: "have seizures", type: "disease_self", observable_property: "has seizures"},
  { property: "have strange genetic mutations", type: "disease_self", observable_property: "has stange genetic mutations"},
  { property: "get dandruff", type: "disease_self", observable_property: "has dandruff"},
  { property: "get cancer", type: "disease_self", observable_property: "has cancer"},
  { property: "lose their teeth", type: "disease_self", observable_property: "has lost its teeth"},
  { property: "go bald", type: "disease_self", observable_property: "has gone bald"},

  { property: "give birth underwater", type: "reproduction", observable_property: "gives birth underwater"},
  // { property: "lay eggs in other birds' nests", type: "reproduction", observable_property: "lays eggs in other birds' nests"},
  { property: "lay eggs without needing fertilization", type: "reproduction", observable_property: "lays eggs without needing fertilization"},
  { property: "attract mates by secreting pheromones", type: "reproduction", observable_property: "attracts mates by secreting pheromones"},
  { property: "get erections", type: "reproduction", observable_property: "gets erections"},
  // { property: "have a menstrual cycle", type: "reproduction", observable_property: "has a menstrual cycle"},
  // { property: "have dozens of sexual partners", type: "reproduction", observable_property: "has dozens of sexual partners"}

]


var creatureNames =
    [
    {list:0,category: "morseths", exemplar:"morseth"},
    {list:1, category: "ollers", exemplar:"oller"},
    {list:2, category: "kweps", exemplar:"kwep"},
    {list:0,category: "blins", exemplar:"blin"},
    {list:1, category: "reesles", exemplar:"reesle"},
    {list:2, category: "dorbs", exemplar:"dorb"},
    {list:0,category: "zorbs", exemplar:"zorb"},
    {list:1, category: "taifels", exemplar:"taifel"},
    {list:2, category: "trufts", exemplar:"truft"},
    {list:0,category: "daiths", exemplar:"daith"},
    {list:1, category: "mooks", exemplar:"mook"},
    {list:2, category: "frams", exemplar:"fram"},
    {list:0,category: "moxes", exemplar:"mox"},
    {list:1, category: "luzaks", exemplar:"luzak"},
    {list:2, category: "javs", exemplar:"jav"},
    // {list:0,category: "pangolins", exemplar:"pangolin"},
    {list:1, category: "ackles", exemplar:"ackle"},
    {list:2, category: "wugs", exemplar:"wug"},
    {list:0,category: "cheebas", exemplar:" cheeba"},
    {list:1, category: "elleps", exemplar:"ellep"},
    {list:2, category: "kazzes", exemplar:"kaz"},
    {list:0,category: "lorches", exemplar:"lorch"},
    {list:1, category: "plovs", exemplar:"plov"},
    {list:2, category: "grinks", exemplar:"grink"},
    {list:0,category: "glippets", exemplar:"glippet"},
    {list:1, category: "sapers", exemplar:"saper"},
    {list:2, category: "stups", exemplar:"stup"},
    {list:0,category: "krivels", exemplar:"krivel"},
    {list:1, category: "zoovs", exemplar:"zoov"},
    {list:2, category: "thups", exemplar:"thup"},
    {list:3, category: "crullets", exemplar:"crullet"},
    {list:3, category: "feps", exemplar:"fep"},
    {list:3, category: "dobles", exemplar:"doble"},
    {list:3, category: "fendles", exemplar:"fendle"},
    {list:3, category: "dunkels", exemplar:"dunkel"},
    {list:3, category: "ludinos", exemplar:"ludino"},

    ]


    // var preamble = "The results are shown below:"
    //
    // var tasks = {
    //   speaker: {
    //     frequencies: [20, 70],
    //     prompt: "The results of the experiment with SPECIAL were found.",
    //     utterance: "SPECIAL TARGET.",
    //     question: "Does SPECIAL QUERY?",
    //     frequencyStatement: "Your team treated 100 CATEGORY with SPECIAL."
    //     //" The number of CATEGORY that were successfully PAST (out of 100) with SPECIAL was:"
    //   },
    //   listener: {
    //     prompt: "The results of the experiment with SPECIAL were found.",
    //     utterance: "SPECIAL TARGET.",
    //     question: "How many out of 100 UNIT do you think PAST?"
    //   }
    // }
    //
    // var rarity = 3; // (how many out of 10 will have it?)
    //
    // var zeroDist = gaussian(0, 1.2);
    // var sampleNull = function(){
    //   var s = zeroDist.ppf(Math.random())
    //   var si = s > 0 ? s : 0
    //   return Math.round(si)
    // }
    //
    // var deterministic = gaussian(100, 3);
    // var sampleDeterministic = function(){
    //   var s = deterministic.ppf(Math.random())
    //   var si = s < 100 ? s : 100
    //   return Math.round(si)
    // }
    //
    // var weak = gaussian(20, 2);
    // var strong = gaussian(80, 5);
    //
    // var rare_weak_samples = [], common_weak_samples = [];
    // var rare_strong_samples = [], common_strong_samples = [];
    // var rare_deterministic_samples = [], common_deterministic_samples = [];
    //
    // // rare weak distribution
    // for (var i=0; i<10; i++){
    //   if (i < rarity) {
    //     var s = weak.ppf(Math.random())
    //     rare_weak_samples.push(Math.round(s));
    //   } else {
    //     rare_weak_samples.push(sampleNull());
    //   }
    // }
    //
    // // common weak
    // for (var i=0; i<10; i++){
    //   var s = weak.ppf(Math.random())
    //   common_weak_samples.push(Math.round(s));
    // }
    //
    //
    // // common determinsitic
    // for (var i=0; i<10; i++){
    //   common_deterministic_samples.push(sampleDeterministic());
    // }
    // for (var i=0; i<10; i++){
    //   if (i < rarity) {
    //     rare_deterministic_samples.push(sampleDeterministic());
    //   } else {
    //     rare_deterministic_samples.push(sampleNull());
    //   }
    // }
    //
    //
    // // console.log(rare_weak_samples)
    //
    // var distributions = [
    //   {
    //     distribution: "rare_weak",
    //     data: _.shuffle(rare_weak_samples)
    //   },
    //   {
    //     distribution: "common_weak",
    //     data: _.shuffle(common_weak_samples)
    //   },
    //   // {
    //   //   distribution: "rare_strong",
    //   //   data: [75, 0, 65, 0, 80, 90, 0, 0, 80, 90]
    //   // },
    //   // {
    //   //   distribution: "common_strong",
    //   //   data: [75, 65, 65, 75, 80, 90, 80, 75, 80, 90]
    //   // },
    //   {
    //     distribution: "rare_deterministic",
    //     data: _.shuffle(rare_deterministic_samples)
    //   },
    //   {
    //     distribution: "common_deterministic",
    //     data: _.shuffle(common_deterministic_samples)
    //   },
    //   // {
    //   //   distribution: "weak_or_strong",
    //   //   data: [85, 75, 15, 75, 10, 90, 90, 80, 10, 20]
    //   // }
    // ]
