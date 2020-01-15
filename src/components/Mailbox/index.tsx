import React from 'react';
function Mailbox1(props: any) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}


const Mailbox: React.FC = () => {
    return (
        <div>
            <Mailbox1 unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
            <Mailbox1 unreadMessages={[]} />
        </div>
    );
}

export default Mailbox;

