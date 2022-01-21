# UFOs
Javascript

## Overview of the Project 
The purpose of the project was to create a webpage for UFO sightings with the ability to filter and narrow the visible data in the table based on date, city, state, country and shape.  The wepage was built using HTML while Javascript was used to create they dynamic table, which filters the data depending on the user input.  The styling of the webpage was driven by Bootstrap and CSS.

### Results
The UFO sightings website is a user friendly website that allows for filtering on a number of criteria.  When first engaging with the webpage, the user can see the webpage and the table, which shows all of the data within the data set https://github.com/julianadvds/UFOs/blob/main/Resources/Landing_Page.png

To narrow down the data within the table, there are 5 criteria that can be used to filter the data: Date, city, state, country and shape.  To apply a filter, the user types in the filter criteria into the specificed field.  For example, to filter for UFOs that are a light shape, the user types in "light" into the "Enter Shape" field and press enter. https://github.com/julianadvds/UFOs/blob/main/Resources/shape_filter.png.

To filter by an additional criteria, simply type in the additional filter and press enter.  For example, to filter for light shaped UFOs spotted in Texas, add in the state code (tx) and press enter.  As you can see in the picture: Picture 3, the table has applied the filters. https://github.com/julianadvds/UFOs/blob/main/Resources/shape_state_filter.png

To clear the data, simply remove the filtered data from the field.

## Summary
While this webpage offers users great flexibility to look at the data points based on filters, it does not provide any analysis on the table data, nor does it allow the user to easily extract the data to perform their own analysis.  The user is unable to quickly see the total number of sightings, number of sightings per shape, city, state or country, nor does it offer any ability to get time series data from the date.

To further build out the webpage, building in analysis on the raw data for both the total data set and the filtered data would allow the user to quickly gain insights into the sightings, where and when they happen.  

The first chart that could be added would be to summarize the total number of sightings based on the users choice of one of the qualitative parameters - city, state, country or shape.  

A second chart could be to add in a time series chart that would show the total number of sightings over time, since the data includes a date field.  The time series line graph could have a line for the total data set, and a second line that filters data using the current filtering functionality.

Both additional charts would offer the user useful insights to quickly gain valuable information.  


