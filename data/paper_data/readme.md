# Data for "Learning from Generic Language"

- Preliminary Study: Replication and Extension of Cimpian et al. (2010)
  - cimpian-preliminary.csv

Main experiments each have 3 files:
  - catch-trial.csv: Data for attention check / memory check trials

    - tested_on: For memory check, was the participant tested on this item?
    - response: For memory check, did participant respond that they were tested on this item?
    - check_index: For memory check, order of item in list
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

- Experiment 1: Generic Interpretation
  - explanation: post-test free response to explain judgments < 50%
  - original_response: for post-test explanation trials, the original response participants gave
  - response: for post_test explanation trials, participants could change their response (not analyzed)

- Experiment 2: Prior Manipulation
  - experimentResults: exact prevalence values participants saw, in order
  - explanation: Free response: Why participants gave the response they gave
  - n_data: Number of prevalence values participants saw (always 10)
  - distribution: experimental condition
  - response: participant judgment
