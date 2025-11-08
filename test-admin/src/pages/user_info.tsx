import { Create, Datagrid, Edit, EditButton, List, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const users_list = () => {
    
    const users_filter = [
        <TextInput source="q" label="Search" alwaysOn />
    ];
   return (
    <List filters={users_filter}>
        <Datagrid>
            <TextField source="Username" />
            <TextField source="UserEmail" />
            <TextField source="UserPWord" />
            <EditButton/>
        </Datagrid>
    </List>
);
};

export const users_show = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Username" />
            <TextField source="UserEmail" />
            <TextField source="UserPWord" />
        </SimpleShowLayout>
    </Show>
)

export const users_edit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Username"/>
            <TextInput source="UserEmail" />
            <TextInput source="UserPWord" />
        </SimpleForm>
    </Edit>
)

export const users_create = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Username"/>
            <TextInput source="UserEmail" />
            <TextInput source="UserPWord" />
        </SimpleForm>
    </Create>
)