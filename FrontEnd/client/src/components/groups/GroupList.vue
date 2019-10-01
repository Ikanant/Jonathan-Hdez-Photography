<template>
    <ul id="sample1">
        <li v-for="group in groups" v-bind:key="group.id">
            <GroupDetail v-bind:group="group" v-on:update="onUpdate" v-on:remove="onRemove"/>
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GroupDetail from './GroupDetail.vue'
import { GroupViewModel } from './models';

@Component({
    components: {
        GroupDetail
    }
})
export default class GroupList extends Vue {
    @Prop() private groups!: GroupViewModel;

    private onUpdate(group: GroupViewModel): void {
        this.$emit("update", group);
    }
    private onRemove(groupId: number): void {
        this.$emit("remove", groupId);
    }
}
</script>
