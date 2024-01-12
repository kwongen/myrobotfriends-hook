# myrobotfriends

<h2>Initialize the project</h2>
<br/>
npm install
<br/>
<h2>Build</h2>
1. Comment or remove the "homepage" in package.json
2. npm run build
3. Test the build version
	> npm install -g serve  (install serve package in global scope)
	> serve -s build 

<h2>Deploy to github:</h2>
1. npm install --save gh-pages (install gh-pages in project scope)
2. npm run deploy (make sure "homepage" setup correctly)