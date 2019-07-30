// replication of CBG exp 3 (accidental properties)

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
      $("#total-num").html(exp.numTrials);
      $("#expected-time").html(Math.ceil(exp.numTrials / 4))
     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function(){
      if (exp.condition == "pedagogical"){
        $("#instruction_text").html("Recently, a team of scientists discovered lots of animals that we did not know existed. Your fellow scientist has studied these animals a lot and wants to teach you about them. On each trial, your fellow scientist will show you an example of a new kind of animal and show you one of its properties.")
      } else if (exp.condition == "accidental"){
        $("#instruction_text").html("Recently, a team of scientists discovered lots of animals that we did not know existed. Unfortunately, all of the notes that the scientists recorded about all of the animals got jumbled. On each trial, you randomly pick out a note from the large stack of notes and read about a single example of a new kind of animal.")
      }
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.botcaptcha  = slide({
    name: "botcaptcha",
    // amount of trials to enter correct response
    trial: 0,
    start: function(){
      // define possible speaker and listener names
      // fun fact: 10 most popular names for boys and girls
      var speaker = _.shuffle(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"])[0];
      var listener = _.shuffle(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"])[0];

      var story = speaker + ' says to ' + listener + ': "It\'s a beautiful day, isn\'t it?"'

      $("#story").html(story)
      $("#question").html("Who is " + speaker + " talking to?" +
    "<br><strong>Note: please type your answer in lower-case.")

      // don't allow enter press in text field
      $('#listener-response').keypress(function(event) {
          if (event.keyCode == 13) {
              event.preventDefault();
          }
      });

      // don't show any error message
      $("#error").hide();
      $("#error_incorrect").hide();
      $("#error_2more").hide();
      $("#error_1more").hide();
      this.listener = listener, this.speaker = speaker
    },
    button:  function() {
        response = $("#listener-response").val().replace(" ","");

        // response correct
        // if (this.listener.toLowerCase() == response.toLowerCase()) {
        if (this.listener.toLowerCase() == response) {
            exp.catch_trials.botresponse = $("#listener-response").val();
            exp.go();

        // response false
        } else {
            this.trial = this.trial + 1;
            $("#error_incorrect").show();
            if (this.trial == 1) {
                $("#error_2more").show();
            } else if (this.trial == 2) {
                $("#error_2more").hide();
                $("#error_1more").show();
            } else {
                $("#error_incorrect").hide();
                $("#error_1more").hide();
                $("#next").hide();
                $('#quest-response').css("opacity", "0.2");
                $('#listener-response').prop("disabled", true);
                $("#error").show();
            };
        };
      }

      //$("#next").on("click",);
      //}
  })

  slides.explain_instructions = slide({
    name : "explain_instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.memory_check = slide({
    name : "memory_check",
    start: function() {

     this.tested_properties = _.shuffle(_.pluck(exp.stims, "property")).slice(0, 5)

     this.catch_properties = [
       "have long legs",
       "have gold spots",
       "have infected scales",
       "can see at night",
       "eat plants"
     ]

     this.check_properties = _.shuffle(_.flatten([this.tested_properties, this.catch_properties]))

     // clear the former content of a given <div id="memory_checkboxes"></div>
     document.getElementById('memory_checkboxes').innerHTML = '';

     for (i=0;i<this.check_properties.length;i++){
       // create the necessary elements
       var label= document.createElement("label");
       var description = document.createTextNode(this.check_properties[i]);
       var checkbox = document.createElement("input");

       checkbox.type = "checkbox";    // make the element a checkbox
       checkbox.name = "slct1";      // give it a name we can check on the server side
       checkbox.value = this.check_properties[i];         // make its value "pair"

       label.appendChild(checkbox);   // add the box to the element
       label.appendChild(description);// add the description to the element

       // add the label element to your div
       document.getElementById('memory_checkboxes').appendChild(label);
       document.getElementById('memory_checkboxes').appendChild(document.createElement("br"));

     }
   },
    button : function() {
      var checked_options = new Array();
      var unchecked_options = new Array();

      $.each($("input[name='slct1']:checked"), function() {
        checked_options.push($(this).val());
      });

      $.each($("input[name='slct1']:not(:checked)"), function() {
        unchecked_options.push($(this).val());
      });

      for (i=0;i<this.check_properties.length;i++){
        var p = this.check_properties[i];
        var tested_on = this.tested_properties.indexOf(p) > -1 ? 1 : 0;
        var response = checked_options.indexOf(p) > -1 ? 1 : 0;
        exp.catch_trials.push({
          condition: "memory_check",
          check_index: i,
          property: p,
          tested_on: tested_on,
          response: response,
          correct: (tested_on == response) ? 1 : 0
        })
      }

      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.implied_prevalence = slide({
    name: "implied_prevalence",

    // present : _.shuffle(_.range(numTrials)),
    trial_num : 1,
    present : _.shuffle(exp.stims),
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      this.startTime = Date.now();

      $(".err").hide();
      // $(".followUpQ").hide();
      // $("#followUpResponse").val('');
      this.followUp = true;

      this.stim = stim
      // console.log(this.stim)

      // var query_prompt = "Out of 100 "  + this.stim.category + ", how many do you think " + this.stim.property + "?\n";
      var query_prompt = "Out of all of the "  + this.stim.category + " on the planet,<br> what percentage do you think " + this.stim.property + "?\n";

      this.evidence_prompt = '"' + utils.upperCaseFirst(this.stim.category) + " " + this.stim.property + '."'
      console.log(this.stim.exemplar.slice(0,1))
      var article = ["a","e","i","o","u"].indexOf(this.stim.exemplar.slice(0,1)) > -1 ? "an" : "a"
      if (exp.condition == "pedagogical") {
        var evidence_statement = "Your fellow scientist shows you an animal you've never seen before." +
            "<br>" +
            '<br>They point to it and say, "This is ' +article + " " + this.stim.exemplar + '."' +
            '<br><strong>They then show to you that it ' +this.stim.observable_property + '.</strong>'
      } else if (exp.condition == "accidental"){
        var evidence_statement = "You pick out a note from the disorganized stack. It has the ID number of the animal, the name of the kind of animal, and one of its properties." +
            "<br>" +
            '<br>The note reads:'+
            '<br><div class="note"> Species: '+ utils.upperCaseFirst(this.stim.exemplar) +
          '<br>ID: '+ _.sample(["A","B","C","D","E","F","G","H","J","K","L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z"]) + Math.ceil(Math.random()*100) +
            '<br>Note: ' +this.stim.observable_property + '</div>'
      }

      $(".evidence").html(evidence_statement)//; this.evidence_prompt);
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
        $(".slider_number").html(Math.round(exp.sliderPost*100) + "%")
      };
    },

    button : function() {
      if (exp.sliderPost<0) {
        $(".err").show();
      // } else if ((exp.sliderPost <= 0.25) & (this.followUp)){
      //   $(".followUpQ").show()
      //   this.followUp = false;
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },
   log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "implied_prevalence",
        "trial_num": this.trial_num,
        "response" : exp.sliderPost,
        "rt":this.rt,
        "property_type": this.stim.type,
        "property": this.stim.property,
        "category": this.stim.category//,
        // "explanation": $("#followUpResponse").val()
      });
      // CHECK THAT THIS IS LAST TRIAL
      if (this.trial_num == exp.stims.length){

        minorityInterpretations = _.filter(exp.data_trials, function(x){
          return x.response < 0.50
        })

        // set stimuli to be explained,
        slides.explain_responses.present = _.shuffle(minorityInterpretations).slice(0, 5)
      }
      this.trial_num++;
    }
  });



  slides.explain_responses = slide({
    name: "explain_responses",

    // present : _.shuffle(_.range(numTrials)),
    trial_num : 1,
    present : [],
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      this.startTime = Date.now();

      $(".err").hide();
      $(".secondResponse").hide();
      $("#followUpResponse").val('');

      this.stim = stim

      // var query_prompt = "Out of 100 "  + this.stim.category + ", how many do you think " + this.stim.property + "?\n";
      var query_prompt = "Out of all of the "  + this.stim.category + " on the planet, what percentage do you think " + this.stim.property + "?\n";

      this.evidence_prompt = utils.upperCaseFirst(this.stim.category) + " " + this.stim.property + "."

      $(".evidence").html("Earlier you learned: " + this.evidence_prompt);
      $(".query").html("You reported the following percentage (out of all of the " + this.stim.category + " on the planet), you thought " + this.stim.property + "." );

      this.init_sliders();
      exp.sliderPost = -1;

      $(".slider_number").html(Math.round(stim.response*100) + "%")


      var label = "#single_slider1";
      $(label+ ' .ui-slider-handle').show();
      $(label).slider({value:stim.response});
      $(label).css({"background":"#99D6EB"});
      $(label + ' .ui-slider-handle').css({
        "background":"#667D94",
        "border-color": "#001F29"
      })
      $(label).unbind("mousedown");

      exp.sliderPost = -1;
      $("#second_number").html("---")
    },

    init_sliders : function() {
        utils.make_slider("#single_slider1")
        utils.make_slider("#single_slider2", this.make_slider_callback());
    },

    make_slider_callback : function() {
      return function(event, ui) {
        exp.sliderPost = ui.value;
        $("#second_number").html(Math.round(exp.sliderPost*100) + "%")
      };
    },

    button : function() {
      if ($("#followUpResponse").val() == "") {
        $(".err").show();
      } else if (exp.sliderPost<0) {
        $(".secondResponse").show();
        exp.sliderPost = this.stim.response;
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },
   log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "explain_responses",
        "trial_num": this.trial_num,
        "original_response" : this.stim.response,
        "response" : exp.sliderPost,
        "rt":this.rt,
        "property_type": this.stim.property_type,
        "property": this.stim.property,
        "category": this.stim.category,
        "explanation": $("#followUpResponse").val()
      });
      this.trial_num++;
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
      var ut_id = "mht-genint-20180416";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.numTrials = creatureNames.length;
  // console.log(stim_properties.length)
  exp.condition = "accidental"
  var creatures = _.map(_.shuffle(creatureNames).slice(0,exp.numTrials),
    function(x){return {category: x.category, exemplar: x.exemplar}}
  )

  var properties_to_be_tested = _.shuffle(stim_properties).slice(0,exp.numTrials)

  exp.stims =_.map(_.zip(creatures, properties_to_be_tested),
  function(cp){
    return _.extend(cp[1], cp[0])
  })

  exp.stimscopy = exp.stims.slice(0);

  exp.trials = [];
  exp.catch_trials = [];
  exp.data_trials = [];

  // exp.condition = "implied_prevalence";
  exp.instructions = "elaborate_instructions";
  exp.structure=[
    // "i0",
    // "botcaptcha",
    "instructions",
    "implied_prevalence",
    "memory_check",
    // "explain_instructions",
    // "explain_responses",
    'subj_info',
    'thanks'
  ];

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

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
