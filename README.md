- ***npm install*** to install some needed packages
- ***npm start*** to run server
- API Documentation at ***http://localhost:3000/api/***
- Available end point ***http://localhost:3000/device-information***
- Example payload - For the ***data*** object inside payload, I did validate request following the example payload. But at this one I think it is just metadata, so I could just remove the validation and save everything it gives to database.
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
************
UPDATE:
- Please kindly update ***.env*** file config or create a database following the config or kindly run these SQL command. I am so sorry that I did not aware of this. I actually tried to setup docker for this one but it does not work so I did not push docker setup to this repo.
```
CREATE USER postgres WITH PASSWORD 'password';

CREATE DATABASE nestjs
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT ALL privileges on database nestjs TO postgres;

```
