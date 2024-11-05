# **FP2 \- Evaluation of the Final project**

## Project Description

My project is a coffee shop game that teaches people how to recreate popular coffee shop drinks like cappuccinos, lattes, and macchiatos.

## High-Fi Prototypes

### *Prototype 1*

![Barista HiFi 1](../final-project/images/hifi1.png)

![Barista HiFi 1](../final-project/images/hifi1.1.png)

Users enjoyed the aesthetics of this game. They felt it was more intuitive than the other hifi prototype, but still was a little vague on the instructions once it was time to play the game. At this point, the 'how to play' button on the prototype does not work.

### *Prototype 2*

![Barista HiFi 2](../final-project/images/hifi2.1.png)

![Barista HiFi 2](../final-project/images/hifi2.2.png)

Users thought the multiple modes was cool but still enjoyed the first game more. Some important features felt a little too blended into the background which affected clarity in the design.

## Usability Test

Discuss the user feedback you got during the evaluation / usability test (\~300 words). Indicate which feedback you implemented, inspired new directions, or otherwise influenced your final design. 

I got a lot of feedback from the user studies. I decided to implement the following changes in my updated designs based on user feedback:

### *Prototype 1*
* When landing on the gameplay screen, P1 felt it was vague and didn’t know whether to add all the ingredients or only certain ones and if order mattered
* P1 wanted feedback for wrong selections
* P1 wasn’t sure when they were done creating the drink
* P2 expected the hint to allude to potential ingredients needed
* P2 needed more contrast on the milk foam layer (they couldn’t see a change)

### *Prototype 2*
* P1 and P2 said the separate ingredients in the cup should blend and match the other drink to show it’s done for Modes 1 and 2
* P2 said the “correct!” feedback in Mode 1 was too small
* P2 felt the “please select one” instructions should be removed once the correct choice is selected for clarity
* P2 almost missed the text change in Mode 2 because their eyes were guided to the opposite side of the screen. The change needs to be more salient


## Updated Designs

![HiFi 1 Edits](../final-project/images/hifi1-edits.JPG)

![HiFi 2 Edits](../final-project/images/hifi2-edits.JPG)

## Feedback Summary

During the lab session, my peers advised that I proceed with the first design. The second design was more confusing to navigate and the first one had helpful onboarding information. They suggested I try to solve any vagueness my users felt in the first design through progressive disclosure. They also really liked my animations and concept.

After the group critique, I plan to continue with my first design (Prototype 1). I also want to try implementing progressive disclosure and fleshing out the onboarding process to make the objectives more clear to the user.

## Milestones

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [ ] confirm JS library choice
  - [ ] start to learn about how to implement a library

- [ ] Week 11 Nov 11 \- Nov 15:  
  - [ ] FP3 check in
  - [ ] Have skeleton HTML done
  - [ ] Begin adding CSS
  - [ ] Add library to code

- [ ] Week 12 Nov 18 \- Nov 22: 
  - [ ] Continue working on CSS
  - [ ] Begin working on Vanilla JS
  - [ ] Start to implement library

- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Thanksgiving  
  - [ ] Finish up JS
  - [ ] Debug

- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] Debug
  - [ ] FP4 due

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
* micron.js for microinteractions within my game
* Google images for different icons

If I come across any other libraries, I will come back and update accordingly.


## Generative AI Use Plan

I plan to use GenAI tools as a debugging resource. I will upload my current code and ask it to help me identify what's wrong with it. If I encounter confusing code on the internet when I am googling my error code, I will also ask GenAI to help me understand the code I find. If I get really stuck and ask it to generate code, I will also ask it to explain the code so I can understand everything I include in my code files. 

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* Microsoft Copilot  
  * I will use it for checking my current code because it can help me debug or understand error messages  
  * I will not use it for complex errors like logic errors because it might not be able to help me with figuring that out. It will probobaly keep generate basic debugging tips and reminders.

* Adobe Stock
  * I will use this to generate stock images for my backgrounds
   
  This is all I have experience with GenAI-wise. For this project, I might explore other tools like Chat-GPT or Perplexity or Github Copilot. If I do decide to try those tools and implement them, I will come back to this document and update accordingly. 

### *Responsible Use*

I woudl use Generative AI responsibly by always citing when I use it in the comments in my code. I will also make sure I fully understand any generated code I choose to include. In addition to that, I will double check with the TA or professors to make sure the generated code is still following clean code practices. 

---


# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

![Portfolio](../final-project/images/portfolio-sketch.jpg)

In this final project, I will use a library like react.js or vue.js to build my personal portfolio and showcase my projects. 

I would make my design engaging through the visuals and micro-animations/interactions. I would make it interactive by allowing visitors to navigate to different pages and delve deeper into each project through clickable elements. 

I plan to make my design accessible using semantic code to make my HTML compatible with accessibility devices like screen readers.

I want my portfolio to convey who I am as a designer (including my coding capabilities) through my CSS styling choices and featured projects.  


### *Idea 2*

![Written-In-The-Stars](../final-project/images/stars-sketch.jpg)

In this final project, I would use a library like AstroJs to allow users to move through constellations in the sky and read about the mythology behind them.

I plan to make my design engaging through micro-interactions and storytelling. I would make the design interactive by allowing users to move around the night sky, select constellations to know more, and potentially answer binary (right or wrong) questions about what they think happens next in the myth. 

One of my questions for the critique was about making the navigation accessible. I think I would have to consider multiple methods of moving around (with a mouse, with the keyboard, gestures, etc). I would also include an undo move and return to the starting position button. 

I want to educate and entertain people about Ancient Greek mythology. I also enjoy looking at constellations and would love to convey that joy and spark interest in visitors.


### *Idea 3*

![Barista](../final-project/images/barista-sketch.jpg)

In this final project, I would use a game to teach people about the proper recipes and procedures of creating common cafe drinks like a latte, cappuccino, americano, etc.

I would make my design engaging through little animations, cute art, and through the challenge of the game. Visitors would have to interact with different ingredients and fulfill orders. They would also be judged based on how well they did (through a cafe rating at the end of a shift, for example).

I plan to make the design accessible by allowing users to tab through ingredients in addition to using a mouse to select. I do need to consider more ways to ensure this project is accessible. 

I want to teach people the proper way to build common cafe drinks. I could also see this website being used to train incoming baristas.


## Feedback Summary

Overall, the critique was very helpful. 

For the Portfolio Proposal, they mentioned it might be difficult to code an entire portfolio from scratch when I do not have many projects to begin with, within the time we have left in the semester. They also agreed with my concerns about coding in a sustainable manner where I will be able to go back and add more projects seamlessly with my tendency to rush. There was a suggestion to possibly prioritize having another piece for my portfolio given my lack. 

For the Written in the Stars Proposal, they asked about how people would navigate on the site, if I prefered an infinite canvas or a list view, if there will be a way to get back to start, or if I would include a search feature. They were intrigued by the storytelling aspect.

My Barista Proposal got the most support. They felt there was more emotional value and nostalgia. The main suggestion was to decide on an aesthetic and the type of animations I would incorporate (like 2D SVGs).


## Feedback Digestion

After the critique in the lab, I am leaning toward my Barista Proposal. I agree with the opinion that I should prioritize building the content of my portfolio before trying to build my portfolio. I also think it is the most doable project given the time constraints. I will incorporate the feedback of having more of a cozy and nostalgic aesthetic. I will have to look more into what 2D SVG animation is before deciding whether to incorporate or dismiss that critique. There was not a lot of critique around this proposal so I will probably need to flesh out the idea more and ask for more input. 