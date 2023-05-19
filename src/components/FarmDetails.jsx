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
				<form>
					<div className="row">
						<div className="column">
							<label htmlFor="FarmId" className="label">
								FarmId
							</label>

							<input className="input" type="text" placeholder="123" />
							<div>
								<label htmlFor="FramerStateOrTerritory" className="label">
									FramerStateOrTerritory
								</label>
								<select name="cattle" id="cattle">
									<option value="Jharkhand">Jharkhand</option>
									<option value="Odisha">Odisha</option>
									<option value="West Bengal">West Bengal</option>
									<option value="karnataka">karnataka</option>
								</select>
							</div>
						</div>

						<div>
							<label htmlFor="FramerStateOrTerritory" className="label">
								FramerStateOrTerritory
							</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">Jharkhand</option>
								<option value="Odisha">Odisha</option>
								<option value="West Bengal">West Bengal</option>
								<option value="karnataka">karnataka</option>
							</select>
						</div>

						<div></div>
					</div>
					<div className="row">
						<div>
							<label htmlFor="FarmCountry" className="label">
								FarmCountry
							</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">India</option>
								<option value="Odisha">Australia</option>
								<option value="West Bengal">USA</option>
								<option value="karnataka">China</option>
							</select>
						</div>
						<div>
							<label htmlFor="Producer Country" className="label">
								Farm GeoLocation
							</label>
							<input className="input" type="text" placeholder="india" />
						</div>
						<div className="label">
							<label htmlFor="hasProducerDateChange">FarmStrainType</label>
							<input className="input" type="text" placeholder="03/07/2023" />
						</div>
					</div>
					<div className="row">
						<div className="label">
							<label htmlFor="ProducerStartDate">FarmInAcres</label>
							<input className="input" type="text" placeholder="02/05/2021" />
						</div>

						<div className="label">
							<label htmlFor="ProducerUnreservedStatus">
								FarmRegistrationNumber
							</label>
							<input className="input" type="text" placeholder="45621" />
						</div>

						<div className="label">
							<label htmlFor="HasFarmOrganic">HasFarmOrganic</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">yes</option>
								<option value="Odisha">No</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="label">
							<label htmlFor="ProducerTotalCropArea">
								FarmProducerTARecieved
							</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">yes</option>
								<option value="Odisha">No</option>
							</select>
						</div>

						<div className="label">
							<label htmlFor="ProducerTotalLiveStock">
								ProducerTotalLiveStock
							</label>
							<input className="input" type="text" placeholder="4" />
						</div>

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmProducerIncentiveAmount
							</label>
							<input className="input" type="text" placeholder="4" />
						</div>
					</div>

					<div className="row">
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmIncentiveReason
							</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">yes</option>
								<option value="Odisha">No</option>
							</select>
						</div>

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmIncentiveStructure
							</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">yes</option>
								<option value="Odisha">No</option>
							</select>
						</div>

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">FarmIncentiveType</label>
							<select name="cattle" id="cattle">
								<option value="Jharkhand">yes</option>
								<option value="Odisha">No</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmPaymentOnEnrollment
							</label>
							<input className="input" type="text" placeholder="4" />
						</div>

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmPaymentOnImplementation
							</label>
							<input className="input" type="text" placeholder="4" />
						</div>

						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								FarmPaymentOnHarvest
							</label>
							<input className="input" type="text" placeholder="4" />
						</div>
					</div>
					<div className="row">
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">FarmPaymentOnMMRV</label>
							<input className="input" type="text" placeholder="4" />
						</div>
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">FarmPaymentOnSale</label>
							<input className="input" type="text" placeholder="4" />
						</div>
					</div>

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

export default FarmDetails;
