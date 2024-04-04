<script lang="ts">
	import Grid from '$lib/components/grid';

	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Grid.Layout columns={5} gap={6}>
	<Grid.HeroElement col={2} title={'unaswrappergo'} />
	<Grid.HeroElement
		image={'https://images.unsplash.com/photo-1710775338511-3766c13110b7?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
		col={3}
		title={'Digital Signage for Simonyi Conference'}
	/>

	<Grid.HeroElement
		image={'https://images.unsplash.com/photo-1711735346428-0ceae7ddb5ae?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
		col={3}
		row={2}
		title={'Simonyi Conference 2023'}
	/>

	<Grid.HeroElement
		image={'https://images.unsplash.com/photo-1712041503216-c466cee9c845?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
		col={2}
		row={1}
		title={'Simonyi Conference 2024'}
	/>
	<Grid.HeroElement col={2} row={1} title={'miklosdaniel.hu'} />

	<Grid.HeroElement col={5} row={2} title={'logotar'} />
</Grid.Layout>
