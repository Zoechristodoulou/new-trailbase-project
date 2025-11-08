import { Create, Datagrid, Edit, EditButton, List, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";



export const users_list = () => {
    
    const users_filter = [
        <TextInput source="q" label="Search" alwaysOn />
    ];
   return (
    <List filters={users_filter}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <EditButton/>
        </Datagrid>
    </List>
);
};

export const users_show = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
        </SimpleShowLayout>
    </Show>
)

export const users_edit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
)

export const users_create = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
)