'use server'

export async function loadMbtiData() {
    return mbtiList;
}

export async function getMyMbti(mbti: string) {
    const result = mbtiList.find((e) => e.mbti === mbti)
    return result
}

const mbtiList = [
    {
        "mbti": "INFJ",
        "type": "선의의 옹호자",
        "description": "조용하고 신비로우며 샘솟는 영감으로 지칠줄 모르는 이상주의자"
    },
    {
        "mbti": "INFP",
        "type": "열정적인 중재자",
        "description": "상냥한 성격의 소유자로 이타주의자인 동시에 건강하고 밝은 사회를 만드는 낭만형"
    },
    {
        "mbti": "ENFJ",
        "type": "정의로운 사회운동가",
        "description": "넘치는 카리스마와 그에 따른 영향력으로 청중을 압도하는 리더형"
    },
    {
        "mbti": "ENFP",
        "type": "재기발랄한 활동가",
        "description": "창의적이며 항상 웃음 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자"
    },
    {
        "mbti": "ISTJ",
        "type": "청렴결백한 논리주의자",
        "description": "사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자형"
    },
    {
        "mbti": "ISFJ",
        "type": "용감한 수호자",
        "description": "소중한 이들을 수호하는데 심혈을 기울이는 헌신적이며 성실한 방어자형"
    },
    {
        "mbti": "ESTJ",
        "type": "엄격한 관리자",
        "description": "사물이나 사람을 관리하는데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형"
    },
    {
        "mbti": "ESFJ",
        "type": "사교적인 외교관",
        "description": "타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형"
    },
    {
        "mbti": "INTJ",
        "type": "용의주도한 전략가",
        "description": "상상력이 풍부하며 철두철미한 계획을 세우는 전략가형"
    },
    {
        "mbti": "INTP",
        "type": "논리적인 사색가",
        "description": "끊임없이 새로운 지식에 목마른 혁신가형"
    },
    {
        "mbti": "ENTJ",
        "type": "대담한 통솔자",
        "description": "대담하고 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을 경우 새로운 방아늘 창출하는 리더형"
    },
    {
        "mbti": "ENTP",
        "type": "뜨거운 논쟁을 즐기는 변론가",
        "description": "지적인 도전을 두려워하지 않는 똑똑한 호기심형"
    },
    {
        "mbti": "ISTP",
        "type": "만능 재주꾼",
        "description": "대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형"
    },
    {
        "mbti": "ISFP",
        "type": "호기심 많은 예술가",
        "description": "항상 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형"
    },
    {
        "mbti": "ESTP",
        "type": "모험을 즐기는 사업가",
        "description": "벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형"
    },
    {
        "mbti": "ESFP",
        "type": "자유로운 영혼의 연예인",
        "description": "주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에니지가 넘치는 연예인형"
    }
]
