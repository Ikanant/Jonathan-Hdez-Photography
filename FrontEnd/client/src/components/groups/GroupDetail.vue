<template>
    <div v-if="isInEditMode">
        <input v-model="editableGroup.name" placeholder="Enter a name for the group" />
        <button v-on:click="save()">Save</button>
        <button v-on:click="discard()">Discard</button>
        <button v-on:click="remove()">Remove</button>
    </div>
    <div v-else>
        <span> {{group.name}} </span>
        <button v-on:click="edit()">Edit</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import { GroupViewModel } from './models'

@Component({
    components: {
        
    }
})
export default class GroupDetail extends Vue {
    // This will be past as an argument by the GroupList
    // Use strategy: Smart&Dumb components
    // This component will only be presentational and parent component is responsible for the logic
    @Prop() private group!: GroupViewModel; // ! means we don't want it to be null. @Prop means it's a property provided by parent

    private isInEditMode: boolean = false;
    private editableGroup: GroupViewModel | null = null;

    private edit(): void {
        this.isInEditMode = true;
        this.editableGroup = { ...this.group };
    }

    private save(): void {
        // We receive data from the parents through properties
        // AND then we make changes to that data by emiting events so the parent can grab it
        // AND do something about it.
        this.$emit("update", this.editableGroup);
        this.discard();
    }
    private discard(): void {
        this.isInEditMode = false;
        this.editableGroup = { ...this.group };
        
    }
    private remove(): void {
        this.$emit("remove", this.editableGroup!.id);
        this.discard();
    }
}
</script>
