Analysis of Experiments 1: Prior elicitation and Generic interpretation
================

### author: MH Tessler

### date: April 21, 2019

# libraries

``` r
knitr::opts_chunk$set(echo=FALSE, warning=FALSE, cache=F, message=FALSE, sanitize = T)
```

# Experiment 1a: Prior Elicitation

## Subject information

    ## [1] "english native?"

    ## 
    ## FALSE  TRUE 
    ##    13   187

    ## [1] "what do people report for native language that is not english?"

| language  |
| :-------- |
| NA        |
| Korean    |
| Cantonese |
| SPANISH   |
| NA        |
| NA        |
| German    |
| chinese   |
| Urdu      |
| turkish   |
| NA        |
| Spanish   |
| Swedish   |

## Catch trials

    ## [1] "pass memory check"

    ## .
    ##   0   1 
    ##  15 185

remove catch trial failures

    ## [1] 175

How long did the experiemnt take?

    ## # A tibble: 1 x 1
    ##   mean_time
    ##       <dbl>
    ## 1      7.39

## Prevalence priors

### Histogram of number of responses per item

![](expt1_files/figure-gfm/prior%20hist%20n_responses%20per%20item-1.png)<!-- -->

### Distribution of all responses (collapse item)

![](expt1_files/figure-gfm/prior%20hist%20all%20responses-1.png)<!-- -->

### Item distributions (prevalence priors)

![](expt1_files/figure-gfm/priors%20by%20item-1.png)<!-- -->

### Item distributions conditional on \> 0

![](expt1_files/figure-gfm/priors%20nonzero%20by%20item-1.png)<!-- -->

### Distribution of expected values

![](expt1_files/figure-gfm/priors%20expected%20values-1.png)<!-- -->

### Distribution of expected values conditional on non-zero prevalence

![](expt1_files/figure-gfm/priors%20nonxero%20expected%20values-1.png)<!-- -->

### Distribution of proportion of probability mass at 0

![](expt1_files/figure-gfm/priors%20is%20zero-1.png)<!-- -->

### Propoortion IS ZERO vs nonzero Expectation

![](expt1_files/figure-gfm/priors%20is%20zero%20vs%20nonzero%20expectation-1.png)<!-- -->

### Prevalence priors for sample items

![](expt1_files/figure-gfm/priors%20sample%20items-1.png)<!-- -->

# Experiment 1b: Generic Interpretation

Native language of
    English

    ## [1] "193 out of 200 subjects self report native language of english"

### Memory check trials

    ## [1] "138 out of 200 participants pass memory check"

![](expt1_files/figure-gfm/exclusion%20criteria-1.png)<!-- -->

Exclude subjects who do not get at least 4 / 5 correct on both correct
rejections and false alarms, as well as non-English speakers.

    ## [1] "132 out of 200 participants pass exclusion criteria"

## Bootstrap CIs for by-item plot

![](expt1_files/figure-gfm/bootstrap-1.png)<!-- -->

### by item histogram

![](expt1_files/figure-gfm/by%20item%20histogram-1.png)<!-- -->

### by subject hists

![](expt1_files/figure-gfm/by%20subject%20hist-1.png)<!-- -->

# Replication data set

Native language of
    English

    ## [1] "138 out of 140 subjects self report native language of english"

### Memory check

    ## [1] "109 out of 140 participants pass memory check"

![](expt1_files/figure-gfm/rep%20exlcusion%20criteria-1.png)<!-- -->

Exclude subjects who do not get at least 4 / 5 correct on both correct
rejections and false alarms, as well as non-English
speakers.

    ## [1] "107 out of 140 participants pass exclusion criteria"

## Bootstrap CIs for by-item plot

![](expt1_files/figure-gfm/rep%20bootstrap-1.png)<!-- -->

## Comparison of main experiment and replication

    ## [1] "correlation of two data set means  =  0.960319772602997"

![](expt1_files/figure-gfm/comparison%20main%20and%20rep-1.png)<!-- -->

## Comparison of generic interpretation and the prevalence prior

![](expt1_files/figure-gfm/unnamed-chunk-2-1.png)<!-- -->

## Comparison of generic interpretation and the conditional, non-zero prevalence prior

![](expt1_files/figure-gfm/unnamed-chunk-3-1.png)<!-- -->

## What categories do people produce in the prevalence prior elicitation?

