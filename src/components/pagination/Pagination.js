import React, { useEffect, useState } from 'react'
import './Pagination.css'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setcounter] = useState(1)
    const [numberOfButton, setnumberOfButton] = useState((Math.ceil(total / showPerPage)))

    useEffect(() => {
        const value = showPerPage * counter
        onPaginationChange(value - showPerPage, value)

    }, [counter])
    const onButtonClick = (type,e) => {
      e.preventDefault()
      if (type === "prev") {
        if (counter === 1) {
          setcounter(1)
            } else {
                setcounter(counter - 1)
              }

            } else if (type === "next")
             {
            if (numberOfButton === counter)
             {
                setcounter(counter)
            } else {
                setcounter(counter + 1)
            }
        }
    }
    return (
        <div className='d-flex justify-content-center' id="content">
 
            <nav aria-label="Page navigation example" >
                <ul className="pagination" >
                    <li className="page-item"
                        onClick={(e) => onButtonClick("prev",e)}
                    ><a className="page-link" href={showPerPage}>Previous</a></li>

                    {
                        new Array(numberOfButton).fill('').map((val, index) => (
                            <li className={`page-item ${index + 1 === counter ? "active" : null}`}><a className="page-link" href={showPerPage}
                                onClick={(e) => {e.preventDefault(); setcounter((index + 1))}}>{index + 1}</a></li>
                        ))
                    }
                    <li className="page-item"
                        onClick={(e) => onButtonClick("next",e)}
                    ><a className="page-link" href={showPerPage}>Next</a></li>
                </ul>
            </nav>
          
        </div>
    )
}

export default Pagination