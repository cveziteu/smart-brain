import React from 'react';

class Profile extends React.Component {
     
    render() {
        const {userProfile} = this.props;
        return (
            <div className="mw6 center pa3 pa4-ns mv3 bg-white-10 white">
                <div className='tc'>
                    <h1 className="f2 yellow">{userProfile.username}</h1>
                </div>
                <table className='w-100 pt4' cellPadding='1' cellSpacing='2'>
                    <tbody>
                        <tr className='mt3'>
                            <td className='pa3 ba'>
                                <strong>
                                    Email:
                                </strong>
                            </td>
                            <td className='light-yellow ba'>
                                {userProfile.email}
                            </td>
                        </tr>
                        <tr className='mt3'>
                            <td className='pa3 ba'>
                                <strong>
                                Entries:
                                </strong>
                            </td>
                            <td className='light-yellow ba'>
                                {userProfile.entries}
                            </td>
                        </tr>
                        <tr className='mt3'>
                            <td className='pa3 ba'>
                                <strong>
                                    Joined:
                                </strong>
                            </td>
                            <td className='light-yellow ba'>
                                {userProfile.joined}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Profile;