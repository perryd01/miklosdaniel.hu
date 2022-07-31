import { Asset, Entry } from 'contentful';

export interface IAlbumFields {
	title: string;
	description?: string;
	photos: Asset[];
	date: string;
	slug: string;
	preview: Asset;
}

export interface IAlbum extends Entry<IAlbumFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: 'album';
				linkType: 'ContentType';
				type: 'Link';
			};
		};
	};
}
