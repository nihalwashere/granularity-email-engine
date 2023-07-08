# Overview

This library is for creating reusable, testable components and email templates using React.

# Develop

## Setup

- Install root dependencies `npm install`
- Start storybook `npm run storybook` or `npm start`

### Storybook

Check this page to read more about **storybook**:
[https://storybook.js.org/](https://storybook.js.org/)

### Folder structure
- `.storybook`: Storybook configuration.
- `src`
	- `_snapshots_`: Snapshot files for test.	
	- `emailComponents`: Rendered HTML email files.
	- `emailStrings`: String files of rendered HTML emails from `emailComponents` folder. This is the final result that will be returned.
	- `translations`
		- `interpolated`: Strings with proper variables. All the `%s` symbols in the `original` folder are replaced with the proper variables that are used for localization.
		- `original`: Original string files

### Dependencies

 - [react-html-email](https://github.com/chromakode/react-html-email)
 - [react-intl](https://github.com/yahoo/react-intl)
 - [check-prop-types](https://www.npmjs.com/package/check-prop-types)

&nbsp;

## Adding a new email

 1. Create a folder and create a new index.js and stories.js file in `EmailComponents` folder. If there's any components already created in `components` folder, use them. Or create your own component. Main style guide and variables are in the `/styleGuide.js` file.
 2. Once you created email, import it from `EmailStrings` folder.
 3. Create an test file in the same folder.
 4. Add an export function to `src/index.js` file.
 5. `npm test` to check if it's all good.

Note: Kindly refrain from using CSS3 in the project, only some of the email client support CSS3.Take a look at [email support guide](https://www.campaignmonitor.com/css/) before implementing css.

&nbsp;

## Localization

- Use `<FormattedMessage>` component and pass a string ID, default message, and the values should be dynamic.

### Examples
```javascript
import { reactIntlInitialize } from '../../translations';
import { FormattedMessage } from 'react-intl';

<FormattedMessage
	id="learn.more.about.badges"
	defaultMessage="Learn more about badges"
	values={{ firstName, hostName }}
/>
```
&nbsp;

## Test
- Functional test: `npm test`
- Rendering test: Currently, we don't have an automatic process to test email rendering by each email client and platform.
	1. `npm run storybook` or `npm start` to start storybook.
	2. Open the browser and go to `localhost:9001` or any other localhost that runs storybook.
	3. Copy the rendered HTML email string from the story view, save it in a file with .html extension and open it in a browser.

&nbsp;

## Deploy storybook to environments
 1. run `npm run everest | develop | sandbox | beta` to deploy the storybook to respective environments
 and can be accessed by below mentioned links as per env

 2. To deploy to stage , run npm run major | minor | bump (patch), this will upgrade the version as per semvar and auto deploy to stage environment

 3. To deploy to production , run `npm run prod` ,this will make sure that the storybook is deployed as well as the version gets published to npm registry.

- Develop- email-engine-develop.getgranularity.com
- Prod- email-engine.getgranularity.com


## Publish

 1. `npm run major | minor | patch` to update version and auto deploy storybook to stage environment.

 2. Run `npm run prod` and then the CircleCI will kindly test, build, and publish the package for you and automatically deploy storybook out to production environment.

 3. If you didn't receive any error message, then hooray! Skull your beer! 🍺

&nbsp;
&nbsp;

# Usage

 1. Install npm package via npm: `npm install @getgranularity/email-engine`

 2. Import an email rendering function `import { stringOfFormResponseReceived } from @getgranularity/email-engine`

 3. Send appropriate data when you execute a function. Props are mandatory, Options are optional.
 
 4. If the data/props is appropriate, you'll get a string of rendered email as return. Otherwise, you're get a ruthless error as return.

## Examples

```javascript
import { stringOfFormResponseReceived } from @getgranularity/email-engine;

const props = {
	data:  [
		{
			id: 1,
			number: 1,
			type: 'text',
			questionValue: 'What is your name?',
			answer: 'Nihal',
		},
		{
			id: 2,
			number: 2,
			type: 'text',
			questionValue: 'Where do you work at?',
			answer: 'Granularity',
		},
		{
			id: 3,
			number: 3,
			type: 'text',
			questionValue: 'What is your work email?',
			answer: 'nihal@getgranularity.com',
		},
	]
};

const options = {
	language: 'en',	
};

stringOfFormResponseReceived(props, options);
```
