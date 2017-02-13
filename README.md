# Kibana Vector Map Plugin
A Vector Map Plugin for Kibana 5

### Requirements
Kibana 5.2.0

### Installation steps
1. Download Kibana
1. EITHER copy this repo into Kibana's plugin directory and run `npm start` from Kibana's root directory OR copy this repo into Kibana's parent directory and run `npm start` from this plugin's root directory

### Use
1. Select "vectormap" in Kibana's visualize tab
1. Under options, select what region you wish to show.
1. In data, select a field containing two letter country codes.  If you wish to display only US data, you must use a data field containing state abbreviations.  A world map will show the top 5 (or whatever number you enter into "size") countries for yoru metric; a US map will show the top 5 states.  However, if you select a continent, the map will only display the countries on that continent that fit the parameters-- i.e., if only 3 of the top 15 countries for your metric are in Europe, it will only show 3, rather than showing the top 15 European countries.
1. Click the arrow button to see your data display on the map.
1. Save the visualization if you wish to include it in a dashboard.

### Disclosure
This repo is copied from [stormpython/vectormap](https://github.com/stormpython/vectormap) and contains source code minified from the original source code [jvectormap](https://github.com/bjornd/jvectormap), which is licensed under [AGPL](https://github.com/bjornd/jvectormap/blob/master/LICENSE-AGPL).