| animal\_class       | word           |  n |
| :------------------ | :------------- | -: |
| Birds               | eagles         | 34 |
| Birds               | cardinals      | 26 |
| Birds               | parrots        | 26 |
| Birds               | blue           | 24 |
| Birds               | hummingbirds   | 24 |
| Birds               | eagle          | 21 |
| Birds               | owls           | 21 |
| Birds               | robins         | 20 |
| Birds               | crows          | 19 |
| Birds               | hawks          | 16 |
| Birds               | jays           | 14 |
| Birds               | doves          | 13 |
| Birds               | falcons        | 12 |
| Birds               | birds          | 11 |
| Birds               | parrot         | 11 |
| Birds               | penguins       | 11 |
| Birds               | bald           |  9 |
| Birds               | cardinal       |  9 |
| Birds               | ravens         |  9 |
| Birds               | hummingbird    |  8 |
| Birds               | bluebirds      |  7 |
| Birds               | humming        |  7 |
| Birds               | owl            |  7 |
| Birds               | robin          |  7 |
| Birds               | bird           |  6 |
| Birds               | bluejays       |  6 |
| Birds               | finches        |  6 |
| Birds               | hawk           |  6 |
| Birds               | cockatiels     |  5 |
| Birds               | ducks          |  5 |
| Birds               | flamingo       |  5 |
| Birds               | jay            |  5 |
| Birds               | pigeons        |  5 |
| Birds               | bluebird       |  4 |
| Birds               | bluejay        |  4 |
| Birds               | chickens       |  4 |
| Birds               | herons         |  4 |
| Birds               | ostriches      |  4 |
| Birds               | parakeets      |  4 |
| Birds               | peacocks       |  4 |
| Birds               | swans          |  4 |
| Birds               | woodpeckers    |  4 |
| Birds               | canaries       |  3 |
| Birds               | crow           |  3 |
| Birds               | falcon         |  3 |
| Birds               | flamingos      |  3 |
| Birds               | geese          |  3 |
| Birds               | macaw          |  3 |
| Birds               | ostrich        |  3 |
| Birds               | parakeet       |  3 |
| Birds               | peacock        |  3 |
| Birds               | peregrine      |  3 |
| Birds               | quail          |  3 |
| Birds               | red            |  3 |
| Birds               | sparrow        |  3 |
| Birds               | sparrows       |  3 |
| Birds               | turkey         |  3 |
| Birds               | african        |  2 |
| Birds               | canary         |  2 |
| Birds               | condors        |  2 |
| Birds               | dove           |  2 |
| Birds               | emu            |  2 |
| Birds               | footed         |  2 |
| Birds               | love           |  2 |
| Birds               | mocking        |  2 |
| Birds               | mockingbird    |  2 |
| Birds               | mockingbirds   |  2 |
| Birds               | orioles        |  2 |
| Birds               | parrotts       |  2 |
| Birds               | pelicans       |  2 |
| Birds               | raven          |  2 |
| Birds               | seagulls       |  2 |
| Birds               | swallows       |  2 |
| Birds               | swan           |  2 |
| Birds               | tucans         |  2 |
| Birds               | barn           |  1 |
| Birds               | blackbirds     |  1 |
| Birds               | blu            |  1 |
| Birds               | boobie         |  1 |
| Birds               | booby          |  1 |
| Birds               | budgies        |  1 |
| Birds               | bulejay        |  1 |
| Birds               | bunting        |  1 |
| Birds               | burrowing      |  1 |
| Birds               | california     |  1 |
| Birds               | cardial        |  1 |
| Birds               | chickadees     |  1 |
| Birds               | cocatiels      |  1 |
| Birds               | cockateals     |  1 |
| Birds               | cockatoo       |  1 |
| Birds               | cocktiel       |  1 |
| Birds               | crane          |  1 |
| Birds               | cranes         |  1 |
| Birds               | downy          |  1 |
| Birds               | egrets         |  1 |
| Birds               | flamingoes     |  1 |
| Birds               | grackles       |  1 |
| Birds               | grays          |  1 |
| Birds               | greys          |  1 |
| Birds               | horned         |  1 |
| Birds               | hummingbrd     |  1 |
| Birds               | ibises         |  1 |
| Birds               | jaybird        |  1 |
| Birds               | juncos         |  1 |
| Birds               | junkos         |  1 |
| Birds               | kestrels       |  1 |
| Birds               | kingfisher     |  1 |
| Birds               | kookaburra     |  1 |
| Birds               | lorikeets      |  1 |
| Birds               | lovebirds      |  1 |
| Birds               | macaws         |  1 |
| Birds               | magpies        |  1 |
| Birds               | minahs         |  1 |
| Birds               | mockingbrids   |  1 |
| Birds               | morning        |  1 |
| Birds               | painted        |  1 |
| Birds               | partridge      |  1 |
| Birds               | pecock         |  1 |
| Birds               | pelican        |  1 |
| Birds               | pheasant       |  1 |
| Birds               | pigeon         |  1 |
| Birds               | pink           |  1 |
| Birds               | puffin         |  1 |
| Birds               | raptors        |  1 |
| Birds               | roadrunner     |  1 |
| Birds               | roadrunners    |  1 |
| Birds               | roseate        |  1 |
| Birds               | scarlet        |  1 |
| Birds               | scrub          |  1 |
| Birds               | seagul         |  1 |
| Birds               | snowy          |  1 |
| Birds               | songbirds      |  1 |
| Birds               | spoonbill      |  1 |
| Birds               | stork          |  1 |
| Birds               | tail           |  1 |
| Birds               | toucan         |  1 |
| Birds               | toucans        |  1 |
| Birds               | vultures       |  1 |
| Fish                | goldfish       | 44 |
| Fish                | salmon         | 36 |
| Fish                | fish           | 34 |
| Fish                | trout          | 27 |
| Fish                | sharks         | 26 |
| Fish                | catfish        | 25 |
| Fish                | bass           | 20 |
| Fish                | salmons        | 15 |
| Fish                | shark          | 14 |
| Fish                | tuna           | 14 |
| Fish                | dolphins       | 11 |
| Fish                | clown          | 10 |
| Fish                | clownfish      | 10 |
| Fish                | goldfishes     | 10 |
| Fish                | tunas          | 10 |
| Fish                | beta           |  8 |
| Fish                | koi            |  8 |
| Fish                | trouts         |  8 |
| Fish                | whales         |  8 |
| Fish                | guppies        |  7 |
| Fish                | gold           |  6 |
| Fish                | rainbow        |  6 |
| Fish                | angel          |  5 |
| Fish                | angelfish      |  4 |
| Fish                | basses         |  4 |
| Fish                | betas          |  4 |
| Fish                | bettas         |  4 |
| Fish                | catfishes      |  4 |
| Fish                | fighting       |  4 |
| Fish                | goldfishs      |  4 |
| Fish                | marlins        |  4 |
| Fish                | siamese        |  4 |
| Fish                | swordfish      |  4 |
| Fish                | tetras         |  4 |
| Fish                | angelfishes    |  3 |
| Fish                | betta          |  3 |
| Fish                | bluegills      |  3 |
| Fish                | carp           |  3 |
| Fish                | eels           |  3 |
| Fish                | flounders      |  3 |
| Fish                | guppy          |  3 |
| Fish                | kois           |  3 |
| Fish                | lion           |  3 |
| Fish                | lionfish       |  3 |
| Fish                | perch          |  3 |
| Fish                | pufferfish     |  3 |
| Fish                | seahorse       |  3 |
| Fish                | seahorses      |  3 |
| Fish                | stingrays      |  3 |
| Fish                | sunfish        |  3 |
| Fish                | white          |  3 |
| Fish                | blow           |  2 |
| Fish                | blowfish       |  2 |
| Fish                | blowfishes     |  2 |
| Fish                | bluegill       |  2 |
| Fish                | bream          |  2 |
| Fish                | clownfishes    |  2 |
| Fish                | cod            |  2 |
| Fish                | coi            |  2 |
| Fish                | dolphin        |  2 |
| Fish                | eel            |  2 |
| Fish                | fishes         |  2 |
| Fish                | flounder       |  2 |
| Fish                | grouper        |  2 |
| Fish                | groupers       |  2 |
| Fish                | halibut        |  2 |
| Fish                | hammerhead     |  2 |
| Fish                | jacks          |  2 |
| Fish                | jellyfish      |  2 |
| Fish                | jellyfishes    |  2 |
| Fish                | piranhas       |  2 |
| Fish                | ray            |  2 |
| Fish                | rays           |  2 |
| Fish                | red            |  2 |
| Fish                | shad           |  2 |
| Fish                | sting          |  2 |
| Fish                | sturgeons      |  2 |
| Fish                | tilapia        |  2 |
| Fish                | walleye        |  2 |
| Fish                | angelfishs     |  1 |
| Fish                | angels         |  1 |
| Fish                | baracuda       |  1 |
| Fish                | barracuda      |  1 |
| Fish                | bichir         |  1 |
| Fish                | birchers       |  1 |
| Fish                | birches        |  1 |
| Fish                | blobfishes     |  1 |
| Fish                | blue           |  1 |
| Fish                | breast         |  1 |
| Fish                | carps          |  1 |
| Fish                | catfishs       |  1 |
| Fish                | centrarchids   |  1 |
| Fish                | chiclid        |  1 |
| Fish                | cichlids       |  1 |
| Fish                | crappie        |  1 |
| Fish                | dinosaurs      |  1 |
| Fish                | drums          |  1 |
| Fish                | emperor        |  1 |
| Fish                | ghost          |  1 |
| Fish                | gills          |  1 |
| Fish                | glowfish       |  1 |
| Fish                | gobis          |  1 |
| Fish                | gobys          |  1 |
| Fish                | goldfihs       |  1 |
| Fish                | goldifsh       |  1 |
| Fish                | gourami        |  1 |
| Fish                | greenland      |  1 |
| Fish                | guppie         |  1 |
| Fish                | halibuts       |  1 |
| Fish                | lobster        |  1 |
| Fish                | mackerals      |  1 |
| Fish                | mandarins      |  1 |
| Fish                | marlin         |  1 |
| Fish                | minnows        |  1 |
| Fish                | mollies        |  1 |
| Fish                | mouth          |  1 |
| Fish                | mudskipper     |  1 |
| Fish                | neon           |  1 |
| Fish                | nurse          |  1 |
| Fish                | oarfish        |  1 |
| Fish                | octopus        |  1 |
| Fish                | orca           |  1 |
| Fish                | orcas          |  1 |
| Fish                | oysters        |  1 |
| Fish                | paddlefish     |  1 |
| Fish                | paracanthurus  |  1 |
| Fish                | parana         |  1 |
| Fish                | parrotfish     |  1 |
| Fish                | pike           |  1 |
| Fish                | pirahna        |  1 |
| Fish                | piranahs       |  1 |
| Fish                | pirhanas       |  1 |
| Fish                | platty         |  1 |
| Fish                | plecos         |  1 |
| Fish                | puffer         |  1 |
| Fish                | queen          |  1 |
| Fish                | samon          |  1 |
| Fish                | sardines       |  1 |
| Fish                | seabass        |  1 |
| Fish                | slamon         |  1 |
| Fish                | smallmouth     |  1 |
| Fish                | snapper        |  1 |
| Fish                | snappers       |  1 |
| Fish                | snook          |  1 |
| Fish                | speckled       |  1 |
| Fish                | star           |  1 |
| Fish                | sturgeon       |  1 |
| Fish                | suckers        |  1 |
| Fish                | sword          |  1 |
| Fish                | tenchs         |  1 |
| Fish                | tetra          |  1 |
| Fish                | trigger        |  1 |
| Fish                | whale          |  1 |
| Fish                | wrasses        |  1 |
| Insects/Bugs        | butterflies    | 65 |
| Insects/Bugs        | ladybugs       | 55 |
| Insects/Bugs        | bees           | 31 |
| Insects/Bugs        | ants           | 28 |
| Insects/Bugs        | lady           | 23 |
| Insects/Bugs        | spiders        | 21 |
| Insects/Bugs        | butterfly      | 20 |
| Insects/Bugs        | praying        | 20 |
| Insects/Bugs        | dragonflies    | 19 |
| Insects/Bugs        | bug            | 18 |
| Insects/Bugs        | bugs           | 18 |
| Insects/Bugs        | ladybug        | 18 |
| Insects/Bugs        | crickets       | 16 |
| Insects/Bugs        | mantis         | 16 |
| Insects/Bugs        | beetles        | 13 |
| Insects/Bugs        | ant            | 11 |
| Insects/Bugs        | grasshoppers   | 10 |
| Insects/Bugs        | mantises       |  9 |
| Insects/Bugs        | spider         |  8 |
| Insects/Bugs        | caterpillars   |  7 |
| Insects/Bugs        | flies          |  6 |
| Insects/Bugs        | moths          |  6 |
| Insects/Bugs        | bee            |  5 |
| Insects/Bugs        | fireflies      |  5 |
| Insects/Bugs        | fly            |  5 |
| Insects/Bugs        | grasshopper    |  5 |
| Insects/Bugs        | stick          |  5 |
| Insects/Bugs        | beetle         |  4 |
| Insects/Bugs        | caterpillar    |  4 |
| Insects/Bugs        | dragonfly      |  4 |
| Insects/Bugs        | monarch        |  4 |
| Insects/Bugs        | preying        |  4 |
| Insects/Bugs        | roaches        |  4 |
| Insects/Bugs        | scorpion       |  4 |
| Insects/Bugs        | wasps          |  4 |
| Insects/Bugs        | bumble         |  3 |
| Insects/Bugs        | bumblebees     |  3 |
| Insects/Bugs        | centipede      |  3 |
| Insects/Bugs        | centipedes     |  3 |
| Insects/Bugs        | cockroaches    |  3 |
| Insects/Bugs        | cricket        |  3 |
| Insects/Bugs        | fire           |  3 |
| Insects/Bugs        | honeybees      |  3 |
| Insects/Bugs        | lightning      |  3 |
| Insects/Bugs        | moth           |  3 |
| Insects/Bugs        | tarantula      |  3 |
| Insects/Bugs        | walking        |  3 |
| Insects/Bugs        | butterflys     |  2 |
| Insects/Bugs        | caterpillers   |  2 |
| Insects/Bugs        | catterpillars  |  2 |
| Insects/Bugs        | cicadas        |  2 |
| Insects/Bugs        | june           |  2 |
| Insects/Bugs        | ladybirds      |  2 |
| Insects/Bugs        | lightening     |  2 |
| Insects/Bugs        | lovebugs       |  2 |
| Insects/Bugs        | mantiss        |  2 |
| Insects/Bugs        | mosquito       |  2 |
| Insects/Bugs        | mosquitos      |  2 |
| Insects/Bugs        | snails         |  2 |
| Insects/Bugs        | stickbugs      |  2 |
| Insects/Bugs        | sticks         |  2 |
| Insects/Bugs        | termites       |  2 |
| Insects/Bugs        | beattle        |  1 |
| Insects/Bugs        | black          |  1 |
| Insects/Bugs        | bol            |  1 |
| Insects/Bugs        | box            |  1 |
| Insects/Bugs        | butterfulies   |  1 |
| Insects/Bugs        | caterpiller    |  1 |
| Insects/Bugs        | centerpide     |  1 |
| Insects/Bugs        | desert         |  1 |
| Insects/Bugs        | dragonflys     |  1 |
| Insects/Bugs        | dung           |  1 |
| Insects/Bugs        | dynastid       |  1 |
| Insects/Bugs        | earthworms     |  1 |
| Insects/Bugs        | elder          |  1 |
| Insects/Bugs        | flying         |  1 |
| Insects/Bugs        | hercules       |  1 |
| Insects/Bugs        | hissing        |  1 |
| Insects/Bugs        | honey          |  1 |
| Insects/Bugs        | honeybee       |  1 |
| Insects/Bugs        | horned         |  1 |
| Insects/Bugs        | hornet         |  1 |
| Insects/Bugs        | housefly       |  1 |
| Insects/Bugs        | inchworms      |  1 |
| Insects/Bugs        | katydids       |  1 |
| Insects/Bugs        | lacywings      |  1 |
| Insects/Bugs        | laybugs        |  1 |
| Insects/Bugs        | legs           |  1 |
| Insects/Bugs        | lions          |  1 |
| Insects/Bugs        | lizards        |  1 |
| Insects/Bugs        | mantases       |  1 |
| Insects/Bugs        | manti          |  1 |
| Insects/Bugs        | mantus         |  1 |
| Insects/Bugs        | matis          |  1 |
| Insects/Bugs        | millipede      |  1 |
| Insects/Bugs        | monoch         |  1 |
| Insects/Bugs        | mosquitoes     |  1 |
| Insects/Bugs        | pill           |  1 |
| Insects/Bugs        | pollies        |  1 |
| Insects/Bugs        | potato         |  1 |
| Insects/Bugs        | pray           |  1 |
| Insects/Bugs        | prey           |  1 |
| Insects/Bugs        | red            |  1 |
| Insects/Bugs        | rolly          |  1 |
| Insects/Bugs        | rolypoly       |  1 |
| Insects/Bugs        | sicadias       |  1 |
| Insects/Bugs        | slugs          |  1 |
| Insects/Bugs        | stag           |  1 |
| Insects/Bugs        | stink          |  1 |
| Insects/Bugs        | tarantualas    |  1 |
| Insects/Bugs        | tarantulas     |  1 |
| Insects/Bugs        | tiger          |  1 |
| Insects/Bugs        | trapdoor       |  1 |
| Insects/Bugs        | walkings       |  1 |
| Insects/Bugs        | wasp           |  1 |
| Insects/Bugs        | weavel         |  1 |
| Insects/Bugs        | widows         |  1 |
| Insects/Bugs        | worm           |  1 |
| Insects/Bugs        | worms          |  1 |
| Mammals             | dogs           | 74 |
| Mammals             | cats           | 64 |
| Mammals             | bears          | 24 |
| Mammals             | elephants      | 24 |
| Mammals             | cat            | 22 |
| Mammals             | dog            | 21 |
| Mammals             | humans         | 19 |
| Mammals             | whales         | 16 |
| Mammals             | lions          | 15 |
| Mammals             | tigers         | 14 |
| Mammals             | dolphins       | 13 |
| Mammals             | horses         | 10 |
| Mammals             | pandas         | 10 |
| Mammals             | monkey         |  8 |
| Mammals             | monkeys        |  8 |
| Mammals             | giraffes       |  7 |
| Mammals             | horse          |  7 |
| Mammals             | cows           |  6 |
| Mammals             | dolphin        |  6 |
| Mammals             | elephant       |  6 |
| Mammals             | lion           |  6 |
| Mammals             | wolf           |  6 |
| Mammals             | bats           |  5 |
| Mammals             | foxes          |  5 |
| Mammals             | otters         |  5 |
| Mammals             | deer           |  4 |
| Mammals             | hamsters       |  4 |
| Mammals             | koalas         |  4 |
| Mammals             | sloths         |  4 |
| Mammals             | tiger          |  4 |
| Mammals             | wolves         |  4 |
| Mammals             | zebras         |  4 |
| Mammals             | cheetah        |  3 |
| Mammals             | ferrets        |  3 |
| Mammals             | fox            |  3 |
| Mammals             | gorillas       |  3 |
| Mammals             | house          |  3 |
| Mammals             | polar          |  3 |
| Mammals             | squirrels      |  3 |
| Mammals             | apes           |  2 |
| Mammals             | bear           |  2 |
| Mammals             | bunnies        |  2 |
| Mammals             | capybaras      |  2 |
| Mammals             | cheetahs       |  2 |
| Mammals             | gorilla        |  2 |
| Mammals             | hamster        |  2 |
| Mammals             | kangaroos      |  2 |
| Mammals             | lemurs         |  2 |
| Mammals             | manatee        |  2 |
| Mammals             | panda          |  2 |
| Mammals             | panther        |  2 |
| Mammals             | rabbits        |  2 |
| Mammals             | rats           |  2 |
| Mammals             | sea            |  2 |
| Mammals             | seals          |  2 |
| Mammals             | baboons        |  1 |
| Mammals             | badger         |  1 |
| Mammals             | beaver         |  1 |
| Mammals             | beavers        |  1 |
| Mammals             | beluga         |  1 |
| Mammals             | blue           |  1 |
| Mammals             | brown          |  1 |
| Mammals             | bunny          |  1 |
| Mammals             | caribou        |  1 |
| Mammals             | cars           |  1 |
| Mammals             | cheeta         |  1 |
| Mammals             | chimpanzee     |  1 |
| Mammals             | chimpanzees    |  1 |
| Mammals             | chimps         |  1 |
| Mammals             | cow            |  1 |
| Mammals             | coyote         |  1 |
| Mammals             | dears          |  1 |
| Mammals             | deers          |  1 |
| Mammals             | dolphlins      |  1 |
| Mammals             | domestic       |  1 |
| Mammals             | elk            |  1 |
| Mammals             | ferret         |  1 |
| Mammals             | giraffe        |  1 |
| Mammals             | giraffee       |  1 |
| Mammals             | girrafes       |  1 |
| Mammals             | gliders        |  1 |
| Mammals             | goat           |  1 |
| Mammals             | goats          |  1 |
| Mammals             | grizzly        |  1 |
| Mammals             | harbor         |  1 |
| Mammals             | hedgehogs      |  1 |
| Mammals             | hippopotamuses |  1 |
| Mammals             | hippos         |  1 |
| Mammals             | honey          |  1 |
| Mammals             | human          |  1 |
| Mammals             | kangaroo       |  1 |
| Mammals             | leapards       |  1 |
| Mammals             | lemur          |  1 |
| Mammals             | leopards       |  1 |
| Mammals             | mammoths       |  1 |
| Mammals             | manatees       |  1 |
| Mammals             | mice           |  1 |
| Mammals             | moose          |  1 |
| Mammals             | mouse          |  1 |
| Mammals             | opossum        |  1 |
| Mammals             | orkas          |  1 |
| Mammals             | panthers       |  1 |
| Mammals             | pigs           |  1 |
| Mammals             | puma           |  1 |
| Mammals             | raccoons       |  1 |
| Mammals             | rat            |  1 |
| Mammals             | red            |  1 |
| Mammals             | ring           |  1 |
| Mammals             | ringtail       |  1 |
| Mammals             | shark          |  1 |
| Mammals             | sheep          |  1 |
| Mammals             | sloth          |  1 |
| Mammals             | snow           |  1 |
| Mammals             | spotted        |  1 |
| Mammals             | squirrel       |  1 |
| Mammals             | sugar          |  1 |
| Mammals             | tailed         |  1 |
| Mammals             | walruses       |  1 |
| Mammals             | whale          |  1 |
| Mammals             | wolfs          |  1 |
| Reptiles/Amphibeans | frogs          | 69 |
| Reptiles/Amphibeans | snakes         | 51 |
| Reptiles/Amphibeans | lizards        | 50 |
| Reptiles/Amphibeans | turtles        | 47 |
| Reptiles/Amphibeans | iguanas        | 23 |
| Reptiles/Amphibeans | frog           | 21 |
| Reptiles/Amphibeans | alligators     | 20 |
| Reptiles/Amphibeans | geckos         | 20 |
| Reptiles/Amphibeans | lizard         | 20 |
| Reptiles/Amphibeans | turtle         | 16 |
| Reptiles/Amphibeans | salamanders    | 15 |
| Reptiles/Amphibeans | snake          | 15 |
| Reptiles/Amphibeans | crocodiles     | 14 |
| Reptiles/Amphibeans | dragons        | 14 |
| Reptiles/Amphibeans | chameleons     | 12 |
| Reptiles/Amphibeans | toads          | 12 |
| Reptiles/Amphibeans | bearded        | 11 |
| Reptiles/Amphibeans | iguana         | 11 |
| Reptiles/Amphibeans | gecko          |  8 |
| Reptiles/Amphibeans | dragon         |  7 |
| Reptiles/Amphibeans | salamander     |  7 |
| Reptiles/Amphibeans | alligator      |  6 |
| Reptiles/Amphibeans | komodo         |  6 |
| Reptiles/Amphibeans | toad           |  6 |
| Reptiles/Amphibeans | tortoises      |  6 |
| Reptiles/Amphibeans | chameleon      |  4 |
| Reptiles/Amphibeans | crocodile      |  4 |
| Reptiles/Amphibeans | gila           |  4 |
| Reptiles/Amphibeans | tree           |  4 |
| Reptiles/Amphibeans | aligators      |  3 |
| Reptiles/Amphibeans | cobra          |  3 |
| Reptiles/Amphibeans | python         |  3 |
| Reptiles/Amphibeans | sea            |  3 |
| Reptiles/Amphibeans | ball           |  2 |
| Reptiles/Amphibeans | boas           |  2 |
| Reptiles/Amphibeans | bullfrog       |  2 |
| Reptiles/Amphibeans | coral          |  2 |
| Reptiles/Amphibeans | dart           |  2 |
| Reptiles/Amphibeans | green          |  2 |
| Reptiles/Amphibeans | monsters       |  2 |
| Reptiles/Amphibeans | newts          |  2 |
| Reptiles/Amphibeans | rattlesnakes   |  2 |
| Reptiles/Amphibeans | snapping       |  2 |
| Reptiles/Amphibeans | albino         |  1 |
| Reptiles/Amphibeans | aligator       |  1 |
| Reptiles/Amphibeans | alligatiors    |  1 |
| Reptiles/Amphibeans | amphibian      |  1 |
| Reptiles/Amphibeans | andaconda      |  1 |
| Reptiles/Amphibeans | anoles         |  1 |
| Reptiles/Amphibeans | axolotls       |  1 |
| Reptiles/Amphibeans | beaded         |  1 |
| Reptiles/Amphibeans | bull           |  1 |
| Reptiles/Amphibeans | bullfrogs      |  1 |
| Reptiles/Amphibeans | chamilian      |  1 |
| Reptiles/Amphibeans | chorus         |  1 |
| Reptiles/Amphibeans | cobras         |  1 |
| Reptiles/Amphibeans | cornsnakes     |  1 |
| Reptiles/Amphibeans | crocadiles     |  1 |
| Reptiles/Amphibeans | crockodile     |  1 |
| Reptiles/Amphibeans | desert         |  1 |
| Reptiles/Amphibeans | dinosaurs      |  1 |
| Reptiles/Amphibeans | elapidaes      |  1 |
| Reptiles/Amphibeans | gaboan         |  1 |
| Reptiles/Amphibeans | geccos         |  1 |
| Reptiles/Amphibeans | geicos         |  1 |
| Reptiles/Amphibeans | geko           |  1 |
| Reptiles/Amphibeans | hellbenders    |  1 |
| Reptiles/Amphibeans | horned         |  1 |
| Reptiles/Amphibeans | kamodo         |  1 |
| Reptiles/Amphibeans | kimoto         |  1 |
| Reptiles/Amphibeans | king           |  1 |
| Reptiles/Amphibeans | leopard        |  1 |
| Reptiles/Amphibeans | lizars         |  1 |
| Reptiles/Amphibeans | lizzards       |  1 |
| Reptiles/Amphibeans | monster        |  1 |
| Reptiles/Amphibeans | newt           |  1 |
| Reptiles/Amphibeans | pac            |  1 |
| Reptiles/Amphibeans | poison         |  1 |
| Reptiles/Amphibeans | rattle         |  1 |
| Reptiles/Amphibeans | rough          |  1 |
| Reptiles/Amphibeans | seals          |  1 |
| Reptiles/Amphibeans | skinks         |  1 |
| Reptiles/Amphibeans | spiders        |  1 |
| Reptiles/Amphibeans | spitting       |  1 |
| Reptiles/Amphibeans | tortoise       |  1 |
| Reptiles/Amphibeans | treefrogs      |  1 |
| Reptiles/Amphibeans | turtes         |  1 |
| Reptiles/Amphibeans | turtules       |  1 |
| Reptiles/Amphibeans | vipers         |  1 |
| Reptiles/Amphibeans | water          |  1 |

