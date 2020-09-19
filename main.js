var tl = gsap.timeline();

tl.to('.title-loading h1', 0.7, {
	transform: 'translateY(0)',
	ease: Power1.easeInOut,
});
tl.to('.bg', 0.5, {
	y: '-100%',
	stagger: 0.2,
	ease: Power1.easeInOut,
});
tl.to(
	'.title-loading h1',
	0.4,
	{
		transform: 'translateY(-100px)',
		opacity: 0,
		ease: Power1.easeInOut,
	},
	'-=0.3'
);
tl.to('.loading', 0, {
	display: 'none',
});
