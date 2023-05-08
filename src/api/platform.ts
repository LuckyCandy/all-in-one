import { post } from "~/utils/http";

interface PlatformItem {
    "cookie": string
    "create_time": string,
    "id": number,
    "identifier": string,
    "plat_code": string,
    "update_time": string
}

interface PlatformInterface {
    list: () => Promise<PlatformItem[]>
}

class PlatformApi implements PlatformInterface {
    list(): Promise<PlatformItem[]> {
        return post<PlatformItem[]>('/account/list', {
            page_num: 1, page_size: 300
        })
    }
    create(identifier: string, plat_code: string) {
        return post('/account/create', {
            identifier, plat_code
        })
    }
}

export default PlatformApi