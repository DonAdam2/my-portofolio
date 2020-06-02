module.exports = {
	port: '3000',
	devServer: 'http://localhost',
	rootDirectory: 'src',
	jsSubDirectory: 'js/',
	cssSubDirectory: 'css/',
	metaInfo: {
		title: 'Adam Morsi Portfolio',
		description: `Hello, I am adam, i am a versatile Software Developer with ${new Date(
			new Date() - new Date('06-01-2017')
		).getFullYear() -
			1970}+ years of experience designing, developing, and managing complex sites and internal frameworks. Specializes in Angular 2+, React and responsive design.`,
		url: 'https://adam-morsi.com/',
		keywords: 'Adam Morsi, portfolio, software developer',
	},
};
