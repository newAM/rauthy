<script>
    import ExpandContainer from "$lib/ExpandContainer.svelte";
    import Tooltip from "$lib/Tooltip.svelte";
    import TabBar from "$lib/TabBar.svelte";
    import {slide} from 'svelte/transition';
    import UserAttrConfig from "./AttrConfig.svelte";
    import UserAttrDelete from "./AttrDelete.svelte";

    export let attr = {};
    export let onSave;

    let isLoading = false;
    let expandContainer;

    const tabBarItems = [
        'Config',
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
        <Tooltip text="Custom Attribute Name">
            <div class="data">
                {attr.name}
            </div>
        </Tooltip>
    </div>

    <div slot="body">
        <TabBar labels={tabBarItems} bind:selected/>

        {#if selected === 'Config'}
            <div in:slide|global={{ delay: tabBarDly, duration: tabBarDur }} out:slide|global={{ duration: tabBarDur }}>
                <UserAttrConfig bind:attr bind:onSave/>
            </div>

        {:else if selected === 'Delete'}
            <div in:slide|global={{ delay: tabBarDly, duration: tabBarDur }} out:slide|global={{ duration: tabBarDur }}>
                <UserAttrDelete bind:attr onSave={onDelete}/>
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
