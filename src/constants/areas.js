export class Areas {
  static areas = [
    { name: "전국", value: "all" },
    { name: "서울", value: "seoul" },
    { name: "부산", value: "busan" },
    { name: "대구", value: "daegu" },
    { name: "인천", value: "incheon" },
    { name: "광주", value: "gwangju" },
    { name: "대전", value: "daejeon" },
    { name: "울산", value: "ulsan" },
    { name: "세종", value: "sejong" },
    { name: "경기", value: "gyeonggi" },
    { name: "강원", value: "gangwon" },
    { name: "충북", value: "chungbuk" },
    { name: "충남", value: "chungnam" },
    { name: "전북", value: "jeonbuk" },
    { name: "전남", value: "jeonnam" },
    { name: "경북", value: "gyeongbuk" },
    { name: "경남", value: "gyeongnam" },
    { name: "제주", value: "jeju" },
  ];

  static #nameToValue = new Map(
      Areas.areas.map(area => [ area.name, area.value ])
  );

  static #valueToName = new Map(
      Areas.areas.map(area => [ area.value, area.name ])
  );

  static getName(value) {
    return Areas.#valueToName.get(value) ?? null;
  }

  static getValue(name) {
    return Areas.#nameToValue.get(name) ?? null;
  }

  static getAll() {
    return Areas.areas;
  }
}