// replication of CBG exp 3 (accidental properties)

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
    start: function(){
      $("#total-num").html(exp.numTrials);
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.category_elicitation = slide({
    name: "category_elicitation",
    start: function() {
      $(".err").hide();
      $(".display_condition").html("Y.");
    },
    button : function() {
      responses = _.map(_.range(1, 6), function(i){
        return $("#text_response" + i).val();
      })
      if (responses.indexOf("") > -1) {
        $(".err").show();
      } else {

        responses.forEach(function(response){
          exp.data_trials.push({
            "trial_type" : "category_elicitation",
            "response" : response
          });
        })

        exp.categories = responses;  // log responses in exp global var, for reuse later in the experiment
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
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

  slides.prevalence_elicitation = slide({
    name: "prevalence_elicitation",

    // present : _.shuffle(_.range(numTrials)),
    trial_num : 1,
    present : _.shuffle(exp.stims),
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      this.startTime = Date.now();

      $(".err").hide();
      $("#text_response").val('')

      this.stim = stim

      var sliderIds = _.range(1, 6);

      sliderIds.forEach(function(i){
        query_text = "How many "  + exp.categories[i-1] + " do you think " + stim.property + "?\n"
        $("#query" + i).html(query_text);
      })

      this.init_sliders(sliderIds);
      exp.sliderPost = [];
      $(".slider_number").html("---")

    },

    init_sliders : function(sliderIds) {
      sliderIds.forEach(function(i){
        utils.make_slider("#single_slider" + i, _s.make_slider_callback(i));
      })
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i - 1] = ui.value;
        $("#slider_number" + i).html(Math.round(ui.value*100)+"%")
      };
    },

    button : function() {
      if (exp.sliderPost.includes(undefined) || exp.sliderPost.length == 0) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },
   log_responses : function() {
     _.range(1, 6).forEach(function(i){
       exp.data_trials.push({
         "trial_type" : "prevalence_elicitation",
         "trial_num": _s.trial_num,
         "slider_num": i,
         "category": exp.categories[i-1],
         "response" : exp.sliderPost[i-1],
         "rt":_s.rt,
         "property_type": _s.stim.type,
         "property": _s.stim.property
       });
     })
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
      var ut_id = "mht-genint-20180221";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.numTrials = 12;//creatureNames.length;

  var creatures = _.map(_.shuffle(creatureNames).slice(0,exp.numTrials),
    function(x){return {category: x.category, exemplar: x.exemplar}}
    )

  var properties_to_be_tested = _.shuffle(stim_properties).slice(0,exp.numTrials)

  exp.stims =_.map(_.zip(creatures, properties_to_be_tested),
    function(cp){
      return _.extend(cp[1], cp[0])
    })

  exp.stimscopy = exp.stims.slice(0);
  // exp.categories = ["dogs","Cats","sheep","mosquitos","giraffes"];
  exp.trials = [];
  exp.catch_trials = [];
  exp.data_trials = [];

  exp.condition = "prior_elicitation";

  exp.structure=[
    "i0",
    "instructions",
    "category_elicitation",
    "prevalence_elicitation",
    "memory_check",
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