## Subject comments and information

#### Prior experiment

| problems                                                                                                               | comments                                                                                                                                                                                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| no                                                                                                                     | thanks, fun one\!                                                                                                                                                                                                                                                                         |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | n/a                                                                                                                                                                                                                                                                                       |
| none                                                                                                                   | none                                                                                                                                                                                                                                                                                      |
| Not that I noticed                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| Nope.                                                                                                                  | So, I don\&quotechart believe that I\&quotecharve done this for you, but you REALLY need to grant a qual or something to keep people from doing these multiple times because there is no way that we can remember what we have and have not done for you. I do hundreds of surveys a DAY. |
| TL;DR? YOU have got to help us out here.                                                                               |                                                                                                                                                                                                                                                                                           |
| NO                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | No                                                                                                                                                                                                                                                                                        |
| None.                                                                                                                  | Great study.                                                                                                                                                                                                                                                                              |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| none                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| Nope                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no problems, bugs were mentioned. :D                                                                                   | thank you\!                                                                                                                                                                                                                                                                               |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| none                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No.                                                                                                                    | Thanks so much.                                                                                                                                                                                                                                                                           |
| No.                                                                                                                    | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no.                                                                                                                    | I really enjoyed the layout of this survey.                                                                                                                                                                                                                                               |
| None                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| Only the bugs you asked me to list\!                                                                                   | Some of the questions made me laugh. That was fun, thank you.                                                                                                                                                                                                                             |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no problems                                                                                                            | Very very odd study. I would love to know the outcome.                                                                                                                                                                                                                                    |
| nond                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | none                                                                                                                                                                                                                                                                                      |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | None                                                                                                                                                                                                                                                                                      |
| There were no problems or bugs with the experiment.                                                                    | Thanks for the opportunity to participate and good luck with your research\!                                                                                                                                                                                                              |
| n/a                                                                                                                    | Thank you for the opportunity to participate in this study                                                                                                                                                                                                                                |
| none at all                                                                                                            | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | no                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | none                                                                                                                                                                                                                                                                                      |
| Nope,                                                                                                                  | None.                                                                                                                                                                                                                                                                                     |
| no                                                                                                                     | None                                                                                                                                                                                                                                                                                      |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No issues                                                                                                              | No additional comments                                                                                                                                                                                                                                                                    |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | Better than average in that it was … amusing, I guess.                                                                                                                                                                                                                                    |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | Thank you for this opportunity\!                                                                                                                                                                                                                                                          |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | thank you                                                                                                                                                                                                                                                                                 |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | Some of the questions made me laugh because of the animals that were selected. This was an entertaining HIT.                                                                                                                                                                              |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | Interesting. Thank you\!                                                                                                                                                                                                                                                                  |
| No                                                                                                                     | No thank you\!                                                                                                                                                                                                                                                                            |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| You have to double check to see that the slider hits zero. I missed that on the first few questions.                   | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | The questions were rarely applicable                                                                                                                                                                                                                                                      |
| also most mammals have estrous cycles, not menstrual cycles                                                            |                                                                                                                                                                                                                                                                                           |
| n/a                                                                                                                    | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | Thanks\!                                                                                                                                                                                                                                                                                  |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no bugs…haha                                                                                                           | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | This was very enjoyable, thank you\!                                                                                                                                                                                                                                                      |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| Not that I encountered, no.                                                                                            | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | good                                                                                                                                                                                                                                                                                      |
| NO                                                                                                                     | NO                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No problems.                                                                                                           | NA                                                                                                                                                                                                                                                                                        |
| I don\&quotechart think so                                                                                             | I\&quotecharm totally confused\! But this was fun\!                                                                                                                                                                                                                                       |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | none                                                                                                                                                                                                                                                                                      |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | N/A                                                                                                                                                                                                                                                                                       |
| NA                                                                                                                     | thank you                                                                                                                                                                                                                                                                                 |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No problems or bug                                                                                                     | It was fun- thanks\!                                                                                                                                                                                                                                                                      |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| None.                                                                                                                  | None.                                                                                                                                                                                                                                                                                     |
| None                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | None                                                                                                                                                                                                                                                                                      |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | thanks for the survey                                                                                                                                                                                                                                                                     |
| no                                                                                                                     | lol                                                                                                                                                                                                                                                                                       |
| No bugs, but I\&quotecharm pretty sure you misspelled amphibians on the first page (you wrote -bEAns)                  | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| it was very hard to select 0% (sometimes it selected 1 or 2), and then it seemed impossible to adjust the slider lower | I always find your HITs amusing. Thank you for asking about fair pay. It shows you consider mturk workers people.                                                                                                                                                                         |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| none                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | Good Survey                                                                                                                                                                                                                                                                               |
| None                                                                                                                   | God bless and good luck\! All clear.                                                                                                                                                                                                                                                      |
| no                                                                                                                     | none                                                                                                                                                                                                                                                                                      |
| No                                                                                                                     | n/a                                                                                                                                                                                                                                                                                       |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | Best of luck in your research\!                                                                                                                                                                                                                                                           |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| Had a little trouble hitting 0, could only go down to 1 on a couple. (Puffin browser)                                  | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | None                                                                                                                                                                                                                                                                                      |
| None encountered                                                                                                       | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| none                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No.                                                                                                                    | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | It was fun and interesting                                                                                                                                                                                                                                                                |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | no                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | Quick, easy, and very enjoyable. A few of the statements had me giggling\!                                                                                                                                                                                                                |
| no                                                                                                                     | Thank you for the fun task\!                                                                                                                                                                                                                                                              |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No.                                                                                                                    | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No.                                                                                                                    | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | It seemed like all of the answers were 0 or close to it. I hope that I did it okay.                                                                                                                                                                                                       |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | nice                                                                                                                                                                                                                                                                                      |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| There were bugs- only when we were asked to list 3 insects. Other than that, no\!                                      | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No.                                                                                                                    | Thank you.                                                                                                                                                                                                                                                                                |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no issues                                                                                                              | thank you                                                                                                                                                                                                                                                                                 |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| I had problems getting all the scales to go to exactly 0 for the high rise questions.                                  | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | None thanks\!                                                                                                                                                                                                                                                                             |
| no                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No problems or bugs                                                                                                    | No comments.                                                                                                                                                                                                                                                                              |
| na                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| no                                                                                                                     | no                                                                                                                                                                                                                                                                                        |
| No problems.                                                                                                           | Thanks for the opportunity.                                                                                                                                                                                                                                                               |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| No                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| NA                                                                                                                     | NA                                                                                                                                                                                                                                                                                        |
| None                                                                                                                   | NA                                                                                                                                                                                                                                                                                        |

