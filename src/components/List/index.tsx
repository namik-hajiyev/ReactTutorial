import React from 'react';

function NumberList1() {
    var numbers = [11, 22, 3, 56, 88];
    var numberItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
    return (<ul>
        {numberItems}
    </ul>)
}

function NumberList2(props: { numbers: number[] }) {
    var numbers = props.numbers;
    var numberItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
    return <ul>{numberItems}</ul>
}

function NumberList3(props: { numbers: number[] }) {
    var numbers = props.numbers;
    //A good rule of thumb is that elements inside the map() call need keys
    var numberItems = numbers.map(number => <NumberItem value={number} key={number.toString()} />)
    return <ul>{numberItems}</ul>
}

function NumberItem(props: { value: number }) {
    //no need to specify the key here
    return <li>{props.value}</li>

}

function NumberList4(props: { numbers: number[] }) {
    return (
        <ul>
            {
                props.numbers.map(number => <li key={number.toString()}>number</li>)
            }
        </ul>
    );
}

function Blogs(props: { posts: { id: number, title: string, content: string }[] }) {
    var posts = props.posts;
    var sidebar = posts.map(post => <li key={post.id.toString()}>{post.title}</li>);
    var content = posts.map(post => <div key={post.id.toString()}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>);
    return <div>
        <ul>{sidebar}</ul>
        {content}
    </div>
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
class List extends React.Component {
    render() {
        return <div>
            <p>List 1</p>
            <NumberList1 />
            <p>List 2</p>
            <NumberList2 numbers={[5, 7, 99, 31]} />
            <p>List 3</p>
            <NumberList3 numbers={[92, 54, 38, 11]} />
            <p>List 4</p>
            <NumberList4 numbers={[92, 54, 38, 11]} />
            <p>Blogs</p>
            <Blogs posts={posts} />
        </div>;
    }
}

export default List;