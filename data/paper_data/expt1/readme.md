## Experiment 1 trials file variables:

- Prior elicitation: `expt1a-prior-trials.csv`
  - `workerid`: anonymized workerid (different from generic interpretation task)
  - `rt`: time (in ms) spent on trial
  - `trial_type`: either category_elictation ("generate animals") or prevalence_elicitation ("rate prevalence of property for animal")
  - `animal_class`: high-level categorization of animals (Mammals, Fish, etc)
  - `index`: visual presentation order (order of appearance) on slide
  - `category` (prevalence_elicitation trial type only): category (generated during category_elicitation trial) for which participant is rating prevalence
  - `property` (prevalence_elicitation trial type only): property for which participant is rating prevalence
  - `response`: (for category_elicitation): text response of category label, (for prevalence_elicitation) slider bar response of prevalence

- Generic interpretation: `expt1b-interpretation-trials.csv`,  `expt1b-rep-interpretation-trials.csv`
  - `workerid`: anonymized workerid
  - `rt`: time (in ms) spent on trial
  - `trial_type`: either implied_prevalence (main trial) or explain_responses (exploratory data)
  - `property_type`: high-level categorization of property
  - `trial_num`: trial number
  - `category`: label of novel category used in generic sentence
  - `property`: property used in generic sentence (main factor of interest)
  - `response`: slider bar response

    For post-test explanation trials only (exploratory analysis)
    - `original_response`: (for post-test explanation trials only) the original response participants gave
    - `explanation`: (for post-test explanation trials only) free response to explain judgments < 50%
    - `response`: (for post-test explanation trials only) participants could change their response
