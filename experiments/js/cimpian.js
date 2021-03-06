// replication of CBG exp 3 (accidental properties)

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
      $("#total-num").html(exp.numTrials);
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.implied_prevalence = slide({
    name: "implied_prevalence",

   // present : _.shuffle(_.range(numTrials)),
  present : _.range(exp.numTrials),
    //this gets run only at the beginning of the block
    present_handle : function(stim_num) {
      this.startTime = Date.now();

      $(".err").hide();
      $("#text_response").val('')

      this.stim = exp.stims[stim_num]; // allstims should be randomized, or stim_num should be
      this.trialNum = stim_num;

      console.log(this.stim)


      //  the following commands work only because there are "3 lists" of stimuli, and there are 3 exp.stimtypes (also 3 exp.deteminers)
      //this.determiner = exp.determiner[this.stim.list] // exp.determiner already randomized, grab which stimtype corresponds to list #_this.stim
      this.determiner = exp.determiner[0] // exp.determiner between-subjects var
      //this.stimtype = exp.stimtype[0]; // exp.stimtype between-subjects var

      var query_prompt = "What percentage of "  + this.stim.category + " do you think have " + this.stim.property + "?\n";


      this.determiner=='generic' ?
        this.evidence_prompt = utils.upperCaseFirst(this.stim.category) + " have " + this.stim.property + ".\n" :
        this.evidence_prompt = utils.upperCaseFirst(this.determiner) + " " + this.stim.category +" have " + this.stim.property + ".\n";


      $(".evidence").html(this.evidence_prompt);
      $(".query").html(query_prompt);

      this.init_sliders();
      // exp.sliderPost = [];
      exp.sliderPost = -1;
      $(".slider_number").html("---")

    },

    init_sliders : function() {
        utils.make_slider("#single_slider", this.make_slider_callback());
      // utils.make_slider("#single_slider", function(event, ui) {
      //   exp.sliderPost = ui.value;
      // });
    },
    make_slider_callback : function() {
      return function(event, ui) {
        exp.sliderPost = ui.value;
        $(".slider_number").html(Math.round(exp.sliderPost*100)+"%")
      };
    },

    button : function() {
      if (exp.sliderPost<0) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },
   log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "implied_prevalence",
        "trial_num": this.trialNum,
        "response" : exp.sliderPost,
        "rt":this.rt,
        "stim_type": this.stim.type,
        "stim_determiner": this.determiner,
        "stim_property": this.stim.property,
        "stim_category": this.stim.category
      });
    }
  });

  slides.truth_conditions = slide({
    name: "truth_conditions",


    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : _.range(exp.numTrials),

    //this gets run only at the beginning of the block
    present_handle : function(stim_num) {
      this.startTime = Date.now();
      $(".err").hide();
      $('input[name="radio_button"]').prop('checked', false);

      this.stim = exp.stims[stim_num]; // allstims should be randomized, or stim_num should be
      this.trialNum = stim_num;

      //  the following commands work only because there are "3 lists" of stimuli, and there are 3 exp.stimtypes (also 3 exp.deteminers)
      //this.determiner = exp.determiner[this.stim.list] // exp.determiner already randomized, grab which stimtype corresponds to list #_this.stim
      this.determiner = exp.determiner[0] // exp.determiner between-subjects var
      // BAD
      //this.stimtype = exp.stimtype[this.stim.list]; // exp.stimtype already randomized, grab which stimtype corresponds to list #_this.stim
      // BETTER
      this.prevalence = this.stim.prevalence
    //  this.prevalence = exp.prev_levels[]

      //this.stimtype = exp.stimtype[0]; // exp.stimtype between-subjects var
  //    this.prevalence = exp.prevalence_levels[this.stim.list].splice(0,1)[0] // grab prevalence level for this list

      // this.stimtype == 'bare' ? this.adjective = '' : null;
      // this.stimtype == 'danger' ? this.adjective = 'dangerous ' : null;
      // this.stimtype == 'distinct' ? this.adjective = 'distinctive ': null;
      // this.stimtype == 'irrelevant' ? this.adjective = this.stim.extraneous + ' ': null;
      // this.stimtype == 'danger-distinct' ? this.adjective = 'dangerous ' : null;
      // this.stimtype == 'nondistinctive' ? this.adjective = this.stim.extraneous + ' ': null;
      // this.stimtype == 'accidental' ? this.adjective = '': null;
      // this.stimtype == 'accidental' ? this.stim.color = '': null;

      this.evidence_prompt = this.prevalence+ "% of "  + this.stim.category + " have " + this.stim.property + ".\n";

      // if (this.determiner=='generic'){
      //   var query_prompt = utils.upperCaseFirst(this.stim.category) + " have " + this.stim.color + " " + this.stim.part + ".\n";
      // }
      // else{
      //   var query_prompt = utils.upperCaseFirst(this.determiner) + " " + this.stim.category +" have " + this.stim.color + " " + this.stim.part + ".\n";
      // }

      // if (this.stimtype == 'danger'){
      //   evidence_prompt+=this.stim.danger +"\n No other animals on this island have this kind of " + this.stim.part
      // }

      // if (this.stimtype == 'irrelevant'){
      //   evidence_prompt+=this.stim.irrelevant +"\n Other animals on this island also have this kind of " + this.stim.part
      // }

      // this.determiner=='generic' ?
      //   (this.stimtype=='bare' ?
      //     this.query_prompt = utils.upperCaseFirst(this.stim.category) + " have " + this.stim.color + " " + this.stim.part + ".\n" :
      //     this.query_prompt = utils.upperCaseFirst(this.stim.category) + " have " + this.adjective + this.stim.color + " " + this.stim.part + ".\n"
      //     ) :
      //   (this.stimtype=='bare' ?
      //     this.query_prompt = utils.upperCaseFirst(this.determiner) + " " + this.stim.category +" have " + this.stim.color + " " + this.stim.part + ".\n":
      //     this.query_prompt = utils.upperCaseFirst(this.determiner) + " " + this.stim.category +" have " + this.adjective + this.stim.color + " " + this.stim.part + ".\n"
      //   );

      this.determiner=='generic' ?
        this.query_prompt = utils.upperCaseFirst(this.stim.category) + " have " + this.stim.property + ".\n":
        this.query_prompt = utils.upperCaseFirst(this.determiner) + " " + this.stim.category +" have " + this.property + ".\n";

      // this.stimtype=='danger' ? this.evidence_prompt+=this.stim.dangerous:null;
      // this.stimtype=='distinct' ? this.evidence_prompt+=this.stim.distinctive:null;
      // this.stimtype=='irrelevant' ? this.evidence_prompt+=this.stim.irrelevant:null;
      // this.stimtype == 'danger-distinct' ? this.evidence_prompt+=(this.stim.dangerous + ' ' + this.stim.dangdistinctive):null;
      // this.stimtype=='nondistinctive' ? this.evidence_prompt+=(this.stim.irrelevant + ' ' + this.stim.nondistinctive):null;

      $(".evidence").html(this.evidence_prompt);
      $(".query").html(this.query_prompt);

       // this.init_radiios();
       // exp.sliderPost = null; //erase current slider value
    },

    button : function() {
      if (!($("input:radio[name=radio_button]").is(":checked"))) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();

        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
      }
    },

    log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "truth_conditions",
        "trial_num":this.trialNum,
        "response" : $("input:radio[name=radio_button]:checked").val(),
        "rt":this.rt,
        "stim_type": this.stim.type,
        "stim_prevalence": this.prevalence,
        "stim_determiner": this.determiner,
        "stim_category": this.stim.category,
        "stim_property":this.stim.property
      });
    }
  });


  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments : $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {

//  var prev_levels = ["5","15","25","35","45","55","65","75","85","95"];
  var prev_levels = [
                    ["10","30","50","70","90"],
                    ["10","30","50","70","90"],
                    ["10","30","50","70","90"],
                    ["10","30","50","70","90"],
                    ["10","30","50","70","90"]
                    ];

//  var contexts = ["bare","danger-distinct","nondistinctive"];
  // exp.prev_levels = {"bare":_.shuffle(["5","15","25","35","45","55","65","75","85","95"]),
  //                   contexts[1]:_.shuffle(["5","15","25","35","45","55","65","75","85","95"]),
  //                   contexts[2]:_.shuffle(["5","15","25","35","45","55","65","75","85","95"])};

// var i,j,chunk = exp.nTrials/exp.propTypes.length;
// var stimArray=[]
// var shufStims = _.shuffle(stimsForPrior2)

// for (i=0,j=shufStims.length; i<j; i+=chunk) {
//     stimArray.push(shufStims.slice(i,i+chunk));
// }

exp.numTrials = 25;
var stimCategories = ["part","accidental","disease","color","vague"]

var stimArray = _.shuffle(_.flatten(_.map(stimCategories,
  function(type){
    return _.map(
      _.zip(_.shuffle(stimsForPrior3).slice(0,exp.numTrials/5),["10","30","50","70","90"]),
      function(stimWithPrev){
        var stim = stimWithPrev[0]
        var prev = stimWithPrev[1]
        var prefix = type=="part" ? "" : stim[type]+" "
        return {property: prefix+stim.part,
                type: type,
                prevalence: prev}
    })
  })))

// var stim1 = _.flatten(_.map(stimsForPrior3,
//   function(lst){
//     return _.map(["part","accidental","color","vague"],
//       function(x){
//         var prefix = x=="part" ? "" : lst[x]+" "
//         return {property: prefix+lst.part,
//                 type: x}
//     })
//   }))




// var properties = _.shuffle(_.flatten(_.map(
//   _.zip(exp.propTypes,stimArray),
//   function(typeAndStims){
//     var substims = typeAndStims[1]
//     var type = typeAndStims[0]
//     return _.map(substims,
//       function(s){
//         return {property: prefix+s.part,
//                 type: type}
//       }
//       )
//   }
//   )
// ))

var creatures = _.map(_.shuffle(creatureNames).slice(0,exp.numTrials),
  function(x){return {category: x.category, exemplar: x.exemplar}}
  )

exp.stims =_.map(_.zip(creatures, stimArray),
  function(cp){
    return _.extend(cp[1], cp[0])
  })

exp.stimscopy = exp.stims.slice(0);





  // pair random creature name with property
  // var zipstims = _.shuffle(_.map(
  //   _.zip(
  //     cbgstims,
  //     _.shuffle(creatureNames),
  //     _.flatten(
  //       _.map(prev_levels,
  //           function(y){return _.shuffle(y)}
  //           )
  //       )
  //     ),
  //   function(x){return _.extend(x[0],x[1],{"prev":x[2]})}))


  exp.trials = [];
  exp.catch_trials = [];
//  exp.condition = _.sample(["truth_conditions", "implied_prevalence"]); //can randomize between subject conditions here
  exp.condition = "implied_prevalence";
//  exp.stimtype = _.shuffle(["bare","danger","irrelevant"]);
//  exp.stimtype = ["bare","danger/distinct","nondistinctive"]; //because there is list1, list2, list3
//  exp.determiner = _.shuffle(["generic","some","most"]);
  exp.determiner = ["generic","generic","generic"];
  exp.instructions = "elaborate_instructions";

  // exp.numTrials = zipstims.length;

  // exp.stims = zipstims
  // console.log(zipstims)

  // _.map(_.zip(exp.stims,
  //             _.shuffle(accidental),
  //             _.shuffle(prev_levels)
  //             ),
  //   function(stim){stim[0].accidental = stim[1]; stim[0].prevalence = stim[2]})


  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  console.log(exp.condition)
 // exp.structure=["i0", "two_afc","single_trial","two_afc","single_trial", "one_slider", "multi_slider", 'subj_info', 'thanks'];
   exp.structure=["i0", "instructions", exp.condition,'subj_info', 'thanks'];
   //exp.structure=['subj_info', 'thanks'];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
