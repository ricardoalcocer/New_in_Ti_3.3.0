# New in Alloy 1.4 : Custom query styles

Alloy provides a very easy way to apply UI elements and styling that are specific for different platform and screen sizes.  For example on your TSS file you can add something like:

	"Label[platform=ios formFactor=handheld]": {
    		backgroundColor: "#f00",
	    text: 'iPhone'
	}
	
and your the styling will only apply to **iOS** phones (handheld).  While this is useful, it offers no way of differentiating between versions, so if you wanted to apply one styling to iOS 7 and a different styling to iOS 6, you had to write your logic inside your controller.  ** *Custom Query Styles* ** is a new feature that allows you to go as granular as you'd like.  Here's how it works.

Let's say for example you'd like a way of telling if the phone is running iOS 7 or greater, Android 4 or a pre-Android 4 phone.  You can now create your own, user-defined conditions.  You do this by creating expressions that return a boolean value, and assign them to Alloy.Globals.  For this example, you'd create something like this:

	Alloy.Globals.isIOS7Plus=(OS_IOS && parseInt(Ti.Platform.version.split(".")[0]) >= 7);
	Alloy.Globals.isAndroid4=(OS_ANDROID && parseInt(Ti.Platform.version.split(".")[0]) === 4);

These two lines create two custom properties: **isIOS7Plus** and **isAndroid4**.  This code needs to be added to the file **alloy.js**, a file that is executed before any of your code runs.  Having done this, now you can use these properties from your TSS files, for example:
	
	".container": {
		backgroundColor:"yellow"
	}

	".container[if=Alloy.Globals.isIOS7Plus]": {
		backgroundColor:"red"
	}

	".container[if=Alloy.Globals.isAndroid4]": {
		backgroundColor:"green"
	}

 In this example, if you run your app you'll get a red background on iOS 7 and greater, green on Android 4 and yellow on any other.
 
 ![](http://drops.ricardoalcocer.com/drops/tss_queries-2i6Ec7SGuf.png)
 
 You can also use these properties from your XML file, for example:
 
 
	<Window class="container">
		<Label id="label" onClick="doClick" if="Alloy.Globals.isIOS7Plus">Hello iOS 7</Label>
		<Label id="label" onClick="doClick" if="Alloy.Globals.isAndroid4">Hello Android 4</Label>
		<Label id="label" onClick="doClick" platform="android" if="!Alloy.Globals.isAndroid4">Hello Old Android</Label>
	</Window>

The code above uses the same properties to decide which label to show.

With this new feature you can now create your own custom queries, which you can create depending on your particular use-case, making your code more readable and easy to maintain.  I've uploaded this example to [Github]() you can simply fork it and see how it works.