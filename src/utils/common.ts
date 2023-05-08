// 内容平台
export interface Platform {
    name: string,
    logo: string,
    code: string
}
export const Platforms:Platform[] = [
    { name: '抖音', logo: '/imgs/logo_dou_yin.png', code: 'dou_yin' },
    { name: '快手', logo: '/imgs/logo_kuai_shou.png', code: 'kuai_shou'  },
    { name: '西瓜视频', logo: '/imgs/logo_xi_gua.png', code: 'xi_gua' },
    { name: '小红书', logo: '/imgs/logo_xiao_hong_shu.png', code: 'xiao_hong_shu' }
]

export function FindPlatformByCode(code: string): Platform {
    for (const each of Platforms) {
        if (each.code == code) {
            return each
        }
    }
    throw new Error('平台码未找到！');
}