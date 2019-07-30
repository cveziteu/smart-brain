import React from 'react';
import './profile.css';
class Profile extends React.Component {
     
    render() {
        const {userProfile} = this.props;
        const joinedDate = Date(userProfile.joined.toString());
        return (
            <div className="mw7 center pa3 pa4-ns mv3 white">
                <div className='tc'>
                    <h1 className="fw4"><span className='light-yellow'>{userProfile.username}</span>'s profile</h1>
                </div>
                <table className='w-100 pt4' cellPadding='5' cellSpacing='0'>
                    <tbody>
                        <tr className='mt3 trstyle'>
                            <td className='pa3'>
                                <strong>
                                    Email:
                                </strong>
                            </td>
                            <td className='light-yellow'>
                                {userProfile.email}
                            </td>
                        </tr>
                        <tr className='mt3'>
                            <td className='pa3'>
                                <strong>
                                Entries:
                                </strong>
                            </td>
                            <td className='light-yellow'>
                                {userProfile.entries}
                            </td>
                        </tr>
                        <tr className='mt3'>
                            <td className='pa3'>
                                <strong>
                                    Joined:
                                </strong>
                            </td>
                            <td className='light-yellow'>
                                {joinedDate}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Profile;