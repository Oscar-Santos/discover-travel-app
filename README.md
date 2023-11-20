![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# DISCOVER TRAVEL APP

## Overview 🟣

Discover your next adventure with the Discover Travel App. This convenient web application utilizes RapidAPI to seamlessly access information on restaurants, hotels, and attractions based on your location, powered by the Google Maps Javascript API for geolocation. Simply type in any location in the search bar to find recommendations around the world.

With just a few clicks, you can get exciting recommendations on places to eat, stay, and visit near you. The app was built using secure practices - API keys are stored in environment variables, and the site was deployed on Netlify for a smooth user experience.

Whether you're a habitual traveler or planning your next weekend getaway, Discover Travel App makes it easy to uncover hidden gems and create a custom itinerary. So sit back, click around, and let Discover Travel App be your guide to exploration and new experiences.

![Screen Shot 2023-11-20 at 7 48 32 AM](https://github.com/Oscar-Santos/discover-travel-app/assets/83252572/7fee3fc0-a940-423e-b1b1-e024892a3cf7)

![Screen Shot 2023-11-20 at 7 49 42 AM](https://github.com/Oscar-Santos/discover-travel-app/assets/83252572/ca2837d5-c6fe-441b-b533-96ae04165498)

![Screen Shot 2023-11-20 at 7 50 17 AM](https://github.com/Oscar-Santos/discover-travel-app/assets/83252572/29f005c4-69a0-4b09-a407-c6e5ef0a50c2)



## Languages🟣
<p>
  <img src="https://img.shields.io/badge/JavaScript-ES2021-yellow?logo=javascript" />
  </br>
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  </br>
  <img src="https://img.shields.io/badge/HTML-<VERSION>-<COLOR>?logo=html5" />
  </br>
</p>

## Tools🟣
<p>
  <img src="https://img.shields.io/badge/Git-F05032.svg?&style=flaste&logo=git&logoColor=white" />
  </br>
  <img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />
  </br>
</p>

## Rapid API Endpoints🟣
1)   #### Request
`GET locations/v2/auto-complete`

2)    #### Response

```json
{
buCategory:"ATTRACTIONS"
text:"eiffel tower tours and tickets paris"
parentGeoDetails:
__typename:"LocationSelection_LocationInformationV2"
names:
__typename:"LocationSelection_LocationNames"
longOnlyHierarchyTypeaheadV2:"Ile-de-France, France"
route:
__typename:"Routing_Route"
fragment:null
page:"AttractionProductsFusion"
url:"/Attraction_Products-g187147-d188151-Eiffel_Tower-Paris_Ile_de_France.html"
nonCanonicalUrl:"/Attraction_Products-g187147-d188151-Eiffel_Tower-Paris_Ile_de_France.html?contentType=attraction_product&webVariant=AttractionProductsFusion"
typedParams:
__typename:"Routing_AttractionProductsFusionParameters"
scopeType:"GEO"
4:
__typename:"Typeahead_QuerySuggestionItem"
documentId:"d5b515c99b215bae8a302a8c95a5606a0"
suggestionType:"template"
buCategory:"ATTRACTIONS"
text:"eiffel tower viewing deck tours and tickets las vegas"
parentGeoDetails:
__typename:"LocationSelection_LocationInformationV2"
names:
__typename:"LocationSelection_LocationNames"
longOnlyHierarchyTypeaheadV2:"Nevada, United States"
route:
__typename:"Routing_Route"
fragment:null
page:"AttractionProductsFusion"
url:"/Attraction_Products-g45963-d127002-Eiffel_Tower_Viewing_Deck-Las_Vegas_Nevada.html"
nonCanonicalUrl:"/Attraction_Products-g45963-d127002-Eiffel_Tower_Viewing_Deck-Las_Vegas_Nevada.html?contentType=attraction_product&webVariant=AttractionProductsFusion"
typedParams:
__typename:"Routing_AttractionProductsFusionParameters"
scopeType:"GEO"
5:
__typename:"Typeahead_RescueResultItem"
documentId:"eiffel tower"
text:"eiffel tower"
}

```

## Google Maps Javascript API Endpoints🟣
1)   #### Request
`GET https://maps.googleapis.com/maps/api/place/autocomplete/json?input=eiffeltower`

2)    #### Response

```json
{
  "predictions": [
    {
      "place_id": "ChIJE9on3F3u5kcRYJSMaMOCCwQ", 
      "structured_formatting": {
        "main_text": "Eiffel Tower",
        "secondary_text": "Paris, France"
      }
    },
    {  
      "place_id": "ChIJQTETgjHz3IARdNT_qUDngVg",
      "structured_formatting": {
        "main_text": "Eiffel Tower Viewing Deck",
        "secondary_text": "Las Vegas, NV, USA"
      }
    }
  ],
  "status": "OK"
}

```

## Netlify Deployment Link🟣

[Netlify Link](https://discover-travel-app.netlify.app/)

## App Link🟣

[React App Link](https://discover-travel-app.netlify.app/)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
