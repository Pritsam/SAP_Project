Luigi App

- App consists of 2 parts 
	§ Luigi core app using React 
	§ Micro frontends - home, products, productDetails

- Add Luigi configuration to index.html - entry point of the application.

- Create a micro frontend template (sampleapp.html) for React to create the React micro-frontends.
- Configuring webpack (adding dependencies)
- Creating the navigation Node (Home) in luigi-config.js. Using parameters such as :
	§ pathSegment -> text segment added to the URL
	§ Label -> the name of node displayed in the navigation
	§ viewURL -> URL for the micro-frontend
- Configure Router for Home page - making changes in index.js adding routing for the views.
- Next added a new node in Luigi-config.js for the products page and a new products.js file in the views folder
Added a new node for the product details, with dynamic parameter (id)