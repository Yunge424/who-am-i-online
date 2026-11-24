# Who Am I Online?
### An Interactive Exploration of Digital Identity and Algorithmic Representation

**Live Website:** https://yunge424.github.io/who-am-i-online/

**GitHub Repository:** https://github.com/Yunge424/who-am-i-online

## 1. Project Overview

Who Am I Online? is a browser-based creative coding project that explores how digital identities can be constructed through data collection, classification and algorithmic representation.

The project invites users to answer five questions about their online behaviours. Their responses are transformed into four numerical dimensions and visualised as an animated generative portrait.

Users can then change the parameters and compare two versions of their digital identity.

The project asks a central critical question:

**If an algorithm can change how we are represented, who has the power to define who we are online?**

This experience is an artistic experiment rather than a scientific personality test.

## 2. Project Aims

The project aims to:

- Explore how online behaviours are converted into numerical data.
- Demonstrate the subjective decisions involved in algorithmic classification.
- Use creative coding to visualise abstract identity data.
- Give users opportunities to question and modify algorithmic representations.
- Connect interactive web design with critical digital media theory.

## 3. Main Features

### Interactive Questionnaire

Users answer five questions about:

1. Social media use.
2. Online self-expression.
3. Privacy preferences.
4. Personal information sharing.
5. Platform personalisation and categorisation.

Each answer contributes to the algorithmic identity profile.

### Algorithmic Identity Scores

The questionnaire produces four dimensions:

| Dimension | Visual Representation |
| --- | --- |
| Visibility | Particle brightness and opacity |
| Expression | Particle quantity and density |
| Privacy | Visual masking and concealment |
| Interaction | Particle movement speed |

Each score begins at 50 and is adjusted according to explicitly defined answer-to-score rules.

Final values are constrained to a range of 0–100.

These dimensions are artistic design choices, not scientifically validated measurements.

### Generative Digital Portrait

JavaScript Canvas transforms the calculated scores into an animated particle portrait.

The portrait is generated programmatically rather than selected from a collection of pre-existing images.

### Original vs Modified Portrait

The results page presents two portraits:

- **Original Portrait:** represents the questionnaire's initial classification.
- **Modified Portrait:** responds to user-controlled parameters.

This comparison demonstrates how a digital representation can change without any change to the person being represented.

### Change the Algorithm

Four interactive sliders allow users to modify the assigned scores.

Changes immediately affect the modified portrait while the original portrait remains unchanged.

A Reset Algorithm button restores the initial values.

### Algorithm Transparency

The website explains how answers are translated into scores.

Users can inspect:

- Their five selected answers.
- The score changes associated with each answer.
- The full set of answer-to-score rules.
- The limitations of the classification process.

### PNG Export

Users can download their generated portraits as PNG images.

## 4. Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | Website structure and content |
| CSS3 | Styling, responsive layout and visual design |
| JavaScript | Questionnaire logic and interactive controls |
| Canvas API | Procedural portrait rendering |
| requestAnimationFrame | Browser-based animation |
| GitHub | Source code management |
| GitHub Pages | Static website hosting |

The project does not require a backend server or machine-learning model.

## 5. Project Structure

```text
who-am-i-online/
├── index.html
├── portrait.js
└── README.md
```

### index.html

Contains the interface, questionnaire data, scoring rules, results page, algorithm controls, transparency explanations and academic context.

### portrait.js

Contains the Canvas portrait-generation system, particle animation, parameter updates, PNG export and animation cleanup.

### README.md

Documents the project, its technical implementation, theoretical context and limitations.

## 6. How to Use

1. Open the live website.
2. Click "Start Your Digital Identity Experiment".
3. Answer all five questions.
4. Review the four identity scores.
5. Compare the Original Portrait and Modified Portrait.
6. Adjust the algorithm sliders.
7. Observe changes in the modified portrait.
8. Explore the scoring rules and critical explanations.
9. Download a portrait if desired.
10. Click "Start Again" to repeat the experience.

## 7. How the Algorithm Works

The identity algorithm uses an explicit rule-based scoring system.

Each dimension begins with a value of 50.

Selected answers add or subtract predetermined values.

