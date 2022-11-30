import { Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import { LoadingContext } from '../../contexts/Loading/LoadingContext';
import "./styles.css"

const Loading = () => {

    const { isVisibility } = useContext(LoadingContext)
	
	return (
		<Modal id="modal-loading" animation={false} show={isVisibility} dialogClassName='loading-modal' centered >
			<Modal.Body>
				<div className='d-flex justify-content-center'>
					<div className="spinner-border loading text-light" role="status">
						<span className='sr-only'></span>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default Loading;