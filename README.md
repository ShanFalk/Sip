<p align="center">
  Sip!
  <img src="https://user-images.githubusercontent.com/99137811/172063240-0ad67cf9-da73-439a-886a-333b6c869e8f.png" alt="teapot" width="50"/>
</p>

<p align="center">
  A portfolio clone of <a href="https://www.yelp.com/">Yelp.com</a>
</p>

<h2>About The Project</h2>
<p>Yelp is a popular website for finding reviews for businesses in the area. 
  This project posed an interesting challenge for how to implement a search function to 
find desired businesses. I did take some creative liberties by changing the theme from a database of any kind of business
to only businesses that offer afternoon high tea service. I hope you have fun with it!</p>

<h3>Built with</h3>
<ul>
  <li>PostgreSQL</li>
  <li>Sequelize</li>
  <li>Express</li>
  <li>React</li>
  <li>Redux</li>
</ul>

<h2>Usage</h2>
<p>Interested users can signup and login in, or login as a Demo user to try out the website.</p>
<p>Once logged in, the user is directed to the home page where they now have the option to add a business to the website.</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089212-617b8d6b-b167-40fd-830f-f19fc52e48bb.gif" width=800>
</p>


<h3>Adding a Business</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089254-1420dcad-e83a-4d00-8613-ab5b4884f06d.gif" width=800>
</p>


<h3>Getting a Business and Business Details</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089282-2a499dc6-76c5-4f22-a16c-9be8ac559105.gif" width=800>
</p>


<h3>Editing a Business</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089329-7908577b-160f-4a5f-9778-1d25687aa1b8.gif" width=800>
</p>


<h3>Adding a Review</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089347-da11ef88-f530-4f70-a328-c9604eddd251.gif" width=800>
</p>


<h3>Deleting a Review</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089368-f96025ea-d658-49a9-be12-8e6f85c857d8.gif" width=800>
</p>


<h3>Deleting a Business</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/99137811/172089397-8997ba18-3204-4c34-b3ba-7802b70b5c73.gif" width=800>
</p>


<h2>Interesting Issues</h2>
<p>
  Issue: After entering a search term and rendering a list of businesses, if I wanted to search for something different, the original search results would render in addition to the new search results. 
  
  Solution: In my reducer I was spreading state to create a new state object, but I was also spreading state.businesses. I removed the spreading of state.businesses and only included the new data in the new state. 
  
Issue: I wanted to render a number of star icons equal to the rating a review gave a business. I needed to turn the rating (an integer) into mappable data. I created a new instance of an array with a default length equal to the rating and tried to map over it that way creating a star for each space in the array. However, this caused an error as the array was empty even though it technically had a length. 
  
Solution: I spread the new instance of the array into an array which created 'undefined' at each index. This made the array mappable and I was able to turn my integer ratings into star ratings.
</p>

<h2>Features to Implement Next</h2>
<p>When a user creates a new business, the address that is entered has its longitudinal and latitudinal coordinates calculated on the backend. With this data, I would like to implement Google Maps and allow a user to get directions from a current location.</p>
  
<h2>Contact</h2>
<h3><a href="http://linkedin.com/in/shannon-falk-16097a83">LinkedIn</a></h3>
<h3><a href="https://aa-sip.herokuapp.com/">Live Site</a></h3>
<h3><a href="https://github.com/ShanFalk/wk15-solo-project-sip">Project Repo</a></h3>





