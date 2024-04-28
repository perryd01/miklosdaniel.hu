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
};

export type ProjectLinks = {
	github?: string;
	website?: string;
};
