function warnLink(anchorTag) {
	return confirm(`Heads up!\nYou are about to go to a different website. The owner of this website is not responsible for the content of this other website.\n\nContinuing will redirect you to: ${anchorTag.href}`);
}