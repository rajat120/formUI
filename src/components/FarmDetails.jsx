import React from "react";

const FarmDetails = () => {
	const handleForm = (e) => {
		e.preventDefault();
		window.location.href = "/farmer";
	};
	return (
		<div>
			<div className="form__container">
				<h3 className="title">Farm Details</h3>

				<div>
					<form>
						<div className="label">
							<label htmlFor="FarmId">FarmId </label>
						</div>
						<input className="input" type="text" placeholder="123" />
						<div className="label">
							<label htmlFor="FarmerID">FarmerID</label>
						</div>
						<input className="input" type="text" placeholder="12345" />
						<div className="label">
							<label htmlFor="FramerStateOrTerritory">
								FramerStateOrTerritory
							</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">Jharkhand</option>
							<option value="Odisha">Odisha</option>
							<option value="West Bengal">West Bengal</option>
							<option value="karnataka">karnataka</option>
						</select>

						<div className="label">
							<label htmlFor="FarmCountry">FarmCountry</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">India</option>
							<option value="Odisha">Australia</option>
							<option value="West Bengal">USA</option>
							<option value="karnataka">China</option>
						</select>

						<div className="label">
							<label htmlFor="Producer Country">Farm GeoLocation</label>
						</div>
						<input className="input" type="text" placeholder="india" />
						<div className="label">
							<label htmlFor="hasProducerDateChange">FarmStrainType</label>
						</div>
						<input className="input" type="text" placeholder="03/07/2023" />
						<div className="label">
							<label htmlFor="ProducerStartDate">FarmInAcres</label>
						</div>
						<input className="input" type="text" placeholder="02/05/2021" />
						<div className="label">
							<label htmlFor="ProducerUnreservedStatus">
								FarmRegistrationNumber
							</label>
						</div>
						<input className="input" type="text" placeholder="45621" />
						<div className="label">
							<label htmlFor="HasFarmOrganic">HasFarmOrganic</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">yes</option>
							<option value="Odisha">No</option>
						</select>
						<div className="label">
							<label htmlFor="ProducerTotalCropArea">
								FarmProducerTARecieved
							</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">yes</option>
							<option value="Odisha">No</option>
						</select>
						<div className="label">
							<label htmlFor="ProducerTotalLiveStock">
								ProducerTotalLiveStock
							</label>
						</div>
						<input className="input" type="text" placeholder="4" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmProducerIncentiveAmount
							</label>
						</div>
						<input className="input" type="text" placeholder="4" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmIncentiveReason
							</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">yes</option>
							<option value="Odisha">No</option>
						</select>
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmIncentiveStructure
							</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">yes</option>
							<option value="Odisha">No</option>
						</select>
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">FarmIncentiveType</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">yes</option>
							<option value="Odisha">No</option>
						</select>

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmPaymentOnEnrollment
							</label>
						</div>
						<input className="input" type="text" placeholder="4" />

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmPaymentOnImplementation
							</label>
						</div>
						<input className="input" type="text" placeholder="4" />

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmPaymentOnHarvest
							</label>
						</div>
						<input className="input" type="text" placeholder="4" />

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">FarmPaymentOnMMRV</label>
						</div>

						<input className="input" type="text" placeholder="4" />

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">FarmPaymentOnSale</label>
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
		</div>
	);
};

export default FarmDetails;
