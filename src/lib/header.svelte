<script>
	import DigitSeperator from './digit-seperator.svelte';
	import Digit from './digit.svelte';
	import { GridC, GridH, GridK, GridL, GridO, GridS, GridT } from './utils';

	let size = 3;
</script>

<header class="flex items-center justify-center p-2">
	<div class="p-4">
		<span
			class="logo-text bg-clip-text text-3xl font-bold uppercase text-transparent tracking-widest flex gap-1"
			><Digit {size} digit={GridS} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridH} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridO} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridT} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridC} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridL} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridO} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridC} />
			<DigitSeperator {size} />
			<Digit {size} digit={GridK} />
		</span>
	</div>
</header>

<style>
	.logo-text {
		background: linear-gradient(268.23deg, #7d7d7d 0%, #ffffff 46.87%, #757575 100%);
		text-shadow: 0px 0px 8px rgba(87, 87, 87, 0.41);
		background-clip: text;
	}
</style>
