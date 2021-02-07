# Bellybutton-Biodiversity-with-Plotly

## Dsta Visualization in Javascript
    Communicating the results from a wor of data analysis is a major part of the data analysts job. Data Visualization is one way in which data analysts tell story through data.
It is iften said that a picture is worth a thousand words; and a simple chart can tell the story of a million rows. As has been said, Javascript can be a powerful tool in a skilled Data Analyst's hands. 
While Javascript developers have yet to catch up with Python in terms of the breadth of their data functions, Javascript's role as a front-end language offers Data Analysts unique advantges tha backend languages such as Python cannot offer without the use of Flask and routing tools. 
One such advantage is interactivity in the sense that Javascript allows the data analysts to directly prsent their work to the public by placing many tools and decisions at the user's fingertips. 

## Plotly
In Python, the Matplotlib library and its derivatives provide the basic tools necessary for data visualization. In Javascript, this function
is found in the Plotly library. Both libraries provide the necessary functions to create basic plots in their respective languages. Plotly provides fnctions that pass data into charts that can be customized. A Plotly function has three arguments: a targeted html tag, a data argument, and a layout argument. 
the html tag argument tells plotly where in a webpage a plot must be rendered; the data argument derives from traces that define the axes of the plot; and the data that each axis represents; and the layout argument contains various customizations such as the type of plot to be rendered, the plot title, axis labels, and margins. 
Plotly takes these arguments and renders the appropriate plot/s as output/s. 

## Bellybutton Biodiversity Dataset analysis
The componentsof this project are straightforward: there is a JSON file, a Javascript application file, and an .html file.  The data is contained in a JSON (Javascript Object Notation) File that stores information about objects in a standardized organized format.
The .html file contains the visalization dashboard; and the Javascript application coordinates the flow of data between the three files.  
In order to visualize the data from a particular sample, the sample's "name" is first specfed by the user on the user-side. Javascript is then used to pass this name and filter the data to retrieve the sample with the targeted name. 
Once the sample is retrieved, data from the sample is stored into variables; These variables are then used to create traces that Javascript can pass onto Plotly functions to create the desired visualizations n the dashboard page. This whole process, 
from the user identifying the sample for visualization to the dashboard creating the visualizations, is handled by a Javascript application juggling a JSON data file, a webpage, and multiple Javascript libraries to create a visualization dashboard for biostatistical data that responds to user input and sets up an ETL 
pipeline from a JSON file to a webpage




