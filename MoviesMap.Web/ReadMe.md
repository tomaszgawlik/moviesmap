Install:
node.js
npm install bower -g // install git if doesn't work

<b>Layout template</b>
 @html.extend('layout', function(model) {
 
    @html.block("page-css", function(model) {
    })
 
     @html.block("page-main-content", function(model) {
    })
    
    @html.block("page-scripts", function(model) {
    })
 })