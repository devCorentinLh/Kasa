import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h2 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                        src={arrow}
                        alt="show content"
                    />
                </h2>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}
