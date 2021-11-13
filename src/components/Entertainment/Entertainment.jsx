import './Entertainment.css'
import carImg from './imgs/car.jpg'
import bicycleImg from './imgs/bicycle.jpg'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Entertainment = () => {
    const [cars, setCars] = useState([])
    const [bicycle, setBicycle] = useState([])
    const [showcar, setShowcar] = useState(false)
    const [showbicycle, setShowBicycle] = useState(false)
    const [accept, setAccept] = useState(false)
    const [id, setId] = useState('')

    useEffect(() => {
        axios.get('https://617fc944055276001774fc61.mockapi.io/car/')
            .then((res) => {
                setCars(res.data)
            })
        axios.get('https://617fc944055276001774fc61.mockapi.io/bicycle/')
            .then((res) => {
                setBicycle(res.data)
            })


    }, [])
    const acceptIt = () => {
        setAccept(true)
        setShowcar(false)
        setShowBicycle(false)
    }
    const showcars = async () => {
        setShowcar(true)
        setAccept(false)
        if (!cars.length > 0) {
            const res = await axios.post('https://617fc944055276001774fc61.mockapi.io/car/', id);
            setId(res.data.id)
            let newData = res.data;
            const stateList = [...cars];
            stateList.push(newData);
            setCars(stateList);
        }
    }
    const showbicycles = async () => {
        setShowBicycle(true)
        setAccept(false)
        if (!bicycle.length > 0) {
            const res = await axios.post('https://617fc944055276001774fc61.mockapi.io/bicycle/', id);
            setId(res.data.id)
            let newData = res.data;
            const stateList = [...bicycle];
            stateList.push(newData);
            setBicycle(stateList);
        }
    }
    const deleteHandlerCar = async (id) => {
        setShowcar(false)
        const deleteRes = await axios.delete('https://617fc944055276001774fc61.mockapi.io/car/' + id);
        if (deleteRes.status === 200) {
            const stateList = [...cars];
            let resultOfNonDeleted = stateList.filter((user) => {
                return user.id !== id;
            });
            setCars(resultOfNonDeleted);
        }
    };
    const deleteHandlerbicycle = async (id) => {
        setShowBicycle(false)
        const deleteRes = await axios.delete('https://617fc944055276001774fc61.mockapi.io/bicycle/' + id);
        if (deleteRes.status === 200) {
            const stateList = [...bicycle];
            let resultOfNonDeleted = stateList.filter((user) => {
                return user.id !== id;
            });
            setBicycle(resultOfNonDeleted);
        }
    };
    return (
        <div className='entertainment'>
            <div className='entertainmentTitle'>
                <h1>Hello here you can select witch activities you want</h1>
            </div>
            <div className='gridPicActivities'>
                <img src={carImg} alt="car" onClick={showcars} />
                <img src={bicycleImg} alt="" onClick={showbicycles} />
            </div>

            {
                showcar ? <>
                    {cars.map((element) => {
                        return (<div> Car
                            <ul className="userList" key={element.id}>
                                <li>{`Id: ${element.id}`}</li>
                                <li>{`Model: ${element.type}`}</li>
                                <li>{`Price: ${element.price}$`}</li>
                                <li> <input type="button" value="Delete" onClick={() => {
                                    deleteHandlerCar(element.id);
                                }} /></li>
                            </ul>
                            <p>if you dont want this car delete it</p>
                        </div>
                        );
                    })}

                </> : ''

            }
            {
                showbicycle ? <>
                    {bicycle.map((element) => {
                        return (<div> bicycle
                            <ul className="userList" key={element.id}>
                                <li>{`Id: ${element.id}`}</li>
                                <li>{`Model: ${element.type}`}</li>
                                <li>{`Price: ${element.price}$`}</li>
                                <li> <input type="button" value="Delete" onClick={() => {
                                    deleteHandlerbicycle(element.id);
                                }} /></li>
                            </ul>
                            <p>if you dont want this bicycle delete it</p>
                        </div>
                        );
                    })}

                </> : ''
            }
            {
                showcar ? <input className='addThisActivities' type="button" value="Add this activitie" onClick={acceptIt} /> :
                    showbicycle ? <input className='addThisActivities' type="button" value="Add this activitie" onClick={acceptIt} /> : ''
            }
            {
                accept ? <p> Thanks this has been added to the total payment including the room</p> : ''
            }
        </div>
    );
}

export default Entertainment;