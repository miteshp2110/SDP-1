import './Profile.css'

const Profile=()=>{
    const logout=()=>{
        localStorage.setItem('isloggedIn','false');
        localStorage.setItem('username',null); 
    }

    return(

        <div>
            Hello , {localStorage.getItem('username')}
        
        
        <button onClick={logout}>logout</button>
        </div>
        
    )

}

export default Profile;