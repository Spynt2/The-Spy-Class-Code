/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Spy's Path"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(13); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"spy", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"aspath", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /aspath/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Path of The Assassins", //required; the name of the subclass

		source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Spy (Path of Assassins)", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		abilitySave : 4, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature5" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Quick Handed",
				source : ["HB", 0],
				minlevel : 5,
				description : "\n   " + "Once you start this Path at fifth level, you may now use your knife to perform a Backstab attack as a bonus action.",
				removeeval : "RemoveAction(\"action\", \"Backstab\"); AddAction(\"bonus action\", \"Backstab\", \"Spy\")", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
			},
			"subclassfeature7" : {
				name : "Shadowed Figure",
				source : ["HB", 0],
				minlevel : 9,
				description : "\n   " + "I gain advantage + my proficiency bonus on stealth checks while under cloak.",
				
			},
			"subclassfeature10" : {
				name : "Cloak & Dagger",
				source : ["HB", 0],
				minlevel : 13,
				description : "\n   " + "Although your cloak is reduced to only 2 round instead of three, the cloak meter regenerates while under cloak while stationary. It regenerates 2x slower under cloak.",
			},
			"subclassfeature15" : {
				name : "Master Stab",
				source : ["HB", 0],
				minlevel : 17,
				description : "\n   " + "When ever you attack with a Backstab, it is considered magical and will deal an extra 2d10 piercing damage on a successful hit.",
			},
		}
	}
);

AddSubClass( // this is the function you will be calling to add the variant

	"spy", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"stpath", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /stpath/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Path of Style", //required; the name of the subclass

		source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Spy (Path of Style)", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		abilitySave : 4, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Show-Off, Show-Stopper",
				source : ["HB", 0],
				minlevel : 5,
				description : "\n   " + "You gain proficiency with Performance skill checks.",
				skill : ["performance"],
		},
			"subclassfeature7" : {
				name : "Trickstab",
				source : ["HB", 0],
				minlevel : 9,
				description : "\n   " + "You gain the ability to utilize the Style spy's signature trait: Trickstabs. These Backstabs are special ways to get behind your opponent using strafing and misdirection. Each one of these maneuvers requires the user to beat an Acrobatics check of DC equal to 10 + you proficiency bonus.",
				"stairstab": {
				name : "Stairstab",
				source : ["HB", 0],
				description : "n\   " + "On any slope while the opponent is chasing you, you can roll the Trickstab check. On a successful save, you jump and allow your opponent to pass under you and in front of you.",
				},
				"cornerstab" : {
				name : "Corner Stab",
				source : ["HB", 0],
				description : "n\   " + "on any corner going in, you can roll the Trickstab check. On a successful dsave, you pretend to turn the corner and your opponent follows you. When they do this, you move around them to their back.",
				},
				
			},
			"subclassfeature10" : {
				name : "Conniver's Kunai",
				source : ["HB", 0],
				minlevel : 13,
				description : "\n   " + "You lose exactly half of your maximum hit points (and cannot be regained) and gain advantage in Dex saves. When ever you perform a successful Backstab or Trickstab, you gain hit points equal to the amount of damage dealt. Any damage dealt that cannot be converted into hit points is instead converted into temporary hit points which will fade after 3 rounds ",
				skill : ["dexterity"],
				die : 5, 
			},
			"subclassfeature15" : {
				name : "Side Stab",
				source : ["HB", 0],
				minlevel : 17,
				description : "\n   " + "Whenever you attack with a Backstab, it is considered magical. At this level, the Backstab is no longer exclusively the back of a foe. A stab attack will now be considered a Backstab if it occours in the back and the corners of a foe.",
				weapons : [false, false, ["butterfly knife", "dagger"]],
			},
		
		}
	}
);

AddSubClass( // this is the function you will be calling to add the variant

	"spy", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"dcpath", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /dcpath/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Path of The Deceitor", //required; the name of the subclass

		source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Spy (Path of the Deceitor)", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		abilitySave : 4, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature5" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Disguise Kit ",
				source : ["HB", 0],
				minlevel : 5,
				description : "\n   " + "You gain the ability to use the disguise kit (provided that you have one) in a pinch. You may change disguises if you already have one with a bonus action.",
				action : ["action", ""],
			},
			"subclassfeature7" : {
				name : "Anything you can do, I can do better",
				source : ["HB", 0],
				minlevel : 9,
				description : "\n   " + "you envoke proficiency in Performance and Deception while disguised with the Disguise Kit.",
				skill : ["performance", "deception"],
				
			},
			"subclassfeature10" : {
				name : "Enforcer",
				source : ["HB", 0],
				minlevel : 13,
				description : "\n   " + " Your revolver is now linked magically to your Disguise Kit. Whenever you shoot a creature while disguised, you deal an extra 1d10 damage.",
			},
			"subclassfeature15" : {
				name : "Surprise!",
				source : ["HB", 0],
				minlevel : 17,
				description : "\n   " + "All Backstabs made from disguising are considered magical and deal necrotic damage equal to half of your current Spy level (rounded up).",
			},
		}
	}
);

AddSubClass( // this is the function you will be calling to add the variant

	"spy", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"gspath", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /gspath/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Path of The Gunspy", //required; the name of the subclass

		source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Spy (Path of The Gunspy)", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		abilitySave : 4, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature5" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Good? Bad? I'm the guy with the gun",
				source : ["HB", 0],
				minlevel : 5,
				description : "\n   " + "You choose a gun that fits your play style. You are considered proficient with the gun you choose. You are unable to invoke butterfly effect to change your gun until your 19th level.",
				choices : ["Ambassador","L'etranger", "Diamondback"],
				"Ambassador" : {
					name : "Ambassador Headshot",
					source : ["HB", 0],
					description : "n\   " + "3 shots before reload. You can spend an Action to aim down a headshot, which will be a critical hit.",
					action : ["action", ""], 
				},
				
				"L'etranger" : {
					name : "The Stranger",
					source : ["HB", 0],
					description : "n\   " + "6 shots before reload. 'Bumping' against Invisibility will no longer reveal the Spy.",
				},
				
				"Diamondback" : {
					name : "The Diamondback",
					source : ["HB", 0],
					description : "n\   " + "4 shots before reload. Backstabbing an enemy will make your next shot ignore damage reductions.",
				},
			},	
		
			"subclassfeature7" : {
				name : "Catchphrase",
				source : ["HB", 0],
				minlevel : 9,
				description : "\n   " + "you choose a catch phrase to utter before shooting. Once said, your gun becomes infused with magic. Whenever you shoot, it deals an extra 1d8 necrotic damage.",
				
			},
			"subclassfeature10" : {
				name : "Extra Attack",
				source : ["HB", 0],
				minlevel : 13,
				description : "\n   " + "you gain the Extra Attack feature.",
				attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
				
			},
			"subclassfeature15" : {
				name : "Boom. Headshot",
				source : ["HB", 0],
				minlevel : 17,
				description : "\n   " + "you cannot roll below a 10 with your gun when rolling to hit.",
				weapons : [false, false, ["revolver", "ambassador", "diamondback", "l'etranger", "diamondback", "enforcer"]],
			},
		
		}
	}
);