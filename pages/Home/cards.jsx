import Link from "next/link"
const products = [
  {
    id: 1,
    name: 'photovoltaiques',
    href: '../produits/photovoltaiques',
    imageSrc: '/photovoltaiques.png',
    imageAlt: "photovoltaiques",
    details: "Chez Nous, nous croyons que l'énergie solaire est la voie à suivre pour alimenter les maisons et les entreprises de manière efficace et durable. Nous sommes convaincus que cette technologie offre de nombreux avantages pour nos clients",
  },
  {
    id: 2,
    name: 'Pompe à chaleur',
    href: '../produits/pompe',
    imageSrc: '/pompe.jpg',
    imageAlt: "Pompe à chaleur",
    details: "Chez Nous, nous sommes fiers de proposer des solutions de chauffage efficaces et écologiques pour les maisons et les entreprises. Les pompes à chaleur sont un excellent choix pour les propriétaires soucieux de réduire leur",
  },
  // {
  //   id: 3,
  //   name: 'Chauffage solaire / chauffe-eau solaire',
  //   href: '../produits/chauffage_solaire',
  //   imageSrc: '/chauffage_solaire.jpg',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: '$35',
  //   details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  // },
  {
    id: 4,
    name: 'Chauffe-eau thermodynamique',
    href: '../produits/chauffe_eau',
    imageSrc: '/chauffe-eau.jpg',
    imageAlt: "Chauffe-eau thermodynamique",
    details: "Si vous êtes à la recherche d'une solution de chauffage de l'eau efficace et rentable pour votre maison, notre système de chauffe-eau thermodynamique est peut-être la solution idéale pour vous. Chez Nous, nous avons une grande ",
  },
  
]
export default function Cards(){
    return(

      //   <div claassName="flex justify-center">    
      //   <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      //   <img
      //     className="w-full" 
      //     src={'/cellule-solaire.png'} 
      //     alt="Sunset in the mountains" 
      //     />
      //   <div className="px-6 py-4">
      //     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      //     <p className="text-gray-700 text-base">
      //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      //     </p>
      //   </div>
      //   <div className="px-6 pt-4 pb-2">
      //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      //   </div>
      // </div>
      // </div>
      <div>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nos Produits</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl text-gray-700">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.details}</p>
                  <Link href={''} color="bleu">En savoir plus...</Link>
                </div>
                
              </div>
              
            </div>
            
          ))}
          
        </div>
        
      </div>
    </div>
    
  
</div>

    )
   

}