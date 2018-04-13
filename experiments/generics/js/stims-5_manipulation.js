var stim_properties = [
  // { property: "have spots", type: "physical" },
  // { property: "have brown fur", type: "physical" },
  // { property: "have very long wings", type: "physical" },
  // { property: "have an exquisite sense of smell", type: "physical" },
  // { property: "have intensely beautiful feathers", type: "physical" },
  // { property: "live to be twenty years old", type: "physical" },
  // { property: "live to be a hundred years old", type: "physical" },
  // { property: "live to be five hundred years old", type: "physical" },

  // { property: "are afraid of loud noises", type: "psychological" },
  // { property: "are afraid of dogs", type: "psychological" },
  // { property: "are intelligent", type: "psychological" },
  // { property: "experience empathy", type: "psychological" },
  // { property: "experience emotions", type: "psychological" },
  // { property: "have personalities", type: "psychological" },
  // { property: "mourn their dead", type: "psychological" },
  // { property: "know when earthquakes are about to happen", type: "psychological" },
  // { property: "know how to open doors", type: "psychological" },

  // { property: "use tools", type: "behavior" },
  // { property: "sleep during the day", type: "behavior"},
  // { property: "sing beautiful songs", type: "behavior"},
  // { property: "swim in shallow pools", type: "behavior"},
  // { property: "do handstands to scare off predators", type: "behavior"},
  // { property: "perform in the circus", type: "behavior"},
  // { property: "ride the subway", type: "behavior"},

  // { property: "capture other animals' territory", type: "behavior_aggressive"},
  // { property: "hunt other animals", type: "behavior_aggressive"},
  // { property: "steal farmers' crops", type: "behavior_aggressive"},
  // { property: "get in fights with other animals", type: "behavior_aggressive"},
  // { property: "pound their chests to display dominance", type: "behavior_aggressive"},
// { property: "carry out premeditated murder", type: "behavior_aggressive"},

  // { property: "eat garbage", type: "diet" },
  // { property: "eat human food", type: "diet" },
  // { property: "eat grass", type: "diet" },
  // { property: "feed on the carcasses of dead animals", type: "diet" },
  // { property: "eat insects", type: "diet" },
  // { property: "eat people", type: "diet" },
  // { property: "cannibalize each other", type: "diet" },
 // { property: "eat cannabis", type: "diet" },
  // { property: "fish in the Hudson River", type: "diet" },

  // { property: "live in trees", type: "habitat" },
  // { property: "live in zoos", type: "habitat" },
  // { property: "live in the hulls of sea vessels", type: "habitat" },
  // { property: "live in urban areas", type: "habitat" },
  // { property: "live in high-rise buildings", type: "habitat" },

  // { property: "carry Lyme disease", type: "disease_other"},
  // { property: "transmit HIV", type: "disease_other"},

  // { property: "develop back problems", type: "disease_self"},
  

 //  { property: "carry malaria", type: "disease_other"},
 //  { property: "get addicted to nicotine", type: "disease_self"},
 //  { property: "transmit rabies", type: "disease_other"},
 //  { property: "have seizures", type: "disease_self"},
 //  { property: "go bald", type: "disease_self"},
 //  { property: "drink soda", type: "diet" },
 //  { property: "drink alcohol left behind by tourists", type: "diet" },
 //   { property: "eat candy wrappers", type: "diet" },
 //  { property: "torture other animals", type: "behavior_aggressive"},
 //  { property: "attack hikers", type: "behavior_aggressive"},
 //   { property: "play with bottlecaps", type: "behavior"},
 //  { property: "chase their tails", type: "behavior"},
 //  { property: "like to cuddle", type: "behavior"},
 //  { property: "know how to ride bicycles", type: "psychological" },
 //  { property: "develop phobias", type: "psychological" },
 // { property: "fly into building windows", type: "behavior"},

 { property: "dax", type: "nonse"}//,
 // { property: "meek", type: "nonse"}

   // { property: "have strange genetic mutations", type: "disease_self"},
  // { property: "get dandruff", type: "disease_self"},
  // { property: "get cancer", type: "disease_self"},
  // { property: "lose their teeth", type: "disease_self"},

  // { property: "give birth underwater", type: "reproduction"},
  // { property: "lay eggs in other birds' nests", type: "reproduction"},
  // { property: "lay eggs without needing fertilization", type: "reproduction"},
  // { property: "attract mates by secreting pheromones", type: "reproduction"},
  // { property: "get erections", type: "reproduction"},
  // { property: "have a menstrual cycle", type: "reproduction"},
  // { property: "have dozens of sexual partners", type: "reproduction"}

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


    var preamble = "The results are shown below:"

    var tasks = {
      speaker: {
        frequencies: [20, 70],
        prompt: "The results of the experiment with SPECIAL were found.",
        utterance: "SPECIAL TARGET.",
        question: "Does SPECIAL QUERY?",
        frequencyStatement: "Your team treated 100 CATEGORY with SPECIAL."
        //" The number of CATEGORY that were successfully PAST (out of 100) with SPECIAL was:"
      },
      listener: {
        prompt: "The results of the experiment with SPECIAL were found.",
        utterance: "SPECIAL TARGET.",
        question: "How many out of 100 UNIT do you think PAST?"
      }
    }

    var rarity = 5; // (how many out of 11 will have it?)

    var zeroDist = gaussian(0, 1.2);
    var sampleNull = function(){
      var s = zeroDist.ppf(Math.random())
      var si = s > 0 ? s : 0
      return Math.round(si)
    }

    var deterministic = gaussian(100, 5);
    var sampleDeterministic = function(){
      var s = deterministic.ppf(Math.random())
      var si = s < 100 ? s : 100
      return Math.round(si)
    }

    var noise = gaussian(0, 4);

    var weak = gaussian(25, 6);
    var half = gaussian(50, 6);
    var strong = gaussian(75, 6);

    var rare_weak_samples = [], 
        rare_half_samples = [],
        rare_strong_samples = [],
        weak_or_strong_samples = [],
        weak_or_deterministic_samples = [],
        uniform_samples = [];


    var uniform_samples = [
      0, 2, 
      24, 27,
      45, 52,
      79, 75,
      100, 97
    ]

    // for (var i=0; i<11; i++){
    //   var s = Math.round(noise.ppf(Math.random()));
    //   if (i == 0) { 
    //     var si = Math.abs(s)
    //   } else if (i==10) {
    //     var si = 100 - Math.abs(s)
    //   } else {
    //     var si = (i*10) + s
    //   }
    //   uniform_samples.push(si)
    // }

    // rare weak distribution
    for (var i=0; i<10; i++){
      if (i < rarity) { // minor component

        rare_weak_samples.push(Math.round(weak.ppf(Math.random())));
        rare_half_samples.push(Math.round(half.ppf(Math.random())));
        rare_strong_samples.push(Math.round(strong.ppf(Math.random())));
        weak_or_strong_samples.push(Math.round(strong.ppf(Math.random())));
        weak_or_deterministic_samples.push(sampleDeterministic());

      } else { // major component

        rare_weak_samples.push(sampleNull());
        rare_half_samples.push(sampleNull());
        rare_strong_samples.push(sampleNull());
        weak_or_strong_samples.push(Math.round(weak.ppf(Math.random())));
        weak_or_deterministic_samples.push(Math.round(weak.ppf(Math.random())));

      }
      // uniform_samples.push(Math.round(Math.random()*100))
    }

    // var uniform_samples = _.map(_.range(10), function(i){
    //   Math.random()*3
    // })


    // console.log(rare_weak_samples)

    var distributions = [
      {
        distribution: "uniform",
        data: _.shuffle(uniform_samples),
      },
      // {
      //   distribution: "rare_weak",
      //   data: _.shuffle(rare_weak_samples)
      // },
      // {
      //   distribution: "rare_half",
      //   data: _.shuffle(rare_half_samples)
      // },
      // {
      //   distribution: "rare_strong",
      //   data: _.shuffle(rare_strong_samples)
      // },
      {
        distribution: "weak_or_strong",
        data: _.shuffle(weak_or_strong_samples)
      },
      // {
      //   distribution: "weak_or_deterministic",
      //   data: _.shuffle(weak_or_deterministic_samples)
      // }
      // {
      //   distribution: "common_weak",
      //   data: _.shuffle(common_weak_samples)
      // },

      // {
      //   distribution: "common_strong",
      //   data: [75, 65, 65, 75, 80, 90, 80, 75, 80, 90]
      // },
      // {
      //   distribution: "rare_deterministic",
      //   data: _.shuffle(rare_deterministic_samples)
      // },
      // {
      //   distribution: "common_deterministic",
      //   data: _.shuffle(common_deterministic_samples)
      // },
      // {
      //   distribution: "weak_or_strong",
      //   data: [85, 75, 15, 75, 10, 90, 90, 80, 10, 20]
      // }
    ]
