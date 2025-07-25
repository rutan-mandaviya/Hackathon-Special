import React, { useState } from 'react'
import { createContext } from 'react'

export const ProductContext=createContext()

const Context = (props) => {

    const [products, setproducts] = useState([
  {
    id: 1,
    name: "Idôle Eau de Parfum",
    images: ["/p7.png", "/p2.png"],
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
    name: "La Vie Est Belle Eau De",
    images: ["/p9.png", "/p9h.png"],
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
    name: "Hypnose Eau De Parfum",
    images: ["/p5.png", "/p5h.png"],
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
    name: "Miracle Eau De Parfum",
    images: ["/p4.png", "/p4h.png"],
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
    name: "Idôle Eau de Parfum",
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
    name: "La Nuit Eau De Parfum",
    images: ["/p3.png", "/p3h.png"],
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
    name: "Absoule Le Parfum",
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
    id: 8,
    name: "Tresor In Love",
    images: ["/p8.png", "/p8h.png"],
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
    id: 9,
    name: "Magie Noire Eau de Toilette",
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
    id: 10,
    name: "Lancome POEME Perfume",
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