module.exports = {
    mount: {
        "public": "/", // This tells snowpack to use the public folder path as root of the appilcation and looks for the index.html file in it
        "src": "/dist" // This tells snowpack to use the src folder path as virtual location for the js, HTML files it will generate
    } 
}