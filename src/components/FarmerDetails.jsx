import React from "react";

const FarmerDetails = () => {
	const handleForm = (e) => {
		e.preventDefault();
		window.location.href = "/producer";
	};
	return (
		<div>
			{" "}
			<div className="form__container">
				<h3 className="title">Farmer Details</h3>

				<div>
					<form>
						<div className="row">
							<div className="label">
								<label htmlFor="FarmId">FarmerId </label>
								<br />
								<input className="input" type="text" placeholder="123" />
							</div>

							<div className="label">
								<label htmlFor="FarmerID">FarmerFirstName</label>
								<br />
								<input className="input" type="text" placeholder="John" />
							</div>

							<div className="label">
								<label htmlFor="Producer Name">FarmerMiddleName</label>
								<br />
								<input className="input" type="text" placeholder="kumar" />
							</div>
						</div>

						<div className="row">
							<div className="label">
								<label htmlFor="ProducerstateOrTerritory">FarmerLastName</label>
								<br />
								<input className="input" type="text" placeholder="singh" />
							</div>

							<div className="label">
								<label htmlFor="Producer Country">FarmerGender</label>
								<br />
								<select name="country" id="cattle">
									<option value="yes">Male</option>
									<option value="No">Female</option>
								</select>
							</div>

							<div className="label">
								<label htmlFor="hasProducerDateChange">MobileNumber</label>
								<br />
								<input className="input" type="text" placeholder="8885666777" />
							</div>
						</div>

						<div className="label">
							<label htmlFor="ProducerStartDate">HomeNumber</label>
						</div>
						<input className="input" type="text" placeholder="8833345567" />
						<div className="label">
							<label htmlFor="ProducerUnreservedStatus">address1</label>
						</div>
						<input className="input" type="text" placeholder="jugsalai" />
						<div className="label">
							<label htmlFor="ProducerTotalArea">Address2</label>
						</div>
						<input className="input" type="text" placeholder="hometown" />
						<div className="label">
							<label htmlFor="ProducerTotalCropArea">Email</label>
						</div>
						<input className="input" type="text" placeholder="4km" />
						<div className="label">
							<label htmlFor="ProducerTotalLiveStock">
								ProducerTotalLiveStock
							</label>
						</div>
						<input className="input" type="text" placeholder="4" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">Fax</label>
						</div>
						<input className="input" type="text" placeholder="#23545" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">CityVillage</label>
						</div>
						<input className="input" type="text" placeholder="ramgar" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">state</label>
						</div>
						<input className="input" type="text" placeholder="karnataka" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">Country</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">USA</option>
							<option value="Odisha">India</option>
							<option value="West Bengal">Nepal</option>
							<option value="karnataka">Australia</option>
						</select>
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">PostalCode</label>
						</div>
						<input className="input" type="text" placeholder="56007" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">
								Farmerabbreviation
							</label>
						</div>

						<input className="input" type="text" placeholder="karnataka" />
						<div className="label">
							<label htmlFor="ProducerTotalForestArea">HasActive</label>
						</div>
						<select name="cattle" id="cattle">
							<option value="Jharkhand">yes</option>
							<option value="Odisha">no</option>
						</select>
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

export default FarmerDetails;