#### Main experiment

| problems                                                                                                                                             | comments                                                                                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | 0                                                                                                                                                                |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | good                                                                                                                                                             |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| non                                                                                                                                                  | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| The progress bar went past 100%                                                                                                                      | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | enjoyed                                                                                                                                                          |
| no                                                                                                                                                   | great                                                                                                                                                            |
| No                                                                                                                                                   | Survey is good                                                                                                                                                   |
| nope                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | Survey is good                                                                                                                                                   |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | too many open response boxes for the pay                                                                                                                         |
| I did not want to change my answer for the second question, hope it was okay to leave blank. I gave repeated the same answer for the first question. | none                                                                                                                                                             |
| No problems                                                                                                                                          | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no. No problems that I came across.                                                                                                                  | I feel like this was mostly opinions. A lot of it is close context and some isn\&quotechart. I definitely used my best judgements.                               |
| no issues                                                                                                                                            | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| n/a                                                                                                                                                  | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | Thank you                                                                                                                                                        |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | no                                                                                                                                                               |
| no                                                                                                                                                   | none                                                                                                                                                             |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | NA                                                                                                                                                               |
| none                                                                                                                                                 | none                                                                                                                                                             |
| none at all                                                                                                                                          | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | This is an interesting study. Thank you for posting the HIT.                                                                                                     |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | no                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | I think I did the HIT correctly and I tried to make reasonable guesses. I don\&quotechart think there are any one correct answer, and I hope my data is helpful. |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| Nope                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | Interesting, but I do hope that there are truly no correct answers although I did my best to give a percentage based on the limited information given.           |
| I experienced no problems during this survey.                                                                                                        | I do not have any specific comments related to this study at this time, thank you and good luck with your research.                                              |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | NA                                                                                                                                                               |
| no                                                                                                                                                   | no                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | Thank you so much\! Very interesting.                                                                                                                            |
| None at all                                                                                                                                          | thanks. i hoep that was good enough for you.                                                                                                                     |
| none.                                                                                                                                                | none                                                                                                                                                             |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | No                                                                                                                                                               |
| none                                                                                                                                                 | Thank you.                                                                                                                                                       |
| no                                                                                                                                                   | n/a                                                                                                                                                              |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| nope                                                                                                                                                 | NA                                                                                                                                                               |
| no                                                                                                                                                   | not enough time                                                                                                                                                  |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | thank you\!                                                                                                                                                      |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| None                                                                                                                                                 | thank you\!                                                                                                                                                      |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No issues using Linux Mint 17, latest Chromium.                                                                                                      | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | No.                                                                                                                                                              |
| no issues                                                                                                                                            | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| I understood what to do but it just didn\&quotechart make sense to me at all.                                                                        | i hope i was able to help. good luck.                                                                                                                            |
| No                                                                                                                                                   | No                                                                                                                                                               |
| No problems or bugs at all\!                                                                                                                         | Have no additional comments.                                                                                                                                     |
| no                                                                                                                                                   | Good Luck\!\!                                                                                                                                                    |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| None.                                                                                                                                                | NA                                                                                                                                                               |
| No                                                                                                                                                   | Good survey                                                                                                                                                      |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| no                                                                                                                                                   | Thank you.                                                                                                                                                       |
| NA                                                                                                                                                   | fun survey. -thx                                                                                                                                                 |
| NA                                                                                                                                                   | Have a great day.                                                                                                                                                |
| No                                                                                                                                                   | The HIT was paid fairly without the explanations required at the end but is underpaid considering those questions that needed to be answered.                    |
| no                                                                                                                                                   | good                                                                                                                                                             |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | Not at this time                                                                                                                                                 |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | Thank you.                                                                                                                                                       |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | no                                                                                                                                                               |
| none                                                                                                                                                 | this was fun\!                                                                                                                                                   |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | Thank you\!                                                                                                                                                      |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | no                                                                                                                                                               |
| NA                                                                                                                                                   | Interesting                                                                                                                                                      |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| nope                                                                                                                                                 | NA                                                                                                                                                               |
| n/a                                                                                                                                                  | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | This was fun\!                                                                                                                                                   |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| Everything was perfect.                                                                                                                              | Thanks for the survey\!                                                                                                                                          |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| N/A                                                                                                                                                  | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| No problems.                                                                                                                                         | NA                                                                                                                                                               |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| Nothing like that                                                                                                                                    | nice experiment                                                                                                                                                  |
| no                                                                                                                                                   | fun survey, no issues.                                                                                                                                           |
| No                                                                                                                                                   | This was a fun experiment\!                                                                                                                                      |
| No                                                                                                                                                   | It was fun and the part at the end made me question my own decisions. Good luck\!                                                                                |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No problems.                                                                                                                                         | Great experiment\!                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| NO                                                                                                                                                   | NA                                                                                                                                                               |
| No, it all ran smoothly.                                                                                                                             | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | Good luck with your study\!                                                                                                                                      |
| none                                                                                                                                                 | NA                                                                                                                                                               |
| None                                                                                                                                                 | Good study\!                                                                                                                                                     |
| NA                                                                                                                                                   | It was a little confusing but I did my best.                                                                                                                     |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No.                                                                                                                                                  | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | Great Survey\!                                                                                                                                                   |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| No                                                                                                                                                   | I wonder if any of these animals actually exist.                                                                                                                 |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| NO                                                                                                                                                   | NO THANKS                                                                                                                                                        |
| n/a                                                                                                                                                  | n/a                                                                                                                                                              |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| No problems                                                                                                                                          | NA                                                                                                                                                               |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| noye                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | None                                                                                                                                                             |
| None.                                                                                                                                                | I answered thoughtfully, good luck\!                                                                                                                             |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| None                                                                                                                                                 | None                                                                                                                                                             |
| no issues                                                                                                                                            | nothing to add                                                                                                                                                   |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| None                                                                                                                                                 | NA                                                                                                                                                               |
| No                                                                                                                                                   | NA                                                                                                                                                               |
| no                                                                                                                                                   | no comments                                                                                                                                                      |
| NA                                                                                                                                                   | NA                                                                                                                                                               |
| no, all was fine                                                                                                                                     | NA                                                                                                                                                               |
| no                                                                                                                                                   | NA                                                                                                                                                               |
| All fine                                                                                                                                             | NA                                                                                                                                                               |
| none                                                                                                                                                 | none                                                                                                                                                             |

