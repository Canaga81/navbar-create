export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Companines",
    to: "/companines",
    children: [
      {
        label: "Yusuf-UM MMC",
        to: "/yusuf-um mmc",
        children: [
          {
            label: "Su əsaslı  boyalar",
            to: "/suəsaslıboyalar",
          },
          {
            label: "Sellozik boyalar",
            to: "/sellozikboyalar",
          },
          {
            label: "Hammenton boyalar",
            to: "/hammentonboyalar",
          },
          {
            label: "Sintetik boyalar",
            to: "/sintetikboyalar",
          },
          {
            label: "Sənaye boyaları",
            to: "/sənayeboyaları",
          },
          {
            label: "Sellozik ve Sintetik tiner",
            to: "/sellozikvesintetiktiner",
          },
        ],
      },
      {
        label: "Unity MMC",
        to: "/unit mmc",
        children: [
          {
            label: "Maliyyə və Mühasibatlıq",
            to: "/maliyyə və mühasibatlıq",
          },
          {
            label: "Vergi Audit ",
            to: "/vergi audit",
          },
          {
            label: "Gömrük rəsmiləşdirilməsi və Broker xidmətləri",
            to: "/gömrük rəsmiləşdirilməsi və broker xidmətləri",
          },
          {
            label: "Dizayn Xidmətləri",
            to: "/dizayn xidmətləri",
          },
        ],
      },
      {
        label: "EH Trade",
        to: "/eh trade",
        children: [
          {
            label: "Toz boya məhsullar",
            to: "/tozboya məhsullar",
          },
          {
            label: "Zımpara və Sumpata kağızı ",
            to: "/zımparavəsumpatakağızı",
          },
          {
            label: "Boya ruloları və fırçaları",
            to: "/boyarulolarıvəfırçaları",
          },
          {
            label: "Xırdavatlar",
            to: "/xırdavatlar",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default menus;