<script lang="js">
	import dayjs from 'dayjs';

	export let form;
	export let data;
</script>

<div class="container">
	{#if form?.message}
		<p>{form.message}</p>
	{/if}

	<form action="/?/add" method="post">
		<input type="text" name="previousURL" placeholder="URL" />
		<input type="text" name="shortenedURL" placeholder="Shortened URL" />
		<input type="submit" value="Add" />
	</form>

	<div class="links">
		{#if data?.urls}
			{#each data.urls as url}
				<div id={url.id}>
					<p><a href={'/' + url.shortenedURL} target="_blank">{url.shortenedURL}</a></p>
					<p>CreatedAt: {dayjs(url.createdAt).toString()}</p>
					<br />
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10vh;

        form {
            display: flex;
            flex-direction: column;

            input {
                margin: 0.2rem;
                padding: 0;

                &[type=text] {
                    background-color: red;
                }
            }
        }

		.links {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;


		}
	}
</style>
