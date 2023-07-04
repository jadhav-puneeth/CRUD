import React, {useState} from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUser';
import EditUserForm from './forms/EditUser';
import './App.css';
import Viewuser from './forms/ViewUser';

const App = () => {
    const usersData = [
        {id: 1, name: 'Tania', username: 'floppydiskette'},
        {id: 2, name: 'Craig', username: 'siliconeidolon'},
        {id: 3, name: 'Ben', username: 'benisphere'},
    ];
    const initialFormState = {id: null, name: '', username: ''};
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);

    const editRow = user => {
        setdisplay('edit');
        setCurrentUser({id: user.id, name: user.name, username: user.username})
    };
    const [viewuser,setviewuser]=useState(null);
    const viewrow= user =>{
        setviewuser(user);
        setdisplay('viewuser');
    }

    const addUser = user => {
        setdisplay('add');
        user.id = users.length + 1;
        setUsers([...users, user])
        setdisplay('view')
    };

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    };

    const updateUser = (id, updatedUser) => {
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
        setdisplay('view');
    }
    const [display ,setdisplay]= useState('view');
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
            { (display==='edit') &&
                <div className="flex-large">
                    <div>
                        <h2>Edit user</h2>
                        <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </div>
                </div> 
            }
            {
                (display=== 'add') && <div className="flex-large">
                    <div>
                        <h2>Add user</h2>
                        <AddUserForm addUser={addUser}/>
                    </div>
                </div> 
            }
            {
                (display==='view') && 
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} editRow={editRow} viewrow={viewrow} deleteUser={deleteUser}/>
                    <button onClick={()=> {setdisplay('add')}}>Add User</button>
                </div>
            }
            {
                (display==='viewuser') && 
                <div className="flex-large">
                    <h2>User Details</h2>
                    <Viewuser  setdisplay={setdisplay} user={viewuser} />
                </div>
            }
                
            </div>
            
        </div>
    );
}



export default App;
