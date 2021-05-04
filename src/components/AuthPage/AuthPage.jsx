import React from 'react';
// import { useSelector} from "react-redux";

const AuthPage = ({users}) => {
    //  const { users } = useSelector(({ common }) => common );
    
    console.log(users)
    // const someAlbum = Object.values(data).filter((item) => item.albumId);
    // const someUser = Object.values(users).filter((profile) => profile.id);

    // console.log(someAlbum);
    // console.log(someUser);

    return (
        <div>
            <div>
                <div>Login:</div>
                <div>Name:{users}</div>
                <div>email:</div>
                <div>phone:</div>
                <div>site:</div>
                <div>adress:</div>
                <div></div>
                <div>Company:</div>
            </div>
        </div>
    );

};

export default AuthPage;