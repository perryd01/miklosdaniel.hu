export type Project = {
	title: string;
	slug: string;
	date: string;
	description: string;
	heroTitle: string;

	image?: string;

	order: number;
	col?: number;
	row?: number;

	links?: ProjectLinks;
	published?: boolean;

	readingTime: ReadingTime;

	categories?: string[];
};

export type ProjectLinks = {
	github?: string;
	website?: string;
};

export type ReadingTime = {
	text: string;
	minutes: number;
	words: number;
	time: number;
};
