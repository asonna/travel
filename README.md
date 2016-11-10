# Javascript, HTML, Object Oriented & CSS GROUP PROJECT: TRAVEL

_*Epicodus Introduction to Programming final week Project, 11-10-16*_

by Amy , Annie Sonna, James  , Suzi Rubino.


##Description

You're a team and you're building something awesome.

Spend time together as a team brainstorming your vision. Decide how you want to communicate and work together over the next 4 days. All ideas should be welcome and all members given roles. You can change partners daily or play to the strengths and preferences of your members (business logic vs user interface logic). Remember that in addition to coding skills, communication is one of the most important elements of building great applications. Let your team be one that fosters direct, honest communication and encourages every member's voice!


For the presentation/demonstration, determine what the minimum viable product for demonstration is. A minimum viable product, or MVP, is a development approach where an application is created with the minimum sufficient features necessary to demonstrate it to users and/or investors. Additional features are implemented when/if time and resources allow. When you create an MVP, it should be a prototype of your idea and have the basic core elements in place so your audience (e.g. peers, investors, clients, future employers, future users, etc.) can understand what your vision is. Try to be both ambitious and realistic. Use a whiteboard or paper or online storyboard application if that would help everyone with the overview and the plan!

You are going to create something incredible. Dive in!



###Objective from Epicodus page

At the end of the week, you will present your group project at Friday's Trade Show, where it will be reviewed for the following objective:

Participation in creating and presenting a project, and collaborating effectively with teammates.

NO code review on this project.



##Specifications

WE NEED TO DETERMINE MINIMUM VIABLE PRODUCT FROM DESCRIPTION ABOVE AND APPLY TO SPECS BELOW

Also, review these specs to see if we are working on simplest first, do this and redefine for next spec if necessary

Minimum viable product might alter specs below?

- [ ] Specification ONE User select input from 5 categories:

 1. User type (multi-choice)

     1. Single traveler

     2. Single traveler with children age 0-11 years (same issue as above)

     3. Single traveler with pet

 2. Destination (travelers is an international site, no options for within US that I could see)

 3. Transportation Mode (select one)

     - Flying

     - Train

     - Boat

     - Car (will specify in spec two rental or personal?)

     - Bus

     - Walk/hike (seems like this needs to be here if they are hiking to destination - camping accommodation below)

 4. Accommodation (select one)

     - Hotel

     - Hostel/guesthouse

     - Camping

 5. Planned activities (multiple or single choice?)

     - Sightseeing

     - Outdoor activities

     - dining out

     - Shopping


##Specifications:

1  -  Example Input: adult with child, Canada, flying, camping, outdoor activities and submit

 -  Example Output:

     - line item of items selected by user displaying in class beneath for this step will be transferred to next step later

     <ul> separate <i>



2 - Example Input: adult with child, Canada, flying, camping, outdoor activities and submit

 -  Example Output:

     - line item of items selected by user displaying on the next page

     You are traveling with "child/children" to "Canada", staying in a "hotel" and planning an/a "outdoor activities" while you are there.



3 - Example Input: adult with child, Canada, flying, camping, outdoor activities and submit

 -  Example Output:

     - line item of items selected by user displaying on the next page in addition to the travel checklist for the user validation.

     unknown



4 - Example Input: adult with child, Canada, flying, camping, outdoor activities and submit

 -  Example Output:

     - line item of items selected by user displaying on the next page in addition to the travel checklist and document/money/ticket checklist for the user validation.

     unknown



5 - Example Input: adult with child, Canada, flying, camping, outdoor activities and submit

 -  Example Output:

     - line item of items selected by user displaying on the next page in addition to the travel checklist, document/money/ticket checklist and packing checklist for the user validation.

     unknown



6 - Example Input: The travel checklist, document/money/ticket checklist and packing checklist validated by user and submit through "checklist summary" button.

 -  Example Output:

     - Consolidated checklist on the third page

     unknown




* Before proceeding with this spec

- [ ] Review and apply to MVP, remove anything?

- [ ] Break down existing spec based on agreed upon goal

   - This input will create the main object we are working with? A travel type object with all the above categories named as key values

   EG object = TravelPlan; key values = traveler, travelerDest, travelMode, travelAccom, travelActivity


##Setup/Installation requirements



## Known Bugs

_* x *_



## Technologies Used

1. html

2. github

3. custom and bootstrap cascading style sheets

4. custom and jQuery javascript utilizing objects


## Copyright and license information

Not applicable at this time.
