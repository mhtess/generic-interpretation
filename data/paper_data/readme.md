# Data for "Learning from Generic Language"

Data from the 3 experiments are organized into their respective folders.

- Expt. 1: "Variability in Generic Interpretation"
- Expt. 2: "Replication and Extension of Cimpian et al. (2010)"
- Expt. 3: "Prior Manipulation"

Experiments 1 & 3 also have `...catch-trial.csv` and `...subject_information.csv`
- `catch-trial.csv`: Data for attention check / memory check trials
  - `workerid`: anonymized workerid
  - `tested_on`: For memory check, was the participant tested on this item?
  - `response`: For memory check, did participant respond that they were tested on this item?
  - `check_index`: For memory check, order of item in list
  - `property`: property tested on for the memory check
  - `correct`: does the response match tested_on?

- `subject_information.csv`: End of experiment (optional) questionnaire for demographic subject_information
  - `assess` = "Did you read the instructions and do you think you did the experiment correctly?" (Yes, No, Confused)
  - `language` = "Native language, or language that was spoken in the house you grew up"
  - `problems` = "Did you encounter any problems in the experiment?"
  - `comments` = "Other comments?"
  - `enjoyment` = On a -1, 0, +1 scale: How enjoyable was this experiment?
  - `education` = 0: Some High School, 1: Graduated High School, 2: Some College, 3: Graduated College, 4: Hold a higher degree
  - `fairprice` = "What do you think is a fair compensation for this HIT?"
