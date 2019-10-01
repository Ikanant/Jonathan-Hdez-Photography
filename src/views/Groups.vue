<template>
    <GroupList v-bind:groups="groups" v-on:update="onUpdate" v-on:remove="onRemove">
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import GroupList from '@/components/groups/GroupList.vue';
import { GroupViewModel } from '../components/groups/models';

@Component({
    components: {
        GroupList,
    },
})
export default class Groups extends Vue {
    private groups: GroupViewModel[] = [
        {id: 1, name: 'One', rowVersion: 'Version1'},
        {id: 2, name: 'Two', rowVersion: 'Version2'},
        {id: 3, name: 'Three', rowVersion: 'Version3'},
        {id: 4, name: 'Four', rowVersion: 'Version4'},
        {id: 5, name: 'Five', rowVersion: 'Version5'},
    ];

    private onUpdate(group: GroupViewModel): void {
        this.$emit("update", group);
    }
    private onRemove(groupId: number): void {
        this.$emit("remove", groupId);
    }
}
</script>