#### Replication experiment

| problems                                                                                                         | comments                                                                                                                                                                                                                                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | none                                                                                                                                                                                                                                                                                                                       |
| No                                                                                                               | None                                                                                                                                                                                                                                                                                                                       |
| None                                                                                                             | This was a very interesting experiment.                                                                                                                                                                                                                                                                                    |
| no                                                                                                               | n/a                                                                                                                                                                                                                                                                                                                        |
| none                                                                                                             | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| Nope                                                                                                             | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | Thanks                                                                                                                                                                                                                                                                                                                     |
| noi                                                                                                              | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No problems                                                                                                      | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| None                                                                                                             | None                                                                                                                                                                                                                                                                                                                       |
| Nope                                                                                                             | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | Thank you.                                                                                                                                                                                                                                                                                                                 |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | none                                                                                                                                                                                                                                                                                                                       |
| no                                                                                                               | no                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | Survey went smoothly.                                                                                                                                                                                                                                                                                                      |
| no                                                                                                               | none                                                                                                                                                                                                                                                                                                                       |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| when I was clicking the button after I moved the slider, It keep trying to hit the button for the next question. | Pangolins are real animals.                                                                                                                                                                                                                                                                                                |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | none                                                                                                                                                                                                                                                                                                                       |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | It took longer than stated, especially with the writing.                                                                                                                                                                                                                                                                   |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | I was really torn. I want all of these animals and think you should include pictures\!                                                                                                                                                                                                                                     |
| none                                                                                                             | on this final page there is a blue box in the background and the last question is overlapping out of the box which is weird. but this was an interesting HIT thanks.                                                                                                                                                       |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | None                                                                                                                                                                                                                                                                                                                       |
| No                                                                                                               | Thanks\!                                                                                                                                                                                                                                                                                                                   |
| No                                                                                                               | None                                                                                                                                                                                                                                                                                                                       |
| None                                                                                                             | On my computer your font was very small and somewhat difficult to read.                                                                                                                                                                                                                                                    |
| none                                                                                                             | none                                                                                                                                                                                                                                                                                                                       |
| NA                                                                                                               | I\&quotecharm not sure what to put for pay. I have health issues, so it does take me a little longer to get through tasks. I spent almost 15 minutes on this, so I do feel the pay was low for that amount of time. Interesting, though. Thanks\!                                                                          |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| None                                                                                                             | None.                                                                                                                                                                                                                                                                                                                      |
| no                                                                                                               | n/a                                                                                                                                                                                                                                                                                                                        |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | Thank you for the fair pay                                                                                                                                                                                                                                                                                                 |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No issues                                                                                                        | Thank you for the survey                                                                                                                                                                                                                                                                                                   |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| None.                                                                                                            | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | thank you\!                                                                                                                                                                                                                                                                                                                |
| NO                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | none                                                                                                                                                                                                                                                                                                                       |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | no                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | gret                                                                                                                                                                                                                                                                                                                       |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No, thank you                                                                                                    | Some of them made me laugh\! Good luck with your study.                                                                                                                                                                                                                                                                    |
| No bugs                                                                                                          | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | Timer a bit short, made me nervous.                                                                                                                                                                                                                                                                                        |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| None                                                                                                             | None.                                                                                                                                                                                                                                                                                                                      |
| None                                                                                                             | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | great survey\!                                                                                                                                                                                                                                                                                                             |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | None                                                                                                                                                                                                                                                                                                                       |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | No.                                                                                                                                                                                                                                                                                                                        |
| I did not experience any problems.                                                                               | I enjoyed the survey. It was interesting to read a general statement and use intuition to break down down the information more specifically. For example, when presented with an animal that is known to lay eggs, my instinct was to think that fact was true among one sex, so I estimated half of the total population. |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | n/a                                                                                                                                                                                                                                                                                                                        |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                        |
| no                                                                                                               | no                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | None at this time                                                                                                                                                                                                                                                                                                          |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No.                                                                                                              | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| none                                                                                                             | none just Worker id: A2GN5L03ZQEOZF                                                                                                                                                                                                                                                                                        |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | no                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | n/a                                                                                                                                                                                                                                                                                                                        |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | simple and straightforward                                                                                                                                                                                                                                                                                                 |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| NA                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| No                                                                                                               | Thanks for your research                                                                                                                                                                                                                                                                                                   |
| no                                                                                                               | NA                                                                                                                                                                                                                                                                                                                         |
| no                                                                                                               | great i loved it                                                                                                                                                                                                                                                                                                           |
| No                                                                                                               | Thank you.                                                                                                                                                                                                                                                                                                                 |
