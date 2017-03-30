import React from 'react';
import Link from 'next/link';
import Dropdown, { DropdownItem, DropdownDivider } from '../Dropdown';

const propTypes = {
    user: React.PropTypes.object
}

export default (props) => {
    const trigger = (<div>{props.user.name}</div>);

    return (
        <div className="Dropdown-User">
            <style jsx>{`
                .Dropdown-User {
                    position: absolute;
                    right: 30px;
                    top: 25px;
                }
            `}</style>
            <Dropdown trigger={trigger}>
                <DropdownItem href="/dashboard">Dashboard</DropdownItem>
                <DropdownItem href="/account/settings">Account Settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">Logout</DropdownItem>
            </Dropdown>
        </div>
    )
};