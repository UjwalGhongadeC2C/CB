
//const BASE_URL = "http://192.168.1.172:4000/api"
//const IP = "192.168.1.172:4000/api"

//1. Environment 172 - 3000 - "to do Parag"
// const IP = "192.168.1.172:3000"
// const MANAGE_IQ_BASE_URL = "192.168.1.172:3000/api"
// const CB_API_BASE_URL = "192.168.1.172:3001/api"

//2. Environment 165 - 3000
// const IP = "192.168.1.68:4000"
// const MANAGE_IQ_BASE_URL = "192.168.1.68:4000/api"
// const CB_API_BASE_URL = "192.168.1.68:3001/api"


const IP = "thecloudsbrain.com"
const MANAGE_IQ_BASE_URL = "thecloudsbrain.com/api"
const CB_API_BASE_URL = "node.thecloudsbrain.com/api"
const CB_API_MIGRATION = "https://click2cloudmigration.thecloudsbrain.com"


//3. Environment 165 - 40000
// const IP = "192.168.1.165:4000"
// const MANAGE_IQ_BASE_URL = "192.168.1.165:4000/api"
// const CB_API_BASE_URL = "192.168.1.165:4001/api"

//Username
//1. Developer
//2. Tester
//3. DavidWebber



const API = {

    
	USER_LOGIN                      : 			 MANAGE_IQ_BASE_URL + "/auth?requester_type=ui",
	
    GET_USER_DETAILS                  :                 MANAGE_IQ_BASE_URL,
    
    GET_PROVIDER                      :                 CB_API_BASE_URL + "/v1/get_dashboard_provider_count?group_name=",

    //GET_VMS_FOR_PROVIDER              :                 IP + "/api/vms?filter[]=ems_id=",

    GET_VMS_FOR_PROVIDER               :                IP + "/api/vms?attributes=name,vendor,power_state,hardware,disks,availability_zone,operating_system,flavor&filter[]=ems_id=",
    
    GET_ALL_NOTIFICATIONS              :                CB_API_MIGRATION + "/migration-studio/all-job-status-for-notification",


}

export default API

