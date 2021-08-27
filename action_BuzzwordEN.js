/*
<action jsname="action_BuzzwordEN" description="Buzzword en generator">
	<property name="BuzzpanelEN" type="scenenode" />
</action>
*/


action_BuzzwordEN = function() {
// empty
// action_BuzzwordEN: make a sentence.
//
// code sourced from: <title>Corporate B.S. Generator</title>
// <!-- saved from url=(0042)https://www.atrixnet.com/bs-generator.html -->
//
//	
};


action_BuzzwordEN.prototype.execute = function() {

	function randomarray(a) {
		var i;
		for (i=a.length;i--;) {
			var j = Math.floor((i+1)*Math.random());
			var temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		}
		return a;
	}

	var adverbs = new Array ( 'appropriately', 'assertively', 'authoritatively', 'collaboratively', 'continually', 'conveniently',
							 'credibly', 'distinctively', 'energistically', 'enthusiastically', 'globally', 'holisticly', 'objectively',
							 'phosfluorescently', 'proactively', 'professionally', 'seamlessly', 'synergistically', 'uniquely', 'fungibly' );

	var verbs = new Array ( 'actualize', 'administrate', 'aggregate', 'architect', 'benchmark', 'drive', 'embrace', 'e-enable', 'empower',
						   'enable', 'engage', 'grow', 'harness', 'impact', 'implement', 'incentivize', 'incubate', 'leverage existing',
						   'leverage other\'s', 'maintain', 'matrix', 'scale', 'seize', 'simplify', 'strategize', 'streamline', 'supply',
							'transform', 'transition', 'underwhelm', 'unleash', 'utilize', 'incept', 'onboard' );

	var adjectives = new Array ( '24/7', '24/365', 'accurate', 'adaptive', 'alternative', 'backward-compatible', 'best-of-breed',
							'bleeding-edge', 'client-based', 'client-centered', 'client-centric', 'error-free', 'functionalized',
							'future-proof', 'global', 'go forward', 'pandemic', 'parallel', 'performance based', 'plug-and-play',
							'synergistic', 'tactical', 'team building', 'team driven', 'visionary', 'web-enabled', 'wireless',
							'world-class', 'worldwide', 'on-demand', 'cloud-based', 'cloud-centric', 'cloudified', 'agile' );

var nouns = new Array ( 'action items', 'alignments', 'applications', 'best practices', 'catalysts for change', 'channels', 'mindshare',
					   'models', 'networks', 'niches', 'paradigms', 'partnerships', 'platforms', 'portals', 'quality vectors', 'relationships',
					   'resources', 'sources', 'strategic theme areas', 'supply chains', 'testing procedures', 'total linkage', 'users', 'value',
					   'clouds', 'nosql', 'storage', 'virtualization' );

	adjectives = randomarray(adjectives);
	nouns = randomarray(nouns);
	adverbs = randomarray(adverbs);
	verbs = randomarray(verbs);

	var x;
	var statement = adverbs[adverbs.length-1];
	adverbs.length -= 1;
	statement = statement + " " + verbs[verbs.length-1];
	verbs.length -= 1;
	statement = statement + " " + adjectives[adjectives.length-1];
	adjectives.length -= 1;
	statement = statement + " " + nouns[nouns.length-1];
	nouns.length -= 1;
	ccbSetSceneNodeProperty(this.BuzzpanelEN, "Draw Text", true);
	ccbSetSceneNodeProperty(this.BuzzpanelEN, "TextColor", 0,0,0);
	ccbSetSceneNodeProperty(this.BuzzpanelEN, "Text", statement);
}
//	end
