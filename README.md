# myrobotfriends

<h2>Initialize the project</h2>
<br/>
1. npm install <br/>
<br/>
<h2>Build</h2>
1. Comment or remove the "homepage" in package.json <br/>
2. npm run build <br/>
3. Test the build version <br/>
	> npm install -g serve  (install serve package in global scope) <br/>
	> serve -s build  <br/>
<br/>
<h2>Deploy to github:</h2>
1. npm install --save gh-pages (install gh-pages in project scope)<br/>
2. npm run deploy (make sure "homepage" setup correctly)<br/>