For example:

- "Sharing my life" increases Visibility by 25.
- "Written posts" increases Expression by 20.
- "Extremely important" privacy increases Privacy by 30.
- "I prefer not to be categorised" increases Privacy by 20.

The final scores are limited to the range 0–100.

The resulting values control the visual properties of the generative portrait.

These rules were designed for critical and artistic exploration. They do not claim to measure users' real identities.

## 8. Critical Design Approach

The project deliberately simplifies complex online behaviours into four categories.

This simplification is part of its critical argument.

Digital platforms often rely on selected forms of user data to classify, predict or represent individuals.

However, the choice of what to measure, how to categorise it and how to interpret the results is not necessarily neutral.

By exposing the scoring rules and allowing users to alter the visual outcome, the project encourages reflection on algorithmic power.

The interactive comparison is particularly important: users can see that a different representation does not necessarily indicate a different person.

## 9. Academic Context

### Erving Goffman — Self-Presentation

Goffman's work on self-presentation provides a conceptual starting point for considering how individuals manage impressions in different social contexts.

This project extends that question to online identity, while recognising that Goffman's original work predates social media.

### José van Dijck — Platform Culture

Van Dijck's research examines how social media platforms shape social relationships and connectivity.

The project explores how platform-like systems can translate diverse online practices into predefined categories.

### Rob Kitchin — Datafication

Kitchin's work provides a framework for critically examining data-driven systems.

The questionnaire demonstrates a simplified form of datafication by converting qualitative responses into numerical values.

### Safiya Umoja Noble — Algorithmic Power

Noble's research challenges assumptions that algorithmic systems are neutral.

This project does not simulate discriminatory search systems, but uses its adjustable scoring rules to encourage questions about the social consequences of algorithmic design.

## 10. Privacy and Ethical Considerations

The questionnaire and portrait-generation logic run in the user's browser.

The project does not implement a database, account system or server-side collection of questionnaire responses.

The portrait can be downloaded directly to the user's device.

The experience does not request sensitive personal identifiers.

The results must not be interpreted as a psychological diagnosis, personality assessment or scientifically accurate profile.

## 11. Accessibility and Responsive Design

The interface uses responsive CSS to support different screen widths.

Interactive elements include buttons, range sliders and expandable explanation sections.

The portrait engine checks the browser's reduced-motion preference.

Further accessibility and cross-browser testing remains an area for improvement.

## 12. Testing

The following behaviours have been manually checked during development:

- Completing the five-question questionnaire.
- Displaying algorithmic identity results.
- Rendering two Canvas portraits.
- Updating the modified portrait using a slider.
- Keeping the original portrait unchanged.
- Displaying individual scoring rules.
- Displaying academic context.
- Downloading a portrait as a PNG image.

Further tests should cover:

- All answer combinations.
- Reset Algorithm behaviour.
- Restart behaviour after repeated use.
- Mobile screen sizes.
- Keyboard-only navigation.
- Reduced-motion settings.
- Different browsers.

## 13. Limitations and Future Development

The current project has several limitations:

1. The questionnaire contains only five questions.
2. The four identity dimensions are subjective constructions.
3. The scoring weights are not empirically validated.
4. The visual representation cannot capture the complexity of human identity.
5. The project does not use real platform datasets or machine learning.

Potential future improvements include usability testing, more accessible controls, alternative visualisation systems and additional opportunities for users to challenge the algorithm's assumptions.

## 14. References

Goffman, E. (1959). *The Presentation of Self in Everyday Life*. Doubleday.

Kitchin, R. (2014). *The Data Revolution: Big Data, Open Data, Data Infrastructures and Their Consequences*. SAGE.

Noble, S. U. (2018). *Algorithms of Oppression: How Search Engines Reinforce Racism*. New York University Press.

van Dijck, J. (2013). *The Culture of Connectivity: A Critical History of Social Media*. Oxford University Press.

## 15. Final Reflection

Who Am I Online? uses creative coding to transform a critical media question into an interactive experience.

Rather than treating algorithmic classification as an objective description of identity, the project makes the classification process visible and adjustable.

Its central message is:

**You are more than your data.**
