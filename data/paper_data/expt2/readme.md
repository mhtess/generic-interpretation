## Experiment 2 trials file variables:

Experiment 2 trials file: `expt2a-prior-trials.csv`, `expt2b-interpretation-trials.csv`

- Prior elicitation: `expt2a-prior-trials.csv`
  - `workerid`: anonymized workerid (different from generic interpretation task)
  - `rt`: time (in ms) spent on trial
  - `trial_type`: only one trial type (twostep_elicitation)
  - `stim_type`: high-level categorization of properties (color, vague, ...)
  - `trial_num`: trial number
  - `stim_category`: label for novel category for which participant is rating prevalence
  - `stim_property`: property to which participant is responding
  - `response0`: response to Question 1 of structured prior elicitation task ("What are the chances that there is an X that has Property?")
  - `response1`: response to Question 2 of structured prior elicitation task ("Suppose that there is an X has Property. How many Xs do you think have Property?")

- Generic interpretation: `expt2a-interpretation-trials.csv`
  - `workerid`: anonymized workerid (different from prior elicitation task)
  - `rt`: time (in ms) spent on trial
  - `trial_type`: only one trial type (implied_prevalence)
  - `trial_num`: trial number
  - `stim_type`: high-level categorization of properties (color, vague, ...)
  - `stim_determiner`: only one stim_determiner (generic)
  - `stim_category`: label of novel category used in generic sentence
  - `stim_property`: property used in generic sentence (main factor of interest)
  - `response`: slider bar response ("how many Xs have Y?")
