# Data for "Learning from Generic Language"

Data from the 3 experiments are organized into their respective folders.

- Expt. 1: "Variability in Generic Interpretation"
- Expt. 2: "Replication and Extension of Cimpian et al. (2010)"
- Expt. 3: "Prior Manipulation"

Experiment 1 trials file:

- Prior elicitation: `expt1a-prior-trials.csv`
  - workerid: anonymized workerid (different from generic interpretation task)
  - rt: time (in ms) spent on trial
  - trial_type: either category_elictation ("generate animals") or prevalence_elicitation ("rate prevalence of property for animal")
  - animal_class: high-level categorization of animals (Mammals, Fish, etc)
  - index: visual presentation order (order of appearance) on slide
  - category (prevalence_elicitation trial type only): category (generated during category_elicitation trial) for which participant is rating prevalence
  - property (prevalence_elicitation trial type only): property for which participant is rating prevalence
  - response: (for category_elicitation): text response of category label, (for prevalence_elicitation) slider bar response of prevalence

- Generic interpretation: `expt1b-interpretation-trials.csv`,  `expt1b-rep-interpretation-trials.csv`
  - workerid: anonymized workerid
  - rt: time (in ms) spent on trial
  - trial_type: either implied_prevalence (main trial) or explain_responses (exploratory data)
  - property_type: high-level categorization of property
  - trial_num: trial number
  - category: label of novel category used in generic sentence
  - property: property used in generic sentence (main factor of interest)
  - response: slider bar response

    For post-test explanation trials only (exploratory analysis)
    - original_response: (for post-test explanation trials only) the original response participants gave
    - explanation: (for post-test explanation trials only) free response to explain judgments < 50%
    - response: (for post-test explanation trials only) participants could change their response

Experiment 2 trials file: `expt2a-prior-trials.csv`, `expt2b-interpretation-trials.csv`

Experiment 3 trials file: `expt3a-prior-trials.csv`, `expt3b-interpretation-trials.csv`
- experimentResults: exact prevalence values participants saw, in order
- explanation: Free response: Why participants gave the response they gave
- n_data: Number of prevalence values participants saw (always 10)
- distribution: experimental condition
- response: participant judgment


Experiments 1 & 3 also have `...catch-trial.csv` and `...subject_information.csv`
- catch-trial.csv: Data for attention check / memory check trials
  - workerid: anonymized workerid
  - tested_on: For memory check, was the participant tested on this item?
  - response: For memory check, did participant respond that they were tested on this item?
  - check_index: For memory check, order of item in list
  - property: property tested on for the memory check
  - correct: does the response match tested_on?

- subject_information.csv: End of experiment (optional) questionnaire for demographic subject_information
  - assess = "Did you read the instructions and do you think you did the experiment correctly?" (Yes, No, Confused)
  - language = "Native language, or language that was spoken in the house you grew up"
  - problems = "Did you encounter any problems in the experiment?"
  - comments = "Other comments?"
  - enjoyment = On a -1, 0, +1 scale: How enjoyable was this experiment?
  - education = 0: Some High School, 1: Graduated High School, 2: Some College, 3: Graduated College, 4: Hold a higher degree
  - fairprice = "What do you think is a fair compensation for this HIT?"

  - trials.csv: Data for experimental trials
    - fields vary by experiment (detailed below)

- Experiment 1: Variability in Generic Interpretation


- Experiment 3: Prior Manipulation
