import React, { useEffect, useState } from 'react'
import { Row } from 'reactstrap';

import { EventSourcePolyfill } from 'event-source-polyfill';

import { withRouter } from 'react-router-dom';

import Get from '../common/Get';
import withApiCall from '../common/withApiCall';

import DeviceChart from './DeviceChart';

const getData = (data) => data.reduce((pv, cv) => {
	pv.humidity.push(parseFloat(cv.humidity.avg));
	pv.temperature.push(parseFloat(cv.temperature.avg));
	pv.time.push(cv.time.substr(0, 5));
	return pv;

}, { temperature: [], humidity: [], time: [] });

const lastResults = 10;


export const TrackContent = ({
	//match: { params: { deviceId } },
	data,
	...props }) => {
	let defaultData = [];
	if (data) {
		defaultData = data["hydra:member"].map(x => x.message);
		defaultData = [...defaultData.slice(-lastResults)];
	}
	const [state, setState] = useState(defaultData);
	let { temperature, humidity, time } = getData(state);

	useEffect(() => {
		const url = new URL('.well-known/mercure', "https://api.ventamark.net:3000");
		url.searchParams.append('topic', 'https://api.ventamark.net/messages/PIMENTEL_1');
		//const deviceId = "8c763f4c-4d0e-1fc0-d9b8-af46a3755078";
		//const deviceMessages = 'https://api.ventamark.net/api/messages?device=@deviceId&page=1'.replace("@deviceId", deviceId)
		//url.searchParams.append('topic', deviceMessages);

		const eventSource = new EventSourcePolyfill(url, {
			//withCredentials: true,
			headers: {
				//"Access-Control-Allow-Origin": "*",
				"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyIqIl19fQ.DRI-aui5vx2jymInq5K4X1hGibtbTM3cPRSJzpN7fjs`
			}
		});
		eventSource.onmessage = ({ data }) => {
			const dataJson = JSON.parse(data);
			const newState = state.length === lastResults ? [...state.slice(1, lastResults - 1), dataJson] : [...state, dataJson];
			setState(newState);
		};
		return () => {
			eventSource.close();
		}
	}, [state])
	return <>
		<Row width="100%">
			<DeviceChart data={temperature} title="temperature" time={time} />
		</Row>
		<Row width="100%">
			<DeviceChart data={humidity} title="humidity" time={time} />
		</Row>
	</>;
}


const Track = ({ match: { params: { deviceId } } }) => (
	<Get pathname={`/api/messages`} params={{
		page: 1,
		device: deviceId
	}
	}
		name="TrackView">
		<TrackContent />
	</Get>
)

/* 
const Track = (props) => (

	<TrackContent />
) */

export default withRouter(withApiCall(Track))
