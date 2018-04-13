var replaceTerms = function(stim, label){
  var prompt = stim[label];
  return prompt.replace(/CATEGORY/g,
     stim.category).replace(/EXEMPLAR/g,
       stim.exemplar).replace(/TREATMENT/g,
         stim.treatment).replace(/TARGET/g,
           stim.target).replace(/QUERY/g,
             stim.query).replace(/UNIT/g,
               stim.unit).replace(/PAST/g,
                 stim.past).replace(/SPECIAL/g,
                 stim.targetTreatment)
};

var jsUcfirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function createRadioElement(name, label, checked) {
    var radioHtml = '<label><input type="radio" name="' + name + '" value = "'+label+'"';
    if ( checked ) {
        radioHtml += ' checked="checked"';
    }
    radioHtml += '/>' + label + "</label>";

    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function() {
      $(".err").hide();
      $("#total-num").html(exp.nTrials);
     },
    button : function() {
        exp.go();
    }
  });

  slides.memory_check = slide({
    name : "memory_check",
    start: function() {

     $(".err").hide();

     // this.check_properties = _.shuffle(_.flatten([exp.memory_properties, exp.property.property]))

     // // clear the former content of a given <div id="memory_checkboxes"></div>
     // document.getElementById('memory_buttons').innerHTML = '';

     // for (i=0;i<this.check_properties.length;i++){

     //  var radioElement = createRadioElement("memory_check" ,this.check_properties[i], false)
     //   document.getElementById('memory_buttons').appendChild(radioElement);
     //   document.getElementById('memory_buttons').appendChild(document.createElement("br"));

     // }
   },
    button : function() {

      var property_response = $("#propertyRetrieval").val()
      // var property_response = $('input[name="memory_check"]:checked').val()
      var numeric_response = parseInt($("#resultRetrieval").val())

      // if ( (property_response == null)|| isNaN(numeric_response) ) {
      if ( (property_response == "")|| isNaN(numeric_response) ) {
         $(".err").show();
      } else {

        var passNumeric = exp.stimscopy[0].data.indexOf(numeric_response) != -1 ? 1 : 0;
        // var passProperty = (property_response == exp.property.property) ?  1 : 0;
        var passProperty = ((exp.property.property.indexOf(property_response) > -1) || (property_response.indexOf(exp.property.property) > -1)) ? 1 : 0

        exp.catch_trials.push({
          condition: "memory_check",
          reported_property: property_response,
          reported_results: numeric_response,
          actual_property: exp.property.property,
          pass_property: passProperty,
          pass_numeric: passNumeric,
          pass_both: ((passProperty + passNumeric) == 2) ? 1 : 0
        })
        exp.go(); //use exp.go() if and only if there is no "present" data.
      }
    }
  });


  slides.prior_manipulation = slide({
    name: "prior_manipulation",
    trialNum: 1,

   // present : _.shuffle(_.range(numTrials)),
    present : exp.stims,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      var prompt, utt;
      // console.log(stim)

      $(".followUpQ").hide();
      $("#followUpResponse").val('');
      this.followUp = true;
      // show prior questions and responses
      $(".question0").hide();
      $("#slider_table0").hide();
      // $(".question1").show();
      $("#slider_table1").hide();
      $("#prior_number").hide();
      $("#multi_slider_table").hide();
      $(".left").hide()
      $(".right").hide()

      $(".data").show();

      // hide listener/speaker question
      $(".question2").hide();
      $(".task_prompt").hide();
      // hide listener task responses
      $("#listener_number").hide();
      $("#slider_table2").hide();
      // hide speaker task responses
      $("#speaker_choices").hide();
      $('input[name="speaker"]').prop('checked', false);

      $("#evidenceDescription").hide();
      $(".err").hide();

      $("#continueButton").hide()
      $("#nextExptButton").show()

      this.count = 0;
      // which half of trial we're in
      this.waitFlag = 1;


      if (exp.n_data == 0) {
        $("#nextExptButton").html("Continue");
        this.waitFlag = 2;
      } else {
        $("#nextExptButton").html("Look at information about the next kind of animal");
      }

      // this.switch = true;

      this.startTime = Date.now();

      // replace CATEGORY, EXEMPLAR, TREATMENT, PAST from stimuli
      // var story = replaceTerms(stim, "storyline")

      // story = (exp.n_data == 0) ? story : story + " " +
      // replaceTerms(_.extend(stim, {preamble}), "preamble")

      $(".property").html(stim.property);


      //
      // $(".data").html(story + " " +
      // replaceTerms(_.extend(stim, {preamble}), "preamble"));

      // debugger;
      // this.missing = _.sample([1,2,3,4,5,6,7,8,9]);

      this.missing = exp.n_data == 0 ? "A" : _.sample(_.range(1, stim.data.length - 1));
      // console.log(_.range(stim.data.length - 1))
      this.experimentNames = stim.categories.slice(0, stim.data.length);

      stim.data.splice(this.missing, 0, "?");

      for (var i=0; i<=stim.data.length; i++){
        $("#d" + i).hide()
        $("#h" + i).hide()
        $("#d" + i + "a").hide()
      };
      $("#d-1").hide()
      $("#d-1a").hide()
      $("#d-1").css({"border":"1px solid black","font-size":"14px", "font-weight":"bold", "width":"20%"});
      $("#d-1").html("number who " + stim.property);
      // $("#d-1a").html(stim.unit + " treated")
      $("#d-1a").html("number studied")
      $("#d-1a").css({"border":"1px dotted black"});

      // stim.targetTreatment = "stim.treatment " + this.experimentNames[this.missing]

      exp.sliderPost = -99;//utils.fillArray(-1,this.n_sliders);
      exp.sliderPrior =[];//utils.fillArray(-1,this.n_sliders);
      this.stim = stim;


    },

    nextExperiment: function() {

      var isAnother = (this.count == 0) ? "" : "another "
      $("#d-1").show()
      $("#d-1a").show()
      i =this.count;
      $("#h" + i).show()
      $("#d" + i + "a").show()
      $("#d" + i).show()

      $("#h" + i).html(this.experimentNames[i].category)
      $("#h" + i).css({"font-size":"13px", "border":"1px dotted black"})
      $("#d" + i).css({"padding":"10px", "font-weight":"bold", "border":"1px solid black"});
      $("#d" + i).html(this.stim.data[i]);
      $("#d" + i + "a").html("100")
      $("#d" + i + "a").css({"border":"1px dotted black"});

      $("#evidenceDescription").show();

      var experimentEvent = 'The scientists studied 100 ' + this.stim.categories[i].category + " in their natural habitat over the course of the past year.";
      // experimentEvent = experimentEvent.replace("SPECIAL", this.stim.treatment + " " +  this.experimentNames[i]).replace("CATEGORY", this.stim.category).replace("EXEMPLAR", this.stim.exemplar);

      var experimentResults = 'The scientists found that ' +this.stim.data[i] + ' out of those 100 ' + this.stim.categories[i].category + ' ' + this.stim.property +'.';
      // experimentResults = experimentResults.replace("N", this.stim.data[i]).replace("CATEGORY", this.stim.category).replace("EXEMPLAR", this.stim.exemplar)

      if (this.stim.data[i] == "?") {

        // $("#evidenceDescription").html("Your team "+ experimentEvent + isAnother + " 100 " + this.stim.category + "<br>The results of this experiment have been misplaced so <strong>we don't know</strong> how many " + this.stim.category + " " + this.stim.evidence +".");

        $("#evidenceDescription").html("Unfortunately, we have misplaced these data so we don't yet know how many "+ this.stim.categories[i].category + ' ' + this.stim.property +'.')

        //
        // $("#evidenceDescription").html("Your team treated "+isAnother+"100 " + this.stim.category + " with " + this.stim.treatment + " " + this.experimentNames[i] + ". <br>The results of this experiment have been misplaced so <strong>we don't know</strong> how many " + this.stim.category + " " + this.stim.evidence +".");


      } else {

        $("#evidenceDescription").html(experimentEvent + "<br>" + experimentResults)


          // "Your team "+ experimentEvent + isAnother +  " 100 " + this.stim.category +". <br>As a result, <strong>" + this.stim.data[i] + "</strong> " + this.stim.category +  this.stim.evidence +".");
        // $("#evidenceDescription").html("Your team treated "+isAnother+"100 " + this.stim.category + " with " + this.stim.treatment + " " + this.experimentNames[i] + ". <br>By the end of the experiment, <strong>" + this.stim.data[i] + "</strong> " + this.stim.category +  " "+this.stim.evidence +".");


      }

      if (this.count == (this.experimentNames.length - 1)) {

        if (this.waitFlag == 1) {

          $("#nextExptButton").html("Continue to the next page");
          this.waitFlag = 2;

        } else if (this.waitFlag == 2){
          $("#evidenceDescription").html("<strong>Please take another moment to review the information about animals.</strong>");
          this.waitFlag = 0;

        } else {
          $("#evidenceDescription").hide();
          $("#continueButton").show();
          $("#nextExptButton").hide();

          $(".data").hide();

          for (var i=0; i<=this.stim.data.length; i++){
            $("#d" + i).hide()
            $("#h" + i).hide()
            $("#d" + i + "a").hide()
          };
          $("#d-1").hide();
          $("#d-1a").hide();

          if (exp.condition == "prior"){
            // utils.make_slider("#single_slider0", this.make_slider_callback(0))
            // prior questions and sliders
            $(".question0").html("There were "+exp.nSliders+" other species of animals studied over the past year. For each species, 100 individuals were studied.<br>How many of each species do you think " + this.stim.property + "?")
            // exp.nextExperimentNames =;


            $(".slider_row").remove();
            for (var i=0; i<exp.nextExperimentNames.length; i++) {
              // var sentence_type = exp.nextExperimentNames[i].category;
              var sentence = exp.nextExperimentNames[i].category;
              $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence' + i + '">' + sentence + '</td><td colspan="2"><div id="single_slider' + i + '" class="slider">-------[ ]--------</div></td></tr>');
              utils.match_row_height("#multi_slider_table", ".slider_target");
              this.init_sliders(i)
              // utils.make_slider("#single_slider" + i,  this.make_slider_callback(i))
            }



            $(".question0").show();
            $("#multi_slider_table").show();
            $(".left").show()
            $(".right").show()

            // $("#prior_number").html("---");
            // $("#prior_number").show();

          } else if (exp.condition == "speaker") {
            // this.init_sliders(1)


            utils.make_slider("#single_slider1", this.make_slider_callback(1))

            $(".question2").html(replaceTerms(this.stim, "prompt"));
            $(".task_prompt").show();
            $(".question2").show();

            prompt = replaceTerms(this.stim, "prompt");
            prompt +=  "<br>" + replaceTerms(this.stim, "experiment") + "<br>"+this.stim.experimentResults.replace("N", this.stim.frequency).replace("EXEMPLAR", this.stim.exemplar).replace("CATEGORY", this.stim.category)

            // By the end of the experiment, <strong>" + this.stim.frequency + "</strong> " + this.stim.category +  " "+this.stim.evidence +". <br>";
            utt = 'Judge the following statement: <strong>"' + jsUcfirst(replaceTerms(this.stim, "utterance")).replace("CATEGORY", this.stim.category)+ '"</strong>';

            $("#speaker_choices").show();
            $(".task_prompt").html(prompt);
            $(".question2").html(utt);

          } else if (exp.condition == "listener") {
            // debugger;
            // console.log(this.stim)
            // this.init_sliders(2)

            // debugger;

            $(".task_prompt").html('The scientists found the misplaced data from the ' + this.stim.categories[this.missing].category + ".");
            $(".task_prompt").show();
            $(".question2").show();

            utils.make_slider("#single_slider2", this.make_slider_callback(2))

            // prompt = replaceTerms(this.stim, "prompt") + "<br>" + replaceTerms(this.stim, "experiment");

            utt = '<strong>They say: "<u>' + jsUcfirst(this.stim.categories[this.missing].category) + " " + this.stim.property +'.</u>"' + '</strong><br><br><br>How many out of the 100 ' + this.stim.categories[this.missing].category + ' studied do you think ' + this.stim.property + "?";

            $("#listener_number").html("---");
            $("#listener_number").show();
            $("#slider_table2").show();
            // $(".task_prompt").html(prompt);
            $(".question2").html(utt);
            $(".left").show()
            $(".right").show()

            // prompt = replaceTerms(this.stim, "prompt") + "<br>" + 'Your colleague tells you: <strong>"' + jsUcfirst(replaceTerms(this.stim, "utterance")).replace("CATEGORY", this.stim.category).replace("EXEMPLAR", this.stim.exemplar) + '"</strong>'
            //
            //
            // utt = replaceTerms(this.stim, "experiment") + '"<br>' + replaceTerms(this.stim, "listenerQuestion");


          }

        }
      } else {
        this.count++
      }
    },

    init_sliders : function(i) {
      utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        $("#listener_number").html(Math.round(100*ui.value))
        exp.condition == "prior" ?
          exp.sliderPrior[i] = ui.value :
          exp.sliderPost = ui.value;
      };
    },

    button : function() {
      var speakerResponse = $('input[name="speaker"]:checked').val();
      var prompt, utt;

      var error = 0;
      if (exp.condition == "speaker") {
        if (!speakerResponse) {
          error = 1;
        }
      } else if (exp.condition == "prior") {
        for (var i=0; i<exp.nSliders; i++) {
          if (typeof exp.sliderPrior[i] == 'undefined') {
            error = 1;
          }
        }
        if (exp.sliderPrior.length !== exp.nSliders) {
          error = 1;
        }
      } else if (exp.condition == "listener") {
        if (exp.sliderPost == -99) {
          error = 1;
        };
      }

      error = ( exp.n_data == 0 ) ? 0 : error;

      if (error == 1) {
        $(".err").show();
      } else if (this.followUp) {
        $(".err").hide();
        $(".followUpQ").show()
        this.followUp = false;
        if (exp.condition == "prior") {
            for (var slider_i=0; slider_i<exp.nextExperimentNames.length; slider_i++) {
               $("#single_slider" + slider_i).unbind("mousedown");
            }
        } else if (exp.condition == "listener") {
          $("#single_slider2").unbind("mousedown");
        }
      } else {        
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      var response = [];
      if (exp.condition == "speaker") {
        response = $('input[name="speaker"]:checked').val() == "Yes" ?  1 : 0;
        exp.data_trials.push({
          "trial_type" : "prior_manipulation",
          "condition": exp.condition,
          "trial_num": this.trialNum,
          "rt":this.rt,
          "frequency": this.stim.frequency,
          "category": this.stim.category,
          "story": this.stim.story,
          "distribution": this.stim.distribution,
          "n_data":this.stim.n_data,
          "treatment":this.stim.treatment,
          "unit":this.stim.unit,
          "target":this.stim.target,
          "query": this.stim.query,
          "missing":this.missing,
          "response": response,
          "experimentResults": this.stim.data,
          "label": -99,
          "explanation": $("#followUpResponse").val()
        });
      } else if (exp.condition == "prior") {
        for (var i=0; i<exp.sliderPrior.length; i++){
          exp.data_trials.push({
            "trial_type" : "prior_manipulation",
            "condition": exp.condition,
            "trial_num": this.trialNum,
            "rt":this.rt,
            // "frequency": -99,
            "category": exp.nextExperimentNames[i].category,
            "distribution": this.stim.distribution,
            "n_data":this.stim.n_data,
            "property_type":this.stim.type,
            "property": this.stim.property,
            "missing":this.missing,
            "response": exp.sliderPrior[i],
            "experimentResults": this.stim.data,
             "explanation": $("#followUpResponse").val()
          });
        }
      } else if (exp.condition == "listener") {
        exp.data_trials.push({
          "trial_type" : "prior_manipulation",
          "condition": exp.condition,
          "trial_num": this.trialNum,
          "rt":this.rt,
          "category": this.stim.categories[this.missing].category,
          // "story": this.stim.story,
          "distribution": this.stim.distribution,
          "n_data":this.stim.n_data,
          // "treatment":this.stim.treatment,
          // "unit":this.stim.unit,
          "property_type":this.stim.type,
          "property": this.stim.property,
          "missing":this.missing,
          "response": exp.sliderPost,
          "experimentResults": this.stim.data,
          // "label": -99,
          "explanation": $("#followUpResponse").val()
        });
      }
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

  repeatWorker = false;
  (function(){
      var ut_id = "mht-intmanip-20170413";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.trials = [];
  exp.catch_trials = [];


  // exp.condition = _.sample(["prior","speaker","speaker","speaker","speaker","listener"])
  exp.condition = _.sample(["prior","listener"])
  // exp.condition = "listener"
  exp.nTrials = 1;
  exp.nSliders = exp.condition == "prior" ? 5 : 1;
  exp.stims = [];

  exp.n_data = 11;

  var shuffledCreatures = _.shuffle(creatureNames);
  var creatures = _.map(shuffledCreatures.slice(0,exp.n_data),
    function(x){return {category: x.category, exemplar: x.exemplar}}
    )

  exp.nextExperimentNames = _.map(shuffledCreatures.slice(exp.n_data, exp.n_data + 5),
    function(x){return {category: x.category, exemplar: x.exemplar}}
    )

  var property = _.sample(stim_properties)
  exp.property = property;
  exp.other_properties = _.without(stim_properties, property)
  exp.memory_properties = _.shuffle(_.pluck(exp.other_properties, "property")).slice(0, 10)

  var dist = _.sample(distributions);
  // console.log(dist)

  // exp.stims =_.map(_.zip(creatures, properties_to_be_tested),
  //   function(cp){
  //     return _.extend(cp[1], cp[0])
  //   })

  var f;
  var distSliced = {
    distribution: dist.distribution,
    data: dist.data.slice(0, exp.n_data),
    n_data: exp.n_data
  }
  if (exp.condition == "speaker"){
    f = {
      frequency: frequency,
      category: label.category,
      exemplar: label.exemplar,
      prompt: tasks.speaker.prompt,
      utterance: tasks.speaker.utterance,
      question: tasks.speaker.question,
      frequencyStatement: tasks.speaker.frequencyStatement
    };
  } else {
    f = {
      categories: creatures,
      prompt: tasks.listener.prompt,
      utterance: tasks.listener.utterance,
      question: tasks.listener.question
    }
  }

  exp.stims.push(
    _.extend(property, distSliced, f)
  )

  exp.stimscopy = exp.stims.slice(0);

  // exp.stims = _.shuffle(exp.stims).slice(0, exp.nTrials);

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
   exp.structure=[
     "i0",
     "prior_manipulation",
     "memory_check",
     "subj_info",
     "thanks"
   ];

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
