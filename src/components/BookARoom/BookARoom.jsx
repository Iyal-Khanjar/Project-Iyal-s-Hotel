import React, { useState, useEffect } from 'react';
import './Rooms.css'

import Payment from './Payment/payment';
import img1 from './roomImg/img1.jpg'
import img2 from './roomImg/img2.jpg'
import img3 from './roomImg/img3.jpg'
import img4 from './roomImg/img4.jpg'
import img5 from './roomImg/img5.jpg'
import img6 from './roomImg/img6.jpg'
import img7 from './roomImg/img7.jpg'
import img8 from './roomImg/img8.jpg'
import img9 from './roomImg/img9.jpg'
import img10 from './roomImg/img10.jpg'
import img11 from './roomImg/img11.jpg'
import img12 from './roomImg/img12.jpg'



const Rooms = () => {
    // eslint-disable-next-line
    const [room, setRoom] = useState([
        {
            id: 1,
            stringId: 'Single',
            img: img1,
            type: 'Single 150$'
        },
        {
            id: 2,
            stringId: 'Single',
            img: img2,
            type: 'Single 150$'
        },
        {
            id: 3,
            stringId: 'Single',
            img: img3,
            type: 'Single 150$'
        },
        {
            id: 4,
            stringId: 'Single',
            img: img4,
            type: 'Single 150$'
        },
        {
            id: 5,
            stringId: 'Double',
            img: img5,
            type: 'Double 250$'
        },
        {
            id: 6,
            stringId: 'Double',
            img: img6,
            type: 'Double 250$'
        },
        {
            id: 7,
            stringId: 'Double',
            img: img7,
            type: 'Double 250$'
        },
        {
            id: 8,
            stringId: 'Double',
            img: img8,
            type: 'Double 250$'
        },
        {
            id: 9,
            stringId: 'Family',
            img: img9,
            type: 'Family 450$'
        },
        {
            id: 10,
            stringId: 'Family',
            img: img10,
            type: 'Family 450$'
        },
        {
            id: 11,
            stringId: 'Family',
            img: img11,
            type: 'Family 450$'
        },
        {
            id: 12,
            stringId: 'Family',
            img: img12,
            type: 'Family 450$'
        }
    ])
    const [copyRoom, setCopyRoom] = useState(null)
    const [roomType, setRoomType] = useState('All')
    const [money, setMoney] = useState(0)
    const [toPay, setToPay] = useState(false)
    const [showCopy, setShowCopy] = useState(true)

    const handlePeriodChange = (e) => {
        setRoomType(e.target.value);
        setShowCopy(false)

    }
    useEffect(() => {
        if (roomType === 'All') {
            setCopyRoom(room)
        } else {
            const copy = room.filter(item => {
                return item.stringId.includes(roomType)
            })
            setCopyRoom(copy)
        }
        // eslint-disable-next-line
    }, [roomType])

    const pay = () => {
        setToPay(!toPay)
    }
    const BookARoom = (e) => {
        e.target.id === 'Single' ? setMoney(150) :
            e.target.id === 'Double' ? setMoney(250) :
                setMoney(450)
    }
    return (
        <div>

            {
                toPay ? <div>
                    <input className='getBack' type="button" value='Get Back' onClick={pay} />
                    <Payment />
                </div> :
                    <div className='containAll'>
                        <div className='searchRooms'>
                            <h1>Search Rooms</h1>
                        </div>
                        <div className='searchAndMoney'>

                            <div className='fillterForm'>
                                <div className='formGroup'>
                                    <label htmlFor='type'>Room Type</label>
                                    <select onChange={handlePeriodChange} name="type" id="type">
                                        <option value="All" >All</option>
                                        <option value="Single">Single</option>
                                        <option value="Double">Double</option>
                                        <option value="Family">Family</option>
                                    </select>
                                </div>
                            </div>
                            <div className='moneyAmount'>
                                <label className='totalMoney' htmlFor='type'>Total Amount</label>
                                <div className='moneyAndBtn'>
                                  <span className='money'> {money}$</span>
                                    {money > 0 ? <input className='BookARoom' type="button" value={money === 150 ? 'Book A Single Room' : money === 250 ?
                                        'Book A Double Room' : 'Book A Family Room'} onClick={pay} /> : ''}
                                </div>
                            </div>
                        </div>
                        <div className='room1'>
                            {showCopy ? room.map(item => {
                                return <div key={item.id} className='imgAndName'>
                                    <img id={item.stringId} onClick={BookARoom} src={item.img} alt="my img" />
                                    <span>{item.type}</span>
                                </div>
                            }) : copyRoom.map(item => {
                                return <div key={item.id} className='imgAndName'>
                                    <img id={item.stringId} onClick={BookARoom} src={item.img} alt="my img" />
                                    <span>{item.type}</span>
                                </div>
                            })}
                        </div>
                    </div>}
        </div>
    );
}

export default Rooms;