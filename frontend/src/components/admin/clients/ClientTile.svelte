<script>
    import ExpandContainer from "$lib/ExpandContainer.svelte";
    import Tooltip from "$lib/Tooltip.svelte";
    import TabBar from "$lib/TabBar.svelte";
    import {slide} from 'svelte/transition';
    import ClientConfig from "./ClientConfig.svelte";
    import ClientSecret from "./ClientSecret.svelte";
    import ClientDelete from "./ClientDelete.svelte";
    import ClientBranding from "./ClientBranding.svelte";

    export let client = {};
    export let onSave;

    let isLoading = false;
    let expandContainer;

    const tabBarItems = [
        'Config',
        'Secret',
        'Branding',
        'Delete',
    ];
    let selected = tabBarItems[0];
    const tabBarDur = 200;
    const tabBarDly = tabBarDur / 2;

    function onDelete() {
        expandContainer = false;
        onSave();
    }

</script>

<ExpandContainer bind:show={expandContainer}>
    <div class="header" slot="header">
        <Tooltip text="Client ID">
            <div class="data font-mono">
                {client.id}
            </div>
        </Tooltip>

        {#if client.name}
            <Tooltip text="Client Name">
                <div class="data">
                    {client.name}
                </div>
            </Tooltip>
        {/if}
    </div>

    <div slot="body">
        <TabBar labels={tabBarItems} bind:selected/>

        {#if selected === 'Config'}
            <div in:slide|global={{ delay: tabBarDly, duration: tabBarDur }} out:slide|global={{ duration: tabBarDur }}>
                <ClientConfig bind:client bind:onSave/>
            </div>

        {:else if selected === 'Secret'}
            <div in:slide|global={{ delay: tabBarDly, duration: tabBarDur }} out:slide|global={{ duration: tabBarDur }}>
                <ClientSecret bind:client/>
            </div>

        {:else if selected === 'Branding'}
            <div in:slide|global={{ delay: tabBarDly, duration: tabBarDur }} out:slide|global={{ duration: tabBarDur }}>
                <ClientBranding bind:client/>
            </div>

        {:else if selected === 'Delete'}
            <div in:slide|global={{ delay: tabBarDly, duration: tabBarDur }} out:slide|global={{ duration: tabBarDur }}>
                <ClientDelete bind:client onSave={onDelete}/>
            </div>

        {/if}
    </div>
</ExpandContainer>

<style>
    .data {
        display: flex;
        align-items: center;
        margin: 3px 10px;
    }

    .header {
        display: flex;
        align-items: center;
    }
</style>
