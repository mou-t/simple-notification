<script lang="ts">
	import { browser } from '$app/environment';
	import { supportNotification, requestPermission } from '$lib/features/notification';

	const sendNotification = async () => {
		const n = new Notification('テスト通知', {
			body: 'テスト通知本文'
		});

		await new Promise((resolve) => setTimeout(resolve, 5000));
		n.close();
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if browser}
	{#if supportNotification()}
		<button on:click={() => requestPermission()}>通知を許可</button>
	{:else}
		<p>通知機能がサポートされていません</p>
	{/if}
{/if}

<button on:click={() => sendNotification()}>通知を送信</button>
