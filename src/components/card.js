import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css'

function card(props){
    return(
        <div className='col-lg-4'>
            <div className='card mb-5 mb-lg-0'>
                <div className="card-body">
                    <h5 className='card-title text-muted text-uppercase text-center'>{props.title}</h5>
                    <h6 className='card-price text-center'>$ {props.price}<span className='period'> /month</span></h6>
                    <hr></hr>
                    <ul className='fa-ul'>
                        {
                            props.checked.map((val) => {
                                return <li><span className="fa-li"><FontAwesomeIcon icon="check"/></span>{val}</li>
                            })
                        }

                        {props.crossed ? (
                            props.crossed.map((val) => {
                                return <li className='text-muted'><span className="fa-li"><FontAwesomeIcon icon="times"/></span>{val}</li>
                            })
                        ) : ( null )
                        }
                    </ul>
                    <div className='d-grid'>
                        <a href='#' className='btn btn-primary text-uppercase'>button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;