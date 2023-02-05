import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoadingSpinner from './LoadingSpinner';
import MyTable from './MyTable'


function UncontrolledExample() {

    const [category, setCategory] = useState("users");
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
            GetData()
        }, [category]
    )

    return (
        <>

            <Tabs
                defaultActiveKey={category}
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={(e) => handleClick(e)}>

                <Tab eventKey="users" title="Users" onClick={handleClick}>
                </Tab>


                <Tab eventKey="posts" title="Posts" onClick={handleClick}>
                </Tab>

                <Tab eventKey="todos" title="Todos" onClick={handleClick}>
                </Tab>

            </Tabs>
            {isLoading ? <LoadingSpinner /> : <MyTable content={content} />}
        </>
    );

    function handleClick(e) {
        setCategory(e);
    }

    function GetData() {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/" + category).then(res => res.json()).then(
            json => {
                setContent(json);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            }

        );
    }

}

export default UncontrolledExample;