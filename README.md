# Echo

Inspiration
=========================
As students of Klein ISD, we are very dedicated to our academic performance. The fast updates of information from resources like Skyward and the effectiveness of applications like Khan Academy have made education easier than ever. However, what if you could make it even better by combining the two and fixing the major problems students have with those resources? This is what Echo aims to accomplish.

What it does
=========================
Echo uses API-driven grade retrieval to retrieve grades entered into the Skyward system. The information retrieved from Skyward is used to power our live-updating GPA calculator that calculates your GPA based on recent grades rather than an outdated official GPA. This feature is something highly requested by our peers and felt it could greatly improve students awareness about how they performing. On top of this, the primary technical portion of our project is the ability for the application to suggest course material based on subjects you are struggling in. The ability to directly access your grades is a feature that Khan Academy lacks and could greatly help students that are unsure of what they need to know.

How I built it
=========================
The application's interface was built using React, a modern front-end framework developed by Facebook.

To access Skyward, we appreciatively used the assistance of the API developed by own of our fellow hackers, Kael Kirk. The API allowed us to retrieve data from Skyward as the company lacks an official API for developers.

All of the code for the application was written in Javascript (ES6) using Node.JS as our backend service and primarily consist of calculations based on data retrieved.

Challenges I ran into
=========================
There were more than a few roadblocks during the construction of our project.

The back-end environment for our application (NodeJS) was facing a lot of compatibility issues with ESLint and we weren't able to get it functional for around 2 hours.

On top of this, there was a lot of issues with the UI framework we were planning on using and had to resort to developing most of the interface ourselves.

Accomplishments that I'm proud of
=========================
The primary accomplishment that we are most proud of is the GPA calculator. Spanning over 500 lines of code, the calculator utilized advanced for loops, state functionally, react component life cycles, API driven data retrieval and lots and lots of edge cases. This type of calculator is something me and my friends have been looking for for a long time and were very proud to have finally been able to make it.

What I learned
=========================
We learned a lot about advanced Javascript concepts as well as the implementation of many react technologies. With only one person on our team having experience with this type of technology, everything used was new to us. From designing features with NodeJS to assembling react components, We learned it from scratch.

What's next for Echo
=========================
The next step for Echo would likely be scalability and improvement of the load-time performance from the API. another more complex step we would like to see is the implementation of machine and neural networks to further the effectiveness of the recommendation system.

