import { AlignJustify, Check, Gitlab, ParkingSquare } from "lucide-react"

const brandList = [
  {
    id:'adidas',
    name:'Adidas',
    logo: <AlignJustify />,
    navigate: '/shop/products?brand=adidas'
  },
  {
    id:'nike',
    name:'Nike',
    logo: <Check />,
    navigate: '/shop/products?brand=nike'
  },
  {
    id:'puma',
    name:'Puma',
    logo: <ParkingSquare />,
    navigate: '/shop/products?brand=puma'
  },
  {
    id:'reebok',
    name:'Reebok',
    logo: <Gitlab />,
    navigate: '/shop/products?brand=reebok'
  }
]

export default brandList