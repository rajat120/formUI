import React from "react";
import "../components/ProducerDetails.css";

const ProducerDetails = () => {
	const handleForm=(e)=>{
  e.preventDefault();
  
	}
	return (
		<div className="form__container">
			<h3 className="title">Producer Details</h3>

			<div>
				<form>
					<div className="label">
						<label htmlFor="FarmId">FarmId </label>
					</div>
					<input className="input" type="text" placeholder="123" />
					<div className="label">
						<label htmlFor="FarmerID">Farmer ID</label>
					</div>
					<input className="input" type="text" placeholder="12345" />
					<div className="label">
						<label htmlFor="Producer Name">Producer Name</label>
					</div>
					<input className="input" type="text" placeholder="bangalore" />
					<div className="label">
						<label htmlFor="ProducerstateOrTerritory">
							ProducerstateOrTerritory
						</label>
					</div>
					<select name="cattle" id="cattle">
						<option value="Jharkhand">Jharkhand</option>
						<option value="Odisha">Odisha</option>
						<option value="West Bengal">West Bengal</option>
						<option value="karnataka">karnataka</option>
					</select>

					<div className="label">
						<label htmlFor="Producer Country">Producer Country</label>
					</div>
					<input className="input" type="text" placeholder="india" />
					<div className="label">
						<label htmlFor="hasProducerDateChange">HasProducerDateChange</label>
					</div>
					<input className="input" type="text" placeholder="03/07/2023" />
					<div className="label">
						<label htmlFor="ProducerStartDate">ProducerStartDate</label>
					</div>
					<input className="input" type="text" placeholder="02/05/2021" />
					<div className="label">
						<label htmlFor="ProducerUnreservedStatus">
							ProducerUnreservedStatus
						</label>
					</div>
					<select name="country" id="cattle">
						<option value="yes">Yes</option>
						<option value="No">No</option>
					</select>
					<div className="label">
						<label htmlFor="ProducerTotalArea">ProducerTotalArea</label>
					</div>
					<input className="input" type="text" placeholder="2km" />
					<div className="label">
						<label htmlFor="ProducerTotalCropArea">ProducerTotalCropArea</label>
					</div>
					<input className="input" type="text" placeholder="4km" />
					<div className="label">
						<label htmlFor="ProducerTotalLiveStock">
							ProducerTotalLiveStock
						</label>
					</div>
					<input className="input" type="text" placeholder="4" />
					<div className="label">
						<label htmlFor="ProducerTotalForestArea">
							ProducerTotalForestArea
						</label>
					</div>
					<input className="input" type="text" placeholder="4" />
					<div className="btn">
						<button className="btn_submit" type="submit" onClick={handleForm}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProducerDetails;
