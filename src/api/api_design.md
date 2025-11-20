# Get the online/offline status of the gateway
Mock this up to always return online.  Add a comment in the code that in a real implmentation we should ask ra-telemetry latest values for model=lifecycle_events, gsn=<gateway SN>,  fields=["is_online"]. A value of 1 means the gateway is currently online, 0 means offline.

# Get the equipment to guardian linkage

Pattern this after the RA-Physical method `:GetEquipmentsAtSite` using this interface.
```
message GetEquipmentsAtSiteRequest {
  string request_id = 1;
  uint32 site_id = 2; // 站点 ID
}

message Equipment {
  string id = 1;
  string sn = 2;
  string md = 3;
  string md_name = 4;
  uint32 site_id = 5;
  bool is_primary = 7;
  string product_type = 8;
  optional string sub_product_type = 9;
  optional string software_version = 10;
  optional string arm_sub_product_type = 11;
  optional string arm_software_version = 12;
  optional string dsp_sub_product_type = 13;
  optional string dsp_software_version = 14;
  repeated Firmware firmwares = 15;
}

message EquipmentMapEntry {
  string gateway_sn = 1;
  repeated Equipment equipments = 2;
}

message GetEquipmentsAtSiteResponse {
  repeated EquipmentMapEntry items = 1;
  bool success = 2;
  string message = 3;
  string request_id = 4;
  uint32 code = 5;
}
```

Use this to show the list of serial numbers.  It also shows you which inverter sn is attached to which gateway which you'll need later on.

# Get the point themes

Given a siteID, get the point themes json from the mock back end.  



# Get the point values

Given a siteID and product serial number (PSN), get the point values from the mock back end.  
This should load the latest values from 40104 model, given the PSN.  

# Refactor the mock API

These mock endpoints should be replaced with a single "SendCGICommandToGateway".  The front end should construct the CGI command payload and send it to that mock api endpoint.  
 - `ReadPointRequest`
 - `ReadPointResponse`
 - `WritePointRequest`
 - `WritePointResponse`
 - `InvokeCommandRequest`
 - `InvokeCommandResponse`

These mock endpoints can be removed as they are not needed
- `BatchReadRequest`
- `BatchReadResponse`
- `BatchWriteRequest`
- `BatchWriteResponse`