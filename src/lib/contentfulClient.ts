import contentful from 'contentful';
const { createClient } = contentful;
import type { IAlbumFields } from './@types/contentful';

export const client = createClient({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
});

export const getAlbums = async () => {
	const albums = await client.getEntries<IAlbumFields>({
		content_type: 'album'
	});

	albums.items.sort((a, b) => {
		const aDate = new Date(a.fields.date);
		const bDate = new Date(b.fields.date);

		return bDate.getTime() - aDate.getTime();
	});

	console.log(albums.items[1].fields.date);

	return albums;
};

export const getOneAlbum = async (slug: string) => {
	const album = await client.getEntries<IAlbumFields>({
		content_type: 'album',
		'fields.slug': slug
	});

	return album.items[0];
};
