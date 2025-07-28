export type BehavioralVerificationInitReq = {
    key: string
    service: string
    type: string
}

export type BehavioralVerificationInitResp = {
    data: {
        id: string
        content: string
        answer: string
        img: string
    }
}

export type BehavioralVerificationVerifyReq = {
    id: string
    service: string
    type: string
    verify_code: string
}

export type BehavioralVerificationVerifyResp = {
    data: {
        result: boolean
    }
}

export type SmsInitReq = {
    key: string
    service: string
    type: string
    zone: string
    phone: string
}

export type SmsInitResp = {
    data: {
        status: string
    }
}

export type SmsVerifyReq = {
    service:string
    type:string
    zone:string
    phone:string
    verify_code:string
}

export type SmsVerifyResp = {
    data:{
        result:boolean
    }
}
