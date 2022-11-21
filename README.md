- ***npm install*** to install some needed packages
- ***npm start*** to run server
- API Documentation at ***http://localhost:3000/api/***
- Available end point ***http://localhost:3000/device-information***
- Example payload
```
{
    "deviceId": "ibm-00976C",
    "deviceType": "computer1.0.0",
    "deviceName": "VN1-1-4",
    "groupId": "49548881c4d2bea9",
    "dataType": "DATA",
    "data": {
        "fullPowerMode": false,
        "activePowerControl": false,
        "firmwareVersion": 1,
        "temperature": 21,
        "humidity": 53
    },
    "timestamp": 1629629040
}
```
or
```
{
"deviceId": "ibm-00976A",
"deviceType": "computer1.0.0",
"deviceName": "VN1-1-4",
"groupId": "49548881c4d2bea9",
"dataType": "DATA",
"data": {
"version": 3,
"messageType": "periodic",
"occupancy": false,
"stateChanged": 0
},
"timestamp": 1629629040
}
```
