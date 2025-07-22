import React, { useState } from 'react'
import { createContext } from 'react'

export const ProductContext=createContext()

const Context = (props) => {

    const [products, setproducts] = useState([
  {
    id: 1,
    name: "Idôle Eau de Parfum",
    images: ["/p7.jpg", "/p2.webp"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "A beautifully balanced fragrance with delicate jasmine and radiant rose, perfect for every-day elegance.",
    likes: 8,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 2,
    name: "Idôle L’Intense",
    images: ["/p9.jpg", "/p9h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "Strong and exhilarating, Idôle L’Intense fuses jasmine and velvet rose petals with a deep chypre base for a radiant signature.",
    likes: 12,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 3,
    name: "Idôle Aura",
    images: ["/p5.jpg", "/p5h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "Feel the radiance: sun-kissed vanilla and blooming roses create a luminous, addictive floral scent for bold personalities.",
    likes: 17,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 4,
    name: "Idôle Nectar",
    images: ["/p4.webp", "/p4h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "Juicy, sweet, and vibrant. Nectar’s gourmand notes blend sweet popcorn with rose and jasmine for pure femininity.",
    likes: 21,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 5,
    name: "Idôle Limited Edition",
    images: ["/p1.png", "/p1h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "A collector’s dream: limited flacon, precious rose essence, and pristine jasmine. Celebrate uniqueness with every spray.",
    likes: 24,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 6,
    name: "Idôle Eau de Toilette",
    images: ["/p6.png", "/p6h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "Fresh, sparkling, and clean. This Eau de Toilette revives the Idôle signature with airy citrus and delicate florals.",
    likes: 11,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 7,
    name: "Idôle Edition Fleur",
    images: ["/p8.webp", "/p8h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "Celebrate spring: Edition Fleur is a burst of floral tones—petals, fresh greens, a refined woody trail.",
    likes: 7,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 8,
    name: "Idôle Eau Privée",
    images: ["/p10.png", "/p10h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "Intimate, sensual, soft: Eau Privée blends musks and roses for a gentle, enveloping signature—perfect for night.",
    likes: 14,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
  {
    id: 9,
    name: "Idôle Collection Gift Set",
    images: ["/p11.png", "/p11h.png"],
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" }
    ],
    description:
      "The signature Idôle experience—gifted. This box brings together your favorite scents in a beautiful, ready-to-love set.",
    likes: 30,
    brand: "LANCOME",
    ingredients: [
      {
        image: "/roses.webp",
        title: "FOUR ROSES",
        desc: "Rose—a new area, sustainably sourced and tailor-made for this."
      },
      {
        image: "/jasmine.webp",
        title: "JASMINE",
        desc: "Spotless jasmine enhances the scent’s naturalness."
      },
      {
        image: "/chypre.webp",
        title: "CHYPRE ACCORD",
        desc: "Elegant chypre brings a unique, comforting feel."
      }
    ]
  },
])


  return (
    <ProductContext.Provider value={[products,setproducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context