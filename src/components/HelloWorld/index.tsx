import React from 'react';
import styles from './styles.module.css'

const HelloWorld: React.FC = () => {
    return (
        <div className={styles.hello}>
            <h1 className={styles.helloH1}>Hello, world!</h1>
        </div>
    );
}

export default HelloWorld;